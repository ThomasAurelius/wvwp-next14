
import styles from './postCard.module.css'
import React from 'react'
import Link from 'next/link'

const PostCard = ({player}) => {
 
  return (
    
    <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
          <h1 className={styles.title}>{player.firstname} {player.lastname}</h1>
         </div>
         <div className={styles.topRight}>
          <p className={styles.desc}>{player.gender}</p>
          <p className={styles.desc}>{player.year}</p>
         </div>
         
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <p className={styles.desc}>AgreeCoC: <input type="text" disabled value={player.agreeCoC}/></p>
          <p className={styles.desc}>Master: <input type="text" disabled value={player.isMaster}/></p>
          
        </div>
        <div className={styles.bottomRight}>
          <p className={styles.desc}>Dues paid: <input type="text" disabled value={player.duesPaid}/></p>
          <p className={styles.desc}>Tourn paid: <input type="text" disabled value={player.tournPaid}/></p>
        </div>
        {/*<div>
          <p className={styles.desc}>{player._id}</p>
        </div>
      */}
        <div>
          <button disabled className={styles.button}>Edit</button>
        </div>
      </div>
      
    
    </div>
    
  )
}

export default PostCard