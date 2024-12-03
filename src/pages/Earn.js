import React from 'react'
import Cards from '../components/Cards'
import { items } from '../constant/listDB'
import CardHeader from '../components/CardHeader'

const Earn = () => {
  return (
    <section>
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

      <CardHeader title={"Daily Earning"}/>
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


      <CardHeader title={"Offer from out trusted partner"}/>
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


      <CardHeader title={"Shop and Earn"}/>
      <div className="flex items-center justify-center py-4">
        <div className='ps-5  flex relative'>
          <div className='w-[200px] z-50 border-[1px] border-[#969393] rounded-lg bg-green flex justify-center items-center flex-col py-6'>

            <div className='bg-white rounded-full p-1'>
              <img src='/earn/bag-tick.svg' alt='bag' className='w-20'/>
            </div>

            <h2 className='text-white font-poppins text-5xl text-center font-semibold my-3'>Shop</h2>

            <p className='font-poppins font-normal text-base text-center text-[#F0EDED]'>Earn when shopping at your favourite store</p>

          </div>
          <div className="kite bg-[#128C7E] rotate-90 absolute right-10 -bottom-24">
            
            <div className="kite-string bg-[#128C7E]"></div> 
          </div>
        </div>


        <div className="w-full  overflow-x-auto ms-2">
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

      <CardHeader title={"Shop and Earn"}/>
      <div className="flex items-center justify-center py-4">
        <div className='ps-5  flex relative'>
          <div className='w-[200px] z-50 border-[1px] border-[#969393] rounded-lg bg-green flex justify-center items-center flex-col py-6'>

            <div className='bg-white rounded-full p-1'>
              <img src='/earn/bag-tick.svg' alt='bag' className='w-20'/>
            </div>

            <h2 className='text-white font-poppins text-5xl text-center font-semibold my-3'>Shop</h2>

            <p className='font-poppins font-normal text-base text-center text-[#F0EDED]'>Earn when shopping at your favourite store</p>

          </div>
          <div className="kite bg-[#128C7E] rotate-90 absolute right-10 -bottom-24">
            
            <div className="kite-string bg-[#128C7E]"></div> 
          </div>
        </div>


        <div className="w-full  overflow-x-auto ms-2">
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



      <CardHeader title={"Shop and Earn"}/>
      <div className="flex items-center justify-center py-4">
        <div className='ps-5  flex relative'>
          <div className='w-[200px] z-50 border-[1px] border-[#969393] rounded-lg bg-green flex justify-center items-center flex-col py-6'>

            <div className='bg-white rounded-full p-1'>
              <img src='/earn/bag-tick.svg' alt='bag' className='w-20'/>
            </div>

            <h2 className='text-white font-poppins text-5xl text-center font-semibold my-3'>Shop</h2>

            <p className='font-poppins font-normal text-base text-center text-[#F0EDED]'>Earn when shopping at your favourite store</p>

          </div>
          <div className="kite bg-[#128C7E] rotate-90 absolute right-10 -bottom-24">
            
            <div className="kite-string bg-[#128C7E]"></div> 
          </div>
        </div>


        <div className="w-full  overflow-x-auto ms-2">
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


      <CardHeader title={"Shop and Earn"}/>
      <div className="flex items-center justify-center py-4">
        <div className='ps-5  flex relative'>
          <div className='w-[200px] z-50 border-[1px] border-[#969393] rounded-lg bg-green flex justify-center items-center flex-col py-6'>

            <div className='bg-white rounded-full p-1'>
              <img src='/earn/bag-tick.svg' alt='bag' className='w-20'/>
            </div>

            <h2 className='text-white font-poppins text-5xl text-center font-semibold my-3'>Shop</h2>

            <p className='font-poppins font-normal text-base text-center text-[#F0EDED]'>Earn when shopping at your favourite store</p>

          </div>
          <div className="kite bg-[#128C7E] rotate-90 absolute right-10 -bottom-24">
            
            <div className="kite-string bg-[#128C7E]"></div> 
          </div>
        </div>


        <div className="w-full  overflow-x-auto ms-2">
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
  )
}

export default Earn