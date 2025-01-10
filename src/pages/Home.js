import React from 'react'
// import Hero from '../core/Hero'
// import { items } from '../constant/listDB'
// import Cards from '../core/Cards'
// import CardHeader from '../core/CardHeader';
import { MdArrowOutward} from 'react-icons/md';
import { BsCashCoin,  } from 'react-icons/bs';
import FaqComponent from '../core/FAQ';
import { blogPost, reasons, services, steps } from '../constant/Home/home';



const Home = () => {
  return (
   <>
    {/* <Hero/> */}
    <header className='container mx-auto px-4 font-poppins py-7'> 
      <div className='md:flex justify-between items-center'>
        <div className='flex items-start flex-col text-start font-poppins flex-1'>
          <h1 className='text-black font-poppins font-bold md:text-5xl'>
            Earn <span className='text-green'>Money</span> from Everyday Tasks with <span className='text-green'>Ryider</span>
          </h1>
          <h6 className='mt-5 text-black'>Turn your online activities into real earnings. Complete tasks, get paid, and make the most of your time!"</h6>
          <div className="flex space-x-7  mt-5">
            <p className="text-black">Learn More</p>
            <a href="/" className="flex  items-center bg-[#128C7E] p-3 text-sm text-center font-medium text-white rounded-lg">Shop <MdArrowOutward className="ms-3 w-6 h-6"/></a>
          </div>
        </div>
        <div className='flex justify-center items-center flex-1  mt-5 md:mt-0'>
          <img src='Home/hero.svg' alt='hero' className='h-[300px] md:h-[500px] w-full'/>
        </div>
      </div>
    </header>
    <section className='bg-white mt-8 pb-16'>
      <div className='container mx-auto px-4 font-poppins '>
        <h2 className='text-green text-center font-bold text-3xl  pt-4'>Why Choose Ryider</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-16'>
          {reasons.map((item, i)=>(
            <div key={i} className=' p-4 border-[1px] bg-white rounded-lg'>
              <div className='w-auto'>
                <img src={item.icon} alt='icon' className='p-1 bg-[#128c7e1c] rounded-lg'/>
              </div>
              <h3 className='my-5 text-black font-semibold text-xl'>{item.title}</h3>
              <h6 className='text-[#646262] font-normal text-base'>{item.content}</h6>
            </div>
          ))}
        </div>

    
       
        
        {/* How it Works Section */}
        <div className="md:flex">
          <div className='flex-1 flex justify-center items-start flex-col md:max-w-[70%] '>
            <h2 className="text-lg font-normal text-black mb-8">How does Ryider work?</h2>
            <h3 className="text-5xl text-black font-extrabold leading-[60px]">
              Start earning from
              <br/>
              <span className="text-green ">Ryider </span> in 3 simple step
            </h3>
          </div>

          <div className="space-y-8 flex-1 mt-7 md:mt-0">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-green font-medium">
                  <BsCashCoin />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1"> Step - {step.number} : <span className='text-green'>{step.title} </span></h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
       

        {/* Services Section */}
        <div className='py-16'>
          <div className="text-center mb-12">
          <h3 className="text-base font-semibold text-green mb-3">Features</h3>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Services that Empower</h3>
            <p className="text-gray-600">
              Unlock your full potential with our comprehensive suite of services designed to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-items-center items-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-green text-xl mb-4">
                  {service.icon}
                </div>
                <h4 className="font-medium text-gray-800 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-center mb-12">
            <h3 className="text-base font-semibold text-green mb-3">
              New offers
            </h3>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Read Our blog
            </h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {blogPost.map((blog, i)=>(
              <div key={i} className='flex flex-col'>
                
                <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg" />
                
                <div className='mt-2'>
                  <h2>{blog.text}</h2>
                  <p className='text-green'>{blog.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

       
      
      </div>      
    </section>
    <FaqComponent/>
    <div className='container px-4 mx-auto'>
      <div className="bg-gray-50 flex items-center justify-center p-4">
            <div className="text-center py-10">
              <div className="flex justify-center mb-4">
                <div className="flex -space-x-2">
                  <img 
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Team member"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/men/2.jpg"
                    alt="Team member"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="Team member"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Still have questions?
              </h2>
              
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Please chat to our friendly team.
              </p>
              
              <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors">
                Get in touch
              </button>
            </div>
      </div>
    </div>
   </>
  )
}

export default Home