import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaRegFolderOpen } from "react-icons/fa";
import { RiMessageLine } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  const navItems = [
    { id: "#", icon: <AiOutlineHome /> },
    { id: "#about", icon: <AiOutlineUser /> },
    { id: "#experience", icon: <VscTools /> },
    { id: "#portfolio", icon: <FaRegFolderOpen /> },
    { id: "#contact", icon: <RiMessageLine /> },
  ];
  return (
    // for displaying bg color on icon after clicking on them

    <nav>
      {navItems.map((item) => (
        <a
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
