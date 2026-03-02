export const INITIAL_FLAGS = {
  // Ch1 scene flags
  helpedOldWoman: false,
  tookDirectAction: false,
  studiedBeforeActing: false,
  tookForestPath: false,
  spokeAgainstLycon: false,
  reportedLyconQuietly: false,
  understoodLycon: false,
  stayedSilentAtTemple: false,

  // Ch2 scene flags
  liedToLyconsAgent: false,
  namedSomeoneToAgent: false,

  // Courage rebalancing
  actedPublicly_ch1: false,

  // Puzzle outcomes
  solvedSphinxRiddle: false,
  skippedSphinxRiddle: false,
  solvedOracleDoor: false,
  skippedOracleDoor: false,
  solvedFigureTest: false,
  skippedFigureTest: false,
  solvedSphinxPapyrus: false,
  skippedSphinxPapyrus: false,
  solvedMessengerPuzzle: false,
  skippedMessengerPuzzle: false,
  solvedArenaPuzzle: false,
  skippedArenaPuzzle: false,
  solvedSphinxFinal: false,
  skippedSphinxFinal: false,

  // Ch3 quest fork
  messengerPath_chosen: false,
  arenaPath_chosen: false,
  messengerPath_notTaken: false,
  arenaPath_notTaken: false,

  // Ch3 scene flags
  madeAllyOfNiko: false,
  toldNikoEverything: false,
  approachedDirectly: false,
  researchedFirst: false,
  usedNikoAsScout: false,
  wentToAuthorities: false,
  stoodGroundAtArena: false,
  usedStrategyAtArena: false,
  showedMercyAtArena: false,
  confrontedTruth: false,
  protectedOthers: false,
  foundMiddlePath: false,
};

export const applyFlags = (currentFlags, setsFlags) => {
  if (!setsFlags) return currentFlags;
  return { ...currentFlags, ...setsFlags };
};
