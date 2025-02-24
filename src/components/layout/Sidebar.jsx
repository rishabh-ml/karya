import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiFolder,
  FiClipboard,
  FiSettings,
  FiMenu,
  FiX,
  FiLogOut
} from 'react-icons/fi';


const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: FiHome },
  { name: 'Work Bases', path: '/workbases', icon: FiFolder },
  { name: 'Goals', path: '/goals', icon: FiClipboard },
  { name: 'Settings', path: '/settings', icon: FiSettings },
];

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: FiHome },
    { name: 'Work Bases', path: '/workbases', icon: FiFolder },
    { name: 'Settings', path: '/settings', icon: FiSettings },
    { name: 'Logout', path: '/logout', icon: FiLogOut },


  ];

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Karya</h2>
      </div>
      <nav className="flex flex-col space-y-1 p-3">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.path}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors ${
              window.location.pathname === item.path ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </motion.a>
        ))}
      </nav>
    </motion.div>

  );
};

export default Sidebar;
