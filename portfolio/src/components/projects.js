import React from "react";
import Data from "../data/projects";



function Projects() {
  return (
    <div className="Project-wrapper">
      <div className="project-box">
        <h1>Projects</h1>

        {Data.map((project) => (
          <div className="project-card">
            <h2 className="project-name">{project.name}</h2>
            <div className="tech-container">
              {project.tech.map((tech) => (
                <div className="tech-box">{tech}</div>
              ))}
            </div>

            <div><video loop playsInline autoPlay muted width="100%" ><source src={project.img} type="video/mp4"/></video></div>
            <p>{project.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
