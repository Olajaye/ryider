import React from 'react';
import { formatCurrency } from '../../util/formatters';




export const BalanceCard = ({ balance, onSeeAll }) => {
  return (
    <div className="bg-white rounded-lg p-6 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </span>
        </div>
        <button 
          onClick={onSeeAll}
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          SEE ALL ACCOUNTS
        </button>
      </div>
      <div>
        <span className="text-3xl font-bold">{formatCurrency(balance)}</span>
        <p className="text-sm text-gray-600 mt-1">TOTAL BALANCE</p>
      </div>
    </div>
  );
};