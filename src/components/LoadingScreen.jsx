// src/components/LoadingScreen.js
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";


const LoadingScreen = () => {
  const topVariants = {
    action: {
      x:55,
      transition:{
        duration:3
      }
    },
   
    action2:{
      rotate:60,
      scale:2,
      backgroundColor: "rgb(0,0,255)",
      transition:{
        duration:2,
        delay: 3 
      }
    },
    opened: {
      x: "70vw",
    },
    
  };
  const middle = {
    check: {
      x:10,
      transition:{
        duration:2,
        delay:2
      }
    },
    second:{
      scale:2,
      backgroundColor: "rgb(0,0,255)",
      transition:{
        duration:2.5,
        delay:4
      }
    },
    opened: {
      x: "70vw",
    },
  };
  const bottomVariants = {
    action: {
      x:-35,
      transition:{
        duration:3
      }
    },
   
    action2:{
      rotate:-60,
      backgroundColor: "rgb(0,0,255)",
      scale:2,
      transition:{
        duration:2,
        delay: 3 
      }
    },
    opened: {
      x: "-70vw",
      y: "-32px",
    },
    
  };
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <div className="space-y-2 flex flex-col items-center">
        <motion.div variants={topVariants} initial="opened" animate={["action", "action2"]}   className=" h-2 w-32 bg-white "></motion.div>
        <motion.div variants={middle} initial="opened" animate={["check","second"]} className=" h-2 w-20 bg-white"></motion.div>
        <motion.div variants={bottomVariants} initial="opened" animate={["action", "action2"]} className=" h-2 w-32 bg-white"></motion.div>
        
      </div>
    </div>
  );
};

export default LoadingScreen;
