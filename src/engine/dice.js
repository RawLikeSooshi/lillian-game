/**
 * D20 Combat Engine
 * Core dice mechanics for encounters, dialogue duels, echoes, and dreams.
 */

/**
 * Roll a D20 (1-20).
 * @returns {{ raw: number, nat20: boolean, nat1: boolean }}
 */
export const rollD20 = () => {
  const raw = Math.floor(Math.random() * 20) + 1;
  return { raw, nat20: raw === 20, nat1: raw === 1 };
};

/**
 * Convert a stat value (0-20) to a D20 modifier (-1 to +8).
 * Formula: floor((statValue - 3) / 2)
 *   stat 0-2 → -1, stat 3-4 → 0 (starting baseline), stat 5-6 → +1,
 *   stat 7-8 → +2, stat 9-10 → +3, stat 11-12 → +4, stat 13-14 → +5,
 *   stat 15-16 → +6, stat 17-18 → +7, stat 19-20 → +8
 */
export const getStatModifier = (statValue) =>
  Math.floor((Math.max(0, Math.min(20, statValue)) - 3) / 2);

/**
 * Resolve a D20 roll against a difficulty class.
 * @param {number} raw - The raw D20 result (1-20)
 * @param {number} modifier - Stat modifier + power bonuses
 * @param {number} dc - Difficulty class to beat
 * @returns {{ total: number, outcome: string, margin: number }}
 *
 * Outcomes:
 *   nat20 → "crit" (regardless of DC)
 *   total >= dc → "success"
 *   total >= dc - 3 → "partial"
 *   else → "fail"
 *   nat1 → always "fail" (regardless of modifier)
 */
export const resolveRoll = (raw, modifier, dc) => {
  const total = raw + modifier;
  const margin = total - dc;

  let outcome;
  if (raw === 20) outcome = "crit";
  else if (raw === 1) outcome = "fail";
  else if (total >= dc) outcome = "success";
  else if (total >= dc - 3) outcome = "partial";
  else outcome = "fail";

  return { total, outcome, margin };
};

/**
 * Full combat round resolution.
 * @param {string} stat - The stat name used for this roll (e.g. "Courage")
 * @param {number} statValue - Current value of that stat (0-20)
 * @param {number} dc - Difficulty class
 * @param {number} [powerBonus=0] - Additional bonus from divine powers
 * @param {number} [oathBonus=0] - Additional bonus from active oaths
 * @returns {{ raw: number, nat20: boolean, nat1: boolean, modifier: number, total: number, outcome: string, margin: number, stat: string }}
 */
export const resolveCombatRound = (stat, statValue, dc, powerBonus = 0, oathBonus = 0) => {
  const { raw, nat20, nat1 } = rollD20();
  const baseModifier = getStatModifier(statValue);
  const modifier = baseModifier + powerBonus + oathBonus;
  const { total, outcome, margin } = resolveRoll(raw, modifier, dc);
  return { raw, nat20, nat1, modifier, total, outcome, margin, stat };
};

/**
 * Resolve an unmodified roll (timer expired — no stat bonus).
 */
export const resolveRawRoll = (dc) => {
  const { raw, nat20, nat1 } = rollD20();
  const { total, outcome, margin } = resolveRoll(raw, 0, dc);
  return { raw, nat20, nat1, modifier: 0, total, outcome, margin, stat: null };
};

/**
 * Outcome display labels.
 */
export const OUTCOME_LABELS = {
  crit: "Critical Success!",
  success: "Success",
  partial: "Partial Success",
  fail: "Failure",
};

export const OUTCOME_COLORS = {
  crit: "#ffd700",
  success: "#4caf8a",
  partial: "#d4a017",
  fail: "#e85d3a",
};
