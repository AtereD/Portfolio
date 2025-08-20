import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Photo from "./Photo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm lg:backdrop-blur-md text-white px-6">
      <div className="container mx-auto max-w-7xl flex items-center justify-between py-4">
        
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <h1 className="text-3xl font-semibold">
            Dami<span className="text-[#7300e6]">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          <Nav />
          <Photo />
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
