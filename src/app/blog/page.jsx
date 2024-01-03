import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard'

const Blogpage = () => {
  return (
    <div className={styles.container}>
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    </div>
  )
}

export default Blogpage