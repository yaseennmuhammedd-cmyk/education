import React from "react";
import {
  CheckCircle,
  ArrowRight,
  Users,
  Star,
  BookOpen,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

function PlatformPreview() {
  const benefits = [
    "Access all your courses in one place",
    "Track your learning progress easily",
    "Learn from expert instructors",
    "Study anytime and anywhere",
  ];

  return (
    <section className="overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full bg-indigo-100 px-5 py-2 text-sm font-bold text-indigo-600">
            LEARNING EXPERIENCE
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Everything You Need
            <span className="text-indigo-600"> in One Platform</span>
          </h2>

          <p className="mt-6 leading-8 text-slate-500">
            Make learning simple and enjoyable with our smart learning
            platform. Access courses, manage assignments, monitor
            progress, and achieve your goals.
          </p>

          {/* Benefits */}
          <div className="mt-9 space-y-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle
                  size={22}
                  className="shrink-0 text-green-500"
                />

                <p className="font-semibold text-slate-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-7 py-4 font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-700"
          >
            Explore Platform
            <ArrowRight size={19} />
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="relative mx-auto w-full max-w-xl">

          {/* Background Glow */}
          <div className="absolute -inset-6 rounded-[40px] bg-indigo-200/50 blur-3xl"></div>

          {/* Main Image */}
          <div className="group relative overflow-hidden rounded-[35px] border-8 border-white shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85"
              alt="Students learning together"
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110 md:h-[520px]"
            />

            {/* Image Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

            {/* Bottom Image Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">
              <span className="mb-3 inline-block rounded-full bg-indigo-500 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                Learn Together
              </span>

              <h3 className="text-2xl font-extrabold md:text-3xl">
                Build Your Future With Knowledge
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                Discover new skills, connect with learners, and achieve
                your dreams with quality education.
              </p>
            </div>

            {/* Play Button */}
            <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-indigo-600 shadow-xl transition hover:scale-110">
              <Play size={26} fill="currentColor" />
            </div>
          </div>

          {/* Floating Students Card */}
          <div className="absolute -left-5 top-12 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl md:-left-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <Users size={25} />
            </div>

            <div>
              <h4 className="text-xl font-extrabold text-slate-900">
                10K+
              </h4>
              <p className="text-xs font-medium text-slate-500">
                Active Students
              </p>
            </div>
          </div>

          {/* Floating Rating Card */}
          <div className="absolute -right-3 bottom-24 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl md:-right-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-500">
              <Star size={25} fill="currentColor" />
            </div>

            <div>
              <h4 className="text-xl font-extrabold text-slate-900">
                4.9/5
              </h4>
              <p className="text-xs font-medium text-slate-500">
                Student Rating
              </p>
            </div>
          </div>

          {/* Bottom Floating Badge */}
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl bg-indigo-600 px-6 py-4 text-white shadow-xl">
            <BookOpen size={23} />
            <span className="text-sm font-bold">
              Learn Without Limits
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PlatformPreview;