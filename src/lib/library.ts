import SortedImage from "@src/images/sorted.png";
import UnsortedImage from "@src/images/unsorted.png";
import PersonalWebImage from "@src/images/personalWeb.png";
import PersonalWebImage2 from "@src/images/personalWeb2.png";
import PersonalWebImage3 from "@src/images/personalWeb3.png";
import DarkPersonalWebImage from "@src/images/dark-mode-personal.png";
import LightPersonalWebImage from "@src/images/light-mode-personal.png";
import FinanceAppDashboard from "@src/images/finance-app-dashboard.png";
import FinanceeAppTransactionPage from "@src/images/finance-app-transaction-page.png";
import BulletDestiny from "@src/images/bullet-destiny.png";
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
  invertOnDark?: boolean | null;
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
    projectTech: ["codingNotes", "myExpense"],
  },
  {
    name: "Java",
    icon: "logos:java",
    domain: "language",
    roleUtilised: ["ncs", "dbs", "misc"],
    projectTech: ["backendCodeStub", "myExpense", "bulletDestiny"],
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
    projectTech: ["sortingVisualiser", "codingNotes", "myExpense"],
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
    name: "AWS",
    icon: "logos:aws",
    domain: "tools",
    roleUtilised: ["work", "ncs", "misc"],
    projectTech: ["backendCodeStub"],
  },
  {
    name: "Oracle",
    icon: "logos:oracle",
    domain: "tools",
    roleUtilised: ["work", "dbs", "misc"],
    projectTech: ["backendCodeStub"],
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
    domain: "tools",
    roleUtilised: ["misc"],
    projectTech: ["codingNotes", "backendCodeStub", "myExpense"],
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
    projectTech: ["sortingVisualiserTech", "codingNotes"],
  },
  {
    name: "Spring",
    icon: "logos:spring-icon",
    domain: "library",
    roleUtilised: ["ncs", "dbs", "misc"],
    projectTech: ["backendCodeStub", "myExpense"],
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
    domain: "tools",
    roleUtilised: ["misc", "ncs"],
    projectTech: ["codingNotes", "myExpense"],
  },
  {
    name: "NestJS",
    icon: "logos:nestjs",
    roleUtilised: ["misc"],
    domain: "library",
    projectTech: ["codingNotes"],
  },
  {
    name: "Fastify",
    icon: "logos:fastify-icon",
    roleUtilised: ["misc"],
    domain: "library",
    projectTech: ["codingNotes"],
    invertOnDark: true,
  },
];

export const language = technologies.filter(
  (tech) => tech.domain === "language",
);
export const libraries = technologies.filter(
  (tech) => tech.domain === "library",
);
export const tools = technologies.filter((tech) => tech.domain === "tools");

const ncsTech = technologies.filter((tech) =>
  tech.roleUtilised.includes("ncs"),
);

const dbsTech = technologies.filter((tech) =>
  tech.roleUtilised.includes("dbs"),
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
    companyName: "DBS Bank",
    role: "SWE",
    duration: "Jul 2024 - Present",
    responsibility: [
      "Built and deployed Spring Boot APIs supporting large-scale Cards and Payments migrations for core card services.",
      "Implement middleware services to serve internal core banking systems, retail consumers alongside external payment providers (VisionPLUS and PowerCard) .",
      "Delivering migration of mainframe and vendor-dependent systems to a cloud-native platform, increasing in-house ownership and reducing vendor reliance, operational overhead, and long-term costs",
      "Performed production issue analysis using application logs, collaborating with engineering and operations teams to resolve integration and API-related incidents.",
      "Led deployment change management by coordinating technical inputs and cross-stakeholder approvals, ensuring compliant and failure-free production releases.",
    ],
    techUsed: dbsTech,
  },
  {
    companyName: "NCS Group",
    role: "SWE",
    duration: "Nov 2022 - Jun 2024",
    responsibility: [
      "Modernized client applications through tech refresh initiatives, migrating legacy solutions to maintainable frameworks aligned with business needs.",
      "Contributed to cloud-native adoption under the Whole-of-Government (WoG) GCC standards.",
      "Delivered end-to-end full-stack solutions using React, Spring Boot, and AWS, improving system reliability and operational workflows.",
      "Built and introduced reusable and configurable React components, consolidating 20 static pages into a single dynamic module, with schema-based form validation (Yup) to enforce consistent data integrity and reduce frontend defects.",
      "Supported post-go-live operations by maintaining deployed systems and implementing enhancements to meet evolving requirements.",
      "Proposed enhancement with regards to evolving business needs which supports recurring service engagement and revenue to the company",
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

const myExpenseTech = technologies.filter((tech) =>
  tech.projectTech?.includes("myExpense"),
);

const bulletDestinyTech = technologies.filter((tech) =>
  tech.projectTech?.includes("bulletDestiny"),
);

export const projects = [
  {
    projectName: "MyExpense - Expense Application",
    techUsed: myExpenseTech,
    image: [FinanceAppDashboard, FinanceeAppTransactionPage],
    demo: "https://my-expense-lpmt.onrender.com/",
    github: "https://github.com/yaohong6782/finance",
  },
  {
    projectName: "Bullet Destiny",
    techUsed: bulletDestinyTech,
    image: [BulletDestiny],
    demo: "",
    github: "https://github.com/yaohong6782/mydestiny",
  },
  {
    projectName: "Personal Website",
    techUsed: personalWebTech,
    image: [LightPersonalWebImage],
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
