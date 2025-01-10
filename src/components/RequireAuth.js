import { useLocation, Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";


const RequiredAuth = ()=>{
  const {auth}= useAuth()
  const location = useLocation()
  return(
    auth?.token 
      ?  <Outlet/>  
      : <Navigate to="/login" state={{from: location}} replace />
  )
}

export default RequiredAuth