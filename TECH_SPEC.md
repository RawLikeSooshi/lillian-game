# Hero of Olympus — Technical Specification

> This document is the living blueprint of the project. Any developer should be able to read this and understand how the game works, what technologies are used, and how the pieces fit together.

---

## 1. Overview

**Hero of Olympus** is an educational narrative RPG web app designed for a 9-year-old player. Set in ancient Greece, the player creates a hero, makes branching story choices across scenes, and watches five character stats evolve based on those decisions. After each choice, the game explains *why* the stats changed — that's the core educational mechanic. At chapter end the player receives a personalized "Hero Portrait" based on their top two stats.

**Current scope:** Chapter I (3 scenes) + Chapter II (5 scenes). Stats and flags carry between chapters.

---

## 2. Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| UI Framework | React 19 | Functional components, hooks only |
| Build Tool | Vite | Fast HMR, optimized production builds |
| Styling | Inline styles | No CSS files, no UI libraries. Shared via `src/styles.js` |
| Language | JavaScript (JSX) | No TypeScript yet |
| Deployment | Vercel | Static SPA — `npm run build` outputs `dist/` |

---

## 3. Architecture

### 3.1 App Structure
`src/App.jsx` is the **orchestrator** — it holds all game state and routes phases to screen components. No rendering logic lives in App.jsx itself; it delegates to screen components.

### 3.2 Phase Flow (State Machine)
```
welcome → name → [Ch1: scene↔result ×3] → end(ch1)
                                              ↓
                  "Continue to Ch2" → [Ch2: scene↔result ×5] → end(ch2)

From any "end": "Play Again" → welcome (full reset)
```

**Phases:**
| Phase | Screen Component | What renders |
|-------|-----------------|-------------|
| `welcome` | WelcomeScreen | Title, stat explanations, "Begin" button |
| `name` | NameScreen | Hero name input |
| `scene` | SceneScreen | Scene narrative + 4 choice buttons |
| `result` | ResultScreen | Feedback, stat changes (animated), Oracle's Insight, amber banner |
| `end` | ChapterEndScreen | Hero Portrait, stats, figure reveal (Ch2), discussion guide (Ch2) |

### 3.3 State Variables
| State | Type | Purpose |
|-------|------|---------|
| `phase` | string | Current game phase |
| `heroName` | string | Player's chosen hero name |
| `nameInput` | string | Controlled input for name field |
| `chapter` | number | Current chapter (1 or 2) |
| `sceneIndex` | number | Index into current chapter's scene array (resets per chapter) |
| `stats` | object | `{ Courage, Wisdom, Discipline, Empathy, Cunning }` — **never reset between chapters** |
| `flags` | object | 10 boolean flags — **never reset between chapters** |
| `lastChanges` | object | Stat deltas from the most recent choice (for animation) |
| `choice` | object | The resolved choice object (for result screen) |
| `showLesson` | boolean | Whether the Oracle's Insight has faded in (700ms delay) |
| `ch1EndStats` | object/null | Snapshot of stats when Ch1 ends (for Ch2 comparison) |

---

## 4. Core Systems

### 4.1 Stat System (`src/engine/stats.js`)
- **Five stats:** Courage, Wisdom, Discipline, Empathy, Cunning
- **Range:** 0–10 (clamped via `Math.max(0, Math.min(10, ...))`)
- **Starting values:** All 3
- Each choice applies `statChanges` — e.g. `{ Courage: 1, Empathy: 2 }`
- Stats carry between chapters — never reset

**Constants:** `INITIAL_STATS`, `STAT_COLORS`, `STAT_ICONS`

### 4.2 Scene System (`src/data/chapter*.js`)
Scenes are arrays of objects. Each scene supports three text modes:

**Plain text scene:**
```js
{ id, title, image, atmosphere, text, choices }
```

**Flag-variant scene (text changes based on prior choices):**
```js
{ id, title, image, atmosphere, textVariants: { flagName: "...", default: "..." }, choices }
```

**Template scene (text includes myth figure):**
```js
{ id, title, image, atmosphere, textTemplate: "...{figure.disguise}...{figure.greeting}...", choices }
```

**Atmosphere** can also use variants: `atmosphereVariants: { flagName: "...", default: "..." }`

**Choice schema:**
```js
{
  text: string,
  statChanges: { Courage: 1, Empathy: 2 },
  feedback: string,           // OR feedbackTemplate for figure interpolation
  lesson: string,
  setsFlags: { flagName: true },     // optional
  isRightChoiceHardOutcome: boolean, // optional — triggers amber banner
}
```

### 4.3 Flag System (`src/engine/flags.js`)
Boolean flags set by choices, persisted across chapters.

| Flag | Set by |
|------|--------|
| `helpedOldWoman` | Ch1 Scene 1 choices A, B |
| `tookDirectAction` | Ch1 Scene 1 choice A |
| `studiedBeforeActing` | Ch1 Scene 1 choice B |
| `tookForestPath` | Ch1 Scene 2 choices A, C, D |
| `spokeAgainstLycon` | Ch1 Scene 3 choice A |
| `reportedLyconQuietly` | Ch1 Scene 3 choice B |
| `understoodLycon` | Ch1 Scene 3 choice C |
| `stayedSilentAtTemple` | Ch1 Scene 3 choice D |
| `liedToLyconsAgent` | Ch2 Scene 5 choice B |
| `namedSomeoneToAgent` | Ch2 Scene 5 choice B |

`applyFlags(currentFlags, setsFlags)` merges new flags into state.

### 4.4 Scene Text Resolution (`src/engine/sceneText.js`)
- `resolveSceneText(scene, flags, figure)` — resolves `textVariants`/`textTemplate`/`atmosphereVariants` to plain strings
- `resolveChoiceText(choice, figure)` — resolves `feedbackTemplate` to plain `feedback`
- `resolveVariant(variants, flags)` — first true flag key wins, falls back to `default`
- `interpolateTemplate(template, figure)` — replaces `{figure.disguise}`, `{figure.greeting}`, etc.

**Timing:** Scene text is resolved at render time (current stats → figure). Choice feedback is resolved at click time (updated stats → figure).

### 4.5 Myth Figure System (`src/engine/stats.js`)
`getMythFigure(stats)` returns a figure based on the player's dominant stat:

| Dominant Stat | Figure |
|---------------|--------|
| Wisdom or Empathy | Athena 🦉 |
| Courage or Discipline | Heracles 🦁 |
| Cunning | Odysseus 🧭 |
| Tie | Athena (preferred) |

Each figure has: `name`, `disguise`, `greeting`, `style`, `symbol`, `revealLine`.

**The figure's name is never shown during Chapter 2 gameplay.** It's revealed only at the Ch2 end screen.

### 4.6 Hero Identity System (`src/engine/stats.js`)
`heroIdentity(stats)` generates a Hero Portrait from the player's top two stats:
- 5×4 = 20 primary combinations, each with unique title, description, symbol
- Fallback: "The Rising Hero"
- Returns `{ title, desc, symbol }`

### 4.7 StatBar Component (`src/components/StatBar.jsx`)
Animated stat bar: delayed `useState` animates from old to new value. Color-coded per stat. Shows `+N`/`-N` change indicators.

### 4.8 ChoiceButton Component (`src/components/ChoiceButton.jsx`)
Choice button with hover glow effect. Labeled A/B/C/D.

### 4.9 OracleInsight Component (`src/components/OracleInsight.jsx`)
Blue-tinted lesson card with "The Oracle's Insight" header.

### 4.10 DiscussionGuide Component (`src/components/DiscussionGuide.jsx`)
Parent-facing, collapsible section at Ch2 end. **Different visual style** — cream card (#faf8f0), not the dark game theme. Generates 3 questions dynamically based on flags:
1. Market scene question (based on `tookDirectAction` flag)
2. Soldier's dilemma question (always included)
3. Lycon agent question (branches on `liedToLyconsAgent`, `spokeAgainstLycon`, or generic)

Header: "A few questions worth talking about"
Note: "These questions have no right answers. They're just good ones."

### 4.11 Amber Banner (ResultScreen)
When a choice has `isRightChoiceHardOutcome: true`, the result screen shows a subtle amber card:
> "This was the harder path. The Oracle is watching."

Currently only on Ch2 Scene 4, Choice A ("Stand your ground").

---

## 5. Data Models

### 5.1 Game State
```js
{
  phase: "welcome" | "name" | "scene" | "result" | "end",
  heroName: "",
  chapter: 1,
  sceneIndex: 0,
  stats: { Courage: 3, Wisdom: 3, Discipline: 3, Empathy: 3, Cunning: 3 },
  flags: { helpedOldWoman: false, tookDirectAction: false, ... },
  lastChanges: {},
  choice: null,
  showLesson: false,
  ch1EndStats: null,
}
```

### 5.2 Hero Identity Map
`map[topStat][secondStat] → [title, description, symbol]` — 20 primary entries.

---

## 6. Game Mechanics

### 6.1 Core Loop
1. Player reads scene narrative
2. Player picks one of four choices
3. Stats update (animated), feedback shown, then Oracle's Insight fades in (700ms)
4. Player continues to next scene (or sees chapter end)

### 6.2 Educational Mechanic
After every choice:
- **Feedback:** narrative consequence (in-world)
- **Oracle's Insight:** explains *why* those particular stats changed

### 6.3 No Wrong Answers
Every choice is valid. End screen: "These stats show what you've practiced — not what you're worth."

### 6.4 Consequence System (Flags)
Choices in Ch1 set flags that change Ch2 narrative text:
- Helping the old woman → different Ch2 Scene 1 opening
- Temple choice → completely different Ch2 Scene 4 (Lycon's agents react to what you did)

### 6.5 Chapter Transition
After Ch1 end screen: "Continue to Chapter 2 →" button. Stats snapshot saved to `ch1EndStats`. Stats and flags carry forward.

### 6.6 Chapter 2 End
- Myth figure reveal (narrative beat + name)
- Hero Portrait (may have shifted since Ch1)
- Stats comparison: Ch1 end vs Ch2 end with deltas
- Parent Discussion Guide

---

## 7. File Structure

```
lillian-game/
├── CLAUDE.md
├── TECH_SPEC.md
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx                    # Orchestrator (state + phase routing)
    ├── styles.js                  # Shared inline styles (bg, card, goldBtn)
    ├── engine/
    │   ├── stats.js               # Stats, heroIdentity, getMythFigure
    │   ├── flags.js               # Flags, applyFlags
    │   └── sceneText.js           # Text resolution (variants, templates)
    ├── data/
    │   ├── chapter1.js            # 3 scenes
    │   └── chapter2.js            # 5 scenes
    ├── components/
    │   ├── StatBar.jsx
    │   ├── ChoiceButton.jsx
    │   ├── OracleInsight.jsx
    │   └── DiscussionGuide.jsx
    └── screens/
        ├── WelcomeScreen.jsx
        ├── NameScreen.jsx
        ├── SceneScreen.jsx
        ├── ResultScreen.jsx
        └── ChapterEndScreen.jsx
```

---

## 8. UI / Visual Design

### 8.1 Game Theme
- Dark ancient Greek aesthetic
- Background: gradient `#1a1008 → #2a1f0a → #1a0f15`
- Text: warm gold/parchment (`#e8d8b0`, `#c8b88a`, `#a08060`)
- Accent: gold (`#d4a017`)
- Font: Georgia, serif

### 8.2 Card Pattern
Semi-transparent bg (`rgba(255,248,220,0.05)`), gold border, `border-radius: 16px`, `max-width: 660px`.

### 8.3 Buttons
- Gold gradient for primary actions
- Ghost/transparent for secondary (play again)
- Choice buttons: semi-transparent with hover glow

### 8.4 Discussion Guide Theme
Deliberately different — cream card (`#faf8f0` bg, `#3a3020` text, `#e0d8c0` border). "Outside" the game world.

---

## 9. Scene Catalog

### Chapter I — The Road to Delphi (3 scenes)
1. `intro` — "The Road to Delphi" — help an old woman with her cart
2. `crossroads` — "The Riddle at the Crossroads" — choose between two paths
3. `temple` — "The Temple of Apollo" — confront a nobleman (Lycon) bribing a priest

### Chapter II — The Road from Delphi (5 scenes)
1. `ch2_market` — "The Market at Corinth" — a thief who steals to give (textVariants)
2. `ch2_figure` — "The Figure at the Well" — meet the myth figure (textTemplate)
3. `ch2_dilemma` — "The Question With No Clean Answer" — the soldier's dilemma (textTemplate)
4. `ch2_agents` — "The Consequence" — Lycon's agents on the road (textVariants + atmosphereVariants + isRightChoiceHardOutcome)
5. `ch2_offer` — "The Easy Way Out" — an agent offers a deal at an inn (setsFlags: liedToLyconsAgent)

---

## 10. Build & Run

### Prerequisites
- Node.js (18+), npm

### Commands
```bash
npm install          # Install dependencies
npm run dev          # Dev server (http://localhost:5173)
npm run build        # Production build → dist/
npm run preview      # Preview production build
```

### Vercel Deployment
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- No environment variables needed

---

## 11. Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-02 | Created project with Vite + React | Fast dev, easy Vercel deploy |
| 2026-03-02 | All inline styles, no CSS | User requirement — simplicity |
| 2026-03-02 | Phase-based state machine (no router) | SPA, no URL routing needed |
| 2026-03-02 | Stats range 0–10, start at 3 | Room to grow and shrink across chapters |
| 2026-03-02 | 25-combo Hero Identity map | Every stat pairing gets a unique archetype |
| 2026-03-02 | Scenes as data arrays | Clean separation of narrative from rendering |
| 2026-03-02 | Refactored to modular structure | Project grew beyond single-file; engine/data/components/screens split |
| 2026-03-02 | Flag system (10 booleans) | Choices in Ch1 must affect Ch2 narrative |
| 2026-03-02 | Text variants/templates | Scenes need conditional text based on flags and myth figure |
| 2026-03-02 | Myth figure selector | Ch2 features a disguised god/hero determined by player's dominant stat |
| 2026-03-02 | Stats + flags never reset between chapters | Core design: choices compound, consequences carry forward |
| 2026-03-02 | Discussion guide as cream card | Must feel "outside" the game — parent-facing, not player-facing |
| 2026-03-02 | Shared styles.js | Avoids duplicating bg/card/goldBtn across 5 screen files |

---

## 12. Future Expansion

- **Save system:** localStorage to persist stats/flags between sessions
- **Chapter 3+:** Add `src/data/chapter3.js`, wire into App.jsx chapter routing
- **Longer arcs:** Mentor characters (myth figures) that persist across chapters
- **More complex moral scenarios:** Building on the consequence system
