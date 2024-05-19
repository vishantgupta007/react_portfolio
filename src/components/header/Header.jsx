import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Astro from "../../assets/lappy.png";
import { Typewriter } from "react-simple-typewriter";
import { useScroll, motion, useSpring } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <>
      <motion.div
        style={{
          scaleX,
          background: "#fca311",
          transformOrigin: "left",
          position: "fixed",
          top: 0,
          width: "100%",
          height: "5px",
          zIndex: 99,
        }}
      />
      <header>
        <span></span>
        <div className="container container_header" id="home">
          <h3>Hello I'm</h3>
          <h1>Vishant Gupta</h1>
          <h2 className="text-[54px] font-sans text-gray-100 opacity-30">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Developer",
                "JavaScript Developer",
                "Redux",
                "Web Responsiveness",
                "DOM Manipulation",
                "REST API",
                "Tainwind CSS",
                "Material UI",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              cursorColor="#fca311"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
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
    </>
  );
};

export default Header;
