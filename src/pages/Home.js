import React from 'react'
import Hero from '../core/Hero'
import { items } from '../constant/listDB'
import Cards from '../components/Cards'
import CardHeader from '../components/CardHeader';
import { MdOutlineArrowBack, MdOutlineArrowForward } from 'react-icons/md';
import FaqComponent from '../core/FAQ';


const reasons = [
  {
    icon:'/reason/calendar.svg',
    title: "Flexible Earnings",
    content: 'Earn money whenever and wherever by completing tasks that suit your schedule.'
  },
  {
    icon:'/reason/task.svg',
    title: "Wide Variety of Task",
    content: 'Choose from surveys, video watching, music listening, and more to earn in ways you enjoy.'
  },
  {
    icon:'/reason/wallet.svg',
    title: "Quick Payouts",
    content: 'Receive real money directly through PayPal, bank transfer, or gift cards.'
  }
]
const Home = () => {
  return (
   <>
    <Hero/>
    <section className='bg-[#F7F3F3] mt-8 pb-16'>
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

        <h2 className='text-[#E09204] text-center font-bold text-3xl  py-7'>How Ryider Works</h2>
        {/* <div className='flex justify-between relative pt-7'>
          <div className='h-[450px] flex justify-end items-end'>
            <div className='bg-stepOneBg bg-no-repeat bg-contain h-[300px] w-[300px] p-4 flex justify-start items-center flex-col'>
              <h5 className='mt-5 text-[#DCFBF7] font-bold text-4xl'>Sign up</h5>
              <h6 className='mt-3 text-[#DCFBF7] font-bold text-lg'>Quick and free registration</h6>
            </div>
          </div>

          <img src='/Linedown.svg' alt='line' className='absolute left-[300px] bottom-[90px] w-[200px]'/>

          <div className='h-[400px] '>
            <div className='bg-stepSecondBg bg-no-repeat bg-contain h-[300px] w-[300px] p-4 flex justify-start items-center flex-col'>
              <h5 className='mt-5 text-[#53EFDD] font-bold text-3xl text-center'> Perform Tasks</h5>
              <h6 className='mt-3 text-[#DCFBF7] font-bold text-lg text-center'>Engage in tasks you already enjoy</h6>
            </div>
          </div>

          <img src='/LineUp.svg' alt='line' className='absolute right-[270px] top-[60px] w-[220px]'/>

          <div className='h-[450px] flex justify-end items-end'>
            <div className='bg-stepThirdBg bg-no-repeat bg-contain h-[300px] w-[300px] p-4 flex justify-start items-center flex-col'>
              <h5 className='mt-5 text-[#E09204] font-bold text-3xl text-center'> Earn Money </h5>
              <h6 className='mt-3 text-[#DCFBF7] font-bold text-lg text-center'>Cash rewards for every task completed</h6>
            </div>
          </div>
        </div> */}
      </div>


      <CardHeader title={"Discover Special Offers and Earn"}/>

      <div className="flex items-center justify-center py-4">
        <div className="w-full  overflow-x-auto">
          {/* Horizontal scroll container */}
          <div className="flex space-x-4 pb-3">
            {items.map((item, i)=>(
              <Cards 
                key={i} 
                image={item.image} 
                category={item.category}  
                earnPrice={item.earnPrice} 
                type={item.type} />
            ))}
          </div>
        </div>
      </div>

      <CardHeader title={"Trending Now"}/>
      <div className="flex items-center justify-center py-4">
        <div className="w-full  overflow-x-auto">
          {/* Horizontal scroll container */}
          <div className="flex space-x-4 pb-3">
            {items.map((item, i)=>(
              <Cards 
                key={i} 
                image={item.image} 
                category={item.category}  
                earnPrice={item.earnPrice} 
                type={item.type} />
            ))}
          </div>
        </div>
      </div>
      
    </section>
    {/* testimonial */}
    <section className='bg-testimonialBg bg-fixed bg-no-repeat'>
      <div className='container mx-auto px-4 pt-3 flex items-center justify-between'>
        <div >
          <img src='/Testimonial.svg' alt='testimonial' className='w-[350px]'/>
          <p className='font-normal text-[#ffffff9b] text-lg max-w-[500px] mt-3'>Don't just take our word for it - see what actual users of our service have to say about their experience.</p>
        </div>

        <div>
          <div><MdOutlineArrowBack /></div>
          <div><MdOutlineArrowForward /></div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-16 pb-7 ps-6">
        <div className="w-full  overflow-x-auto">
          {/* Horizontal scroll container */}
          <div className="flex space-x-4 pb-3">
            <div className="min-w-max  text-white rounded-md">
              <div className='w-[200px] border-[1px] border-[#969393] rounded-md p-2 flex items-center flex-col'>
                <p className='text-sm text-center'>I’ve been using Ryider for a few months, and it’s already made a huge difference. It’s easy, it’s fair, and best of all, it’s actually enjoyable. Highly recommended!</p>

                <img src='/star.svg' alt='star' className='mt-4 w-24'/>

                <img src='/testImage.svg' alt='user' className='mt-4 w-14'/>

                <h3 className='text-base font-semibold text-white font-poppins'> Jane Smith</h3>
                <p className='text-xs font-normal text-center text-white font-poppins'> Customer Support Specialist</p>
               
              </div>
            </div>

            <div className="min-w-max  text-white rounded-md">
              <div className='w-[200px] border-[1px] border-[#969393] rounded-md p-2 flex items-center flex-col'>
                <p className='text-sm text-center'>I’ve been using Ryider for a few months, and it’s already made a huge difference. It’s easy, it’s fair, and best of all, it’s actually enjoyable. Highly recommended!</p>

                <img src='/star.svg' alt='star' className='mt-4 w-24'/>

                <img src='/testImage.svg' alt='user' className='mt-4 w-14'/>

                <h3 className='text-base font-semibold text-white font-poppins'> Jane Smith</h3>
                <p className='text-xs font-normal text-center text-white font-poppins'> Customer Support Specialist</p>
               
              </div>
            </div>

            <div className="min-w-max  text-white rounded-md">
              <div className='w-[200px] border-[1px] border-[#969393] rounded-md p-2 flex items-center flex-col'>
                <p className='text-sm text-center'>I’ve been using Ryider for a few months, and it’s already made a huge difference. It’s easy, it’s fair, and best of all, it’s actually enjoyable. Highly recommended!</p>

                <img src='/star.svg' alt='star' className='mt-4 w-24'/>

                <img src='/testImage.svg' alt='user' className='mt-4 w-14'/>

                <h3 className='text-base font-semibold text-white font-poppins'> Jane Smith</h3>
                <p className='text-xs font-normal text-center text-white font-poppins'> Customer Support Specialist</p>
               
              </div>
            </div>

            <div className="min-w-max  text-white rounded-md">
              <div className='w-[200px] border-[1px] border-[#969393] rounded-md p-2 flex items-center flex-col'>
                <p className='text-sm text-center'>I’ve been using Ryider for a few months, and it’s already made a huge difference. It’s easy, it’s fair, and best of all, it’s actually enjoyable. Highly recommended!</p>

                <img src='/star.svg' alt='star' className='mt-4 w-24'/>

                <img src='/testImage.svg' alt='user' className='mt-4 w-14'/>

                <h3 className='text-base font-semibold text-white font-poppins'> Jane Smith</h3>
                <p className='text-xs font-normal text-center text-white font-poppins'> Customer Support Specialist</p>
               
              </div>
            </div>

            <div className="min-w-max  text-white rounded-md">
              <div className='w-[200px] border-[1px] border-[#969393] rounded-md p-2 flex items-center flex-col'>
                <p className='text-sm text-center'>I’ve been using Ryider for a few months, and it’s already made a huge difference. It’s easy, it’s fair, and best of all, it’s actually enjoyable. Highly recommended!</p>

                <img src='/star.svg' alt='star' className='mt-4 w-24'/>

                <img src='/testImage.svg' alt='user' className='mt-4 w-14'/>

                <h3 className='text-base font-semibold text-white font-poppins'> Jane Smith</h3>
                <p className='text-xs font-normal text-center text-white font-poppins'> Customer Support Specialist</p>
               
              </div>
            </div>

            <div className="min-w-max  text-white rounded-md">
              <div className='w-[200px] border-[1px] border-[#969393] rounded-md p-2 flex items-center flex-col'>
                <p className='text-sm text-center'>I’ve been using Ryider for a few months, and it’s already made a huge difference. It’s easy, it’s fair, and best of all, it’s actually enjoyable. Highly recommended!</p>

                <img src='/star.svg' alt='star' className='mt-4 w-24'/>

                <img src='/testImage.svg' alt='user' className='mt-4 w-14'/>

                <h3 className='text-base font-semibold text-white font-poppins'> Jane Smith</h3>
                <p className='text-xs font-normal text-center text-white font-poppins'> Customer Support Specialist</p>
               
              </div>
            </div>

            <div className="min-w-max  text-white rounded-md">
              <div className='w-[200px] border-[1px] border-[#969393] rounded-md p-2 flex items-center flex-col'>
                <p className='text-sm text-center'>I’ve been using Ryider for a few months, and it’s already made a huge difference. It’s easy, it’s fair, and best of all, it’s actually enjoyable. Highly recommended!</p>

                <img src='/star.svg' alt='star' className='mt-4 w-24'/>

                <img src='/testImage.svg' alt='user' className='mt-4 w-14'/>

                <h3 className='text-base font-semibold text-white font-poppins'> Jane Smith</h3>
                <p className='text-xs font-normal text-center text-white font-poppins'> Customer Support Specialist</p>
               
              </div>
            </div>

            <div className="min-w-max  text-white rounded-md">
              <div className='w-[200px] border-[1px] border-[#969393] rounded-md p-2 flex items-center flex-col'>
                <p className='text-sm text-center'>I’ve been using Ryider for a few months, and it’s already made a huge difference. It’s easy, it’s fair, and best of all, it’s actually enjoyable. Highly recommended!</p>

                <img src='/star.svg' alt='star' className='mt-4 w-24'/>

                <img src='/testImage.svg' alt='user' className='mt-4 w-14'/>

                <h3 className='text-base font-semibold text-white font-poppins'> Jane Smith</h3>
                <p className='text-xs font-normal text-center text-white font-poppins'> Customer Support Specialist</p>
               
              </div>
            </div>

            <div className="min-w-max  text-white rounded-md">
              <div className='w-[200px] border-[1px] border-[#969393] rounded-md p-2 flex items-center flex-col'>
                <p className='text-sm text-center'>I’ve been using Ryider for a few months, and it’s already made a huge difference. It’s easy, it’s fair, and best of all, it’s actually enjoyable. Highly recommended!</p>

                <img src='/star.svg' alt='star' className='mt-4 w-24'/>

                <img src='/testImage.svg' alt='user' className='mt-4 w-14'/>

                <h3 className='text-base font-semibold text-white font-poppins'> Jane Smith</h3>
                <p className='text-xs font-normal text-center text-white font-poppins'> Customer Support Specialist</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <FaqComponent/>


    
    <section className='bg-greenMoneyBg h-[400px] bg-cover bg-no-repeat p-9'>
      <div className='max-w-[410px]' >
        <h1 className='text-4xl text-white font-poppins font-semibold'>Start Earning Today with Ryider</h1>
        <p className='font-normal font-poppins text-base my-4 text-[#CED0D0]'>It’s free to join. Start earning in a minutes</p>
        <button className='p-3 mt-4 text-white bg-[#00712D] w-[150px] rounded-lg'>Sign Up</button>
      </div>

    </section>
    
   </>
  )
}

export default Home