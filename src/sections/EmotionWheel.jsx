// src/components/EmotionWheel.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const EmotionWheel = () => {
  const data = {
    labels: ['Happy', 'Stressed', 'Neutral', 'Fatigued'],
    datasets: [
      {
        data: [25, 30, 20, 25],
        backgroundColor: ['#4CAF50', '#F44336', '#FFEB3B', '#2196F3'],
        hoverBackgroundColor: ['#66BB6A', '#EF5350', '#FFF176', '#42A5F5'],
      },
    ],
  };

  return (
    <div className="bg-white shadow p-2 rounded-lg w-80 h-80 flex flex-col items-center justify-center">
      <h3 className="text-sm font-semibold mb-2 text-center">Emotion Wheel</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default EmotionWheel;
