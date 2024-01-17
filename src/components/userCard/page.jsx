import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
      <h1>{user.firstname} {user.lastname}</h1>
      <p>{user.email}</p>
      <p>{user.isAdmin}</p>
      

    </div>
  )
}

export default UserCard