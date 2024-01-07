import React from 'react'
import { getUsers } from '@/lib/data'
import styles from './adminUsers.module.css'
import { deleteUser } from '@/lib/action'


const AdminUsers = async () => {

  const users = await getUsers()

  return (
    <div className={styles.container}>
    <h1>Users</h1>
      {users.map((user) => (
         <div className={styles.post} key={user.id}>
          <div className={styles.detail}>
          
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            </div>
            <form action={deleteUser}>
               {/* <input type="hidden" name="id" value={user.id} /> */}
               <button className={styles.deleteButton}>Delete</button>
            </form>
        </div>
      ))}
    </div>
  )
}

export default AdminUsers