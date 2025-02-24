import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import OTPVerificationModal from '../../modal/OTPVerificationModal';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setError('');
      setLoading(true);
      
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          username,
          password
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setShowOTPModal(true);
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred during signup');
    }
    
    setLoading(false);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {error && <div className="text-red-500">{error}</div>}
      
      <div>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border rounded bg-gray-800 text-white"
        />
      </div>
      
      <div>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded bg-gray-800 text-white"
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full p-2 border rounded bg-gray-800 text-white"
        />
      </div>
      
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded bg-gray-800 text-white"
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full p-2 border rounded bg-gray-800 text-white"
        />
      </div>
      
      <motion.button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {loading ? 'Signing Up...' : 'Sign Up'}
      </motion.button>

      <div className="mt-4 text-center">
        <p className="text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-400 hover:underline">Log In</a>
        </p>
      </div>
    
      {showOTPModal && (
        <OTPVerificationModal
          email={email}
          onVerify={(data) => {
            signup(data);
            navigate('/dashboard');
          }}
          onClose={() => setShowOTPModal(false)}
        />
      )}
    </motion.form>
  );
};

export default SignUpForm;
