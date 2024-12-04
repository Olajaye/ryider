import React, { useState, useEffect } from 'react';

const Carousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='flex flex-col '>
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
      <div className='mt-5 flex justify-center items-center space-x-6'>
        <div onClick={prevSlide} className={`transform -translate-y-1/2  opacity-75 hover:opacity-100 transition  h-2 ${currentIndex === 0 ? "bg-green w-16 ": "bg-[#bfbcbc] w-12"} rounded-lg`}></div>

        <div onClick={nextSlide} className={`transform -translate-y-1/2  opacity-75 hover:opacity-100 transition  h-2 ${currentIndex === 1 ? "bg-green w-16 ": "bg-[#bfbcbc] w-12"} rounded-lg`}></div>
        <div onClick={nextSlide} className={`transform -translate-y-1/2  opacity-75 hover:opacity-100 transition  h-2 ${currentIndex === 2 ? "bg-green w-16 ": "bg-[#bfbcbc] w-12"} rounded-lg`}></div>
      </div>
    </div>
  );
};

export default Carousel;
