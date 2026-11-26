import React from "react";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-24 md:py-32">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-5 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
          <Sparkles size={17} />
          About CodeNova
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
          Empowering Minds.
          <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Building Futures.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
          At CodeNova, we believe education has the power to transform lives.
          We help learners build practical technology skills, unlock their
          potential, and prepare for a brighter future.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-700"
          >
            Get in Touch
            <ArrowRight size={19} />
          </Link>

          <a
            href="#our-story"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-indigo-300 hover:text-indigo-600"
          >
            <BookOpen size={19} />
            Discover Our Story
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
          <span>✓ Practical Learning</span>
          <span>✓ Expert Mentors</span>
          <span>✓ Career Growth</span>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;