import React from "react";
import skills from "../data/skills";
import SkillGroup from "./SkillGroup";

const Skills = () => {
  return (
    <section className="section skills-section dark-section" id="skills">
      <div className="section-inner">
        <div className="skills-header">
          <div className="sec-tag sec-tag-light">
            <span className="sec-tag-dot"></span> WHAT I WORK WITH
          </div>
          <h2 className="sec-title sec-title-light">Skills &amp; Technologies</h2>
          <p className="sec-sub sec-sub-light">
            The core tools, languages, and automation systems I use to build modern applications.
          </p>
        </div>

        <div className="clean-skills-grid">
          {skills.map((group) => (
            <SkillGroup key={group.category} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
