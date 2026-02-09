"use client";

import { Typewriter } from "react-simple-typewriter";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

import Socials from "../Socials";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <header>
      <div className="container w-full  mx-auto mt-30 mb-12 h-full">
        <div className="flex flex-col xl:flex-row  ">
          {/* Text */}
          <div className="order-2 xl:order-none ">
            {/* Typewriter Title */}
            <span className="text-lg">
              <Typewriter
                words={["Web Developer", "UI/UX Designer"]}
                loop={0} // 0 = infinite
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </span>

            {/* Main Heading */}
            <h1 className="h1 lg:mb-6 mb-4">
              Building the web, one{" "}
              <span className="text-purple-900">smooth experience</span> at a
              time..
            </h1>

            {/* Subtext */}
            <p className="mb-9 text-base lg:text-lg">
              Hello <span className="animate-wave">👋</span>, I&apos;m Atere
              Damilola, and I turn ideas into digital experiences that people
              love. This is my portfolio website, here you can eplore my work
              and skills.
            </p>

            {/* Buttons + Socials */}
            <div className="flex gap-2 items-center">
              <p className="font-semibold rounded-full hover:opacity-80 underline text-xl">
                Start a project
              </p>
              <a
                class="bg-purple-900 text-white p-4 rounded-full hover:opacity-80 group"
                href="/contact"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  className="-rotate-45 group-hover:rotate-0 transition"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </a>
            </div>

            <section class="container mx-auto  xl:px-12">
              <div class="md:max-w-2xl ml-auto lg:max-w-3xl  xl:max-w-4xl">
                <h3 class="text-2xl leading-9 my-6">
                  Welcome, make yourself comfortable, I am a web developer, I
                  design and build beautiful digital products, for companies
                  around the world.
                </h3>

                <p class="my-4">
                  I believe that design should be both functional and
                  aesthetically pleasing, and I am dedicated to delivering
                  exceptional user experiences through thoughtul design and
                  meticulous attention to detail.
                </p>
                <div>
                  <p
                  class="flex gap-2 items-center font-semibold underline "
                >
                 Download Resume
                  <a href="/cv.pdf"
                  download="Atere_Damilola_CV.pdf"
                  target="_blank" class="bg-purple-900 text-white p-2 rounded-full hover:opacity-80 group">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      class="-rotate-45 group-hover:rotate-0 transition"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M5 12H19M19 12L13 6M19 12L13 18"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </a>
                </p>
                </div>
                
              </div>
            </section>

            <div>
              {/* CV Button */}
              {/* <Link href="/cv.pdf" download="Atere_Damilola_CV.pdf" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center p-4 gap-1 bg-gray-900 text-white"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link> */}

              {/* Socials */}
              {/* <Socials
                containerStyles="flex md:gap-4 gap-2"
                iconStyles="w-9 h-9 border border-[#3a3045] rounded-full flex justify-center items-center text-accent-DEFAULT text-base hover:bg-accent-DEFAULT hover:text-text transition-all duration-300"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
