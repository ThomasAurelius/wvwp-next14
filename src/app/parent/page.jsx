import React from 'react'
import styles from './parent.module.css'
import AddPlayerForm from '@/components/addPlayerForm/addPlayerForm'
import { getPlayers } from '@/lib/data'
import PostCard from '@/components/postCard/postCard'
import { auth } from '@/lib/auth'
import Link from 'next/link'
import PayPalButton from '@/components/paypalButton/PaypalButton'

const ParentPage = async () => {

  const session = await auth();
  const user = session.user;
   const players = await getPlayers();
   const playersOfparent = players.filter(player => player.parentUserId == user?.id)

  return (    
    <div className={styles.container}>
      <h1>Player Details</h1>
      { playersOfparent.map((player) => (
         (session.isAdmin) ? ( 
          <Link key={player.id} href={`/players/${player._id}`}>
            <PostCard key={player.id} player={player} />
          </Link>
            ) : (<>
          <PostCard key={player.id} player={player} />
          
          </>
            )
          
            ))
      }
      <AddPlayerForm session={{session}} />
    </div>
  )
}

export default ParentPage

