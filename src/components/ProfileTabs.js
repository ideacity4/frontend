import React from "react";

const ProfileTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex flex-wrap gap-3 border-b pb-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            activeTab === tab
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;
