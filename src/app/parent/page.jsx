import React from 'react'
import styles from './parent.module.css'
import AddPlayerForm from '@/components/addPlayerForm/addPlayerForm'
import { getPlayers } from '@/lib/data'
import PostCard from '@/components/postCard/postCard'

const ParentPage = async () => {

   const players = await getPlayers();
   //const playersOfParent = players.filter(player => player.parentId === {user.id})


  return (
    <div className={styles.container}>
      
      <AddPlayerForm />
    </div>
  )
}

export default ParentPage

//filter players that have the parents id