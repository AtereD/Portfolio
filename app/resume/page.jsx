"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

const about = {
  title: "About me",
  description:
    "I'm a web frontend developer passionate about crafting responsive, and user-centric web interfaces. With experience in HTML, CSS, JavaScript, React, and Next.js, I build apps that not only look good but also perform well. I thrive in collaborative settings and love turning ideas into seamless, functional user experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Atere Damilola",
    },
    {
      fieldName: "Email",
      fieldValue: "ateredamilola7d@gmail.com",
    },
    {
      fieldName: "Name",
      fieldValue: "(+234) 912 168 1463",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    // {
    //   fieldName: "Language",
    //   fieldValue: "English & Yoruba",
    // },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  //description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsa labore ex eaque minus reiciendis eum cum!',
  items: [
    {
      company: "Freelancer",
      position: "Frontend Developer",
      duration: "2023 - present",
    },
    {
      company: "IINVIO",
      position: "Junior Frontend Developer",
      duration: "November 2023 - February 2024",
    },
    {
      company: "Code4teen Labs",
      position: "Software Engineer Intern",
      duration: "2022 - 2023",
    },
    {
      company: "Code4teen Labs",
      position: "Technical Curriculum Specialist",
      duration: "2022 - 2023",
    },
    {
      company: "Wootlab Innovations",
      position: "Software Developer Intern",
      duration: "April 2022 - June 2022",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My educational path combines formal academic studies with self-driven learning through online platforms. From earning a Computer Science degree to mastering frontend technologies via Coursera, and project-based courses, I’ve built a strong foundation in both theory and hands-on development.",
  items: [
    {
      Institution: "Online Course Platform",
      position: "Frontend Developer Professional Certificate",
      duration: "In view",
    },
    {
      Institution: "Online Course Platform (Coursera))",
      position: " Intro to Software Engineering",
      duration: "2024",
    },
    {
      Institution: "Online Course Platform (Coursera)",
      position: "Getting Started with Frontend and Web Development",
      duration: "2024",
    },
    {
      Institution: "University of Abuja",
      position: " Bachelor in Computer Science",
      duration: "2018 - 2022",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I’ve honed a versatile tech stack that empowers me to build responsive, accessible, and performance-optimized interfaces. From foundational web technologies to modern frameworks and design tools, I continuously refine my skill set to stay current and deliver intuitive digital experiences.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <TbBrandTypescript />,
      name: "typescript",
    },
    {
      icon: <FaGitAlt />,
      name: "version control",
    },
  ],
};

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[190px] py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent-DEFAULT">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-DEFAULT"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[205px] xl:h-[250px] py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent-DEFAULT">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-DEFAULT"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group md:hover:scale-90 duration-300 active:scale-90 md:active:scale-none">
                              <div className="text-6xl group-hover:text-accent-DEFAULT transition-all duration-300 group-active:text-accent-DEFAULT ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="md:max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex md:items-center md:justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="md:text-xl text-[15px]">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
