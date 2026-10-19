import React from "react";
import TechIcon from "./TechIcon";

const SkillGroup = ({ category, tagline, items }) => {
  return (
    <div className="clean-skill-group">
      <div className="clean-group-header">
        <h3 className="clean-group-title">{category}</h3>
        <p className="clean-group-tagline">{tagline}</p>
      </div>

      <div className="clean-items-list">
        {items.map((item) => (
          <div
            className="clean-skill-row"
            key={item.name}
            style={{ "--accent-color": item.color }}
          >
            <div className="clean-skill-left">
              <span className="clean-icon-wrap">
                <TechIcon name={item.name} color={item.color} size={20} />
              </span>
              <span className="clean-skill-name">{item.name}</span>
            </div>
            <span className="clean-skill-type">{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;
