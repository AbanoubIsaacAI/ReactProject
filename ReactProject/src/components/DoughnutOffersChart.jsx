import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutOffersChart = ({ products }) => {
  const offerCount = products.filter(p => p.offer && p.offer !== "0").length;
  const regularCount = products.length - offerCount;

  const data = {
    labels: ["On Offer", "Regular Price"],
    datasets: [
      {
        data: [offerCount, regularCount],
        backgroundColor: ["#22c55e", "#f97316"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    cutout: "65%",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#374151",
          font: {
            size: 14,
            weight: "bold",
          },
          padding: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.label}: ${context.raw} product(s)`,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-15 w-full sm:w-[400px] md:w-[450px]">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        Offer Distribution
      </h2>
      <div className="relative h-[300px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutOffersChart;
