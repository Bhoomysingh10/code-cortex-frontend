// src/components/ProductivityTrends.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';

const ProductivityTrends = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Productivity Level',
        data: [3, 5, 2, 6, 4, 7, 5],
        fill: false,
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
      },
    ],
  };

  return (
    <div className="bg-white shadow p-2 rounded-lg w-96 h-72 flex flex-col items-center justify-center">
      <h3 className="text-sm font-semibold mb-2 text-center">Productivity Trends</h3>
      <Line data={data} />
    </div>
  );
};

export default ProductivityTrends;
