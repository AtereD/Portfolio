import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";


const Home = () => {
  return (
    <section className=" mb-8">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center xl:pt-8 lg:pb-24 justify-center">
          {/* text */}
          <div className="text-center  order-2 xl:order-none max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
            <span className="text-lg">Software Developer</span>
            
            <h1 className="h1 lg:mb-6 mb-4">
              Building the web, One <span className="text-accent-DEFAULT"
              >smooth experience {" "}</span> at a time..
            </h1>
            {/* <h1 className="h1 lg:mb-6 mb-4">
              Design meet function--In every <span className="text-accent-DEFAULT">line of code</span>
            </h1> */}
            <p className=" mb-9 text-white/80 capitalize text-base lg">
              Hello👋, i&#39;m Atere Damilola, a software developer based in Nigeria.
              
            </p>

            {/* buttons and socials */}
            <div className="flex xl:flex-row items-center gap-8 justify-center flex-col">
              <Link
                href="/cv.pdf"
                download="Atere_Damilola_CV.pdf"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 "
                >
                  <span>Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>

              <div className="mb-8 xl:mb-0 flex items-center justify-center">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent-DEFAULT rounded-full flex justify-center items-center text-accent-DEFAULT text-base hover:bg-accent-DEFAULT hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 lg:hidden mb-8 flex">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
};

export default Home;
