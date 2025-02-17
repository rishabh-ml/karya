import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async () => {
    // Placeholder: Call backend endpoint to trigger password reset OTP/email.
    // For now, we simulate a success message.
    setMessage(`If an account exists for ${email}, you will receive a reset link shortly.`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <motion.div
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-semibold mb-3">Forgot Password</h3>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {message && <p className="text-green-600 mb-3">{message}</p>}
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded text-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Reset Password
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginModal;
