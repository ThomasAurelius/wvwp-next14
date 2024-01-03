'use client'
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link';
import NavLink from './links/navLink/navLink';

   const links= [ 
      {
         title: "Home",
         path: "/",
      },
      {
         title: "Players",
         path: "/players",
      },
      {
         title: "Contact",
         path: "/contact",
      },
      {
         title: "Blog",
         path: "/blog",
      },

   ];

const Links = () => {
   const [open, setOpen] = React.useState(false);



   //temporary
   const session = true
   const isAdmin = true

  return (
   <div className={styles.container}>
    <div className={styles.navbarLinks}>
      {links.map((link=>(
         <NavLink item={link} key={link.title}/>
      )))} 
      { session ? (
      <>
      {isAdmin && <NavLink item={{ title: "Admin" , path: "/admin" }}/>}
      <button className={styles.logout}>Logout</button>
      </>
    ) : (
      <Link href="/login">
        Login
      </Link>
    )
      }
    </div>
    <button className={styles.menuButton} onClick={()=> setOpen((prev => !prev))}>Menu</button>
    {open && <div className={styles.mobileLinks}>
      {links.map((link=>(
         <NavLink item={link} key={link.title}/>
      )))} 
      { session ? (
      <>
      {isAdmin && <NavLink item={{ title: "Admin" , path: "/admin" }}/>}
      <button className={styles.logout}>Logout</button>
      </>
    ) : (
      <Link href="/login">
        Login
      </Link>
    )
      }
      </div>}
   </div>
  )
}

export default Links