import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ chartData }) => {
  let options = {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: Math.max(...chartData.datasets[0].data) + 10, // Adjust the value as needed
        suggestedMin: Math.min(...chartData.datasets[0].data) - 10, // Adjust the value as needed
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };
  return (
    <div className="mt-10 ">
      <Line height={100} data={chartData} options={options} />
    </div>
  );
};

export default Chart;
