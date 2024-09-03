import React, { useState } from "react";
import { motion } from "framer-motion";
import react from '../assets/react.svg';

import "./marque.css";

// Defining Variants with a dynamic duration for animation control
const marqueeVariants = (isPaused) => ({
  animate: {
    x: isPaused ? 0 : [0, -1035],
    transition: {
      x: {
        repeat: isPaused ? 0 : Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
});

const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="bg-black " id="skills" >
      <div className="marquee">
        {/* 3. Using framer motion */}
        <div className="flex justify-center items-center h-20 bg-black">
          <motion.div
            className="track"
            variants={marqueeVariants(isPaused)}
            animate="animate"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex">
              {Array.from({ length: 16 }, (_, index) => (
                <div
                  key={index}
                  className="flex items-center text-white bg-gradient-to-l from-fuchsia-950 to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={react}
                    alt="React Logo"
                    className="w-12 text-white h-12 mr-2 pl-4"
                  />
                  <span className="text-lg font-semibold text-white pr-12">
                    Start using
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
