// src/components/Dashboard.jsx
import React from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import Navbar from '../Components/Navbar';

const Chart = () => {
 
  const lineData = {
    labels: ['25.07', '26.07', '27.07', '28.07', '29.07', '30.07', '31.07', '32.07', '33.07'],
    datasets: [
      {
        label: 'Activity',
        data: [1, 2, 3, 2, 3, 2, 3, 1, 2],
        fill: true,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  const doughnutData = {
    labels: ['Apps', 'Web', 'Mobile'],
    datasets: [
      {
        label: 'Website Traffic',
        data: [38, 21, 21],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  const barData = {
    labels: ['Domains', 'Subdomains', 'IP Addresses'],
    datasets: [
      {
        label: 'Count',
        data: [0, 60, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <><Navbar/>
    <div className="bg-gray-100 min-h-screen p-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Top left Card */}
      <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold">Bitcoin</div>
          <div className="text-sm">$29,340.20</div>
        </div>
        <div className="text-sm text-gray-500 mb-2">Keep up-to-date info to increase interactions</div>
        <div className="h-16 bg-gray-100 rounded"></div>
      </div>

      {/* Top Center Card (Activity Graph) */}
      <div className="bg-white rounded-lg shadow p-4 col-span-2">
        <h3 className="text-lg font-bold mb-4">Activity</h3>
        <Line data={lineData} />
      </div>

      {/* Left Middle Card */}
      <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
        <h3 className="text-lg font-bold">Avr. Response Rate</h3>
        <div className="text-2xl font-bold">50%</div>
        <div className="mt-2">
          <div className="text-xs text-green-500">15% from last month</div>
          <div className="w-full bg-gray-200 h-2 mt-2">
            <div className="h-2 bg-green-500" style={{ width: '15%' }}></div>
          </div>
        </div>
      </div>

      {/* Right Center Card (Website Traffic) */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-bold">Website Traffic</h3>
        <Doughnut data={doughnutData} />
      </div>

      {/* Bottom Left (Domain Info) */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-bold">Domains</h3>
        <Bar data={barData} />
      </div>

     
    </div>
    </>
  );
};

export default Chart;
