import React from 'react'
import { getAllUser, getSelectedUser } from '../services/apiUsers'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Data Fetch</p>
    </div>
  )
}

// export const loader = async() =>{
//   const users = await getAllUser()
//   return users
// }

// export const singleLoader = async() =>{
//   const users = await getSelectedUser()
//   return users
// }

export default Home