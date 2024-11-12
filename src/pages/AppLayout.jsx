import React from 'react'
import Menu from '../components/Menu'
import Back from '../components/Back'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading'

const AppLayout = () => {

  const navigation = useNavigation()
  const isLoading = navigation.state==='loading'

  return (
    <div>
      <Menu />
      {isLoading && <Loading />}
      <main className='flex flex-col justify-center items-center'>
        <Outlet />
        <Back />
      </main>
    </div>
  )
}

export default AppLayout
