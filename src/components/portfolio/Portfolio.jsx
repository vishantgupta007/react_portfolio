import React, { useState } from "react";
import "./Portfolio.css";
import { MdRemoveRedEye } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../../data";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  // const [selectedId, setSelectedId] = useState(null);

  const filterBtn = [
    "ALL",
    "React Native",
    "React.js",
    "React.js/ API",
    "HTML, CSS, JavaScript",
  ];

  const handleFilter = (tech) => {
    // If the tech is "ALL", display all projects
    if (tech === "ALL") {
      setFilteredProjects(projects);
    } else {
      // Otherwise, filter projects based on the selected technology
      const newFilteredProjects = projects.filter(
        (project) => project.tech === tech
      );
      setFilteredProjects(newFilteredProjects);
    }
  };

  return (
    <section id="portfolio">
      <h3>My Recent Work</h3>
      <h1>PROJECTS</h1>

      {/* Buttons for filter projects using filterFunctionality */}

      <div className="techTitle">
        {filterBtn.map((btn, index) => (
          <button className="btn" key={index} onClick={() => handleFilter(btn)}>
            {btn}
          </button>
        ))}
      </div>

      {/* displaying all the projects using transition library and map method */}

      <div className="container portfolio_container">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              exit={{ transform: "scale(0)" }}
              className="portfolio_item"
            >
              <h1 className="project-serial">0{project.id}</h1>
              <div className="portfolio_item_img">
                <img src={project.img} alt={project.title} width={100} />
              </div>
              <h4 className="project_name">{project.title}</h4>
              <p>{project.about}</p>
              <div className="portfolio_item_cta">
                <a href={project.github} target="_blank">
                  <FaGithub />
                </a>
                <a href={project.live} target="_blank">
                  <MdRemoveRedEye />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
