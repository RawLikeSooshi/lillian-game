import { ALL_ITEMS } from "../data/items";

export const MAX_INVENTORY = 6;

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
