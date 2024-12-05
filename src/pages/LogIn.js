import React, { useState } from 'react'
import Input from '../core/Input'
import { PasswordInput } from '../core/PasswordInput'


const LogIn = () => {
  const [password, setPassword]=useState('')
  const [emailOrPhone, setEmailOrPhone] = useState('')

  const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(password)
    console.log(emailOrPhone)
  }

  return (
    <section className='container mx-auto px-4'>
      <div className='h-screen flex justify-center items-center'>
        <div className='w-full md:w-[60%]'>
          <div className='flex justify-center items-center'>
            {/* <IoIosArrowBack className='h-7 w-7'/> */}
            <h2 className='font-poppins text-2xl text-[#111111] text-center font-semibold flex items-center justify-center'>Welcome back</h2>
          </div>

          <div className='pt-16'>
            <form onSubmit={handleSubmit}>
              <Input 
                label={"Full Name or Business name"}
                id={"emailOrPhone"}
                name={"emailOrPhone"}
                value={emailOrPhone}
                onChangeHandler={(e)=>setEmailOrPhone(e.target.value)}
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

              <h5 className='font-poppins font-medium text-sm text-center pt-7'>Forget your password? <a href="forgetpassword" className='text-green'>Click here</a></h5>



              <button
                type="submit"
                className="w-full bg-green text-white py-2 px-4 rounded-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 mt-6"
                >
                  Sign In
              </button>


              <h5 className='font-poppins font-medium text-sm text-center pt-7'>Dont't have an account? <span className='text-green'>Sign up</span></h5>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogIn