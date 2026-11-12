// Mohamed Ibrahim Ahmed — Professional CV & Portfolio Data
// Aligned 1-to-1 with CV credentials, featuring React.js & Next.js

export const profile = {
  name: "Mohamed Ibrahim Ahmed",
  shortName: "Mohamed Ibrahim",
  role: "Front-End React.js & Next.js Developer",
  title: "Front-End React.js & Next.js Developer",
  summary:
    "Motivated and detail-oriented Front-End React.js & Next.js Developer with a solid foundation in Computer Science. Experienced in delivering dynamic, responsive, and user-friendly web interfaces using React.js, Next.js, JavaScript (ES6+), Tailwind CSS, and Bootstrap. Strong problem-solving background with practical expertise in state management, component architecture, and transforming UI/UX designs into high-performance web applications.",
  location: "Cairo, Egypt",
  phone: "+20 114 166 0359",
  phoneClean: "+201141660359",
  email: "mohamed01131660359@gmail.com",
  linkedin: "https://linkedin.com/in/mohamed-ibrahim-701908269",
  linkedinDisplay: "linkedin.com/in/mohamed-ibrahim-701908269",
  github: "https://github.com/Mohamed-Ibrahim15",
  githubDisplay: "github.com/Mohamed-Ibrahim15",
  whatsapp: "https://wa.me/201141660359",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/Mohamed-Ibrahim15",
      display: "github.com/Mohamed-Ibrahim15",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/mohamed-ibrahim-701908269",
      display: "linkedin.com/in/mohamed-ibrahim-701908269",
      icon: "linkedin",
    },
    {
      label: "WhatsApp",
      url: "https://wa.me/201141660359",
      display: "+20 114 166 0359",
      icon: "whatsapp",
    },
    {
      label: "Email",
      url: "mailto:mohamed01131660359@gmail.com",
      display: "mohamed01131660359@gmail.com",
      icon: "email",
    },
  ],
};

export const stats = [
  { value: "4", label: "Featured Projects" },
  { value: "React & Next.js", label: "Core Frameworks & SSR" },
  { value: "Tailwind & Bootstrap", label: "Responsive UI Systems" },
  { value: "Class of 2026", label: "B.Sc. Computers & AI" },
];

export const skillCategories = [
  {
    group: "Languages & Core",
    icon: "code",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Core Programming",
      "TypeScript Basics",
      "DOM Manipulation",
    ],
  },
  {
    group: "Frameworks & Libraries",
    icon: "react",
    items: [
      "React.js",
      "Next.js",
      "Component-Based Architecture",
      "JSX",
      "State Management (Redux / Context)",
      "React Router",
      "SSR & App Router",
    ],
  },
  {
    group: "Styling & UI Tools",
    icon: "palette",
    items: [
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "Flexbox & CSS Grid",
      "Modern UI/UX Systems",
      "CSS Modules",
    ],
  },
  {
    group: "Version Control & Tools",
    icon: "tool",
    items: [
      "Git",
      "GitHub",
      "Chrome DevTools",
      "NPM / Yarn",
      "Vite / Webpack",
      "REST APIs Integration",
    ],
  },
];

export const experience = [
  {
    role: "Freelance Front-End Developer",
    company: "Self-Employed",
    period: "2023 – Present",
    type: "Remote",
    location: "Cairo, Egypt · Remote",
    summary:
      "Designed and delivered dynamic, modern web applications for diverse clients using React.js, Next.js, Tailwind CSS, and Bootstrap with a focus on maintainability, state efficiency, and responsiveness.",
    points: [
      "Designed and developed responsive, modern web applications for various clients using React.js, Next.js, Tailwind CSS, and Bootstrap.",
      "Translated client requirements and design wireframes into clean, modular, and maintainable React/Next.js components.",
      "Implemented interactive user interface features, cart logic, state updates, and dynamic data presentation.",
      "Optimized web application performance for mobile responsiveness and cross-browser consistency.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computers and Artificial Intelligence",
  institution: "Faculty of Computers and Artificial Intelligence",
  period: "Class of 2026",
  location: "Cairo, Egypt",
  summary:
    "Rigorous academic curriculum covering foundational Computer Science concepts, object-oriented software engineering, algorithmic efficiency, and modern web application development.",
  courses: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Software Engineering & Architecture",
    "Database Systems & SQL",
    "Web Development & Internet Technologies",
    "Operating Systems & Computer Networks",
  ],
};

export const projects = [
  {
    id: "smart-restaurant-dashboard",
    title: "Smart Restaurant Dashboard",
    badge: "Admin & Operations",
    tagline: "Interactive admin dashboard for daily restaurant operations, order tracking, and sales insights.",
    description:
      "An intuitive and high-performance management dashboard built for restaurant operations. Features live kitchen order tracking, sales analytics, daily revenue metrics, and interactive menu control optimized for fast scanning on tablets and desktops.",
    previewType: "restaurant",
    tags: ["React.js", "Next.js", "Tailwind CSS", "JS (ES6+)", "State Management"],
    highlights: [
      "Interactive admin dashboard for managing daily restaurant operations and kitchen orders",
      "Real-time order pipeline tracking (Preparing, Ready to Serve, Delivered)",
      "Daily revenue insights, average ticket value, and sales analytics charts",
      "Dynamic menu item status toggling and table occupancy monitoring",
    ],
    live: "",
    code: "https://github.com/Mohamed-Ibrahim15",
  },
  {
    id: "full-ecommerce-platform",
    title: "Full E-Commerce Platform",
    badge: "Storefront & Cart",
    tagline: "Complete online shopping platform featuring a responsive product catalog, dynamic cart, and checkout.",
    description:
      "A complete online shopping platform featuring an interactive product catalog, instant search and category filtering, persistent cart and wishlist state management, and a streamlined multi-step checkout workflow.",
    previewType: "ecommerce",
    tags: ["React.js", "Next.js", "Bootstrap", "CSS3", "Cart Logic"],
    highlights: [
      "Responsive product catalog with instant search and multi-category filters",
      "Dynamic cart management with item counters, price recalculation, and persistent state",
      "Product showcase with rating stars, sale discounts, and variant selectors",
      "Multi-step checkout workflow with shipping forms and input validation",
    ],
    live: "",
    code: "https://github.com/Mohamed-Ibrahim15",
  },
  {
    id: "travel-flight-booking",
    title: "Travel & Flight Booking App",
    badge: "Travel & Exploration",
    tagline: "Modern travel portal enabling users to explore vacation destinations, search flights, and complete booking forms.",
    description:
      "A feature-rich travel booking platform allowing users to discover popular international destinations, search flight availability, compare tour packages, inspect weather indicators, and complete bookings through a responsive form.",
    previewType: "travel",
    tags: ["React.js", "Tailwind CSS", "HTML5", "REST APIs", "Vite"],
    highlights: [
      "Modern travel portal to explore vacation destinations and vacation packages",
      "Flight search cards with schedule details, flight duration, and pricing breakdown",
      "Interactive trip cost calculator with duration, hotel tiers, and flight status",
      "Fully responsive, mobile-first booking interface that scales smoothly on all viewports",
    ],
    live: "",
    code: "https://github.com/Mohamed-Ibrahim15",
  },
  {
    id: "nutrition-fitness-platform",
    title: "Nutrition & Fitness Platform",
    badge: "Health & Analytics",
    tagline: "Web application providing personalized diet plans, calorie tracking, and customized workout schedules.",
    description:
      "A dedicated health tracking web application designed to help users reach fitness goals through daily calorie targets, interactive macronutrient progress meters (Protein, Carbs, Fats), meal logging, and customized workout routines.",
    previewType: "nutrition",
    tags: ["React.js", "Next.js", "JavaScript (ES6+)", "Bootstrap", "Health UI"],
    highlights: [
      "Personalized daily calorie target vs actual intake comparison with progress indicators",
      "Interactive macronutrient breakdown meters for Protein, Carbohydrates, and Fats",
      "Meal logging log with food item names, calorie count, and timestamp",
      "Customized workout schedule and exercise routine dashboard",
    ],
    live: "",
    code: "https://github.com/Mohamed-Ibrahim15",
  },
];
