import React from "react";
import { FaLightbulb, FaClock } from "react-icons/fa";

const RecommendationPanel = ({ recommendations }) => {
  return (
    <section className="space-y-6">
      {/* Suggestions */}
      <div>
        <h2 className="text-xl font-semibold text-secondary mb-2 flex items-center gap-2">
          <FaLightbulb className="text-yellow-500" />
          Suggestions to Increase Value
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          {recommendations.suggestions.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* Market Timing Advice */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md flex items-start gap-3">
        <FaClock className="text-blue-600 mt-1" />
        <div>
          <h3 className="font-semibold text-blue-700 mb-1">Market Timing Advice</h3>
          <p className="text-sm text-gray-700">{recommendations.marketTiming}</p>
        </div>
      </div>
    </section>
  );
};

export default RecommendationPanel;
