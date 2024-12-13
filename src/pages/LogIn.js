import React, { useState } from 'react'
import Input from '../core/Input'
import { PasswordInput } from '../core/PasswordInput'
import { useAuth } from '../context/AuthContext'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import { Loading } from '../core/LoadingSpiner'
import { ErrorAlert } from '../core/alert'


const LogIn = () => {
  const [password, setPassword]=useState('')
  const [email, setEmail] = useState('')
  const {backendUrl, setAuth} = useAuth()
  const [loading, setLoading]= useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/" 

  const reset = ()=> {
    setEmail("")
    setPassword("")
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();

    const url = `${backendUrl}/api/auth/login`
    setLoading(true)
    
    try {
      reset()
      axios.defaults.withCredentials = true
      const {data} = await axios.post(url, {email, password})
      console.log(data)
      if(data.success){
        setLoading(false)
        const {token} = data
        setAuth({token})
        // navigate('/dashboard') 
        navigate(from, {replace: true})
      }else {
        setLoading(false);
        ErrorAlert(data.message)
      }
      
    } catch (error) {
      setLoading(false)
      ErrorAlert(error.message)
    }
  }

  return (
    <section className='container mx-auto px-4'>
     {loading && <Loading/>}
      <div className='h-screen flex justify-center items-center'>
        <div className='w-full md:w-[60%]'>
          <div className='flex justify-center items-center'>
            {/* <IoIosArrowBack className='h-7 w-7'/> */}
            <h2 className='font-poppins text-2xl text-[#111111] text-center font-semibold flex items-center justify-center'>Welcome back</h2>
          </div>

          <div className='pt-16'>
            <form onSubmit={handleSubmit}>
              <Input 
                label={"Email"}
                id={"email"}
                name={"email"}
                value={email}
                onChangeHandler={(e)=>setEmail(e.target.value)}
                placeholder={"tomaxk.dami.1999@gmail.com"}
                type={'text'}
              />

              <div className='pt-10 space-y-3'>
                <label className='font-poppins font-semibold text-base text-[#111111] '>
                  Enter password
                </label>
                <PasswordInput
                  value={password}
                  onChange={setPassword}
                  isValid={password}
                />
              </div>

              <h5 className='font-poppins font-medium text-sm text-center pt-7'>Forget your password? <a href="/forgetpassword" className='text-green'>Click here</a></h5>



              <button
                type="submit"
                className="w-full bg-green text-white py-2 px-4 rounded-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 mt-6"
                >
                  Sign In
              </button>


              <h5 className='font-poppins font-medium text-sm text-center pt-7'>Dont't have an account? <a href='/register' className='text-green'>Sign up</a></h5>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogIn