import React from "react";
import skills from "../data/skills";
import SkillGroup from "./SkillGroup";

const Skills = () => (
  <div className="section" id="skills">
    <div className="section-inner">
      <div className="sec-tag">What I work with</div>
      <h2 className="sec-title">Skills</h2>
      <p className="sec-sub">Kept honest — no fake expert bars.</p>
      <div className="skills-grid">
        {skills.map((group, idx) => (
          <SkillGroup key={idx} {...group} />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
