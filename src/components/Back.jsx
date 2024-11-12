import React from 'react'
import { useNavigate } from 'react-router-dom'

const Back = () => {
    const navigate = useNavigate()
  return (
    <div>
      <p>Go back</p>
      <button className='px-4 py-2 border-4 border-black rounded-xl hover:bg-black hover:text-white duration-150 active:scale-90' onClick={()=>navigate(-1)}>Back</button>
    </div>
  )
}

export default Back
