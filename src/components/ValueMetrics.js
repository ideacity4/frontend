import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from "chart.js";

// Register chart.js modules
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const ValueMetrics = ({ valuation, history, factors }) => {
  // Chart Data
  const chartData = {
    labels: history.map((_, i) => `T${i + 1}`), // T1, T2, ...
    datasets: [
      {
        label: "Valuation ($)",
        data: history,
        fill: false,
        borderColor: "#1D9BF0",
        backgroundColor: "#1D9BF0",
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value / 1000}k`
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <section className="space-y-6">
      {/* Current Valuation */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-secondary">Current Valuation</h2>
        <p className="text-3xl font-bold text-green-600">{valuation}</p>
      </div>

      {/* Chart */}
      <div>
        <h3 className="text-lg font-semibold text-secondary mb-2">Historical Valuation Trend</h3>
        <div className="bg-white border rounded p-4">
          <Line data={chartData} options={chartOptions} height={200} />
        </div>
      </div>

      {/* Key Factors */}
      <div>
        <h3 className="text-lg font-semibold text-secondary mb-2">Key Valuation Factors</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {factors.map((factor, i) => (
            <li key={i} className="p-4 border rounded bg-gray-50">
              <p className="font-medium text-gray-700">{factor.label}</p>
              <p className="text-xl font-bold text-blue-600">{factor.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ValueMetrics;
