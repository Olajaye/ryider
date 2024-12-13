import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { PasswordInput } from '../core/PasswordInput';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';


const CreateNewPassword = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState(Array(6).fill('')); // Array to store the 6 digits
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const {backendUrl} = useAuth()
  const passwordsMatch = password === confirmPassword;
  const navigate = useNavigate()
  const Email = JSON.parse(localStorage.getItem('resetEmail'));

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    // If the value is a number between 0-9, update the corresponding digit
    if (/^\d$/.test(value) || value === '') {
      const updatedCode = [...code];
      updatedCode[index] = value;
      setCode(updatedCode);

      // Automatically focus on the next input field if the current one is filled
      if (value !== '' && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const enteredCode = code.join('');
    const url =  `${backendUrl}/api/auth/reset-password`
  

    // Basic validation: Check if the code is exactly 6 digits
    if (enteredCode.length !== 6 || !/^\d{6}$/.test(enteredCode)) {
      setError('Please enter a valid 6-digit code.');
      return;
    }

    
    try {
      console.log(
        enteredCode, Email, password
      )
      const {data} = await axios.post(url, { otp: enteredCode, email: Email, newPassword: password });
      console.log(data)
      if (data.success) {
        alert('password reset');
        localStorage.removeItem('resetEmail');
        navigate('/login')
      } else {
        setError('Invalid verification code. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while verifying the code.');
    }
    
  }


  return (
    <section className='container mx-auto px-4'>
      <div className='h-screen flex justify-center items-center'>
        <div className='w-full md:w-[60%]'>
          <div className='flex justify-center items-center'>
            <a href='login'><IoIosArrowBack className='h-7 w-7'/></a>
            <h2 className='font-poppins text-2xl w-[95%] text-[#111111] text-center font-semibold flex items-center justify-center'>Password Reset</h2>
          </div>

          <div className='py-10 justify-center items-center flex'>
            <form onSubmit={handleSubmit}>

            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm  mb-7">
              <h2 className="text-xl font-semibold text-center mb-6">Email Verification</h2>
            
              <div className="grid grid-cols-6 gap-4 mb-4">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    value={digit}
                    maxLength="1"
                    onChange={(e) => handleInputChange(e, index)}
                    autoFocus={index === 0} // Focus first input field on load
                    className="w-12 h-12 text-center text-2xl border border-green rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                  />
                ))}
              </div>

              {error && <div className="text-red-500 text-sm mb-4">{error}</div>}  
            </div>





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