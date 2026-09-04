export const profile = {
  name: "Eniz Dajić",
  location: "Vitez, Bosnia and Herzegovina",
  email: "dajiceniz@gmail.com",
  phone: "063-806-241",
  linkedin: "https://www.linkedin.com/in/eniz-daji%C4%87-209008304/",
  github: "https://github.com/Ennyzny",
  tagline: "Software Engineering Student — Web & Embedded",
  summary:
    "Third-year Software Engineering student at the Faculty of Polytechnic Studies, University of Zenica. Passionate about building practical software, solving problems, and continuously improving my skills through hands-on projects. My interests span web development and embedded systems. I bring the same discipline I learned on the mat to every sprint — precise work, steady iteration, and a habit of finishing what I start.",
};

export const stats = [
  { value: "3rd", label: "Year, Software Engineering" },
];

export const education = [
  {
    period: "2023 — Present",
    place: "Faculty of Polytechnic Studies, University of Zenica",
    degree: "Software Engineering",
    detail: "Third-year, ongoing.",
  },
  {
    period: "2019 — 2023",
    place: "Mixed Secondary School Vitez",
    degree: "Computer Science and Informatics Technician",
    detail: "Graduated with grade 5 (excellent).",
  },
];

export const experience = [
  {
    period: "07/2026 — 08/2026",
    role: "Frontend Developer, Internship",
    org: "RizqDev",
    detail:
      "Developed a responsive web page using React and Next.js, combined with TypeScript and Tailwind CSS.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const competitions = [
  {
    period: "April 15, 2023",
    name: "Cantonal Programming Competition for secondary schools",
    place: "Central Bosnia Canton, Travnik",
  },
  {
    period: "May 7, 2022",
    name: "IT Challenge, powered by NSoft",
    place: "Maglaj",
  },
];

export type ProjectCategory = "university" | "internship" | "personal";

export const projectCategories: { key: ProjectCategory; title: string; note: string }[] = [
  { key: "university", title: "University Projects", note: "Built as part of my studies" },
  { key: "internship", title: "Internship", note: "Built during professional practice" },
  { key: "personal", title: "Personal Projects", note: "Built in my free time" },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "GameHub",
    subtitle: "Mobile application for online game purchases",
    description:
      "A mobile application built with .NET MAUI that lets users browse, purchase, and manage digital games from one place.",
    tags: [".NET MAUI"],
    category: "university",
  },
  {
    title: "“Who Wants to Be a Millionaire?” Quiz",
    subtitle: "Full-stack quiz platform",
    description:
      "An IT quiz app inspired by the TV format: players register, log in, answer rounds, and climb a leaderboard, with a separate admin panel to manage content.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "Express.js",
      "MySQL",
      "JWT",
      "Bcrypt",
    ],
    category: "university",
  },
  {
    title: "Demo Website",
    subtitle: "Client site for a German company",
    description:
      "A modern, responsive demo site built for a German company — page structure, reusable components, and cross-device layout, from scratch.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "internship",
  },
  {
    title: "Plaza",
    subtitle: "Board game platform for local gaming communities",
    description: "Party-games launchpad for the crew. Mobile-first hub + isolated game modules.",
    tags: ["Next.js", "TypeScript", "Supabase", "Drizzle", "Tailwind CSS"],
    category: "personal",
    link: "https://plaza-games.vercel.app/",
  },
  {
    title: "Wordle-BA",
    subtitle: "Bosnian word guessing game with daily challenges",
    description: "Wordle game but with bosnian words.",
    tags: ["Vite", "JavaScript", "Tailwind CSS"],
    category: "personal",
    link: "https://murkee2.github.io/wordle-ba/",
  },
  {
    title: "Ko sam ja?",
    subtitle: "Bosnian quiz game based on progressively revealed clues",
    description: "Bosnian quiz game where players guess a person based on clues.",
    tags: ["Next.js", "React", "TypeScript"],
    category: "personal",
    link: "https://murkee2.github.io/ko-sam-ja-kviz/",
  },
];

export const skills = {
  Programming: ["C#", "C++", "OOP"],
  "Web Technologies": ["HTML", "CSS", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  Databases: ["SQL Server Management Studio", "MySQL"],
  Tools: ["GitHub"],
};

export const softSkills = ["Teamwork", "Responsibility", "Communication", "Organization", "Fast learning"];

export const languages = [
  { name: "Bosnian", level: "Native" },
  { name: "English", level: "Advanced" },
];

export const additional = [
  { label: "Driving license", value: "Category B" },
  { label: "Karate", value: "Black belt, 2nd Dan" },
];
