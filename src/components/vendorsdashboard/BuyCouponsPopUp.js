import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'

const BuyCouponsPopUp = ({closeModal}) => {
  const [selectedType, setSelectedType] = useState("")
  console.log(selectedType)
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">

      <div className='flex justify-between items-center'>
        <h2 className="text-xl font-bold mb- items-center">Buy Coupons</h2>
        <button
          className="px-1 py-1 border border-black  text-black rounded-full"
          onClick={closeModal}
        >
          <CgClose className='w-7 h-7'/>
        </button>
      </div>
     

      <select 
        value={selectedType}
        onChange={(e)=> setSelectedType(e.target.value)}
        className='my-3 border border-green p-2 w-full rounded-md'>
        <option>--Coupon Type--</option>
        <option value='activationCode'>Activation Code Or Fund/Purchse Code</option>
        <option value='fundpurchaseCode'>fund/purchase code</option>
      </select>

      {selectedType === 'activationCode' && 
      <>
        <input
          type='text'
          className='my-3 border border-green p-2 w-full rounded-md'
          placeholder='Quantity' 
        />
        <input
          type='text'
          className='my-3 border border-green p-2 w-full rounded-md'
          placeholder='Total Amount' 
        />
      </>
      }

      {selectedType === 'fundpurchaseCode' && 
        <>
          <input
            type='text'
            className='my-3 border border-green p-2 w-full rounded-md'
            placeholder='Price of code' 
          />
        </>
      }     

      <div className="">
        <button className="px-4 py-2 w-full bg-green text-white rounded-lg" onClick={closeModal}>
          Proceced to Payment
        </button>
      </div>
    </div>
  </div>
  )
}

export default BuyCouponsPopUp