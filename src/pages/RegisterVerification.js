import React from 'react'
import Verification from '../components/Verification'
import { useAuth } from '../context/AuthContext'

const RegisterVerification = () => {
  const {backendUrl} = useAuth()
  const url = `${backendUrl}/api/auth/verify-otp`
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Verification url={url} route={'/dashboard'}/>
    </div>
  )
}

export default RegisterVerification