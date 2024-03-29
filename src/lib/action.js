"use server"
import { connect } from "mongoose";
import { signIn, signOut } from "./auth";
import { connectToDb } from "./utils";
import { User, Post, Player } from "./models";
import bcrypt from "bcryptjs";

import { revalidatePath } from "next/cache";

const { default: mongoose } = require("mongoose");
import mongooseToCsv from 'mongoose-to-csv';




export const handleGithubLogin = async () => {
  "use server";
  await signIn('github')
  };

  export const handleLogout = async () => {
  "use server";
  await signOut();
  };

  export const register = async (previousState, formData) => {
    const { firstname, lastname, street, city, state, zip, phone, email, password, confirmPassword } = Object.fromEntries(formData);

    if (password !== confirmPassword) {
      return { error: "Passwords don't match" };
    }

    try {
      connectToDb();

      const user = await User.findOne({email});

      if (user) {
        return {error: "Username already exists"}
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
  const { firstname, lastname, phone, email, street, city, state, zip, password } = Object.fromEntries(formData);

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
      
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (prevState, formData) => {
  const { _id } = Object.fromEntries(formData);

  try {
    connectToDb();

    // await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(_id);
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


export const deletePost = async (prevState, formData) => {
 const { _id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(_id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const addPlayer = async (prevState, formData) => {
  
  const { firstname, lastname, phone, email, age, gender, usaWPnum, referrer, year, parentUserId, agreeCoC} = Object.fromEntries(formData);

  try {
    connectToDb();

    const player = await Player.findOne({email});

      if (player) {
        return {error: "Email already exists!"}
      }
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
      agreeCoC,
    });

    await newPlayer.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
    revalidatePath("/parent");
    return { success: "Player Added!"}
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const updatePlayerDuesPaid = async (_id) => {
    try {
      connectToDb();
      await Player.findByIdAndUpdate(_id, {
        _id,
        duesPaid: true,
        
      });
      await Player.save();
      console.log("updated to db");
    
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };

  export const updatePlayerTournPaid = async (_id) => {
    try {
      connectToDb();
      await Player.findByIdAndUpdate(_id, {
        _id,
        tournPaid: true,
        
      });
      await Player.save();
      console.log("updated to db");
    
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };


export const updatePlayer = async (prevState, formData) => {
  
  const { _id, firstname, lastname, usaWPnum, email, phone, dob, age, year, gender, referrer,  isMaster, duesPaid, tournPaid, agreeCoC } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Player.findByIdAndUpdate(_id, {
      _id,
      firstname,
      lastname,
      usaWPnum,
      phone,
      email,
      dob,
      age,
      year,
      gender,
      referrer,
      isMaster,
      duesPaid,
      tournPaid,
      agreeCoC,
     

    });

    //  await Player.save();
    console.log("updated to db");
    revalidatePath("/admin");
    revalidatePath("/parent");
    revalidatePath(`/players/${_id}`);
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const deletePlayer = async (prevState, formData) => {
 
  const { _id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Player.findByIdAndDelete(_id);
    console.log("deleted " + _id + " from db");
    
    revalidatePath("/players/");
    
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

// export const exportPlayers = async() => {
//   var PlayerSchema = new mongoose.Schema({
//     firstname: String,
//     lastname: String,
//     phone: String,
//     email: String,
//     dob: Date,
//     age: Number,
//     agreeCoC: Boolean,
//     isMaster: Boolean,
//     duesPaid: Boolean,
//     tournPaid: Boolean,
//     usaWPnum: String,
//     referrer: String,

//   });
  
//   PlayerSchema.plugin(mongooseToCsv, {
//     headers: 'Firstname Lastname Phone Email DOB Age AgreeCoC isMaster duesPaid tournPaid usaWPnum referrer'.split(' '),
//     constraints: {
//       'Firstname': 'firstname',
//       'Lastname': 'lastname',
//       'Phone': 'phone',
//       'Email': 'email',
//       'DOB': 'dob',
//       'Age': 'age',
//       'AgreeCoC': 'agreeCoC',
//       'isMaster': 'isMaster',
//       'duesPaid': 'duesPaid',
//       'tournPaid': 'tournPaid',
//       'usaWPnum': 'usaWPnum',
//       'referrer': 'referrer',
//     }
//   });
  
  
//   var Player = mongoose.model('Player', PlayerSchema)
  
//   Player.find({}).exec()
//   .then(function(docs) {
//     Player.csvReadStream(docs)
//       .pipe(fs.createWriteStream('players.csv'));
//   });
// }