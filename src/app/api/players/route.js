import { Player } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextResponse } from 'next/server'

export const GET = async (request) => {
   try {
      connectToDb();
      const players = await Player.find();
      return NextResponse.json(players);
      
   }catch(error){
      console.log(error);
      return NextResponse.error(error);
   }
}

