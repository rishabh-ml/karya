import React from 'react';
import { motion } from 'motion/react';
import SignUpForm from '../../components/common/SignUpForm';

function SignUpPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      {/* You could also add a container for a background image or Sanskrit motif */}
      <SignUpForm />
    </motion.div>
  );
}

export default SignUpPage;
