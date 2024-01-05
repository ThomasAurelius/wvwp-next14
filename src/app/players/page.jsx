
import PostCard from '@/components/postCard/postCard'
import React from 'react'
import styles from './players.module.css'



const getPlayers = async () => {
    const response = await fetch('http://localhost:3000/api/players', {next:{revalidate:3600}})
    if (!response.ok) {
      throw new Error(response.statusText)
    }
   
   return response.json()
   
  }

const PlayersPage = async () => {

  //NOT Fetching any data, but data is present and it's connected to the database
  //There are 3 records in the Player collection. So I should be getting 3 records
  
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