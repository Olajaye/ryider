import React from 'react'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Logout = () => {
  const {backendUrl}= useAuth()
  const url = `${backendUrl}/api/auth/logout`
  const navigate = useNavigate()

  const LogOut = async()=>{
    try {
      const {data}= await axios.post(url)
      if(data.success){
        console.log(data)
        localStorage.removeItem('token');
        navigate('/')
      }
    } catch (error) {
      
    }
  }
  return (
    <button className='bg-red-900 p-3 ' onClick={LogOut}>Logout</button>
  )
}

export default Logout