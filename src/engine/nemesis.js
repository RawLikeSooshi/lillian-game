/**
 * Nemesis System — Rival Demigod
 * A rival whose stats counter the hero's. Can be befriended, ignored, or antagonized.
 * Also a child of a god — which god depends on the hero's dominant stat.
 */

/**
 * Nemesis parent god mapping.
 * The rival's divine parent opposes the hero's dominant stat.
 */
const NEMESIS_PARENT_MAP = {
  Courage: {
    god: "Ares",
    symbol: "🗡️",
    description: "child of the god of war",
    personality: "fierce, competitive, respects strength above all",
  },
  Wisdom: {
    god: "Hermes",
    symbol: "🪽",
    description: "child of the messenger god",
    personality: "quick-witted, restless, always three steps ahead",
  },
  Discipline: {
    god: "Dionysus",
    symbol: "🍇",
    description: "child of the god of chaos",
    personality: "unpredictable, passionate, finds freedom in disorder",
  },
  Empathy: {
    god: "Artemis",
    symbol: "🏹",
    description: "child of the huntress",
    personality: "independent, fierce, trusts animals more than people",
  },
  Cunning: {
    god: "Apollo",
    symbol: "☀️",
    description: "child of the god of truth",
    personality: "direct, radiant, cannot tell a lie",
  },
};

/**
 * Nemesis relationship tiers.
 */
export const NEMESIS_RELATIONS = {
  hostile: { label: "Hostile", color: "#e85d3a", value: -2 },
  wary: { label: "Wary", color: "#d4a017", value: -1 },
  neutral: { label: "Neutral", color: "#c8b88a", value: 0 },
  respectful: { label: "Respectful", color: "#6b8fd4", value: 1 },
  allied: { label: "Allied", color: "#4caf8a", value: 2 },
};

const RELATION_ORDER = ["hostile", "wary", "neutral", "respectful", "allied"];

/**
 * Generate the nemesis based on the hero's stats.
 * Called once when the rival is first introduced (Ch1 tease, locked in Ch2).
 */
export const generateNemesis = (heroStats) => {
  // Find hero's dominant stat
  const sorted = Object.entries(heroStats).sort((a, b) => b[1] - a[1]);
  const dominantStat = sorted[0][0];

  // Rival's parent opposes the hero's strength
  const parentInfo = NEMESIS_PARENT_MAP[dominantStat] || NEMESIS_PARENT_MAP.Courage;

  // Rival's stats: strong where hero is weak, weak where hero is strong
  const nemesisStats = {};
  const reversedStats = [...sorted].reverse();
  for (let i = 0; i < sorted.length; i++) {
    nemesisStats[sorted[i][0]] = reversedStats[i][1];
  }

  return {
    name: "Kira",
    title: "The Shadow on the Road",
    parentGod: parentInfo.god,
    parentSymbol: parentInfo.symbol,
    parentDescription: parentInfo.description,
    personality: parentInfo.personality,
    stats: nemesisStats,
    relation: "neutral",
    encounters: 0,
    knownToHero: false, // becomes true after first real conversation
    knownOrigin: false, // becomes true when rival learns their own parentage
  };
};

/**
 * Update the nemesis relationship based on an interaction.
 * @param {Object} nemesis - Current nemesis state
 * @param {number} shift - Positive = friendlier, negative = more hostile
 * @returns {Object} Updated nemesis state
 */
export const updateNemesisRelation = (nemesis, shift) => {
  if (!nemesis) return nemesis;

  const currentIdx = RELATION_ORDER.indexOf(nemesis.relation);
  const newIdx = Math.max(0, Math.min(RELATION_ORDER.length - 1, currentIdx + shift));

  return {
    ...nemesis,
    relation: RELATION_ORDER[newIdx],
    encounters: nemesis.encounters + 1,
  };
};

/**
 * Get the nemesis's current relation details.
 */
export const getNemesisRelationInfo = (nemesis) => {
  if (!nemesis) return null;
  return NEMESIS_RELATIONS[nemesis.relation] || NEMESIS_RELATIONS.neutral;
};

/**
 * Check if the nemesis is in a state to become an ally (for Ch10 convergence).
 */
export const canNemesisAlly = (nemesis) =>
  nemesis && (nemesis.relation === "allied" || nemesis.relation === "respectful");

/**
 * Check if the nemesis is hostile enough to be a final opponent.
 */
export const isNemesisHostile = (nemesis) =>
  nemesis && (nemesis.relation === "hostile" || nemesis.relation === "wary");

/**
 * Update nemesis stats to continue countering the hero's.
 * Called when hero's stats change significantly (chapter end).
 */
export const recalibrateNemesis = (nemesis, heroStats) => {
  if (!nemesis) return nemesis;

  const sorted = Object.entries(heroStats).sort((a, b) => b[1] - a[1]);
  const reversedStats = [...sorted].reverse();

  const newStats = {};
  for (let i = 0; i < sorted.length; i++) {
    // Nemesis stats trend toward opposite but don't fully mirror
    const heroVal = sorted[i][1];
    const targetVal = reversedStats[i][1];
    const currentVal = nemesis.stats[sorted[i][0]] || targetVal;
    // Blend: 70% target, 30% current (gradual shift)
    newStats[sorted[i][0]] = Math.round(targetVal * 0.7 + currentVal * 0.3);
  }

  // Also update parent god if dominant stat changed
  const dominantStat = sorted[0][0];
  const parentInfo = NEMESIS_PARENT_MAP[dominantStat] || NEMESIS_PARENT_MAP.Courage;

  return {
    ...nemesis,
    stats: newStats,
    parentGod: parentInfo.god,
    parentSymbol: parentInfo.symbol,
    parentDescription: parentInfo.description,
    personality: parentInfo.personality,
  };
};
