import React from "react";
import portraitImg from "../assets/mansur-hero-split-clean.png";

const Hero = () => {
  return (
    <section className="hero-section" id="home" aria-label="Hero">
      {/* Background SVG circuit lines connecting components through the transparent portrait */}
      <svg
        className="hero-circuit-canvas"
        viewBox="0 0 1400 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Blue circuit branch tracing from center portrait directly to AI AUTOMATION on the LEFT */}
        <path
          d="M 580 470 L 450 470 L 360 535 L 195 535 L 195 572"
          stroke="#2563eb"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="580" cy="470" r="5" fill="#2563eb" />
        <circle cx="450" cy="470" r="4" fill="#2563eb" />
        <circle cx="360" cy="535" r="4.5" fill="#2563eb" />
        <circle cx="195" cy="535" r="4" fill="#2563eb" />
        <circle cx="195" cy="572" r="5" fill="#2563eb" />

        {/* Yellow/amber circuit branch tracing from center portrait to CODE on the RIGHT */}
        <path
          d="M 800 320 L 920 320 L 980 270 L 1050 270"
          stroke="#f59e0b"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 920 320 L 970 375 L 1040 375"
          stroke="#f59e0b"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="800" cy="320" r="5" fill="#f59e0b" />
        <circle cx="920" cy="320" r="4" fill="#f59e0b" />
        <circle cx="1050" cy="270" r="5" fill="#f59e0b" />
        <circle cx="1040" cy="375" r="4" fill="#f59e0b" />
      </svg>

      <div className="hero-container-main">
        {/* ================= LEFT COLUMN: INTRO + AI AUTOMATION ================= */}
        <div className="hero-col-left">
          {/* Top Intro Block */}
          <div className="hero-intro-box">
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span className="status-text">Open to opportunities</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm
              <span className="hero-name">
                <span className="name-blue">Mansur</span>{" "}
                <span className="name-dark">Nasir</span>
              </span>
            </h1>

            <div className="hero-subtitle">Software Engineer</div>

            <p className="hero-description">
              I build modern web applications and intelligent automations that
              solve real problems, save time, and create value for businesses and
              individuals.
            </p>

            <div className="hero-action-btns">
              <a href="#projects" className="btn-hero-primary">
                View My Projects <span className="btn-arrow">→</span>
              </a>
              <a href="#contact" className="btn-hero-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-social-strip" aria-label="Social links">
              {/* GitHub */}
              <a
                href="https://github.com/Mansur-WP/"
                className="social-btn social-github"
                title="GitHub Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                className="social-btn social-linkedin"
                title="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.27 1.64 1.64 0 0 0 0-3.27z" />
                </svg>
              </a>

              {/* Instagram (@_justamigo_) */}
              <a
                href="https://www.instagram.com/_justamigo_/"
                className="social-btn social-instagram"
                title="Instagram (@_justamigo_)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2349042834479"
                className="social-btn social-whatsapp"
                title="Chat on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87 1.08-.87 2.64 0 1.56 1.13 3.06 1.29 3.27.15.2 2.18 3.49 5.4 4.75 2.68 1.04 3.22.83 3.81.78.58-.06 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37-.31-.16-1.85-.92-2.14-1.02-.29-.1-.5-.16-.72.16-.21.31-.83 1.02-1.01 1.23-.18.21-.37.24-.69.08-.31-.16-1.34-.5-2.56-1.58-.94-.84-1.58-1.88-1.77-2.2-.18-.31-.02-.49.14-.64.14-.14.31-.37.47-.56.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.56-.08-.16-.72-1.74-.98-2.38-.26-.63-.52-.54-.72-.55z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Specialty Block: AI AUTOMATION (now on LEFT) */}
          <div className="hero-ai-block hero-ai-left">
            <div className="ai-robot-badge" aria-hidden="true">
              <svg
                width="58"
                height="58"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="30" y="6" width="4" height="8" rx="2" fill="#2563eb" />
                <circle cx="32" cy="6" r="4.5" fill="#3b82f6" />
                <rect x="8" y="24" width="4" height="12" rx="2" fill="#2563eb" />
                <rect x="52" y="24" width="4" height="12" rx="2" fill="#2563eb" />
                <rect
                  x="12"
                  y="14"
                  width="40"
                  height="34"
                  rx="10"
                  fill="#2563eb"
                />
                <rect
                  x="17"
                  y="20"
                  width="30"
                  height="22"
                  rx="6"
                  fill="#1d4ed8"
                />
                <rect x="22" y="26" width="6" height="7" rx="3" fill="#ffffff" />
                <rect x="36" y="26" width="6" height="7" rx="3" fill="#ffffff" />
                <path
                  d="M26 36C27.5 38 30.5 38.8 32 38.8C33.5 38.8 36.5 38 38 36"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="ai-title-row">
              <span className="ai-title-dot"></span>
              <h3 className="ai-heading">
                <span className="ai-brand">AI</span> AUTOMATION
              </h3>
            </div>
          </div>
        </div>

        {/* ================= CENTER COLUMN: DOMINANT TRANSPARENT PORTRAIT ================= */}
        <div className="hero-col-center">
          <div className="hero-portrait-stage">
            <img
              src={portraitImg}
              alt="Mansur Nasir — Software Engineer split portrait"
              className="hero-main-portrait"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* ================= RIGHT COLUMN: CODE / SOFTWARE ENGINEERING ================= */}
        <div className="hero-col-right">
          {/* Software Engineering Block (now on RIGHT) */}
          <div className="hero-swe-block hero-swe-right">
            <div className="swe-header">
              <span className="swe-code-badge">&lt;/&gt;</span>
              <div className="swe-titles">
                <span className="swe-title-main">CODE</span>
                <span className="swe-title-sub">SOFTWARE ENGINEERING</span>
              </div>
            </div>
          </div>

          {/* Faint UI Mockup card in the lower right background */}
          <div className="hero-faint-mockup" aria-hidden="true">
            <div className="mockup-bar mockup-bar-lg"></div>
            <div className="mockup-bar mockup-bar-md"></div>
            <div className="mockup-bar mockup-bar-sm"></div>
            <span className="mockup-sparkle">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
