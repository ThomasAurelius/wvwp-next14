"use server"
import { connect } from "mongoose";
import { signIn, signOut } from "./auth";
import { connectToDb } from "./utils";
import { User, Post, Player } from "./models";
import bcrypt from "bcryptjs";

import { revalidatePath } from "next/cache";

export const handleGithubLogin = async () => {
  "use server";
  await signIn('github')
  };

  export const handleLogout = async () => {
  "use server";
  await signOut();
  };

  export const register = async (previousState, formData) => {
    const { firstname, lastname, street, city, state, zip, phone, email, password, confirmPassword, image } = Object.fromEntries(formData);

    if (password !== confirmPassword) {
      return { error: "Passwords don't match" };
    }

    try {
      connectToDb();

      const user = await User.findOne({email});

      if (user) {
        return "Username already exists"
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        firstname,
        lastname,
        phone,
        email,
        street, 
        city,
        state,
        zip,
        password: hashedPassword,
        image,
      });
      await newUser.save();
      console.log('saved to db');

      return { success: true}
    }catch (error) {
      console.log(error);
      return { error: "Something went wrong" }; 
    }
  }

  export const login = async ( previousState, formData) => {
    const { email, password } = Object.fromEntries(formData);

    try {
      await signIn("credentials", { email, password })
    }catch (error) {
      console.log(error);

      if(error.message.includes("CredentialsSignin") || error.message.includes("CallbackRouteError")) {
        return { error: "Invalid username or password" };
      }
      throw error;
    }
  }

  export const addUser = async (prevState,formData) => {
  const { firstname, lastname, phone, email, street, city, state, zip, password, image } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      firstname,
      lastname,
      phone,
      email,
      street,
      city,
      state,
      zip,
      password,
      image,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    // await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const addPost = async (prevState,formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const deletePost = async (formData) => {
 const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const addPlayer = async (prevState, formData) => {
  

  const { firstname, lastname, phone, email, age, gender, usaWPnum, referrer, year, parentUserId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPlayer = new Player({
      firstname,
      lastname,
      phone,
      email,
      age,
      gender,
      usaWPnum,
      referrer,
      year,
      parentUserId,
    });

    await newPlayer.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};