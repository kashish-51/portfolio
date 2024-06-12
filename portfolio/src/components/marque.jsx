import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";

import "./marque.css";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div className=" bg-black">
      <div className="marquee">
                {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
        
          <h1 className="hover:text-pink-600">
  
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;