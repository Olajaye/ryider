import React from 'react'
// import { useAuth } from '../context/AuthContext'
// import Logout from './Logout'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router'
import { UserProfile } from '../../components/UserProfile'
import Logout from '../Logout'

const DashboardLayout = () => {
 

  return (
    <>
      {/* <Logout/> */}
      <div className="flex max-h-screen overflow-y-hidden bg-gray-50">
        {/* Sidebar: Make it fixed and full height */}
        <Sidebar className="fixed top-0 left-0 h-full w-64 bg-white shadow-md" />
        
        <div className='flex-1'>
          <header className="h-16 px-8 flex justify-end items-center border-b bg-white sticky top-0 z-10">
            <UserProfile />
            <Logout/>
          </header>
          <main className="py-8 px-4 overflow-y-scroll max-h-screen">
            <Outlet/>
          </main>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout