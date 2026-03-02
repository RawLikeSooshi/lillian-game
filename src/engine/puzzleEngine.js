export const INITIAL_PUZZLE_STATE = {
  hintsUsed: 0,
  selectedAnswer: null,
  solved: false,
  skipped: false,
};

export function canUseHint(puzzleState, puzzle) {
  return puzzleState.hintsUsed < puzzle.hints.length;
}

export function useHint(puzzleState) {
  return { ...puzzleState, hintsUsed: puzzleState.hintsUsed + 1 };
}

export function checkAnswer(puzzle, selectedIndex) {
  if (puzzle.correctIndex === -1) return true;
  return selectedIndex === puzzle.correctIndex;
}

export function getHintCost(puzzle, hintIndex) {
  return puzzle.hintCosts?.[hintIndex] || {};
}
