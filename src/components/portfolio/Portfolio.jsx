import React from "react";
import "./Portfolio.css";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../../data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h3>My Recent Work</h3>
      <h1>PROJECTS</h1>

      <div className="container portfolio_container">
        {projects.map((project) => {
          return (
            <article className="portfolio_item" key={project.id}>
              <div className="portfolio_item_img">
                <img src={project.img} alt={project.title} />
              </div>
              <h4 className="project_name">{project.title}</h4>
              <p>{project.about}</p>
              <div className="portfolio_item_cta">
                <a href={project.github} target="_blank">
                  <FaGithub />
                </a>
                <a href={project.live} target="_blank">
                  <MdOutlineRemoveRedEye />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
