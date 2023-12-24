import React, { useState } from "react";
import "./Portfolio.css";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../../data";

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (tech) => {
    const newFilteredProjects = tech
      ? projects.filter((project) => project.tech === tech)
      : projects;

    setFilteredProjects(newFilteredProjects);
  };

  return (
    <section id="portfolio">
      <h3>My Recent Work</h3>
      <h1>PROJECTS</h1>

      {/* Buttons for filter projects using filterFunctionality */}

      <div className="techTitle">
        <button className="btn" onClick={() => handleFilter("")}>
          ALL
        </button>
        <button className="btn" onClick={() => handleFilter("React Native")}>
          React Native
        </button>
        <button className="btn" onClick={() => handleFilter("React")}>
          React
        </button>
        <button className="btn" onClick={() => handleFilter("React/ API")}>
         React/ API
        </button>
        <button
          className="btn"
          onClick={() => handleFilter("HTML, CSS, JavaScript")}
        >
          HTML/ CSS/ JavaScript
        </button>
      </div>

      {/* displaying all the projects using transition library and map method */}

      <div className="container portfolio_container">
        {filteredProjects.map((project) => {
          return (
            <div key={project.id} className="portfolio_item fade">
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
