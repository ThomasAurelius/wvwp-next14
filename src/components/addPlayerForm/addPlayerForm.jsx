'use client'
import styles from './addPlayerForm.module.css'
import {addPlayer} from '../../lib/action'
import {useFormState, useFormStatus} from 'react-dom'
import {useEffect} from 'react'
import {useRouter} from 'next/navigation'

import Link from 'next/link'


const AddPlayerForm = ({session}) => {

  const router = useRouter();
  const [state, formAction] = useFormState(addPlayer, undefined)

  const formData = state
  console.log(formData)
  useEffect(() => {
       (state?.success) && router.push('/parent') 
    }, state?.success, router)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={formAction}>
          <h1>Add Player</h1>
          <input type="text" required placeholder="Player First Name" name="firstname" />
          <input type="text" required placeholder="Player Last Name" name="lastname" />
          <input type="phone" required placeholder="Player Phone Number" name="phone" />
          <input type="email" required placeholder="Player Email" name="email" />
          <input type="number" required placeholder="Player Age as of August 1st" name="age" min="5" max="25" />
          <select required name="gender">
            <option value="">Gender?</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>        
          <input type="text" placeholder="Player USA WP Number" name="usaWPnum"/>
          <input type="text" placeholder="Referred by" name="referrer"/>
          <input type="text" required placeholder="Player School Year"  name="year"/>
          <select required name="year">
            <option value="">School Year?</option>
            <option value="8th and Under">8th and Under</option>
            <option value="High School">High School</option>
            <option value="Master">Master</option>
          </select>
          <input type="hidden" name="parentUserId" value={session.session.user.id} />
          <p>By pushing the button below, you affirm that you have read and agreed to <Link className={styles.link} href="/policies/WVWPCoC" target="_blank">WVWP Code of Conduct</Link> and <Link className={styles.link} href="/policies/substance" target="_blank" >Substance Abuse Policy</Link>?</p>
          
          <input type="hidden" name="agreeCoC" value="true" />
          
          <button onSubmit={addPlayer}>I agree, Add Player</button>
         
        </form>
      </div>
    </div>
  )
}

export default AddPlayerForm