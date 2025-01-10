import React from 'react';

export const AccountCard = ({ title, amount, subtitle, date, showSeeAll = false }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex justify-between items-start">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm text-gray-600">{title}</span>
          {showSeeAll && (
            <button className="text-xs text-gray-500 hover:text-gray-700">SEE ALL ACCOUNTS</button>
          )}
        </div>
        <p className="text-2xl font-bold">${amount}</p>
        {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
      </div>
      {date && (
        <div className="text-sm text-gray-500">{date}</div>
      )}
    </div>
  );
};