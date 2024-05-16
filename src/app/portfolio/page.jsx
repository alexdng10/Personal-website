"use client";

import React, { useContext } from 'react';
import Link from 'next/link';
import { MenuContext } from "@/components/menucontext";

const projects = [
  {
    title: "Emotify",
    description: "An emotion recognition app that detects and displays emotions from facial expressions.",
    videoLink: "https://www.youtube.com/link-to-emotify-video",
  },
  {
    title: "CorVue",
    description: "A COVID-19 dashboard that provides real-time statistics and visualizations.",
    videoLink: "https://www.youtube.com/link-to-corvue-video",
  },
  {
    title: "Reality Check",
    description: "An augmented reality app that overlays information on the real world.",
    videoLink: "https://www.youtube.com/link-to-reality-check-video",
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
            <Link href={project.videoLink} legacyBehavior>
              <a className="block w-full h-full flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
