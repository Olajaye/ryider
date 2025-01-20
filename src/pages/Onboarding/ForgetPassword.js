import React, { useState } from 'react'
import Input from '../../core/Input'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios'
import { Loading } from '../../core/LoadingSpiner'



const ForgetPassword = () => {
  const [email,  setEmail] = useState('')
  const navigate = useNavigate()
  const {backendUrl} = useAuth()
    const [loading, setLoading]= useState(false)

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true)

    const url = `${backendUrl}/api/auth/send-reset-otp`
    try {
      const {data} = await axios.post(url, {email});
      if (data.success) {
        setLoading(false)
        localStorage.setItem('resetEmail', JSON.stringify(email));
        console.log(data)
        navigate('/createpassword')
      } 
    } catch (error) {
      setLoading(false)
      console.log(error)
    }

    
  }
  

  return (
    <section  className='bg-onboardingBg bg-no-repeat bg-cover'>
       {loading && <Loading/>}
      <div className='container mx-auto px-4 h-screen'>
        <div className='flex h-screen justify-center items-center'>
          <div className='flex-1'>
            <img src='/onboarding/onBoardLogo.svg' alt='logo'/>
          </div>
          <div className='h-[80vh] flex-1 flex justify-center items-center '>
            <div className='bg-white w-[80%] h-[80vh] flex justify-center items-center rounded-md'>
              <div className='p-4'>
                <div className='flex justify-center items-center'>
                  <a href='login'><IoIosArrowBack className='h-7 w-7'/></a>
                  <h2 className='font-poppins text-2xl w-[95%] text-[#111111] text-center font-semibold flex items-center justify-center'>Forgot Password</h2>

                </div>

                <p className="text-gray-600 text-sm text-center mb-6 mt-3 ">
                Please enter your registered email address and we will send you a link to reset password
                </p>
                <div className='pt-6'>
                  <form onSubmit={handleSubmit}>
                    <Input 
                      label={"Enter Email"}
                      id={"email"}
                      value={email}
                      onChangeHandler={(e)=>setEmail(e.target.value)}
                      placeholder={"tomaxk.dami.1999@gmail.com"}
                      type={'text'}
                    />

                    {/* <div className='pt-10'>
                    <Input 
                      label={"Verification code"}
                      id={"code"}
                      name={"code"}
                      value={formData.code}
                      onChangeHandler={handleOnChange}
                      placeholder={"enter code sent to email"}
                      type={'text'}
                    />
                    </div> */}

                  

                    {/* <h5 className='font-poppins font-medium text-sm text-center pt-7'>Didn't get an email? <span className='text-green'>Send again</span></h5> */}



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
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default ForgetPassword