import React from "react";

const SkillGroup = ({ group, items }) => (
  <div className="skill-group">
    <h4>{group}</h4>
    <div className="skill-items">
      {items.map((item, idx) => (
        <div className="skill-item" key={idx}>
          <span>{item.name}</span>
          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{ width: item.level + "%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillGroup;
