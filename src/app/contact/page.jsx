import React from 'react'
import styles from './contact.module.css'

const ContactPage = () => {
  return (
    <>
    <div className={styles.container}>
    <h1>Contact Details</h1>
    <h2>Steve Sessa</h2>
    <h3>Head Coach</h3>
    <p>email: <a className={styles.link} href="mailto:wvwpcoach@outlook.com">wvwpcoach@outlook.com</a> </p>
    <br></br>
    <h2>Chris Edison</h2>
    <h3>Assistant Coach</h3>
    <p>email: <a className={styles.link} href="mailto:wvwpasst@outlook.com">wvwpasst@outlook.com</a> </p>
    
    </div>
    </>
  )
}

export default ContactPage