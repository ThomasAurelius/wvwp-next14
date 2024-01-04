import { Int32, ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
   _id : {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   name:{
      type: String,
      required: true
   },
   password:{
      type: String,
      required: true
   },
   isAdmin: {
      type: Boolean,
      default: false
   },
   } , {
   timestamps: true

});

const playerSchema = new mongoose.Schema({
      _id: {
         type: ObjectId,
         required: true
      },
      age: {
         type: Number,
         required: true
      },
      agreeCoC: {
         type: Boolean,
         required: true
      },
      street: {
         type: String,
         required: true
      },
      city: {
         type: String,
         required: true
      },
      state: {
         type: String,
         required: true
      },
      zip: {
         type: String,
         required: true
      },
      name: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true
      },
      dob: {
         type: Date,
         required: true
      },
      gender: {
         type: String,
         required: true
      },
      isMaster: {
         type: Boolean,
         default: false
      }, 
      phone: {
         type: String,
         required: true
      },
      duesPaid: {
         type: Boolean,
         default: false
      },
      tournPaid: {
         type: Boolean,
         default: false
      },
      usaWPnum: {
         type: String,
         required: true
      },
      year: {
         type: String,
         required: true
      },
      referrer: {
         type: String,
         required: true
      },
      img: {
         type: String,
         required: false
      },  
      userId: {
         type: String,
         required: true
      },
      createdAt: {
         type: Date,
         required: true
      },
      updatedAt: {
         type: Date,
         required: true
      },
      } , {
      timestamps: true
   
   });

   export const User = mongoose.models?.User || mongoose.model('User', userSchema);
   export const Player = mongoose.models?.Player || mongoose.model('Player', playerSchema);