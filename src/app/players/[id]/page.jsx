
import React from 'react'
import styles from './player.module.css'
import { getPlayerById } from '../../../lib/data';
import { auth } from '@/lib/auth';

import EditPlayerForm from '@/components/editPlayerForm/page';
import ShowPlayerForm from '@/components/showPlayerForm/page';


const SinglePlayerPage = async ({params}) => {
  const session = await auth()
  const user = session.user
  const isAdmin = user.isAdmin
 

  const player = await getPlayerById(params.id);
 console.log("isAdmin: " + isAdmin)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      {isAdmin ? 
        <EditPlayerForm player={player} user={user} isAdmin={isAdmin} />
        : <ShowPlayerForm player={player} user={user} isAdmin={isAdmin} />
      }
        
      </div>
    </div>
  )
}

export default SinglePlayerPage