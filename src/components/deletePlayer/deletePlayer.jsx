import React from 'react'
import { deletePlayer } from '@/lib/action'
import { useFormState } from 'react-dom'
import styles from './deletePlayer.module.css'

const DeletePlayer = ({player}) => {
   const [state, formAction] = useFormState(
      deletePlayer, undefined
   )

   const [showState, setShowState] = React.useState(false)
   const toggleShowState = () => setShowState(!showState)

   console.log("player: " + player._id)
  return (
    <div>
    
    {showState ? <>
      <button onClick={toggleShowState} className={styles.cancelButton}>Cancel Delete Player</button>
      <br></br>
      <form action={formAction}>
         <input type="hidden" name="_id" value={player._id} />
         <input type="hidden" name="name" value={player.firstname} />
         <button onSubmit={deletePlayer} className={styles.button}>Confirm Delete Player</button>
      </form>
      </>
    :
    <>
    <br></br>
    <button onClick={() => setShowState(true)} className={styles.button}>Delete Player</button>
    </>
    }
    </div>
  )
}

export default DeletePlayer