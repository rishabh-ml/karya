// src/pages/auth/LoginPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center min-h-screen bg-gray-50"
    >
      <LoginForm />
    </motion.div>
  );
};

export default LoginPage;
