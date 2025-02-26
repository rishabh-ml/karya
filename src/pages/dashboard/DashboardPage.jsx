// src/pages/dashboard/DashboardPage.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import DashboardWidgets from '../../components/dashboard/DashboardWidgets';
import DashboardLayout from '../../layouts/DashboardLayout';
import RecentActivity from '../../components/dashboard/RecentActivity';
import CreateTaskModal from '../../components/dashboard/CreateTaskModal';
import TaskStatusChart from '../../components/dashboard/TaskStatusChart';

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // For derived stats in DashboardWidgets
  const [stats, setStats] = useState({
    workBases: 0,
    activeGoals: 0,
    pendingTasks: 0,
    completedTasks: 0
  });

  // For the "Create Task" modal
  const [showTaskModal, setShowTaskModal] = useState(false);

  // Fetch tasks from backend on mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/tasks');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        setTasks(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'An error occurred');
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Whenever tasks change, compute new stats
  useEffect(() => {
    if (tasks.length > 0) {
      const pending = tasks.filter(t => t.status === 'todo' || t.status === 'in-progress').length;
      const completed = tasks.filter(t => t.status === 'done').length;
      
      // If you track "workBases" or "activeGoals" in separate collections, fetch them or use placeholders
      setStats({
        workBases: 5,        // placeholder
        activeGoals: 12,     // placeholder
        pendingTasks: pending,
        completedTasks: completed
      });
    } else {
      // If no tasks, zero out the stats
      setStats({
        workBases: 0,
        activeGoals: 0,
        pendingTasks: 0,
        completedTasks: 0
      });
    }
  }, [tasks]);

  // Handler to open the Create Task modal
  const handleOpenTaskModal = () => {
    setShowTaskModal(true);
  };

  // Handler to create a new task in the backend
  const handleCreateTask = async (taskData) => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
      });
      if (response.ok) {
        const newTask = await response.json();
        setTasks(prev => [newTask, ...prev]);
      } else {
        console.error('Failed to create task');
      }
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  return (
    <DashboardLayout>
      <AnimatePresence>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <DashboardHeader />

          {/* Show error if any */}
          {error && (
            <div className="text-red-500">
              {error}
            </div>
          )}

          {/* Loading State */}
          {loading ? (
            <p className="text-gray-500">Loading tasks...</p>
          ) : (
            <>
              {/* Stats + "Create Task" button */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Overview
                  </h2>
                  <button
                    onClick={handleOpenTaskModal}
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                  >
                    + Create Task
                  </button>
                </div>
                <DashboardWidgets stats={stats} />
              </motion.section>

              {/* Activity + Chart */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Pass tasks to show recent ones */}
                <RecentActivity tasks={tasks} />

                {/* Task Status Chart */}
                <TaskStatusChart tasks={tasks} />
              </motion.section>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Create Task Modal */}
      {showTaskModal && (
        <CreateTaskModal
          onClose={() => setShowTaskModal(false)}
          onCreate={handleCreateTask}
        />
      )}
    </DashboardLayout>
  );
};

export default DashboardPage;
