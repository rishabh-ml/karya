// src/pages/auth/SignUpPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SignUpForm from './SignUpForm';

const SignUpPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center min-h-screen bg-gray-50"
    >
      <motion.div
        className="w-full max-w-md mx-4 sm:mx-0 bg-white rounded-lg shadow-lg p-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
      >
        <SignUpForm />
      </motion.div>
    </motion.div>
  );
};

export default SignUpPage;
