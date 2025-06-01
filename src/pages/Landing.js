import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedIdeas from "../components/FeaturedIdeas";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

export default function Landing({ isSignedIn, setIsSignedIn }) {
  return (
    <>
      <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <Hero />
      <FeaturedIdeas />
      <HowItWorks />
      <Footer />
    </>
  );
}
