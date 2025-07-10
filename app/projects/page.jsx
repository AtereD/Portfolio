"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import { projects } from "@/constant";
import { PinContainer } from "@/components/ui/Pin";

const Projects = () => {
  return (
    <motion.div className="" id="projects" initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}>
      <div className="relative px-4 flex flex-wrap items-center justify-center p-4 gap-x-24 md:gap-y-2  ">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full h-full"
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id}>
             
                <PinContainer title={item.live} href={item.link}>
                  <div className="relative flex items-center justify-center sm:w-96 overflow-hidden  w-[80vw] mb-10 sm:h-[80vh] h-[80vh]">
                    
                    <img
                      src={item.image}
                      alt="cover"
                      className="z-10 absolute bottom-0"
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:font-normal font-light text-sm  lg:text-base line-clamp-1"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {(item.iconLists || []).map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-[#eece1a]">
                        Check Live Site
                      </p>
                      <Link href={item.live} target="_blank">
                        <FaLocationArrow className="ms-3" color="#eece1a" />
                      </Link>
                    </div>
                  </div>
                </PinContainer>
            
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Projects;
