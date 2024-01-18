'use client'
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
          <input type="text" required placeholder="Player First Name" name="firstname" />
          <input type="text" required placeholder="Player Last Name" name="lastname" />
          <input type="phone" required placeholder="Player Phone Number" name="phone" />
          <input type="email" required placeholder="Player Email" name="email" />
          <input type="text" required placeholder="Player Age as of August 1st" name="age" />
          <select required name="gender">
            <option value="">Gender?</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>        
          <input type="text" placeholder="Player USA WP Number" name="usaWPnum"/>
          <input type="text" placeholder="Referred by" name="referrer"/>
          <input type="text" required placeholder="Player School Year" name="year"/>
          <input type="hidden" name="parentUserId" value={session.session.user.id} />
          <p>Read and agreed to WVWP Code of Conduct, Policies and Substance Abuse Policy?</p>
          <select required name="agreeCoC">
            <option value="false">Read and Agree?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          
          <button>Add Player</button>
        </form>
      </div>
    </div>
  )
}

export default AddPlayerForm