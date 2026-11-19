# How the portfolio works (for Memoona)

A simple walkthrough of this website, so you can explain it and update it with confidence.
The *agentic* explanations for each project are in that project's own `docs/HOW_IT_WORKS.md`.

## 1. The big picture

- It is **one page**, built with **Next.js** and hosted on **Vercel**.
- It is **static**: when Vercel builds the site, it turns everything into plain HTML, CSS, images and a little JavaScript.
  Nothing runs on a server when someone visits, so it is fast, free to host and cannot "go down" under load.
- There are **no AI calls and no API keys** on this site. The AI work happens inside the three projects it links to.

## 2. What each part does

| File / folder | What it does |
|---|---|
| `content/site.ts` | **All the words and links.** Name, title, the three projects, skills, bio, contact. Edit this to change the site. |
| `app/page.tsx` | Puts the sections in order: Nav, Hero, Projects, Skills, About, Contact, Footer. |
| `app/layout.tsx` | The page "frame": fonts, the SEO title/description, and search-engine data about you. |
| `components/ProjectCard.tsx` | One project card: pitch, problem, agent steps, picture, diagram, tech badges, buttons. |
| `components/ArchDiagram.tsx` | Draws the small left-to-right architecture diagram from a list of step names. |
| `components/Reveal.tsx` | The gentle fade-in when sections scroll into view (framer-motion). |
| `components/ButtonLink.tsx` | All buttons. If a link is empty it shows a greyed-out "coming soon" button instead of a broken link. |
| `app/opengraph-image.tsx` | Builds the preview picture shown when the link is shared on LinkedIn, WhatsApp, X, etc. |
| `app/icon.svg`, `app/apple-icon.tsx` | The browser-tab icon and the phone home-screen icon. |
| `app/sitemap.ts`, `app/robots.ts` | Tell Google what to index. |
| `lib/siteUrl.ts` | Works out the site's public address (custom domain, or the Vercel address automatically). |
| `public/projects/` | The screenshots used on the project cards. |

## 3. Why it is designed this way

- **One content file**: anyone can update text or links in two minutes without touching design code.
- **Static site**: the fastest and most reliable option for a portfolio. Lighthouse scores are 93–100.
- **The project card shows the agent at work** (steps, tool calls, approvals), not just the UI, because the point is to prove
  the projects are *agents*, not chatbots.
- **"Live demo" is the main button** on each card: a CEO can try a project in one click with sample data.
- **Mobile first**: on a phone the screenshot appears right under the project title, so the proof is seen early.

## 4. What happens when something fails

- **A link isn't ready yet** (CV, a demo): the button shows "coming soon" and can't be clicked, so there are no 404s.
- **A project's live demo is slow or asleep**: that is the project's hosting, not this site. AskYourData on Streamlit can take a
  few seconds to wake up. The site itself stays up.
- **JavaScript is blocked or slow**: all text is in the HTML already. Only the fade-in animation needs JavaScript.
- **Vercel build fails**: the previous version stays live. Run `npm run build` locally to see the error.

## 5. Common updates

- Change text or links: `content/site.ts`, then commit and push. Vercel redeploys automatically in about a minute.
- Add the CV: save as `public\cv.pdf`, set `cvUrl: "/cv.pdf"`.
- Add a demo video: put `hiremate.mp4` in `public\projects\` and set
  `media: { kind: "video", src: "/projects/hiremate.mp4", alt: "HireMate demo" }`.

## 6. Likely questions (with short answers)

1. **"Why Next.js for a one-page site?"**
   It builds to fast static files, has built-in SEO tools (meta tags, share image, sitemap), and it's the same stack as two of my projects.
2. **"Is any AI running on this page?"**
   No. It's static and has no keys. The AI runs inside each project, and each one has rate limits to protect its free tier.
3. **"How do I know the projects are agents and not chatbots?"**
   Each one plans, calls tools, checks its own results and retries. HireMate pauses for human approval and has a critic that sends work back.
   AskYourData fixes its own code errors. ShopAssist enforces business rules inside its tools. Every demo shows these steps on screen.
4. **"How fast is the site?"**
   Lighthouse: 100 on desktop and 93–95 on mobile for performance, and 100 for accessibility, best practices and SEO.
5. **"How would you update it?"**
   Edit `content/site.ts` and push. Vercel redeploys automatically.
6. **"What did you do about accessibility?"**
   Proper headings, alt text on every image, labelled buttons, good colour contrast, keyboard focus outlines, and reduced motion respected.
7. **"Why screenshots instead of embedding the demos?"**
   Embedding three live apps would make the page slow and use up free AI quota. A screenshot plus a one-click live demo is faster and safer.
8. **"What would you add next?"**
   Short demo videos of each agent, a custom domain, and a deeper case-study page per project.
9. **"Which project are you proudest of, and why?"**
   (Your answer. A good pick is HireMate: multi-agent graph, human-in-the-loop pause, and a critic retry loop.)
