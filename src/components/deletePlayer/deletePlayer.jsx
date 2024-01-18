import React from 'react'
import { deletePlayer } from '@/lib/action'
import { useFormState } from 'react-dom'

const DeletePlayer = ({player}) => {
   const [state, formAction] = useFormState(
      deletePlayer, undefined
   )

   console.log("player: " + player._id)
  return (
    <div>
      <form action={formAction}>
         <input type="hidden" name="_id" value={player._id} />
         <input type="hidden" name="name" value={player.firstname} />
         <button onSubmit={deletePlayer} className="my-2 bg-blue-300 border-black">Delete Player</button>
      </form>
    
    </div>
  )
}

export default DeletePlayer