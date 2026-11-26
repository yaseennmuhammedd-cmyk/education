import React from "react";
import {
  ArrowRight,
  Play,
  Star,
  BookOpen,
  Users,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

// Import image from src/assets
import studentImage from "../assets/istockphoto-1093925980-612x612.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FF] px-6 py-16 md:py-24">
      {/* Background Decorations */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-100 opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-100 opacity-60 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-bold text-indigo-600">
              Your Future Starts Here
            </span>
          </div>

          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            Learn Skills.
            <br />
            Build Your
            <br />
            <span className="text-indigo-600">Bright Future.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-500 md:text-lg">
            Discover a smarter way to learn with expert instructors,
            interactive courses, and practical skills that prepare you
            for tomorrow's opportunities.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-7 py-4 font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-700"
            >
              Start Learning
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-800 transition hover:border-indigo-600 hover:text-indigo-600"
            >
              <Play size={18} />
              Discover More
            </Link>
          </div>

          {/* Student Ratings */}
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={17} fill="currentColor" />
                ))}
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-600">
                4.9/5 Student Rating
              </p>
            </div>

            <div className="h-12 w-px bg-slate-200"></div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                15K+
              </h3>
              <p className="text-sm text-slate-500">
                Happy Students
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[40px] bg-indigo-200/40 blur-2xl"></div>

          <div className="relative overflow-hidden rounded-[35px] border-8 border-white shadow-2xl">
            <img
              src={studentImage}
              alt="Students learning together"
              className="h-[450px] w-full object-cover md:h-[550px]"
            />
          </div>

          {/* Floating Course Card */}
          <div className="absolute -left-8 top-16 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <BookOpen size={25} />
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900">
                  50+ Courses
                </h3>
                <p className="text-xs text-slate-500">
                  Explore new skills
                </p>
              </div>
            </div>
          </div>

          {/* Floating Students Card */}
          <div className="absolute -bottom-7 -right-5 rounded-2xl bg-white p-5 shadow-xl sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <Users size={25} />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  15K+
                </h3>
                <p className="text-xs text-slate-500">
                  Active Learners
                </p>
              </div>
            </div>
          </div>

          {/* Floating Success Badge */}
          <div className="absolute -right-4 top-1/2 hidden rounded-xl bg-white px-4 py-3 shadow-xl md:flex md:items-center md:gap-2">
            <CheckCircle className="text-green-500" size={21} />
            <span className="text-sm font-bold text-slate-800">
              Learn & Grow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;