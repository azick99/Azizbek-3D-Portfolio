import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  threejs,
  eductaion,
  computer,
  upwork,
  next,
  jest,
  graduate,
} from "../assets";

export interface NavLink {
  id: string;
  title: string;
}

export interface CompleteStat {
  number: number;
  text: string;
  subText: string;
}

export interface ServiceItem {
  title: string;
  icon: string;
}

export interface TechProgress {
  name: string;
  percent: number;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface ExperienceItem {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface ProjectTag {
  name: string;
  color: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  url: string;
  source_code_link: string;
  type:
    | "New Projects"
    | "Major Projects"
    | "Style Projects"
    | "Small and Sweet Projects";
}

export interface SkillBar {
  text: string;
  percent: string;
}

export interface AboutMeData {
  softSkills: SkillBar[];
  language: SkillBar[];
}

export const navLinks: NavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const completes: CompleteStat[] = [
  { number: 20, text: "projects", subText: "completed" },
  { number: 1, text: "year", subText: "none-comercial exeriance" },
  { number: 2, text: "clients", subText: "number" },
  { number: 10, text: "costumer", subText: "rewview" },
];

const services: ServiceItem[] = [
  { title: "Software Developer", icon: web },
  { title: "React Developer", icon: backend },
  { title: "Content Creator", icon: creator },
];

const techProgresses: TechProgress[] = [
  { name: "HTML5", percent: 90 },
  { name: "CSS3", percent: 75 },
  { name: "JAVASCRIPT", percent: 80 },
  { name: "REACT JS", percent: 85 },
  { name: "TYPESCRIPT", percent: 70 },
  { name: "TAILWIND", percent: 80 },
  { name: "NEXT.JS", percent: 70 },
];

const technologies: Technology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "nextjs", icon: next },
  { name: "jest", icon: jest },
];

const experiences: ExperienceItem[] = [
  {
    title: "Assistant in IT sector (Internship) ",
    company_name: "Computer Technology college of fergana",
    icon: computer,
    iconBg: "#383E56",
    date: " May 2017 - August 2019",
    points: [
      " Assisted professors of Computer Science at college, providing support and assistance in various tasks.",
      "Developed skills in software development, including HTML5, CSS3, and JavaScript.",
      "Gained knowledge in both software and hardware aspects of computers.",
      "Helped students to understand difficult themes that I learnt.",
    ],
  },
  {
    title: "Leader ( volunteer ) of National Library",
    company_name: "National Library, Uzbekistan",
    icon: eductaion,
    iconBg: "#E6DEDD",
    date: "July 2019 - August 2021",
    points: [
      "Leading speaking club.",
      "Attracting students ot learn English and Programming language.",
      "Working with library team.",
      "Organizing special events related to English.",
    ],
  },
  {
    title: "IELTS TEACHER",
    company_name: "The 16th specialized school ",
    icon: graduate,
    iconBg: "#E6DEDD",
    date: "November 2019 - October 2021",
    points: [
      "Helped students to achieve their academic goals.",
      "Teaching with modern technology and promoted   students to critical thinking.",
      "Working with team.",
    ],
  },
  {
    title: "Self-employed Software Developer",
    company_name: "Upwork and fiverr freelance market",
    icon: upwork,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Creating user-friendly web apps and web pages.",
      " Utilized modern frameworks and JavaScript programming languages such as Tailwind CSS and React.",
      "Delivered high-quality web services tailored to clients' specific requirements.",
      "Coding readable codes and intagrating it to real world porjects.",
    ],
  },
];

const aboutMe: AboutMeData = {
  softSkills: [
    { text: "Communication", percent: "70%" },
    { text: "Teamwork", percent: "75%" },
    { text: "Problem-solving", percent: "60%" },
    { text: "Leadership", percent: "70%" },
  ],
  language: [
    { text: "English", percent: "65%" },
    { text: "Russian", percent: "70%" },
    { text: "Uzbek(native)", percent: "90%" },
    { text: "Polish(A1)", percent: "30%" },
  ],
};

const projects: Project[] = [];

export { services, technologies, experiences, aboutMe, techProgresses };
