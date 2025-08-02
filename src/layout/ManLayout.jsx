import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
  return (
    <div>
      <main>
        <Outlet/>
      </main>
      <Sidebar/>
    </div>
  )
}

export default MainLayout
