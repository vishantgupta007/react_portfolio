import React from "react";
import "./About.css";
import spaceastro from "../../assets/moon.png";

const About = () => {
  return (
    <section id="about">
      <h3>Get To Know</h3>
      <h1>About Me</h1>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={spaceastro} alt="flying astronaut" />
          </div>
        </div>

        <div className="about_content">
          <p>
            As a driven front-end developer, I am committed to translating
            concepts into refined, user-centric web experiences.
          </p>

          <p>
            Beyond coding, I find inspiration and discipline in my active
            engagement with sports. This commitment reflects in my work ethic,
            driving me to approach web development with the same passion,
            teamwork,
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
