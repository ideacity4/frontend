import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-white text-secondary py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Turn Your Ideas Into Value
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          IdeaMarkz is your gateway to share, verify, and trade innovative ideas. Empower your creativity with real market value.
        </p>
        <button
          onClick={() => navigate("/marketplace")}
          className="bg-primary text-white text-lg px-6 py-3 rounded-2xl font-semibold hover:bg-blue-600 transition"
        >
          Start Exploring Ideas
        </button>
      </div>
    </section>
  );
}
