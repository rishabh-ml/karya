import { useState } from 'react';
import { motion } from 'framer-motion';

const OTPVerificationModal = ({ email, onVerify, onClose }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    try {
      setError('');
      setLoading(true);
      
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          otp
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        onVerify(data);
      } else {
        setError(data.message || 'OTP verification failed');
      }
    } catch (err) {
      setError('An error occurred during OTP verification');
    }
    
    setLoading(false);
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-gray-800 p-6 rounded-lg w-96"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h2 className="text-xl font-bold mb-4">Verify Email</h2>
        <p className="text-gray-400 mb-4">We've sent a 6-digit code to {email}</p>
        
        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          />
          
          {error && <div className="text-red-500 mb-4">{error}</div>}
          
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default OTPVerificationModal;
