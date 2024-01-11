'use client'
import React from 'react'
import styles from './adminPlayerForm.module.css'
import { useFormState } from 'react-dom'
import { addPlayer } from '@/lib/action'

const AdminPlayerForm = () => {
  const [state, formAction] = useFormState({
addPlayer, undefined
  })

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={formAction}>
          <h1>Add new User</h1>
          
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

export default AdminPlayerForm