import { JetBrains_Mono, Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// const jetbrainsMono = JetBrains_Mono({
//   variable: "--font-jetbrainsMono",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
// });

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/dami_logo.ico' type='icon'/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  py-2 px-3 xl:px-2 h-screen`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
