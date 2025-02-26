// src/components/dashboard/TaskStatusChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskStatusChart = ({ tasks }) => {
  const statusCounts = { todo: 0, 'in-progress': 0, done: 0 };
  tasks.forEach((t) => {
    statusCounts[t.status] = (statusCounts[t.status] || 0) + 1;
  });

  const data = {
    labels: ['To Do', 'In Progress', 'Done'],
    datasets: [
      {
        label: 'Tasks by Status',
        data: [statusCounts.todo, statusCounts['in-progress'], statusCounts.done],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',   // pinkish
          'rgba(54, 162, 235, 0.5)',  // bluish
          'rgba(75, 192, 192, 0.5)',  // teal
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Task Status Distribution
      </h3>
      <Pie data={data} />
    </div>
  );
};

export default TaskStatusChart;
