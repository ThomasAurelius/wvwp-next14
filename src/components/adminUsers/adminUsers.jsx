
import React from 'react'
import { getUsers } from '@/lib/data'
import styles from './adminUsers.module.css'
import UserCard from '../userCard/page'
import DeleteUser from '../deleteUser/deleteUser'


const AdminUsers = async () => {
 
  const users = await getUsers()

  return (
    <div className={styles.container}>
    <h1>Users</h1>
      {users.map((user) => (
         <div className={styles.post} key={user.id}>
          <div className={styles.detail}>
          
            <UserCard user={user} />
            </div>
            <DeleteUser user={user} />
        </div>
      ))}
    </div>
  )
}

export default AdminUsers