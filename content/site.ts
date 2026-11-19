// All the text and links on the site live in this one file.
// Edit this file to change the site; you never need to touch the components.
// Anything still unknown is marked TODO.

export type Media =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster?: string; alt: string }
  | { kind: "placeholder"; alt: string };

export type Project = {
  name: string;
  pitch: string; // one line
  problem: string; // 1-2 lines, business language
  agentSteps: string[]; // 3-4 short points
  media: Media; // demo video / GIF / screenshot
  diagram: string[]; // small architecture diagram: boxes shown left to right
  diagramNote?: string; // e.g. a retry loop, shown under the diagram
  stack: string[];
  liveUrl: string; // "" = not live yet (button shows "coming soon")
  githubUrl: string;
};

export type SkillGroup = { title: string; items: string[] };

const GITHUB_USER = "Memoona-Amjad";
const repo = (name: string) => `https://github.com/${GITHUB_USER}/${name}`;

export const site = {
  name: "Memoona Amjad",
  title: "Agentic AI Engineer",
  valueStatement:
    "I build AI agents that plan, use tools, check their own work and get real business tasks done, end to end.",
  // Used for SEO, the Open Graph image and the footer.
  url: "https://TODO-portfolio-url.vercel.app", // TODO: set after deploying
  description:
    "Memoona Amjad, Agentic AI Engineer. Live demos of AI agent systems that plan, call tools, recover from errors and show their work.",

  cvUrl: "", // TODO: put the CV at public/cv.pdf, then set this to "/cv.pdf"

  contact: {
    email: "memoonaamjadoct@gmail.com",
    github: `https://github.com/${GITHUB_USER}`,
    githubHandle: GITHUB_USER,
    linkedin: "", // TODO: LinkedIn profile URL
  },

  projects: [
    {
      name: "HireMate",
      pitch: "TODO: one-line pitch",
      problem: "TODO: business problem",
      agentSteps: ["TODO: step 1", "TODO: step 2", "TODO: step 3"],
      media: { kind: "placeholder", alt: "HireMate demo" },
      diagram: ["Input", "Agent", "Tools", "Output"],
      stack: ["TODO"],
      liveUrl: "",
      githubUrl: repo("hiremate"),
    },
    {
      name: "AskYourData",
      pitch: "TODO: one-line pitch",
      problem: "TODO: business problem",
      agentSteps: ["TODO: step 1", "TODO: step 2", "TODO: step 3"],
      media: { kind: "placeholder", alt: "AskYourData demo" },
      diagram: ["Input", "Agent", "Tools", "Output"],
      stack: ["TODO"],
      liveUrl: "",
      githubUrl: repo("askyourdata"),
    },
    {
      name: "ShopAssist",
      pitch: "TODO: one-line pitch",
      problem: "TODO: business problem",
      agentSteps: ["TODO: step 1", "TODO: step 2", "TODO: step 3"],
      media: { kind: "placeholder", alt: "ShopAssist demo" },
      diagram: ["Input", "Agent", "Tools", "Output"],
      stack: ["TODO"],
      liveUrl: "",
      githubUrl: repo("shopassist"),
    },
  ] satisfies Project[],

  skills: [
    { title: "Agent frameworks", items: ["TODO"] },
    { title: "LLMs", items: ["TODO"] },
    { title: "Backend", items: ["TODO"] },
    { title: "Frontend", items: ["TODO"] },
    { title: "Data", items: ["TODO"] },
    { title: "Cloud", items: ["TODO"] },
  ] satisfies SkillGroup[],

  // TODO: replace with Memoona's real bio (3-5 sentences).
  about: [
    "TODO: short bio. Who I am, my background and what I enjoy building.",
  ],
};
