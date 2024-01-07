'use client'
import React from 'react'
import styles from './addPlayerForm.module.css'
import {addPlayer} from '../../lib/action'
import {useFormState} from 'react-dom'
import {useEffect} from 'react'
import {useRouter} from 'next/navigation'


const AddPlayerForm = ({session}) => {

  const router = useRouter();
 

  const [state, formAction] = useFormState(addPlayer, undefined)

  useEffect(() => {
       (state?.success) && router.push('/parent') 
    }, state?.success, router)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={formAction}>
          <h1>Add Player</h1>
          <input type="text" placeholder="Player First Name" name="firstname" />
          <input type="text" placeholder="Player Last Name" name="lastname" />
          <input type="text" placeholder="Player Phone Number" name="phone" />
          <input type="text" placeholder="Player Email" name="email" />
          <input type="text" placeholder="Player Age" name="age" />
          <select name="gender">
            <option value="">Gender?</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>        
          <input type="text" placeholder="Player USA WP Number" name="usaWPnum"/>
          <input type="text" placeholder="Referred by" name="referrer"/>
          <input type="text" placeholder="Player Year" name="year"/>
          <input type="hidden" name="parentUserId" value={session.session.user.id} />
          
          <button>Add Player</button>

        </form>
      </div>
    </div>
  )
}

export default AddPlayerForm