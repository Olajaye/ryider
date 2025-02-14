import React from 'react'
import { Link } from 'react-router';

const Investment = () => {
  const bundles= [
    { name: 'American Express National Bank', price: 200.53, interestRate: 12, duration: 9 },
    { name: 'American Express National Bank', price: 200.53, interestRate: 12, duration: 9 },
    { name: 'American Express National Bank', price: 200.53, interestRate: 12, duration: 9 },
    { name: 'American Express National Bank', price: 200.53, interestRate: 12, duration: 9 },
    { name: 'American Express National Bank', price: 200.53, interestRate: 12, duration: 9 },
  ];

  const investedBundles = [
    { name: 'American Express National Bank', startingDate: '20/11/2023', endingDate: '20/11/2025', amountInvested: 200.53, profit: -20.68 },
    { name: 'American Express National Bank', startingDate: '20/11/2023', endingDate: '20/11/2025', amountInvested: 200.53, profit: 14.42 },
    { name: 'American Express National Bank', startingDate: '20/11/2023', endingDate: '20/11/2025', amountInvested: 200.53, profit: -20.68 },
    { name: 'American Express National Bank', startingDate: '20/11/2023', endingDate: '20/11/2025', amountInvested: 200.53, profit: 14.42 },
    { name: 'American Express National Bank', startingDate: '20/11/2023', endingDate: '20/11/2025', amountInvested: 200.53, profit: -20.68 },
  ];

  return (
    <div>
      {/* Top Cards */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-3xl font-bold">₦240,090</h2>
        <p className="text-gray-600 text-sm">TOTAL PROFIT GOTTEN</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-3xl font-bold">₦240,090</h2>
          <p className="text-gray-600 text-sm">INVESTMENT WALLET</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-3xl font-bold">₦240,090</h2>
          <p className="text-gray-600 text-sm">TOTAL AMOUNT INVESTED</p>
        </div>
      </div>

      <div className='flex justify-end items-end mb-6 px-6'>
        <Link to={"/dashboard/investmenthistory"} className='bg-green text-white p-2 rounded-md'>
          History
        </Link>
      </div>

      {/* List of Bundles */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="space-y-4 p-4">
          <h2 className="text-lg font-semibold">List of Bundles</h2>
          <div className="flex justify-between items-center gap-4">
            <div className='flex space-x-5'>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                Sort
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Advanced filter
              </button>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Price</th>
                <th className="text-left p-4">Interest Rate</th>
                <th className="text-left p-4">Duration</th>
                <th className="text-left p-4"></th>
              </tr>
            </thead>
            <tbody>
              {bundles.map((bundle, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">{bundle.name}</td>
                  <td className="p-4">${bundle.price}</td>
                  <td className="p-4">{bundle.interestRate}%</td>
                  <td className="p-4">{bundle.duration} Months</td>
                  <td className="p-4">
                    <Link to={'/dashboard/investmentdetails'} className="bg-[#128c7e6e] text-green px-4 py-1 rounded-full">
                      Invest
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invested Bundles */}
      <div className="bg-white rounded-lg shadow mb-20">
        <div className="space-y-4 p-4">
          <h2 className="text-lg font-semibold">Invested Bundles</h2>
          <div className="flex justify-between items-center gap-4">
            <div className='flex space-x-5'>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                Sort
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Advanced filter
              </button>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Starting Date</th>
                <th className="text-left p-4">Ending Date</th>
                <th className="text-left p-4">Amount Invested</th>
                <th className="text-left p-4">Profit</th>
                <th className="text-left p-4"></th>
              </tr>
            </thead>
            <tbody>
              {investedBundles.map((bundle, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">{bundle.name}</td>
                  <td className="p-4">{bundle.startingDate}</td>
                  <td className="p-4">{bundle.endingDate}</td>
                  <td className="p-4">${bundle.amountInvested}</td>
                  <td className={`p-4 ${bundle.profit > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {bundle.profit > 0 ? '+' : ''}{bundle.profit}%
                  </td>
                  <td className="p-4">
                    <button className="bg-[#128c7e6e] text-green px-4 py-1 rounded-full">
                      View Portfolio
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Investment