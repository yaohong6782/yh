import SortedImage from "@src/images/sorted.png";
import UnsortedImage from "@src/images/unsorted.png";
import PersonalWebImage from "@src/images/personalWeb.png";
import PersonalWebImage2 from "@src/images/personalWeb2.png";
import PersonalWebImage3 from "@src/images/personalWeb3.png";
import DarkModePersonalWebImage from "@src/images/darkModePersonalWeb.png";

export interface Socials {
  url: string;
  icon: string;
}

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
  roleUtilised: string[];
  projectTech?: string[];
}
export const technologies: Technologies[] = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
    domain: "language",
    roleUtilised: ["intern", "misc"],
    projectTech: ["sortingVisualiser"],
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    domain: "language",
    roleUtilised: ["work", "misc"],
    projectTech: ["codingNotes"],
  },
  {
    name: "Java",
    icon: "logos:java",
    domain: "language",
    roleUtilised: ["work", "misc"],
    projectTech: ["backendCodeStub"],
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
    projectTech: ["sortingVisualiser", "codingNotes"],
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
    projectTech: ["personalWeb"],
  },
  {
    name: "Swagger",
    icon: "logos:swagger",
    domain: "tools",
    roleUtilised: ["work", "misc"],
    projectTech: ["backendCodeStub"],
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
    domain: "tools",
    roleUtilised: ["misc"],
    projectTech: ["codingNotes", "backendCodeStub"],
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
    projectTech: ["sortingVisualiserTech", "codingNotes"],
  },
  {
    name: "Spring",
    icon: "logos:spring-icon",
    domain: "library",
    roleUtilised: ["work", "misc"],
    projectTech: ["backendCodeStub"],
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
    domain: "tools",
    roleUtilised: ["misc"],
    projectTech: ["codingNotes"],
  },
  {
    name: "NestJS",
    icon: "logos:nestjs",
    roleUtilised: ["misc"],
    domain: "library",
    projectTech: ["codingNotes"],
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
      "Tech Refresh development of client's application to a maintainable framework and technology adhering to business requirements",
      "Built Back-End APIs and Front-End components fostering modularity for project's long term maintainability",
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

const sortingVisualiserTech = technologies.filter((tech) =>
  tech.projectTech?.includes("sortingVisualiser"),
);

const backendCodeStubTech = technologies.filter((tech) =>
  tech.projectTech?.includes("backendCodeStub"),
);

const codingNotesTech = technologies.filter((tech) =>
  tech.projectTech?.includes("codingNotes"),
);

const personalWebTech = technologies.filter((tech) =>
  tech.projectTech?.includes("personalWeb"),
);
export const projects = [
  {
    projectName: "Personal Website",
    techUsed: personalWebTech,
    image: [PersonalWebImage2],
    demo: "",
    github: "https://github.com/yaohong6782/yh",
  },
  {
    projectName: "Sorting Visualiser",
    techUsed: sortingVisualiserTech,
    image: [SortedImage, UnsortedImage],
    demo: "https://sorting-visualiser-738ffc.netlify.app/",
    github: "https://github.com/yaohong6782/sorting-visualiser",
  },
  // {
  //   projectName: "Coding Notes",
  //   techUsed: codingNotesTech,
  //   image: "",
  //   demo: "",
  //   github: "",
  // },
];
