import React from 'react'
import { getUsers } from '@/lib/data'
import styles from './adminUsers.module.css'
import { deleteUser } from '@/lib/action'
import UserCard from '../userCard/page'
import { useFormState } from 'react-dom'


const AdminUsers = async () => {
  const [state, formAction] = useFormState({
    deleteUser, undefined
  })
  const users = await getUsers()

  return (
    <div className={styles.container}>
    <h1>Users</h1>
      {users.map((user) => (
         <div className={styles.post} key={user.id}>
          <div className={styles.detail}>
          
            <UserCard user={user} />
            </div>
            <form action={formAction}>
               {/* <input type="hidden" name="id" value={user.id} /> */}
               <button type="submit" className={styles.deleteButton}>Delete</button>
            </form>
        </div>
      ))}
    </div>
  )
}

export default AdminUsers