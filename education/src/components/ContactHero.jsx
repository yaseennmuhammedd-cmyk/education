import React from "react";
import {
  MessageCircle,
  Sparkles,
  ArrowDown,
} from "lucide-react";

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 pb-24 pt-36 md:pb-32">

      {/* Background Effects */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"></div>

      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl"></div>

      {/* Hero Content */}
      <div className="relative mx-auto max-w-4xl text-center">

        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-5 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
          <Sparkles size={17} />
          <span>Get In Touch</span>
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
          Let's Start a
          <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Conversation.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
          Have questions about our courses or learning programs?
          Our friendly team is ready to help you take the next step
          toward achieving your learning goals.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="#contact-content"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl"
          >
            <MessageCircle size={19} />
            Contact Our Team
          </a>

          <a
            href="#contact-content"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:text-indigo-600"
          >
            Explore Contact Details
            <ArrowDown size={18} />
          </a>

        </div>

        {/* Highlights */}
        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
          <span>✓ Quick Response</span>
          <span>✓ Friendly Support</span>
          <span>✓ Expert Guidance</span>
        </div>

      </div>
    </section>
  );
}

export default ContactHero;