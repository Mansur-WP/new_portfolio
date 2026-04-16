import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <div className="section" id="projects">
    <div className="section-inner">
      <div className="sec-tag">My work</div>
      <h2 className="sec-title">Projects</h2>
      <p className="sec-sub">
        Not tutorials. Not certificates. Real things I built to solve real
        problems.
      </p>
      <div className="proj-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
