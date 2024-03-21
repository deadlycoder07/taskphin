import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
  const data = {
    labels: ['16/03/24', '17/03/24', '18/03/24', '19/03/24', '20/03/24'], 
    datasets: [
      {
        label: 'Applied candidates',
        data: [12, 19, 3, 5, 2, 3], 
        fill: false,
        backgroundColor: 'rgb(59, 130, 246)', 
        borderColor: 'rgba(59, 130, 246, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
