/**
 * World State Ticker
 * Background system tracking global conditions that affect encounters,
 * god attitudes, and which events appear. Shown as one-line news on transition screens.
 */

export const INITIAL_WORLD_STATE = {
  warTension: 0,      // Conflict level across Greece (0-10)
  divineFavor: 0,     // Zeus's attention / general divine goodwill (0-10)
  mortalFear: 0,      // How much mortals fear/revere the hero (0-10)
  underworldStirring: 0, // Activity from below (0-10)
};

const WORLD_STATE_MIN = 0;
const WORLD_STATE_MAX = 10;

/**
 * Apply world state changes with clamping.
 */
export const applyWorldChanges = (current, changes) => {
  if (!changes) return current;
  const next = { ...current };
  for (const [key, delta] of Object.entries(changes)) {
    if (key in next) {
      next[key] = Math.max(WORLD_STATE_MIN, Math.min(WORLD_STATE_MAX, next[key] + delta));
    }
  }
  return next;
};

/**
 * Get DC modifier based on world state.
 * Higher warTension = harder combat encounters.
 * Higher divineFavor = easier echo rolls.
 */
export const getEncounterDCModifier = (worldState) => {
  let mod = 0;
  if (worldState.warTension >= 7) mod += 2;
  else if (worldState.warTension >= 4) mod += 1;
  return mod;
};

export const getEchoDCModifier = (worldState) => {
  let mod = 0;
  if (worldState.divineFavor >= 7) mod -= 3;
  else if (worldState.divineFavor >= 4) mod -= 2;
  else if (worldState.divineFavor >= 2) mod -= 1;
  return mod;
};

/**
 * Get ticker messages for transition screens.
 * Each message has conditions based on flags and/or world state.
 * Returns 1-2 messages that match current conditions.
 *
 * @param {Array} messagePool - Chapter's ticker message definitions
 * @param {Object} flags - Current flags
 * @param {Object} worldState - Current world state
 * @returns {string[]} Matching messages (max 2)
 */
export const getTickerMessages = (messagePool, flags, worldState) => {
  if (!messagePool || !messagePool.length) return [];

  const matches = messagePool.filter((msg) => {
    if (!msg.condition) return true;

    // Check flag conditions
    if (msg.condition.flag && !flags[msg.condition.flag]) return false;
    if (msg.condition.notFlag && flags[msg.condition.notFlag]) return false;

    // Check world state conditions
    if (msg.condition.worldState) {
      for (const [key, req] of Object.entries(msg.condition.worldState)) {
        const val = worldState[key] || 0;
        if (req.min !== undefined && val < req.min) return false;
        if (req.max !== undefined && val > req.max) return false;
      }
    }

    return true;
  });

  // Return up to 2 matching messages
  return matches.slice(0, 2).map((m) => m.text);
};

/**
 * Get a descriptive label for a world state value.
 */
export const getWorldStateLabel = (key, value) => {
  const labels = {
    warTension: [
      [0, "Peace"],
      [3, "Unrest"],
      [6, "Conflict"],
      [8, "War"],
    ],
    divineFavor: [
      [0, "Unnoticed"],
      [3, "Watched"],
      [6, "Favored"],
      [8, "Blessed"],
    ],
    mortalFear: [
      [0, "Unknown"],
      [3, "Whispered About"],
      [6, "Renowned"],
      [8, "Legendary"],
    ],
    underworldStirring: [
      [0, "Quiet"],
      [3, "Restless"],
      [6, "Active"],
      [8, "Awakened"],
    ],
  };

  const tiers = labels[key] || [];
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (value >= tiers[i][0]) return tiers[i][1];
  }
  return "Unknown";
};
