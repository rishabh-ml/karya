// src/components/dashboard/DashboardWidgets.jsx
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup'; // optional library

import { FiFolder, FiTarget, FiClock, FiCheckCircle } from 'react-icons/fi';

const DashboardWidgets = ({ stats }) => {
  const widgets = [
    { 
      id: 1, 
      label: 'Work Bases', 
      value: stats.workBases || 0,
      icon: <FiFolder className="w-8 h-8 mb-2 text-indigo-500" />,
      bgColor: 'bg-indigo-50'
    },
    { 
      id: 2, 
      label: 'Active Goals', 
      value: stats.activeGoals || 0,
      icon: <FiTarget className="w-8 h-8 mb-2 text-green-500" />,
      bgColor: 'bg-green-50'
    },
    { 
      id: 3, 
      label: 'Pending Tasks', 
      value: stats.pendingTasks || 0,
      icon: <FiClock className="w-8 h-8 mb-2 text-yellow-500" />,
      bgColor: 'bg-yellow-50'
    },
    { 
      id: 4, 
      label: 'Completed Tasks', 
      value: stats.completedTasks || 0,
      icon: <FiCheckCircle className="w-8 h-8 mb-2 text-blue-500" />,
      bgColor: 'bg-blue-50'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {widgets.map((widget) => (
        <motion.div
          key={widget.id}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className={`${widget.bgColor} rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer`}
        >
          {widget.icon}
          <span className="text-4xl font-bold text-gray-800 mb-2">
            <CountUp end={widget.value} duration={1} />
          </span>
          <span className="text-sm font-medium text-gray-600 text-center">
            {widget.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardWidgets;
