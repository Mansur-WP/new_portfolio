import React from "react";

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    iconBg: "#eff6ff",
    title: "Systems over tasks",
    desc: "I'd rather build something that runs 1000 times automatically than do it manually once.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    iconBg: "#f0fdfa",
    title: "Local-first thinking",
    desc: "The best software solves real Nigerian problems — not just global templates with a Naira sign slapped on.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
    iconBg: "#fffbeb",
    title: "Builder in public",
    desc: "6 projects shipped while in university. Each one taught me something documentation never could.",
  },
];

const About = () => (
  <section className="section about-section" id="about">
    <div className="section-inner">
      <div className="sec-tag">
        <span className="sec-tag-dot"></span> MY STORY
      </div>
      <h2 className="sec-title">About Me</h2>

      <div className="about-grid-layout">
        <div className="about-narrative">
          <p>
            I'm <strong>Mansur</strong> — a software engineering student at Northwest University Kano,
            Nigeria, building real products while still in school.
          </p>
          <p>
            I don't just study code. I ship it. So far I've built an AI-powered news pipeline,
            a SaaS platform for photographers, a beginner coding guide, and an AI chatbot —
            each one solving a real problem I noticed around me.
          </p>
          <p>
            What drives me is simple: build systems that work for Nigeria, for the North, for
            the people around me. Not just global templates copy-pasted into our context.
          </p>
          <p>
            Outside of code, I run a YouTube channel sharing Islamic reminders for Muslim youth
            — because building the dunya and the deen aren't opposites.
          </p>

          <div className="about-stats-row" aria-label="Quick stats">
            <div className="about-stat-card">
              <span className="about-stat-val">6</span>
              <span className="about-stat-lbl">Projects Built</span>
            </div>
            <div className="about-stat-card">
              <span className="about-stat-val">2025</span>
              <span className="about-stat-lbl">Started Coding</span>
            </div>
          </div>
        </div>

        <div className="about-values-stack">
          {values.map((v) => (
            <div className="about-value-card" key={v.title}>
              <div
                className="about-value-icon"
                style={{ backgroundColor: v.iconBg }}
                aria-hidden="true"
              >
                {v.icon}
              </div>
              <div className="about-value-content">
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
