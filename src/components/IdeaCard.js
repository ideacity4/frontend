import React from "react";
import { Link } from "react-router-dom";

const IdeaCard = ({ idea }) => {
  return (
    <Link to={`/idea/${idea._id}`}>
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      {/* Title + Description */}
      <div>
        <h3 className="text-lg font-bold text-gray-800">{idea.title}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-3">{idea.description}</p>
      </div>

      {/* Middle Section */}
      <div className="flex items-center justify-between mt-4">
        {/* IdeaIndex Gauge */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <path
                className="text-gray-200"
                strokeWidth="4"
                fill="none"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-green-500"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${idea.score}, 100`}
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
              {idea.score}
            </span>
          </div>
          <span className="text-xs text-gray-600">IdealIndex</span>
        </div>

        {/* Verified Badge */}
        {idea.verified && (
          <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 font-medium">
            ✔ Verified
          </span>
        )}
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-center mt-5 pt-3 border-t text-sm">
        <div className="flex items-center gap-2">
          <img
            src={idea.seller_id.avatar}
            alt={idea.seller_id.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-gray-700 font-medium">{idea.seller_id.name}</span>
        </div>
        <span className="text-yellow-600 font-semibold">{idea.price}</span>
      </div>
    </div>
    </Link>
  );
};

export default IdeaCard;
