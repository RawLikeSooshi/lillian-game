# Hero of Olympus — Technical Specification

> This document is the living blueprint of the project. Any developer should be able to read this and understand how the game works, what technologies are used, and how the pieces fit together.

---

## 1. Overview

**Hero of Olympus** is an educational narrative RPG web app designed for a 9-year-old player. Set in ancient Greece, the player creates a hero, makes branching story choices across scenes, and watches five character stats evolve based on those decisions. After each choice, the game explains *why* the stats changed — that's the core educational mechanic. At chapter end the player receives a personalized "Hero Portrait" based on their top two stats.

**Current scope:** Chapter I (3 scenes + 2 puzzles) + Chapter II (5 scenes + 2 puzzles) + Chapter III (5 scenes + quest fork + 2-3 puzzles). Stats, flags, and inventory carry between chapters.

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

### 3.2 Step-Based Flow System
Each chapter exports a `getFlow(flags, inventory, forkChoice)` function returning an array of typed steps. `App.jsx` walks this array with `stepIndex` and determines the phase based on step type.

**Step types:** `scene`, `puzzle`, `questFork`

**Flow functions:** `getChapter1Flow`, `getChapter2Flow`, `getChapter3Flow` (in `src/data/chapter*Flow.js`)

Conditional steps use `isStepAccessible(step, flags, inventory)` for filtering (e.g. puzzle only appears if player has a specific item).

### 3.3 Phase Flow (State Machine)
```
welcome → name → [Ch1: scenes + puzzles] → end(ch1)
  → "Continue" → [Ch2: scenes + puzzles] → end(ch2)
  → "Continue" → [Ch3: scene → fork → path scenes/puzzles → convergence] → end(ch3)
  → "Play Again" → welcome (full reset)
```

**Phases (11 total):**
| Phase | Screen Component | What renders |
|-------|-----------------|-------------|
| `welcome` | WelcomeScreen | Title, stat explanations, "Begin" button |
| `name` | NameScreen | Hero name input |
| `transition` | TransitionScreen | Travel-beat narrative before a scene |
| `scene` | SceneScreen | Scene narrative + choice buttons + InventoryBar |
| `result` | ResultScreen | Feedback, stat changes, Oracle's Insight, amber banner, inventory gains |
| `puzzle` | PuzzleScreen | Puzzle with progressive hints, answer options, skip |
| `askParent` | AskParentScreen | Tier 2 parent consultation (cream card) |
| `puzzleResult` | PuzzleResultScreen | Solve/skip outcome with stat badges |
| `questFork` | QuestForkScreen | Side-by-side path selection |
| `questForkConfirm` | QuestForkConfirmScreen | "Are you sure?" confirmation |
| `end` | ChapterEndScreen | Hero Portrait, stats, prophecy (Ch3), discussion guide |

### 3.4 State Variables
| State | Type | Purpose |
|-------|------|---------|
| `phase` | string | Current game phase (11 possible values) |
| `heroName` | string | Player's chosen hero name |
| `nameInput` | string | Controlled input for name field |
| `chapter` | number | Current chapter (1, 2, or 3) |
| `stepIndex` | number | Index into current chapter's flow array |
| `stats` | object | `{ Courage, Wisdom, Discipline, Empathy, Cunning }` — **never reset** |
| `flags` | object | 35+ boolean flags — **never reset** |
| `inventory` | Item[] | Up to 6 items — **never reset** |
| `forkChoice` | string/null | Quest fork selection (`"messengerPath"` or `"arenaPath"`) |
| `puzzleState` | object | `{ hintsUsed, selectedAnswer, solved, skipped }` |
| `pendingForkChoice` | string/null | Fork selection awaiting confirmation |
| `lastChanges` | object | Stat deltas from the most recent choice |
| `choice` | object | The resolved choice object (for result screen) |
| `showLesson` | boolean | Whether the Oracle's Insight has faded in (700ms delay) |
| `ch1EndStats` | object/null | Snapshot of stats when Ch1 ends |
| `ch2EndStats` | object/null | Snapshot of stats when Ch2 ends |
| `inventoryGained` | Item[] | Items just gained (for result screen feedback) |

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
Boolean flags set by choices and puzzle outcomes, persisted across chapters. 35+ flags total.

**Ch1 scene flags:** `helpedOldWoman`, `tookDirectAction`, `studiedBeforeActing`, `tookForestPath`, `spokeAgainstLycon`, `reportedLyconQuietly`, `understoodLycon`, `stayedSilentAtTemple`, `actedPublicly_ch1`

**Ch2 scene flags:** `liedToLyconsAgent`, `namedSomeoneToAgent`

**Puzzle flags:** `solvedSphinxRiddle`/`skippedSphinxRiddle`, `solvedOracleDoor`/`skippedOracleDoor`, `solvedFigureTest`/`skippedFigureTest`, `solvedSphinxPapyrus`/`skippedSphinxPapyrus`, `solvedMessengerPuzzle`/`skippedMessengerPuzzle`, `solvedArenaPuzzle`/`skippedArenaPuzzle`, `solvedSphinxFinal`/`skippedSphinxFinal`

**Quest fork flags:** `messengerPath_chosen`, `arenaPath_chosen`, `messengerPath_notTaken`, `arenaPath_notTaken`

**Ch3 scene flags:** `madeAllyOfNiko`, `toldNikoEverything`, `approachedDirectly`, `researchedFirst`, `usedNikoAsScout`, `wentToAuthorities`, and many more

`applyFlags(currentFlags, setsFlags)` merges new flags into state.

### 4.3b Inventory System (`src/engine/inventory.js` + `src/data/items.js`)
- **6 items max** (`MAX_INVENTORY = 6`)
- Items are gained via `setsInventory` on choices or puzzle rewards
- Items can gate choices via `requiresItem` and be consumed via `consumesItem`
- Items can gate puzzles via `condition: { item: "itemId" }` on flow steps
- `ALL_ITEMS` catalog defines 6 items: woolenThread, sphinxPapyrus, templeCoin, figureToken, nikosBracelet, oracleFeather
- `InventoryBar` component displays items as horizontal icon row with tooltips

### 4.3c Puzzle System (`src/engine/puzzleEngine.js`)
- **Tier 1 (solo):** Player solves alone with progressive hints
- **Tier 2 (collaborative):** Includes "Ask a Parent" button that opens a cream-card screen
- **3 hints per puzzle**, with optional stat costs (first hint free)
- **Skip always available** — no penalty beyond different stat outcome
- `correctIndex: -1` means all answers are valid (philosophical questions)
- Puzzles have `onSolve`/`onSkip` stat changes, `solveFlag`/`skipFlag`, solve/skip messages
- Puzzle data in `chapter*Puzzles.js` files

### 4.3d Quest Fork System
- **Ch3 only** — "Two Things Need Doing" fork with messengerPath and arenaPath
- Side-by-side path cards with icons, descriptions, stat bias hints
- Confirmation screen before locking in choice
- Unchosen path permanently flagged (`*_notTaken`)
- Fork triggers flow recomputation via `useMemo` — fork step replaced by path-specific steps at same index

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
    ├── App.jsx                    # Orchestrator (state + step-based flow + phase routing)
    ├── styles.js                  # Shared inline styles (bg, card, goldBtn, puzzleCard, etc.)
    ├── engine/
    │   ├── stats.js               # Stats, heroIdentity, getMythFigure
    │   ├── flags.js               # 35+ flags, applyFlags
    │   ├── sceneText.js           # Text resolution (variants, templates, transitionText)
    │   ├── inventory.js           # addItem, removeItem, hasItem, applyInventoryChanges
    │   ├── flow.js                # STEP_TYPES, scene counting, isStepAccessible
    │   └── puzzleEngine.js        # Puzzle state, hint/answer/skip logic
    ├── data/
    │   ├── items.js               # ALL_ITEMS catalog, INITIAL_INVENTORY
    │   ├── chapter1.js            # 3 scenes
    │   ├── chapter1Puzzles.js     # 2 puzzles
    │   ├── chapter1Flow.js        # getChapter1Flow()
    │   ├── chapter2.js            # 5 scenes
    │   ├── chapter2Puzzles.js     # 2 puzzles
    │   ├── chapter2Flow.js        # getChapter2Flow()
    │   ├── chapter3.js            # 5 scenes + quest fork
    │   ├── chapter3Puzzles.js     # 3 puzzles
    │   └── chapter3Flow.js        # getChapter3Flow() with branching
    ├── components/
    │   ├── StatBar.jsx
    │   ├── ChoiceButton.jsx       # With requiresItem/Flag gating
    │   ├── OracleInsight.jsx
    │   ├── InventoryBar.jsx       # Horizontal item display (6 slots)
    │   └── DiscussionGuide.jsx    # Ch2/Ch3 questions
    └── screens/
        ├── WelcomeScreen.jsx
        ├── NameScreen.jsx
        ├── SceneScreen.jsx        # With InventoryBar + inventory beats
        ├── ResultScreen.jsx       # With inventory gain feedback
        ├── ChapterEndScreen.jsx   # Ch1/2/3 end (prophecy, stats timeline)
        ├── TransitionScreen.jsx   # Travel-beat screens
        ├── PuzzleScreen.jsx       # Puzzles with hints
        ├── AskParentScreen.jsx    # Tier 2 parent pause
        ├── PuzzleResultScreen.jsx # Solve/skip outcomes
        ├── QuestForkScreen.jsx    # Path selection
        └── QuestForkConfirmScreen.jsx
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

### Chapter II — The Road from Delphi (5 scenes + 2 puzzles)
1. `ch2_market` — "The Market at Corinth" — a thief who steals to give (textVariants)
2. `ch2_figure` — "The Figure at the Well" — meet the myth figure (textTemplate)
3. **Puzzle:** "The Figure's Test" (Tier 1) — moral reasoning, all answers valid
4. `ch2_dilemma` — "The Question With No Clean Answer" — the soldier's dilemma (textTemplate)
5. `ch2_agents` — "The Consequence" — Lycon's agents on the road (textVariants + atmosphereVariants + isRightChoiceHardOutcome)
6. `ch2_offer` — "The Easy Way Out" — an agent offers a deal at an inn (setsFlags: liedToLyconsAgent)
7. **Puzzle:** "The Sphinx's Papyrus Awakens" (Tier 2, conditional on sphinxPapyrus item)

### Chapter III — The City of Corinth (5 scenes + quest fork + 2-3 puzzles)
1. `ch3_arrival` — "The City, Finally" — meet Niko, choose to trust or not
2. **Quest Fork:** "Two Things Need Doing" — messengerPath (Find Mira) vs arenaPath (Help Castor)

**Messenger Path:**
3a. `ch3_mira1` — "The Girl with the Package" — investigate Aldric's warehouse
4a. **Puzzle:** "The Package Problem" (Tier 1) — logic elimination
5a. `ch3_mira2` — "The Thing You Didn't Predict" — consequences of doing the right thing

**Arena Path:**
3b. `ch3_castor1` — "The Sabotage" — investigate stolen sandals
4b. **Puzzle:** "Reading the Evidence" (Tier 1) — timeline reconstruction
5b. `ch3_castor2` — "The Part You Didn't Plan For" — unintended consequences

**Convergence:**
6. **Puzzle:** "The Sphinx's Papyrus, Continued" (Tier 2, conditional on sphinxPapyrus item) — Two Guards problem
7. `ch3_convergence` — "The Name You Made" — woman tests your consistency

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
| 2026-03-02 | Step-based flow system | Chapters return typed step arrays (scene/puzzle/fork) instead of flat scene arrays |
| 2026-03-02 | Inventory system (6 items max) | Items gained from choices/puzzles, gate other choices/puzzles, persist across chapters |
| 2026-03-02 | Puzzle system (Tier 1 + Tier 2) | Progressive hints with stat costs, skip always available, Ask a Parent for Tier 2 |
| 2026-03-02 | Quest fork system | Ch3 two-path branching with confirmation, flow recomputation via useMemo |
| 2026-03-02 | Courage rebalancing | +2 for public courage, +1 for quiet courage, tracked via flags |
| 2026-03-02 | Travel beats (transitionText) | Narrative transition screens shown before scenes |
| 2026-03-02 | Ch3 prophecy end screen | Near-black card with prophecy text, 4-column stats timeline, inventory display |
| 2026-03-02 | Conditional puzzles | Puzzles filtered by isStepAccessible based on flags/inventory |

---

## 12. Future Expansion

- **Save system:** localStorage to persist stats/flags/inventory between sessions
- **Chapter 4+:** Add `src/data/chapter4.js`, `chapter4Puzzles.js`, `chapter4Flow.js`, wire into App.jsx
- **Longer arcs:** Mentor characters (myth figures) that persist across chapters
- **More complex moral scenarios:** Building on the consequence system and quest fork mechanic
- **Item usage in scenes:** More `consumesItem` choices and `requiresItem` gating
- **Sphinx quest line:** sphinxPapyrus items already seed a multi-chapter puzzle arc
