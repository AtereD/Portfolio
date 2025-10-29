"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow, FaThLarge, FaList } from "react-icons/fa";
import { design, projects } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewType, setViewType] = useState("grid"); // grid | list

  // Merge and filter projects dynamically
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      const maxLength = Math.max(design.length, projects.length);
      const mixed = [];
      for (let i = 0; i < maxLength; i++) {
        if (design[i]) mixed.push(design[i]);
        if (projects[i]) mixed.push(projects[i]);
      }
      return mixed.slice(0, 6); // limit to 6 total (3 of each alternating)
    }
    if (activeFilter === "Design") return design;
    if (activeFilter === "Development") return projects;
    return [];
  }, [activeFilter]);

  return (
    <section
      id="work"
      className="container mx-auto mt-20 mb-12 overflow-hidden h-full w-full"
    >
      {/* Heading */}
      <h2 className="lg:text-5xl h2 font-semibold">The work I do</h2>

      {/* Filter + View options */}
      <nav className="flex justify-between mt-8 mb-10 flex-row ">
        {/* Filter buttons */}
        <ul className="flex md:gap-3 gap-1 items-center justify-center">
          {["All", "Design", "Development"].map((filter) => (
            <li
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer md:px-5 md:py-2 border rounded-full transition-all text-text text-xs md:text-base p-2 ${
                activeFilter === filter
                  ? "bg-gray-900 text-white"
                  : "hover:bg-gray-800 "
              }`}
            >
              {filter}
            </li>
          ))}
        </ul>

        {/* View toggles */}
        <ul className="flex gap-1 md:gap-2 ml-auto items-center ">
          <li
            onClick={() => setViewType("grid")}
            className={`text-xs flex items-center p-3 border rounded-full cursor-pointer transition-all  ${
              viewType === "grid"
                ? "bg-gray-900 text-primary"
                : "hover:bg-gray-900 text-text/60"
            }`}
          >
            <FaThLarge />
          </li>
          <li
            onClick={() => setViewType("list")}
            className={` text-xs flex items-center p-3 border rounded-full cursor-pointer transition-all ${
              viewType === "list"
                ? "bg-accent-DEFAULT text-primary"
                : "hover:bg-gray-900 text-text/60"
            }`}
          >
            <FaList />
          </li>
        </ul>
      </nav>

      {/* Project Display Section */}
      {viewType === "grid" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
          }}
        >
          <Swiper
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {filteredProjects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg bg-text p-4 flex flex-col items-start">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg w-full h-52 mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col w-full">
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-primary">
                      {item.title}
                    </h1>

                    <div className="flex justify-between items-center w-full mt-5">
                      <div className="flex items-center gap-2">
                        {(item.iconLists || []).map((icon, index) => (
                          <div
                            key={index}
                            className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index + 2}px)`,
                            }}
                          >
                            <img src={icon} alt="icon" className="p-2" />
                          </div>
                        ))}
                      </div>

                      <div>
                        <p class="flex gap-2 items-center font-semibold underline text-primary/90">
                          View
                          <a
                            href={item.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bg-purple-900 text-white p-2 rounded-full hover:opacity-80 group"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="20"
                              height="20"
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
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      ) : (
        // List View
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
          }}
          className="flex flex-col gap-10"
        >
          {filteredProjects.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg bg-gray-900 backdrop-blur-sm border border-white/10 p-4 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 w-full
      ${
        viewType === "list"
          ? "flex items-center gap-4 lg:gap-6 justify-between w-full"
          : "flex flex-col items-start"
      }
    `}
            >
              {/* Image */}
              <div
                className={`overflow-hidden rounded-lg flex-shrink-0 
        ${viewType === "list" ? "w-10 h-10" : "w-full h-64 mb-4"}
      `}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Info Section */}
              <div className="flex justify-between w-full items-center">
                <div>
                  <h1
                    className={`font-semibold text-primary ${
                      viewType === "list" ? "text-lg" : "text-xl lg:text-2xl"
                    }`}
                  >
                    {item.title}
                  </h1>
                  {item.description && (
                    <p className="text-sm md:max-w-[400px] text-primary/70 line-clamp-1 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Tech icons + Live link */}
                <div
                  className={`flex items-center md:gap-10 gap-2  ${
                    viewType === "list" ? "" : "pt-2"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {(item.iconLists || []).map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/10 rounded-full bg-black w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index + 2}px)` }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div>
                    <p class="flex gap-2 items-center font-semibold underline text-primary/90">
                      View
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="bg-purple-900 text-white p-2 rounded-full hover:opacity-80 group"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
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
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* View More Button */}
      <div className="mt-8">
        <p class="flex gap-2 items-center font-semibold underline ">
          View More
          <a
            href="https://github.com/AtereD"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-purple-900 text-white p-2 rounded-full hover:opacity-80 group"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
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
    </section>
  );
};

export default Work;
