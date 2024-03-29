import React from 'react'
import styles from './adminPlayers.module.css'
import { getPlayers } from '@/lib/data'

import { deletePlayer } from '@/lib/action'
import PostCard from '../postCard/postCard'
import { auth } from '@/lib/auth'
import Export from '../export/Export'
import Link from 'next/link'

const AdminPlayers = async () => {
  const session = auth()
  const user = session.user

   const players = await getPlayers()
console.log(user)
  return (
    <div className={styles.container}>
      <h1>Players</h1>
      <Export excelData={players} fileName={"players"} />
      {players.map((player) => (
         <div className={styles.player} key={player._id}>
          <div className={styles.detail}>
            <Link href={`/players/${player._id}`}>
              <PostCard player={player}  />
            </Link>
            
        </div>
        </div>
      ))}
    </div>
  )
}

export default AdminPlayers