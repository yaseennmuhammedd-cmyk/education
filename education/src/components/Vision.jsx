import React from "react";
import {
  Target,
  Eye,
  Rocket,
  Heart,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

function Vision() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
            <Lightbulb size={16} />
            What Drives Us
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Our Mission & Vision
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Everything we do is guided by our commitment to making technology
            education meaningful, accessible, and impactful.
          </p>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Mission Card */}
          <div className="group rounded-[28px] border border-indigo-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10">

            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
              <Target size={32} />
            </div>

            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Our Purpose
            </span>

            <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Our Mission
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              To provide high-quality technology education through practical
              learning, expert guidance, and accessible courses. We aim to
              help every learner develop the skills and confidence needed to
              succeed in the digital world.
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6 font-semibold text-indigo-600">
              <Rocket size={21} />
              Learn. Build. Achieve.
            </div>
          </div>

          {/* Vision Card */}
          <div className="group rounded-[28px] border border-purple-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10">

            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 transition duration-300 group-hover:bg-purple-600 group-hover:text-white">
              <Eye size={32} />
            </div>

            <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
              Our Future
            </span>

            <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              To become a trusted learning platform that empowers people
              worldwide to explore technology, discover their potential,
              embrace innovation, and create meaningful opportunities for
              themselves and their communities.
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6 font-semibold text-purple-600">
              <Heart size={21} />
              Inspire. Innovate. Grow.
            </div>
          </div>

        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 rounded-[28px] bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center text-white shadow-xl shadow-indigo-200 sm:p-12">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
            <GraduationCap size={30} />
          </div>

          <h3 className="text-2xl font-bold sm:text-3xl">
            Learning Today, Leading Tomorrow
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-indigo-100">
            At CodeNova, we believe every learner has the potential to achieve
            something extraordinary. We are here to help turn that potential
            into reality.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Vision;