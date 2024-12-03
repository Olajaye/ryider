import React from 'react'

const Cards = ({image, earnPrice, type, category}) => {
  return (
    <div className="min-w-max  text-white rounded-md">
      <div className='w-[200px] border-[1px] border-[#969393] rounded-lg'>
        <img src={image} alt='discovery' className='w-full'/>
        <h6  className='text-[#969393] border-[#969393] border-t-[1px] border-b-[1px] p-2'>{type}</h6>
        <h6 className='text-[#00712D] font-poppins font-bold text-2xl pt-2 px-2'>{earnPrice}</h6>
        <p className='text-[#292D32] text-base px-2 pb-2'>{category}</p>
      </div>
    </div>
  )
}

export default Cards