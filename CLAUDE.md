# Portfolio website for Memoona Amjad (Agentic AI)

Build this **last**, after the 3 projects have live links.

---

## How to work (read this first)
- **Work through ALL milestones below, in order, until the project is deployed.**
  Do not stop to ask for approval between steps or milestones.
- After each milestone: test it yourself (run it, run tests, run the build),
  fix any problems, then **commit and push**, give a 2-line progress update, and
  go straight on to the next milestone.
- **Only stop and ask the user when you truly need something from them**, for example:
  an API key in `.env`, a login, a button they must click on a hosting site,
  a decision this file does not cover, or something still failing after a few tries.
  When you ask, give exact numbered steps (what to open, what to click, what to paste
  back to you), then continue once they reply.
- **At the very start**, send one message listing everything you will need from the user
  for the whole project (keys, accounts), so they can get it all ready at once.
- **When the last milestone is done**, give the user: the **live demo link**, the
  GitHub link, and a short list of anything left as TODO.

## Who this is for
- Owner: **Memoona Amjad**. GitHub username: **Memoona-Amjad**
- This is one of 3 **agentic AI** portfolio projects being sent to a **CEO** in a few days.
- The audience is a busy CEO first and engineers second. The project must:
  1. Work end to end with a **live demo link**.
  2. Have a **"Try with sample data"** option, so nobody needs to upload their own files.
  3. Show the **agent's thinking on screen** (steps, tool calls, retries).
     This is what proves it is agentic, not just a chatbot.
- We only have a few days: **working end to end first, polish second.**
  Do not add features that are not in this file without asking.

## Git and GitHub
- Git identity is already set to Memoona Amjad. Do not change git config.
- This folder is its own repo. Remote: `https://github.com/Memoona-Amjad/portfolio.git`
- If it is not a git repo yet: `git init`, `git branch -M main`, add the remote.
- Create `.gitignore` **before the first commit** (`.env`, `node_modules`, `.venv`,
  `__pycache__`, `.next`, build outputs, OS files).
- Small commits with clear messages (e.g. `feat: add fit scoring agent`).
- **Do not add any `Co-Authored-By` line or "Generated with Claude Code" line**
  to commits, PRs or READMEs. Plain commit messages only.
- Never force push. The first push may open a GitHub login window: tell the user to
  log in as Memoona-Amjad.

## Secrets
- Never put API keys in code or commits. Read them from `.env`.
- Keep an up-to-date `.env.example` with empty values.
- The user fills in `.env` by hand. Do not read or print `.env`.

## LLM
- Use **Google Gemini** (free tier) through its official SDK.
- Model name comes from an env variable (`LLM_MODEL`), never hard-coded.
  Check the current Gemini docs for the right free-tier "flash" model and SDK.
- Keep LLM calls behind one small wrapper module, so the provider can be swapped.
- Protect the free tier on the public demo: per-IP rate limit
  (about 10 runs per IP per day) with a friendly message when it is hit.

## Code quality (so Memoona can explain it)
- Simple, readable code with short plain-English comments on the important parts.
- Type hints in Python, TypeScript in JS projects.
- Friendly error messages in the UI (never show raw stack traces).
- Check the latest docs for any library whose API may have changed.

## The repo must include
1. `README.md`, in this order: one-line pitch + **Live demo** link + demo GIF/screenshot
   placeholder; the problem (2–3 lines, business language); what the agent does
   (short numbered steps); architecture diagram in **Mermaid**; tech stack;
   run locally (Windows commands); honest "Limitations and next steps".
2. `docs/HOW_IT_WORKS.md`: a simple-English walkthrough for Memoona to prepare for a call
   with the CEO: what each agent/tool does, why it is designed this way, what happens when
   something fails, and 8–10 likely interview questions with short answers.

## Environment
- Windows 11, VS Code, Python 3.12, Node, Git. Give Windows-friendly commands.
- Python: use a `.venv` virtual environment and `requirements.txt`.

---
# Project spec

## Goal
A one-page, fast, professional site that a CEO can scan in 60 seconds and come away
thinking: "she builds agentic AI systems that actually work."

## Stack
- **Next.js (App Router) + TypeScript + Tailwind + framer-motion**
- Static site, hosted on **Vercel** (free).
- All content in one file (`content/site.ts`) so it is easy to edit without touching
  components.

## Sections
1. **Hero**: name, title ("Agentic AI Engineer"), one-line value statement,
   buttons: "See projects", "Download CV", "Contact".
2. **Projects** (the main section), one rich card per project, in this order:
   HireMate, AskYourData, ShopAssist. Each card:
   - Name + one-line pitch
   - Business problem (1–2 lines)
   - "What the agent does" (3–4 short points)
   - Demo video/GIF (placeholder until recorded)
   - Small architecture diagram
   - Tech stack badges
   - Buttons: **Live demo** and **GitHub**
3. **What I work with**: skills grouped (Agent frameworks, LLMs, Backend, Frontend,
   Data, Cloud).
4. **About**: short bio (placeholder, marked TODO).
5. **Contact**: email `memoonaamjadoct@gmail.com`, GitHub `Memoona-Amjad`,
   LinkedIn (TODO placeholder).

Live demo and GitHub links: read them from `content/site.ts`, with the GitHub ones
pre-filled as `https://github.com/Memoona-Amjad/<repo>`.
Anything unknown (bio, LinkedIn, CV file, demo URLs, videos) = clear `TODO` placeholders,
listed at the end in a message to the user.

## Design
- Clean and modern, dark theme with one accent colour, good typography.
- Subtle animations only. Must look great on mobile.
- Good SEO: title, description, Open Graph image, favicon.
- Aim for Lighthouse 90+.

## Milestones (test, commit and push after each, then continue)
1. Layout + all sections with placeholder content.
2. Real project content: if `../hiremate/README.md`, `../askyourdata/README.md` and
   `../shopassist/README.md` exist, use them for the cards. **Ask the user for the 3 live
   demo links**, bio, LinkedIn and CV file if they are not known yet.
3. Animations, mobile polish, SEO, Open Graph image, favicon, Lighthouse check.
4. README.
5. **Deploy to Vercel** (CLI via `npx vercel` or the dashboard). Ask the user for any
   login or clicks needed.
6. **Test the live site** on desktop and mobile size, fix anything broken, push, and give
   the user the **live portfolio link** plus the list of remaining TODOs.
