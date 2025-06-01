const verificationIdeas = [
  {
    id: 1,
    title: "AI Resume Builder",
    description: "AI-powered tool for customized resume generation.",
    documents: ["resume-builder.pdf"],
    originalityScore: 74,
    similarIdeas: [
      { id: 201, title: "AI Cover Letter Assistant", similarity: 63 },
      { id: 202, title: "Automated CV Grader", similarity: 51 }
    ],
    recommendations: [
      "Consider focusing on niche industries",
      "Add unique value like job-specific optimization",
      "Avoid generic AI features"
    ],
    status: "pending" // can also be "verified" or "failed"
  },
  {
    id: 2,
    title: "website builder",
    description: "AI-powered tool for website building.",
    documents: ["resume-builder.pdf"],
    originalityScore: 74,
    similarIdeas: [
      { id: 201, title: "AI Cover Letter Assistant", similarity: 63 },
      { id: 202, title: "Automated CV Grader", similarity: 51 }
    ],
    recommendations: [
      "Consider focusing on niche industries",
      "Add unique value like job-specific optimization",
      "Avoid generic AI features"
    ],
    status: "verified" // can also be "verified" or "failed"
  },
  {
    id: 3,
    title: "chatbot",
    description: "AI-powered tool chatting",
    documents: ["resume-builder.pdf"],
    originalityScore: 74,
    similarIdeas: [
      { id: 201, title: "AI Cover Letter Assistant", similarity: 63 },
      { id: 202, title: "Automated CV Grader", similarity: 51 }
    ],
    recommendations: [
      "Consider focusing on niche industries",
      "Add unique value like job-specific optimization",
      "Avoid generic AI features"
    ],
    status: "failed" // can also be "verified" or "failed"
  }
];

export default verificationIdeas;
