
import React from "react";
import { FaLightbulb, FaCheckCircle, FaExchangeAlt } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      title: "Create",
      icon: <FaLightbulb className="text-primary text-4xl mb-4" />,
      description: "Share your innovative ideas with the world.",
    },
    {
      title: "Verify",
      icon: <FaCheckCircle className="text-success text-4xl mb-4" />,
      description: "Get your idea validated for originality and value.",
    },
    {
      title: "Trade",
      icon: <FaExchangeAlt className="text-accent text-4xl mb-4" />,
      description: "Sell or license your ideas on the marketplace.",
    },
  ];

  return (
    <section className="bg-[#F7F9F9] text-secondary py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {steps.map((step, idx) => (
          <div
          key={idx}
          className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <div className="transition-all duration-300 ease-in-out hover:rotate-6 hover:scale-110">
            {step.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-sm text-gray-700 max-w-xs">{step.description}</p>
        </div>
        ))}
      </div>
    </section>
  );
}
