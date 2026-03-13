/**
 * Chapter 4 Puzzles
 * Sphinx papyrus continues + navigation puzzle during crossing
 */

export const chapter4Puzzles = {
  navigationPuzzle: {
    id: "ch4_puzzle1",
    tier: 1,
    title: "Reading the Currents",
    setup: "Before the crossing, the old fisherman (if you chose him) or the harbor master shows you a chart of the strait. 'The currents follow a pattern,' they say. 'If you can read it, you'll know when to cross.'",
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
    solveMessage: "The chart makes sense now. You can see the rhythm in the water. The captain looks impressed. 'Most passengers just pray,' they say. 'You planned.' The ship pushes off at dawn — Hour 1. You chose well.",
    skipMessage: "The chart is confusing. Too many variables. The captain decides for you — dawn departure. 'Trust the captain,' they say. 'That's what we're for.' It's good advice.",
    forceMessage: "The harbor master traces the pattern for you. 'Start at dawn. Hour 1 and 2 are both East — smooth water, no shift.' You see it now. Patterns are easier when someone points them out. Next time, you'll spot it yourself.",
  },
};
