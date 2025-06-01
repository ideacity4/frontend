const indexDashboardData = [
  {
    id: 2,
    title: "AI Resume Builder",
    currentValuation: "$8,500",
    historicalValuation: [1500, 3200, 4700, 6200, 7300, 8100, 8500],
    keyFactors: [
      { label: "Innovation Score", value: 92 },
      { label: "Market Fit", value: 85 },
      { label: "Demand Surge", value: 78 },
      { label: "Revenue Potential", value: 88 }
    ],
    comparative: {
      percentile: 87,
      similarIdeas: [
        { title: "AI Cover Letter Generator", demand: "Moderate", growth: "4.5%" },
        { title: "Smart Resume Formatter", demand: "High", growth: "6.2%" }
      ]
    },
    recommendations: {
      suggestions: [
        "Incorporate real-time ATS optimization",
        "Add integration with LinkedIn APIs",
        "Launch early-access beta campaign"
      ],
      marketTiming: "Q3 2025 is ideal for launch based on rising HR tech funding."
    }
  },
  {
    id: 4,
    title: "Crowdsourced Parking Finder",
    currentValuation: "$5,200",
    historicalValuation: [800, 1200, 2600, 3700, 4400, 5000, 5200],
    keyFactors: [
      { label: "Innovation Score", value: 70 },
      { label: "Market Fit", value: 88 },
      { label: "Demand Surge", value: 90 },
      { label: "Revenue Potential", value: 75 }
    ],
    comparative: {
      percentile: 72,
      similarIdeas: [
        { title: "Smart Parking IoT", demand: "High", growth: "5.8%" },
        { title: "Citywide Spot Tracker", demand: "Low", growth: "2.9%" }
      ]
    },
    recommendations: {
      suggestions: [
        "Improve UI for real-time updates",
        "Add EV charging spot filters",
        "Partner with local municipalities"
      ],
      marketTiming: "Urban mobility funding trends peak Q2-Q3 2025."
    }
  }
];

export default indexDashboardData;
