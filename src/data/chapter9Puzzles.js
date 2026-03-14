/**
 * Chapter 9 Puzzles
 * Strategic battle planning — position troops and defenses for the siege of Athens.
 */

export const chapter9Puzzles = {
  battlePlanPuzzle: {
    id: "ch9_puzzle1",
    tier: 1,
    title: "The Battle Plan",
    setup: "Athena spreads a map of Athens across the altar — stretched hide, marked with charcoal and bronze tokens. Blue for defenders. Red for Ares' forces. The tokens outnumber yours two to one. The math is bad. But math, unlike gods, can be worked with.\n\n\"Four gates,\" Athena says. Her finger traces the city's perimeter. \"Limited defenders. Ares will attack from the north — that's certain. His ego demands the direct approach.\" Her grey eyes are steady. \"But he'll feint at the other gates to stretch you thin. Pull your forces apart. Break your concentration.\"\n\nShe places tokens. Red masses at the north. Smaller red clusters at the other three gates.\n\n\"You have 100 defenders. Ares has 200 warriors. The walls multiply your strength — each defender behind a wall fights like three. But only if the wall holds.\"\n\nShe looks at you.\n\n\"A gate with fewer than 15 defenders will break. And a broken gate is a dead city.\"\n\nThe map waits. The tokens wait. Athena waits.",
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
      "Each gate needs at least 15 defenders (15 x 3 = 45 effective strength) to survive a feint of ~27. But the north needs enough to match 120 attackers. How many defenders give you 120+ effective strength?",
      "Check the math: Option A gives North 45x3=135 vs 120 (holds), East 20x3=60 vs 27 (holds), South 20x3=60 vs 27 (holds), West 15x3=45 vs 26 (holds). All gates survive. Option B leaves West at 10x3=30 vs 26 — it barely holds but one bad moment breaks it. Option C puts only 25x3=75 at North vs 120 — it shatters.",
    ],
    askParentPrompt: null,
    onSolve: { Wisdom: 2, Discipline: 1 },
    onSkip: { Discipline: 1 },
    solveFlag: "solvedBattlePlan",
    skipFlag: "skippedBattlePlan",
    solveMessage: "Athena studies your distribution. Her expression doesn't change — but her hands move the tokens to exactly where you placed them. Blue on the map, where you said. Not where she would have said. Where you said.\n\n\"Correct,\" she says. \"Concentrate force at the point of attack. Maintain minimums everywhere else. Don't reinforce strength — protect weakness.\"\n\nShe straightens.\n\n\"This is how you hold a city.\"\n\nA pause. Something moves behind her grey eyes — not warmth, but its tactical equivalent.\n\n\"Your father couldn't have done this at your age. He would have put everyone at the north gate and dared Ares to come. That's courage. What you just did is something better.\"\n\nShe doesn't say the word. She doesn't need to. You both know what it is.",
    skipMessage: "The numbers swim. Too many variables. Too much pressure. The tokens blur on the map and the gates blur in your mind and for a terrible moment the whole thing feels impossible.\n\nAthena watches you struggle. She doesn't look disappointed — she looks like a teacher watching someone encounter a problem for the first time.\n\nShe moves the tokens herself. Quickly. Precisely.\n\n\"North gets the bulk. Minimums everywhere else. The math isn't complicated — but doing math under pressure is a skill, not a talent.\" She meets your eyes. \"It improves with practice.\"\n\nShe's not disappointed. She's teaching. And the lesson — that failing under pressure is normal, not shameful — is worth more than getting the answer right.",
    forceMessage: "Athena walks you through it. Step by step. No impatience. No condescension. The voice of a general who has trained ten thousand lieutenants and knows that understanding grows at its own pace.\n\n\"Every gate needs at least 15 — that's 45 effective, enough to survive a feint. Three minor gates: 15 each. That's 45 defenders accounted for.\"\n\nHer finger moves to the north.\n\n\"The remaining 55 go north. But actually, 45 is sufficient: 45 times 3 equals 135. That beats 120 with room to breathe. The extra 10 can reinforce east and south — 20 each instead of 15.\"\n\nYou see it now. The map makes sense. The numbers resolve into a shape — not a puzzle anymore but a plan. War is math with consequences. Strategy is caring enough about the consequences to get the math right.",
  },
};
