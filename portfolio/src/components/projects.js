import React from 'react';
import Data from '../data/projects';

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
            <br />
            <br />
            I'm always interested in working on cool new side projects, and
            would love to hear from you if you think I can be helpful.
          </p>
        </div>
        {Data.map((project, i) => (
          <div className="project-card" key={project.name}>
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
              <p>{project.about}</p>
              {project.bullets.map((item) => (
                <li className="bullet" key={item}>
                  — {item}
                </li>
              ))}
            </ul>
            <br />
            <br />
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
