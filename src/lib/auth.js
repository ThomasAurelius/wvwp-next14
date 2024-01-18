import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDb } from './utils'
import { User } from './models'
import bcrypt from 'bcryptjs'
import { authConfig } from './auth.config'

const login = async (credentials) => {
   try {
      connectToDb();
      const user = await User.findOne({ email: credentials.email });
      if (!user) {
         throw new Error('No user found!');
      }

      const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

      if (!isPasswordCorrect) {
         throw new Error('Invalid credentials!');
      }

      return user;

   } catch (error) {
      console.log(error);
      throw new Error('Failed to Login!')
   }

}

export const { handlers:{GET, POST}, auth, signIn, signOut } = NextAuth({ 
   ...authConfig,
   providers: [
      GitHub({ 
         clientId: process.env.GITHUB_ID, 
         clientSecret: process.env.GITHUB_SECRET
      }), 
      CredentialsProvider({
         async authorize(credentials) {
            try {
               const user = await login(credentials);
               return user;
               
            } catch (error) {
               throw new Error('Failed to Login!')
            }

         }
      }),
      Google],
   callbacks: {
      async signIn({user, account, profile}) {
         console.log(user);
         if (account.provider === 'github') {
            connectToDb();
            try {
               const user = await User.findOne({ email: profile.email });

               if(!user) {
                  const newUser = new User({
                     username: profile.name,
                     email: profile.email,
                    
                     
                  });
                  await newUser.save();
               }
            }catch(err) {
               console.log(err);
               return false;
            }
         } 
         return true;
      },
      ...authConfig.callbacks,
   },
});