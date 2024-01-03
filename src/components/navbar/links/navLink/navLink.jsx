"use client";
import styles from './navLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

const NavLink = ({item}) => {

   const pathName = usePathname();
  return (
    
      <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`} key={item.title}>{item.title}</Link>
    
  )
}

export default NavLink