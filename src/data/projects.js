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
    category: "Real-Time Full Stack Application",
    image: "/projects/queueit.png",

    description:
      "A full-stack virtual queue management platform that allows users to join service queues remotely, receive digital tokens, track their live position and estimated wait time, and validate turns using QR codes.",

    features: [
      "Remote queue joining",
      "Digital token generation",
      "Live position & ETA updates",
      "Real-time Socket.IO updates",
      "QR-based token validation",
      "Admin & Super Admin workflows",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
    ],

    github: "https://github.com/bhupender2412/queueit",
    demo: "https://queueit-alpha.vercel.app/",

    featured: true,
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
  title: "BookHaven",
  category: "Full Stack Bookstore",
  image: "/projects/bookhaven.png",

  description:
    "A full-stack bookstore application where users can browse books, view book details, manage their cart and access protected features, while administrators manage the book catalog and users.",

  features: [
    "User authentication",
    "Book catalog & details",
    "Shopping cart",
    "Protected routes",
    "Admin dashboard",
    "Book CRUD management",
  ],

  technologies: [
    "React",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
  ],

  github: "https://github.com/bhupender2412/bookhaven",
  demo: "https://bookhaven-eight.vercel.app/",

  featured: true,
},
];