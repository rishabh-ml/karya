import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'completed',
      title: 'Task completed',
      description: 'You completed "Design Dashboard UI"',
      timestamp: '2 hours ago',
      icon: FiCheckCircle,
      color: 'text-green-500'
    },
    {
      id: 2,
      type: 'pending',
      title: 'Task pending',
      description: '"Implement API endpoints" is due tomorrow',
      timestamp: '4 hours ago',
      icon: FiClock,
      color: 'text-yellow-500'
    },
    {
      id: 3,
      type: 'alert',
      title: 'New message',
      description: 'You have a new message from the support team',
      timestamp: '1 day ago',
      icon: FiAlertCircle,
      color: 'text-red-500'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Recent Activity
      </h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            whileHover={{ scale: 1.02 }}
            className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className={`${activity.color} pt-1`}>
              <activity.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {activity.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {activity.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                {activity.timestamp}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
