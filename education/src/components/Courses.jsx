import {
  Code,
  Database,
  Palette,
  Smartphone,
  Star,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    title: "Full Stack Web Development",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85",
    instructor: "John Smith",
    students: "1,250",
    duration: "12 Weeks",
    rating: "4.9",
    price: "$129",
    icon: <Code size={20} />,
    color: "bg-indigo-100 text-indigo-600",
    tag: "Popular",
  },
  {
    title: "Python Programming",
    category: "Programming",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=85",
    instructor: "Sarah Johnson",
    students: "980",
    duration: "8 Weeks",
    rating: "4.8",
    price: "$89",
    icon: <Database size={20} />,
    color: "bg-blue-100 text-blue-600",
    tag: "Trending",
  },
  {
    title: "UI/UX Design Masterclass",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=85",
    instructor: "David Wilson",
    students: "1,100",
    duration: "6 Weeks",
    rating: "4.9",
    price: "$109",
    icon: <Palette size={20} />,
    color: "bg-pink-100 text-pink-600",
    tag: "Best Seller",
  },
  {
    title: "Mobile App Development",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=85",
    instructor: "Emma Brown",
    students: "950",
    duration: "10 Weeks",
    rating: "4.7",
    price: "$99",
    icon: <Smartphone size={20} />,
    color: "bg-green-100 text-green-600",
    tag: "New",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-600">
            Our Courses
          </span>

          <h2 className="mb-5 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Explore Our Popular{" "}
            <span className="text-indigo-600">Courses</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
            Discover expertly designed courses that help you build practical
            skills and achieve your career goals.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-indigo-600 shadow-md">
                  {course.tag}
                </span>

                <div
                  className={`absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl shadow-md ${course.color}`}
                >
                  {course.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  {course.category}
                </span>

                <h3 className="mb-4 mt-2 min-h-[56px] text-lg font-bold leading-7 text-slate-900 transition group-hover:text-indigo-600">
                  {course.title}
                </h3>

                {/* Instructor */}
                <p className="mb-4 text-sm text-slate-500">
                  Instructor:{" "}
                  <span className="font-semibold text-slate-700">
                    {course.instructor}
                  </span>
                </p>

                {/* Course Details */}
                <div className="mb-5 flex items-center justify-between border-y border-slate-100 py-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Users size={15} />
                    {course.students}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock size={15} />
                    {course.duration}
                  </span>

                  <span className="flex items-center gap-1 font-semibold text-yellow-500">
                    <Star size={15} fill="currentColor" />
                    {course.rating}
                  </span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400">Course Price</span>
                    <p className="text-2xl font-extrabold text-slate-900">
                      {course.price}
                    </p>
                  </div>

                  <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <button className="inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-700">
            View All Courses
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}