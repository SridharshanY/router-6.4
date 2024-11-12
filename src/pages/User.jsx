import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'

const User = () => {

  const users = useLoaderData()

  return (
    <div className='flex flex-row flex-wrap justify-evenly gap-y-8'>
      {users?.data.map((user, index)=>(
        <Card key={index} user={user} />
      ))}
    </div>
  )
}

export default User
