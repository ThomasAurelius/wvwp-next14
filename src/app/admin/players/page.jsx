import React from 'react'
import styles from './playersAdmin.module.css'
import { Suspense } from 'react'
import AdminPlayers from '@/components/adminPlayers/adminPlayers'
import AdminPlayerForm from '@/components/adminPlayerForm/adminPlayerForm'
import {auth} from '@/lib/auth'

const PlayersAdmin = () => {
  const session = auth()
  return (
    <div className={styles.container}>
    <h1>PlayersAdmin</h1>
    <div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPlayers />
          </Suspense>
        </div>
        {/*<div className={styles.col}>
          <AdminPlayerForm />
        </div>
        */}
      </div>
    </div>
    
    </div>
  )
}

export default PlayersAdmin