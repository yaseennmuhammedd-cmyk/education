import React from "react";
import {
  Users,
  BookOpen,
  Trophy,
  GraduationCap,
} from "lucide-react";

function Stats() {
  const stats = [
    {
      icon: <Users size={28} />,
      number: "15K+",
      label: "Active Students",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <BookOpen size={28} />,
      number: "50+",
      label: "Expert Courses",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Trophy size={28} />,
      number: "95%",
      label: "Success Rate",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <GraduationCap size={28} />,
      number: "25+",
      label: "Expert Mentors",
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 lg:grid-cols-4">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8"
          >
            <div
              className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${stat.color} transition duration-300 group-hover:scale-110`}
            >
              {stat.icon}
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              {stat.number}
            </h2>

            <p className="mt-2 text-sm font-medium text-slate-500 md:text-base">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;