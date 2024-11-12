import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getSelectedUser } from '../services/apiUsers'

const UserDetail = () => {

  const users = useLoaderData()
  console.log(users)
  const {email, avatar, first_name, last_name} = users.data

  return (
    <div className="flex flex-col justify-center items-center gap-4 border-4 border-black rounded-3xl w-80 py-4">
      <h1>
        Name: {first_name} {last_name}
      </h1>
      <img src={avatar} alt="userAvatar" />
      <p>Email ID: {email}</p>
    </div>
  )
}

export const loader = async({params}) => {
  const userDetail = getSelectedUser(params.id)
  return userDetail
}

export default UserDetail