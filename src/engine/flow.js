export const STEP_TYPES = {
  SCENE: "scene",
  PUZZLE: "puzzle",
  QUEST_FORK: "questFork",
  ENCOUNTER: "encounter",
  EXPLORATION: "exploration",
  DIALOGUE_DUEL: "dialogueDuel",
  MEMORY_ECHO: "memoryEcho",
  DREAM: "dream",
  PROPHECY: "prophecy",
  SACRIFICE: "sacrifice",
  OATH_OPPORTUNITY: "oathOpportunity",
};

export function getSceneCount(flow) {
  return flow.filter(s => s.type === STEP_TYPES.SCENE).length;
}

export function getSceneNumber(flow, stepIndex) {
  let count = 0;
  for (let i = 0; i <= stepIndex && i < flow.length; i++) {
    if (flow[i].type === STEP_TYPES.SCENE) count++;
  }
  return count;
}

export function isStepAccessible(step, flags, inventory, reputation, worldState) {
  if (!step.condition) return true;
  if (step.condition.flag && !flags[step.condition.flag]) return false;
  if (step.condition.notFlag && flags[step.condition.notFlag]) return false;
  if (step.condition.item) {
    const hasIt = inventory.some(item => item.id === step.condition.item);
    if (!hasIt) return false;
  }
  // Reputation gates
  if (step.condition.reputation && reputation) {
    const { faction, min, max } = step.condition.reputation;
    const val = reputation[faction] ?? 0;
    if (min !== undefined && val < min) return false;
    if (max !== undefined && val > max) return false;
  }
  // World state gates
  if (step.condition.worldState && worldState) {
    for (const [key, req] of Object.entries(step.condition.worldState)) {
      const val = worldState[key] || 0;
      if (req.min !== undefined && val < req.min) return false;
      if (req.max !== undefined && val > req.max) return false;
    }
  }
  return true;
}

/**
 * Get a human-readable label for a step type.
 */
export function getStepLabel(step) {
  const labels = {
    scene: "Scene",
    puzzle: "Puzzle",
    questFork: "Quest Fork",
    encounter: "Encounter",
    exploration: "Exploration",
    dialogueDuel: "Dialogue",
    memoryEcho: "Vision",
    dream: "Camp",
    prophecy: "Prophecy",
    sacrifice: "Sacrifice",
    oathOpportunity: "Oath",
  };
  return labels[step?.type] || "Unknown";
}

/**
 * Count steps of a specific type in a flow.
 */
export function getStepCount(flow, type) {
  return flow.filter(s => s.type === type).length;
}
