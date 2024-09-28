// src/components/MoodTracking.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const MoodTracking = () => {
  const data = {
    labels: ['Morning', 'Afternoon', 'Evening'],
    datasets: [
      {
        label: 'Mood Score',
        data: [7, 4, 5],
        backgroundColor: ['#66BB6A', '#FFA726', '#42A5F5'],
      },
    ],
  };

  return (
    <div className="bg-white shadow p-2 rounded-lg w-64 h-64 flex flex-col items-center justify-center">
      <h3 className="text-sm font-semibold mb-2 text-center">Mood Tracking</h3>
      <Bar data={data} />
    </div>
  );
};

export default MoodTracking;
