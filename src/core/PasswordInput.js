
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';



export const PasswordInput = ({
  value,
  onChange,
  isValid,
  placeholder = 'Enter password',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2 border-[1px] outline-green border-green rounded-lg pr-10 ${
          isValid === true
            ? 'border-green-500 focus:ring-green-200'
            : isValid === false
            ? 'border-red-500 focus:ring-red-200'
            : 'border-gray-300 focus:ring-blue-200'
        }`}
        placeholder={placeholder}
        required
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
      >
        {showPassword ? (
          <EyeOff size={20} className="text-gray-500" />
        ) : (
          <Eye size={20} className="text-gray-500" />
        )}
      </button>
    </div>
  );
};