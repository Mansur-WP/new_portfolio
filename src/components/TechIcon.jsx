import React from "react";

const TechIcon = ({ name, color = "currentColor", size = 20 }) => {
  const norm = name.toLowerCase();

  if (norm.includes("react")) {
    return (
      <svg width={size} height={size} viewBox="0 0 115.3 100" fill="none">
        <ellipse cx="57.65" cy="50" rx="16.5" ry="46.5" stroke={color} strokeWidth="6" transform="rotate(30 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="16.5" ry="46.5" stroke={color} strokeWidth="6" transform="rotate(90 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="16.5" ry="46.5" stroke={color} strokeWidth="6" transform="rotate(150 57.65 50)" />
        <circle cx="57.65" cy="50" r="9" fill={color} />
      </svg>
    );
  }

  if (norm.includes("next")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
        <path d="M9 16V8L16.5 17.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M15 8V12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes("javascript")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
        <path d="M8 12V16.5C8 17.3 7.3 18 6.5 18C5.7 18 5 17.3 5 16.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 17.5C14.8 18 16 18.2 17 17.7C18.2 17.1 18.5 15.6 17.7 14.7C16.8 13.8 15 13.5 15 12.3C15 11.4 15.9 10.7 16.9 10.9C17.6 11 18.3 11.4 18.7 11.8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (norm.includes("html") || norm.includes("css")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    );
  }

  if (norm.includes("n8n")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="5" cy="12" r="3" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.25" />
        <circle cx="19" cy="6" r="3" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.25" />
        <circle cx="19" cy="18" r="3" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.25" />
        <circle cx="12" cy="12" r="2.5" fill={color} />
        <path d="M8 12H9.5M14.5 12H16M13.5 10L17 7.5M13.5 14L17 16.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes("openai") || norm.includes("ai")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z" fill={color} fillOpacity="0.2" />
        <path d="M19 16L19.8 17.8L22 18.5L19.8 19.2L19 21L18.2 19.2L16 18.5L18.2 17.8L19 16Z" fill={color} />
      </svg>
    );
  }

  if (norm.includes("webhook") || norm.includes("sync")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill={color} fillOpacity="0.15" />
      </svg>
    );
  }

  if (norm.includes("laravel") || norm.includes("php")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} fillOpacity="0.15" />
        <path d="M3 12L12 17L21 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 17L12 22L21 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (norm.includes("python")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2C8.7 2 6.8 3.4 6.8 5.7V8H12V9H5.1C2.8 9 1 10.9 1 14.1C1 17.4 2.5 19 5.8 19H7.2V16.8C7.2 14.5 9.1 12.6 11.4 12.6H16.6V11.5C16.6 8.3 15.1 6.7 11.9 6.7H11.2V5.7C11.2 3.6 12.6 2 11.9 2Z" fill={color} fillOpacity="0.8" />
        <circle cx="8.9" cy="4.5" r="1.1" fill="#ffffff" />
        <path d="M12.1 22C15.3 22 17.2 20.6 17.2 18.3V16H12V15H18.9C21.2 15 23 13.1 23 9.9C23 6.6 21.5 5 18.2 5H16.8V7.2C16.8 9.5 14.9 11.4 12.6 11.4H7.4V12.5C7.4 15.7 8.9 17.3 12.1 17.3H12.8V18.3C12.8 20.4 11.4 22 12.1 22Z" fill={color} />
        <circle cx="15.1" cy="19.5" r="1.1" fill="#ffffff" />
      </svg>
    );
  }

  if (norm.includes("api")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14V10C4 8.9 4.9 8 6 8H9" />
        <path d="M9 16V8" />
        <path d="M14 16V8H17C18.1 8 19 8.9 19 10V11C19 12.1 18.1 13 17 13H14" />
        <circle cx="6" cy="12" r="1" fill={color} />
      </svg>
    );
  }

  if (norm.includes("sql") || norm.includes("database")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <ellipse cx="12" cy="5" rx="8" ry="3" fill={color} fillOpacity="0.2" />
        <path d="M4 5V12C4 13.7 7.6 15 12 15C16.4 15 20 13.7 20 12V5" />
        <path d="M4 12V19C4 20.7 7.6 22 12 22C16.4 22 20 20.7 20 19V12" />
      </svg>
    );
  }

  if (norm.includes("git")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" fill={color} fillOpacity="0.2" />
        <circle cx="6" cy="18" r="3" fill={color} fillOpacity="0.2" />
        <path d="M18 9A9 9 0 0 1 9 18" />
      </svg>
    );
  }

  if (norm.includes("wordpress")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.15" />
        <path d="M7 8L9.5 16L12 9.5L14.5 16L17 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (norm.includes("vite") || norm.includes("tool")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7L12 22L21 7L12 2Z" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.2" />
        <path d="M12 7V16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes("postman") || norm.includes("debug")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" fill={color} fillOpacity="0.2" />
      </svg>
    );
  }

  // Fallback icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8V12L15 15" />
    </svg>
  );
};

export default TechIcon;
