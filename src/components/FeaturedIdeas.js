import React, { useEffect, useState } from "react";

export default function FeaturedIdeas() {
  const [ideas, setIdeas] = useState([]);
  const [error, setError] = useState("");
  const baseUrl = process.env.REACT_APP_BASE_URI;

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/ideas/`);
        const data = await res.json();

        if (res.ok) {
          const mapped = data.map((idea) => ({
            id: idea._id,
            title: idea.title,
            description: idea.description,
            price: `$${idea.price}`,
            score: 60 // static fallback
          }));
          setIdeas(mapped);
        } else {
          setError(data.error || "Failed to load ideas");
        }
      } catch (err) {
        setError("Network error, please try again");
      }
    };

    fetchIdeas();
  }, []);

  if (error) {
    return (
      <section className="bg-white text-secondary py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Ideas</h2>
        <p className="text-center text-red-600">{error}</p>
      </section>
    );
  }

  return (
    <section className="bg-white text-secondary py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Ideas</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="min-w-[280px] bg-[#F7F9F9] text-secondary rounded-2xl p-4 shadow-md hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 truncate">{idea.title}</h3>
            <p className="text-sm mb-4 truncate">{idea.description}</p>
            <div className="flex justify-between items-center text-sm font-medium">
              <span className="text-green-800">IdeaIndex: {idea.score}</span>
              <span className="text-[#B8860B]">{idea.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
