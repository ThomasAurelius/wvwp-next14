const { default: mongoose } = require("mongoose");
import { connect } from "mongoose";
const dotenv = require("dotenv");

const connection = {};

export const connectToDb = async () => {
   try {
      if(connection.isConnected) {
         console.log('Already connected');
         return;
      }
      const db = await mongoose.connect(process.env.NEXT_PUBLIC_API_MONGO);
      connection.isConnected = db.connections[0].readyState;
   } catch (error) {
      console.log(error);
      throw new Error(error);
   }
}