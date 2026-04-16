import React from "react";
import heroImage from "../assets/image.png";

const Hero = () => (
  <section className="hero" id="home" aria-label="Hero section">
    <div className="hero-inner">
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot"></span> Open to opportunities
        </div>
        <h1 className="hero-name">
          Hi, I'm<br />
          <span>Mansur</span>
        </h1>
        <p className="hero-tag">
          I build <strong>automation systems, AI tools</strong> and{" "}
          <strong>scalable web apps</strong> — solving real-world problems
          with clean, purposeful code.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/Mansur-WP/" title="GitHub" target="_blank" rel="noopener noreferrer">GH</a>
          <a href="#" title="LinkedIn">in</a>
          <a href="#" title="YouTube">YT</a>
          <a href="https://wa.me/2349042834479" title="WhatsApp">WA</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="glow-orb orb1"></div>
        <div className="glow-orb orb2"></div>
        <div className="photo-wrap">
          <div className="photo-circle">
            <img
              src={heroImage}
              alt="Portrait of Mansur, software engineer"
            />
          </div>
          <div className="deco-ring"></div>
          <div className="deco-ring2"></div>
          <div className="rotate-wrap">
            <div className="rotate-circle">
              <svg className="rotate-text" viewBox="0 0 90 90">
                <defs>
                  <path
                    id="cp"
                    d="M45,45 m-33,0 a33,33 0 1,1 66,0 a33,33 0 1,1 -66,0"
                  />
                </defs>
                <text>
                  <textPath href="#cp">HIRE ME · LET'S BUILD · </textPath>
                </text>
              </svg>
              <span className="center-arrow">↗</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
