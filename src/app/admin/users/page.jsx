import React from 'react'
import styles from './usersAdmin.module.css'
import { Suspense } from 'react'
import AdminUsers from '@/components/adminUsers/adminUsers'
import AdminUserForm from '@/components/adminUserForm/adminUserForm'
import {auth} from '@/lib/auth'


const UsersAdmin = async () => {

   const session = await auth()
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm userId={session.user.id}/>
        </div>
      </div>
    </div>
  )
}

export default UsersAdmin