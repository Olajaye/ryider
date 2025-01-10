import React from 'react';


export const VisaCard = ({
  lastFour,
  expiryDate,
  isDefault,
  onSetDefault,
  onEdit
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600" fill="currentColor">
            <path d="M12 0L3 7v9a8 8 0 0016 0V7L12 0z"/>
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Visa ending in {lastFour}</span>
            {isDefault && (
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            )}
          </div>
          <p className="text-sm text-gray-600">Expiry {expiryDate}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {!isDefault && (
          <button
            onClick={onSetDefault}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Set as default
          </button>
        )}
        <button
          onClick={onEdit}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Edit
        </button>
      </div>
    </div>
  );
};