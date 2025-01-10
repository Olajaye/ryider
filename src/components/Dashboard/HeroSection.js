import React from 'react';

export const HeroSection = () => {
  return (
    <div className="relative h-40 bg-heroBg bg-no-repeat bg-cover rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className='flex items-center flex-col text-center font-poppins'>
          <h1 className='text-white font-poppins font-bold md:text-2xl'>
            Earn <span className='text-green'>Money</span> from Everyday Tasks with <span className='text-green'>Ryider</span>
          </h1>
          <h6 className='md:max-w-[65%] max-w-[80%] mt-5 text-white'>Turn your online activities into real earnings. Complete tasks, get paid, and make the most of your time!"</h6>
          
        </div>
      </div>
    </div>
  );
};