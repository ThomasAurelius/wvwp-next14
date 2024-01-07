'use client'
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link';
import NavLink from './links/navLink/navLink';
import { handleGithubLogin, handleLogout } from '@/lib/action';

   const links= [ 
      {
         title: "Home",
         path: "/",
      },
      {
         title: "About",
         path: "/about",
      },
      {
         title: "Parents",
         path: "/parent",
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

const Links = ({session}) => {
   const [open, setOpen] = React.useState(false);



   //temporary
  
   // const isAdmin = true

  return (
   <div className={styles.container}>
    <div className={styles.navbarLinks}>
      {links.map((link=>(
         <NavLink item={link} key={link.title}/>
      )))} 
      { session?.user ? (
      <>
      {session.user?.isAdmin && <NavLink item={{ title: "Admin" , path: "/admin" }}/>}
      <form action={handleLogout}>
      <button className={styles.logout}>Logout</button>
      </form>
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
      { session?.user ? (
      <>
      {session.user?.isAdmin && <NavLink item={{ title: "Admin" , path: "/admin" }}/>}
      <form action={handleLogout}>
      
      
         <button className={styles.logout}>Logout</button>
      </form>
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