import React from "react";
import {
  Video,
  FileText,
  ClipboardCheck,
  BarChart3,
  MessageCircle,
  Award,
  ArrowUpRight,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Video size={28} />,
      title: "Live Online Classes",
      description:
        "Attend interactive live classes with experienced instructors and learn from anywhere.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FileText size={28} />,
      title: "Study Materials",
      description:
        "Access organized notes, learning resources, and downloadable study materials.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <ClipboardCheck size={28} />,
      title: "Online Assessments",
      description:
        "Test your knowledge through quizzes, assignments, and interactive assessments.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Progress Tracking",
      description:
        "Monitor your learning progress and understand your performance easily.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Expert Support",
      description:
        "Get guidance from mentors and clear your doubts whenever you need help.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <Award size={28} />,
      title: "Certificates",
      description:
        "Earn certificates after completing courses and showcase your achievements.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <section className="bg-[#F7F8FF] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-5 py-2 text-sm font-bold text-indigo-600">
            WHY CHOOSE CODENOVA
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Everything You Need to
            <span className="text-indigo-600"> Learn Better</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-500">
            Experience a complete online learning platform with powerful
            tools and resources designed to support your success.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-7 flex items-center justify-between">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color} transition duration-300 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>

                <ArrowUpRight
                  size={22}
                  className="text-slate-300 transition group-hover:text-indigo-600"
                />
              </div>

              <h3 className="mb-4 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="text-sm leading-7 text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;