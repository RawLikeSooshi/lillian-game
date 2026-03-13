/**
 * Dream Sequence Engine
 * At camp between exploration nodes, the hero can:
 *   - Rest (heal a wound)
 *   - Dream (D20 determines dream vs nightmare; Zeus echo bonus)
 *   - Commune (companion conversation, builds loyalty)
 */

import { rollD20, getStatModifier } from "./dice.js";

export const CAMP_OPTIONS = {
  REST: "rest",
  DREAM: "dream",
  COMMUNE: "commune",
};

export const CAMP_OPTION_DISPLAY = {
  rest: { label: "Rest", icon: "🏕️", description: "Heal your wounds. A quiet night." },
  dream: { label: "Dream", icon: "🌙", description: "Close your eyes. Something waits in the dark." },
  commune: { label: "Commune", icon: "🔥", description: "Sit by the fire. Talk to your companion." },
};

/**
 * Resolve what kind of dream the hero has.
 * @param {number} wisdomStat - Hero's Wisdom value
 * @param {number} empathyStat - Hero's Empathy value
 * @param {number} divineFavor - Current divine favor world state
 * @returns {{ roll: object, isDream: boolean, isNightmare: boolean, echoBonus: number }}
 */
export const resolveDream = (wisdomStat, empathyStat, divineFavor) => {
  const roll = rollD20();
  const modifier = Math.max(getStatModifier(wisdomStat), getStatModifier(empathyStat));
  const total = roll.raw + modifier;

  // High roll = peaceful dream with echo. Low roll = nightmare.
  // Divine favor lowers the nightmare threshold.
  const nightmareThreshold = Math.max(4, 8 - Math.floor(divineFavor / 3));

  const isNightmare = total <= nightmareThreshold && !roll.nat20;
  const isDream = !isNightmare;

  // Echo bonus: dreams grant +1 to next memory echo roll, +2 on nat 20
  let echoBonus = 0;
  if (isDream) echoBonus = roll.nat20 ? 2 : 1;

  return { roll, isDream, isNightmare, echoBonus, total };
};

/**
 * Apply rest healing.
 * @param {Object} flags - Current flags (wound flags)
 * @returns {{ healedWound: boolean, newFlags: Object }}
 */
export const applyRest = (flags) => {
  const woundFlags = Object.keys(flags).filter(
    (f) => f.startsWith("wound_") && flags[f] === true
  );

  if (woundFlags.length === 0) {
    return { healedWound: false, newFlags: flags };
  }

  // Heal the most recent wound
  const healFlag = woundFlags[woundFlags.length - 1];
  return {
    healedWound: true,
    healedWoundFlag: healFlag,
    newFlags: { ...flags, [healFlag]: false },
  };
};

/**
 * Get the number of active wounds.
 */
export const getWoundCount = (flags) =>
  Object.keys(flags).filter((f) => f.startsWith("wound_") && flags[f] === true).length;

/**
 * Check if the hero is at death's door (3+ wounds).
 * Triggers divine intervention scene.
 */
export const isDeathsDoor = (flags) => getWoundCount(flags) >= 3;

/**
 * Apply a wound from a failed encounter.
 * @param {Object} flags - Current flags
 * @param {string} source - What caused the wound (e.g. "scylla", "bandits")
 * @returns {Object} Updated flags
 */
export const applyWound = (flags, source) => ({
  ...flags,
  [`wound_${source}`]: true,
});
