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

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export const profile: Profile = {
  name: "Rantika Ayuning",
  title: "Frontend Developer",
  subtitle: "Crafting Beautiful Digital Experiences",
  description:
    "Result-driven Frontend Developer passionate about building user-friendly, responsive web applications. Specialized in React, Next.js, and modern web technologies.",
  email: "rantika@example.com",
  phone: "+62 XXX-XXXX-XXXX",
  location: "Indonesia",
  bio: "Recently graduated from Glints Academy x Binar Academy coding bootcamp as Junior Frontend Developer with excellent problem-solving skills and ability to perform well in a team. Currently seeking opportunities to leverage my front-end development skills in a professional environment.",
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

export const projects: Project[] = [
  {
    id: "1",
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
    id: "2",
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
