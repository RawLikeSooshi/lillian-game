export const INITIAL_FLAGS = {
  helpedOldWoman: false,
  tookDirectAction: false,
  studiedBeforeActing: false,
  tookForestPath: false,
  spokeAgainstLycon: false,
  reportedLyconQuietly: false,
  understoodLycon: false,
  stayedSilentAtTemple: false,
  liedToLyconsAgent: false,
  namedSomeoneToAgent: false,
};

export const applyFlags = (currentFlags, setsFlags) => {
  if (!setsFlags) return currentFlags;
  return { ...currentFlags, ...setsFlags };
};
