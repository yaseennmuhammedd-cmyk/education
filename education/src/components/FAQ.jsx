import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is CodeNova?",
      answer:
        "CodeNova is an online learning platform that helps students develop technical skills through structured courses, practical projects, and expert guidance.",
    },
    {
      question: "Are the courses suitable for beginners?",
      answer:
        "Yes! Our courses are designed for both beginners and experienced learners. You can start with the fundamentals and gradually move to advanced topics.",
    },
    {
      question: "Can I learn at my own pace?",
      answer:
        "Absolutely. You can access your learning materials and study according to your own schedule, making it easier to balance learning with other responsibilities.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Students who successfully complete eligible courses can receive a course completion certificate.",
    },
    {
      question: "How can I contact the support team?",
      answer:
        "You can reach our team through the Contact page. We will be happy to help with your questions and learning needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 text-sm font-bold text-indigo-600">
            <HelpCircle size={16} />
            HAVE QUESTIONS?
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Frequently Asked
            <span className="text-indigo-600"> Questions</span>
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-slate-500">
            Find answers to common questions about our courses,
            learning platform, certificates, and student support.
          </p>

          <div className="mt-10 rounded-3xl bg-indigo-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Still have questions?
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              Our team is ready to help you with anything you need.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-700"
            >
              Contact Support
            </a>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border transition duration-300 ${
                activeIndex === index
                  ? "border-indigo-200 bg-indigo-50/50 shadow-md shadow-indigo-100"
                  : "border-slate-200 bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-bold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  size={21}
                  className={`shrink-0 text-indigo-600 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-7 text-slate-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;