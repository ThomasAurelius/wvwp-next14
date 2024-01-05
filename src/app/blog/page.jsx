import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard'
import { getPosts } from '@/lib/data'

const Blogpage = async () => {

  const players = await getPosts();
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

export default Blogpage