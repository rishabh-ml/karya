// src/components/dashboard/RecentActivity.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';

const RecentActivity = ({ tasks }) => {
  // Sort tasks by createdAt or updatedAt descending
  const sortedTasks = [...tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  // Take top 5 for “recent activity”
  const recentTasks = sortedTasks.slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Recent Activity
      </h3>
      
      {recentTasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No recent activity found.</p>
      ) : (
        <div className="space-y-4">
          {recentTasks.map((task) => {
            let Icon = FiClock;
            let iconColor = 'text-yellow-500';
            if (task.status === 'done') {
              Icon = FiCheckCircle;
              iconColor = 'text-green-500';
            }
            // If you have other statuses or logic, adjust accordingly

            return (
              <motion.div
                key={task._id}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className={`${iconColor} pt-1`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {task.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Status: {task.status}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                    {new Date(task.createdAt).toLocaleString()}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
