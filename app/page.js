import Home from "@/components/HomePage/Home";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import Resume from "@/components/HomePage/About";
import Work from "@/components/HomePage/Work";

const PortfolioPage = () => {
  return (
    <main className="relative px-2 lg:px-0 w-full h-full">

      {/* Page Sections */}
      <section id="home">
        <Home />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="work">
        <Work/>
      </section>
    </main>
  );
};

export default PortfolioPage;
