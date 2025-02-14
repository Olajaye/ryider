import React from 'react'

const InvestmentDetails = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">American Express National Bank</h1>

      {/* Main Bundle Info Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="md:flex ">
          {/* Left Column */}
          <div className='flex-1'>
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-1">Bundle Price</p>
              <h2 className="text-3xl font-bold">₦240,090</h2>
              <p className="text-sm text-gray-600 mt-1">
                Return price at ₦15,000 in 3 months{' '}
                <span className="text-green-500">(16.3%)</span>
              </p>
              <button className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-emerald-700 transition-colors">
                Subscribe
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:w-[30%] border border-black rounded-md p-6">
            <div className='flex justify-between items-center'>
              <p className="text-sm text-gray-600 mb-1">Interest Rate</p>
              <p className="font-semibold">12%pa</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className="text-sm text-gray-600 mb-1">Bundle Price</p>
              <p className="font-semibold">12%pa</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className="text-sm text-gray-600 mb-1">Duration</p>
              <p className="font-semibold">2 years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">AENB</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            American Express National Bank is a wholly owned subsidiary of American Express Company, a publicly traded financial services company. It is a large and well-established bank with a long history of providing financial products and services to consumers and businesses.
          </p>
          <p className="text-gray-700">
            While American Express is primarily known for its credit cards and traveler's checks, American Express National Bank offers a broader range of financial products, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Personal banking products, such as checking and savings accounts, certificates of deposit (CDs), and individual retirement accounts (IRAs)</li>
            <li>Business banking products, such as business checking and savings accounts, business loans, and merchant services</li>
            <li>Wealth management products, such as investment accounts, financial planning, and private banking</li>
          </ul>
        </div>
      </div>



      {/* <div className='flex justify-center items-center my-10'>
        <button className='bg-red-400 w-32 p-3 text-white rounded-md'>Cancle</button>
      </div> */}
    </div>
  )
}

export default InvestmentDetails