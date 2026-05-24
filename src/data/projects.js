const projects = [
  {
    icon: "🤖",
    title: "NaijaGrid AI News System",
    status: "Live",
    statusType: "live",
    problem: "Local AI news was slow and unreliable.",
    description: "Automated scraping, summarizing, and scheduled publishing (n8n + WordPress).",
    learned: "Automation architecture, API chaining, prompt engineering for content pipelines, and how to build systems that run without you.",
    stack: ["n8n", "WordPress", "OpenAI API", "REST APIs", "Automation"],
    links: [
      { label: "GitHub →", url: "#" },
      { label: "Live Demo →", url: "https://naijagrid.gt.tc/wp/" }
    ]
  },
  {
    icon: "🍽️",
    title: "Restaurant Website",
    status: "Live",
    statusType: "live",
    problem: "Local restaurants had no professional web presence.",
    description: "Designed and built a multi-page restaurant website with menu browsing, contact form, and reservation section. Focused on clean UI, mobile responsiveness and fast load times.",
    learned: "Frontend structure, component thinking, responsive design principles, and how UX decisions affect real user behaviour.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    links: [
      { label: "GitHub →", url: "https://github.com/Mansur-WP/tastehaven" },
      { label: "Live Demo →", url: "https://ember-oak-pi.vercel.app/" }
    ]
  },
  {
    icon: "📸",
    title: "PixelStudio SaaS",
    status: "In Progress",
    statusType: "wip",
    problem: "Photography studios lack affordable, multi-tenant management tools.",
    description: "Building a multi-tenant SaaS for photography studio management — bookings, client management, invoicing and admin dashboards. Originally in Next.js, now being rebuilt in Laravel + Blade for better performance and maintainability.",
    learned: "Multi-tenancy architecture, SaaS design patterns, and the real cost of framework decisions — migrating 3000+ lines of code teaches you what documentation doesn't.",
    stack: ["Laravel", "PHP", "Blade", "SQLite", "Next.js"],
    links: [
      { label: "GitHub →", url: "https://github.com/Mansur-WP/pixelstudio-clone" }
    ]
  },
  {
    icon: "🧠",
    title: "Cognix – AI Copilot",
    status: "Live",
    statusType: "live",
    problem: "People wanted a lightweight AI assistant with a smooth UI.",
    description: "Gemini-powered chat with an optimized async Python backend and modern dark-mode frontend.",
    learned: "FastAPI server setup, API integration with Google Generative AI, system prompting for strict conversational control, and modern frontend styling (glass-morphism & CSS animations).",
    stack: ["HTML/CSS/JS", "Python", "FastAPI", "Google Gemini API"],
    links: [
      { label: "GitHub →", url: "https://github.com/Mansur-WP/cognix-ai-copilot" },
      { label: "Live Demo →", url: "https://cognix-copilot.netlify.app" }

    ]

  },
  {
    icon: "🌱",
    title: "KodePath",
    status: "Live",
    statusType: "live",
    problem:
      "Beginners don’t know what to learn first or why.",
    description:
      "Helped users discover languages by use-case, difficulty, and an interactive quiz.",
    learned:
      "Building a multi-page React app with React Router, managing state with localStorage for bookmarks, structuring reusable component architecture, and designing an intuitive UI for a non-technical audience.",
    stack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
    ],
    links: [
      { label: "Live Demo →", url: "https://kodepath.vercel.app" },
      { label: "GitHub →", url: "https://github.com/Mansur-WP/kodepath" },
    ],
  },
  {
    icon: "🌊",
    title: "TaskFlowr",
    status: "In Progress",
    statusType: "wip",
    problem:
      "Tasks get scattered and workflows feel cluttered.",
    description:
      "Productivity app with task tracking, priorities, analytics, themes, and a smooth dashboard.",
    learned:
      "Improved my understanding of full-stack Flask development, responsive dashboard UI design, authentication systems, task state management, drag-and-drop interactions, and building scalable SaaS-style applications with modern UX principles.",
    stack: [
      "Python",
      "Flask",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "SQLAlchemy",
      "Flask-Login",
      "Jinja2",
    ],
    links: [
      { label: "GitHub →", url: "https://github.com/Mansur-WP/taskflowr" },
      { label: "Live Demo →", url: "https://taskflowr.vercel.app" },
    ],
  }
];

export default projects;

