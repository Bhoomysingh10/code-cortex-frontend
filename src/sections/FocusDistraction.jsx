// src/components/FocusDistraction.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';

const FocusDistraction = () => {
  const data = {
    labels: ['Focused', 'Distracted'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#4CAF50', '#F44336'],
        hoverBackgroundColor: ['#66BB6A', '#EF5350'],
      },
    ],
  };

  return (
    <div className="bg-white shadow p-2 rounded-lg w-80 h-80 flex flex-col items-center justify-center">
      <h3 className="text-sm font-semibold mb-2 text-center">Focus vs. Distraction</h3>
      <Pie data={data} />
    </div>
  );
};

export default FocusDistraction;
