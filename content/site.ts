// All the text and links on the site live in this one file.
// Edit this file to change the site; you never need to touch the components.

export type Media =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster?: string; alt: string }
  | { kind: "placeholder"; alt: string };

export type Project = {
  name: string;
  kind: string; // short label shown next to the name, e.g. "Multi-agent workflow"
  pitch: string; // one line
  problem: string; // 1-2 lines, business language
  agentSteps: string[]; // 3-4 short points
  media: Media; // demo video / GIF / screenshot
  diagram: string[]; // small architecture diagram: boxes shown left to right
  diagramNote?: string; // e.g. a retry loop, shown under the diagram
  metrics: { value: string; label: string }[]; // 3 hard numbers shown on the card
  stack: string[];
  liveUrl: string; // "" = not live yet (button shows "coming soon")
  githubUrl: string;
};

export type SkillGroup = { title: string; items: string[] };
export type BackgroundItem = { when: string; what: string; where: string };
export type Highlight = { value: string; label: string };

const GITHUB_USER = "Memoona-Amjad";
const repo = (name: string) => `https://github.com/${GITHUB_USER}/${name}`;

export const site = {
  name: "Memoona Amjad",
  title: "Agentic AI Engineer",
  // Short line used for SEO and the share image.
  valueStatement:
    "I build AI agents that plan, use tools, check their own work and get real business tasks done, end to end.",

  // Hero text (first thing visitors read).
  headline: "I build AI agents that finish real work.",
  intro:
    "Agents that plan, call tools, check their own output and ask a person before anything important. Three of them are live below. Try any one with sample data in about a minute.",
  location: "Pakistan",

  // Credibility strip under the hero (facts from the CV).
  highlights: [
    { value: "3", label: "live agent systems" },
    { value: "Gold Medalist", label: "BS Computer Science, CGPA 3.86" },
    { value: "NCAI · NUST", label: "Visiting Researcher" },
    { value: "GIKI", label: "Computer Engineer" },
  ] satisfies Highlight[],
  // Public address of the site, used for SEO links and the share image.
  // Leave "" on Vercel: the production URL is then detected automatically.
  // Set it only if you add a custom domain, e.g. "https://memoona.dev".
  url: "",
  description:
    "Memoona Amjad, Agentic AI Engineer. Live demos of AI agent systems that plan, call tools, recover from errors and show their work.",

  cvUrl: "/cv.pdf", // the file lives at public/cv.pdf (replace it to update the CV)
  cvFileName: "Memoona-Amjad-CV.pdf", // name the file gets when downloaded

  contact: {
    email: "memoonaamjadoct@gmail.com",
    github: `https://github.com/${GITHUB_USER}`,
    githubHandle: GITHUB_USER,
    linkedin: "https://www.linkedin.com/in/memoona-amjad",
  },

  projects: [
    {
      name: "HireMate",
      kind: "Multi-agent workflow",
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
      metrics: [
        { value: "6", label: "specialist agents" },
        { value: "1", label: "human approval step" },
        { value: "~2 min", label: "per tailored application" },
      ],
      diagram: ["Parse CV", "Analyse job", "Score fit", "Human review", "Write CV + letter", "Critic"],
      diagramNote: "Critic score below 80: back to the writer (max 2 retries)",
      stack: ["Python", "LangGraph", "FastAPI", "Gemini", "Pydantic", "SSE", "Next.js", "TypeScript", "Vercel"],
      liveUrl: "https://hiremate-brown.vercel.app/",
      githubUrl: repo("hiremate"),
    },
    {
      name: "AskYourData",
      kind: "Self-correcting data analyst",
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
      metrics: [
        { value: "3", label: "tries to fix its own code" },
        { value: "20 s", label: "sandboxed run limit" },
        { value: "1 click", label: "full auto report" },
      ],
      diagram: ["Profile data", "Plan", "Write Python", "Safe runner", "Explain"],
      diagramNote: "Code error: the agent reads it and rewrites the code (max 3 tries)",
      stack: ["Python", "Gemini", "pandas", "Plotly", "Streamlit", "pytest"],
      liveUrl: "https://askyourdata-m.streamlit.app/",
      githubUrl: repo("askyourdata"),
    },
    {
      name: "ShopAssist",
      kind: "Tool-using support agent",
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
      metrics: [
        { value: "5", label: "tools the agent can use" },
        { value: "6", label: "max steps per message" },
        { value: "0", label: "returns started without the customer's OK" },
      ],
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
      items: [
        "LangGraph",
        "LangChain",
        "LlamaIndex",
        "CrewAI",
        "AutoGen",
        "OpenAI Agents SDK",
        "Vercel AI SDK",
        "MCP (Model Context Protocol)",
        "Tool / function calling",
        "Multi-agent systems",
        "Human-in-the-loop",
        "Self-correcting loops",
      ],
    },
    {
      title: "LLMs",
      items: [
        "OpenAI GPT",
        "Google Gemini",
        "Anthropic Claude",
        "xAI Grok",
        "Meta Llama",
        "Mistral",
        "DeepSeek",
        "Qwen",
        "Hugging Face",
        "Ollama (local models)",
        "RAG",
        "Embeddings",
        "Structured output",
        "Prompt engineering",
        "Fine-tuning",
        "Generative AI / GANs",
      ],
    },
    {
      title: "Backend",
      items: [
        "Python",
        "FastAPI",
        "Flask",
        "Node.js",
        "Express",
        "REST APIs",
        "Streaming (SSE)",
        "WebSockets",
        "Pydantic",
        "pytest",
        "PHP",
        "C++",
        "C#",
      ],
    },
    {
      title: "Frontend",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Angular",
        "Tailwind CSS",
        "HTML & CSS",
        "Streamlit",
        "Framer Motion",
        "Chart.js",
      ],
    },
    {
      title: "Data",
      items: [
        "pandas",
        "NumPy",
        "Plotly",
        "PyTorch",
        "scikit-learn",
        "OpenCV",
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "pgvector",
        "Pinecone",
        "ChromaDB",
        "FAISS",
      ],
    },
    {
      title: "Cloud",
      items: [
        "AWS",
        "Google Cloud",
        "Azure",
        "Vercel",
        "Supabase",
        "Render",
        "Streamlit Cloud",
        "Docker",
        "GitHub Actions (CI/CD)",
        "Git & GitHub",
        "Linux",
      ],
    },
  ] satisfies SkillGroup[],

  // About: short first-person bio, then a background list (facts from public/cv.pdf).
  about: [
    "I got into AI through generative models. My final-year project used GANs to design new shoes from photos, and that work is now becoming a research paper. Since then I've moved from models that generate things to agents that get things done.",
    "What I care about most is the boring part that makes agents trustworthy: business rules enforced in code rather than in a prompt, a human approval step before anything important, retries and fallbacks when a model fails, and a clear record of every step so people can see what the agent actually did.",
  ],
  background: [
    { when: "2025 – now", what: "Computer Engineer", where: "GIKI" },
    { when: "2025", what: "Visiting Researcher", where: "National Center of Artificial Intelligence, NUST" },
    { when: "2024", what: "Generative AI Intern", where: "Alright Tech" },
    { when: "2021 – 2025", what: "BS Computer Science, Gold Medalist (CGPA 3.86)", where: "Air University, Kamra" },
  ] satisfies BackgroundItem[],
};
