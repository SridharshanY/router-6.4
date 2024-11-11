import React from 'react'
import Menu from '../components/Menu'
import Back from '../components/Back'

const AppLayout = () => {
  return (
    <div>
      <Menu />
      <main>
        <h1>Content</h1>
      </main>
      <Back />
    </div>
  )
}

export default AppLayout
