# Hero of Olympus — Project Guidelines

## Project Overview
An educational narrative RPG web app for a 9-year-old. Set in ancient Greece, the player creates a hero, makes branching story choices, and watches five character stats evolve. After each choice the game explains *why* stats changed — that's the core educational mechanic. At chapter end a "Hero Portrait" is generated from the player's top two stats.

Currently: **Chapter I** (3 scenes + 2 puzzles) + **Chapter II** (5 scenes + 2 puzzles) + **Chapter III** (5 scenes + quest fork + 2-3 puzzles). Stats, flags, and inventory carry between chapters.

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
    ├── App.jsx                # Orchestrator — all game state, step-based flow, phase routing
    ├── styles.js              # Shared inline styles (bg, card, goldBtn, puzzleCard, etc.)
    ├── engine/
    │   ├── stats.js           # INITIAL_STATS, STAT_COLORS, STAT_ICONS, heroIdentity, getMythFigure
    │   ├── flags.js           # INITIAL_FLAGS (35+ booleans), applyFlags helper
    │   ├── sceneText.js       # resolveSceneText, resolveChoiceText (variants/templates/transitionText)
    │   ├── inventory.js       # addItem, removeItem, hasItem, applyInventoryChanges
    │   ├── flow.js            # STEP_TYPES, getSceneCount, getSceneNumber, isStepAccessible
    │   └── puzzleEngine.js    # INITIAL_PUZZLE_STATE, hint/answer/skip logic
    ├── data/
    │   ├── items.js           # ALL_ITEMS catalog (6 items), INITIAL_INVENTORY
    │   ├── chapter1.js        # 3 scenes with setsFlags, setsInventory, transitionText
    │   ├── chapter1Puzzles.js # 2 puzzles (Sphinx riddle Tier 1, Oracle door Tier 2)
    │   ├── chapter1Flow.js    # getChapter1Flow() — interleaves scenes + puzzles
    │   ├── chapter2.js        # 5 scenes with textVariants, textTemplate, transitionText
    │   ├── chapter2Puzzles.js # 2 puzzles (Figure test Tier 1, Sphinx papyrus Tier 2 conditional)
    │   ├── chapter2Flow.js    # getChapter2Flow() — with conditional puzzle
    │   ├── chapter3.js        # 5 scenes + quest fork definition
    │   ├── chapter3Puzzles.js # 3 puzzles (messenger Tier 1, arena Tier 1, sphinx final Tier 2)
    │   └── chapter3Flow.js    # getChapter3Flow() — quest fork branching
    ├── components/
    │   ├── StatBar.jsx        # Animated stat bar
    │   ├── ChoiceButton.jsx   # Choice button with hover, requiresItem/Flag gating, sparkle
    │   ├── OracleInsight.jsx  # Lesson card
    │   ├── InventoryBar.jsx   # Horizontal item display with tooltips (6 slots)
    │   └── DiscussionGuide.jsx # Parent discussion prompts (cream card, collapsible, Ch2/Ch3)
    └── screens/
        ├── WelcomeScreen.jsx
        ├── NameScreen.jsx
        ├── SceneScreen.jsx     # Scene display with InventoryBar, inventory beats
        ├── ResultScreen.jsx    # Feedback, stats, inventory gain, amber banner
        ├── ChapterEndScreen.jsx # Ch1/2/3 end — portrait, stats, prophecy, discussion
        ├── TransitionScreen.jsx # Travel-beat screen before scenes
        ├── PuzzleScreen.jsx    # Puzzle with progressive hints, answer, skip
        ├── AskParentScreen.jsx # Tier 2 parent consultation (cream card)
        ├── PuzzleResultScreen.jsx # Solve/skip outcome display
        ├── QuestForkScreen.jsx # Side-by-side path selection
        └── QuestForkConfirmScreen.jsx # Fork confirmation
```

## Conventions
- **All styling is inline.** No CSS files, no styled-components, no Tailwind.
- **No routing.** Single page app — phase-based rendering inside App.jsx.
- **No external UI libraries.** Pure React + browser APIs only.
- **Stats never reset between chapters.** They carry forward.
- **Flags never reset between chapters.** They carry forward.
- **Inventory never resets between chapters.** Items carry forward.
- Scene data files are pure data (no React). Text resolution happens via `sceneText.js`.
- Scenes can use `text` (plain), `textVariants` (flag-based), or `textTemplate` (figure interpolation).
- Scenes can have `transitionText` for travel-beat screens shown before the scene.
- Scenes can have `inventoryBeat` for item-specific callout boxes.
- Choices can use `feedback` (plain) or `feedbackTemplate` (figure interpolation).
- Choices can include `setsFlags`, `setsInventory`, `requiresFlag`, `requiresItem`, `consumesItem`.
- Puzzles have `tier` (1=solo, 2=with Ask a Parent), progressive hints with stat costs, solve/skip outcomes.
- Each chapter exports a `getFlow(flags, inventory, forkChoice)` returning a step array.
- Step types: `scene`, `puzzle`, `questFork`. Conditional steps use `isStepAccessible`.
- Update `TECH_SPEC.md` whenever a new feature, system, or architectural decision is made.

## Commands
```bash
npm install        # Install dependencies
npm run dev        # Start local dev server (Vite)
npm run build      # Production build (outputs to dist/)
npm run preview    # Preview production build locally
```

## Key Files
| File | Purpose |
|------|---------|
| `src/App.jsx` | Orchestrator — all state, step-based flow, 11 phases |
| `src/engine/stats.js` | Stat constants, heroIdentity, getMythFigure |
| `src/engine/flags.js` | Flag definitions (35+) and applyFlags |
| `src/engine/flow.js` | Step types, scene counting, conditional step filtering |
| `src/engine/inventory.js` | Inventory operations |
| `src/engine/puzzleEngine.js` | Puzzle state management |
| `src/data/chapter*Flow.js` | Chapter flow builders |
| `src/data/chapter3.js` | Ch3 scenes + quest fork |
| `src/screens/ChapterEndScreen.jsx` | End screen — portrait, stats timeline, prophecy, discussion |
| `TECH_SPEC.md` | Full technical specification / developer blueprint |
