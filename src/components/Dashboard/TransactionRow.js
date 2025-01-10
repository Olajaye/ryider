import React from 'react';
import { getStatusColor } from '../../util/statusColor';


export const TransactionRow = ({ transaction }) => {
  return (
    <tr>
      <td className="px-4 py-3">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
          {transaction.status}
        </span>
      </td>
      <td className="px-4 py-3 text-sm">{transaction.itemNo}</td>
      <td className="px-4 py-3 text-sm">{transaction.timeDraft}</td>
      <td className="px-4 py-3 text-sm">{transaction.store}</td>
      <td className="px-4 py-3 text-sm">{transaction.username}</td>
      <td className="px-4 py-3 text-sm">{transaction.product}</td>
      <td className="px-4 py-3 text-sm">{transaction.price}</td>
      <td className="px-4 py-3">
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </td>
    </tr>
  );
};