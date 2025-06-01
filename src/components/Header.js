import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Header({ isSignedIn, setIsSignedIn }) {
  const [hamOpen, setHamOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isSignedIn) {
      localStorage.removeItem("token");
      setIsSignedIn(false); // Sign out
    } else {
      navigate("/signin"); // Go to sign-in page
    }
  };


  const handleProfileClick = () => {
    navigate("/profile"); 
  };

  return (
    <header className="bg-secondary text-textLight p-4 flex justify-between items-center shadow-md">
      {/* Left: Logo */}
      <div className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        IdeaMarkz
      </div>

      {/* Center: Search Bar (Hidden on Small Screens) */}
      <div className="hidden md:flex flex-1 mx-4">
        <input
          type="text"
          placeholder="Search ideas..."
          className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none"
        />
      </div>

      {/* Right: Sign In/Out, Profile, Mobile Menu */}
      <div className="flex items-center space-x-4">
        {/* Mobile Search Icon */}
        <button onClick={() => setSearchOpen(!searchOpen)} className="md:hidden">
          {searchOpen ? <FaTimes className="text-2xl" /> : <FaSearch className="text-xl cursor-pointer" />}
        </button>

        {/* Sign In / Sign Out Button */}
        <button
          onClick={handleAuthClick}
          className="hidden md:flex bg-accent text-black px-4 py-2 rounded-lg font-semibold"
        >
          {isSignedIn ? "Sign Out" : "Sign In"}
        </button>

        {/* Profile Icon */}
        <FaUserCircle className="text-3xl cursor-pointer" onClick={handleProfileClick} />

        {/* Mobile Hamburger Menu */}
        <button onClick={() => setHamOpen(!hamOpen)} className="md:hidden">
          {hamOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Search Panel */}
      {searchOpen && (
        <div className="absolute top-16 left-0 w-full bg-secondary text-textLight p-4 flex flex-col items-center space-y-4 md:hidden">
          <input
            type="text"
            placeholder="Search ideas..."
            className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {hamOpen && (
        <div className="absolute top-16 left-0 w-full bg-secondary text-textLight p-4 flex flex-col items-center space-y-4 md:hidden">
          <button
            onClick={handleAuthClick}
            className="bg-accent text-black px-4 py-2 rounded-lg font-semibold"
          >
            {isSignedIn ? "Sign Out" : "Sign In"}
          </button>
        </div>
      )}
    </header>
  );
}
