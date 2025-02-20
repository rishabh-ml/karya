import React from 'react';
import { motion } from 'framer-motion';

const DashboardHeader = () => {
  const userName = 'Rishabh';
  const motivationalQuote = 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन';

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome, {userName}!
      </h1>
      <p className="text-gray-500 mt-1 italic">
        {motivationalQuote}
      </p>
    </motion.div>
  );
};

export default DashboardHeader;
