import React from 'react'
import styles from './contact.module.css'

const ContactPage = () => {
  return (
    <>
    <div className={styles.container}>
    <h1>Contact Details</h1>
    <div className={styles.card}>
      <h2>Steve Sessa</h2>
      <h2>Head Coach</h2>
      <p>email: <a className={styles.link} href="mailto:wvwpcoach@outlook.com">wvwpcoach@outlook.com</a> </p>
    </div>
    <br></br>
    <div className={styles.card}>
      <h2>Chris Edison</h2>
      <h2>Assistant Coach</h2>
      <p>email: <a className={styles.link} href="mailto:wvwpasst@outlook.com">wvwpasst@outlook.com</a> </p>
    </div>
    
    </div>
    </>
  )
}

export default ContactPage