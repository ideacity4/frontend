import React from "react";

const ComparativeAnalysis = ({ data }) => {
  return (
    <section className="space-y-6">
      {/* Percentile */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-secondary">Comparative Rank</h2>
        <p className="text-3xl font-bold text-primary">
          Top {data.percentile}% of similar ideas
        </p>
      </div>

      {/* Similar Ideas Table */}
      <div>
        <h3 className="text-lg font-semibold text-secondary mb-3">Similar Ideas Analysis</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border text-left">
            <thead className="bg-gray-100 text-gray-700 font-medium">
              <tr>
                <th className="px-4 py-2 border">Idea</th>
                <th className="px-4 py-2 border">Market Demand</th>
                <th className="px-4 py-2 border">Growth Rate</th>
              </tr>
            </thead>
            <tbody>
              {data.similarIdeas.map((idea, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 border font-medium">{idea.title}</td>
                  <td className="px-4 py-2 border">{idea.demand}</td>
                  <td className="px-4 py-2 border text-green-600 font-semibold">{idea.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparativeAnalysis;
