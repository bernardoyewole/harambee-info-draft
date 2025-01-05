import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CommunityBenefits from "./components/CommunityBenefits";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Stats from './components/Stats';

function App() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Features />
      <HowItWorks />
      <CommunityBenefits />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
