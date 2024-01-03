import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import NavLink from './links/navLink/navLink'
import Links from './Links'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
      
         <div className={styles.navbarItems}>
         <div className={styles.logo}>
         <Image src="/header_logo.png" width={270} height={85} alt="logo" />
         </div>
         <Links />
         </div>
   </div>
      
  )
}

export default Navbar