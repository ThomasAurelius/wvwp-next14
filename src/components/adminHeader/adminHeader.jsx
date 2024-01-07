import React from 'react'
import styles from './adminHeader.module.css'
import Link from 'next/link'

const AdminHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.adminNavbar}>
         <Link href="/admin/users">Users</Link>
         <Link href="/admin/posts">Posts</Link>
         <Link href="/admin/players">Players</Link>
      </div>
    </div>
  )
}

export default AdminHeader