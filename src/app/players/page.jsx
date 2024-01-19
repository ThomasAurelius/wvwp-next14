
import PostCard from '@/components/postCard/postCard'
import React from 'react'
import styles from './players.module.css'
import { getPlayers } from '@/lib/data'
import Link from 'next/link'
import { auth } from '@/lib/auth'


// const getPlayers = async () => {
//     const response = await fetch('http://localhost:3000/api/players', {next:{revalidate:3600}})
//     if (!response.ok) {
//       throw new Error(response.statusText)
//     }
//       return response.json()
//      }

const PlayersPage = async () => {

  const session = await auth();
  const user = session.user;
  const isAdmin = user.isAdmin


  
  //NOT Fetching any data, but data is present and it's connected to the database
  //There are 3 records in the Player collection. So I should be getting 3 records
  
  const players = await getPlayers();

  
  return (
    <div className={styles.container}>
      {players.map((player) => (
        (isAdmin) ? ( 
          <Link key={player.id} href={`/players/${player._id}`}>
            <PostCard key={player.id} player={player} />
          </Link>
            ) : (
          <PostCard key={player.id} player={player} />
            )
          
            
      ))}
      
    </div>
  )
}

export default PlayersPage

//playerId={player._id} playerFirst={player.firstname} playerLast={player.lastname} playerusaWPnum={player.usaWPnum} playerEmail={player.email} playerPhone={player.phone} playerDob={player.dob} playerAge={player.age} playerYear={player.year} playerGender={player.gender} playerReferred={player.referred} playerIsMaster={player.isMaster} playerDuesPaid={player.duesPaid} playerTournPaid={player.tournPaid} playerAgreeCoC={player.agreeCoc} playerUpdatedAt={player.updatedAt}