'use client'
import React from 'react'
import styles from './adminUserForm.module.css'
import { useFormState } from 'react-dom'
import { addUser } from '@/lib/action'

const AdminUserForm = (userId) => {
  const [state, formAction] = useFormState({
addUser, undefined
  })

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={formAction}>
          <h1>Add new User</h1>
          <input type="hidden" name="userId" value={userId} />
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="password" placeholder="password" />
          <select name="isAdmin">
            <option value="false">is Admin?</option>
            <option value="true">Admin</option>
            <option value="false">User</option>
          </select>
          <button type="submit">Add</button>

        </form>
      </div>
    </div>
  )
}

export default AdminUserForm