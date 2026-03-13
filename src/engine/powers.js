/**
 * Divine Powers / Skill Tree
 * Stats crossing thresholds (8, 13, 17) unlock divine abilities.
 * Powers modify dice rolls, reveal hidden choices, and grant combat advantages.
 * Stat range is 0-20, starting at 3.
 */

export const POWER_THRESHOLDS = [8, 13, 17];

/**
 * 15 powers: 5 stats x 3 tiers.
 * Each power has mechanical effects and narrative flavor.
 */
export const POWER_TREE = [
  // ── Courage ──
  {
    id: "battleCry",
    stat: "Courage",
    tier: 1,
    threshold: 8,
    name: "Battle Cry",
    description: "Your voice carries thunder. +2 to encounter rolls when using Courage.",
    icon: "🗡️",
    effect: { encounterBonus: 2, stat: "Courage" },
    oracleExplanation: "Something surges in you when you stand your ground. Your courage isn't just will anymore — it's becoming something more.",
  },
  {
    id: "thunderStrike",
    stat: "Courage",
    tier: 2,
    threshold: 13,
    name: "Thunder Strike",
    description: "Lightning flickers in your hands. Auto-succeed one encounter round per chapter.",
    icon: "⚡",
    effect: { autoSucceedEncounter: 1 },
    oracleExplanation: "The air crackles when you raise your hand. This is not mortal strength. Something in your blood is waking up.",
  },
  {
    id: "stormCaller",
    stat: "Courage",
    tier: 3,
    threshold: 17,
    name: "Storm Caller",
    description: "The sky answers you. Choose to skip one encounter entirely per chapter.",
    icon: "🌩️",
    effect: { encounterSkip: 1 },
    oracleExplanation: "Storms bend around you. The clouds part when you walk. Even the gods are paying attention now.",
  },

  // ── Wisdom ──
  {
    id: "oraclesWhisper",
    stat: "Wisdom",
    tier: 1,
    threshold: 8,
    name: "Oracle's Whisper",
    description: "You sense danger before it strikes. See the DC before choosing in encounters.",
    icon: "👁️",
    effect: { revealDC: true },
    oracleExplanation: "You see things before they happen — just a heartbeat ahead, but enough. The Oracle recognizes a kindred mind.",
  },
  {
    id: "athenasSight",
    stat: "Wisdom",
    tier: 2,
    threshold: 13,
    name: "Athena's Sight",
    description: "Hidden truths reveal themselves. See hidden choices in dialogue duels.",
    icon: "🦉",
    effect: { revealHiddenDuelChoice: true },
    oracleExplanation: "You see what others miss — the third option, the unspoken answer. Athena's own gift, whether she intended it or not.",
  },
  {
    id: "foresight",
    stat: "Wisdom",
    tier: 3,
    threshold: 17,
    name: "Foresight",
    description: "You glimpse the threads of fate. Reroll one die per chapter.",
    icon: "🔮",
    effect: { reroll: 1 },
    oracleExplanation: "Time bends around your decisions. You see the paths before you — all of them. This is not mortal sight.",
  },

  // ── Discipline ──
  {
    id: "ironWill",
    stat: "Discipline",
    tier: 1,
    threshold: 8,
    name: "Iron Will",
    description: "Nothing shakes you. +2 to endurance-based rolls.",
    icon: "🛡️",
    effect: { encounterBonus: 2, stat: "Discipline" },
    oracleExplanation: "Others flinch. You don't. That stillness is becoming something deeper — something that cannot be moved.",
  },
  {
    id: "unbreakable",
    stat: "Discipline",
    tier: 2,
    threshold: 13,
    name: "Unbreakable",
    description: "Failure cannot touch you. Convert one 'fail' result to 'partial' per chapter.",
    icon: "🗿",
    effect: { convertFailToPartial: 1 },
    oracleExplanation: "Where others break, you bend. Where they fall, you stand. The mountain does not ask permission to endure.",
  },
  {
    id: "titanPatience",
    stat: "Discipline",
    tier: 3,
    threshold: 17,
    name: "Titan's Patience",
    description: "Your steadiness is absolute. Upgrade one 'partial' to 'success' per chapter.",
    icon: "⛰️",
    effect: { convertPartialToSuccess: 1 },
    oracleExplanation: "The Titans held the sky. You hold something heavier — yourself, perfectly steady, in a world that tries to shake you loose.",
  },

  // ── Empathy ──
  {
    id: "sirensVoice",
    stat: "Empathy",
    tier: 1,
    threshold: 8,
    name: "Siren's Voice",
    description: "Your words reach hearts. +2 to dialogue duel rolls when using Empathy.",
    icon: "🎵",
    effect: { duelBonus: 2, stat: "Empathy" },
    oracleExplanation: "People listen when you speak — not because you're loud, but because you mean it. That sincerity has power.",
  },
  {
    id: "healingTouch",
    stat: "Empathy",
    tier: 2,
    threshold: 13,
    name: "Healing Touch",
    description: "Your compassion mends. Remove one wound per chapter.",
    icon: "💚",
    effect: { healWound: 1 },
    oracleExplanation: "When you touch someone in pain, the pain lessens. This is not medicine. This is something older.",
  },
  {
    id: "heartOfTheHero",
    stat: "Empathy",
    tier: 3,
    threshold: 17,
    name: "Heart of the Hero",
    description: "Your bond with others is unbreakable. Auto-succeed one dialogue duel round per chapter.",
    icon: "💫",
    effect: { autoSucceedDuel: 1 },
    oracleExplanation: "They follow you not because you command, but because you care. That is the rarest power of all.",
  },

  // ── Cunning ──
  {
    id: "hermesStep",
    stat: "Cunning",
    tier: 1,
    threshold: 8,
    name: "Hermes' Step",
    description: "Quick and invisible. +2 to stealth and trickery rolls. Timer extends by 3s.",
    icon: "👟",
    effect: { encounterBonus: 2, stat: "Cunning", timerExtend: 3 },
    oracleExplanation: "You move like smoke. People look right at where you were — and you're already somewhere else.",
  },
  {
    id: "shadowWalk",
    stat: "Cunning",
    tier: 2,
    threshold: 13,
    name: "Shadow Walk",
    description: "You slip through danger unseen. Bypass one encounter per chapter.",
    icon: "🌑",
    effect: { encounterBypass: 1 },
    oracleExplanation: "The shadows welcome you. You walk between moments, between glances, between breaths. Hermes himself would nod.",
  },
  {
    id: "trickstersGambit",
    stat: "Cunning",
    tier: 3,
    threshold: 17,
    name: "Trickster's Gambit",
    description: "Fate bends to your cleverness. Force an enemy to reroll once per chapter.",
    icon: "🎭",
    effect: { forceEnemyReroll: 1 },
    oracleExplanation: "You don't just play the game — you change its rules. The gods play dice. You play the gods.",
  },
];

/**
 * Get all currently unlocked powers based on stat values.
 */
export const getUnlockedPowers = (stats) =>
  POWER_TREE.filter((p) => (stats[p.stat] || 0) >= p.threshold);

/**
 * Get powers that were just unlocked by a stat change.
 */
export const getNewlyUnlocked = (oldStats, newStats) =>
  POWER_TREE.filter(
    (p) => (oldStats[p.stat] || 0) < p.threshold && (newStats[p.stat] || 0) >= p.threshold
  );

/**
 * Calculate total power bonus for a given stat in a given context.
 * @param {Array} powers - Currently unlocked powers
 * @param {string} stat - The stat being used for the roll
 * @param {string} context - "encounter" | "duel" | "echo"
 * @returns {number} Total bonus
 */
export const getPowerBonus = (powers, stat, context) => {
  let bonus = 0;
  for (const p of powers) {
    if (!p.effect) continue;
    if (context === "encounter" && p.effect.encounterBonus && p.effect.stat === stat) {
      bonus += p.effect.encounterBonus;
    }
    if (context === "duel" && p.effect.duelBonus && p.effect.stat === stat) {
      bonus += p.effect.duelBonus;
    }
  }
  return bonus;
};

/**
 * Check if a power with a per-chapter ability is available.
 * @param {Array} powers - Unlocked powers
 * @param {string} effectKey - e.g. "reroll", "autoSucceedEncounter"
 * @param {Object} usedPowers - { powerId: timesUsedThisChapter }
 * @returns {{ available: boolean, power: object|null }}
 */
export const checkPowerAvailability = (powers, effectKey, usedPowers = {}) => {
  const power = powers.find((p) => p.effect && p.effect[effectKey]);
  if (!power) return { available: false, power: null };
  const maxUses = power.effect[effectKey];
  const used = usedPowers[power.id] || 0;
  return { available: used < maxUses, power };
};

/**
 * Get the timer extension from Cunning powers.
 */
export const getTimerExtension = (powers) => {
  let ext = 0;
  for (const p of powers) {
    if (p.effect?.timerExtend) ext += p.effect.timerExtend;
  }
  return ext;
};
