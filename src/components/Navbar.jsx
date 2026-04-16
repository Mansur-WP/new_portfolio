import React, { useEffect, useState } from "react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = "";
      navLinks.forEach(link => {
        const section = document.getElementById(link.href.replace("#", ""));
        if (section && window.scrollY >= section.offsetTop - 200) {
          current = link.href;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = e => {
      const targetId = e.currentTarget.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    };
    anchors.forEach(anchor => anchor.addEventListener("click", handleClick));
    return () =>
      anchors.forEach(anchor =>
        anchor.removeEventListener("click", handleClick)
      );
  }, []);

  return (
    <nav style={scrolled ? { borderBottomColor: "rgba(148,163,184,0.12)" } : {}}>
      <div className="logo">
        man<span>.</span>sur
      </div>
      <div className="nav-links">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <a
          href="#"
          className="btn btn-outline"
          onClick={e => {
            e.preventDefault();
            alert("Upload your CV PDF and set the path here.");
          }}
        >
          CV ↓
        </a>
        <a href="#contact" className="btn btn-primary">
          Get in touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
