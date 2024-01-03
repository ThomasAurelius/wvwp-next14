
import styles from './postCard.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
         <div className={styles.imgContainer}>
            <Image src="/open_water.png" alt="Open Water" width={500} height={500} />
         </div>
         <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
         <h1 className={styles.title}>Title</h1>
         <p className={styles.desc}>Description</p>
         <Link href="/blog/post">Read more</Link>
      </div>
    
    </div>
  )
}

export default PostCard