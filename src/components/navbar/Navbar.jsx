import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaRegFolderOpen } from "react-icons/fa";
import { RiMessageLine } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import "./Navbar.css";

export const navItems = [
  { id: "#", icon: <AiOutlineHome />, title: "home" },
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
  );
};

export default Navbar;
