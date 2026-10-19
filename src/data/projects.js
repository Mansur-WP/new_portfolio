import naijagridImg from "../assets/projects/naijagrid.png";
import restaurantImg from "../assets/projects/restaurant.png";
import pixelstudioImg from "../assets/projects/pixelstudio.png";
import cognixImg from "../assets/projects/cognix.png";
import kodepathImg from "../assets/projects/kodepath.png";
import taskflowrImg from "../assets/projects/taskflowr.png";

const projects = [
  {
    icon: "🤖",
    title: "NaijaGrid AI News System",
    status: "Live",
    statusType: "live",
    description: "Automated scraping, summarizing, and scheduled publishing (n8n + OpenAI).",
    stack: ["n8n", "WordPress", "OpenAI API", "REST APIs", "Automation"],
    image: naijagridImg,
    links: [
      { label: "GitHub →", url: "https://github.com/Mansur-WP/" },
      { label: "Live Demo →", url: "https://naijagrid.gt.tc/wp/" }
    ]
  },
  {
    icon: "🍽️",
    title: "Restaurant Website",
    status: "Live",
    statusType: "live",
    description: "Designed and built a multi-page restaurant website with menu and booking.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: restaurantImg,
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
    description: "Multi-tenant SaaS for photography studio management.",
    stack: ["Laravel", "PHP", "Blade", "SQLite", "Next.js"],
    image: pixelstudioImg,
    links: [
      { label: "GitHub →", url: "https://github.com/Mansur-WP/pixelstudio-clone" },
      { label: "Live Demo →", url: "https://github.com/Mansur-WP/pixelstudio-clone" }
    ]
  },
  {
    icon: "🧠",
    title: "Cognix – AI Copilot",
    status: "Live",
    statusType: "live",
    description: "Gemini-powered chat with an optimized async Python backend and modern UI.",
    stack: ["HTML/CSS/JS", "Python", "FastAPI", "Google Gemini API"],
    image: cognixImg,
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
    description: "Helped users discover programming languages by use-case, difficulty, and more.",
    stack: ["React", "React Router", "Tailwind CSS", "Framer Motion", "JavaScript"],
    image: kodepathImg,
    links: [
      { label: "Live Demo →", url: "https://kodepath.vercel.app" },
      { label: "GitHub →", url: "https://github.com/Mansur-WP/kodepath" }
    ]
  },
  {
    icon: "🌊",
    title: "TaskFlowr",
    status: "In Progress",
    statusType: "wip",
    description: "Productivity app with task tracking, priorities, analytics, and automation.",
    stack: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    image: taskflowrImg,
    links: [
      { label: "GitHub →", url: "https://github.com/Mansur-WP/taskflowr" },
      { label: "Live Demo →", url: "https://taskflowr.vercel.app" }
    ]
  }
];

export default projects;
