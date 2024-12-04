import { Check, X } from 'lucide-react';

// Password validation rules
export const PASSWORD_RULES = {
  minLength: 8,
  requireUppercase: true,
  requireNumber: true,
  requireSpecial: true,
};


export const validatePassword = (password) => {
  const results = {
    hasMinLength: password.length >= PASSWORD_RULES.minLength,
    hasUppercase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isValid = Object.values(results).every(Boolean);

  return {
    isValid,
    ...results,
  };
};


export const PasswordRequirements = ({ validation }) => {
  
  const requirements = [
    { key: 'hasMinLength', label: 'At least 8 characters' },
    { key: 'hasUppercase', label: 'One uppercase letter' },
    { key: 'hasNumber', label: 'One number' },
    { key: 'hasSpecial', label: 'One special character' },
  ];

  return (
    <div className="mt-2 space-y-1">
      {requirements.map(({ key, label }) => (
        <div
          key={key}
          className={`flex items-center space-x-2 text-sm ${
            validation[key]
              ? 'text-green'
              : 'text-gray-500'
          }`}
        >
          {validation[key] ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <X size={16} className="text-gray-400" />
          )}
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};
