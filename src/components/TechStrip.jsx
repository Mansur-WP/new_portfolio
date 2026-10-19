import React from "react";

const technologies = [
  {
    name: "Python",
    color: "#3776AB",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.91 2C6.88 2 7.22 4.18 7.22 4.18L7.23 6.45H12V7.21H5.13S2 6.85 2 11.91C2 16.97 4.74 16.74 4.74 16.74H6.38V14.43S6.29 11.72 9.04 11.72H13.78S16.4 11.83 16.4 9.24V4.54S16.74 2 11.91 2ZM9.32 3.63C9.87 3.63 10.31 4.08 10.31 4.63C10.31 5.18 9.87 5.62 9.32 5.62C8.77 5.62 8.33 5.18 8.33 4.63C8.33 4.08 8.77 3.63 9.32 3.63Z"
          fill="#3776AB"
        />
        <path
          d="M12.09 22C17.12 22 16.78 19.82 16.78 19.82L16.77 17.55H12V16.79H18.87S22 17.15 22 12.09C22 7.03 19.26 7.26 19.26 7.26H17.62V9.57S17.71 12.28 14.96 12.28H10.22S7.6 12.17 7.6 14.76V19.46S7.26 22 12.09 22ZM14.68 20.37C14.13 20.37 13.69 19.92 13.69 19.37C13.69 18.82 14.13 18.38 14.68 18.38C15.23 18.38 15.67 18.82 15.67 19.37C15.67 19.92 15.23 20.37 14.68 20.37Z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    name: "Django",
    color: "#092E20",
    icon: (
      <span className="tech-badge-icon badge-django">dj</span>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: (
      <span className="tech-badge-icon badge-js">JS</span>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: (
      <span className="tech-badge-icon badge-ts">TS</span>
    ),
  },
  {
    name: "React",
    color: "#61DAFB",
    icon: (
      <svg width="20" height="20" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#000000",
    icon: (
      <span className="tech-badge-icon badge-next">N</span>
    ),
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#336791">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5v-3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v3.5C6.73 17.58 4.5 14.89 4.5 12c0-3.87 2.9-7.06 6.64-7.44.47-.05.9.29.93.76.03.45-.3.83-.75.88-2.94.31-5.32 2.8-5.32 5.8 0 2.22 1.34 4.14 3.25 4.96.44.19.75.62.75 1.1v2.44zm3.84-2.5c-.39.24-.9.12-1.14-.27-.79-1.29-2.18-2.15-3.7-2.23v-1.5c2.16.08 4.11 1.25 5.11 3.01.27.47.11 1.07-.27 1.32zM12 6.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
      </svg>
    ),
  },
  {
    name: "n8n",
    color: "#EA4B71",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="12" r="3" fill="#EA4B71" />
        <circle cx="18" cy="7" r="3" fill="#EA4B71" />
        <circle cx="18" cy="17" r="3" fill="#EA4B71" />
        <path d="M9 12H15M15 7L9 12L15 17" stroke="#EA4B71" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    color: "#10A37F",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0f172a">
        <path d="M22.28 9.87a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-4.64-2.06c-2.88 0-5.3 2.03-5.87 4.79a6.04 6.04 0 0 0-3.9 2.87 6.02 6.02 0 0 0 .74 7.08 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A6.07 6.07 0 0 0 13.25 24c2.88 0 5.3-2.03 5.87-4.79a6.05 6.05 0 0 0 3.9-2.87 6.02 6.02 0 0 0-.74-7.08zM13.25 22.5c-2.12 0-3.95-1.39-4.52-3.35.34-.2.92-.51 1.25-.69l3.87-2.23c.33-.19.53-.54.53-.92V9.89l1.64.95c.08.05.13.13.13.22v4.94a4.5 4.5 0 0 1-2.9 6.5zm-8.86-5.11a4.5 4.5 0 0 1-.55-7.1c.3.26.83.69 1.15.88l3.87 2.23c.33.19.74.19 1.07 0l4.68-2.7v1.89c0 .1-.05.18-.13.23l-4.28 2.47a4.5 4.5 0 0 1-5.81 2.1zM3.44 8.7a4.5 4.5 0 0 1 3.45-4.42c-.05.39-.1 1.06-.1 1.43v4.46c0 .38.2.73.53.92l4.68 2.7-1.64.95a.25.25 0 0 1-.26 0L5.82 12.27A4.5 4.5 0 0 1 3.44 8.7zm13.9 2.76-4.68-2.7 1.64-.95a.25.25 0 0 1 .26 0l4.28 2.47a4.5 4.5 0 0 1 2.38 5.97c-.3-.26-.83-.69-1.15-.88l-3.87-2.23a1.07 1.07 0 0 0-1.07 0l.51.32zm2.09-2.85c-.05-.39-.1-1.06-.1-1.43v-4.46c0-.38-.2-.73-.53-.92l-4.68-2.7 1.64-.95a.25.25 0 0 1 .26 0l4.28 2.47a4.5 4.5 0 0 1 2.38 5.97l-3.25 2.02zm-8.68-5.3c2.12 0 3.95 1.39 4.52 3.35-.34.2-.92.51-1.25.69l-3.87 2.23a1.07 1.07 0 0 0-.53.92v5.42l-1.64-.95a.25.25 0 0 1-.13-.22v-4.94a4.5 4.5 0 0 1 2.9-6.5z" />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#F05032">
        <path d="M21.62 10.74 13.26 2.38a1.76 1.76 0 0 0-2.49 0l-1.92 1.92 3.14 3.14a2.09 2.09 0 0 1 2.65 2.65l3.03 3.03a2.08 2.08 0 0 1 1.95 3.34 2.1 2.1 0 0 1-2.95 0 2.08 2.08 0 0 1 0-2.95l-2.9-2.9V8.89a2.09 2.09 0 0 1-1.24-1.24L9.4 4.51 2.38 11.53a1.76 1.76 0 0 0 0 2.49l8.36 8.36a1.76 1.76 0 0 0 2.49 0l8.39-8.39a1.76 1.76 0 0 0 0-2.49v-.36z" />
      </svg>
    ),
  },
];

const TechStrip = () => {
  // Duplicate technologies for smooth, continuous infinite marquee
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section className="tech-strip-wrapper" aria-label="Technologies">
      <div className="tech-strip-container">
        <div className="tech-strip-label">
          Technologies I work with
        </div>
        <div className="tech-strip-marquee-wrapper">
          <div className="tech-strip-track">
            {marqueeItems.map((tech, index) => (
              <div className="tech-chip" key={`${tech.name}-${index}`}>
                <span className="tech-chip-icon">{tech.icon}</span>
                <span className="tech-chip-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStrip;
