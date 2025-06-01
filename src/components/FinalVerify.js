import React from "react";

const FinalVerify = ({ status, onNext }) => {
  const isVerified = status === "verified";
  const isPending = status === "pending";
  const isFailed = status === "failed";

  return (
    <>
    <div className="mt-10 text-center space-y-4">
      {isVerified && (
        <>
          <h2 className="text-2xl font-bold text-green-600">🎉 Your Idea is Verified!</h2>
          <p className="text-gray-700">Congratulations! Your idea has passed all verification checks and is now listed as verified.</p>
        </>
      )}

      {isPending && (
        <>
          <h2 className="text-2xl font-bold text-yellow-500">⏳ Under Review</h2>
          <p className="text-gray-700">Thank you for submitting your idea. Please allow 2-3 business days for manual verification.</p>
        </>
      )}

      {isFailed && (
        <>
          <h2 className="text-2xl font-bold text-red-600">❌ Verification Failed</h2>
          <p className="text-gray-700">Unfortunately, your idea didn't meet the originality or quality criteria. You can revise and re-submit.</p>
        </>
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
          Go to form →
        </button>
      </div>
    </form>
    </>
  );
};

export default FinalVerify;
