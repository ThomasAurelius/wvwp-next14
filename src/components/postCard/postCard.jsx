
import styles from './postCard.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({player}) => {
  console.log("postcard player: " + player)
  
  return (
    <Link href={`/players/${player._id}`}>
    <div className={styles.container}>
    
      <div className={styles.top}>
         
         <div className={styles.topLeft}>
          <h1 className={styles.title}>{player.firstname} {player.lastname}</h1>
         
          
         </div>
         <div className={styles.topRight}>
          <p className={styles.desc}>{player.gender}</p>
          <p className={styles.desc}>{player.year}</p>
         </div>
         <div className={styles.imgContainer}>
         {player.img && <Image className={styles.img} src={player.img} alt={player.name} width={90} height={90} />
         }
         </div>
         
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <p className={styles.desc}>AgreeCoC: <input type="checkbox" checked={player.agreeCoC}/></p>
          <p className={styles.desc}>Master: <input type="checkbox" checked={player.isMaster}/></p>
          
        </div>
        <div className={styles.bottomRight}>
          <p className={styles.desc}>Dues paid: <input type="checkbox" checked={player.duesPaid}/></p>
          <p className={styles.desc}>Tourn paid: <input type="checkbox" checked={player.tournPaid}/></p>
        </div>
        <div>
          <p className={styles.desc}>{player._id}</p>
          
        </div>
      </div>
      
    
    </div>
    </Link>
  )
}

export default PostCard