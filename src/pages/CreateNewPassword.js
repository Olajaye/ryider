import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { PasswordInput } from '../core/PasswordInput';


const CreateNewPassword = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const passwordsMatch = password === confirmPassword;

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(password)
    console.log(confirmPassword)
  }
  


  return (
    <section className='container mx-auto px-4'>
      <div className='h-screen flex justify-center items-center'>
        <div className='w-full md:w-[60%]'>
          <div className='flex justify-center items-center'>
            <a href='login'><IoIosArrowBack className='h-7 w-7'/></a>
            <h2 className='font-poppins text-2xl w-[95%] text-[#111111] text-center font-semibold flex items-center justify-center'>Password Reset</h2>
          </div>

          <div className='pt-16'>
            <form onSubmit={handleSubmit}>
              <div className='space-y-3'>
                <label className='pb-5 font-poppins font-semibold text-base text-[#111111]'>
                  Password
                </label>
                <PasswordInput
                  value={password}
                  onChange={setPassword}
                />
              </div>

              <div className='pt-7 space-y-3'>
                <label className=' font-poppins font-semibold text-base text-[#111111]'>
                  Confirm password
                </label>
                <PasswordInput
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                />
              </div>


              <button
                type='submit'
                disabled={!passwordsMatch}
                className="w-full bg-green text-white py-2 px-4 rounded-lg  disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 mt-6"
                >
                 Countinue
              </button>
            </form>
             
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default CreateNewPassword