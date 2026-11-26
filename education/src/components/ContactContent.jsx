import React, { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function ContactContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      value: "hello@codenova.com",
      description: "Send us an email anytime",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      value: "+91 98765 43210",
      description: "Mon - Sat, 9 AM - 6 PM",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      value: "Kozhikode, Kerala, India",
      description: "Come and meet our team",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  const inputStyle =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100";

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5">

        {/* CONTACT INFORMATION */}
        <div className="space-y-8 lg:col-span-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Contact Information
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900">
              We'd Love to Hear From You
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Whether you need help choosing a course or have questions
              about our platform, our team is ready to assist you.
            </p>
          </div>

          <div className="space-y-5">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="group flex items-center gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-medium text-slate-700">
                    {item.value}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="ml-auto shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-600"
                />
              </div>
            ))}
          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="rounded-[30px] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/50 md:p-10 lg:col-span-3">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Send a Message
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              Get in Touch With Us
            </h2>

            <p className="mt-3 text-slate-500">
              Fill out the form below and we'll get back to you.
            </p>
          </div>

          {submitted && (
            <div className="mt-7 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700">
              <CheckCircle2 size={22} className="shrink-0" />

              <div>
                <h3 className="font-bold">
                  Message Submitted!
                </h3>

                <p className="mt-1 text-sm">
                  Thank you for contacting CodeNova. We'll get back to you soon.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className={inputStyle}
                />
              </div>

            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Your Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message here..."
                required
                className={`${inputStyle} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 px-6 py-4 font-bold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl"
            >
              Send Message
              <Send size={19} />
            </button>

            <p className="text-center text-sm text-slate-400">
              We value your privacy and will never share your information.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}

export default ContactContent;