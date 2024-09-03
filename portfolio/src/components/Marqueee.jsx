import React, { useState } from "react";
import { motion } from "framer-motion";
import reactLogo from '../assets/react.svg'; // Ensure the path to the SVG is correct

import "./marque.css";

const marqueeVariants = (isPaused) => ({
  animate: {
    x: isPaused ? 0 : [0, 1035],
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

const MarqueeItem = () => (
  <div  className="flex items-center text-white bg-gradient-to-l from-fuchsia-950 to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
    <img src={reactLogo} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
    <span className="text-lg font-semibold pr-12">Start using</span>
  </div>
);

const Marqueee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const items = Array(16).fill(<MarqueeItem />); // Change 16 to the desired number of items

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="bg-black">
      <div className="marquee">
        <div
          className="flex justify-center items-center h-20 bg-black"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="track flex"
            variants={marqueeVariants(isPaused)}
            animate="animate"
          >
            {items}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marqueee;
