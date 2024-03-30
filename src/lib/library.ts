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
  domain: "library" | "language";
  // description?: "work" | "intern" | "misc";
  roleUtilised: string[];
}
export const technologies: Technologies[] = [
  {
    name: "JavaScript",
    icon: "",
    domain: "language",
    roleUtilised: ["work", "intern", "misc"],
  },
  {
    name: "TypeScript",
    icon: "",
    domain: "language",
    roleUtilised: ["work", "misc"],
  },
  {
    name: "Java",
    icon: "",
    domain: "language",
    roleUtilised: ["work", "misc"],
  },
  {
    name: "Python",
    icon: "",
    domain: "language",
    roleUtilised: ["misc"],
  },
  // },
  // {
  //   name: "React",
  //   icon: "",
  //   domain: "library",
  //   roleUtilised: ["work", "intern", "misc"],
  // },
  // {
  //   name: "NodeJs",
  //   icon: "",
  //   domain: "library",
  //   roleUtilised: ["work", "intern", "misc"],
  // },
  // {
  //   name: "Astro",
  //   icon: "",
  //   domain: "library",
  //   roleUtilised: ["misc"],
  // },
  // {
  //   name: "PostgreSQL",
  //   icon: "",
  //   domain: "library",
  //   roleUtilised: ["misc"],
  // },
  // {
  //   name: "Oracle / SQL",
  //   icon: "",
  //   domain: "library",
  //   roleUtilised: ["work", "intern", "misc"],
  // },
  // {
  //   name: "Git",
  //   icon: "",
  //   domain: "library",
  //   roleUtilised: [""],
  // },
];

export interface Experiences {
  companyName: string;
  role: "SWE" | "intern";
  duration: string;
  responsibility: string[] | undefined;
  techUsed: string[];
}

export const experiences: Experiences[] = [
  {
    companyName: "NCS Pte Ltd",
    role: "SWE",
    duration: "Jun 2022 - Present",
    responsibility: [
      "Developed client's application to a maintainable framework and technology adhering to business requirements",
      "Optimised efficiency fostering modular and readable frontend components contributing to project's long term maintainability",
      "Maintained of deployed application upon successful go-live, addressing and incorporating enhancement to ongoing business needs and relevance",
    ],
    techUsed: ["React", "TypeScript", "Spring Framework", "Java", "AWS"],
  },
  {
    companyName: "Onwards Media Group Pte Ltd",
    role: "intern",
    duration: "Nov 2017 - Feb 2018",
    responsibility: [
      "Implement Trueface API for facial recognition",
      "UAT documentation and test specifications",
    ],
    techUsed: [""],
  },
];
