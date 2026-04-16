import React from "react";

const values = [
  {
    icon: "⚙️",
    title: "Systems over tasks",
    desc: "I'd rather build something that runs 1000 times automatically than do it manually once.",
  },
  {
    icon: "🌍",
    title: "Local-first thinking",
    desc: "The best software I can build is software that solves real Nigerian problems — not just global templates.",
  },
  {
    icon: "📖",
    title: "Always learning",
    desc: "Currently deep in Python, Laravel architecture, and AI system design. Learning in public, building in real-time.",
  },
];

function ValueItem({ icon, title, desc }) {
  return (
    <div className="value-item">
      <div className="value-icon" aria-hidden="true">{icon}</div>
      <div>
        <div className="value-title">{title}</div>
        <div className="value-desc">{desc}</div>
      </div>
    </div>
  );
}

const About = () => (
  <section className="section" id="about">
    <div className="section-inner">
      <div className="sec-tag">My story</div>
      <h2 className="sec-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm <strong>Mansur</strong> — a software engineering student at
            Northwest University Kano, Nigeria. I don't just write code. I
            build systems that do things while I sleep.
          </p>
          <p>
            My journey started with curiosity about how things work on the
            internet. That curiosity turned into building real products — an
            automated AI news pipeline, a SaaS platform for photographers,
            and now an AI chatbot for local businesses.
          </p>
          <p>
            What drives me isn't chasing trends. It's{" "}
            <strong>solving problems that matter in my environment</strong> —
            Nigeria, the North, the people around me. I want to build tools
            that work here, for us.
          </p>
          <p>
            I also run a YouTube channel sharing Islamic reminders with Muslim
            youth — because building the dunya and the deen aren't opposites.
            They can coexist.
          </p>
        </div>
        <aside className="about-values" aria-label="Core values">
          {values.map((v, i) => (
            <ValueItem key={i} {...v} />
          ))}
        </aside>
      </div>
    </div>
  </section>
);

export default About;
