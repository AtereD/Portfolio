"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Photo from "../Photo";

const ResponsiveNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
       fixed top-0 left-0 w-full z-50 px-6 
        transition-colors duration-300
        ${scrolled
          ? "bg-accent-DEFAULT/5 backdrop-blur-sm "
          : "bg-transparent lg:backdrop-blur-md "}
      `}
      role="banner"
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between py-4 ">
        
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <div className="flex">
            <Photo />
          </div> 
        <Link href="/" aria-label="Home">
          <h1 className="text-3xl font-semibold select-none text-text ">
            Dami<span className="text-[#7300e6]">.</span>
          </h1>
        </Link></div>

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex "
        >
          <Nav />
         
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNav;
