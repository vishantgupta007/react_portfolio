import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Astro from "../../assets/lappy.png";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <header>
      <span></span>
      <div className="container container_header" id="home">
        <h3>Hello I'm</h3>
        <h1>Vishant Gupta</h1>
        <h3>
          <Typewriter
            words={[
              "Frontend Developer",
              "React Developer",
              "JavaScript",
              "Redux",
              "Web Responsiveness",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            cursorColor="#fca311"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
        <CTA />

        <HeaderSocials />

        {/* image and social-icons */}

        <div className="me">
          <img src={Astro} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
