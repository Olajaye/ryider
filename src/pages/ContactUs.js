import React from 'react'
import Navbar from '../core/Layout/Navbar'

const ContactUs = () => {
  return (
    <main>
      <Navbar/>
     <div
        className="relative w-full h-[60vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(/background/contactus.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0  text-white px-4" >
          <div className='flex flex-col items-center justify-center text-center'>
            <div className='text-center max-w-[70%] pt-40'>
              <h1 className='text-white text-4xl font-bold'>Contact Us</h1>
              <p>We’re here to help! At Ryider your feedback, questions, and concerns are important to us. Whether you're a Shopper, Publisher, or just curious about what we do, our team is ready to assist you.</p>
            </div>

            <div className='flex space-x-5 mt-5'>
              <div className='rounded-full'>
               <img src='/contactus/facebook.png' alt='facebook' className='w-10 h-10 rounded-full'/>
              </div>
              <div className='rounded-full'>
               <img src='/contactus/ticktok.png' alt='facebook' className='w-10 h-10 rounded-full'/>
              </div>
              <div className='rounded-full'>
               <img src='/contactus/telegram.png' alt='facebook' className='w-10 h-10 rounded-full'/>
              </div>
              <div className='rounded-full'>
               <img src='/contactus/youtube.png' alt='facebook' className='w-10 h-10 rounded-full'/>
              </div>
              
            </div>

            <div className='text-center max-w-[70%] pt-3'>
              <p>For business inquiries, collaborations, or partnerships: Email: busryidertech@ryider.com</p>
            </div>
          </div>
          
        </div>
      </div>


      <div className='container mx-auto px-4 py-10'>
        <div className='md:flex gap-3'>
          <div className='bg-[#128C7E1A] flex-1'>
            <div className='p-5 space-y-5'>
              <h1 className='font-extrabold text-2xl text-gray-900'>
                <span className='text-green'>Office</span> Hours
              </h1>
              <p className='text-base font-normal text-black mt-2'>Our team is available to assist you during the following hours:</p>
            
              <div className='space-y-4'>
                <p>Monday to Thursday: 9:00 AM – 5:30 PM </p>
                <p>Friday: 10:00 AM – 12:00 PM </p>
                <p>Closed on Saturdays & Sundays</p>
              </div>

              <h1 className='font-extrabold text-2xl text-gray-900'>
                <span className='text-green'>Address</span> 
              </h1>
              <p className='text-base font-normal text-black mt-2'>Leave blank for now</p>
            </div>
          </div>

          <div className='space-y-5 flex-1' >
            <div className=''>
              <div className='bg-[#128C7E1A] p-5'>
                <h1 className='font-extrabold text-2xl text-gray-900'>
                  <span className='text-green'>Feedback & Suggestion</span> 
                </h1>
                <p className='mt-5'>We value your feedback! If you have suggestions on how we can improve or new features you'd like to see, feel free to share them with us at feedback@ryider.com.</p>
    
              </div>
            </div>


            <div className=''>
              <div className='bg-[#128C7E1A] p-5'>
                <h1 className='font-extrabold text-2xl text-gray-900'>
                  Customer <span className='text-green'>Support</span> 
                </h1>

                <div className='space-y-3'>
                  <p> For assistance on your account, services, or general inquires, contact our support team:
                  </p>

                  <p><span className='text-green'>Email:</span> support@ryider.com</p>

                  <p><span className='text-green'>Phone:</span> +234708646778</p>

                  <p><span className='text-green'>Live Chat:</span> Available on User’s Dashboard</p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactUs