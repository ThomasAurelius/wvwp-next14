
import styles from './postCard.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({player}) => {
  console.log("postcard player: " + player)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
         <div className={styles.imgContainer}>
         {player.img && <Image className={styles.img} src={player.img} alt={player.name} width={200} height={250} />
  }
         </div>
         <div className={styles.topRight}>
         
         </div>
         <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
         <h1 className={styles.title}>{player?.name}</h1>
         <p className={styles.desc}>Description</p>
         <Link href="/blog/post">Read more</Link>
      </div>
    
    </div>
  )
}

export default PostCard