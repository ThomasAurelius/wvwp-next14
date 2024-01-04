import PostCard from '@/components/postCard/postCard'
import React from 'react'
import styles from './players.module.css'

import { getPlayers } from '@/lib/data'


// const getPlayers = async () => {
//     const response = await fetch('http://localhost:3000/api/players')

//     if (!response.ok) {
//       throw new Error(response.statusText)
//     }

//     const data = await response.json()
//     return data
//   }



const PlayersPage = async () => {

  //NOT Fetching any data, but data is present and it's connected to the database
  const players = await getPlayers();
  console.log("logging players: " + players)

  return (
    <div className={styles.container}>
      {players.map((player => (
        <div className={styles.player} key={player._id}>
          <PostCard player={player} />
        </div>
      )))}
      
    </div>
  )
}

export default PlayersPage