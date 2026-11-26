import React from "react";
import {
  CheckCircle2,
  Target,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

function AboutStory() {
  const points = [
    "Practical and project-based learning",
    "Modern industry-focused technologies",
    "Beginner-friendly learning environment",
    "Career-oriented skill development",
  ];

  return (
    <section
      id="our-story"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            Our Story
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Making Technology
            <span className="block text-indigo-600">
              Education Accessible
            </span>
            to Everyone.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            CodeNova was created with a simple idea: everyone deserves the
            opportunity to learn technology and build a successful career.
            We bring together structured courses, practical projects, and
            supportive learning experiences to make that possible.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Whether you are starting from zero or improving your existing
            skills, our goal is to make your learning journey meaningful,
            practical, and rewarding.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-indigo-600"
                />
                <span className="font-medium text-slate-700">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-indigo-100 to-purple-100 blur-xl"></div>

          <div className="relative rounded-[30px] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-xl sm:p-12">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <GraduationCap size={34} />
            </div>

            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              The CodeNova Approach
            </p>

            <h3 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900">
              Learn Today.
              <span className="block text-indigo-600">
                Lead Tomorrow.
              </span>
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              We focus on turning knowledge into real-world skills through
              hands-on learning, expert guidance, and continuous improvement.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <Lightbulb className="mb-3 text-indigo-600" size={27} />
                <h4 className="font-bold text-slate-900">
                  Think Creatively
                </h4>
                <p className="mt-2 text-sm text-slate-500">
                  Build ideas and solve problems.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <Target className="mb-3 text-purple-600" size={27} />
                <h4 className="font-bold text-slate-900">
                  Grow Confidently
                </h4>
                <p className="mt-2 text-sm text-slate-500">
                  Turn skills into opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;