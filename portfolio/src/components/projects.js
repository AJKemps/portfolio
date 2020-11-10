import React from "react";
import Data from "../data/projects";

function Projects() {
  return (
    <div className="Project-wrapper">
      <div className="project-box">
        <div className="project-title">
          <h1>Portfolio</h1>
          <p className="project-intro">
            I enjoy working on challenging problems, finding the proper
            solution, and accentuating that solution with good design. If I get
            to learn a new tool or technology along the way, even better.
          </p>
        </div>
        {Data.map((project) => (
          <div className="project-card">
            <h2 className="project-name">{project.name}</h2>
            <div className="tech-container">
              {project.tech.map((tech) => (
                <div className="tech-box">{tech}</div>
              ))}
            </div>

            <div className="vid-box">
              <video loop playsInline autoPlay muted>
                <source src={project.img} type="video/mp4" />
              </video>
            </div>
            <ul>
              {project.about}
              <br/><br/>
              {project.bullets.map((item) => (
                <li className="bullet">— {item}</li>
              ))}
            </ul>
            <div className="link-box">
              <div className="link">
                <a target="blank" href={project.github}>
                  Github
                </a>
              </div>
              <div className="link">
                <a target="blank" href={project.deployed}>
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
