export interface Tech {
  name: string;
  icon: string;
  expertise: "dabbled" | "utilised";
  skill: "language" | "library" | "tools";
  description?: string;
}

export const technologies: Tech[] = [
  {
    name: "Javascript",
    icon: "logos:javascript",
    expertise: "utilised",
    skill: "language",
    description: "Typescript implicity type any",
  },
  {
    name: "Typescript",
    icon: "logos:typescript-icon",
    expertise: "utilised",
    skill: "language",
    description: "Strict",
  },
  {
    name: "Python",
    icon: "logos:python",
    expertise: "utilised",
    skill: "language",
    description: "English pseudo-code",
  },
  {
    name: "Java",
    icon: "logos:java",
    expertise: "utilised",
    skill: "language",
    description: "Verbose",
  },
  {
    name: "React",
    icon: "logos:react",
    expertise: "utilised",
    skill: "library",
    description: "Facebook",
  },
  {
    name: "NodeJs",
    icon: "logos:nodejs-icon",
    expertise: "utilised",
    skill: "library",
    description: "Node",
  },
  {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
    expertise: "utilised",
    skill: "library",
    description: "CSS Libray",
  },
  //   {
  //     name: "Astro",
  //     icon: "logos:astro",
  //     expertise: "utilised",
  //     skill: "library",
  //     description: "SPA",
  //   },
  {
    name: "MongoDB",
    icon: "vscode-icons:file-type-mongo",
    expertise: "utilised",
    skill: "library",
    description: "DB",
  },
  {
    name: "mySQL",
    icon: "vscode-icons:file-type-mysql",
    expertise: "utilised",
    skill: "library",
    description: "DB",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
    expertise: "utilised",
    skill: "library",
    description: "Git",
  },
];

export interface Work {
  name: string;
  role: "SWE" | "intern" | "student";
  duration: string;
  description?: string;
}

export const Experiences: Work[] = [
  {
    name: "Onwards Media Group",
    role: "intern",
    duration: "Nov 2017 - Feb 2018",
    description: "Intern",
  },
  {
    name: "Changi Airport Group (CAG)",
    role: "student",
    duration: "Aug 2017 - Oct 2017",
    description: "IOT System",
  },
];

export const sortingVisualiserTech = technologies.filter((tech) => {
  return tech.name === "React" || tech.name === "Javascript";
});

export interface Img {
  icon: string;
}
export const randomImage: Img = {
  icon: "logos:github-icon",
};

export interface Socials {
  name: string;
  icon: string;
}

export const social: Socials[] = [{
    name: "Linkedin",
    icon: "ion:logo-linkedin"
}];
