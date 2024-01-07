
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
         
      },
      agreeCoC: {
         type: Boolean,
        
      },
      firstname: {
         type: String,
         
      },
      lastname: {
         type: String,
         
      },
      email: {
         type: String,
         
      },
      dob: {
         type: Date,
         
      },
      gender: {
         type: String,
         
      },
      isMaster: {
         type: Boolean,
        
      }, 
      phone: {
         type: String,
         
      },
      duesPaid: {
         type: Boolean,
         
      },
      tournPaid: {
         type: Boolean,
         
      },
      usaWPnum: {
         type: String,
      
      },
      year: {
         type: String,
         
      },
      referrer: {
         type: String,
         
      },
      img: {
         type: String,
         
      },  
      parentUserId: {
         type: String,
         
      },
      createdAt: {
         type: Date,
         
      },
      updatedAt: {
         type: Date,
         
      },
      } , {
      timestamps: true,
   
   });

   export const User = mongoose.models?.users || mongoose.model('users', userSchema);
   export const Player = mongoose.models?.players || mongoose.model('players', playerSchema);
   export const Post = mongoose.models?.posts || mongoose.model('posts', postSchema);