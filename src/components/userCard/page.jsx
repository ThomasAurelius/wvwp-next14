import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
      <div>
         <h1>Parent: {user.firstname} {user.lastname}</h1>
         <p>{user.email}</p>
         <p>{user.phone}</p>
         <p>{user.street}</p>
         <p>{user.city}, {user.state} {user.zip}</p>
      </div>
      

    </div>
  )
}

export default UserCard