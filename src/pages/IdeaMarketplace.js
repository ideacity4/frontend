import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaTh, FaList } from "react-icons/fa";
import IdeaCard from "../components/IdeaCard";

const categories = ["All", "Technology", "Education", "Design"];

export default function IdeaMarketplace() {
  const [ideas, setIdeas] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const baseUrl = process.env.REACT_APP_BASE_URI;

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/ideas`);
        // adding this cosole to check weather data is fetched from backend or not
        console.log(res);
        const data = await res.json();

        if (res.status === 200) {
          setIdeas(data);
        } else {
          setError(data.error || "Failed to fetch ideas");
        }
      } catch (err) {
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  const filteredIdeas =
    selectedCategory === "All"
      ? ideas
      : ideas.filter((idea) => idea.category === selectedCategory);

  const sortedIdeas = [...filteredIdeas].sort((a, b) => {
    if (sortOption === "priceLow") {
      return parseInt(a.price.replace("$", "")) - parseInt(b.price.replace("$", ""));
    }
    if (sortOption === "priceHigh") {
      return parseInt(b.price.replace("$", "")) - parseInt(a.price.replace("$", ""));
    }
    if (sortOption === "scoreHigh") {
      return b.score - a.score;
    }
    if (sortOption === "scoreLow") {
      return a.score - b.score;
    }
    return 0;
  });

  if (loading) {
    return <div className="p-6">Loading ideas...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col md:flex-row overflow-x-hidden">
      {/* Sidebar */}
      <aside className={`w-64 p-5 bg-[#F8FAFB] border-r border-b md:block fixed md:relative top-0 left-0 h-full z-40 overflow-y-auto ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="text-xl font-bold">Categories</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-2xl text-gray-500">
            <FaTimes />
          </button>
        </div>
        <h2 className="text-lg font-semibold mb-4 hidden md:block">Categories</h2>
        <div className="flex flex-col gap-2">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedCategory(cat);
                setSidebarOpen(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 pt-4 ">
        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
          <button
            className="md:hidden text-xl text-gray-600"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>

          <div className="flex items-center gap-3 ml-auto">
            <select
              className="p-2 border rounded-md text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="scoreHigh">Score: High to Low</option>
              <option value="scoreLow">Score: Low to High</option>
            </select>

            <button
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="p-2 border rounded-md text-sm"
            >
              {viewMode === "grid" ? <FaList /> : <FaTh />}
            </button>
          </div>
        </div>

        {/* Idea Cards */}
        <div
          className={`grid gap-5 ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : ""
          }`}
        >
          {sortedIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </main>
    </div>
  );
}
