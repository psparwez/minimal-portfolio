import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
} from "lucide-react";

export const skills = [
  { name: "JavaScript", icon: Code, level: 95 },
  { name: "TypeScript", icon: Code, level: 90 },
  { name: "React", icon: Code, level: 95 },
  { name: "Next.js", icon: Globe, level: 90 },
  { name: "Node.js", icon: Server, level: 85 },
  { name: "Python", icon: Code, level: 80 },
  { name: "PostgreSQL", icon: Database, level: 85 },
  { name: "MongoDB", icon: Database, level: 80 },
  { name: "AWS", icon: Server, level: 75 },
  { name: "Docker", icon: Server, level: 70 },
  { name: "UI/UX Design", icon: Palette, level: 85 },
  { name: "Mobile Dev", icon: Smartphone, level: 75 },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chat assistant powered by OpenAI's GPT API with custom training data and context-aware responses.",
    tech: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for data visualization with real-time charts, filtering capabilities, and export functionality.",
    tech: ["D3.js", "React", "Node.js", "PostgreSQL", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS for a responsive design.",
    tech: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blogging platform with user authentication, markdown support, and social sharing capabilities.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
];

export const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description:
      "Led development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
    achievements: [
      "Improved application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    location: "New York, NY",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to implement pixel-perfect UIs.",
    achievements: [
      "Built 15+ production applications",
      "Reduced bug reports by 50%",
      "Implemented automated testing suite",
    ],
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions",
    period: "2018 - 2020",
    location: "Austin, TX",
    description:
      "Specialized in React development and responsive web design. Created reusable component libraries and optimized web performance.",
    achievements: [
      "Created component library used across 10+ projects",
      "Improved page load times by 35%",
      "Mentored 3 junior developers",
    ],
  },

  {
    title: "Intern - Web Development",
    company: "TechInterns Co.",
    period: "2017 - 2018",
    location: "Remote",
    description:
      "Assisted in development of client websites and internal tools. Gained experience in HTML, CSS, and JavaScript.",
    achievements: [
      "Contributed to 5+ client projects",
      "Learned modern web development practices",
      "Participated in code reviews and team meetings",
    ],
  },
];
