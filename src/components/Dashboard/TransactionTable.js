import React from 'react';
import { TransactionRow } from './TransactionRow';


const SAMPLE_TRANSACTIONS= [
  {
    status: 'Successful',
    itemNo: 'TB-102',
    timeDraft: '20/11/2025 09:00 am',
    store: 'Game',
    username: 'Britton Smith',
    product: 'Call of Duty',
    price: '$16,760'
  },
  {
    status: 'Canceled',
    itemNo: 'TB-102',
    timeDraft: '20/11/2025 08:00 am',
    store: 'Game',
    username: 'Britton Smith',
    product: 'Call of Duty',
    price: 'N$40,000.00'
  },
  {
    status: 'Successful',
    itemNo: 'TB-102',
    timeDraft: '20/11/2025 09:00 am',
    store: 'Game',
    username: 'Britton Smith',
    product: 'Call of Duty',
    price: 'N$40,000.00'
  },
  {
    status: 'Canceled',
    itemNo: 'TB-102',
    timeDraft: '20/11/2025 09:00 am',
    store: 'Game',
    username: 'Britton Smith',
    product: 'Call of Duty',
    price: 'N$40,000.00'
  },
  {
    status: 'Pending',
    itemNo: 'TB-102',
    timeDraft: '20/11/2025 09:00 am',
    store: 'Game',
    username: 'Britton Smith',
    product: 'Call of Duty',
    price: 'N$40,000.00'
  }
];

export const TransactionsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-20">
      <div className="p-4 border-b">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
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
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Item No</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Time Draft</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Store</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Username</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Product</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Price</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {SAMPLE_TRANSACTIONS.map((transaction, index) => (
              <TransactionRow key={index} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};