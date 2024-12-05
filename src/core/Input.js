import React from 'react'

const Input = ({label, type, id, placeholder, name, value, onChangeHandler}) => {
  return (
    <div className='flex flex-col '>
      <label htmlFor={id} className='font-poppins font-semibold text-base text-[#111111]'>{label}</label>
      <input 
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChangeHandler}
        required
        placeholder={placeholder}
        className='w-full  mt-2 p-2  border-[1px]  outline-green border-green rounded-md'
      />
    </div>
  )
}

export default Input