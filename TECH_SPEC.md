# Hero of Olympus — Technical Specification

> This document is the living blueprint of the project. Any developer should be able to read this and understand how the game works, what technologies are used, and how the pieces fit together.

---

## 1. Overview

**Hero of Olympus** is an educational narrative RPG web app designed for a 9-year-old player. Set in ancient Greece, the player creates a hero, makes branching story choices across scenes, and watches five character stats evolve based on those decisions. After each choice, the game explains *why* the stats changed — that's the core educational mechanic. At the end the player receives a personalized "Hero Portrait" based on their top two stats.

**Current scope:** Chapter I — The Road to Delphi (3 scenes).

---

## 2. Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| UI Framework | React 19 | Functional components, hooks only |
| Build Tool | Vite | Fast HMR, optimized production builds |
| Styling | Inline styles | No CSS files, no UI libraries |
| Language | JavaScript (JSX) | No TypeScript yet |
| Deployment | Vercel (planned) | Static SPA — `npm run build` outputs `dist/` |

---

## 3. Architecture

### 3.1 App Structure
The app is a **single-component state machine** in `src/App.jsx`. There is no routing — the game phase determines what renders.

### 3.2 Phase Flow (State Machine)
```
welcome → name → scene → result → scene → result → ... → end
                   ↑        |
                   └────────┘  (loops for each scene)

From "end": reset → welcome (play again)
```

**Phases:**
| Phase | What renders |
|-------|-------------|
| `welcome` | Title screen, stat explanations, "Begin" button |
| `name` | Hero name input |
| `scene` | Current scene narrative + 4 choice buttons |
| `result` | Choice feedback, stat changes (animated), Oracle's Insight lesson |
| `end` | Hero Portrait (title, description, symbol), final stats, play again |

### 3.3 State Variables
| State | Type | Purpose |
|-------|------|---------|
| `phase` | string | Current game phase (see above) |
| `heroName` | string | Player's chosen hero name |
| `nameInput` | string | Controlled input for name field |
| `sceneIndex` | number | Index into `scenes` array (0-based) |
| `stats` | object | `{ Courage, Wisdom, Discipline, Empathy, Cunning }` — all start at 3 |
| `lastChanges` | object | Stat deltas from the most recent choice (for animation) |
| `choice` | object | The choice object the player selected (for result screen) |
| `showLesson` | boolean | Whether the Oracle's Insight has faded in (700ms delay) |

---

## 4. Core Systems

### 4.1 Stat System
- **Five stats:** Courage, Wisdom, Discipline, Empathy, Cunning
- **Range:** 0–10 (clamped via `Math.max(0, Math.min(10, ...))`)
- **Starting values:** All 3
- Each choice applies `statChanges` — an object like `{ Courage: 1, Empathy: 2 }`
- Stats can go up or down (negative values allowed in `statChanges`)

**Stat metadata (constants):**
| Constant | Purpose |
|----------|---------|
| `INITIAL_STATS` | Starting values `{ Courage: 3, Wisdom: 3, ... }` |
| `STAT_COLORS` | Color per stat for bars and UI |
| `STAT_ICONS` | Emoji icon per stat |

### 4.2 Scene System
Scenes are defined as an array of objects. Each scene has:
```js
{
  id: string,           // Unique identifier
  title: string,        // Display title
  image: string,        // Emoji scene icon
  atmosphere: string,   // Flavor text / setting description
  text: string,         // Main narrative (supports \n for paragraphs)
  choices: [            // Exactly 4 choices per scene
    {
      text: string,         // Choice button label
      statChanges: object,  // e.g. { Courage: 1, Empathy: 2 }
      feedback: string,     // Narrative result of the choice
      lesson: string,       // "Oracle's Insight" — educational explanation
    }
  ]
}
```

**Chapter I scenes (3 total):**
1. `intro` — "The Road to Delphi" — help an old woman with her cart
2. `crossroads` — "The Riddle at the Crossroads" — choose between two paths
3. `temple` — "The Temple of Apollo" — confront a nobleman bribing a priest

### 4.3 Hero Identity System
The `heroIdentity()` function generates a Hero Portrait from the player's final stats:
- Sorts stats descending
- Takes the top two stats
- Looks up a `[top][second]` entry in a 5x4 identity map (25 total combinations)
- Returns `{ title, desc, symbol }` — e.g. "The Brave Thinker", description, "🦁"
- Fallback: "The Rising Hero" if no match

### 4.4 StatBar Component
`<StatBar name value change />` renders an animated stat bar:
- Uses a delayed `useState` to animate from old value to new value
- Color-coded per stat via `STAT_COLORS`
- Shows `+N` / `-N` change indicators when `change` is nonzero
- Bar width = `(value / 10) * 100%`, capped at 100%

---

## 5. Data Models

### 5.1 Game State
```js
{
  phase: "welcome" | "name" | "scene" | "result" | "end",
  heroName: "",
  sceneIndex: 0,
  stats: { Courage: 3, Wisdom: 3, Discipline: 3, Empathy: 3, Cunning: 3 },
  lastChanges: {},   // e.g. { Courage: 1, Empathy: 2 }
  choice: null,      // selected choice object or null
  showLesson: false,
}
```

### 5.2 Scene Schema
See section 4.2 above.

### 5.3 Hero Identity Map
A nested object: `map[topStat][secondStat] → [title, description, symbol]`
- 5 top stats × 4 second stats = 20 primary entries (top !== second)
- Each entry: `["The Brave Thinker", "You face challenges...", "🦁"]`

---

## 6. Game Mechanics

### 6.1 Core Loop
1. Player reads scene narrative
2. Player picks one of four choices
3. Stats update (animated), feedback shown, then Oracle's Insight fades in
4. Player continues to next scene (or sees Hero Portrait at the end)

### 6.2 Educational Mechanic
After every choice, two things happen:
- **Feedback:** narrative consequence of the choice (in-world)
- **Oracle's Insight (lesson):** explains *why* those particular stats changed — this is the teaching moment

### 6.3 No Wrong Answers
The game is explicitly designed so every choice is valid. The end screen reinforces: "These stats show what you've practiced — not what you're worth."

### 6.4 Stat Balance
- Most choices raise 2 stats (+1 to +2 each)
- One choice per scene may lower a stat (e.g. Empathy -1)
- No choice is purely negative

---

## 7. File Structure

```
lillian-game/
├── CLAUDE.md                  # Project guidelines for Claude Code
├── TECH_SPEC.md               # This file — full technical blueprint
├── index.html                 # Vite entry HTML (global reset, dark bg)
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite + React plugin config
└── src/
    ├── main.jsx               # React root: StrictMode + createRoot
    └── App.jsx                # Entire game (state machine, scenes, UI)
```

### Planned future structure:
```
src/
├── main.jsx
├── App.jsx                    # Top-level orchestrator
├── components/
│   └── StatBar.jsx            # Extracted stat bar component
├── chapters/
│   ├── chapter1.js            # Scene data for Chapter I
│   ├── chapter2.js            # Scene data for Chapter II
│   └── ...
├── data/
│   ├── heroIdentities.js      # Hero portrait lookup map
│   └── statConfig.js          # INITIAL_STATS, STAT_COLORS, STAT_ICONS
└── utils/
    └── saveSystem.js           # localStorage save/load (future)
```

---

## 8. UI / Visual Design

### 8.1 Theme
- Dark ancient Greek aesthetic
- Background: dark gradient (`#1a1008 → #2a1f0a → #1a0f15`)
- Text: warm gold/parchment tones (`#e8d8b0`, `#c8b88a`, `#a08060`)
- Accent: gold (`#d4a017`)
- Font: Georgia, serif

### 8.2 Card Pattern
All content lives in "card" containers:
- Semi-transparent background (`rgba(255,248,220,0.05)`)
- Gold border (`rgba(212,160,23,0.28)`)
- `border-radius: 16px`, `max-width: 660px`

### 8.3 Buttons
- Gold gradient buttons for primary actions
- Ghost/transparent buttons for secondary actions (play again)
- Choice buttons: semi-transparent with hover glow effect

---

## 9. Build & Run

### Prerequisites
- Node.js (18+)
- npm

### Commands
```bash
npm install          # Install dependencies
npm run dev          # Dev server with HMR (default: http://localhost:5173)
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
```

### Vercel Deployment
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- No environment variables needed
- No server-side code — pure static SPA

---

## 10. Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-02 | Created project with Vite + React | Fast dev experience, easy Vercel deploy |
| 2026-03-02 | All inline styles, no CSS | User requirement — simplicity, no dependencies |
| 2026-03-02 | Single App.jsx component | Chapter I is small enough; will split when it grows |
| 2026-03-02 | Phase-based state machine (no router) | SPA with no URL routing needed yet |
| 2026-03-02 | Stats range 0–10, start at 3 | Room to grow and shrink across chapters |
| 2026-03-02 | 25-combo Hero Identity map | Every stat pairing gets a unique hero archetype |
| 2026-03-02 | Scenes as data array | Clean separation of narrative from rendering logic; easy to extract to files later |
