import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/vishant-gupta-373409293"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/vishantgupta007"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://vishantgupta009@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <SiGmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
