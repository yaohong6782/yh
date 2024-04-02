export interface Socials {
  url: string;
  icon: string;
}
export const socials: Socials[] = [
  {
    url: "https://github.com/yaohong6782",
    icon: "cib:github",
  },
  {
    url: "https://www.linkedin.com/in/yao-hong/",
    icon: "cib:linkedin",
  },
];

export interface Technologies {
  name: string;
  icon: string;
  domain: "library" | "language" | "tools";
  // description?: "work" | "intern" | "misc";
  roleUtilised: string[];
}
export const technologies: Technologies[] = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
    domain: "language",
    roleUtilised: ["intern", "misc"],
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    domain: "language",
    roleUtilised: ["work", "misc"],
  },
  {
    name: "Java",
    icon: "logos:java",
    domain: "language",
    roleUtilised: ["work", "misc"],
  },
  {
    name: "Python",
    icon: "logos:python",
    domain: "language",
    roleUtilised: ["misc"],
  },
  {
    name: "React",
    icon: "logos:react",
    domain: "library",
    roleUtilised: ["work", "intern", "misc"],
  },
  {
    name: "Node",
    icon: "logos:nodejs-icon",
    domain: "library",
    roleUtilised: ["work", "misc"],
  },
  {
    name: "Astro",
    icon: "logos:astro-icon",
    domain: "library",
    roleUtilised: ["misc"],
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
    domain: "tools",
    roleUtilised: ["misc"],
  },
  {
    name: "Git",
    icon: "logos:git-icon",
    domain: "tools",
    roleUtilised: ["work", "intern", "misc"],
  },
  {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
    domain: "library",
    roleUtilised: ["misc"],
  },
  {
    name: "Spring",
    icon: "logos:spring-icon",
    domain: "library",
    roleUtilised: ["work", "misc"],
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
    domain: "tools",
    roleUtilised: ["misc"],
  },
  {
    name: "NestJS",
    icon: "logos:nestjs",
    roleUtilised: ["misc"],
    domain: "library",
  },
];

export const language = technologies.filter(
  (tech) => tech.domain === "language",
);
export const libraries = technologies.filter(
  (tech) => tech.domain === "library",
);
export const tools = technologies.filter((tech) => tech.domain === "tools");

const workTech = technologies.filter((tech) =>
  tech.roleUtilised.includes("work"),
);

const internTech = technologies.filter((tech) =>
  tech.roleUtilised.includes("intern"),
);
export interface Experiences {
  companyName: string;
  role: "SWE" | "intern";
  duration: string;
  responsibility: string[] | undefined;
  techUsed: Technologies[] | object;
}

export const experiences: Experiences[] = [
  {
    companyName: "NCS Group",
    role: "SWE",
    duration: "Jun 2022 - Present",
    responsibility: [
      "Development of client's application to a maintainable framework and technology adhering to business requirements",
      "Built Front-End components fostering modularity for project's long term maintainability",
      "Optimised Back-End APIs improving search and load times",
      "Maintained of deployed application upon successful go-live, addressing and incorporating enhancement to ongoing business needs and relevance",
    ],
    techUsed: workTech,
  },
  {
    companyName: "Onwards Media Group Pte Ltd",
    role: "intern",
    duration: "Nov 2017 - Feb 2018",
    responsibility: [
      "Conceptualised by implementing and integrating Trueface recognition API",
      "UAT documentation and test specifications",
    ],
    techUsed: internTech,
  },
];
