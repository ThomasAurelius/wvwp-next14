import { connectToDb } from './utils';
import { Player, User } from './models';


export const getPlayers = async () => {
   try{
      connectToDb(); // connect to database
      const players = await Player.find();
      return players;
   }catch(error){
      throw new Error('Failed to fetch players');
   }
};

// export const getPlayer = async (id) => {
//    try{
//       connectToDb(); 
//       const player = await Player.findById(id);
//       return player
//    }catch(error){
//       throw new Error('Failed to fetch player');
//    }
// };

// export const createPlayer = async (data) => {
//    try{
//       connectToDb(); 
//       const player = await Player.create(data);
//       return player
//    }catch(error){
//       throw new Error('Failed to create player');
//    }
// };

// export const getUser = async (id) => {
//    try {
//       connectToDb();
//       const user = await User.findById(id);
//       return user
//    } catch (error) {
//       throw new Error('Failed to fetch user');
//    }     
// };