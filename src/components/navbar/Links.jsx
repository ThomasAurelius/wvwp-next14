'use client'
import React, { useEffect } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link';
import NavLink from './links/navLink/navLink';
import { handleLogout } from '@/lib/action';
import { usePathname } from 'next/navigation';
import { set } from 'mongoose';

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
         title: "Calendar",
         path: "/calendar",
      },
      {
         title: "Links",
         path: "/links",
      },
      {
         title: "Parents",
         path: "/parent",
      },
      {
         title: "Contact",
         path: "/contact",
      },
      
   ];

const Links = ({session}) => {
   const [open, setOpen] = React.useState(false);
const path = usePathname();

   useEffect (() => {
      setOpen(false)
   }, [path])
   
  return (
   <div className={styles.container}>
    <div className={styles.navbarLinks}>
      {links.map((link=>(
         <NavLink item={link} key={link.title}/>
      )))} 

      
      {session?.user?.isAdmin &&  
            <>
               <NavLink item={{ title: "Players" , path: "/players" }}/>
               <NavLink item={{ title: "Admin" , path: "/admin" }}/>
            </>
      }
      { session?.user ? (
      
      <form style={{display: "inline"}} action={handleLogout}>
         <button className={styles.logout}>Logout</button>
      </form>
      
    ) : (
      <Link className={styles.logout} href="/login">
        Login
      </Link>
    )
      }
    </div>
    <button className={styles.menuButton} onClick={()=> setOpen((prev => !prev))}>Menu</button>
    {open && <div className={styles.mobileLinks}>
    <button className={styles.menuButtonClose} onClick={()=> setOpen((prev => !prev))}>X</button>
      {links.map((link=>(
         <NavLink item={link} key={link.title}/>
      )))} 
      { session?.user ? (
      <>
      {session.user?.isAdmin && <>
         <NavLink item={{ title: "Players", path:"/players"}}/>
         <NavLink item={{ title: "Admin" , path: "/admin" }}/>
         </>}
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