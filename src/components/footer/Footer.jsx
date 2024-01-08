import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


const footerSocials = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/vishant-gupta-373409293",
  },
  {
    icon: <FaXTwitter />,
    link: "https://twitter.com/arreyguptaji",
  },
  {
    icon: <SiGmail />,
    link: "https://vishantgupta009@gmail.com",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/vishantgupta007",
  },
];

const footerLinks = [
  { id: 1, title: "Home", href: "#" },
  { id: 2, title: "About", href: "#about" },
  { id: 3, title: "Skills", href: "#experience" },
  { id: 4, title: "Projects", href: "#portfolio" },
  { id: 5, title: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Vishant Gupta
      </a>

      <ul className="perma_links">
        {footerLinks.map((icon) => {
          return (
            <li key={icon.id}>
              <a href={icon.href}>{icon.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="footer_social">
        {footerSocials.map((social, index) => {
          return (
            <a key={index} href={social.link} target="_blank">
              {social.icon}
            </a>
          );
        })}
      </div>

      <div className="footer_copyright">
        <small>&copy; Vishant Gupta. All rights are reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
