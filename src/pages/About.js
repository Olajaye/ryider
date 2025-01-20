import React from 'react'
import Navbar from '../core/Layout/Navbar'

const About = () => {
  return (
    <main>
      <div
        className="relative w-full h-[60vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(/background/aboutus.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        

        <div className="absolute inset-0  text-white px-4" >
          <div className='z-50 backdrop-blur-md' style={{zIndex: 999}}>
            <Navbar/>
          </div>


          <div className='flex flex-col items-center justify-center text-center'>
            <div className='text-center max-w-[70%] pt-20'>
              <h1 className='text-white text-4xl font-bold'>About Us</h1>
              <p>At Ryider, we bridge the gap between businesses and consumers, creating a dynamic space where advertisers and marketers connect directly with their target audience. Our platform is designed to empower individuals, businesses, and communities by providing innovative ways to earn, promote, and grow.</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className='bg-[#128C7E1A]'>
        <div className='grid grid-cols-2 container mx-auto px-4 py-8'>
          <div>
            <h1>
              Our <span className='text-green'>Mission</span>
            </h1>
            <p>We aim to create opportunities and drive meaningful connections by:</p>
          </div>
          <div>
            <p><span>.</span> Providing employment to individuals.</p>
            <p><span>.</span> Connecting sellers with consumers to enhance business visibility.</p>
            <p><span>.</span> Linking businesses with investors to fuel growth and innovation.</p>
            <p><span>.</span> Empowering marketers to reach their audiences effectively.</p>
            <p><span>.</span>Helping show and event promoters gain a larger and more engaged audience.</p>
          </div>
        </div>

      </div>


      <div className='bg-white'>

        <div className='grid grid-cols-2 container mx-auto px-4 py-8'>
          
          <div>
            <p><span>.</span> Providing employment to individuals.</p>
            <p><span>.</span> Connecting sellers with consumers to enhance business visibility.</p>
            <p><span>.</span> Linking businesses with investors to fuel growth and innovation.</p>
            <p><span>.</span> Empowering marketers to reach their audiences effectively.</p>
            <p><span>.</span>Helping show and event promoters gain a larger and more engaged audience.</p>
          </div>
          <div>
            <h1>
              Our <span className='text-green'>Mission</span>
            </h1>
            <p>We aim to create opportunities and drive meaningful connections by:</p>
          </div>
        </div>

      </div>


      <div className='bg-[#128C7E1A]'>

        <div className=' container mx-auto px-4 py-8'>
          <div className='text-center'>
            <h1>
              What we <span className='text-green'>offer</span>
            </h1>
            <p>We provide a wide range of services to empower and connect our users:</p>
          </div>
          <div className='grid grid-cols-3 gap-5'>

            <div className='text-center'>
              <h4>Social Tasks</h4>
              <p>Get paid to perform tasks such as watching videos, listening to music, clicking links, reading content, and taking surveys.</p>
            </div>
            <div className='text-center'>
              <h4>Social Tasks</h4>
              <p>Get paid to perform tasks such as watching videos, listening to music, clicking links, reading content, and taking surveys.</p>
            </div>
            <div className='text-center'>
              <h4>Social Tasks</h4>
              <p>Get paid to perform tasks such as watching videos, listening to music, clicking links, reading content, and taking surveys.</p>
            </div>
            
          </div>
        </div>

      </div>

      <div className='bg-white'>
        <div className='grid grid-cols-2 container mx-auto px-4 py-8'>
          
          <div>
            <p><span>.</span> Providing employment to individuals.</p>
            <p><span>.</span> Connecting sellers with consumers to enhance business visibility.</p>
            <p><span>.</span> Linking businesses with investors to fuel growth and innovation.</p>
            <p><span>.</span> Empowering marketers to reach their audiences effectively.</p>
            <p><span>.</span>Helping show and event promoters gain a larger and more engaged audience.</p>
          </div>
          <div>
            <h1>
              Our <span className='text-green'>Mission</span>
            </h1>
            <p>We aim to create opportunities and drive meaningful connections by:</p>
          </div>
        </div>
      </div>

      <div className='bg-[#128C7E1A]'>
        <div className=' container mx-auto px-4 py-8'>
          <div className='text-center'>
            <h1>
              What make us <span className='text-green'>Unique</span>
            </h1>
            <p>We provide a wide range of services to empower and connect our users:</p>
          </div>
          <div className='grid grid-cols-3 gap-5'>

            <div className='text-center'>
              <h4>Social Tasks</h4>
              <p>Get paid to perform tasks such as watching videos, listening to music, clicking links, reading content, and taking surveys.</p>
            </div>
            <div className='text-center'>
              <h4>Social Tasks</h4>
              <p>Get paid to perform tasks such as watching videos, listening to music, clicking links, reading content, and taking surveys.</p>
            </div>
            <div className='text-center'>
              <h4>Social Tasks</h4>
              <p>Get paid to perform tasks such as watching videos, listening to music, clicking links, reading content, and taking surveys.</p>
            </div>
            
          </div>
        </div>

      </div>

      <div className='bg-white'>
        <div className='grid grid-cols-2 container mx-auto px-4 py-8'>
          <div>
            <h1>
             Our <span className='text-green'>Values</span> and <span className='text-green'>Principles</span>
            </h1>
            
          </div>
          <div>

            <ul>
              <li>
                <h6>Empowerment</h6> 
                <p>We believe in empowering individuals by providing opportunities to earn, grow, and thrive. Whether you're unemployed, a business owner, or a fundraiser, we are here to help you succeed.</p>
              </li>
              <li>
                <h6>Inclusivity</h6> 
                <p>Our platform is designed to welcome and support everyone, regardless of background, location, or goals. We strive to create a community where everyone feels valued and connected.</p>
              </li>

              <li>
                <h6>Innovation</h6> 
                <p>By combining technology and creativity, we deliver solutions that redefine how people work, shop, promote, and raise funds.</p>
              </li>

              <li>
                <h6>Transparency</h6> 
                <p>We are committed to building trust by being open and honest about how our platform operates, from earning opportunities to campaign management and beyond.</p>
              </li>

              <li>
                <h6>Collaboration</h6> 
                <p>Success is a team effort. We connect consumers, businesses, advertisers, and fundraisers to foster meaningful partnerships and mutual growth.</p>
              </li>

              <li>
                <h6>Customer-Centricity</h6> 
                <p>Our users are at the heart of everything we do. We continuously adapt and evolve to meet their needs and exceed their expectations.</p>
              </li>

              <li>
                <h6> Community Impact</h6> 
                <p>We aim to create a positive social and economic impact by addressing unemployment and helping businesses and individuals achieve their goals.</p>
              </li>
             
              <li>
                <h6>Reward and Recognition</h6> 
                <p>We believe hard work should be rewarded. That’s why we provide opportunities for users to earn commissions, cashback, and rewards through meaningful engagement.</p>
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
            <div className='text-center max-w-[70%] pt-20'>
              <h1 className='text-white text-4xl font-bold'>Looking Ahead</h1>
              <p>At Ryider, we are committed to creating an inclusive digital economy where everyone has the opportunity to thrive. Whether you’re looking to earn extra income, promote a business, or fundraise for a cause, our platform is here to make it happen. Join us as we redefine connections and opportunities for a brighter future!</p>
            </div>
          </div>
          
        </div>
      </div>

    </main>
  )
}

export default About