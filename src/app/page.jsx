"use client";

import React, { useContext } from 'react';
import Spline from '@splinetool/react-spline';
import { MenuContext } from "@/components/menucontext";

export default function HomePage() {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-full w-full">
      <div className={`flex-1 flex justify-center items-center md:pr-5 h-full ${isMenuOpen ? 'hidden' : 'flex'}`}>
        {/* Spline for mobile screens */}
        <div className="w-full max-w-xs md:hidden transform translate-x-[-15%]">
          <Spline scene="https://prod.spline.design/uJe5uzGCeuqHvySq/scene.splinecode" />
        </div>
        {/* Spline for larger screens */}
        <div className="hidden md:block w-full max-w-none md:w-auto">
          <Spline scene="https://prod.spline.design/2RB6hoC36LKNxg43/scene.splinecode" />
        </div>
      </div>
      <div className="flex-1 text-center md:text-left text-white flex flex-col justify-center items-center md:items-start md:pl-5 mt-10 md:mt-0">
        <h1 className="text-4xl font-bold mb-4">Welcome to Alex Dang's Portfolio</h1>
        <p className="text-lg">
          Alex Dang is a passionate software engineer dedicated to delivering high-quality products.
          Explore his portfolio to learn more about his projects and expertise.
        </p>
      </div>
    </div>
  );
}
