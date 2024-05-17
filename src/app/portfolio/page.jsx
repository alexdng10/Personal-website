"use client";

import React, { useContext } from 'react';
import Link from 'next/link';
import { MenuContext } from "@/components/menucontext";

const projects = [
  {
    title: "Emotify",
    description: "An AI-driven app that boosts mental health by using image classification to display nostalgic, happy memories, uplifting users based on their detected mood.",
    videoLink: "https://www.youtube.com/watch?v=kuqs9RJLqlM&t=157s",
    imageUrl: "/emot.png", // Add image URL
  },
  {
    title: "CorVue",
    description: "An low-cost effective Cornary Artery Disease detector available for public use.",
    videoLink: "https://www.youtube.com/watch?v=nP9zmQr1L48",
    imageUrl: "/wfd.png", // Add image URL
  },
  {
    title: "Reality Check",
    description: "An AI-powered mental health app offering practical guidance based on Adlerian psychology.",
    videoLink: "https://www.youtube.com/watch?v=AADr8EMu3R0",
    imageUrl: "/11.png", // Add image URL
  },
];

export default function Portfolio() {
  const { isMenuOpen } = useContext(MenuContext);

  if (isMenuOpen) {
    return null;
  }

  return (
    <div className="container">
      <div className="grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="card-back">
                <Link href={project.videoLink} legacyBehavior>
                  <a className="block w-full h-full flex flex-col items-center justify-center p-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
