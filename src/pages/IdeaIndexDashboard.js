import React from "react";
import { useParams } from "react-router-dom";
import allDashboards from "../data/indexDashboard";
import ValueMetrics from "../components/ValueMetrics";
import ComparativeAnalysis from "../components/ComparativeAnalysis";
import RecommendationPanel from "../components/RecommendationPanel";

export default function IdeaIndexDashboard() {
  const { id } = useParams();
  const dashboard = allDashboards.find((idea) => idea.id === parseInt(id));

  if (!dashboard) {
    return <div className="p-6 text-red-600">Idea not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-12">
      <h1 className="text-3xl font-bold text-secondary mb-4">
        {dashboard.title} - IdeaIndex Dashboard
      </h1>

      <ValueMetrics
        valuation={dashboard.currentValuation}
        history={dashboard.historicalValuation}
        factors={dashboard.keyFactors}
      />

      <ComparativeAnalysis data={dashboard.comparative} />
      <RecommendationPanel recommendations={dashboard.recommendations} />
    </div>
  );
}