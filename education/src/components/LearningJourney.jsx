import React from "react";
import {
  UserPlus,
  BookOpen,
  Laptop,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import learningImage from "../assets/istockphoto-1500286020-612x612.jpg";

function LearningJourney() {
  const steps = [
    {
      number: "01",
      icon: <UserPlus size={30} />,
      title: "Create Account",
      description:
        "Register on CodeNova and create your personal learning profile.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      number: "02",
      icon: <BookOpen size={30} />,
      title: "Choose Your Course",
      description:
        "Explore our courses and select the right learning path for you.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      number: "03",
      icon: <Laptop size={30} />,
      title: "Start Learning",
      description:
        "Attend classes, complete assignments, and practice your skills.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      number: "04",
      icon: <Trophy size={30} />,
      title: "Achieve Success",
      description:
        "Track your progress, earn certificates, and reach your goals.",
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-5 py-2 text-sm font-bold text-indigo-600">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Start Your Learning
            <span className="text-indigo-600"> Journey</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-500">
            Getting started with CodeNova is simple. Follow these four
            steps to begin your learning experience.
          </p>
        </div>

        {/* Learning Image */}
        <div className="group relative mx-auto mb-20 max-w-5xl">
          <div className="absolute -inset-4 rounded-[35px] bg-gradient-to-r from-indigo-200 to-purple-200 opacity-60 blur-2xl transition duration-500 group-hover:opacity-90"></div>

          <div className="relative overflow-hidden rounded-[30px] border-8 border-white shadow-2xl">
            <img
              src={learningImage}
              alt="Students enjoying an interactive learning experience"
              className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[420px]"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-7 left-5 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:left-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <Sparkles size={25} />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900">
                Learn Smarter
              </h3>
              <p className="text-xs text-slate-500">
                Grow Every Day
              </p>
            </div>
          </div>

          <div className="absolute -right-3 top-8 hidden rounded-2xl bg-white px-5 py-4 shadow-xl sm:block">
            <p className="text-sm font-bold text-indigo-600">
              Your Future Starts Here!
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="group relative">

              <div className="rounded-3xl border border-slate-100 bg-[#F8F9FF] p-8 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">

                <div className="mb-7 flex items-center justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110 ${step.color}`}
                  >
                    {step.icon}
                  </div>

                  <span className="text-4xl font-extrabold text-slate-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </div>

              {index !== steps.length - 1 && (
                <ArrowRight
                  size={24}
                  className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-indigo-400 lg:block"
                />
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LearningJourney;