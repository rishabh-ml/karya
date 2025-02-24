import React from 'react';
import { motion } from 'framer-motion';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import Avatar from '../common/Avatar';

const DashboardHeader = () => {
  const userName = 'Rishabh';
  const motivationalQuote = 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन';
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Good Morning, {userName}!
          </h1>
          <p className="text-gray-500 mt-1 italic">
            {motivationalQuote}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {currentDate}
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative cursor-pointer"
          >
            <FiBell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              3
            </span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" size="md" />
            <FiChevronDown className="text-gray-600" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardHeader;
