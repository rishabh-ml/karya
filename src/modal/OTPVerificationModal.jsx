import React, { useState } from 'react';

function OTPVerificationModal({ email, onClose, onVerified }) {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleVerify = async () => {
    if (!otp) {
      setError('Please enter the OTP code.');
      return;
    }
    setError('');

    // 1) Call backend e.g. POST /api/auth/verify-otp with { email, otp }
    // 2) If success:
    onVerified();
    // 3) If error, setError('Invalid code') or similar
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm relative">
        <h3 className="text-xl font-semibold mb-2">Verify Email</h3>
        <p className="text-sm text-gray-600 mb-4">We sent a code to <strong>{email}</strong>. Enter it below:</p>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          placeholder="Enter OTP code"
        />

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded text-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleVerify}
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default OTPVerificationModal;
