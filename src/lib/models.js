
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
   
   email: {
      type: String,   
      unique: true
   },
   firstname:{
      type: String,
      
   },
   lastname:{
      type: String,
   },
   phone:{
      type: String,
   },
   street :{
      type: String,
   },
   city:{
      type: String,
   },
   state:{
      type: String,
   },
   zip:{
      type: String,
   },
   password:{
      type: String,
      
   },
   image:{
      type: String,
   },
   isAdmin: {
      type: Boolean,
      default: false
   },
   players: {
      type: Array,
      default: []
   }
   } , {
   timestamps: true

});

const postSchema = new mongoose.Schema({
  
   title: {
      type: String,
      required: true,
      unique: true
   },
   description:{
      type: String,
      required: true
   },
   } , {
   timestamps: true
});

const playerSchema = new mongoose.Schema({
      
      age: {
         type: String,
         required: true,
      },
      agreeCoC: {
         type: Boolean,
         required: true,
      },
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
      },
      dob: {
         type: Date,
         required: true,
      },
      gender: {
         type: String,
         required: true,
      },
      isMaster: {
         type: Boolean,
         default: false,
      }, 
      phone: {
         type: String,
         required: true,
      },
      duesPaid: {
         type: Boolean,
         default: false,
      },
      tournPaid: {
         type: Boolean,
         default: false,
      },
      usaWPnum: {
         type: String,
         required: true,
      },
      year: {
         type: String,
         required: true,
      },
      referrer: {
         type: String,
         required: false,
      },
      img: {
         type: String,
         required: false,
      },  
      parentUserId: {
         type: String,
         required: true,
      },
      createdAt: {
         type: Date,
         required: true,
      },
      updatedAt: {
         type: Date,
         required: true,
      },
      } , {
      timestamps: true,
   
   });

   export const User = mongoose.models?.users || mongoose.model('users', userSchema);
   export const Player = mongoose.models?.players || mongoose.model('players', playerSchema);
   export const Post = mongoose.models?.posts || mongoose.model('posts', postSchema);