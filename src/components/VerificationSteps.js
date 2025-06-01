import React from "react";

const steps = ["Submission", "Analysis", "Results"];

const VerificationSteps = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-between mb-10">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={label} className="flex-1 flex items-center gap-2">
            {/* Circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                isActive
                  ? "bg-primary text-white border-primary"
                  : isCompleted
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-gray-400 border-gray-300"
              }`}
            >
              {stepNumber}
            </div>

            {/* Label */}
            <div className="text-sm font-medium text-gray-700">
              {label}
            </div>

            {/* Connector */}
            {stepNumber !== steps.length && (
              <div className="flex-1 h-px bg-gray-300 mx-2"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VerificationSteps;
