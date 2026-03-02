export const STEP_TYPES = {
  SCENE: "scene",
  PUZZLE: "puzzle",
  QUEST_FORK: "questFork",
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

export function isStepAccessible(step, flags, inventory) {
  if (!step.condition) return true;
  if (step.condition.flag && !flags[step.condition.flag]) return false;
  if (step.condition.item) {
    const hasIt = inventory.some(item => item.id === step.condition.item);
    if (!hasIt) return false;
  }
  return true;
}
