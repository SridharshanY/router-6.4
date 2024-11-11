import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <h1>Name: </h1>
        <img src="" alt="" />
        <p>Email ID: </p>
      </div>
    </div>
  )
}

export default Card
