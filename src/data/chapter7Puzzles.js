/**
 * Chapter 7 Puzzles
 * The Artifact Puzzle — identify the real artifact among fakes in the abandoned workshop.
 */

export const chapter7Puzzles = {
  artifactPuzzle: {
    id: "ch7_puzzle_artifact",
    tier: 1,
    title: "The True Artifact",
    setup: "The abandoned workshop smells of sulfur and old bronze — the particular smell of metal that remembers being worked. Three items sit on a stone pedestal in the center, each one catching the dim light of sulfur crystals growing from the walls.\n\nA bronze plaque, green with age but still legible, reads: \"One is real. Two are copies. The forge marks the truth.\"\n\nThree compass roses. Identical at first glance — beautifully crafted, each one a perfect star of bronze points. But Hephaestus taught you something about perfection. About what it means. About what it hides.",
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
    solveMessage: "Your fingers close around Compass B. The moment you lift it — the moment your skin touches the tiny hammer marks — they glow. Faintly gold. The warmth intensifies, then settles to a steady pulse.\n\nThe compass needle spins once. Twice. Then stops — pointing not north but west. Toward Olympus.\n\nHephaestus's voice echoes in the empty workshop, as if the walls remember him: \"Good eye. Most people reach for the pretty one. The flawless one. They always do.\"\n\nThe compass is yours now. It will always point toward what you're looking for — not what you think you want, but what you actually need. The difference, Hephaestus would say, is everything.",
    skipMessage: "You pick up one of the perfect ones — it crumbles in your hand like sand. A copy. Beautiful, flawless, and utterly hollow.\n\nHephaestus appears at the workshop door. He doesn't look disappointed — he looks like a teacher who's about to make a point.\n\n\"The real one has hammer marks,\" he says. \"I always leave my mark. Perfect things are suspicious — in the forge and in life. If something has no flaws, ask who smoothed them away and why.\"\n\nHe places the correct compass in your hand. The hammer marks glow gold against your palm.\n\n\"Now you know what to look for.\"",
    forceMessage: "Hephaestus picks up Compass B and places it in your hand. The hammer marks press into your skin — warm, deliberate, each one a record of a blow struck with intention.\n\n\"Feel those?\" he says. \"That's where I hit it. Every strike left a mark. Every real thing carries the evidence of its making — the proof that someone cared enough to shape it by hand.\"\n\nThe compass glows. The needle points toward Olympus.\n\n\"Fakes are too clean. Remember that. Not everything that looks perfect is genuine. Sometimes the flaws are the fingerprint of the maker — and the fingerprint is how you know it's real.\"",
  },
};
