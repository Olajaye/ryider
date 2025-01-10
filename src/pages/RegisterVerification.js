import React from 'react'
import Verification from '../components/Verification'
import { useAuth } from '../context/AuthContext'

const RegisterVerification = () => {
  const {backendUrl} = useAuth()
  const url = `${backendUrl}/api/auth/verify-otp`
  return (
    <Verification url={url} route={'/dashboard'}/>
  )
}

export default RegisterVerification