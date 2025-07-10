import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

export const stats = [
    {
        num: 1.5,
        text: "Years of experience",
    },
    {
        num: 7,
        text: "Projects completed",
    },
    {
        num: 8,
        text: "Technology mastered",
    },
    {
        num: 221,
        text: "Code commits",
    },
]

export const projects = [
  {
    id:1,
    title: "Wole-Oke Construction",
    description:
      "This website was created for a construction company that provides services ranging from engineering to consultations, construction and so much more",
    iconLists: ["/next.svg", "/tail.svg", ],
    image: "/assets/work/construction.svg",
    live: "https://wole-oke-construction.vercel.app/",
  },
  {
     id:2,
    title: "viRtual Website",
    description:
      "",
    iconLists: ["/vite.svg", "/tail.svg", ],
    image: "/assets/work/virtual.svg",
    live: "https://virtual-tau-ecru.vercel.app/"
  },
  {
    id:3,
    title: "React-Admin Dashboard",
    description:
      "Built and Deployed a responsive Admin Panel App using React, TailwindCSS, and Syncfusion with Theming, Tables, Charts, Calendar, Kaban components. It has one Dashboard, Three Pages, Four Apps, and Seven fully functional charts!",
    iconLists: ["/re.svg", "/tail.svg", ],
    image: "/assets/work/thumb5.png",
    live: "https://react-admin89.netlify.app",
   
  },
  {
    id:4,
    title: "Deebrew Coffee Website",
    description:
      "Developed a responsive modern website for DeeBrew, a coffee brand with Next.js and Tailwindcss",
    iconLists: ["/re.svg", "/tail.svg", "/gsap.svg"],
    image: "/assets/work/thumb1.png",
    live: "https://deebrew-landing.vercel.app/",
    
  },
  {
    id:5,
    title: "LinguaEd",
    description:
      "LinguaEd was Built Using Next JS, and Tailwing CSS",
    iconLists: ["/next.svg", "/tail.svg", ],
    image: "/assets/work/thumb2.png",
    live: "https://lingua-ed.vercel.app/",
   
  },
  {
    id:6,
    title: "Typescript(EVOGYM Website)",
    description:
      "Evogym is a responsive landing page built with typescript, react.js. tailwind css and framer motion",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg" ],
    image: "/assets/work/thumb4.png",
    live: "https://evo-typescript.netlify.app/",
  
  },
  {
    id:7,
    title: "Weather App",
    description:
      "This Weather App Was Built Using React JS, Tailwind CSS and OpenWeatherMap API",
    iconLists: ["/re.svg", "/tail.svg", ],
    image: "/assets/work/thumb3.png",
    live: "https://dweatherapp.netlify.app/",
    
  },
];

export const links = [
    {
        name: "home",
        path: "/"
    },
    // {
    //     name: "services",
    //     path: "/services"
    // },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "projects",
        path: "/projects"
    },
    {
        name: "contact",
        path: "/contact"
    }
]

export const socials = [
  { icon: <FaGithub />, path: "https://github.com/AtereD" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/atere-damilola-337546213",
  },
];

export const services = [
  {
    num: "01",
    title: "Frontend Web Development",
    description:
      "Building sleek, responsive websites with pixel-perfect precision and seamless user interactions",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Designing intuitive, user-first interfaces that blend beauty with functionality across all devices",
    href: "",
  },
  // {
  //   num: "03",
  //   title: "Logo Design",
  //   description:
  //     "Crafting bold, memorable logos that capture the essence of your brand in a single glance.",
  //   href: "",
  // },
  {
    num: "04",
    title: "SEO",
    description:
      "Optimizing your online presence to climb search rankings and connect with the right audience.",
    href: "",
  },
];

export const about = {
  title: "About me",
  description:
    "I'm a web frontend developer passionate about crafting responsive, and user-centric web interfaces. With experience in HTML, CSS, JavaScript, React, and Next.js, I build apps that not only look good but also perform well. I thrive in collaborative settings and love turning ideas into seamless, functional user experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Atere Damilola",
    },
    {
      fieldName: "Email",
      fieldValue: "ateredamilola7d@gmail.com",
    },
    {
      fieldName: "Name",
      fieldValue: "(+234) 912 168 1463",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    // {
    //   fieldName: "Language",
    //   fieldValue: "English & Yoruba",
    // },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  //description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsa labore ex eaque minus reiciendis eum cum!',
  items: [
    {
      company: "Freelancer",
      position: "Frontend Developer",
      duration: "2023 - present",
    },
    {
      company: "IINVIO",
      position: "Junior Frontend Developer",
      duration: "November 2023 - February 2024",
    },
    {
      company: "Code4teen Labs",
      position: "Software Engineer Intern",
      duration: "2022 - 2023",
    },
    {
      company: "Code4teen Labs",
      position: "Technical Curriculum Specialist",
      duration: "2022 - 2023",
    },
    {
      company: "Wootlab Innovations",
      position: "Software Developer Intern",
      duration: "April 2022 - June 2022",
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My educational path combines formal academic studies with self-driven learning through online platforms. From earning a Computer Science degree to mastering frontend technologies via Coursera, and project-based courses, I’ve built a strong foundation in both theory and hands-on development.",
  items: [
    {
      Institution: "Online Course Platform",
      position: "Frontend Developer Professional Certificate",
      duration: "In view",
    },
    {
      Institution: "Online Course Platform (Coursera))",
      position: " Intro to Software Engineering",
      duration: "2024",
    },
    {
      Institution: "Online Course Platform (Coursera)",
      position: "Getting Started with Frontend and Web Development",
      duration: "2024",
    },
    {
      Institution: "University of Abuja",
      position: " Bachelor in Computer Science",
      duration: "2018 - 2022",
    },
  ],
};

export const skills = {
  title: "My skills",
  description:
    "I’ve honed a versatile tech stack that empowers me to build responsive, accessible, and performance-optimized interfaces. From foundational web technologies to modern frameworks and design tools, I continuously refine my skill set to stay current and deliver intuitive digital experiences.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <TbBrandTypescript />,
      name: "typescript",
    },
    {
      icon: <FaGitAlt />,
      name: "version control",
    },
  ],
};
