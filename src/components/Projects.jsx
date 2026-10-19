import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section className="section projects-section" id="projects">
    <div className="section-inner">
      <div className="projects-top-bar">
        <div className="projects-heading-col">
          <div className="sec-tag">
            <span className="sec-tag-dot"></span> MY WORK
          </div>
          <h2 className="sec-title">Projects</h2>
          <p className="sec-sub">
            Not tutorials. Not certificates. Real things I built to solve real problems.
          </p>
        </div>
        <div className="projects-header-action">
          <a
            href="https://github.com/Mansur-WP?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-pill"
          >
            View All Projects →
          </a>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title || idx} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
