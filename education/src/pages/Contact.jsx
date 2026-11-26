import React from "react";

import ContactHero from "../components/ContactHero";
import ContactContent from "../components/ContactContent";

function Contact() {
  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <ContactHero />
      <ContactContent />
    </div>
  );
}

export default Contact;