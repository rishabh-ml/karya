// src/pages/auth/SignUpForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          username,
          password
        }),
      });

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const data = await response.json();
        if (response.ok) {
          // On successful signup, call signup from AuthContext and navigate to dashboard
          signup(data);
        } else {
          setError(data.message || 'Signup failed');
        }
      } else {
        setError('Unexpected response format');
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-2">Create your Karya Account</h2>
        <p className="text-center text-gray-600 mb-6">
          "Yogah karmasu kaushalam" - Excellence in action is yoga
        </p>
      </motion.div>

      {error && (
        <motion.div
          className="text-red-500 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.div>
      )}

      {/* Full Name Field */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Username Field */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Password Field */}
      <div className="space-y-1 relative">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div className="space-y-1 relative">
        <label className="text-sm font-medium text-gray-700">Confirm Password</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition-all"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97, y: 2 }}
      >
        {loading ? 'Signing Up...' : 'Sign Up'}
      </motion.button>

      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p className="text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 font-medium hover:underline hover:text-indigo-700">
            Log In
          </a>
        </p>
      </motion.div>
    </motion.form>
  );
};

export default SignUpForm;
