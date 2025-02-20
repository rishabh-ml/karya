import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiFolder,
  FiClipboard,
  FiSettings,
  FiMenu,
  FiX
} from 'react-icons/fi';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: FiHome },
  { name: 'Work Bases', path: '/workbases', icon: FiFolder },
  { name: 'Goals', path: '/goals', icon: FiClipboard },
  { name: 'Settings', path: '/settings', icon: FiSettings },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative bg-white border-r border-gray-200">
      {/* Mobile toggle button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 md:hidden p-2 bg-gray-200 rounded"
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ type: 'spring', stiffness: 80 }}
        className={`min-h-[calc(100vh-3.5rem)] w-64 fixed md:relative z-50 ${
          isOpen ? 'block' : 'hidden md:block'
        }`}
      >
        <nav className="mt-6">
          <ul>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="mb-1"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 text-sm transition-all rounded hover:bg-indigo-50 ${
                        isActive
                          ? 'bg-indigo-100 text-indigo-700 font-medium'
                          : 'text-gray-700'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </NavLink>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </motion.aside>
    </div>
  );
};

export default Sidebar;
