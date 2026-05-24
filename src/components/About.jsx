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
    desc: "The best software solves real Nigerian problems — not just global templates with a Naira sign slapped on.",
  },
  {
    icon: "📦",
    title: "Builder in public",
    desc: "6 projects shipped while in university. Each one taught me something documentation never could.",
  },
  // {
  //   icon: "📖",
  //   title: "Always learning",
  //   desc: "Currently deep in Python, ML foundations, Laravel architecture, and AI system design.",
  // },
];

function ValueItem({ icon, title, desc }) {
  return (
    <div className="value-item">
      <div className="value-icon" aria-hidden="true">
        {icon}
      </div>
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
            Northwest University Kano, Nigeria, building real products while
            still in school.
          </p>
          <p>
            I don't just study code. I ship it. So far I've built an AI-powered
            news pipeline, a SaaS platform for photographers, a beginner coding
            guide, and an AI chatbot — each one solving a real problem I
            noticed around me.
          </p>
          <p>
            What drives me is simple: build systems that work for Nigeria, for
            the North, for the people around me. Not just global templates
            copy-pasted into our context.
          </p>
          <p>
            Outside of code, I run a YouTube channel sharing Islamic reminders
            for Muslim youth — because building the dunya and the deen aren't
            opposites.
          </p>

          <div className="about-stats" aria-label="Quick stats">
            <div className="about-stat">
              <div className="about-stat-number">6</div>
              <div className="about-stat-label">Projects Built</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-number">2025</div>
              <div className="about-stat-label">Started Coding</div>
            </div>
            {/* <div className="about-stat">
              <div className="about-stat-number">1</div>
              <div className="about-stat-label">University</div>
            </div> */}
          </div>
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

