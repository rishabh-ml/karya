import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import OTPVerificationModal from '../../modal/OTPVerificationModal';

function SignUpForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // For OTP verification
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const handleSendOTP = async () => {
    if (!email) {
      setError('Please enter an email first.');
      return;
    }
    setError('');

    // 1) Call backend endpoint to send OTP to the user’s email
    //    e.g. POST /api/auth/send-otp with { email }

    // 2) On success, open the modal
    setOtpModalOpen(true);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!isEmailVerified) {
      setError('Please verify your email before signing up.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Additional validations as needed (empty fields, etc.)

    setError('');
    // 3) Submit sign-up to the backend (POST /api/auth/signup)
    //    e.g. { name, username, email, password }

    // 4) Handle success (redirect to login or auto-login)
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Create your Karya Account</h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <form onSubmit={handleSignUp}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Username Field */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <div className="flex space-x-2">
            <input
              type="email"
              className="flex-grow border border-gray-300 rounded px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="button"
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
              onClick={handleSendOTP}
            >
              {isEmailVerified ? 'Verified' : 'Verify'}
            </button>
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <PasswordInput
            password={password}
            onChange={(val) => setPassword(val)}
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Confirm Password</label>
          <PasswordInput
            password={confirmPassword}
            onChange={(val) => setConfirmPassword(val)}
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Already have an account?{' '}
        <Link to="/login" className="text-indigo-600 hover:underline">
          Log In
        </Link>
      </p>

      {/* OTP Verification Modal */}
      {otpModalOpen && (
        <OTPVerificationModal
          email={email}
          onClose={() => setOtpModalOpen(false)}
          onVerified={() => {
            setIsEmailVerified(true);
            setOtpModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default SignUpForm;
