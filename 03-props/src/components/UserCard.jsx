import React from 'react'

const UserCard = props => {
  return (
      <div>
          <h2>{props.name}</h2>
          <p>Role : {props.role}</p>
          <p>City : {props.city}</p>
    </div>
  )
}

export default UserCard