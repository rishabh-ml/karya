import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import { motion } from 'framer-motion';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header / Top Bar */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
      >
        <div>
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Karya
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Global Search */}
          <input 
            type="text" 
            placeholder="Search..."
            className="hidden sm:block border border-gray-300 dark:border-gray-700 rounded px-3 py-1 bg-white dark:bg-gray-800 focus:outline-none focus:ring"
          />
          {/* Profile or Dark Mode Toggle could go here */}
        </div>
      </motion.header>

      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
