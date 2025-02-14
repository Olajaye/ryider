import React from 'react'
import { Link } from 'react-router';

const InvestmentHistory = () => {
  const investedBundles = [
    { name: 'American Express National Bank', startingDate: '20/11/2023', endingDate: '20/11/2025', amountInvested: 200.53, totalRevived: 200, stage: 'Completed' },
    { name: 'American Express National Bank', startingDate: '20/11/2023', endingDate: '20/11/2025', amountInvested: 200.53, totalRevived: 300, stage: 'Cancelled' },
    { name: 'American Express National Bank', startingDate: '20/11/2023', endingDate: '20/11/2025', amountInvested: 200.53, totalRevived: 400, stage: 'Completed' },
    { name: 'American Express National Bank', startingDate: '20/11/2023', endingDate: '20/11/2025', amountInvested: 200.53, totalRevived: 300, stage: 'Cancelled' },
    { name: 'American Express National Bank', startingDate: '20/11/2023', endingDate: '20/11/2025', amountInvested: 200.53, totalRevived: 250, stage: 'Completed' },
  ];
  return (
    <div className="bg-white rounded-lg shadow">
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
              <th className="text-left p-4">Total Recived</th>
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
                <td className={`p-4`}>
                  {bundle.totalRevived}
                </td>
                <td className="p-4">
                  <Link to={`${bundle.stage === "Cancelled" ?"/dashboard/investmentcancle" : "#" }`}  className={`${bundle.stage === 'Completed'? "bg-[#128c7e6e] text-black":"bg-red-500 text-black"} px-4 py-1 rounded-full`}>
                    {bundle.stage}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InvestmentHistory