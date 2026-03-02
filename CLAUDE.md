# Hero of Olympus — Project Guidelines

## Project Overview
An educational narrative RPG web app for a 9-year-old. Set in ancient Greece, the player creates a hero, makes branching story choices, and watches five character stats evolve. After each choice the game explains *why* stats changed — that's the core educational mechanic. At chapter end a "Hero Portrait" is generated from the player's top two stats.

Currently: **Chapter I** (3 scenes) + **Chapter II** (5 scenes). Stats and flags carry between chapters.

## Tech Stack
- **Framework:** React 19 (via Vite)
- **Build tool:** Vite
- **Styling:** All inline — no CSS files, no UI libraries
- **Deployment target:** Vercel (static SPA)
- **Language:** JavaScript (JSX)

## Project Structure
```
lillian-game/
├── CLAUDE.md
├── TECH_SPEC.md
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx               # React root mount
    ├── App.jsx                # Orchestrator — all game state, phase routing
    ├── styles.js              # Shared inline style objects (bg, card, goldBtn)
    ├── engine/
    │   ├── stats.js           # INITIAL_STATS, STAT_COLORS, STAT_ICONS, heroIdentity, getMythFigure
    │   ├── flags.js           # INITIAL_FLAGS (10 booleans), applyFlags helper
    │   └── sceneText.js       # resolveSceneText, resolveChoiceText (variants/templates)
    ├── data/
    │   ├── chapter1.js        # 3 scenes with setsFlags
    │   └── chapter2.js        # 5 scenes with textVariants, textTemplate, feedbackTemplate
    ├── components/
    │   ├── StatBar.jsx        # Animated stat bar
    │   ├── ChoiceButton.jsx   # Choice button with hover
    │   ├── OracleInsight.jsx  # Lesson card
    │   └── DiscussionGuide.jsx # Parent discussion prompts (cream card, collapsible)
    └── screens/
        ├── WelcomeScreen.jsx
        ├── NameScreen.jsx
        ├── SceneScreen.jsx
        ├── ResultScreen.jsx
        └── ChapterEndScreen.jsx
```

## Conventions
- **All styling is inline.** No CSS files, no styled-components, no Tailwind.
- **No routing.** Single page app — phase-based rendering inside App.jsx.
- **No external UI libraries.** Pure React + browser APIs only.
- **Stats never reset between chapters.** They carry forward.
- **Flags never reset between chapters.** They carry forward.
- Scene data files are pure data (no React). Text resolution happens via `sceneText.js`.
- Scenes can use `text` (plain), `textVariants` (flag-based), or `textTemplate` (figure interpolation).
- Choices can use `feedback` (plain) or `feedbackTemplate` (figure interpolation).
- Choices can include `setsFlags: { flagName: true }` to set boolean flags.
- Update `TECH_SPEC.md` whenever a new feature, system, or architectural decision is made.

## Commands
```bash
npm install        # Install dependencies
npm run dev        # Start local dev server (Vite)
npm run build      # Production build (outputs to dist/)
npm run preview    # Preview production build locally
```

## Future Expansion Notes
- A save system (localStorage) will persist stats between sessions.
- Future chapters: more complex moral scenarios, longer arcs.
- New chapters: add `src/data/chapter3.js` etc., wire into App.jsx.

## Key Files
| File | Purpose |
|------|---------|
| `src/App.jsx` | Orchestrator — all state, phase routing, no rendering |
| `src/engine/stats.js` | Stat constants, heroIdentity, getMythFigure |
| `src/engine/flags.js` | Flag definitions and applyFlags |
| `src/engine/sceneText.js` | Text variant/template resolution |
| `src/data/chapter1.js` | Chapter 1 scene data (3 scenes) |
| `src/data/chapter2.js` | Chapter 2 scene data (5 scenes) |
| `src/screens/ChapterEndScreen.jsx` | End screen — figure reveal, stats comparison, discussion guide |
| `TECH_SPEC.md` | Full technical specification / developer blueprint |
