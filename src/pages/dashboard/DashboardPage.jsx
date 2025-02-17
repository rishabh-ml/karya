import React from 'react';
import { motion } from 'framer-motion';

const DashboardPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 p-4"
    >
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>
      <main>
        <p className="text-lg">
          Welcome to your Dashboard! Here you'll see an overview of your tasks, work bases, and more.
        </p>
        {/* Add your dashboard widgets/cards here */}
      </main>
    </motion.div>
  );
};

export default DashboardPage;
