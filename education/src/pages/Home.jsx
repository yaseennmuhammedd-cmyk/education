import React from "react";


import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import LearningJourney from "../components/LearningJourney";
import Courses from "../components/Courses";
import PlatformPreview from "../components/PlatformPreview";
import FAQ from "../components/FAQ";


function Home() {
  return (
    <div className="overflow-hidden bg-white text-slate-900">

      <Hero />

      <Stats />

      <Features />

      <LearningJourney />

      <Courses />

      <PlatformPreview />

      <FAQ />


    </div>
  );
}

export default Home;