'use client'
import styles from './postCard.module.css'
import React from 'react'
import Link from 'next/link'
import PayPalButton from '../paypalButton/PaypalButtonMaster'



const PostCard = ({player}) => {
 const paid = player.duesPaid;
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
        
        <div className={styles.bottomRight}>
          <p className={styles.desc}>Dues paid: <input className={styles.input} type="text" disabled value={player.duesPaid}/></p>
          <p className={styles.desc}>Tourn paid: <input className={styles.input} type="text" disabled value={player.tournPaid}/></p>
        </div>
        
        <div>
          <button disabled className={styles.button}>Edit</button>
        </div>
      </div>
      { (player.duesPaid == false) ? ( 
        <div>
          <PayPalButton player={player}/>
        </div> ):( <></>)
      }
    
    </div>
    
  )
}

export default PostCard