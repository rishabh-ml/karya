import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiSun, FiMoon } from 'react-icons/fi';
import Avatar from '../components/common/Avatar';


const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header / Top Bar */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Karya
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search tasks, projects..."
              className="w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <FiSun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </motion.button>
          
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-700 mx-2"></div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" size="md" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Rishabh</span>
          </motion.div>
        </div>
      </motion.header>


      <div className="flex flex-grow">
        <AnimatePresence>
          <Sidebar />
        </AnimatePresence>
        <main className="flex-grow p-8 overflow-auto">
          <div className="max-w-screen-2xl mx-auto">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
};

export default DashboardLayout;
