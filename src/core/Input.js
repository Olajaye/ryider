import React from 'react'

const Input = ({label, type, id, placeholder}) => {
  return (
    <div className='flex flex-col '>
      <label htmlFor={id} className='font-poppins font-semibold text-base text-[#111111]'>{label}</label>
      <input 
        type={type}
        id={id}
        placeholder={placeholder}
        className='w-full md:w-[80%] mt-2 p-2 outline-none border-[1px] border-gray-500 rounded-md'
      />
    </div>
  )
}

export default Input