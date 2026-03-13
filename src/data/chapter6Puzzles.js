/**
 * Chapter 6 Puzzles
 * Persephone's riddle — what grows in darkness
 */

export const chapter6Puzzles = {
  persephonesRiddle: {
    id: "ch6_puzzle1",
    tier: 2,
    title: "Persephone's Riddle",
    setup: "Before Persephone will speak the full truth, she tests you with a riddle. 'I ask this of everyone who enters my court,' she says. 'The answer tells me what kind of person you are — not whether you're clever, but whether you understand the world beneath the world.'",
    question: "Persephone speaks:\n\n'I have no sun, yet I bloom.\nI have no rain, yet I grow.\nI am planted by pain and watered by time.\nThe dead carry me, but only the living can give me.\nI am strongest in the dark.\n\nWhat am I?'\n\nShe watches you think. 'Don't rush,' she says. 'The Underworld has no clocks.'",
    type: "freeResponse",
    acceptableAnswers: ["hope", "memory", "love", "grief", "roots"],
    hints: [
      "Think about what the dead carry with them — not objects, but something invisible. What did the shade child in the Fields of Asphodel still have, even after death?",
      "Persephone's garden grows in darkness. What keeps it alive? Not water or sunlight — something that comes from inside. The riddle says 'planted by pain and watered by time.' What emotion grows stronger the longer you carry it?",
    ],
    askParentPrompt: "Persephone's riddle is about something that grows in darkness. Talk with your parent about what the dead might carry that only the living can give. Think about hope, memory, love, or grief — more than one answer can be right. What do you think grows strongest when there's no light?",
    onSolve: { Wisdom: 2, Empathy: 1 },
    onSkip: { Wisdom: 1 },
    solveFlag: "solvedPersephonesRiddle",
    skipFlag: "skippedPersephonesRiddle",
    solveMessage: "Persephone's eyes widen — then soften. 'Yes,' she says. 'That is the answer. Or one of them. The riddle has many true answers, which is what makes it a good riddle.' She nods to herself. 'You understand the Underworld. That means you're ready for what I have to tell you.'",
    skipMessage: "Persephone waits. When no answer comes, she doesn't look disappointed. 'The answer will come to you later,' she says. 'Riddles are seeds. They grow in their own time.' She tells you the truth anyway — the riddle was a test of character, not a gate.",
    forceMessage: "Your parent helps you think it through. Together, you find the answer. Persephone nods. 'The living help each other understand what the dead cannot explain alone. That is its own kind of answer.' She is pleased — not with the solution, but with the asking.",
  },
};
