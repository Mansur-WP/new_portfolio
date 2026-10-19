import React from "react";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-brand">
          MN<span className="brand-dot">.</span>
        </div>
        <p className="footer-text">
          Built with purpose by{" "}
          <a
            href="https://github.com/Mansur-WP/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Mansur Nasir
          </a>{" "}
          · Software Engineer & AI Automation Engineer · {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a href="#home" className="footer-nav-link">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
