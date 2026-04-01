// Profile data
export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  phone?: string;
  location?: string;
  avatar?: string;
  bio: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: Array<{
    name: string;
    level: number; // 0-100
  }>;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image?: string;
  link?: string;
  github?: string;
  technologies: string[];
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  type: string; // Full-time, Contract, Internship
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  workMode: string; // Hybrid, Remote, On-site
  description: string;
  achievements?: string[];
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export const profile: Profile = {
  name: "Rantika Ayuning",
  title: "Frontend Developer",
  subtitle: "Building Innovation Through Code",
  description:
    "Experienced Frontend Developer with 2+ years of professional experience in building responsive, scalable web applications. Specialized in React.js, Next.js, and modern web technologies. Proven track record of delivering high-quality solutions in collaborative team environments.",
  email: "rantika@example.com",
  phone: "+62 XXX-XXXX-XXXX",
  location: "South Jakarta, Indonesia",
  bio: "Frontend Developer with 2+ years of hands-on experience in designing and developing user-centric web applications. Proficient in React.js, Next.js, and Tailwind CSS. Passionate about writing clean, maintainable code and creating seamless user experiences. Strong problem-solving abilities and excellent collaboration skills proven across diverse team environments.",
};

export const education: Education[] = [
  {
    school: "Glints Academy x Binar Academy",
    degree: "Coding Bootcamp",
    field: "Frontend Development",
    startDate: "Dec 2020",
    endDate: "Mar 2021",
    description:
      "Intensive bootcamp focused on modern web development with React and JavaScript",
  },
  {
    school: "International Hotel Management School Karanganyar",
    degree: "Diploma",
    field: "Hotel Management",
    startDate: "May 2016",
    endDate: "Apr 2019",
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 & Tailwind", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Redux", level: 75 },
      { name: "REST APIs", level: 80 },
      { name: "Responsive Design", level: 92 },
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Praktis",
    position: "Frontend Developer",
    type: "Full-time",
    startDate: "Jul 2022",
    endDate: "Feb 2025",
    duration: "2 yrs 8 mos",
    location: "South Jakarta, Jakarta, Indonesia",
    workMode: "Hybrid",
    description:
      "Developed and maintained responsive web applications using React.js and Next.js. Collaborated with cross-functional teams including UI/UX designers and backend developers to deliver high-quality user interfaces.",
    achievements: [
      "Built multiple responsive components resulting in 20% improved user engagement",
      "Optimized application performance reducing load time by 30% through lazy loading and code splitting",
      "Mentored and conducted code reviews to maintain code quality standards",
    ],
  },
  {
    id: "2",
    company: "MG Indotech",
    position: "Junior Frontend Developer",
    type: "Contract",
    startDate: "Jun 2021",
    endDate: "Jun 2022",
    duration: "1 yr 1 mo",
    location: "West Jakarta, Jakarta, Indonesia",
    workMode: "On-site",
    description:
      "Contributed to the development of web applications using React.js and Redux. Implemented responsive designs and integrated RESTful APIs for seamless data communication.",
    achievements: [
      "Developed 15+ React components with complete test coverage",
      "Successfully integrated third-party APIs improving system efficiency",
      "Implemented responsive design patterns compatible with all devices",
      "Collaborated with designers to translate mockups into functional components",
    ],
  },
  {
    id: "3",
    company: "ibis Styles Bandung Braga",
    position: "Sales Administrator",
    type: "Contract",
    startDate: "Jan 2020",
    endDate: "Mar 2020",
    duration: "3 mos",
    location: "Bandung, West Java, Indonesia",
    workMode: "On-site",
    description:
      "Managed administrative tasks and supported sales team operations. Gained valuable experience in customer service, data management, and business processes.",
    achievements: [
      "Maintained accurate customer databases and records",
      "Provided excellent customer service resulting in positive feedback",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "tata-arto",
    description: "Family Finance Management App",
    longDescription:
      "A mobile app that helps families manage finances together. Track expenses, analyze spending patterns, and manage family budgets in real-time. Features include multi-user family management, expense & income tracking, real-time synchronization, monthly analytics, and search & filtering capabilities.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Zustand",
      "TailwindCSS",
      "Netlify",
    ],
    featured: true,
  },
  {
    id: "2",
    name: "Lektur",
    description: "Learning Management System",
    longDescription:
      "A comprehensive Learning Management System where students can access materials, track their learning progress, complete assessments, and receive certificates. The platform provides an interactive environment for both students and teachers.",
    technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
    link: "https://lektur-app-glints.herokuapp.com",
    github: "https://github.com/rantikaayuning",
    featured: true,
  },
  {
    id: "3",
    name: "BBM Warehouse",
    description: "Movie Discovery Application",
    longDescription:
      "A modern movie discovery application that allows users to search for movies, view detailed information, ratings, and read reviews. Built with React and Redux for state management.",
    technologies: ["React", "Redux", "Axios", "React Router", "CSS3"],
    link: "https://bbm-warehouse-glints.herokuapp.com",
    github: "https://github.com/rantikaayuning",
    featured: true,
  },
];

export const socials: Social[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Rantikaayuning",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/rantika-ayuning-b96563151/",
    icon: "linkedin",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/rantikaayuning",
    icon: "instagram",
  },
];
