import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import DashboardWidgets from '../../components/dashboard/DashboardWidgets';
import DashboardLayout from '../../layouts/DashboardLayout';
import RecentActivity from '../../components/dashboard/RecentActivity';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <DashboardHeader />
          
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <DashboardWidgets />
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <RecentActivity />
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Quick Stats
              </h3>
              {/* Placeholder for quick stats */}
              <div className="text-gray-500 dark:text-gray-400">
                Coming Soon
              </div>
            </div>
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </DashboardLayout>
  );
};


export default DashboardPage;
