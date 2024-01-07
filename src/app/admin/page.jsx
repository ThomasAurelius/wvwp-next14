import React, { Suspense } from 'react'
import styles from './admin.module.css'
import AdminPosts from '@/components/adminPosts/adminPosts'
import AdminUsers from '@/components/adminUsers/adminUsers'
import AdminUserForm from '@/components/adminUserForm/adminUserForm'
import AdminPostForm from '@/components/adminPostForm/adminPostForm'
import {auth} from '@/lib/auth'

const AdminPage = async () => {

  const session = await auth()

  return (
    
    <div className={styles.container}>
     <h1>Admin Panel</h1>
      
    </div>
    
  )
}

export default AdminPage