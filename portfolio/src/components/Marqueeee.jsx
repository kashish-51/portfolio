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

const Marqueeee = () => {
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
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>
                     <div className="flex items-center text-white bg-gradient-to-l from-fuchsia-950  to-pink-800 hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer">
                        <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                        <span className="text-lg font-semibold text-white pr-12">Start using</span>
                     </div>

                     </div>
                  </h1>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default Marqueeee;