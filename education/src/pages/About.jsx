import React from "react";

import AboutHero from "../components/AboutHero";
import Stats from "../components/Stats";
import AboutStory from "../components/AboutStory";
import Vision from "../components/Vision";


function About() {
  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <AboutHero />
      <Stats />
      <AboutStory />
      <Vision />
    </div>
  );
}

export default About;