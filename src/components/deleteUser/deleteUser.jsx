
import { useState } from 'react'
import { deleteUser } from '@/lib/action'
import { useFormState } from 'react-dom'
import styles from './deleteUser.module.css'

const DeleteUser = ({user}) => {
   const [state, formAction] = useFormState(
      deleteUser, undefined
   )

    const [showState, setShowState] = useState(false)
    const toggleShowState = () => setShowState(!showState)
console.log(user)
  return (
    <div>
    {showState ? <>
      <button onClick={toggleShowState} className={styles.cancelButton}>Cancel Delete User</button>
      <br></br>
      <form action={formAction}>
         <input type="hidden" name="_id" value={user._id} />
         <input type="hidden" name="name" value={user.firstname} />
         <button onSubmit={deleteUser} className={styles.button}>Delete User4</button>
      </form>
      </>
    :
    <>
    <br></br>
    <button onClick={() => setShowState(true)} className={styles.button}>Delete User</button>
    </>
    }
    </div>
  )
}

export default DeleteUser