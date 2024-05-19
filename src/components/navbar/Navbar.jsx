import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaRegFolderOpen } from "react-icons/fa";
import { RiMessageLine } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import relaxAtro from "../../assets/relaxAstro.png";
// import Link from "react-router";
import "./Navbar.css";

export const navItems = [
  { id: "#", icon: <AiOutlineHome />, title: "Home" },
  { id: "#about", icon: <AiOutlineUser />, title: "About" },
  { id: "#experience", icon: <VscTools />, title: "Skills" },
  { id: "#portfolio", icon: <FaRegFolderOpen />, title: "Projects" },
  { id: "#contact", icon: <RiMessageLine />, title: "Contact" },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  // console.log(navItems)

  return (
    // for displaying bg color on icon after clicking on them
    <main>
      <nav>
        {navItems.map((item) => (
          <a
            title={item.title}
            key={item.id}
            href={item.id}
            onClick={() => setActiveNav(item.id)}
            className={activeNav === item.id ? "active" : ""}
          >
            {item.icon}
          </a>
        ))}
      </nav>
      <div className="relaxed-astro">
        <a
          href="https://www.linkedin.com/in/vishant-gupta-373409293/"
          target="_blank"
        >
          <img src={relaxAtro} className="navbar-img" />
        </a>
        <p className="linkedIn">
          Hey! thanks for hanging around, <br />
          Don't forget to visit my LinkedIn.
          <br /> Just tap on me
        </p>
      </div>
    </main>
  );
};

export default Navbar;
