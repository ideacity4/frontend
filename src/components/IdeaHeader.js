import React from "react";
import { FaCheckCircle, FaShareAlt } from "react-icons/fa";

const IdeaHeader = ({ title, user, verified, score, datePosted }) => {
  return (
    <div className="flex flex-col gap-4 border-b pb-6">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-secondary">{title}</h1>

      {/* User Info + Meta */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        {/* Left Block: Creator Info + Badge */}
        <div className="flex items-start sm:items-center gap-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">{user.name}</p>
            <p className="text-xs text-gray-500">
              Posted on {new Date(datePosted).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          {verified && (
            <span className="ml-2 mt-1 sm:mt-0 inline-flex items-center text-green-600 text-xs font-medium">
              <FaCheckCircle className="mr-1" />
              Verified
            </span>
          )}
        </div>

        {/* Right Block: Score + Share */}
        <div className="flex items-center justify-between gap-4 sm:justify-end">
          <div className="text-right">
            <span className="text-xl sm:text-2xl font-bold text-green-700">{score}</span>
            <p className="text-xs text-gray-500">IdeaIndex</p>
          </div>
          <button
            title="Share"
            className="text-primary hover:text-blue-600 transition text-lg"
          >
            <FaShareAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdeaHeader;
