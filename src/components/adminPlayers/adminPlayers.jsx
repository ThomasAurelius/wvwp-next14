import React from 'react'
import styles from './adminPlayers.module.css'
import { getPlayers } from '@/lib/data'
import Image from 'next/image'
import { deletePlayer } from '@/lib/action'
import PostCard from '../postCard/postCard'

const AdminPlayers = async () => {

   const players = await getPlayers()

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {players.map((player) => (
         <div className={styles.player} key={player._id}>
          <div className={styles.detail}>
        
            <PostCard player={player} />
            <form className={styles.deleteFrom} action={deletePlayer}>
               {/* <input type="hidden" name="id" value={player.id} /> */}
               <button className={styles.deleteButton}>Delete</button>
            </form>
        </div>
        </div>
      ))}
    </div>
  )
}

export default AdminPlayers