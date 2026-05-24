const projects = [
  {
    icon: "🤖",
    title: "NaijaGrid AI News System",
    status: "Live",
    statusType: "live",
    problem: "Local AI news was slow and inconsistent.",
    description: "Automated an n8n + WordPress pipeline to scrape, summarize, and publish AI news on a schedule—no manual input.",
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
    problem: "A need for a lightweight, intelligent AI assistant with a seamless user interface for smarter task execution.",
    description: "A full-stack AI conversational interface powered by Google's Gemini LLM. It features a modern, responsive frontend with a premium dark-mode aesthetic and an optimized async Python backend for low-latency AI responses.",
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
      "Complete beginners have no clear starting point when trying to explore programming languages — they don't know what each language does, how hard it is, or which one to learn first.",
    description:
      "A clean, beginner-friendly web platform that helps newcomers discover programming languages, understand their use cases, explore learning categories, and find their perfect first language through an interactive quiz.",
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
      "Students, developers, and busy professionals often struggle with scattered tasks, poor workflow organization, and productivity tools that feel cluttered or outdated.",
    description:
      "TaskFlowr is a modern productivity and workflow management web app focused on clean design, smooth interactions, and efficient task organization. It features task tracking, priorities, categories, analytics, dark/light themes, and a futuristic dashboard experience designed to make productivity feel effortless.",
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

