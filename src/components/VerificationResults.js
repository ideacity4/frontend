import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const VerificationResults = ({ idea, onNext }) => {
  return (
    <>
    <div className="space-y-8 mt-8">
      {/* Originality Score */}
      <div className="text-center">
        <h2 className="text-lg font-semibold text-secondary mb-2">Originality Score</h2>
        <div className="relative w-24 h-24 mx-auto">
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
              className="text-blue-500"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${idea.originalityScore}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-600">
            {idea.originalityScore}%
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-2">Higher means more unique</p>
      </div>

      {/* Similar Ideas */}
      {idea.similarIdeas?.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-secondary mb-2">Similar Ideas Found</h2>
          <ul className="space-y-3">
            {idea.similarIdeas.map((similar) => (
              <li
                key={similar.id}
                className="flex justify-between items-center bg-gray-50 border rounded px-4 py-2 text-sm"
              >
                <div>
                  <p className="font-medium text-gray-800">{similar.title}</p>
                  <p className="text-xs text-gray-500">Similarity: {similar.similarity}%</p>
                </div>
                <a
                  href={`/idea/${similar.id}`}
                  className="text-primary text-sm hover:underline flex items-center gap-1"
                >
                  View <FaExternalLinkAlt className="text-xs" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Recommendations */}
      {idea.recommendations?.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-secondary mb-2">Recommendations</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            {idea.recommendations.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <form 
    className="space-y-6"
    onSubmit={(e) => {
      e.preventDefault();
      onNext();
    }}
    >
        {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition"
        >
          Next: Check result →
        </button>
      </div>
    </form>
    </>
  );
};

export default VerificationResults;
