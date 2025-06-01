import React from "react";
import { FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

const UserInfo = ({ user }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b pb-6">
      {/* Avatar */}
      <img
        src={user.avatar}
        alt={user.name}
        className="w-24 h-24 rounded-full object-cover border"
      />

      {/* Info */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-secondary">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.bio}</p>

        <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
          <FaCheckCircle />
          {user.credentials}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaCalendarAlt />
          Joined{" "}
          {new Date(user.joined).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
          })}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
