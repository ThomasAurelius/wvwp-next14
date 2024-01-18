import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import NavLink from './links/navLink/navLink'
import Links from './Links'
import Image from 'next/image'
import { auth } from '@/lib/auth'

const Navbar = async () => {
   const session = await auth();
   console.log(session)
  return (
    <div className={styles.container}>
      <div className={styles.navbarItems}>
      <div className={styles.logo}>
      <Image src="/B_Willamette Valley Aquatics-02.png" width={85} height={85} alt="logo" />
      </div>
      <Links session={session} />
      </div>
   </div>
      
  )
}

export default Navbar