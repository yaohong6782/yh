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
  {
    name: "OpenAPI",
    icon: "logos:swagger",
    expertise: "utilised",
    skill: "library",
    description: "work",
    intern: false,
    work: true,
  },
  {
    name: "Spring",
    icon: "logos:spring-icon",
    expertise: "utilised",
    skill: "library",
    description: "work",
    intern: false,
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
      "Full stack development utilising React, Spring",
      "Developed Front-end and Back-End business logic APIs aligning with current existing system",
      "Created reusable components for development enhancing readabilty, improving development process.",
      "Handling service request and enhancement for everchanging business needs and requirements"
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
];

export interface Img {
  icon: string;
}
