"use client";

import Link from "next/link";
import Image from 'next/image';
import { useContext } from "react";
import { MenuContext } from "@/components/menucontext";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
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
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.youtube.com/@hungquedang8460/videos">
          <Image src="/youtube.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/hungqdang/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive menu */}
      <div className='md:hidden'>
        {/* Menu Button */}
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={handleMenuToggle}>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* MENU LIST */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map(link => (
              <Link href={link.url} key={link.title}>{link.title}</Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
