import { ALL_ITEMS } from "../data/items";

export const MAX_INVENTORY = 12;

// Item categories
export const ITEM_CATEGORIES = {
  QUEST: "quest",        // Key story items (woolen thread, sphinx papyrus)
  RELIC: "relic",        // Powerful permanent items (golden apple, forged weapon)
  CONSUMABLE: "consumable", // One-time use items (trident shard, healing herbs)
};

export function addItem(inventory, itemId) {
  if (inventory.length >= MAX_INVENTORY) return inventory;
  if (inventory.some(item => item.id === itemId)) return inventory;
  const itemDef = ALL_ITEMS[itemId];
  if (!itemDef) return inventory;
  return [...inventory, itemDef];
}

export function removeItem(inventory, itemId) {
  return inventory.filter(item => item.id !== itemId);
}

export function hasItem(inventory, itemId) {
  return inventory.some(item => item.id === itemId);
}

export function applyInventoryChanges(inventory, setsInventory) {
  if (!setsInventory || setsInventory.length === 0) return inventory;
  let result = inventory;
  for (const itemId of setsInventory) {
    result = addItem(result, itemId);
  }
  return result;
}

/**
 * Use a consumable item (removes it from inventory).
 * @returns {{ inventory: Array, used: boolean, item: object|null }}
 */
export function useConsumable(inventory, itemId) {
  const item = inventory.find(i => i.id === itemId);
  if (!item || item.category !== ITEM_CATEGORIES.CONSUMABLE) {
    return { inventory, used: false, item: null };
  }
  return {
    inventory: inventory.filter(i => i.id !== itemId),
    used: true,
    item,
  };
}

/**
 * Get items filtered by category.
 */
export function getItemsByCategory(inventory, category) {
  return inventory.filter(i => i.category === category);
}
