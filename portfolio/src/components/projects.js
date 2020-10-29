import React from "react";
import Data from "../data/projects";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>

      {Data.map((project) => (
        <div className="project-card">
          <h2 className="project-name">{project.name}</h2>
          <div className="tech-box">
            {project.tech.map((tech) => (
              <div>{tech}</div>
            ))}
          </div>
          <div>{project.img}</div>
          <p>{project.about}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
