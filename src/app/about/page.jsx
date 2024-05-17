"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import { MenuContext } from "@/components/menucontext";

export default function AboutPage() {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-full w-full md:mt-20">
      {!isMenuOpen && (
        <div className="flex-1 flex justify-center items-center md:pr-5 h-full">
          <div className="w-full max-w-xs md:max-w-sm transform md:translate-x-0">
            <Image
              src="/alex2.png" // Make sure to place the image in the public directory
              alt="Alex Dang"
              width={450}
              height={450}
              className="rounded-full"
            />
          </div>
        </div>
      )}
      <div className="flex-1 text-center md:text-left text-white flex flex-col justify-center items-center md:items-start md:pl-5 mt-10 md:mt-0">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg max-w-lg">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg">
            Hi, I&apos;m Alex Dang, a second-year computer science student at Western University. 
            I am passionate about developing high-quality software and am committed to continuously learning and honing my skills. 
            Explore my portfolio to discover the projects I&apos;ve worked on and the expertise I&apos;ve developed. 
            As an international student, I bring a diverse perspective to my work. 
            Join me on my journey to perfect my craft and make a meaningful impact in the tech world.
          </p>
        </div>
      </div>
    </div>
  );
}