/**
 * Reputation System
 * 4 factions tracked independently. Affects node access, NPC attitudes, encounter DCs.
 */

export const FACTIONS = ["commonPeople", "nobles", "gods", "underworld"];

export const FACTION_LABELS = {
  commonPeople: "Common People",
  nobles: "Nobles & Authorities",
  gods: "The Gods",
  underworld: "The Underworld",
};

export const FACTION_ICONS = {
  commonPeople: "🏘️",
  nobles: "👑",
  gods: "⚡",
  underworld: "💀",
};

export const INITIAL_REPUTATION = {
  commonPeople: 0,
  nobles: 0,
  gods: 0,
  underworld: 0,
};

// Range: -10 to +10
const REPUTATION_MIN = -10;
const REPUTATION_MAX = 10;

/**
 * Reputation tier thresholds and labels.
 */
const TIER_THRESHOLDS = [
  { min: 7, label: "allied", color: "#4caf8a" },
  { min: 3, label: "warm", color: "#8bc34a" },
  { min: -2, label: "neutral", color: "#c8b88a" },
  { min: -6, label: "cold", color: "#d4a017" },
  { min: -10, label: "hostile", color: "#e85d3a" },
];

export const getReputationTier = (value) => {
  for (const t of TIER_THRESHOLDS) {
    if (value >= t.min) return t;
  }
  return TIER_THRESHOLDS[TIER_THRESHOLDS.length - 1];
};

/**
 * Apply reputation changes with clamping.
 * @param {Object} current - Current reputation state
 * @param {Object} changes - e.g. { commonPeople: 1, gods: -1 }
 * @returns {Object} New reputation state
 */
export const applyReputation = (current, changes) => {
  if (!changes) return current;
  const next = { ...current };
  for (const [faction, delta] of Object.entries(changes)) {
    if (faction in next) {
      next[faction] = Math.max(REPUTATION_MIN, Math.min(REPUTATION_MAX, next[faction] + delta));
    }
  }
  return next;
};

/**
 * Check if a reputation gate is met.
 * @param {Object} reputation - Current reputation
 * @param {Object} gate - e.g. { faction: "nobles", min: 3 } or { faction: "underworld", max: -2 }
 * @returns {boolean}
 */
export const checkReputationGate = (reputation, gate) => {
  if (!gate) return true;
  const value = reputation[gate.faction] ?? 0;
  if (gate.min !== undefined && value < gate.min) return false;
  if (gate.max !== undefined && value > gate.max) return false;
  return true;
};

/**
 * Get factions that changed between two reputation states.
 */
export const getReputationChanges = (oldRep, newRep) => {
  const changes = [];
  for (const faction of FACTIONS) {
    const delta = (newRep[faction] || 0) - (oldRep[faction] || 0);
    if (delta !== 0) {
      changes.push({
        faction,
        label: FACTION_LABELS[faction],
        icon: FACTION_ICONS[faction],
        delta,
        newValue: newRep[faction],
        newTier: getReputationTier(newRep[faction]),
      });
    }
  }
  return changes;
};

/**
 * Get a display-friendly summary of all faction standings.
 */
export const getReputationSummary = (reputation) =>
  FACTIONS.map((f) => ({
    faction: f,
    label: FACTION_LABELS[f],
    icon: FACTION_ICONS[f],
    value: reputation[f],
    tier: getReputationTier(reputation[f]),
  }));
