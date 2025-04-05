import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/AtereD" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/atere-damilola-337546213",
  },
  // {icon: <FaTwitter />, path: ''},
  // {icon: <FaInstagram />, path: ''},
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
