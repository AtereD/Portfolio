import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


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
  authors: [{ name: "Atere Damilola", url: "https://ateredami.vercel.app" }],
  themeColor: "https://ateredami.vercel.app",
  metadataBase: new URL(""),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/dami_logo.ico' type='icon'/>
      </head>
      <body
        className={`${geistSans.variable} px-2 lg:px-0 py-2 flex flex-col gap-30 xl:gap-34`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
