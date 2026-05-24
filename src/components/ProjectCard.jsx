import React from "react";

const ProjectCard = ({
  icon,
  title,
  status,
  statusType,
  problem,
  description,
  stack,
  links,
}) => {
  const maxTags = 3;
  const shown = stack?.slice(0, maxTags) ?? [];
  const remaining = Math.max((stack?.length ?? 0) - shown.length, 0);


  return (
    <div className="proj-card">
      <div className="proj-top">
        <div className="proj-icon">{icon}</div>
        <div className="proj-title">{title}</div>
        <span className={`proj-status status-${statusType}`}>{status}</span>
      </div>

      <div className="proj-problem">{problem}</div>
      <p className="proj-desc">{description}</p>

      <div className="proj-stack">
        {shown.map((tech, i) => (
          <span className="stag" key={tech + i}>
            {tech}
          </span>
        ))}
        {remaining > 0 && <span className="stag stag-more">+{remaining} more</span>}
      </div>

      <div className="proj-links">
        {links.map((link, i) => (
          <a
            href={link.url}
            key={link.url + i}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};


export default ProjectCard;
