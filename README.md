# Nguyễn Trường Bảo — Cybersecurity × AI Portfolio

Static personal portfolio for **Nguyễn Trường Bảo** (Duy Tan University) — a cybersecurity-focused engineer with growing AI / AI Engineering skills.

- GitHub: [zewolkt3939](https://github.com/zewolkt3939)
- LinkedIn: [nguyen-truong-bao](https://www.linkedin.com/in/nguyen-truong-bao-347437250/)
- Email: bigzero3939@gmail.com

Positioning:

> **Cybersecurity × AI × Systems**  
> Building secure systems, hunting threats, automating security workflows, and applying AI to real cybersecurity problems.

Design language: academic / minimal (inspired by [Academic Pages](https://academicpages.github.io/)) — fixed left sidebar, main content on the right, dark/light mode, technical density without hacker clichés.

## Quick start

No build step. Open:

```text
index.html
```

Or run a local server (recommended for blog filters):

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

Then open `http://localhost:8080`.

**Easiest:** VS Code / Cursor + **Live Server** → right-click `index.html` → *Open with Live Server*.

Detailed customization (blog posts, images, placeholders): see [`HUONG-DAN.md`](./HUONG-DAN.md).

Content strategy / full brief:  
`MASTER PROMPT — BUILD MY PERSONAL CYBERSECURITY + AI PORTFOLIO.md`

## What the site communicates

1. Who you are — cybersecurity student → security + applied AI  
2. Journey — Networking → Systems → Cyber → SOC/Hunt → Automation → AI Security  
3. What you build — malware analysis AI, SOC prioritization, threat hunting, automotive lab  
4. Honest status — In Progress / Hands-on Lab / Learning (no fabricated certs)

## File structure

```text
PorfolioGrok/
├── index.html              # Portfolio (About → Contact)
├── style.css               # Light/dark + blog + new identity components
├── script.js               # Theme, nav, form, blog filter/cards
├── README.md
├── HUONG-DAN.md
└── blog/
    ├── posts-data.js       # Post catalog
    ├── index.html          # Blog hub
    ├── writeup-template.html
    ├── htb/ · soc/ · ad/ · tryhackme/ · footprinting/
```

## Customize first

| Item | Where |
|------|--------|
| Name, email, social URLs | `index.html` (sidebar + contact) |
| Experience roles/dates | `#experience` placeholders `[ROLE]`, `[DATE]` |
| GitHub project links | `#projects` cards |
| Avatar | `.avatar` `src` |
| Blog posts | `blog/posts-data.js` + HTML under `blog/` |

## Sections

| Section | Purpose |
|---------|---------|
| About / Hero | Cybersecurity × AI × Systems identity |
| Journey | Technical progression narrative |
| AI × Security | Applied AI positioning (not pure ML research) |
| Projects | Tier 1–3 with honest status badges |
| Labs & Write-ups | HTB / SOC / AD notes via blog system |
| Skills | Defensive, offensive, systems, AI, automotive |
| Experience | Training contexts + placeholders |
| Learning | Progress without fake certifications |
| Contact | Links + demo form |

## Design notes

- Dark professional theme default via system preference  
- Mono accents for pipelines / kicker (JetBrains Mono)  
- Status colors: amber = In Progress, green = Lab, purple = Learning  
- Avoid matrix/glitch/hacker aesthetics by design  

## License

Use and adapt freely for your personal portfolio.
