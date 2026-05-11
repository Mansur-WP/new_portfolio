const projects = [
  {
    icon: "🤖",
    title: "NaijaGrid AI News System",
    status: "Live",
    statusType: "live",
    problem: "Local news content was slow, manual and inconsistent.",
    description: "Built an automated blog pipeline using n8n + WordPress that scrapes, summarizes and publishes AI-generated news articles with zero manual input. Runs on a schedule and handles formatting, categories and SEO metadata automatically.",
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
    status: "MVP", 
    statusType: "live",
    problem: "A need for a lightweight, intelligent AI assistant with a seamless user interface for smarter task execution.",
    description: "A full-stack AI conversational interface powered by Google's Gemini LLM. It features a modern, responsive frontend with a premium dark-mode aesthetic and an optimized async Python backend for low-latency AI responses.",
    learned: "FastAPI server setup, API integration with Google Generative AI, system prompting for strict conversational control, and modern frontend styling (glass-morphism & CSS animations).",
    stack: ["HTML/CSS/JS", "Python", "FastAPI", "Google Gemini API"],
    links: [
      { label: "GitHub →", url: "https://github.com/Mansur-WP/cognix-ai-copilot" },
      { label: "Live Demo →", url: "https://cognix-copilot.netlify.app" }

    ]

  }
];

export default projects;
