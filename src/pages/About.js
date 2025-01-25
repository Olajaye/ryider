import React from 'react'
import Navbar from '../core/Layout/Navbar'
import { LuDot } from "react-icons/lu";

const About = () => {
  return (
    <main>
      <Navbar/>
      <div
        className="relative w-full h-[60vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(/background/aboutus.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0  text-white px-4" >
          <div className='flex flex-col items-center justify-center text-center'>
            <div className='text-center md:max-w-[70%] pt-20'>
              <h1 className='text-white text-4xl font-bold'>About Us</h1>
              <p className='mt-7'>At Ryider, we bridge the gap between businesses and consumers, creating a dynamic space where advertisers and marketers connect directly with their target audience. Our platform is designed to empower individuals, businesses, and communities by providing innovative ways to earn, promote, and grow.</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className='bg-[#128C7E1A]'>
        <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto px-4 py-8'>
          <div>
            <h1 className='font-extrabold text-2xl text-gray-900'>
              Our <span className='text-green'>Mission</span>
            </h1>
            <p className='text-base font-normal text-black mt-2'>We aim to create opportunities and drive meaningful connections by:</p>
          </div>
          <div className='flex flex-col space-y-6  mt-4 md:mt-0'>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' />Providing employment to individuals.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Connecting sellers with consumers to enhance business visibility.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' />Linking businesses with investors to fuel growth and innovation.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Empowering marketers to reach their audiences effectively.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Helping show and event promoters gain a larger and more engaged audience.</p>
          </div>
        </div>

      </div>


      <div className='bg-white'>
        <div className='grid  grid-cols-1 md:grid-cols-2 container mx-auto px-4 py-8'>
          <div className='flex flex-col space-y-6 mt-4 md:mt-0 order-2 md:order-1'>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Unemployed individuals and those looking to earn extra income.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Advertisers, marketers, and startups seeking innovative ways to connect with consumers.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Investors looking for promising opportunities.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Empowering marketers to reach their audiences effectively.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Event promoters seeking a larger audience for their events.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Online shoppers and individuals raising funds for causes, just like
            GoFundMe.</p>
          </div>
          <div className='order-1 md:order-2'>
            <h1 className='font-extrabold text-2xl text-gray-900'>
              Who We <span className='text-green'>Server</span>
            </h1>
            <p className='text-base font-normal text-black mt-2'>We aim to create opportunities and drive meaningful connections by:</p>
          </div>
        </div>

      </div>


      <div className='bg-[#128C7E1A]'>
        <div className=' container mx-auto px-4 py-8'>
          <div className='text-center'>
            <h1 className='font-extrabold text-2xl text-gray-900'>
              What We <span className='text-green'>Offer</span>
            </h1>
            <p className='text-base font-normal text-black mt-2'>We provide a wide range of services to empower and connect our users</p>
          </div>


          <div className='grid grid-cols-2 md:grid-cols-3 gap-5 pt-7'>
            <div className='text-center'>
              <h4 className='text-[#101828] font-medium'>Social Tasks</h4>
              <p className='text-[#667085] text-base'>Get paid to perform tasks such as watching videos, listening to music, clicking links, reading content, and taking surveys.</p>
            </div>
            <div className='text-center'>
            <h4 className='text-[#101828] font-medium'>Advertisements</h4>
            <p className='text-[#667085] text-base'>Advertisers and marketers can connect directly with their audience and track performance.</p>
            </div>
           
            <div className='text-center'>
              <h4 className='text-[#101828] font-medium'> E-Commerce</h4>
              <p className='text-[#667085] text-base'>Discover and shop for products and services while earning rewards.</p>
            </div>
           
            <div className='text-center'>
              <h4 className='text-[#101828] font-medium'> Investment Opportunities</h4>
              <p className='text-[#667085] text-base'>Explore opportunities to grow your wealth.</p>
            </div>
            <div className='text-center'>
              <h4 className='text-[#101828] font-medium'>Bill Payments</h4>
              <p className='text-[#667085] text-base'>Pay bills seamlessly while earning cashback and rewards.</p>
            </div>
            <div className='text-center'>
              <h4 className='text-[#101828] font-medium'>Crowd-Aid</h4>
              <p className='text-[#667085] text-base'>Raise funds for causes and connect with supporters, similar to GoFundMe.</p>
            </div>
          </div>
          
        </div>

      </div>

      <div className='bg-white'>
        <div className='grid md:grid-cols-2 container mx-auto px-4 py-8'>
          <div className='flex flex-col space-y-6 mt-4 md:mt-0 order-2 md:order-1'>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' />The difficulty businesses face in attracting customers to patronize their products or services.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' />The growing unemployment rate in our country and region. We believe that businesses can create meaningful connections by paying consumers directly to engage with and promote their offerings, while individuals can earn a living in the process.</p>
            {/* <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Investors looking for promising opportunities.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Empowering marketers to reach their audiences effectively.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Event promoters seeking a larger audience for their events.</p>
            <p className='flex items-center space-x-3'><LuDot className='h-7 w-7' /> Online shoppers and individuals raising funds for causes, just like
            GoFundMe.</p> */}
          </div>
          <div className='order-1 md:order-2'>
            <h1 className='font-extrabold text-2xl text-gray-900'>
              Why We <span className='text-green'>Started</span>
            </h1>
            <p className='text-base font-normal text-black mt-2'>The inspiration behind Ryider came from two pressing challenges</p>
          </div>
        </div>

      </div>

      <div className='bg-[#128C7E1A]'>
        <div className=' container mx-auto px-4 py-8'>
          <div className='text-center'>
            <h1 className='font-extrabold text-2xl text-gray-900'>
              What Make Us <span className='text-green'>Unique</span>
            </h1>
            <p className='text-base font-normal text-black mt-2'>We provide a wide range of services to empower and connect our users</p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5 pt-7'>
            <div className='text-center'>
              <h4 className='text-[#101828] font-medium'>Earn While You Engage</h4>
              <p className='text-[#667085] text-base'>Users are rewarded for promoting products and services, completing tasks, and participating in our ecosystem.</p>
            </div>
            <div className='text-center'>
            <h4 className='text-[#101828] font-medium'>Affiliate Earnings</h4>
            <p className='text-[#667085] text-base'>Users earn commissions for every product or service purchased through their unique affiliate links.</p>
            </div>
           
            <div className='text-center'>
              <h4 className='text-[#101828] font-medium'>Point & Rewards</h4>
              <p className='text-[#667085] text-base'>Every purchase earns users points that can be redeemed for even more benefits.</p>
            </div>
           
            <div className='text-center md:col-span-3'>
              <h4 className='text-[#101828] font-medium'>Closer Connections</h4>
              <p className='text-[#667085] text-base'>We help advertisers and marketers build deeper relationships with their consumers.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto px-4 py-8'>
          <div>
            <h1 className='font-extrabold text-4xl text-gray-900 md:max-w-[50%]'>
             Our <span className='text-green'>Values</span> and <span className='text-green'>Principles</span>
            </h1>
          </div>


          <div>
            <ul className='flex flex-col space-y-6 mt-4 md:mt-0'>
              <li>
                <h6 className='text-green mb-3'>Empowerment</h6> 
                <p className='text-[#52525B]'>We believe in empowering individuals by providing opportunities to earn, grow, and thrive. Whether you're unemployed, a business owner, or a fundraiser, we are here to help you succeed.</p>
              </li>
              <li>
                <h6 className='text-green mb-3'>Inclusivity</h6> 
                <p  className='text-[#52525B]'>Our platform is designed to welcome and support everyone, regardless of background, location, or goals. We strive to create a community where everyone feels valued and connected.</p>
              </li>

              <li>
                <h6 className='text-green mb-3'>Innovation</h6> 
                <p className='text-[#52525B]'>By combining technology and creativity, we deliver solutions that redefine how people work, shop, promote, and raise funds.</p>
              </li>

              <li>
                <h6 className='text-green mb-3'>Transparency</h6> 
                <p className='text-[#52525B]'>We are committed to building trust by being open and honest about how our platform operates, from earning opportunities to campaign management and beyond.</p>
              </li>

              <li>
                <h6 className='text-green mb-3'>Collaboration</h6> 
                <p className='text-[#52525B]'>Success is a team effort. We connect consumers, businesses, advertisers, and fundraisers to foster meaningful partnerships and mutual growth.</p>
              </li>

              <li>
                <h6 className='text-green mb-3'>Customer-Centricity</h6> 
                <p className='text-[#52525B]'>Our users are at the heart of everything we do. We continuously adapt and evolve to meet their needs and exceed their expectations.</p>
              </li>

              <li>
                <h6 className='text-green mb-3'> Community Impact</h6> 
                <p className='text-[#52525B]'>We aim to create a positive social and economic impact by addressing unemployment and helping businesses and individuals achieve their goals.</p>
              </li>
             
              <li>
                <h6 className='text-green mb-3' >Reward and Recognition</h6> 
                <p className='text-[#52525B]'>We believe hard work should be rewarded. That’s why we provide opportunities for users to earn commissions, cashback, and rewards through meaningful engagement.</p>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div
        className="relative w-full h-[50vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(/background/aboutus.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        

        <div className="absolute inset-0  text-white px-4" >
          {/* <div className='z-50 backdrop-blur-md' style={{zIndex: 999}}>
            <Navbar/>
          </div> */}


          <div className='flex flex-col items-center justify-center text-center'>
            <div className='text-center md:max-w-[70%] pt-20'>
              <h1 className='text-white text-4xl font-bold'>Looking Ahead</h1>
              <p className='mt-7'>At Ryider, we are committed to creating an inclusive digital economy where everyone has the opportunity to thrive. Whether you’re looking to earn extra income, promote a business, or fundraise for a cause, our platform is here to make it happen. Join us as we redefine connections and opportunities for a brighter future!</p>
            </div>
          </div>
          
        </div>
      </div>

    </main>
  )
}

export default About