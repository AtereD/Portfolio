import Link from "next/link"
import { Button } from "./ui/button"

import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 lg:py-12 text-white">
        <div className="container flex justify-between items-center mx-auto">
            {/* logo */}
            <Link href=''>
            <h1 className="text-4xl font-semibold ">
                Dami<span className="text-accent-DEFAULT">.</span>
            </h1>
            </Link>


            {/* desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
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