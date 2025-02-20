import React from 'react';
import { motion } from 'framer-motion';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import DashboardWidgets from '../../components/dashboard/DashboardWidgets';
import DashboardLayout from '../../layouts/DashboardLayout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DashboardHeader />
        <DashboardWidgets />
        {/* Additional sections or activity feeds can go here */}
      </motion.div>
    </DashboardLayout>
  );
};

export default DashboardPage;
