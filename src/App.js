import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import IdeaDetails from "./pages/IdeaDetails";
import IdeaMarketplace from "./pages/IdeaMarketplace"
import IdeaVerify from "./pages/IdeaVerify";
import IdeaIndexDashboard from "./pages/IdeaIndexDashboard";
import UserProfile from "./pages/UserProfile";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
        <Route
          path="/signin"
          element={<SignInPage setIsSignedIn={setIsSignedIn} />}
        />
        <Route
          path="/signup"
          element={<SignUpPage setIsSignedIn={setIsSignedIn} />}
        />
        <Route path="/marketplace" element={<IdeaMarketplace />} />
        <Route path="/idea/:id" element={<IdeaDetails />} />
        <Route path="/verify" element={<IdeaVerify />} />
        <Route path="/dashboard/:id" element={<IdeaIndexDashboard />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}
