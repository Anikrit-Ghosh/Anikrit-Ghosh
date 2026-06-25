# PORTFOLIO WEBSITE — MASTER TEMPLATE
> Give this entire file to Cursor / GitHub Copilot / Claude in VS Code as context.
> Prompt: "Build a cinematic dark-themed portfolio website using this template. Use Next.js + Tailwind CSS + Framer Motion + GSAP ScrollTrigger."

---

## 🧠 IDENTITY

```
Name:        ANIKRIT GHOSH
Role:        AI/ML Developer & Full-Stack Engineer
Tagline:     Passionate about building production-ready AI & full-stack applications
Location:    [Mumbai, India]
Email:       [anikritcoding87960@gmail.com]
GitHub:      https://github.com/Anikrit-Ghosh[Anikrit-Ghosh]
LinkedIn:    https://www.linkedin.com/in/ghosh-anikrit-subroto-26465b36a/[Ghosh Anikrit Subroto]
Resume:      /resume.pdf  (place in /public folder)
```

---

## 🎨 DESIGN SYSTEM

```
Theme:         Dark cinematic
Background:    #020617  (navy black)
Accent:        #f97316  (orange)
Secondary:     #3b82f6  (blue)
Text Primary:  #ffffff
Text Muted:    #94a3b8  (blue-gray)
Font Heading:  Inter or Space Grotesk (Bold 700-900)
Font Body:     Inter (400-500)
Border Radius: 24px (cards), 12px (tags)
Shadows:       0 50px 100px -20px rgba(0,0,0,0.5)
```

---

## 🗂️ SITE SECTIONS (in order)

### 1. HERO
```
Layout:       Full viewport, centered
Left side:    Name + Role + Tagline + CTA buttons
Right side:   3D tilt card with your photo (existing .html card style)
Animation:    Typewriter on role text, fade-in stagger on load
Buttons:      [View Projects →]  [Download Resume]
Particles:    20–40 floating orange/blue dots
Scroll cue:   Animated down-arrow that fades on scroll
```

### 2. ABOUT
```
Layout:       Two columns — text left, image/stats right
Content:
  - 2–3 sentences about who you are
  - What drives you (AI, building real products, solving problems)
  - Currently: [what you're working on / studying]
Stats cards (animated counters):
  - X+ Projects Built
  - X+ Technologies
  - X+ Months Experience
  - X+ GitHub Stars (optional)
```

### 3. SKILLS
```
Layout:       Category grid with floating badges
Categories:
  AI/ML:
    - Python, TensorFlow, PyTorch, Scikit-learn
    - LangChain, OpenAI API, HuggingFace
    - [add your tools]
  Full-Stack:
    - React, Next.js, Node.js, Express
    - [add your stack]
  Databases:
    - PostgreSQL, MongoDB, Redis
    - [add yours]
  DevOps / Tools:
    - Docker, Git, GitHub Actions
    - [add yours]
Animation:  Each badge flies in from bottom with stagger on scroll
Style:      Glassmorphism cards per category
```

### 4. PROJECTS
```
Layout:       Bento grid (2–3 columns, variable heights)
Each project card contains:
  - Project name (large, bold)
  - One-line description
  - Tech stack tags (small pills)
  - [GitHub] [Live Demo] buttons
  - Hover: 3D tilt lift effect (match hero card style)
  - Optional: screenshot or animated GIF

## ADD YOUR PROJECTS BELOW ##

Project 1:
  Name:        [Project Name]
  Description: [What it does in one sentence]
  Tech:        [Python, FastAPI, React, etc.]
  GitHub:      https://github.com/[you]/[repo]
  Live:        https://[your-deploy].vercel.app
  Highlight:   true  ← makes card larger in bento

Project 2:
  Name:        [Project Name]
  Description: [What it does in one sentence]
  Tech:        [Stack]
  GitHub:      https://github.com/[you]/[repo]
  Live:        [URL or leave blank]
  Highlight:   false

Project 3:
  Name:        [Project Name]
  Description: [What it does in one sentence]
  Tech:        [Stack]
  GitHub:      https://github.com/[you]/[repo]
  Live:        [URL or leave blank]
  Highlight:   false

Project 4:
  Name:        [Project Name]
  Description: [What it does in one sentence]
  Tech:        [Stack]
  GitHub:      [URL]
  Live:        [URL]
  Highlight:   false
```

### 5. EXPERIENCE / TIMELINE (optional but recommended)
```
Layout:       Vertical timeline, alternating left/right
Each entry:
  - Role / Position
  - Company or Project
  - Duration (Month Year – Month Year)
  - 2–3 bullet points of what you did
Animation:    Line draws down on scroll, entries fade in

## ADD YOUR EXPERIENCE BELOW ##

Entry 1:
  Role:     [Job Title / Intern / Freelance]
  Where:    [Company / Self / Open Source]
  When:     [Month Year] – [Month Year or Present]
  Points:
    - [Achievement or responsibility]
    - [Achievement or responsibility]

Entry 2:
  Role:     [Role]
  Where:    [Where]
  When:     [Duration]
  Points:
    - [Point]
    - [Point]
```

### 6. CONTACT
```
Layout:       Centered, minimal
Heading:      "Let's Build Something."
Subtext:      Open to internships, freelance, and collaborations
Links:        Email button, GitHub, LinkedIn, Twitter
Form (optional):
  Fields: Name, Email, Message
  Action: EmailJS or Resend API (free)
Animation:    Section slides up on scroll
```

---

## ⚙️ TECH STACK TO USE

```
Framework:    Next.js 14 (App Router)
Styling:      Tailwind CSS
Animation:    Framer Motion (section transitions) + GSAP + ScrollTrigger (cinematic scroll)
Smooth Scroll: Lenis
Icons:        Lucide React or React Icons
Deployment:   Vercel (free, one command)
```

---

## 🎬 ANIMATION SPEC (cinematic scroll — reel style)

```
Scroll library:  Lenis (smooth inertia scroll)
Section enter:   scale 0.85 → 1.0 + opacity 0 → 1 + translateY 60px → 0
Section exit:    scale 1.0 → 0.92 + blur 0 → 4px (previous section fades behind)
Stagger:         0.1s delay between child elements
Hero card:       3D tilt on mousemove (rotateX ±10deg, rotateY ±10deg)
Project cards:   Same tilt on hover
Cursor:          Custom: small orange dot + large ring with lag (CSS + JS)
ScrollTrigger:   Pin sections during transition for "zoom through space" feel
```

---

## 📁 RECOMMENDED FILE STRUCTURE

```
/portfolio
├── app/
│   ├── page.tsx          ← main page, imports all sections
│   ├── layout.tsx        ← font, metadata, Lenis wrapper
│   └── globals.css       ← base styles, CSS variables
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Timeline.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   ├── CustomCursor.tsx
│   └── ParticleField.tsx
├── public/
│   ├── image.png         ← your photo (already have this)
│   └── resume.pdf
├── data/
│   └── projects.ts       ← export your project list as array
├── tailwind.config.ts
└── package.json
```

---

## 🚀 CURSOR / VS CODE PROMPT TO USE

Paste this into Cursor chat after uploading this file:

```
I want to build a cinematic dark portfolio website.
Use this template.md as the single source of truth for all content, design, and structure.

Stack: Next.js 14, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, Lenis smooth scroll.

Start by:
1. Scaffolding the Next.js project with Tailwind
2. Installing: framer-motion gsap @studio-freight/lenis lucide-react
3. Creating the component file structure from the template
4. Building the Hero section first with the 3D tilt card and typewriter effect

Design system from template:
- Background: #020617, Accent: #f97316, Secondary: #3b82f6
- Dark cinematic theme, Inter font, 24px border radius on cards

Make each section scroll-animated: scale 0.85→1 + fade in on enter, blur+scale out on exit.
Add a custom cursor (orange dot + lagging ring).
```

---

## ✅ LAUNCH CHECKLIST

- [ ] Replace all `[placeholders]` with real info
- [ ] Add your photo to `/public/image.png`
- [ ] Add your resume to `/public/resume.pdf`
- [ ] Fill in all project entries with real GitHub links
- [ ] Test on mobile (responsive check)
- [ ] Deploy to Vercel: `npx vercel --prod`
- [ ] Add custom domain (optional, Vercel free)
- [ ] Submit to: showwcase.com, peerlist.io, devfolio.co
