import React from 'react'
import Navbar from '../core/Layout/Navbar'

const Services = () => {
  return (
    <main>
     <div
        className="relative w-full h-[60vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(/background/services.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0  text-white px-4" >
          <div className='z-50 backdrop-blur-md'>
            <Navbar/>
          </div>
          <div className='flex flex-col items-center justify-center text-center'>
            <div className='text-center max-w-[70%] pt-40'>
              <h1 className='text-white text-4xl font-bold'>Our Services</h1>
              <p>At Ryider, we offer a diverse range of services designed to empower individuals, connect businesses, and create opportunities for all our users. Here's what we provide:</p>
            </div>
          </div>
          
        </div>
     </div>

     <div className='container mx-auto px-4 flex flex-col space-y-7 py-7 mt-10'>
        <div>
          <h1 className='font-bold'>SOCIAL TASKS</h1>
          <p className='py-3'>Earn rewards by completing simple tasks such as: </p>
          <ul className='space-y-5'>
            <li>Watching videos.</li>
            <li>Listening to music.</li>
            <li>Clicking on links.</li>
            <li>Reading content.</li>
            <li>Taking surveys.</li>
          </ul>
          <p className='mt-3'>These tasks allow advertisers and marketers to connect directly with their target audience while rewarding users for their engagement.</p>
        </div>
        
        <div>
          <h1 className='font-bold'> E-COMMERCE</h1>
          <div>
            <p>Shop for products and services on our platform while earning points and rewards with every purchase. Our system incentives users to buy and recommend products through affiliate links, making shopping both rewarding and impactful.</p>
          </div>
        </div>

        <div>
          <h1 className='font-bold'>BILL PAYMENTS</h1>
          <p>
           Pay your bills conveniently, including airtime, data, electricity, TV subscriptions, and more. Users also enjoy cashback rewards for every bill payment made, ensuring you save as you spend.
          </p>
        </div>
        

        <div>
          <h1 className='font-bold'>BUY AND SELL TICKETS</h1>
          <p>
            Simplify event ticketing by buying or selling tickets on our platform. Whether it's concerts, shows, or conferences, our system ensures seamless transactions with transparency and ease.
          </p>
        </div>
       
        <div>
         <h1 className='font-bold'>CROWD AID- FUNDRAISING</h1>
          <p><span>.</span> Inspired by platforms like GoFundMe, CrowdAid empowers individuals to raise funds for causes such as personal projects, social initiatives, or business ventures.</p> 
          <p><span>.</span>Supporters can also earn rewards for participating in campaigns, creating a mutually beneficial system.</p> 
        </div>


        <div>
          <h1 className='font-bold'>INVESTMENT OPPORTUNITIES</h1>
          <p>Unlock opportunities to grow your wealth by exploring curated investment plans on our platform.</p>

          <ul>
            <li>
              <span>.</span>
              <span>Affiliate and Commission System:</span>Earn a commission for every individual who joins an investment opportunity using your unique referral link.
            </li>

            <li>
              <span>.</span>
              <span>Performance-Based Rewards:</span> Users are rewarded for promoting investment opportunities to a broader audience, creating a cycle of growth for both investors and promoters.
            </li>

            <li>
              <span>.</span>
              <span>Secure and Transparent:</span>  All investment options are vetted for safety and offer clear, reliable returns, empowering users to make confident financial decisions.
            </li>
          </ul>
        </div>


        <div>
          <h1 className='font-bold'>ADVERTISEMENT SERVICES</h1>
          <p>Advertisers and marketers can run targeted campaigns for services like:</p>

          <ul>
            <li>
              <span>.</span>Video views.
            </li>

            <li>
              <span>.</span>Music streams.
              
            </li>

            <li>
              <span>.</span>Banner Ads
            </li>
            <li>
              <span>.</span>Sponsored Post  
            </li>


            <li>
              <span>.</span>Survey  
            </li>

            <li>
              <span>.</span>TikTok follows.  
            </li>
            <li>
              <span>.</span>Telegram channel subscription. YouTube subscriptions.
            </li>

            <li>
              <span>.</span>YouTube subscriptions.
            </li>
          </ul>


          <p> Campaigns are customizable by country and state, allowing advertisers to focus their efforts and achieve better results. Performance tracking ensures that every ad delivers measurable impact.</p>
        </div>
        
      </div>
    </main>
  )
}

export default Services