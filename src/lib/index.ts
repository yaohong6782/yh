type Socials = Array<String>;

export const socials: Socials = ["cib:github", "cib:linkedin"];

export interface Tech {
  name: string;
  icon: string;
  expertise: "dabbled" | "utilised";
  skill: "language" | "library" | "tools";
  description?: "work" | "intern" | "misc";
  intern?: boolean;
  work?: boolean;
}

export const technologies: Tech[] = [
  {
    name: "Javascript",
    icon: "logos:javascript",
    expertise: "utilised",
    skill: "language",
    description: "work",
    intern: true,
    work: false,
  },
  {
    name: "Typescript",
    icon: "logos:typescript-icon",
    expertise: "utilised",
    skill: "language",
    description: "work",
    intern: false,
    work: true,
  },
  {
    name: "Python",
    icon: "logos:python",
    expertise: "utilised",
    skill: "language",
    description: "misc",
    intern: false,
    work: false,
  },
  {
    name: "Java",
    icon: "logos:java",
    expertise: "utilised",
    skill: "language",
    description: "work",
    intern: false,
    work: true,
  },
  {
    name: "React",
    icon: "logos:react",
    expertise: "utilised",
    skill: "library",
    description: "work",
    intern: true,
    work: true,
  },
  {
    name: "NodeJs",
    icon: "logos:nodejs-icon",
    expertise: "utilised",
    skill: "library",
    description: "work",
    intern: true,
    work: true,
  },
  {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
    expertise: "utilised",
    skill: "library",
    description: "misc",
  },
  {
    name: "Astro",
    icon: "logos:astro",
    expertise: "utilised",
    skill: "library",
    description: "misc",
  },
  {
    name: "MongoDB",
    icon: "vscode-icons:file-type-mongo",
    expertise: "utilised",
    skill: "library",
    description: "misc",
  },
  {
    name: "SQL",
    icon: "mdi:sql-query",
    expertise: "utilised",
    skill: "library",
    description: "work",
    intern: false,
    work: true,
  },
  {
    name: "Git",
    icon: "logos:git-icon",
    expertise: "utilised",
    skill: "library",
    description: "work",
    intern: true,
    work: true,
  },
];

export const sortingVisualiserTech = technologies.filter((tech) => {
  return tech.name === "React" || tech.name === "Javascript";
});

export const internTechStack = technologies.filter((tech) => {
  return tech.intern === true;
});
export const workTechStack = technologies.filter((tech) => {
  return tech.work === true;
});

export interface Work {
  name: string;
  role: "SWE" | "intern" | "student";
  duration: string;
  description?: string;
  responsibility?: string[] | undefined;
  skills?: string[];
  techStack: Tech[];
}

export const Experiences: Work[] = [
  {
    name: "NCS Pte Ltd",
    role: "SWE",
    duration: "Jun 2022 - Present",
    description: "Software Engineer",
    responsibility: [
      "Collaborated with a team to upgrade the client's business application to a modern framework, ensuring it remains up-to-date and maintainable",
      "Created reusable components enhancing readability and usability of the application, improving the overall user experience.",
      "Refactoring code and following principles such as SRP and SOLID, reducing code smells and improved code quality",
    ],
    techStack: workTechStack,
  },

  {
    name: "Onwards Media Group",
    role: "intern",
    duration: "Nov 2017 - Feb 2018",
    description: "Software Engineer Intern",
    responsibility: [
      "Implement Trueface API for facial recognition",
      "UAT documentation and testcases",
    ],
    techStack: internTechStack,
  },

  {
    name: "Changi Airport Group",
    role: "student",
    duration: "Aug 2017 - Oct 2017",
    description: "Student Developer",
    responsibility: [
      "Built an IOT system for monitoring of soil acidity",
      "Developed web application to consume hardware input through APIs and setting a threshold warning to Client",
    ],
    techStack: [],
  },
];

export interface Img {
  icon: string;
}
