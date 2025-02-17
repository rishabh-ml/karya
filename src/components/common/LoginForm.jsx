import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../../components/common/PasswordInput';
import LoginModal from '../../modal/LoginModal';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }
    setError('');

    // Call your backend API for login
    // For example: POST /api/auth/login with { email, password }
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // Redirect to dashboard upon successful login
        navigate('/dashboard');
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('Network error, please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Login to Karya</h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <PasswordInput 
            value={password}
            onChange={setPassword}
            placeholder="Enter your password"
          />
          <button
          onClick={() => setModalOpen(true)}
          className="text-sm text-indigo-600 hover:underline"
        >
          Forgot Password?
        </button>
        </div>
        <button 
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 w-full"
        >
          Log In
        </button>
      </form>

      <div className="flex justify-between mt-4">
        <p className="text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>

      {modalOpen && <LoginModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default LoginForm;
