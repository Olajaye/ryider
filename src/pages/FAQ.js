import React from 'react'
import Navbar from '../core/Layout/Navbar'

const FAQ = () => {
  return (
    <main>
      <div
        className="relative w-full h-[40vh] bg-cover bg-center overflow-hidden"
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
              <h1 className='text-white text-4xl font-bold'>Frequently asked questions</h1>
              <p>Everything you need to know about the product and billing.</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className='container mx-auto px-4 flex flex-col space-y-7 py-7 mt-5'>
        <div>
          <h1 className='font-bold'>What is Ryider?</h1>
          <p> 
            Ryider is a platform that bridges the gap between producers and consumers while creating earning opportunities for individuals. It offers services like e-commerce, bill payment, social tasks, fundraising, ticketing, investment, and advertisement, empowering users to either earn or shop seamlessly.
          </p>
        </div>
        
        <div>
          <h1 className='font-bold'>What are the account types on the platform?</h1>
          <div>
            <p>Our platform has two account types: </p>
            <p> <span>Shopper Account:</span> For individuals who patronize our products and services. Shoppers enjoy features like cashback rewards, product discounts, and points for every purchase.
            </p> 
            <p> 
              <span>Publisher Account:</span> For individuals looking to earn through our platform. Publishers can complete social tasks, promote products and services via affiliate links, and earn commissions and rewards for their activities.
            </p>
          </div>
        </div>

        <div>
          <h1 className='font-bold'>How do I activate a Publisher account?</h1>
          <p>
            To activate a Publisher account, users need to purchase an activation code from our platform. Once activated, you can start earning by completing tasks, promoting products, and referring others.
          </p>

          <h1>Can Publishers earn from referrals?</h1>
          <p>Yes! Publishers earn referral commissions when someone registers for a Publisher account using their referral link and activates their account. This provides an additional income stream for Publishers who help grow the platform.</p>
        </div>
        

        <div>
          <h1 className='font-bold'>How can I earn money as a Publisher?</h1>
          <div>
          <p>Completing social tasks like watching videos, listening to music, and taking surveys.</p>
            <p>Promoting products and services using affiliate links and earning commissions.</p> 
            <p>Participating in CrowdAid campaigns and earning commissions on contributions made via their referral link.</p>
            <p>Earning referral commissions when new users activate a Publisher account.</p>
            <p>Accumulating points and rewards for their activities on the platform.</p>
          </div>
        </div>
       
        <div>
         <h1 className='font-bold'>What benefits do Shoppers enjoy?</h1>
          <p>Shoppers benefit from:</p> 
          <p>Cashback rewards for bill payments and product purchases.</p> 
          <p>Points earned with every purchase, which can be redeemed for rewards or discounts.</p>
          <p>Access to exclusive deals, event tickets, and e-commerce products.</p>
        </div>


        <div>
        <h1 className='font-bold'>Can I switch between account types?</h1>
        <p>Yes! You can switch between a Shopper and a Publisher account, depending on your goals. Some users choose to maintain both to take full advantage of the platform’s features.</p>
        </div>


        <div>
        <h1 className='font-bold'>What makes Ryider unique?</h1>
        <p>Our platform stands out because it combines shopping with earning opportunities, allowing users to either enjoy products and services or monetize their time and efforts. With features like affiliate commissions, cashback rewards, task-based earnings, and referral bonuses, we provide a dynamic and inclusive experience for all.</p>
        </div>
        
      


        <div>
        <h1 className='font-bold'>What is CrowdAid, and how does it work?</h1>
        <p>CrowdAid is our fundraising feature, similar to GoFundMe, where users can raise funds for personal, social, or business causes. Users can promote campaigns, earn commissions for contributions made via their referral links.</p>
        </div>
        


        <div>
        <h1 className='font-bold'>Can I promote my business on your platform?</h1>
        <p>Absolutely! Our advertisement service allows businesses and individuals to target their audience by country and state. You can run campaigns for Video views, Music streams, Banners and more while tracking performance in real time.</p>
        </div>
        


        <div>
        <h1 className='font-bold'>What makes Ryider different from other platforms?</h1>
        <p>Our platform stands out because it combines earning opportunities with direct engagement. Users can earn commissions, cashback, and rewards while advertisers and marketers benefit from direct connections to their audience. Additionally, we offer diverse services like CrowdAid, ticketing, and investments under one roof.</p>
        </div>
        

        <div>
        <h1 className='font-bold'>How do I start using the platform?</h1>
        <p>Getting started is easy! Simply sign up on our platform and chose an account type, explore the available tasks and services, and start earning or promoting your business today. You can also connect your wallet to deposit or withdraw funds seamlessly.</p>
        </div>
        
      </div>


    </main>
  )
}

export default FAQ