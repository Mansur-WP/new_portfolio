import React, { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "#home";
      const sections = ["home", "projects", "skills", "about", "github", "contact"];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            current = `#${sectionId}`;
            break;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(href.replace("#", ""));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCvDownload = (e) => {
    e.preventDefault();
    alert("Mansur's CV is being finalized. In the meantime, please connect via email or LinkedIn!");
  };

  return (
    <header className={`navbar-header ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Mark */}
        <a href="#home" className="navbar-brand" onClick={(e) => handleLinkClick(e, "#home")}>
          MN<span className="brand-dot">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar-nav-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href ? "nav-link-active" : ""}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="navbar-actions">
          {/* Subtle light/dark indicator icon */}
          <button
            className="theme-toggle-btn"
            title="Light Theme"
            aria-label="Theme toggle"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>

          {/* CV Button */}
          <button
            onClick={handleCvDownload}
            className="btn btn-outline-pill btn-sm btn-cv"
            type="button"
          >
            CV <span className="cv-icon">↓</span>
          </button>

          {/* Let's Talk Button */}
          <a
            href="#contact"
            className="btn btn-navy-pill btn-sm"
            onClick={(e) => handleLinkClick(e, "#contact")}
          >
            Let's Talk →
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-hamburger"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? "bar-1-open" : ""}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? "bar-2-open" : ""}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? "bar-3-open" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "drawer-open" : ""}`}>
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${active === link.href ? "mobile-link-active" : ""}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className="mobile-drawer-ctas">
            <button
              onClick={handleCvDownload}
              className="btn btn-outline-pill btn-block"
              type="button"
            >
              Download CV ↓
            </button>
            <a
              href="#contact"
              className="btn btn-navy-pill btn-block"
              onClick={(e) => handleLinkClick(e, "#contact")}
            >
              Let's Talk →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
