"use client";

import { Typewriter } from "react-simple-typewriter";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section>
      <div className="container w-full h-full mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 lg:pb-24">
          {/* Text */}
          <div className="order-2 xl:order-none text-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
            {/* Typewriter Title */}
            <span className="text-lg">
              <Typewriter
                words={["Frontend Web Developer", "UI/UX Designer"]}
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
              <span className="text-accent-DEFAULT">smooth experience</span> at
              a time..
            </h1>

            {/* Subtext */}
            <p className="mb-9 text-white/80 capitalize text-base lg:text-lg">
              Hello <span className="animate-wave">👋</span>, I'm Atere
              Damilola, a Web Designer/Developer based in Nigeria.
            </p>

            {/* Buttons + Socials */}
            <div className="flex items-center justify-center gap-4 xl:gap-8">
              {/* CV Button */}
              <Link href="/cv.pdf" download="Atere_Damilola_CV.pdf" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-1"
                >
                  <span>CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>

              {/* Socials */}
              <Socials
                containerStyles="flex md:gap-4 gap-2"
                iconStyles="w-9 h-9 border border-[#3a3045] rounded-full flex justify-center items-center text-accent-DEFAULT text-base hover:bg-accent-DEFAULT hover:text-text transition-all duration-300"
              />
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:hidden mb-8 flex">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
