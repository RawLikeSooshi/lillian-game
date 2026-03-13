/**
 * Oath System
 * Binding promises that give powerful buffs but constrain future choices.
 * Breaking an oath has severe consequences.
 */

/**
 * All available oaths in the game.
 * Each oath has: buff (stat bonuses to rolls), constraint (what you can't do),
 * and breakConsequence (what happens if you violate it).
 */
export const OATH_CATALOG = {
  oathOfReturn: {
    id: "oathOfReturn",
    name: "Oath of Return",
    chapter: 3,
    description: "Swear to return to Corinth when your journey is done.",
    swornTo: "Niko",
    buff: { Empathy: 1 },
    constraint: "Cannot choose options that permanently abandon allies.",
    constraintTags: ["abandonAlly"],
    breakConsequence: {
      statChanges: { Empathy: -2 },
      flags: { brokeOathOfReturn: true },
      narrative: "The bracelet on your wrist goes cold. Somewhere in Corinth, Niko stops watching the road.",
    },
    oracleExplanation: "A promise freely given is heavier than any chain. But it is also lighter -- because you chose it.",
    icon: "🤝",
  },
  oathOfTheSea: {
    id: "oathOfTheSea",
    name: "Oath of the Sea",
    chapter: 4,
    description: "Swear to Poseidon you will never harm a sailor.",
    swornTo: "Poseidon",
    buff: { Discipline: 1 },
    constraint: "Cannot choose violent options against sailors or during sea encounters.",
    constraintTags: ["harmSailor", "seaViolence"],
    breakConsequence: {
      statChanges: { Discipline: -2, Courage: -1 },
      flags: { brokeOathOfTheSea: true },
      worldStateChanges: { divineFavor: -2 },
      narrative: "The sea churns. Waves rise against the hull. Poseidon heard you break your word.",
    },
    oracleExplanation: "The sea remembers everything. Every shipwreck, every prayer, every broken promise. Yours is recorded now.",
    icon: "🌊",
  },
  oathOfTheGarden: {
    id: "oathOfTheGarden",
    name: "Oath of the Garden",
    chapter: 5,
    description: "Swear never to use divine gifts for personal gain.",
    swornTo: "The Hesperides",
    buff: { Wisdom: 2 },
    constraint: "Cannot use items for personal benefit -- only to help others.",
    constraintTags: ["selfishItemUse"],
    breakConsequence: {
      statChanges: { Wisdom: -3 },
      flags: { brokeOathOfTheGarden: true },
      narrative: "A golden petal falls from your hair. The garden's blessing fades like morning mist.",
    },
    oracleExplanation: "The garden gave freely because you promised to do the same. Generosity is only real when it costs you something.",
    icon: "🌿",
  },
  oathToTheDead: {
    id: "oathToTheDead",
    name: "Oath to the Dead",
    chapter: 6,
    description: "Swear to carry a child's message to the living world.",
    swornTo: "A child in the Fields of Asphodel",
    buff: { Empathy: 1, Courage: 1 },
    constraint: "Must deliver the message before the story ends.",
    constraintTags: ["ignoreDeadChild"],
    breakConsequence: {
      statChanges: { Empathy: -3 },
      flags: { brokeOathToTheDead: true },
      reputationChanges: { underworld: -3 },
      narrative: "The message fades from your memory. In the Underworld, a child waits at the river. They will wait forever.",
    },
    oracleExplanation: "The dead ask so little. To be remembered. To be carried. The weight of a child's last wish is nothing -- and everything.",
    icon: "🕯️",
  },
  oathOfTheMaker: {
    id: "oathOfTheMaker",
    name: "Oath of the Maker",
    chapter: 7,
    description: "Swear never to use your forged weapon against an innocent.",
    swornTo: "Hephaestus",
    buff: { Discipline: 2 },
    constraint: "Forged item cannot be used against non-hostile targets.",
    constraintTags: ["attackInnocent"],
    breakConsequence: {
      statChanges: { Discipline: -3 },
      flags: { brokeOathOfTheMaker: true },
      narrative: "Your weapon cracks. A hairline fracture, visible only to you. Hephaestus made it to protect. You used it to harm.",
    },
    oracleExplanation: "A weapon is only as noble as the hand that wields it. Hephaestus asked one thing: that your hand stay clean.",
    icon: "🔨",
  },
  oathOfMercy: {
    id: "oathOfMercy",
    name: "Oath of Mercy",
    chapter: 8,
    description: "Swear never to kill what can be saved.",
    swornTo: "The Minotaur",
    buff: { Empathy: 3 },
    constraint: "Must attempt non-violent resolution first in all encounters.",
    constraintTags: ["killFirst", "noMercy"],
    breakConsequence: {
      statChanges: { Empathy: -4, Courage: -1 },
      flags: { brokeOathOfMercy: true },
      reputationChanges: { gods: -2 },
      narrative: "Something inside you breaks. Not a bone. Something worse. The Minotaur trusted you. You swore.",
    },
    oracleExplanation: "Mercy is the hardest power. It requires more strength than violence, more courage than cruelty. You chose the harder path.",
    icon: "🕊️",
  },
};

export const INITIAL_OATHS = [];

/**
 * Swear an oath. Returns the new oaths array.
 */
export const swearOath = (currentOaths, oathId) => {
  if (currentOaths.some((o) => o.id === oathId)) return currentOaths;
  const oath = OATH_CATALOG[oathId];
  if (!oath) return currentOaths;
  return [...currentOaths, { id: oathId, sworn: true, broken: false }];
};

/**
 * Check if a choice would violate any active oath.
 * @param {Array} oaths - Active oaths
 * @param {string[]} choiceTags - Tags on the choice (e.g. ["abandonAlly", "harmSailor"])
 * @returns {{ constrained: boolean, violatedOaths: Array }}
 */
export const checkOathConstraints = (oaths, choiceTags = []) => {
  if (!choiceTags.length) return { constrained: false, violatedOaths: [] };

  const violatedOaths = oaths
    .filter((o) => o.sworn && !o.broken)
    .map((o) => OATH_CATALOG[o.id])
    .filter((oath) => oath && oath.constraintTags.some((tag) => choiceTags.includes(tag)));

  return { constrained: violatedOaths.length > 0, violatedOaths };
};

/**
 * Break an oath. Returns updated oaths array and consequences.
 */
export const breakOath = (currentOaths, oathId) => {
  const oath = OATH_CATALOG[oathId];
  if (!oath) return { oaths: currentOaths, consequence: null };

  const updatedOaths = currentOaths.map((o) =>
    o.id === oathId ? { ...o, broken: true } : o
  );

  return { oaths: updatedOaths, consequence: oath.breakConsequence };
};

/**
 * Get total buff from all active (sworn, not broken) oaths.
 * @returns {Object} Stat bonuses, e.g. { Empathy: 2, Courage: 1 }
 */
export const getOathBuffs = (oaths) => {
  const buffs = {};
  for (const o of oaths) {
    if (!o.sworn || o.broken) continue;
    const oath = OATH_CATALOG[o.id];
    if (!oath?.buff) continue;
    for (const [stat, bonus] of Object.entries(oath.buff)) {
      buffs[stat] = (buffs[stat] || 0) + bonus;
    }
  }
  return buffs;
};

/**
 * Get display-friendly list of active oaths.
 */
export const getActiveOaths = (oaths) =>
  oaths
    .filter((o) => o.sworn && !o.broken)
    .map((o) => ({ ...o, ...OATH_CATALOG[o.id] }));

export const getBrokenOaths = (oaths) =>
  oaths
    .filter((o) => o.broken)
    .map((o) => ({ ...o, ...OATH_CATALOG[o.id] }));
