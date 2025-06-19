import SortedImage from "@src/images/sorted.png";
import UnsortedImage from "@src/images/unsorted.png";
import PersonalWebImage from "@src/images/personalWeb.png";
import PersonalWebImage2 from "@src/images/personalWeb2.png";
import PersonalWebImage3 from "@src/images/personalWeb3.png";

export interface Socials {
  url: string;
  icon: string;
}

export const socials: Socials[] = [
  {
    url: "https://github.com/yaohong6782",
    icon: "cib:github",
  },
  //   {
  //     url: "https://www.linkedin.com/in/yao-hong/",
  //     icon: "cib:linkedin",
  //   },
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
    roleUtilised: ["ncs", "misc"],
    projectTech: ["codingNotes"],
  },
  {
    name: "Java",
    icon: "logos:java",
    domain: "language",
    roleUtilised: ["ncs", "dbs", "misc"],
    projectTech: ["backendCodeStub"],
  },
  //   {
  //     name: "Jenkins",
  //     icon: "logos:jenkins",
  //     domain: "tools",
  //     roleUtilised: ["dbs"],
  //     projectTech: [],
  //   },
  {
    name: "Python",
    icon: "logos:python",
    domain: "language",
    roleUtilised: ["misc"],
  },

  {
    name: "Go",
    icon: "devicon:go",
    domain: "language",
    roleUtilised: ["misc"],
  },
  {
    name: "React",
    icon: "logos:react",
    domain: "library",
    roleUtilised: ["intern", "misc"],
    projectTech: ["sortingVisualiser", "codingNotes"],
  },
  {
    name: "Node",
    icon: "logos:nodejs-icon",
    domain: "library",
    roleUtilised: ["ncs", "misc"],
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
    roleUtilised: ["work", "ncs", "dbs", "misc"],
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
    roleUtilised: ["work", "dbs", "ncs", "intern", "misc"],
  },
  {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
    domain: "library",
    roleUtilised: ["misc"],
    projectTech: ["sortingVisualiserTech", "codingNotes", "budgetly"],
  },
  {
    name: "Spring",
    icon: "logos:spring-icon",
    domain: "library",
    roleUtilised: ["ncs", "dbs", "misc"],
    projectTech: ["backendCodeStub"],
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
    domain: "tools",
    roleUtilised: ["misc", "ncs"],
    projectTech: ["codingNotes"],
  },
  {
    name: "NestJS",
    icon: "logos:nestjs",
    roleUtilised: ["misc"],
    domain: "library",
    projectTech: ["codingNotes"],
  },
  {
    name: "Confluence",
    icon: "logos:confluence",
    roleUtilised: ["dbs"],
    domain: "tools",
    projectTech: [],
  },
  {
    name: "Jira",
    icon: "logos:jira",
    roleUtilised: ["dbs"],
    domain: "tools",
    projectTech: [],
  },
];

export const language = technologies.filter(
  (tech) => tech.domain === "language"
);
export const libraries = technologies.filter(
  (tech) => tech.domain === "library"
);
export const tools = technologies.filter((tech) => tech.domain === "tools");

const ncsTech = technologies.filter((tech) =>
  tech.roleUtilised.includes("ncs")
);

const dbsTech = technologies.filter((tech) =>
  tech.roleUtilised.includes("dbs")
);

const internTech = technologies.filter((tech) =>
  tech.roleUtilised.includes("intern")
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
    companyName: "DBS Bank",
    role: "SWE",
    duration: "Jul 2024 - Present",
    responsibility: [
      "Cards and Payments services team, developing RESTful APIs for card-related services in a large-scale migration project using Java Spring Boot",
      "Development of Microservice APIs serving as middleware gateway between internal teams and external services",
      "Created Python script to automate extraction of change request tag numbers from URLs, significantly reducing manual effort",
    ],
    techUsed: dbsTech,
  },
  {
    companyName: "NCS Group",
    role: "SWE",
    duration: "Nov 2022 - Jun 2024",
    responsibility: [
      "Tech Refresh development of client's application to a maintainable framework and technology adhering to business requirements",
      "Pioneered the adoption of cloud-native solutions under the Whole-of-Government (WoG) GCC 2.0",
      "Developed and Delivered full-stack development in alignment with newly modernized system architecture, improving operational processes and service efficiency",
      "Developed reusable components, enhancing modularity and readability to improve the project's long-term maintainability",
      "Maintained of deployed application upon successful go-live, addressing and incorporating enhancement to ongoing business needs and relevance",
    ],
    techUsed: ncsTech,
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
  tech.projectTech?.includes("sortingVisualiser")
);

const backendCodeStubTech = technologies.filter((tech) =>
  tech.projectTech?.includes("backendCodeStub")
);

const codingNotesTech = technologies.filter((tech) =>
  tech.projectTech?.includes("codingNotes")
);

const personalWebTech = technologies.filter((tech) =>
  tech.projectTech?.includes("personalWeb")
);

const budgetlyTech = technologies.filter((tech) =>
  tech.projectTech?.includes("budgetly")
);

export const projects = [
  //   {
  //     projectName: "Budgetly - Budget Tracking Application",
  //     techUsed: budgetlyTech,
  //     image: "",
  //     demo: "",
  //     github: "",
  //   },
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
];
