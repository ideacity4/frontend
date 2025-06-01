import React from "react";
import { FaDollarSign, FaShoppingCart, FaChartLine, FaStar } from "react-icons/fa";

const UserStats = ({ stats }) => {
  const statItems = [
    {
      icon: <FaDollarSign />,
      label: "Total Earnings",
      value: `$${stats.earnings}`
    },
    {
      icon: <FaShoppingCart />,
      label: "Total Spending",
      value: `$${stats.spending}`
    },
    {
      icon: <FaChartLine />,
      label: "Avg. Idea Value",
      value: `$${stats.avgValue}`
    },
    {
      icon: <FaStar />,
      label: "Reputation Score",
      value: stats.reputation
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-b pb-6">
      {statItems.map((item, i) => (
        <div key={i} className="bg-[#F8FAFC] p-4 rounded shadow-sm flex flex-col items-center text-center">
          <div className="text-xl text-primary mb-2">{item.icon}</div>
          <div className="text-sm font-medium text-gray-500">{item.label}</div>
          <div className="text-lg font-bold text-secondary">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
