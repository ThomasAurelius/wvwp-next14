"use client"
import React from 'react'
import { deleteUser } from '@/lib/action'
import { useFormState } from 'react-dom'

const DeleteUser = ({user}) => {
   const [state, formAction] = useFormState(
      deleteUser, undefined
   )

  return (
    <div>
      <form action={formAction}>
         <input type="hidden" name="_id" value={user._id} />
         <input type="hidden" name="name" value={user.firstname} />
         <button onSubmit={deleteUser} className="my-2 bg-blue-300 border-black">Delete Player</button>
      </form>
    
    </div>
  )
}

export default DeleteUser