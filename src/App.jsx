import { useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Github from "./components/Github";
import Contact from "./components/Contact";

function App() {
  // Scroll reveal observer
  useEffect(() => {
    const reveals = document.querySelectorAll(
      ".proj-card, .skill-group, .value-item, .gh-stat, .sec-tag, .sec-title, .sec-sub, .about-text, .contact-left, .contact-form, .gh-left"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal", "visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    reveals.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Github />
        <Contact />
      </main>
      <footer>
        <p>
          Built with purpose by{" "}
          <a
            href="https://github.com/Mansur-WP/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mansur
          </a>{" "}
          · {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}

export default App;
