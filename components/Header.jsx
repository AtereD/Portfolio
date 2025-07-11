import Link from "next/link"
import { Button } from "./ui/button"

import Nav from "./Nav"
import MobileNav from "./MobileNav"
import Photo from "./Photo"

const Header = () => {
  return (
    <header className="pt-4 pb-8 lg:pt-8 xl:py-12 text-white lg:pb-12">
        <div className="container flex justify-between items-center mx-auto">
            {/* logo */}
            <Link href=''>
            <h1 className="text-3xl font-semibold ">
                Dami<span className="text-accent-DEFAULT">.</span>
            </h1>
            </Link>


            {/* desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
                <Nav />
                <Photo/>
            </div>

            {/* mobile nav */}
            <div className="lg:hidden ">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header