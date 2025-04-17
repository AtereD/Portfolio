"use client"

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci'

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "projects",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    }
]

const MobileNav = () => {
    const pathname = usePathname();

  return (
    <Sheet className="h-full">
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent-DEFAULT"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-center items-center">
            <div className="text-center text-2xl mt-16">
                <Link href="/">
                    <h1 className="text-4xl font-semibold ">
                    Dami<span className="text-accent-DEFAULT">.</span>
                    </h1>
                </Link>
            </div>

            <nav className="flex flex-col justify-center items-center gap-8 mt-24">
                {links.map((link, index)=> {
                return (
                    <Link href={link.path} key={index}className={`${link.path === pathname && "text-accent-DEFAULT border-b-2 border-accent-DEFAULT" } capitalize text-xl hover:text-accent-DEFAULT transition-all`}>
                        {link.name}
                    </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav