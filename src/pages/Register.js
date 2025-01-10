import React, { useState } from 'react'
import Carousel from '../core/Carosel'
import { IoIosArrowBack } from 'react-icons/io'
import Input from '../core/Input'
import { RegisterPasswordForm } from '../components/PasswordForm'
import { validatePassword } from '../util/passwordvalidation';
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { ErrorAlert } from '../core/alert'
import { Loading } from '../core/LoadingSpiner'

const images = [
  '/register/registerImage.svg',
  '/register/registerimage2.svg',
  '/register/registerimage3.svg'
]

const formData = {
 fullname: "",
 country: "",
 email:"",
 phone:"",
 referral:"",
 coupon:""
}


const Register = () => {
  const [selectedRole, setSelectedRole] = useState(null)
  const [step, setStep] = useState(1);
  const [formFeild, setFormFeild]=useState(formData)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const validation = validatePassword(password);
  const passwordsMatch = password === confirmPassword;
  const [errors, setErrors] = useState({fullname: "", country: "", email:"", phone:"", referral:""});
  const [loading, setLoading]= useState(false)

  const { backendUrl, setAuth} = useAuth()
  const navigate = useNavigate()

  const reset = ()=>{
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
    setSelectedRole(null)
  }

  const handleShopperChange = () => {
    setSelectedRole(prev => (prev === 'shopper' ? null : 'shopper'));
  };

  const handlePublisherChange = () => {
    setSelectedRole(prev => (prev === 'publisher' ? null : 'publisher'));
  };

  const handleFormDataOnChange = (e)=>{
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



  const handleSubmit = async (e) => {
    e.preventDefault();

    const {fullname, email, country, phone, referral  } = formFeild


    if (validation.isValid && passwordsMatch) {
      reset()
      setLoading(true)
      try {
        axios.defaults.withCredentials = true
        const url = `${backendUrl}/api/auth/register`
        const {data} = await axios.post(url, {
        name: fullname,
        email: email,
        role: selectedRole,
        password: password,
        country: country,
        phone: phone,
        referral: referral
        })
  
        if(data.success){
          const {token}= data 
          setAuth({token})
          const url = `${backendUrl}/api/auth/send-verify-otp`
          const res = await axios.post(url)
          setLoading(false)
          if(res.data.success){
            navigate('/verification')
          }else{
            ErrorAlert(res.data.message)
          }
        
        }else{
          setLoading(false)
          ErrorAlert(data.message)
        }
        
      } catch (error) {
        setLoading(false)
        ErrorAlert(error.message)
      }
    } 
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <section className='relative bg-onboardingBg bg-no-repeat bg-cover'>
            <div className='container mx-auto px-4'>
              <div className='flex justify-center items-center h-screen'>
                <div className='flex justify-center items-center flex-col'>
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
          <section className='relative bg-onboardingBg bg-no-repeat bg-cover'>
            <div className='container mx-auto px-4'>
              <div className='flex justify-center items-center h-screen flex-col'>

                <h2> </h2>
               
                <div className='flex space-x-9 md:space-x-20 mt-4'>
                  <div className='flex space-x-2 items-center'>
                    <input 
                      id="shopper" 
                      type="checkbox" 
                      className="hidden"
                      checked={selectedRole === 'shopper'}
                      onChange={handleShopperChange}
                      required
                    />
                    <label 
                      htmlFor="shopper"  
                      className="cursor-pointer"
                    >
                      <img src='/onboarding/shopperCard.svg' alt='shopper'/> 
                    </label>
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
                    <label 
                      htmlFor="publisher"  
                      className="cursor-pointer ">
                      <img src='/onboarding/publisherCard.svg' alt='shopper'/>  
                    </label>
                  </div>
                </div>

                <button 
                  onClick={()=>setStep(3)} 
                  type='button' 
                  disabled={selectedRole === null} 
                  className={`${selectedRole === null ? "bg-[#128c7e83]":"bg-green"} text-white  w-[100%] md:w-[70%] py-2 rounded-lg mt-5 text-lg font-poppins font-bold`}>
                  Continue
                </button>

                <h4 className='mt-4 font-poppins font-semibold text-lg'>
                  Already have an account <a href='/login' className='text-green '>Sign in</a>
                </h4>

                <h5 className='text-[#11183C] font-poppins text-sm text-center mt-5'>
                  By registering you accept our Terms & Conditions and Privacy Policy. Your data will be security encrypted
                </h5>
              </div>
            </div>
          </section>
        );
      case 3:
        return (
          <section className='bg-onboardingBg bg-no-repeat bg-cover'>
            <div className='container mx-auto px-4'>
              <div className='h-screen flex justify-center items-center'>
                <div className='flex-1'>
                  <img src='/onboarding/onBoardLogo.svg' alt='logo'/>
                </div>
                <div className='h-[90vh] flex-1 flex justify-center items-center '>
                  <div className='bg-white w-[80%] h-auto rounded-md'>
                    {/* Content */}
                    <div className='p-4'>
                      <div className='flex justify-between'>
                        <IoIosArrowBack className='h-7 w-7' onClick={()=>setStep(2)}/>
                        <h2 className='font-poppins flex-1 text-xl text-[#111111] text-center font-semibold flex items-center justify-center'>Enter your personal information</h2>
                      </div>

                      <div className='space-y-5 mt-7'>
                        <Input 
                          label={"Full Name or Business name"}
                          id={"legalname"}
                          name={"fullname"}
                          value={formFeild.fullname}
                          onChangeHandler={handleFormDataOnChange}
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
                            onChange={handleFormDataOnChange}
                            >
                            <option value="">--Choose an option--</option>
                            <option value="nigeria">Nigeria</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                        </div>

                        <Input 
                          label={"Email Address"}
                          id={"email"}
                          name={"email"}
                          value={formFeild.email}
                          onChangeHandler={handleFormDataOnChange}
                          placeholder={"Enter your email address"}
                          type={'email'}
                        />

                        {selectedRole === "publisher" && <Input 
                          label={"Coupon"}
                          id={"coupon"}
                          name={"coupon"}
                          value={formFeild.coupon}
                          onChangeHandler={handleFormDataOnChange}
                          placeholder={"Enter your coupon code"}
                          type={'text'}
                        />}
                      
                        <Input 
                          label={"Phone Number"}
                          id={"phone"}
                          name={"phone"}
                          value={formFeild.phone}
                          onChangeHandler={handleFormDataOnChange}
                          placeholder={"Enter your phone number"}
                          type={'number'}
                        />

                        <Input 
                          label={"Referral Username"}
                          id={"referral"}
                          name={"referral"}
                          value={formFeild.referral}
                          onChangeHandler={handleFormDataOnChange}
                          placeholder={"motionbyables"}
                          type={'text'}
                        />

                        <div className='flex justify-center items-center'>
                          <button onClick={handleNext}  className='text-white bg-green w-[80%] py-2 rounded-lg  text-lg font-poppins font-bold'>
                            Countinue
                          </button>
                        </div>
                      </div>
                    </div>
                 </div>
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
      {loading && <Loading/>}
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
