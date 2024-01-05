import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard'
// import { getPosts } from '@/lib/data'

const getPosts = async () => {
  const response = await fetch('http://localhost:3000/api/blog', {next:{revalidate:3600}})

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const Posts = await response.json()
  return Posts
}

const Blogpage = async () => {
 const posts = await getPosts();
  // const players = await getPosts();
  return (
    <div className={styles.container}>
    {posts.map((post => (
        <div className={styles.player} key={post._id}>
          <PostCard player={post} />
        </div>
      )))}
    
    </div>
  )
}

export default Blogpage