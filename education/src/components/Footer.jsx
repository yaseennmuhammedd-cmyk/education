import {
  Code2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-sky-500/10 bg-[#091B30] px-6 pt-16 pb-8 text-white">

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* COMPANY */}

        <div>

          <Link to="/" className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-sky-500 p-2 text-white">
              <Code2 size={25} />
            </div>

            <span className="text-2xl font-bold">
              Code<span className="text-sky-400">Nova</span>
            </span>
          </Link>

          <p className="max-w-xs text-sm leading-7 text-slate-400">
            Empowering the next generation of developers through
            quality technology education and practical learning.
          </p>

        </div>

        {/* QUICK LINKS */}

        <div>

          <h3 className="mb-6 text-lg font-bold">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm text-slate-400">

            <li>
              <Link to="/" className="transition hover:text-sky-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition hover:text-sky-400">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-sky-400">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/#courses" className="transition hover:text-sky-400">
                Our Courses
              </Link>
            </li>

          </ul>

        </div>

        {/* COURSES */}

        <div>

          <h3 className="mb-6 text-lg font-bold">
            Our Courses
          </h3>

          <ul className="space-y-4 text-sm text-slate-400">

            <li>Full Stack Development</li>
            <li>Web Development</li>
            <li>Python Programming</li>
            <li>UI/UX Design</li>

          </ul>

        </div>

        {/* CONTACT */}

        <div>

          <h3 className="mb-6 text-lg font-bold">
            Contact Us
          </h3>

          <ul className="space-y-5 text-sm text-slate-400">

            <li className="flex items-start gap-3">
              <Mail size={19} className="shrink-0 text-sky-400" />
              <span>info@codenova.com</span>
            </li>

            <li className="flex items-start gap-3">
              <Phone size={19} className="shrink-0 text-sky-400" />
              <span>+91 98765 43210</span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin size={19} className="shrink-0 text-sky-400" />
              <span>India</span>
            </li>

          </ul>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-400 transition hover:text-sky-300"
          >
            Get in Touch <ArrowRight size={17} />
          </Link>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-4 border-t border-sky-500/10 pt-7 text-center text-sm text-slate-500 md:flex-row md:text-left">

        <p>
          © {new Date().getFullYear()} CodeNova. All rights reserved.
        </p>

        <p>
          Designed with passion for the future of technology.
        </p>

      </div>

    </footer>
  );
}

export default Footer;