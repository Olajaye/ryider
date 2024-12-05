import React, { useState } from 'react'
import Input from '../core/Input'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'



const ForgetPassword = () => {
  const [formData,  setFormData] = useState({ email:"", code:""})

  const navigate = useNavigate()

  const handleOnChange = (e)=>{
    const {name, value} = e.target
    setFormData((prev)=> ({...prev, [name]: value}))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData)
    navigate('/createpassword')
  }
  

  return (
    <section className='container mx-auto px-4'>
      <div className='h-screen flex justify-center items-center'>
        <div className='w-full md:w-[60%]'>
          <div className='flex justify-center items-center'>
            <a href='login'><IoIosArrowBack className='h-7 w-7'/></a>
            <h2 className='font-poppins text-2xl w-[95%] text-[#111111] text-center font-semibold flex items-center justify-center'>Password Reset</h2>

          </div>

          <p className="text-gray-600 text-sm text-center mb-6 mt-3">
           Please enter your registered email address to reset your password
          </p>

          <div className='pt-10'>
            <form onSubmit={handleSubmit}>
              <Input 
                label={"Enter Email"}
                id={"email"}
                name={"email"}
                value={formData.email}
                onChangeHandler={handleOnChange}
                placeholder={"tomaxk.dami.1999@gmail.com"}
                type={'text'}
              />

              <div className='pt-10'>
              <Input 
                label={"Verification code"}
                id={"code"}
                name={"code"}
                value={formData.code}
                onChangeHandler={handleOnChange}
                placeholder={"enter code sent to email"}
                type={'text'}
              />
              </div>

             

              <h5 className='font-poppins font-medium text-sm text-center pt-7'>Didn't get an email? <span className='text-green'>Send again</span></h5>



              <button
                type='submit'
                className="w-full bg-green text-white py-2 px-4 rounded-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 mt-6"
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

export default ForgetPassword