'use client'
import styles from './postCard.module.css'
import React from 'react'
import Link from 'next/link'
import PayPalButtonMaster from '../paypalButton/PaypalButtonMaster'
import PayPalButtonTournament from '../paypalButton/PaypalButtonTournament'
import { usePathname } from 'next/navigation'



const PostCard = ({player}) => {
  const path = usePathname();
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
          <p className={styles.desc}>Tournament paid: <input className={styles.input} type="text" disabled value={player.tournPaid}/></p>
        </div>
        
        <div>
          <button disabled className={styles.button}>Edit</button>
        </div>
      </div>
      { (player.duesPaid == false & path == "/parent" ) ? ( 
        <div>
          <PayPalButtonMaster player={player}/>
        </div> ):( <></>)
      }
      { (player.tournPaid == false & path == "/parent") ? ( 
        <div>
          <PayPalButtonTournament player={player}/>
        </div> ):( <></>)
      }
    
    </div>
    
  )
}

export default PostCard