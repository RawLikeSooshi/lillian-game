/**
 * Sacrifice Mechanic
 * Permanent, irreversible trades: sacrifice a stat point, item, or power
 * for a narrative outcome impossible otherwise.
 */

export const SACRIFICE_TYPES = {
  STAT: "stat",
  ITEM: "item",
  POWER: "power",
};

/**
 * Validate whether a sacrifice is possible.
 * @param {string} type - "stat" | "item" | "power"
 * @param {string} targetId - Stat name, item ID, or power ID
 * @param {Object} context - { stats, inventory, powers }
 * @returns {{ valid: boolean, reason: string|null }}
 */
export const canSacrifice = (type, targetId, { stats, inventory, powers }) => {
  switch (type) {
    case SACRIFICE_TYPES.STAT:
      if (!stats || stats[targetId] === undefined)
        return { valid: false, reason: "Invalid stat." };
      if (stats[targetId] <= 0)
        return { valid: false, reason: "This stat is already at its lowest." };
      return { valid: true, reason: null };

    case SACRIFICE_TYPES.ITEM:
      if (!inventory || !inventory.some((item) => item.id === targetId))
        return { valid: false, reason: "You don't have this item." };
      return { valid: true, reason: null };

    case SACRIFICE_TYPES.POWER:
      if (!powers || !powers.some((p) => p.id === targetId))
        return { valid: false, reason: "You haven't unlocked this power." };
      return { valid: true, reason: null };

    default:
      return { valid: false, reason: "Unknown sacrifice type." };
  }
};

/**
 * Apply a sacrifice. Returns the new state values.
 * NOTE: This is permanent. The calling code must NOT allow undo.
 *
 * @param {string} type
 * @param {string} targetId
 * @param {Object} context - { stats, inventory, powers }
 * @returns {{ stats: Object, inventory: Array, sacrificedPowers: string[] }}
 */
export const applySacrifice = (type, targetId, { stats, inventory, powers }) => {
  const result = {
    stats: { ...stats },
    inventory: [...inventory],
    sacrificedPowers: [],
  };

  switch (type) {
    case SACRIFICE_TYPES.STAT:
      result.stats[targetId] = Math.max(0, (result.stats[targetId] || 0) - 1);
      break;

    case SACRIFICE_TYPES.ITEM:
      result.inventory = result.inventory.filter((item) => item.id !== targetId);
      break;

    case SACRIFICE_TYPES.POWER:
      result.sacrificedPowers = [targetId];
      break;
  }

  return result;
};

/**
 * Format a sacrifice for display.
 */
export const describeSacrifice = (type, targetId, context) => {
  switch (type) {
    case SACRIFICE_TYPES.STAT:
      return {
        label: `Sacrifice 1 ${targetId}`,
        icon: "📉",
        description: `Permanently reduce your ${targetId} by 1 point.`,
      };

    case SACRIFICE_TYPES.ITEM: {
      const item = context.inventory?.find((i) => i.id === targetId);
      return {
        label: `Sacrifice ${item?.name || targetId}`,
        icon: item?.icon || "📦",
        description: `Give up ${item?.name || "this item"} forever.`,
      };
    }

    case SACRIFICE_TYPES.POWER: {
      const power = context.powers?.find((p) => p.id === targetId);
      return {
        label: `Sacrifice ${power?.name || targetId}`,
        icon: power?.icon || "✨",
        description: `Permanently lose the ${power?.name || "this power"} ability.`,
      };
    }

    default:
      return { label: "Unknown sacrifice", icon: "❓", description: "" };
  }
};
