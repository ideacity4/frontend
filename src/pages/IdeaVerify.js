import React, { useState } from "react";
import VerificationSteps from "../components/VerificationSteps";
import VerificationForm from "../components/VerificationForm";
import VerificationResults from "../components/VerificationResults";
import FinalVerify from "../components/FinalVerify";
import verificationIdeas from "../data/verificationIdeas";

export default function IdeaVerify() {
  const [step, setStep] = useState(1);
  const idea = verificationIdeas[1]; // mock single idea for now

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-secondary">Idea Verification Portal</h1>

      <VerificationSteps currentStep={step} />

      {step === 1 && <VerificationForm idea={idea} onNext={() => setStep(2)} />}
      {step === 2 && <VerificationResults idea={idea} onNext={() => setStep(3)}/> }
      {step === 3 && <FinalVerify status={idea.status} onNext={() => setStep(1)}/>}
    </div>
  );
}
