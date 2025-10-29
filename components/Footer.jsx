import React from "react";
import Socials from "./Socials";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-text text-white py-12 px-4 lg:px-0">
      <section className="container mx-auto">
        {/* Title */}
        <h2 className="text-4xl mb-8 font-medium">I can help you with</h2>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Design */}
          <div>
            <p className="text-gray-500 border-b border-gray-500 w-fit">01</p>
            <h3 className="text-2xl my-6 font-semibold">Design</h3>
            <p className="text-gray-300 leading-relaxed">
              Crafting clean, user-focused designs that connect ideas and
              experiences. From prototypes to production-ready UIs.
            </p>
            <ul className="my-6 text-lg space-y-3 text-gray-200">
              <li>
                <a href="#">Websites</a>
              </li>
              <li>
                <a href="#">Web Apps</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
            </ul>
          </div>

          {/* Development */}
          <div>
            <p className="text-gray-500 border-b border-gray-500 w-fit">02</p>
            <h3 className="text-2xl my-6 font-semibold">Development</h3>
            <p className="text-gray-300 leading-relaxed">
              Turning designs into functional, responsive, and efficient code.
              I build modern frontend systems with attention to performance and
              accessibility.
            </p>
            <ul className="my-6 text-lg space-y-3 text-gray-200">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Frontend Development</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}

        <div className="flex flex-wrap items-center gap-3 my-8">
          <img
            src="/assets/img.png"
            alt="Atere Damilola"
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <div className="flex gap-2 items-center">
            <p className="font-semibold rounded-full text-sm border py-3 px-5 bg-primary text-text">
              Reach Out!
            </p>
            <a
              className="bg-purple-900 text-white p-4 rounded-full hover:opacity-80 group"
              href="/contact"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                className="-rotate-45 group-hover:rotate-0 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Social Media */}
        
        <p className="text-gray-500 border-b border-gray-500 uppercase mb-4">
          Social Media
        </p>

        <div className="flex justify-between items-center flex-wrap gap-4">
          <Socials
            containerStyles="flex gap-2 items-center"
            iconStyles="bg-purple-900 p-2 rounded-full text-primary hover:scale-90 transition duration-300"
          />

          <a
            href="#top"
            className="rounded-full bg-purple-900 p-3 hover:bg-purple-800 transition-colors animate-bounce"
          >
            <FaArrowUp />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
