import React from 'react'
import Navbar from '../core/Layout/Navbar'

const ContactUs = () => {
  return (
    <main>
     <div
        className="relative w-full h-[60vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(/background/contactus.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        

        <div className="absolute inset-0  text-white px-4" >
          <div className='z-50 backdrop-blur-md' style={{zIndex: 999}}>
            <Navbar/>
          </div>


          <div className='flex flex-col items-center justify-center text-center'>
            <div className='text-center max-w-[70%] pt-20'>
              <h1 className='text-white text-4xl font-bold'>Contact Us</h1>
              <p>We’re here to help! At Ryider your feedback, questions, and concerns are important to us. Whether you're a Shopper, Publisher, or just curious about what we do, our team is ready to assist you.</p>
            </div>

            <div className='flex space-x-5 mt-20'>
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


      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 gap-3'>
          <div className='bg-[#128C7E1A]'>
            <div className=''>
              <div>
                <p><span>.</span> Providing employment to individuals.</p>
                <p><span>.</span> Connecting sellers with consumers to enhance business visibility.</p>
                <p><span>.</span> Linking businesses with investors to fuel growth and innovation.</p>
                <p><span>.</span> Empowering marketers to reach their audiences effectively.</p>
                <p><span>.</span>Helping show and event promoters gain a larger and more engaged audience.</p>
              </div>
            </div>
          </div>

          <div >
            <div>
              <div cclassName='bg-[#128C7E1A]'>
                <div>
                  <p><span>.</span> Providing employment to individuals.</p>
                  <p><span>.</span> Connecting sellers with consumers to enhance business visibility.</p>
                  <p><span>.</span> Linking businesses with investors to fuel growth and innovation.</p>
                  <p><span>.</span> Empowering marketers to reach their audiences effectively.</p>
                  <p><span>.</span>Helping show and event promoters gain a larger and more engaged audience.</p>
                </div>
              </div>
            </div>

            <div className='mt-10'>
              <div className='bg-[#128C7E1A]'>
                <div>
                  <p><span>.</span> Providing employment to individuals.</p>
                  <p><span>.</span> Connecting sellers with consumers to enhance business visibility.</p>
                  <p><span>.</span> Linking businesses with investors to fuel growth and innovation.</p>
                  <p><span>.</span> Empowering marketers to reach their audiences effectively.</p>
                  <p><span>.</span>Helping show and event promoters gain a larger and more engaged audience.</p>
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