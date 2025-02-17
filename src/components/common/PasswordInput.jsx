import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'; 
// Or any other icon approach

function PasswordInput({ password, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
        value={password}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
        onClick={toggleShow}
        className="absolute right-2 top-2 text-gray-500"
      >
        {showPassword ? (
          <EyeOffIcon className="w-5 h-5" />
        ) : (
          <EyeIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}

export default PasswordInput;
