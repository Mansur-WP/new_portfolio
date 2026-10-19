import { useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Github from "./components/Github";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Intersection Observer for graceful subtle entrance animations
  useEffect(() => {
    const reveals = document.querySelectorAll(
      ".proj-card, .skill-group-col, .about-value-card, .gh-stat-card, .specialty-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechStrip />
        <Projects />
        <Skills />
        <About />
        <Github />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
