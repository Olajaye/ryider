import { createContext, useContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../constant/url";
import axios from "axios";
import { ErrorAlert } from "../core/alert";




export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
  axios.defaults.withCredentials = true
  const backendUrl = BACKEND_URL
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(false)
  const [auth, setAuth] = useState(()=> {
    const tokenAuth = localStorage.getItem("token");
    return tokenAuth ? JSON.parse(tokenAuth): null
  }) 



  useEffect(()=>{
    if(auth !== null){
      localStorage.setItem('token', JSON.stringify(auth))
      getUserData()
    }
  },[auth])

  const getUserData = async ()=>{
    axios.defaults.withCredentials = true
    const url = `${backendUrl}/api/user/data`
    try {
      const {data} = await axios.get(url)
      data.success ? setUserData(data.user) : ErrorAlert(data.message)
    } catch (error) {
      ErrorAlert(error.message)
    }
  }  

  const value ={
    backendUrl,
    isLoggedIn, 
    setIsLoggedIn,
    userData, 
    setUserData,
    setAuth,
    auth
  }
  
  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
} 

export const useAuth = ()=> useContext(AuthContext)