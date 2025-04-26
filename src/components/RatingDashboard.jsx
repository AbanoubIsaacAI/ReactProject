import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RatingDashboard = ({ products }) => {
  const sortedByRate = [...products]
    .filter((p) => p.rating)
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 5);

  const bestSeller = [...products]
    .filter((p) => p.rating)
    .sort((a, b) => b.rating.count - a.rating.count)[0];

  const data = {
    labels: sortedByRate.map((p) => p.title),
    datasets: [
      {
        label: "Rating (out of 5)",
        data: sortedByRate.map((p) => p.rating.rate),
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800">Top Rated Products</h2>
      <div className="w-full max-w-2xl">
        <Bar data={data} options={options} />
      </div>

      {bestSeller && (
        <div className="mt-10 bg-yellow-100 p-6 rounded-xl shadow-sm w-full max-w-md text-center">
          <h3 className="text-lg font-semibold text-yellow-800">🏆 Best Seller</h3>
          <p className="text-xl font-bold text-gray-800 mt-2">{bestSeller.title}</p>
          <p className="text-sm text-gray-600 mt-1">
            {bestSeller.rating.count} Reviews • Avg. Rating: {bestSeller.rating.rate}
          </p>
        </div>
      )}
    </div>
  );
};

export default RatingDashboard;
