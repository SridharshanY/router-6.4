import React from 'react'
import Menu from '../components/Menu'
import Back from '../components/Back'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <Menu />
      <main className='flex flex-col justify-center items-center'>
        <Outlet />
        <Back />
      </main>
    </div>
  )
}

export default AppLayout
