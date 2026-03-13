/**
 * Chapter 4 Puzzles
 * Navigation puzzle during crossing
 */

export const chapter4Puzzles = {
  navigationPuzzle: {
    id: "ch4_puzzle1",
    tier: 1,
    title: "Reading the Currents",
    setup: "Before the crossing — in the grey half-light before dawn, when the harbor is quiet and the strait is just a dark line on the horizon — someone shows you a chart.\n\nThe old fisherman, if you chose him. The harbor master, if you didn't. Either way, the chart is the same: hand-drawn on oilskin, stained with salt, annotated in a cramped hand by someone who crossed the strait enough times to map its moods.\n\n\"The currents follow a pattern,\" they say, tracing the lines with a callused finger. \"Everything in the strait follows a pattern. Find it, and you know when to cross. Miss it, and the strait decides for you.\"",
    question: "The chart shows currents changing direction every hour. The pattern is: East, East, West, East, East, West, East, East...\n\nThe whirlpool (Charybdis) is strongest during West currents. Scylla strikes when the current shifts.\n\nIf you need 2 hours to cross, and you want to avoid BOTH the shift moment AND the West current, when should you start?\n\nThe currents at dawn are: Hour 1 East, Hour 2 East, Hour 3 West, Hour 4 East, Hour 5 East, Hour 6 West...",
    type: "multipleChoice",
    options: [
      "Start at Hour 1 (East, East) — two safe hours",
      "Start at Hour 4 (East, East) — two safe hours after the West",
      "Start at Hour 3 (West) — go fast during the whirlpool lull",
      "It doesn't matter — the pattern is unpredictable",
    ],
    correctIndex: 0,
    hints: [
      "Look at each pair of consecutive hours. You need two hours where it's East both times, and neither hour is right before a shift to West.",
      "Hours 1-2 are both East, and the shift to West happens at Hour 3 — after you'd already be through. Hours 4-5 also work, but Hour 3 (West/Charybdis) would have just passed and the water is still churning.",
    ],
    askParentPrompt: null,
    onSolve: { Wisdom: 2, Discipline: 1 },
    onSkip: { Discipline: 1 },
    solveFlag: "solvedNavigationPuzzle",
    skipFlag: "skippedNavigationPuzzle",
    solveMessage: "The pattern clicks into place — East, East, West, repeating like a pulse. You can see the rhythm in the chart now, the way a musician sees rhythm in notes.\n\nThe captain looks at you with different eyes. \"Most passengers just pray,\" they say. \"You planned.\"\n\nThe ship pushes off at dawn. Hour 1. Two hours of East current carrying you through, and by the time the strait shifts to West you'll be on the other side.\n\nYou chose well. The water chose for you once. Now you're choosing back.",
    skipMessage: "The chart swims in front of your eyes — too many arrows, too many variables, the pattern hiding behind the noise. The captain decides for you.\n\n\"Dawn departure,\" they say, folding the oilskin. \"Trust the captain. That's what we're here for.\"\n\nIt's good advice. Sometimes the wisest thing is knowing who to trust when the answer won't come.",
    forceMessage: "The harbor master traces the pattern for you, finger moving slowly over the oilskin. \"Hour 1 and Hour 2 — both East. Smooth water, no shift. You cross before the West current wakes up.\"\n\nYou see it now. The pattern was always there — East, East, West, repeating. Simple, once someone draws the line for you.\n\nPatterns are like that. Invisible until you see them, then impossible to unsee.",
  },
};
