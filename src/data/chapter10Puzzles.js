/**
 * Chapter 10 Puzzles — FINAL CHAPTER
 * One puzzle: The Riddle of Identity — the Sphinx's riddle revisited,
 * but the answer is about divine identity, about YOU.
 */

export const chapter10Puzzles = {
  riddleOfIdentity: {
    id: "ch10_puzzle1",
    tier: 2,
    title: "The Riddle of Identity",
    setup: "At the gates of Olympus, carved into the crystal archway, you find words you've seen before. The Sphinx's riddle — the oldest riddle in the world. But something is different. The words shimmer and shift. The riddle is changing. It's not asking about humanity anymore. It's asking about you.",
    question: "The archway reads:\n\n'What crawls at dawn, walks at midday, and soars at dusk?'\n\nThis isn't the original riddle. The Sphinx asked about legs — about the stages of mortal life. But this version asks about something else. Dawn, midday, dusk — but the answer isn't 'a human.'\n\nThink about YOUR journey:\n- At the beginning (dawn), you were low to the ground, learning, uncertain, crawling toward understanding.\n- In the middle (midday), you stood upright, walked your own path, made your own choices.\n- At the end (dusk), you're here — at the peak. Not walking. Rising.\n\nWhat is the answer? What crawls, then walks, then soars?",
    type: "multipleChoice",
    options: [
      "A human — the original answer still applies",
      "A hero — someone who grows beyond what they were",
      "A god — divine beings start mortal and ascend",
      "Me — the answer is me, specifically, my journey",
    ],
    correctIndex: 3,
    hints: [
      "The riddle changed when you approached it. It's not asking about humanity in general anymore. It's asking about a specific journey. Whose journey has gone from crawling to walking to the edge of flight?",
      "The Sphinx's original riddle was universal — it applied to all humans. This riddle is personal. It changed for YOU. The answer isn't a category of being. It's a name. Your name.",
    ],
    askParentPrompt: "The Sphinx's riddle is one of the oldest puzzles in mythology. The original answer is 'a human' — babies crawl, adults walk, elders use a cane (three legs). But this version changes the riddle. Talk together: how has the hero's journey been like that same pattern? How is the hero different now from when they started?",
    onSolve: { Wisdom: 2, Courage: 1 },
    onSkip: { Wisdom: 1 },
    solveFlag: "solvedIdentityRiddle",
    skipFlag: "skippedIdentityRiddle",
    solveMessage: "The archway blazes with light. The crystal sings a single, perfect note. You said your own name — and the mountain heard it.\n\nThe Sphinx's riddle was always about identity. The original answer was 'a human.' But you've gone beyond that now. You're not just a human, not just a hero, not just a demigod. You're you. Specific. Unrepeatable. And the gates of Olympus open for that — not for a title, but for a name.\n\nYour name.",
    skipMessage: "The archway waits. You can't find the answer, but the mountain doesn't turn you away. The gates open — slowly, grudgingly — because you're here, and that counts for something even without the answer.",
    forceMessage: "The Oracle's voice comes one last time — gentle, like a parent explaining something obvious that the child will laugh about later. 'The riddle changed because YOU approached it. The Sphinx asked about all humans. The mountain is asking about one. The answer is your name. It was always your name.' The gates open. You understand now — and you won't forget.",
  },
};
