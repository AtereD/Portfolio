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
      "This website is created for a construction company that provides services ranging from engineering to consultations, construction and so much more",
    iconLists: ["/next.svg", "/tail.svg", ],
    image: "/assets/work/construction.svg",
    live: "https://wole-oke-construction.vercel.app/",
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
  // {
  //   id:5,
  //   title: "LinguaEd",
  //   description:
  //     "LinguaEd is a mock e-learning platform that was built Using Next JS, and Tailwing CSS",
  //   iconLists: ["/next.svg", "/tail.svg", ],
  //   image: "/assets/work/thumb2.png",
  //   live: "https://lingua-ed.vercel.app/",
   
  // },
   {
    id:7,
    title: "Weather App",
    description:
      "This Weather App Was Built Using React JS, Tailwind CSS and OpenWeatherMap API",
    iconLists: ["/re.svg", "/tail.svg", ],
    image: "/assets/work/thumb3.png",
    live: "https://dweatherapp.netlify.app/",
    
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
 
];

export const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "About Me",
        path: "/#resume"
    },
    {
        name: "projects",
        path: "/#work"
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
    href: "/services/web-development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Designing intuitive, user-first interfaces that blend beauty with functionality across all devices",
    href: "/services/design",
  },
  // {
  //   num: "04",
  //   title: "Logo Design",
  //   description:
  //     "Crafting bold, memorable logos that capture the essence of your brand in a single glance.",
  //   href: "",
  // },
  // {
  //   num: "03",
  //   title: "SEO",
  //   description:
  //     "Optimizing your online presence to climb search rankings and connect with the right audience.",
  //   href: "",
  // },
];

export const about = {
  title: "About me",
  description:
    "Hey there👋! I’m Damilola, but most people call me Atere/Dami😊. I'm a software developer who enjoys building clean, responsive, and user-friendly websites. I work mostly with HTML, CSS, JS/TS, React.js, TailwindCSS and Next.js, tools I use to bring ideas and designs to life in the browser. I love working on projects that focus on great user experiences and strong design. Whether I’m coding solo or collaborating with a team, I find joy in turning creative concepts into real, working products that people enjoy using.",


  info: [
    {
      fieldName: "Name:",
      fieldValue: "Atere Damilola",
    },
    {
      fieldName: "Email:",
      fieldValue: "ateredamilola4d@gmail.com",
    },
    {
      fieldName: "Experience:",
      fieldValue: "2 Years",
    },
    // {
    //   fieldName: "Nationality:",
    //   fieldValue: "Nigerian",
    // },
    {
      fieldName: "Freelance:",
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
      position: "Web Developer",
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
   //"My journey in tech began with a Computer Science degree and continued through self-taught development, driven by curiosity and practical learning. As I grow in the field, I’m now focusing on earning certifications that reflect my skills and commitment to professional growth.",
    "My educational path combines formal academic studies with self-driven learning through online platforms. From earning a Computer Science degree to mastering frontend technologies via Coursera and Youtube, I’ve built a strong foundation in both theory and hands-on development.",
  items: [
    // {
    //   Institution: "Online Course Platform",
    //   position: "Frontend Developer Professional Certificate",
    //   duration: "In view",
    // },
    {
      Institution: "University of Abuja",
      position: " Bachelor in Computer Science",
      duration: "2018 - 2022",
    },
    // {
    //   Institution: "Online Course Platform (Coursera))",
    //   position: " Intro to Software Engineering",
    //   // duration: "2024",
    // },
    // {
    //   Institution: "Online Course Platform (Coursera)",
    //   position: "Getting Started with Frontend and Web Development",
    //   // duration: "2024",
    // },
    
  ],
};

export const skills = {
  title: "My skills",
  description:
    "I’ve put together a solid mix of tools and frameworks that help me build 💻 fast, accessible, and responsive interfaces. Always learning, always improving, I enjoy turning ideas into digital experiences people actually enjoy using.",
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

export const gridItems = [
  {
    id: 1,
    title: "I believe great digital experiences starts with great conversations. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech-savvy problem solver with a love for software development.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const design = [
   {
    id:1,
    title: "Construction Company Website",
   
    iconLists: ["/fig.svg", ],
    image: "/assets/design/wole-oke.png",
    live: "https://www.figma.com/design/kcH3MthUiqGbirrrKEsqeN/WOLE-OKE-Const.-Company-LTD?node-id=5-24&t=7bBp5eH67lwgjzDu-1",
  },
  {
    id:2,
    title: "Travel Website",
    iconLists: ["/fig.svg", ],
    image: "/assets/design/travel.png",
    live: "https://www.figma.com/design/NPCzFPPdgxaRaRMNq61rk4/Travel-Website?node-id=0-1&t=9BbA3UXIia35hSqJ-1"
  },
  {
    id:2,
    title: "Sales App",
    iconLists: ["/fig.svg", ],
    image: "/assets/design/salesapp.png",
    live: "https://www.figma.com/design/5fnDo24XxgfVKLJnwp822M/Sales-App?node-id=0-1&t=1EszOnHqPlFmgYRn-1"
  },
]