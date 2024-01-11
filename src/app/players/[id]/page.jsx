'use server'
import React from 'react'
import styles from './player.module.css'
import { getPlayerById } from '../../../lib/data';
import { auth } from '@/lib/auth';

import EditPlayerForm from '@/components/editPlayerForm/page';


const SinglePlayerPage = async ({params}) => {
  const session = auth()
  const user = session.user

  const player = await getPlayerById(params.id);
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <EditPlayerForm player={player} user={user}  />
      </div>
    </div>
  )
}

export default SinglePlayerPage