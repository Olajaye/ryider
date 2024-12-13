import React from 'react'
import { useAuth } from '../context/AuthContext'
import Logout from '../core/Logout'

const Dashboard = () => {
  const {userData} = useAuth()

  return (
    <>
      <div className='text-4xl'>Welcome {userData.name}</div>
      <div className='text-xl'> Your Signin in as A {userData.role}</div>
      <Logout/>
     
    </>
  )
}

export default Dashboard