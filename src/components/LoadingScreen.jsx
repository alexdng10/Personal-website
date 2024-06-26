// src/components/LoadingScreen.js
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";


const LoadingScreen = () => {
  const topVariants = {
    action: {
      x:100,
      transition:{
        duration:3
      }
    },
   
    action2:{
      rotate:20,
      transition:{
        duration:2,
        delay: 3 
      }
    },
    opened: {
      x: "70vw",
    },
    
    
    
  };
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <div className="space-y-2 flex flex-col items-center">
        <motion.div variants={topVariants} initial="opened" animate={["action", "action2"]}   className=" h-2 w-20 bg-white"></motion.div>
        <div className=" h-2 w-32 bg-white"></div>
        <div className=" h-2 w-32 bg-white"></div>
        
      </div>
    </div>
  );
};

export default LoadingScreen;
