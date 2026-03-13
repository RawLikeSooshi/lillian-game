/**
 * Chapter 9 Puzzles
 * Strategic battle planning — position troops and defenses for the siege of Athens.
 */

export const chapter9Puzzles = {
  battlePlanPuzzle: {
    id: "ch9_puzzle1",
    tier: 1,
    title: "The Battle Plan",
    setup: "Athena spreads a map of Athens across the altar. 'Four gates. Limited defenders. Ares will attack from the north — that's certain. But he'll feint at other gates to pull your forces thin.'\n\nShe places tokens on the map: blue for defenders, red for Ares' forces. 'You have 100 defenders. Ares has 200 warriors. The walls multiply your strength — each defender behind a wall fights like three. But only if the wall holds. A gate with fewer than 15 defenders will break.'",
    question: "Athens has 4 gates. You have 100 defenders. Each defender behind a wall fights like 3 (so 20 defenders = 60 effective strength).\n\nAres has 200 warriors. His main attack (120 warriors) will hit the NORTH gate. His feints will split the remaining 80 warriors across the other 3 gates (roughly 25-30 each).\n\nA gate BREAKS if its effective strength (defenders x 3) is less than the attackers hitting it. A broken gate means the city is breached.\n\nHow should you distribute your 100 defenders across 4 gates?\n\nNorth Gate (main attack — 120 warriors incoming)\nEast Gate (feint — ~27 warriors)\nSouth Gate (feint — ~27 warriors)\nWest Gate (feint — ~26 warriors)",
    type: "multipleChoice",
    options: [
      "North: 45, East: 20, South: 20, West: 15",
      "North: 60, East: 15, South: 15, West: 10",
      "North: 25, East: 25, South: 25, West: 25",
      "North: 40, East: 10, South: 10, West: 40",
    ],
    correctIndex: 0,
    hints: [
      "Each gate needs at least 15 defenders (45 effective strength) to survive a feint of ~27. But the north needs enough to match 120 attackers. 45 defenders = 135 effective strength. That holds against 120.",
      "Check the math: Option A gives North 45x3=135 vs 120 (holds), East 20x3=60 vs 27 (holds), South 20x3=60 vs 27 (holds), West 15x3=45 vs 26 (holds). All gates survive. Option B leaves West at 10x3=30 vs 26 — dangerously thin. Option C puts only 25x3=75 at North vs 120 — it breaks.",
    ],
    askParentPrompt: null,
    onSolve: { Wisdom: 2, Discipline: 1 },
    onSkip: { Discipline: 1 },
    solveFlag: "solvedBattlePlan",
    skipFlag: "skippedBattlePlan",
    solveMessage: "Athena studies your distribution. Her expression doesn't change — but she moves the tokens exactly where you placed them. 'Correct,' she says. 'Concentrate force at the point of attack. Maintain minimums everywhere else. This is how you hold a city.' She pauses. 'Your father couldn't have done this at your age.'",
    skipMessage: "The numbers swim. Athena watches you struggle, then moves the tokens herself. 'North gets the bulk. Minimums everywhere else. The math isn't complicated — but doing math under pressure is a skill, not a talent. It improves with practice.' She's not disappointed. She's teaching.",
    forceMessage: "Athena walks you through it. 'Every gate needs at least 15 — that's 45 effective, enough to hold a feint. That accounts for 15+15+15=45 on the three minor gates. North gets the remaining 55... but 45 is actually sufficient there: 45 times 3 equals 135, which beats 120.' You see it now. War is math with consequences.",
  },
};
