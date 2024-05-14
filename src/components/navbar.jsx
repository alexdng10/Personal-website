"use client"


import Link from "next/link"
import { useState } from "react";
const links = [
    { url: "/", title: "Home"},
    { url: "/about", title: "About"},
    { url: "/portfolio", title: "Portfolio"},
    { url: "/contact", title: "Contact"},
];
const Navbar = () => {
    const [open,setOpen]=useState(false)
    return (
        
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
            <div className="hidden md:flex gap-3">
                        {links.map(link=>(
                            <Link href={link.url} key={link.title}>{link.title}</Link>
                        ))}
            </div>
            {/* LOGO*/}
            <div className='flex-shrink-0 md:hidden' >
                <Link href="/" className="flex items-center justify-center">
                    <img src="/coo4.gif" alt="Logo" className="w-32" />
                </Link>
            </div>
            {/*menu*/}
            <div className='md:hidden'>
                {/* Menu Button */}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative " 
                onClick={(()=>setOpen(prev=>!prev))}>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    
                </button>
                 {/*MENU LIST*/}
                 {open &&(

                 
                    <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                        {links.map(link=>(
                            <Link href={link.url} key={link.title}>{link.title}</Link>
                        ))}
                 </div>
                )}   
            </div>
        </div>
    )
}
export default Navbar