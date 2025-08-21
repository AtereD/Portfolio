"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "@/constant";
import { PinContainer } from "@/components/ui/Pin";

const Web = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
      }}
      className="flex flex-col gap-10"
    >
      {/* Back button */}
      <div className="flex gap-3 items-center justify-center">
        <Link href="/services">
          <FaArrowLeft className="animate-bounce text-accent" />
        </Link>
        <p className="text-sm md:text-base">Go back</p>
      </div>

      {/* Projects slider */}
      <div className="relative flex flex-wrap justify-center px-4 py-4 gap-x-24 md:gap-y-6">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          navigation
          modules={[Navigation, Autoplay]}
          className="mySwiper w-full h-full"
        >
          {projects.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <PinContainer title={item.live} href={item.link}>
                  <div className="relative flex items-center justify-center w-[90vw] sm:w-96 h-[90vh] sm:h-[80vh] overflow-hidden mb-8">
                    <Image
                      src={item.image}
                      alt={`${item.title} screenshot`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  {/* Title */}
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  {/* Description */}
                  <p
                    className="text-sm lg:text-base font-light lg:font-normal line-clamp-2"
                    style={{ color: "#BEC1DD", margin: "1vh 0" }}
                  >
                    {item.description}
                  </p>

                  {/* Tech + Live link */}
                  <div className="flex items-center justify-between mt-6 mb-3">
                    {/* Tech icons */}
                    <div className="flex items-center">
                      {(item.iconLists || []).map((icon, idx) => (
                        <div
                          key={idx}
                          className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * idx + 2}px)`,
                          }}
                        >
                          <Image
                            src={icon}
                            alt={`Tech ${idx + 1}`}
                            width={24}
                            height={24}
                            className="p-1"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Live site link */}
                    <div className="flex items-center">
                      <p className="text-sm md:text-base text-[#6600cc]">
                        Check Live Site
                      </p>
                      <Link href={item.live} target="_blank">
                        <FaLocationArrow className="ml-2 text-[#6600cc]" />
                      </Link>
                    </div>
                  </div>
                </PinContainer>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Web;
