// Blog Posts Data
export const blogPosts = [
  {
    id: 1,
    title: "The Art of Minimalist Code",
    excerpt: "Why less is more when it comes to writing maintainable software. Exploring the philosophy behind clean architecture.",
    content: `
      # The Art of Minimalist Code
      
      In a world where we're constantly adding features, libraries, and complexity, 
      there's something powerful about taking a step back and asking: "What can we remove?"
      
      ## The Philosophy
      
      Minimalist code isn't about writing less code for the sake of it. It's about:
      - Writing code that does exactly what it needs to do
      - Removing unnecessary abstractions
      - Making every line count
      
      ## Real-World Example
      
      I recently refactored a 500-line component down to 150 lines by removing 
      unnecessary state management and simplifying the logic. The result? 
      Faster performance, easier testing, and happier developers.
      
      ## Key Takeaways
      
      1. Question every abstraction
      2. Delete code aggressively
      3. Optimize for readability first
    `,
    date: "2026-04-15",
    readTime: "8 min",
    category: "Engineering",
    author: "Akshat Dhanak",
    tags: ["clean-code", "architecture", "best-practices"],
    featured: true
  },
  {
    id: 2,
    title: "Building in Public: Year One",
    excerpt: "Lessons learned from sharing my journey openly. The good, the bad, and the unexpected connections.",
    content: `
      # Building in Public: Year One
      
      A year ago, I decided to share everything I was working on publicly. 
      Here's what happened...
    `,
    date: "2026-03-22",
    readTime: "12 min",
    category: "Reflection",
    author: "Akshat Dhanak",
    tags: ["building-in-public", "lessons", "community"],
    featured: true
  },
  // Add more blog posts here
];

// Achievements Data
export const achievements = [
  {
    year: "2026",
    title: "Innovation Award Winner",
    organization: "Tech Excellence Summit",
    description: "Recognized for pioneering work in experimental UI/UX design patterns that challenge conventional web interactions.",
    icon: "🏆",
    color: "from-[#fbbf24] to-[#f59e0b]",
    stats: { impact: "10K+ developers inspired", reach: "Global" },
    details: {
      date: "March 2026",
      location: "San Francisco, CA",
      achievement: "First place in Innovation Category",
      recognition: "Featured in TechCrunch and The Verge"
    }
  },
  {
    year: "2025",
    title: "Open Source Contributor of the Year",
    organization: "GitHub Community",
    description: "Contributed to 50+ repositories with meaningful PRs, helping shape the future of web development tools.",
    icon: "⭐",
    color: "from-[#4f7df5] to-[#8b5cf6]",
    stats: { contributions: "500+ commits", projects: "50+ repos" },
    details: {
      date: "December 2025",
      topProjects: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      impact: "Merged PRs affecting 1M+ developers"
    }
  },
  // Add more achievements here
];

// Skills Data (organized by category)
export const skills = {
  frontend: [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "TypeScript", level: 88, icon: "📘" },
    { name: "Tailwind CSS", level: 92, icon: "🎨" },
    { name: "Framer Motion", level: 85, icon: "🎬" },
  ],
  backend: [
    { name: "Node.js", level: 87, icon: "🟢" },
    { name: "Python", level: 90, icon: "🐍" },
    { name: "PostgreSQL", level: 82, icon: "🐘" },
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "GraphQL", level: 80, icon: "◈" },
  ],
  tools: [
    { name: "Git", level: 93, icon: "📦" },
    { name: "Docker", level: 78, icon: "🐳" },
    { name: "AWS", level: 75, icon: "☁️" },
    { name: "Figma", level: 88, icon: "🎨" },
    { name: "VS Code", level: 95, icon: "💻" },
  ],
  aiml: [
    { name: "TensorFlow", level: 82, icon: "🧠" },
    { name: "PyTorch", level: 80, icon: "🔥" },
    { name: "Scikit-learn", level: 85, icon: "📊" },
    { name: "OpenAI API", level: 88, icon: "🤖" },
    { name: "LangChain", level: 83, icon: "⛓️" },
  ]
};

// Projects Data
export const projects = [
  {
    id: 1,
    title: "AI-Powered Code Review Assistant",
    description: "An intelligent tool that analyzes pull requests and provides contextual feedback using GPT-4.",
    image: "/projects/code-review.jpg",
    tags: ["AI/ML", "React", "Python", "OpenAI"],
    github: "https://github.com/yourusername/project",
    live: "https://project-demo.com",
    featured: true,
    stats: {
      stars: "1.2K",
      users: "5K+",
      impact: "Saved 100+ hours"
    }
  },
  // Add more projects here
];

// Social Links
export const socialLinks = {
  github: "https://github.com/akshatdhanak",
  linkedin: "https://www.linkedin.com/in/akshat-soni-b984bb283/",
  twitter: "https://twitter.com/akshatdhanak",
  email: "akshatdhanak@gmail.com",
  resume: "https://drive.google.com/file/d/1kydr-qtTHF_EWJci0GesqMw7tZCMu2D9/view?usp=share_link"
};

// Site Metadata
export const siteMetadata = {
  title: "Akshat Dhanak - Full-Stack Engineer & Data Scientist",
  description: "Portfolio of Akshat Dhanak - Building production-grade full-stack applications and AI/ML systems",
  keywords: ["Full-Stack Engineer", "Data Scientist", "React", "Next.js", "Machine Learning", "Python"],
  author: "Akshat Dhanak",
  siteUrl: "https://my-portfolio1-cyan.vercel.app",
  image: "/og-image.jpg"
};
