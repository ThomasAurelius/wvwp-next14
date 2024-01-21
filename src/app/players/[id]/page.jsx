
import React from 'react'
import styles from './player.module.css'
import { getPlayerById } from '../../../lib/data';
import { auth } from '@/lib/auth';
import { getUser } from '@/lib/data';

import EditPlayerForm from '@/components/editPlayerForm/page';
import ShowPlayerForm from '@/components/showPlayerForm/page';


const SinglePlayerPage = async ({params}) => {
  const session = await auth()
  const user = session.user
  const isAdmin = user.isAdmin
 

  const player = await getPlayerById(params.id);
  const parent = await getUser(player.parentUserId)
  const parentEmail = parent.email
  console.log("Parent Email: " + parentEmail)
 console.log("isAdmin: " + isAdmin)
 
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <h2>Parent email: </h2><input className={styles.parentEmail} disabled value={parentEmail} />
      {isAdmin ? 
        <EditPlayerForm player={player} parentEmail={parentEmail} user={user} isAdmin={isAdmin} />
        : <ShowPlayerForm player={player} parent={parent} user={user} isAdmin={isAdmin} />
      }
        
      </div>
    </div>
  )
}

export default SinglePlayerPage