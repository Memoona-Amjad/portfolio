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
    linkedin: "https://www.linkedin.com/in/memoona-amjad",
  },

  projects: [
    {
      name: "HireMate",
      pitch:
        "A team of AI agents that tailors a CV and cover letter to a job, asks before changing anything, and checks its own work.",
      problem:
        "Tailoring a CV for every job takes hours, and generic AI tools often invent experience. HireMate does it in about two minutes, using only facts the candidate has confirmed.",
      agentSteps: [
        "Specialist agents read the CV and the job post, then score the fit from 0 to 100.",
        "Pauses for a human: asks which skill gaps the candidate really has. Nothing left unticked is ever added.",
        "Rewrites the CV and writes a cover letter using only confirmed facts.",
        "A Critic agent scores the draft and sends it back for a rewrite if it scores below 80.",
      ],
      media: {
        kind: "image",
        src: "/projects/hiremate.webp",
        alt: "HireMate pauses to ask the user about skill gaps while the agent graph shows its progress",
      },
      diagram: ["Parse CV", "Analyse job", "Score fit", "Human review", "Write CV + letter", "Critic"],
      diagramNote: "Critic score below 80: back to the writer (max 2 retries)",
      stack: ["Python", "LangGraph", "FastAPI", "Gemini", "Pydantic", "SSE", "Next.js", "TypeScript", "Vercel"],
      liveUrl: "https://hiremate-brown.vercel.app/",
      githubUrl: repo("hiremate"),
    },
    {
      name: "AskYourData",
      pitch:
        "An AI data analyst: ask a spreadsheet a question in plain English and get a chart and a short business insight.",
      problem:
        "Teams wait days for an analyst to pull answers out of spreadsheets, and chatbots guess at numbers. AskYourData calculates every number with real code and shows its working.",
      agentSteps: [
        "Looks at the data and plans the analysis in a few short steps.",
        "Writes Python (pandas + Plotly) and runs it in a separate, time-limited process.",
        "If the code fails, it reads the error, fixes the code and tries again (up to 3 tries).",
        "Explains the result in plain business language, or builds a full auto report in one click.",
      ],
      media: {
        kind: "image",
        src: "/projects/askyourdata.webp",
        alt: "AskYourData showing the agent's steps, its insight and a revenue-by-city chart",
      },
      diagram: ["Profile data", "Plan", "Write Python", "Safe runner", "Explain"],
      diagramNote: "Code error: the agent reads it and rewrites the code (max 3 tries)",
      stack: ["Python", "Gemini", "pandas", "Plotly", "Streamlit", "pytest"],
      liveUrl: "https://askyourdata-m.streamlit.app/",
      githubUrl: repo("askyourdata"),
    },
    {
      name: "ShopAssist",
      pitch:
        "An AI support agent for an online store that answers and acts: checks orders, starts returns, finds products and hands upset customers to a human.",
      problem:
        "Online stores answer the same questions all day. Most chatbots only paste FAQ text, so a person still has to look up the order and process the request.",
      agentSteps: [
        "Runs an agent loop that picks from 5 tools: policy search (RAG), products, order status, returns and human hand-off.",
        "Business rules live in code: phone check before showing an order, 14-day return window, confirm before acting.",
        "Hands upset customers to a human with a ticket and a short summary.",
        "Shows every step in the chat, and gives the owner a dashboard with full conversation replays.",
      ],
      media: {
        kind: "image",
        src: "/projects/shopassist.webp",
        alt: "ShopAssist owner dashboard next to a chat where the agent starts a return step by step",
      },
      diagram: ["Chat widget", "Agent loop", "5 tools", "Postgres + pgvector", "Answer"],
      diagramNote: "Main model busy: switches to a backup model; database calls retry up to 3 times",
      stack: ["Next.js", "TypeScript", "Vercel AI SDK", "Gemini", "RAG", "Supabase", "pgvector"],
      liveUrl: "https://shopassist-one.vercel.app/",
      githubUrl: repo("shopassist"),
    },
  ] satisfies Project[],

  skills: [
    {
      title: "Agent frameworks",
      items: ["LangGraph", "Vercel AI SDK", "Tool calling", "Human-in-the-loop", "Self-correcting loops"],
    },
    {
      title: "LLMs",
      items: ["Google Gemini", "Structured output", "RAG", "Embeddings", "Prompt design", "Model fallback"],
    },
    { title: "Backend", items: ["Python", "FastAPI", "Node.js", "Server-Sent Events", "Pydantic", "pytest"] },
    { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Streamlit"] },
    { title: "Data", items: ["pandas", "Plotly", "PostgreSQL", "pgvector", "Supabase"] },
    { title: "Cloud", items: ["Vercel", "Streamlit Cloud", "Docker", "Git & GitHub"] },
  ] satisfies SkillGroup[],

  // TODO: replace with Memoona's own bio (background, experience, location).
  // This draft only states what the projects above show.
  about: [
    "I'm an Agentic AI Engineer. I build AI systems that don't just chat: they plan, call tools, check their own work and finish real business tasks end to end.",
    "I care about the parts that make agents safe to use: human approval before important actions, business rules enforced in code, automatic retries and fallbacks when a model fails, and showing every step so people can trust what the agent did.",
  ],
};
