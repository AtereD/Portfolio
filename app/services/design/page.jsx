"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { design } from "@/constant";
import { PinContainer } from "@/components/ui/Pin";

const BackButton = () => (
  <div className="flex gap-4 items-center justify-center ml-3">
    <Link href="/services">
      <FaArrowLeft className="animate-wave" />
    </Link>
    <p className="text-sm md:text-base">Go back</p>
  </div>
);

const DesignCard = ({ item }) => (
  <PinContainer>
    {/* Image wrapper */}
    <div className="relative flex items-center justify-center w-[80vw] sm:w-96 h-[80vh] sm:h-[80vh] overflow-hidden mb-8 rounded-lg">
      {/* Purple overlay */}
      <div className="absolute inset-0 bg-[#6600cc]/70" />
      <img
        src={item.image}
        alt={item.title}
        className="absolute bottom-0 z-10 object-contain"
      />
    </div>

    {/* Title */}
    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
      {item.title}
    </h1>

    {/* Description */}
    <p
      className="text-sm lg:text-base font-light lg:font-normal line-clamp-1 my-2"
      style={{ color: "#BEC1DD" }}
    >
      {item.description}
    </p>

    {/* Icons + Live link */}
    <div className="flex items-center justify-between mt-7 mb-6">
      {/* Tech icons */}
      <div className="flex items-center">
        {(item.iconLists || []).map((icon, index) => (
          <div
            key={index}
            className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
            style={{ transform: `translateX(-${5 * index + 2}px)` }}
          >
            <img src={icon} alt="icon" className="p-2" />
          </div>
        ))}
      </div>

      {/* Live site link */}
      <Link href={item.live} target="_blank">
        <div className="flex items-center">
          <p className="text-sm md:text-base text-[#6600cc]">View</p>
          <FaLocationArrow className="ml-2 text-[#6600cc]" />
        </div>
      </Link>
    </div>
  </PinContainer>
);

const Design = () => {
  return (
    <motion.div
      id="projects"
      className="flex flex-col gap-10"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
      }}
    >
      {/* Back button */}
      <BackButton />

      {/* Swiper section */}
      <div className="relative flex flex-wrap justify-center px-4 py-4 gap-x-24 md:gap-y-2">
        <Swiper
          spaceBetween={20}
          breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper w-full h-full"
        >
          {design.map((item) => (
            <SwiperSlide key={item.id}>
              <DesignCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Design;
