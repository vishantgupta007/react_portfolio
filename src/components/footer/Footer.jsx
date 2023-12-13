import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Vishant Gupta</a>

      <ul className="perma_links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_social">
        <a
          href="https://www.linkedin.com/in/vishant-gupta-373409293"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/arreyguptaji" target="_blank">
          <FaXTwitter />
        </a>
        <a href="https://vishantgupta009@gmail.com" target="_blank">
          <SiGmail />
        </a>
      </div>


      <div className="footer_copyright">
        <small>&copy; Vishant. All rights are reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
