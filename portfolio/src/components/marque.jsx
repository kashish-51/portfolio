import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";
import react from '../assets/react.svg'

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
                <div className="flex justify-center items-center h-20  bg-black">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
        
          <h1 className="hover:text-pink-600">
            <div className="flex">
   
            <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>   <div className="flex items-center  bg-pink-500 border border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
        <img src={react} alt="React Logo" className="w-12 h-12 mr-2 pl-4" />
        <span className="text-lg font-semibold text-black pr-12 ">Start using</span>
     </div>  
     </div>
          </h1>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;