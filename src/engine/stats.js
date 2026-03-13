/**
 * STAT RANGE: 0-20 (start at 3, cap at 20)
 * Power thresholds at 8 / 13 / 17
 *
 * COURAGE GAIN GUIDELINES
 * +2 Courage for public, visible acts of standing up (confrontation, speaking out)
 * +1 Courage for quiet/internal bravery (private resolve, staying calm under pressure)
 * Quiet courage may also track via flags (e.g. actedPublicly_ch1) rather than large stat bumps
 */
export const INITIAL_STATS = { Courage: 3, Wisdom: 3, Discipline: 3, Empathy: 3, Cunning: 3 };

/**
 * Convert a stat value (0-20) to a D20 modifier.
 * Re-exported from dice.js for convenience.
 */
export { getStatModifier } from "./dice.js";
export const STAT_COLORS = { Courage: "#e85d3a", Wisdom: "#6b8fd4", Discipline: "#8b6db5", Empathy: "#4caf8a", Cunning: "#d4a017" };
export const STAT_ICONS = { Courage: "⚔️", Wisdom: "📜", Discipline: "🏛️", Empathy: "🫶", Cunning: "🦊" };

export const heroIdentity = (stats) => {
  const sorted = Object.entries(stats).sort((a, b) => b[1] - a[1]);
  const [top, second] = [sorted[0][0], sorted[1][0]];
  const map = {
    Courage: { Wisdom: ["The Brave Thinker","You face challenges head-on but never without thought. Heroes like you are rare — you can lead a charge and know exactly why it matters.","🦁"], Empathy: ["The Heart of the Battle","You are fearless — but you fight for others, not for glory. The gods admire those who use courage as a shield for the people they love.","🛡️"], Cunning: ["The Daring Fox","Bold and clever. You take the risky path — but you've already thought three moves ahead. Odysseus would respect you.","🦊"], Discipline: ["The Iron Hero","You face danger with iron will. Controlled, direct, unshakeable. You're the kind of hero others follow in dark moments.","⚔️"] },
    Wisdom: { Courage: ["The Thinking Warrior","You understand that the mind is the sharpest weapon. But you're not afraid to act when action is needed. Athena herself would nod.","🦉"], Empathy: ["The Gentle Sage","You see people deeply and think clearly. You don't just solve problems — you understand the people inside them.","📜"], Cunning: ["The Architect","You plan, observe, and out-think. You build solutions others don't see coming. Daedalus would call you a peer.","🔭"], Discipline: ["The Scholar of Olympus","Methodical, precise, deeply wise. Your decisions are never random. You build understanding the way a temple is built — stone by stone.","🏛️"] },
    Discipline: { Wisdom: ["The Patient Champion","Others rush. You persist. You know that the slow, steady path often leads somewhere the sprinters never reach.","🌿"], Courage: ["The Unyielding","Focused and fearless. Once you commit to something, nothing moves you. Challenges just make you steadier.","🗿"], Empathy: ["The Quiet Protector","You do what needs to be done, without drama — and always with care for the people around you. That's rare.","🌙"], Cunning: ["The Relentless Strategist","Patient and precise. You wait for the right moment — and when it comes, your move is perfectly placed.","♟️"] },
    Empathy: { Courage: ["The Defender","You feel things deeply — and you're brave enough to act on it. You don't just see people's pain, you step into it with them.","💫"], Wisdom: ["The Healer","Understanding and wise. You see the world through others' eyes — and that makes your decisions richer than most.","🌊"], Cunning: ["The People-Reader","You understand humans better than they understand themselves. That's its own kind of power — one most people never develop.","🫶"], Discipline: ["The Steady Heart","You care deeply and act consistently. People trust you — not because you're loud, but because you always show up.","🌸"] },
    Cunning: { Wisdom: ["The Strategist","You think in systems and angles. Where others see a wall, you see three ways through it.","🔮"], Courage: ["The Bold Trickster","Like Hermes himself — quick, clever, and unafraid. You take the unconventional path and arrive first.","⚡"], Empathy: ["The Human Decoder","Clever and compassionate. You understand what makes people tick — and you use it to help, not harm.","🗺️"], Discipline: ["The Planner","Nothing is left to chance. You think ahead, prepare, and execute. Games come naturally to minds like yours.","🎯"] },
  };
  const e = map[top]?.[second] || map[top]?.Wisdom || ["The Rising Hero","Your path is your own — and it's just beginning.","⭐"];
  return { title: e[0], desc: e[1], symbol: e[2] };
};

export const getMythFigure = (stats) => {
  const athenaStats = new Set(["Wisdom", "Empathy"]);
  const sorted = Object.entries(stats).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return (athenaStats.has(b[0]) ? 1 : 0) - (athenaStats.has(a[0]) ? 1 : 0);
  });
  const topStat = sorted[0][0];

  if (topStat === "Wisdom" || topStat === "Empathy") {
    return {
      name: "Athena",
      disguise: "an old woman sitting at a roadside loom, weaving slowly",
      greeting: "She doesn't look up when you approach. 'Sit,' she says. 'You look like someone who has been thinking.'",
      style: "athena",
      symbol: "🦉",
      revealLine: "She looks at you for a long moment. Then, slowly, she smiles — and for just a second, her eyes are the color of a storm over the sea.",
    };
  }

  if (topStat === "Courage" || topStat === "Discipline") {
    return {
      name: "Heracles",
      disguise: "a broad-shouldered laborer sitting on a stone wall, sharpening a blade with slow, steady strokes",
      greeting: "He glances up as you approach. 'You walk like someone who's been tested recently,' he says. 'Sit. Rest your legs.'",
      style: "heracles",
      symbol: "🦁",
      revealLine: "He sets down the blade — and stands. The air around him seems to shimmer. For just a moment, the scars on his hands glow like embers, and you see the shadow of a lion's pelt across his shoulders.",
    };
  }

  return {
    name: "Odysseus",
    disguise: "a wiry merchant with a knowing smile, arranging small carved figures on a cloth",
    greeting: "He looks up with eyes that seem to be solving a puzzle you didn't know you were part of. 'Interesting,' he says. 'You don't look lost — but you don't look found, either.'",
    style: "odysseus",
    symbol: "🧭",
    revealLine: "The merchant's smile sharpens. He picks up one of the carved figures — and you realize it looks exactly like you. 'I've been watching your journey,' he says, and his voice carries the weight of someone who once sailed past sirens and outwitted a cyclops.",
  };
};
