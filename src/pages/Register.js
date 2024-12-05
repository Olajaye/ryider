import React, { useState } from 'react'
import Carousel from '../core/Carosel'
import { IoIosArrowBack } from 'react-icons/io'
import Input from '../core/Input'
import { RegisterPasswordForm } from '../components/PasswordForm'
import { validatePassword } from '../util/passwordvalidation';

const images = [
  '/register/registerImage.svg',
  '/register/registerimage2.svg',
  '/register/registerimage3.svg'
]

const formData = {
 fullname: "",
 country: "",
 email:"",
 code:"",
 phone:"",
 referral:""
}


const Register = () => {
  const [selectedRole, setSelectedRole] = useState(null)
  const [step, setStep] = useState(1);
  const [formFeild, setFormFeild]=useState(formData)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const validation = validatePassword(password);
  const passwordsMatch = password === confirmPassword;
  const [errors, setErrors] = useState({
    fullname: "",
    country: "",
    email:"",
    code:"",
    phone:"",
    referral:""
  });


  const handleShopperChange = () => {
    setSelectedRole(prev => (prev === 'shopper' ? null : 'shopper'));
  };

  const handlePublisherChange = () => {
    setSelectedRole(prev => (prev === 'publisher' ? null : 'publisher'));
  };

  const handleFormDaatOnChange = (e)=>{
    const {name, value} = e.target
    setFormFeild((prev)=> ({...prev, [name]:value}))
  }

  const validateStep = () => {
    let newErrors = {};
    switch (step) {
      case 3:
        if (!formFeild.fullname) newErrors.name = 'Fullame is required';
        if (!formFeild.email) newErrors.email = 'Email is required';
        if (!formFeild.country) newErrors.street = 'Country is required';
        if (!formFeild.phone) newErrors.city = 'Phone is required';
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation.isValid && passwordsMatch) {
      console.log('Password is valid and matches!');
    }
    setFormFeild({
      fullname: "",
      country: "",
      email:"",
      code:"",
      phone:"",
      referral:""
     })
     setPassword("")
     setConfirmPassword('')
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <section className='relative'>
            <div className='container mx-auto px-4'>
              <div className='flex justify-center items-center h-screen'>
                <div className='flex justify-center items-center flex-col'>
                  {/* <img src='/register/registerImage.svg' alt='register'/> */}
                  <Carousel images={images}/>

                  <h1 className='mt-5 font-poppins font-bold text-2xl md:text-4xl text-center'>Earn <span className='text-green'>Money</span> from Everyday Tasks with <span className='text-green'>Ryider</span></h1>
                  <p className='font-poppins font-normal text-sm md:text-xl text-center md:max-w-[70%] mt-4'>Turn your online activities into real earnings. Complete tasks, get paid, and make the most of your time!"</p>
                </div>
              </div>
            </div>
            <div className='absolute bottom-10 right-10'>
              <button onClick={()=> setStep(2)}  className='text-black px-7 py-2 border-[1px] border-gray-400 hover:bg-green transition-all duration-300 rounded-lg'>
                Skip
              </button> 
            </div>
          </section>
        );
      case 2:
        return (
          <section className='relative'>
            <div className='container mx-auto px-4'>
              <div className='flex justify-center items-center h-screen flex-col'>
                <img src='/onboardingImage.png' alt='register'/>
                <h5 className='mt-3 font-poppins font-bold text-2xl text-center'>
                  Are you a Shopper or Publisher
                </h5>
                <p className='font-poppins font-normal text-sm md:text-xl text-center mt-2'>
                  please select one option
                </p>

                <div className='flex space-x-20 mt-3'>
                  <div className='flex space-x-2 items-center'>
                    <input 
                      id="shopper" 
                      type="checkbox" 
                      className="hidden"
                      checked={selectedRole === 'shopper'}
                      onChange={handleShopperChange}
                      required
                    />
                    <label htmlFor="shopper"  className="w-6 h-6 rounded-full border-[1px] border-gray-400  bg-white  cursor-pointer transition-colors duration-300 flex items-center justify-center">
                      <div className={`w-5 h-5 rounded-full ${selectedRole === 'shopper' ? 'bg-green' : 'bg-gray-400'}`} />
                    </label>
                    <label htmlFor='shopper'> I am a Shopper</label>
                  </div>
                  <div className='flex space-x-2 items-center'>
                    <input 
                      id="publisher" 
                      type="checkbox" 
                      className="hidden"
                      checked={selectedRole === 'publisher'}
                      required
                      onChange={handlePublisherChange}
                      />
                    <label htmlFor="publisher"  className="w-6 h-6 rounded-full border-[1px] border-gray-400  bg-white  cursor-pointer transition-colors duration-300 flex items-center justify-center">
                      <div className={`w-5 h-5 rounded-full ${selectedRole === 'publisher' ? 'bg-green' : 'bg-gray-400'}`} />
                    </label>
                    <label htmlFor='publisher'> I am a Publisher</label>
                  </div>
                </div>

                <button 
                  onClick={()=>setStep(3)} 
                  type='button' 
                  disabled={selectedRole === null} 
                  className={`${selectedRole === null ? "bg-[#128c7e83]":"bg-green"} text-white  w-[100%] md:w-[70%] py-2 rounded-lg mt-5 text-lg font-poppins font-bold`}>
                  Countinue
                </button>

                <h4 className='mt-4 font-poppins font-semibold text-lg'>
                  Already have an account <a href='/login' className='text-green '>Sign in</a>
                </h4>

                <h5 className='text-[#11183C] font-poppins text-sm text-center mt-3'>
                  By registering you accept our Terms & Conditions and Privacy Policy. Your data will be security encrypted
                </h5>
              

              

              </div>
            </div>
          </section>
        );
      case 3:
        return (
          <section>
            <div className='container mx-auto px-4'>
              <div className='h-screen flex-col pt-16'>
                <div className='flex'>
                  <IoIosArrowBack className='h-7 w-7' onClick={()=>setStep(2)}/>
                  <h2 className='font-poppins w-[90%] text-2xl text-[#111111] text-center font-semibold flex items-center justify-center'>Enter your personal information</h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-20 pt-10 md:pt-24'>
                  
                    <Input 
                      label={"Full Name or Business name"}
                      id={"legalname"}
                      name={"fullname"}
                      value={formFeild.fullname}
                      onChangeHandler={handleFormDaatOnChange}
                      placeholder={"Legal full name"}
                      type={'text'}
                    />
                  
                 

                  <div className='flex flex-col'>
                    <label htmlFor='selectCountry' className='font-poppins font-semibold text-base text-[#111111]'>
                      Select Country</label>
                    <select 
                      id='selectCountry' 
                      className='w-full mt-2 p-2 outline-green border-[1px] border-green rounded-lg'
                      name='country'
                      value={formFeild.country}
                      required
                      onChange={handleFormDaatOnChange}
                      >
                      <option value="">--Choose an option--</option>
                      <option value="nigeria">Nigeria</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-20  pt-5 md:pt-16'>
                  
                  <Input 
                    label={"Email Address"}
                    id={"email"}
                    name={"email"}
                    value={formFeild.email}
                    onChangeHandler={handleFormDaatOnChange}
                    placeholder={"Enter your email address"}
                    type={'email'}
                  />
                
                  <Input 
                    label={"Phone Number"}
                    id={"phone"}
                    name={"phone"}
                    value={formFeild.phone}
                    onChangeHandler={handleFormDaatOnChange}
                    placeholder={"Enter your phone number"}
                    type={'number'}
                  />
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-20 pt-5 md:pt-16'>
                  <Input 
                    label={"Verification code"}
                    id={"code"}
                    name={"code"}
                    value={formFeild.code}
                    onChangeHandler={handleFormDaatOnChange}
                    placeholder={"Enter code sent to email"}
                    type={'text'}
                  />
                  <Input 
                    label={"Referral Username"}
                    id={"referral"}
                    name={"referral"}
                    value={formFeild.referral}
                    onChangeHandler={handleFormDaatOnChange}
                    placeholder={"motionbyables"}
                    type={'text'}
                  />
                </div>

                <div className='flex justify-center items-center pt-10'>
                  <button onClick={handleNext}  className='text-white bg-green w-[80%] py-2 rounded-lg mt-5 text-lg font-poppins font-bold'>
                    Countinue
                  </button>
                </div>
                
              </div>
            </div>
            {errors && ""}
          </section>
        );
      case 4:
        return (
          <RegisterPasswordForm password={password} setPassword={setPassword} confirmPassword={confirmPassword}setConfirmPassword={setConfirmPassword} passwordsMatch={passwordsMatch} validation={validation} setStep={setStep}/>
        )
      default:
        return null;
    }
  };
  

  return (
    <>
      
      <form onSubmit={handleSubmit}>
       {renderStepContent()}
      </form>
    </>
  )
}

export default Register





  







/*
const FormPageOne = () => {
  return (
    <div className='h-screen flex-col p-16'>
      <div className='flex'>
        <IoIosArrowBack className='h-7 w-7' />
        <h2 className='font-poppins w-[90%] text-2xl text-[#111111] text-center font-semibold flex items-center justify-center'>Enter your personal information</h2>
      </div>

      <div className='grid grid-cols-2 gap-10 pt-24'>
        <div>
          <label htmlFor='legalname' className='font-poppins font-semibold text-base text-[#111111]'>Full Name or Business name</label>
          <input 
            type='text'
            id='legalname'
            placeholder='Legal full name'
            className='w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-lg'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='selectCountry' className='font-poppins font-semibold text-base text-[#111111]'>Select Country</label>
          <select id='selectCountry' className='w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-lg'>
            <option>Nigeria</option>
          </select>
        </div>
      </div>


      <div className='grid grid-cols-2 gap-10 pt-16'>
        <div>
          <label htmlFor='legalname' className='font-poppins font-semibold text-base text-[#111111]'>Full Name or Business name</label>
          <input 
            type='text'
            id='legalname'
            placeholder='Legal full name'
            className='w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-lg'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='selectCountry' className='font-poppins font-semibold text-base text-[#111111]'>Select Country</label>
          <select id='selectCountry' className='w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-lg'>
            <option>Nigeria</option>
          </select>
        </div>
      </div>


      <div className='grid grid-cols-2 gap-10 pt-16'>
        <div>
          <label htmlFor='legalname' className='font-poppins font-semibold text-base text-[#111111]'>Full Name or Business name</label>
          <input 
            type='text'
            id='legalname'
            placeholder='Legal full name'
            className='w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-lg'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='selectCountry' className='font-poppins font-semibold text-base text-[#111111]'>Select Country</label>
          <select id='selectCountry' className='w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-lg'>
            <option>Nigeria</option>
          </select>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <button className='text-white bg-green w-[80%] py-2 rounded-lg mt-5 text-lg font-poppins font-bold'>
          Countinue
        </button>
      </div>       
    </div>
  )
}

const FormPageTwo = () => {
  return (
    <div className='h-screen flex-col p-16 bg-green'>
      <div className='flex'>
        <IoIosArrowBack className='h-7 w-7' />
        <h2 className='font-poppins w-[90%] text-2xl text-[#111111] text-center font-semibold flex items-center justify-center'>Enter your personal information</h2>
      </div>

      <div className='grid grid-cols-2 gap-10 pt-24'>
        <div>
          <label htmlFor='legalname' className='font-poppins font-semibold text-base text-[#111111]'>Full Name or Business name</label>
          <input 
            type='text'
            id='legalname'
            placeholder='Legal full name'
            className='w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-lg'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='selectCountry' className='font-poppins font-semibold text-base text-[#111111]'>Select Country</label>
          <select id='selectCountry' className='w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-lg'>
            <option>Nigeria</option>
          </select>
        </div>
      </div>


      <div className='grid grid-cols-2 gap-10 pt-16'>
        <div>
          <label htmlFor='legalname' className='font-poppins font-semibold text-base text-[#111111]'>Full Name or Business name</label>
          <input 
            type='text'
            id='legalname'
            placeholder='Legal full name'
            className='w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-lg'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='selectCountry' className='font-poppins font-semibold text-base text-[#111111]'>Select Country</label>
          <select id='selectCountry' className='w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-lg'>
            <option>Nigeria</option>
          </select>
        </div>
      </div>


      <div className='grid grid-cols-2 gap-10 pt-16'>
        <div>
          <label htmlFor='legalname' className='font-poppins font-semibold text-base text-[#111111]'>Full Name or Business name</label>
          <input 
            type='text'
            id='legalname'
            placeholder='Legal full name'
            className='w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-lg'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='selectCountry' className='font-poppins font-semibold text-base text-[#111111]'>Select Country</label>
          <select id='selectCountry' className='w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-lg'>
            <option>Nigeria</option>
          </select>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <button className='text-white bg-green w-[80%] py-2 rounded-lg mt-5 text-lg font-poppins font-bold'>
          Countinue
        </button>
      </div>       
    </div>
  )
}

*/
