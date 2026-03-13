/**
 * Chapter 7 Puzzles
 * The Artifact Puzzle — identify the real artifact among fakes in the abandoned workshop.
 */

export const chapter7Puzzles = {
  artifactPuzzle: {
    id: "ch7_puzzle_artifact",
    tier: 1,
    title: "The True Artifact",
    setup: "In the abandoned workshop, three items sit on a stone pedestal. A bronze plaque reads: 'One is real. Two are copies. The forge marks the truth.' Each item looks identical — a small bronze compass rose, beautifully crafted. But only one was made by divine hands.",
    question: "You examine the three compass roses:\n\nCompass A: Perfectly symmetrical. Every line is exact. The surface is flawless and cool to the touch.\n\nCompass B: Slightly asymmetrical. One point is fractionally longer than the others. The surface has tiny hammer marks and is warm.\n\nCompass C: Perfectly symmetrical. Every line is exact. The surface is flawless and warm to the touch.\n\nHephaestus told you earlier: 'Perfect is boring. I always leave my mark.' And you noticed the forge makes everything warm.\n\nWhich compass rose is the real artifact?",
    type: "multipleChoice",
    options: [
      "Compass A — perfect and cool. The divine craftsmanship would be flawless.",
      "Compass B — slightly imperfect and warm, with visible hammer marks.",
      "Compass C — perfect but warm. Divine warmth proves divine origin.",
      "None of them — it's a trick question.",
    ],
    correctIndex: 1,
    hints: [
      "Remember what Hephaestus said about perfection. Does he value it?",
      "Hephaestus said 'Perfect is boring. I always leave my mark.' A true Hephaestus creation would show the maker's hand — hammer marks, slight asymmetry. And the forge heat lingers in divine bronze.",
    ],
    askParentPrompt: null,
    onSolve: { Wisdom: 2, Cunning: 1 },
    onSkip: { Wisdom: 1 },
    solveFlag: "solvedArtifactPuzzle",
    skipFlag: "skippedArtifactPuzzle",
    solveMessage: "You pick up Compass B. The moment your fingers close around it, the hammer marks glow faintly gold. The compass needle spins once, then points — not north, but toward Olympus.\n\nHephaestus's voice echoes in the workshop: 'Good eye. Most people reach for the pretty one.' The compass is yours now. It will always point toward what you're looking for.",
    skipMessage: "You can't tell the difference. They all look nearly the same. You pick one at random — it crumbles to dust in your hand. A copy.\n\nHephaestus appears at the workshop door. 'The real one has hammer marks,' he says. 'I always leave my mark.' He hands you the correct compass. 'Now you know what to look for.'",
    forceMessage: "Hephaestus picks up Compass B and places it in your hand. 'Feel those marks? That's where I struck it. Every real thing carries the evidence of its making. Fakes are too clean.' The compass glows and points toward Olympus. 'Remember this. Not everything that looks perfect is genuine.'",
  },
};
