# Hero of Olympus — Project Guidelines

## Project Overview
An educational narrative RPG web app for a 9-year-old. The player creates a hero in ancient Greece, makes branching story choices, and watches five character stats evolve. After each choice the game explains *why* stats changed — that's the core educational mechanic. At the end a "Hero Portrait" is generated from the player's top two stats.

Currently: **Chapter I — The Road to Delphi** (3 scenes, 4 choices each).

## Tech Stack
- **Framework:** React 19 (via Vite)
- **Build tool:** Vite
- **Styling:** All inline — no CSS files, no UI libraries
- **Deployment target:** Vercel (static SPA)
- **Language:** JavaScript (JSX)

## Project Structure
```
lillian-game/
├── CLAUDE.md              # Project guidelines (this file)
├── TECH_SPEC.md           # Full technical blueprint
├── index.html             # Vite entry HTML
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx           # React root mount
    └── App.jsx            # Entire game (single component for now)
```

## Conventions
- **All styling is inline.** No CSS files, no styled-components, no Tailwind.
- **No routing.** Single page app — phase-based rendering inside App.jsx.
- **No external UI libraries.** Pure React + browser APIs only.
- Keep code simple and focused; avoid over-engineering.
- Update `TECH_SPEC.md` whenever a new feature, system, or architectural decision is made.
- Update this `CLAUDE.md` whenever project conventions, structure, or tech stack change.

## Commands
```bash
npm install        # Install dependencies
npm run dev        # Start local dev server (Vite)
npm run build      # Production build (outputs to dist/)
npm run preview    # Preview production build locally
```

## Future Expansion Notes
- Scenes will move to `src/chapters/chapter1.js` etc. so chapters are modular.
- A save system (localStorage) will persist stats between sessions.
- Future chapters: more complex moral scenarios, Greek myth mentor characters, longer arcs.

## Key Files
| File | Purpose |
|------|---------|
| `src/App.jsx` | The entire game — state machine, scenes, stats, rendering |
| `TECH_SPEC.md` | Full technical specification / developer blueprint |
| `vite.config.js` | Vite config with React plugin |
| `index.html` | Entry HTML with global reset + dark background |
