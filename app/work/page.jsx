"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    catergory: "React-Admin Dashboard",
    title: "project 1",
    description:
      "Built and Deployed a responsive Admin Panel App using React, TailwindCSS, and Syncfusion with Theming, Tables, Charts, Calendar, Kaban components. It has one Dashboard, Three Pages, Four Apps, and Seven fully functional charts!",
    stack: [{ name: "React.js" }, { name: "Tailwind.css" }, { name: "Syncfusion" }],
    image: "/assets/work/thumb5.png",
    live: "https://react-admin89.netlify.app",
    github: "https://github.com/AtereD/react-admin",
  },
  {
    num: "02",
    catergory: "Deebrew Coffee Website",
    title: "project 2",
    description:
      "Developed a responsive modern website for DeeBrew, a coffee brand with Next.js and Tailwindcss",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Gsap" }, { name: "Framer Motion" }],
    image: "/assets/work/thumb1.png",
    live: "https://deebrew-landing.vercel.app/",
    github: "https://github.com/AtereD/Deebrew-Landing",
  },
  {
    num: "03",
    catergory: "LinguaEd",
    title: "project 2",
    description:
      "LinguaEd was Built Using Next JS, and Tailwing CSS",
    stack: [{ name: "Shadcn" }, { name: "Talwind.css" }, { name: "Next.js" }, { name: "Wordpress" }],
    image: "/assets/work/thumb2.png",
    live: "https://lingua-ed.vercel.app/",
    github: "https://github.com/AtereD/lingua-ed",
  },
  {
    num: "04",
    catergory: "Typescript(EVOGYM Website)",
    title: "project 3",
    description:
      "Evogym is a responsive landing page built with typescript, react.js. tailwind css and framer motion",
    stack: [{ name: "React.js" }, { name: "Tailwind.css" }, {name: "framer-motion"}],
    image: "/assets/work/thumb4.png",
    live: "https://evo-typescript.netlify.app/",
    github: "https://github.com/AtereD/Evo-typescript",
  },
  {
    num: "05",
    catergory: "Weather App",
    title: "project 4",
    description:
      "A Weather App Built Using React JS, Tailwind CSS and OpenWeatherMap API",
    stack: [{ name: "React.js" }, { name: "Tailwind.css" },],
    image: "/assets/work/thumb3.png",
    live: "https://dweatherapp.netlify.app/",
    github: "https://github.com/AtereD/DWeatherApp",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    //  update projet state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0 w-full h-full"
    >
      <div className="conatiner mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:gap-[30px] ">
          {/* text */}
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              <div className="md:text-8xl leading-none font-extrabold text-transparent text-outline text-4xl">
                {project.num}
              </div>
            
            <h2 className="md:text-[42px] font-bold leading-none text-white hover:text-accent-DEFAULT transition-all duration-500 capitalize text-[30px]">
              {project.catergory}
            </h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex md:flex-row md:gap-4 gap-1 flex-col lg:gap-1 xl:gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent-DEFAULT lg:text-lg xl:text-xl ">
                    {item.name}
                    {/* remove last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            <div className="border border-white/20"></div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              {/* live project btn */}
              <Link href={project.live} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-DEFAULT" />
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github btn */}
              <Link href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent-DEFAULT" />
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
            </div>
          </div>

          {/* slider */}
          <div className="w-full lg:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                    <div className="md:h-[400px] relative group flex justify-center items-center  w-full h-[350px]">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/30 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                
              })}
              {/* swiper btns */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between" btnStyles="bg-accent-DEFAULT hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
