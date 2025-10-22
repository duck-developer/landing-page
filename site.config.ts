export const siteConfig = {
  brandName: "Duck Developer",
  mascot: "Duckling",
  domain: "duckdevelopers.my.id",
  tagline: "Quietly crafting smart software.",
  taglines: [
    "Quietly crafting smart software.",
    "Code that floats — reliable and sleek.",
    "From ideas to production, we swim smooth.",
    "Your backend shouldn’t sink.",
  ],
  heroCopy:
    "Duck Developer is a small AI & backend studio helping startups build reliable, scalable systems — fast and clean.",
  services: [
    "AI integration",
    "Backend systems",
    "Automation",
    "API development",
  ],
  contact: {
    email: "duckdeveloper@outlook.com",
    whatsappNumber: "+6281234567890", // change to your WA number with country code
  },
  links: {
    github: "https://github.com/duck-developer",
    whatsapp: "https://wa.me/6281234567890", // derived from whatsappNumber (update both if you change)
    calendar: "https://cal.com/your-handle", // optional scheduling link
  },
  highlights: [
    { title: "AI Systems", icon: "🤖" },
    { title: "APIs", icon: "🔗" },
    { title: "Cloud", icon: "☁️" },
    { title: "Databases", icon: "🗄️" },
    { title: "Realtime", icon: "⚡" },
    { title: "DevOps", icon: "🛠️" },
  ],
  projects: [
    {
      title: "AI Chat Backend",
      type: "Backend · AI",
      description: "Production-ready chat backend with vector search and analytics.",
      href: "https://github.com/duckdeveloper/ai-chat-backend",
    },
    {
      title: "Serverless ETL",
      type: "Cloud · Data",
      description: "Serverless data pipeline on AWS with ingestion and transformations.",
      href: "https://github.com/duckdeveloper/serverless-etl",
    },
  ],
} as const;
