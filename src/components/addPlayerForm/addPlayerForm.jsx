import React from 'react'
import styles from './addPlayerForm.module.css'
import {addPlayer} from '../../lib/action'
import { User } from '@/lib/models'

const AddPlayerForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={addPlayer}>
          <h1>Add Player</h1>
          <input type="text" placeholder="Player First Name" name="firstname" />
          <input type="text" placeholder="Player Last Name" name="lastname" />
          <input type="text" placeholder="Player Age" name="age" />
          <input type="text" placeholder="Player Gender" name="gender" />
          <input type="text" placeholder="Player USA WP Number" name="usaWPnum"/>
          <input type="text" placeholder="Referred by" name="referrer"/>
          <input type="text" placeholder="Player Year" name="year"/>
          
          <button>Add Player</button>

        </form>
      </div>
    </div>
  )
}

export default AddPlayerForm