export const projects = [
  {
    id: 1,
    title: "LearnFlow LMS",
    category: "Full Stack Application",
    image: "/projects/learnflow.png",

    description:
      "A full-stack Learning Management System with dedicated experiences for students, instructors and administrators, covering the complete learning workflow from course creation to completion.",

    features: [
      "JWT authentication & password reset",
      "Student, instructor & admin roles",
      "Course creation and approval workflow",
      "Enrollment & progress tracking",
      "Quizzes, reviews & certificates",
      "Cloudinary image uploads",
    ],

    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],

    github: "https://github.com/bhupender2412/learnflow-lms",
    demo: "https://learnflow-lms-xi.vercel.app/",

    featured: true,
  },

  {
    id: 2,
    title: "LogPulse",
    category: "Developer Infrastructure",
    image: "/projects/logpulse.png",

    description:
      "A real-time asynchronous webhook delivery and monitoring platform designed to process webhook events reliably using queues, background workers, retries and real-time execution tracking.",

    features: [
      "Asynchronous webhook delivery",
      "BullMQ background processing",
      "Automatic retry with exponential backoff",
      "HMAC SHA-256 webhook signing",
      "Real-time delivery monitoring",
      "Execution history & failure tracking",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Socket.IO",
    ],

    github: "https://github.com/bhupender2412/logpulse",
    demo: "https://logpulse-3dgx.vercel.app/",

    featured: true,
  },

  {
    id: 3,
    title: "LeetMetric",
    category: "JavaScript Application",
    image: "/projects/leetmetric.png",

    description:
      "A lightweight LeetCode profile analytics application that retrieves user statistics and presents problem-solving progress through a clean and responsive dashboard.",

    features: [
      "LeetCode username search",
      "Difficulty-wise progress",
      "Ranking information",
      "Submission statistics",
      "Acceptance rate",
      "Recent search history",
      "Dark and light themes",
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "GraphQL API",
    ],

    // Add the GitHub link after the complete source code
    // has been pushed to the repository.
    github: "",

    demo: "https://leetmetric-three.vercel.app/",

    featured: true,
  },

  {
    id: 4,
    title: "QueueIt",
    category: "Full Stack Application",
    image: "",

    description:
      "A virtual queue management system that allows users to join queues digitally and receive live status updates while administrators manage queue operations.",

    features: [
      "Virtual queue joining",
      "Token generation",
      "Live queue updates",
      "Role-based access",
      "Admin queue management",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],

    github: "",
    demo: "",
    featured: false,
  },

  {
    id: 5,
    title: "Job Portal",
    category: "MERN Application",
    image: "",

    description:
      "A recruitment platform connecting job seekers and recruiters through job listings, applications, authentication and role-based functionality.",

    features: [
      "Job seeker & recruiter accounts",
      "Job posting",
      "Job applications",
      "Search and filtering",
      "Authentication",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],

    github: "",
    demo: "",
    featured: false,
  },

  {
    id: 6,
    title: "Book Store",
    category: "MERN Application",
    image: "",

    description:
      "A full-stack bookstore application featuring authentication, protected routes, book management and an administrator dashboard.",

    features: [
      "User authentication",
      "Role-based access",
      "Book CRUD operations",
      "Admin dashboard",
      "Dark and light themes",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Bootstrap",
    ],

    github: "",
    demo: "",
    featured: false,
  },
];