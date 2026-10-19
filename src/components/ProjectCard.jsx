import React from "react";

const ProjectCard = ({
  icon,
  title,
  status,
  statusType,
  description,
  stack,
  image,
  links,
}) => {
  const maxTags = 3;
  const shownTags = stack?.slice(0, maxTags) ?? [];
  const remainingCount = Math.max((stack?.length ?? 0) - shownTags.length, 0);

  return (
    <article className="proj-card">
      <div className="proj-header">
        <div className="proj-title-group">
          <span className="proj-icon-wrapper" aria-hidden="true">
            {icon}
          </span>
          <h3 className="proj-title">{title}</h3>
        </div>
        <span className={`proj-status-badge status-${statusType}`}>
          {status}
        </span>
      </div>

      <div className="proj-body">
        <div className="proj-info">
          <p className="proj-desc">{description}</p>

          <div className="proj-stack-tags">
            {shownTags.map((tech) => (
              <span className="stack-tag" key={tech}>
                {tech}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="stack-tag stack-tag-more">
                +{remainingCount}
              </span>
            )}
          </div>

          <div className="proj-actions">
            {links?.map((link) => (
              <a
                href={link.url}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-action-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {image && (
          <div className="proj-preview-wrap">
            <img
              src={image}
              alt={`${title} interface preview`}
              className="proj-preview-img"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
