"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/constant";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Menu Button */}
      <SheetTrigger
        aria-label="Open navigation menu"
        className="flex items-center justify-center"
      >
        <CiMenuFries className="text-[32px] text-accent-DEFAULT" />
      </SheetTrigger>

      {/* Slide-in Navigation */}
      <SheetContent className="flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mt-16 text-center text-2xl">
          <Link href="/" aria-label="Home">
            <h1 className="text-4xl font-semibold">
              Dami<span className="text-accent-DEFAULT">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav
          className="mt-24 flex flex-col items-center justify-center gap-8"
          aria-label="Mobile Navigation"
        >
          {links.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={index}
                href={link.path}
                className={`capitalize text-xl transition-all hover:text-accent-DEFAULT ${
                  isActive
                    ? "text-accent-DEFAULT border-b-2 border-accent-DEFAULT"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
