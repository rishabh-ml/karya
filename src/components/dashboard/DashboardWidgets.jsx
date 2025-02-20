import React from 'react';
import { motion } from 'framer-motion';

const DashboardWidgets = () => {
  const widgets = [
    { id: 1, label: 'Work Bases', value: 5 },
    { id: 2, label: 'Active Goals', value: 12 },
    { id: 3, label: 'Pending Tasks', value: 23 },
    { id: 4, label: 'Completed Tasks', value: 47 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {widgets.map((widget) => (
        <motion.div
          key={widget.id}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="bg-white rounded shadow p-4 flex flex-col items-center"
        >
          <span className="text-3xl font-semibold text-indigo-600">
            {widget.value}
          </span>
          <span className="text-sm text-gray-600">{widget.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardWidgets;
