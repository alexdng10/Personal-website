"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { MenuContext } from "@/components/menucontext";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const [isAnimating, setIsAnimating] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(0,0,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(0,0,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
    },
    exit: {
      x: "100vw",
      
    },
  };

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsMenuOpen(false);
      }, 100); // Match this duration to the exit animation duration
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* LINKS */}
      <div className="hidden md:flex gap-4 text-white w-1/3">
        {links.map(link => (
          <Link href={link.url} key={link.title}>{link.title}</Link>
        ))}
      </div>
      {/* LOGO */}
      <div className='flex-shrink-0 md:hidden lg:flex w-1/3 justify-center'>
        <Link href="/" className="flex items-center justify-center">
          <img src="/coo4.gif" alt="Logo" className="w-32" />
        </Link>
      </div>
      {/* Github others */}
      <div className="hidden md:flex gap-11 w-1/3 justify-end">
        <Link href="https://github.com/alexdng10">
          <img src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="https://www.youtube.com/@hungquedang8460/videos">
          <img src="/youtube.png" alt="YouTube" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/hungqdang/">
          <img src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive menu */}
      <div className='md:hidden'>
        {/* Menu Button */}
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" 
          onClick={handleMenuToggle}
        >
          <motion.div variants={topVariants}
            animate={isMenuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} 
            animate={isMenuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"></motion.div>
          <motion.div variants={bottomVariants} 
            animate={isMenuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"></motion.div>
        </button>
        {/* MENU LIST */}
        <AnimatePresence>
          {(isMenuOpen || isAnimating) && (
            <motion.div 
              variants={listVariants} initial="closed" animate={isMenuOpen ? "opened" : "closed"} exit="exit"
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map(link => (
                <Link href={link.url} key={link.title}>{link.title}</Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
