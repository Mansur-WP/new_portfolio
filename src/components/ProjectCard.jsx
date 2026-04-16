import React from "react";

const ProjectCard = ({
  icon,
  title,
  status,
  statusType,
  problem,
  description,
  learned,
  stack,
  links,
}) => (
  <div className="proj-card">
    <div className="proj-top">
      <div className="proj-icon">{icon}</div>
      <div>
        <div className="proj-title">{title}</div>
      </div>
      <span className={`proj-status status-${statusType}`}>{status}</span>
    </div>
    <div className="proj-problem">{problem}</div>
    <p className="proj-desc">{description}</p>
    <div className="proj-learned">
      <strong>What I learned</strong>
      {learned}
    </div>
    <div className="proj-stack">
      {stack.map((tech, i) => (
        <span className="stag" key={i}>
          {tech}
        </span>
      ))}
    </div>
    <div className="proj-links">
      {links.map((link, i) => (
        <a href={link.url} key={i} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

export default ProjectCard;
