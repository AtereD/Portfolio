"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiArrowUp } from "react-icons/fi";


const Photo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[50px] h-[50px] mix-blend-lighten absolute cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/assets/img.png"
            priority
            quality={100}
            fill
            alt="Profile photo"
            className="object-contain rounded-full"
          />
        </motion.div>

        {/* Animated Circle */}
        <motion.svg
          className="w-[50px] h-[50px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#101828"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.svg>
      </motion.div>

       {/* Click Hint Arrow */}
        {/* <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{
            opacity: 1,
            y: [0, -5, 0],
            transition: {
              delay: 3,
              duration: 1.2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
          className="absolute top-[60px] left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-gray-300 lg:hidden"
        >
          <FiArrowUp className="text-lg mb-1" />
          <span className="text-xs"></span>
        </motion.div> */}

      {/* Image Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 h-[100vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              <Image
                src="/assets/img.png"
                fill
                alt="Enlarged profile photo"
                className="object-contain rounded-full"
              />
            </motion.div>
            {/* Animated Circle */}
        <motion.svg
          className="w-[300px] h-[300px] lg:w-[550px] lg:h-[550px] absolute"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photo;
