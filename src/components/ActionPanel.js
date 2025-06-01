import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ActionPanel = ({ price, saved, onSaveToggle }) => {
  return (
    <div className="mt-10 p-6 rounded-xl border bg-[#F9FAFB] shadow-sm w-full sm:max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-bold text-secondary">{price}</span>
        <button
          onClick={onSaveToggle}
          className="text-primary hover:text-red-500 transition text-lg"
          title="Save for later"
        >
          {saved ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      <button className="w-full bg-primary text-white text-sm font-semibold py-3 rounded-lg hover:bg-blue-600 transition">
        Purchase Idea
      </button>
    </div>
  );
};

export default ActionPanel;
