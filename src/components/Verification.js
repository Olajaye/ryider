import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { ErrorAlert, SuccessAlert } from '../core/alert';



const Verification = ({url, route}) => {
  const [code, setCode] = useState(Array(6).fill('')); // Array to store the 6 digits
  const [error, setError] = useState('');

  const navigate = useNavigate()

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



 
  //Function to handle form submission (verification)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredCode = code.join('');

    // Basic validation: Check if the code is exactly 6 digits
    if (enteredCode.length !== 6 || !/^\d{6}$/.test(enteredCode)) {
      setError('Please enter a valid 6-digit code.');
      return;
    }

   
  
    try {
      axios.defaults.withCredentials = true
      const {data} = await axios.post(url, { otp: enteredCode });
      if (data.success) {
        SuccessAlert(data.message)
        navigate(route)
      } else {
        ErrorAlert(data.message)
        setError('Invalid verification code. Please try again.');
      }
    } catch (error) {
      ErrorAlert(error.message)
      setError('An error occurred while verifying the code.');
    }
  };


  return (
  
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm shadow-green">
        <h2 className="text-xl font-semibold text-center mb-6">Email Verification</h2>
        <form onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green text-white rounded-md hover:bg-green focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Verify
          </button>
        </form>
      </div>
    
  )
}

export default Verification