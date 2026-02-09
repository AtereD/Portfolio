import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";

import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Atere Damilola",
  description: "Atere Damilola's portfolio website.",
   keywords: [
    "Atere Damilola",
    "Portfolio",
    "Software Developer",
    "Web Designer",
    "Frontend Web Developer",
    "React.js",
    "Next.js",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/dami_logo.ico' type='icon'/>
      </head>
      <body
        className={`${geistSans.variable} flex flex-col min-h-screen`}
      >
        <ResponsiveNav />
       {children}
       <Footer/>
      </body>
    </html>
  );
}
