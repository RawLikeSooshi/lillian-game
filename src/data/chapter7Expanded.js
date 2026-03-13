/**
 * Chapter 7 Expanded Data — "The Forge of Hephaestus"
 * Prophecy, Encounter (Weapon Test), Exploration (Lemnos),
 * Dialogue Duel (Hephaestus — honest), Memory Echo, Sacrifice, Dream/Camp, Ticker
 */

// ── Prophecy Pool ──
export const ch7ProphecyPool = [
  {
    id: "ch7_forge",
    text: "The fire that shapes the blade also shapes the hand that holds it.",
    reveal: "Forging your weapon changed you as much as it changed the metal. Hephaestus knew this — the forge doesn't just make weapons. It makes wielders.",
    chapters: [7],
  },
  {
    id: "ch7_rival",
    text: "She carries something forged in the same fire. You will know it when you see it.",
    reveal: "Your rival visited Hephaestus before you. Whatever she forged, it was made with the same divine bronze. When your weapons meet, the forge will remember.",
    chapters: [7],
  },
  {
    id: "ch7_equal",
    text: "The god who builds asks the question the god who rules never will.",
    reveal: "Hephaestus asked whose equal you'd become — not whose servant. Zeus never asked because he assumed the answer. That difference matters more than divine blood.",
    chapters: [7],
  },
];

// ── Major Encounter: Weapon Test ──
export const ch7EncounterTest = {
  title: "Trial of the Forge",
  enemyName: "Bronze Automaton",
  image: "🤖",
  atmosphere: "The automaton moves with inhuman precision. Bronze plates shift and lock. Its eyes glow with forge-fire. Hephaestus built it to test — not to destroy. But the difference is narrower than you'd like.",
  baseDC: 13,
  weaponBonus: 3, // Forged weapon provides +3
  woundSource: "automaton",
  choices: [
    {
      prompt: "The automaton lunges — a straight punch aimed at your center. Fast, mechanical, precise.",
      timer: 10,
      options: [
        { text: "Sidestep and counter. Speed beats power.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Brace and deflect. Let the force pass through.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Read the gears. Predict where it will strike next.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
      ],
    },
    {
      prompt: "The automaton shifts tactics — its arms reconfigure into a spinning attack pattern. The air hums with bronze.",
      timer: 10,
      options: [
        { text: "Drop low and strike at its legs. Destabilize it.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Hold ground. Wait for the pattern to reveal a gap.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Use your weapon's unique quality. Trust the forging.", stat: "Courage", statChanges: { Courage: 1 } },
      ],
    },
    {
      prompt: "The automaton staggers but recovers. It's learning your moves. Its next attack will be different.",
      timer: 10,
      options: [
        { text: "Change approach entirely. Do something unexpected.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Press the advantage now before it adapts.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Speak to it. It's Hephaestus's creation — maybe it can hear you.", stat: "Empathy", statChanges: { Empathy: 1 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "The automaton stops mid-swing. Its arms lower. The forge-light in its eyes dims to a gentle glow. It bows — an awkward, mechanical bow — and steps back.\n\nHephaestus claps slowly. 'That's the first time anyone's made it bow. Ever. The weapon is worthy. So is the wielder.'\n\nThe automaton hands you something — a small bronze gear, warm from its own body. A gift from one creation to another.",
      statChanges: { Courage: 1, Wisdom: 1 },
      reputation: { gods: 2 },
      flags: { automatonBowed: true, provenInForge: true },
    },
    success: {
      text: "The automaton shudders and locks in place — test complete. You're standing. Breathing hard, but standing.\n\nHephaestus nods. 'The weapon holds. And so do you.' He examines your forged item with a craftsman's eye. 'Good work. Not perfect — but good. Perfect is boring anyway.'",
      statChanges: { Courage: 1 },
      reputation: { gods: 1 },
      flags: { provenInForge: true },
    },
    partial: {
      text: "The automaton catches you with a glancing blow — bronze against bone, enough to sting but not to break. The test ends on time, not on your terms.\n\nHephaestus shrugs. 'You survived. The weapon didn't shatter. That's a passing grade.' He pauses. 'Barely.'",
      statChanges: {},
      flags: { provenInForge: true },
    },
    fail: {
      text: "The automaton pins you against the chamber wall. Not roughly — precisely. Hephaestus calls it off with a whistle.\n\n'The weapon is fine,' he says, helping you up. 'You're not ready for it yet. That's normal. Most heroes need time to grow into what they've made.' He's not unkind about it. That almost makes it worse.",
      statChanges: { Discipline: -1 },
      flags: { failedForgeTest: true },
    },
  },
};

// ── Exploration Nodes (Lemnos) ──
export const ch7ExplorationNodes = {
  title: "The Slopes of Lemnos",
  description: "The volcanic island holds secrets beyond the forge. Hephaestus lets you explore while your weapon cools. Choose two places to investigate before sunset.",
  picks: 2,
  nodes: [
    {
      id: "abandoned_workshop",
      name: "The Abandoned Workshop",
      icon: "🏚️",
      hint: "A smaller forge, overgrown with sulfur crystals. Tools still hang on the walls.",
      type: "puzzle",
      content: {
        puzzleId: "ch7_puzzle_artifact",
        text: "The workshop hasn't been used in centuries, but everything is preserved by the volcanic heat. Workbenches, molds, half-finished projects. And in the center — three items on a pedestal, each claiming to be the original.\n\nA puzzle left by whoever worked here last. Or a test left by Hephaestus himself.",
        statChanges: { Wisdom: 1 },
        feedback: "The workshop yields its secret. Among the tools and molds, you find something unexpected — design sketches for weapons you've never seen. One sketch is labeled in handwriting you don't recognize: 'For the daughter of storms.'",
        lesson: "Abandoned places aren't empty — they're archives. What someone left behind tells you as much about them as what they took with them.",
        setsFlags: { exploredWorkshop: true },
      },
    },
    {
      id: "lava_tubes",
      name: "The Lava Tubes",
      icon: "🕳️",
      hint: "Tunnels carved by ancient lava flows. Something glints deep inside.",
      type: "scene",
      content: {
        text: "The lava tubes are surprisingly cool — the rock insulated them from the surface heat. You follow the tunnel deeper, your footsteps echoing.\n\nThe walls are streaked with minerals — copper, tin, something else that glows faintly blue. Celestial bronze ore, unrefined. The raw material of divine weapons.\n\nDeeper in, you hear clicking. Something mechanical. A small automaton — damaged, crawling in circles — blocks the path. It's not hostile. It's broken.\n\nBeyond it, you can see a vein of the blue ore, thick and accessible.",
        statChanges: { Wisdom: 1 },
        setsInventory: ["celestialBronzeOre"],
        feedback: "You collect a handful of raw celestial bronze ore. It's warm and heavy, and it hums faintly when you hold it. Hephaestus will know what to do with it. The broken automaton watches you leave with something that might be gratitude.",
        lesson: "Raw materials have potential, not power. The ore in your hand could become anything — weapon, tool, art. What it becomes depends on who shapes it and why.",
        setsFlags: { exploredLavatubes: true, foundCelestialOre: true },
      },
    },
    {
      id: "automaton_graveyard",
      name: "The Automaton Graveyard",
      icon: "⚙️",
      hint: "A plateau littered with bronze shells. Some still twitch. One might be salvageable.",
      type: "scene",
      content: {
        text: "The plateau behind the forge is a graveyard of machines. Automatons in various states of disrepair lie scattered across the volcanic rock — some ancient, some recent. Failed experiments. Retired workers. Broken guardians.\n\nMost are beyond repair. But one — small, about the size of a dog — sparks weakly when you approach. Its head turns toward you. One eye glows dim orange.\n\nIt makes a sound. Not speech. A whir, a click, a pattern. It's trying to communicate.\n\nYou could try to repair it. Or you could leave it — Hephaestus abandoned it for a reason.",
        statChanges: { Empathy: 1, Cunning: 1 },
        feedback: "You spend an hour working on the small automaton. You're not a smith, but the mechanisms are logical — gears connect to gears, springs drive motion. When you replace the corroded drive spring with a working one from a nearby shell, the automaton shudders to life.\n\nIt stands on four bronze legs, shakes itself like a wet dog, and looks at you with both eyes glowing steady amber. Then it sits at your feet and doesn't move.\n\nIt chose you.",
        lesson: "Repairing something that was discarded — giving it a second chance — is an act of empathy that also requires practical skill. The automaton didn't need sympathy. It needed someone willing to get their hands dirty.",
        setsFlags: { repairedAutomaton: true, hasCompanion: true },
        setsInventory: ["bronzeCompanion"],
      },
    },
  ],
};

// ── Dialogue Duel: Hephaestus ──
export const ch7DialogueDuel = {
  title: "The Honest God",
  npcName: "Hephaestus",
  npcTitle: "God of the Forge",
  baseResolve: 8,
  maxRounds: 3,
  resistances: ["Deflect", "Assert"], // Hephaestus sees through flattery and isn't intimidated by bluster
  vulnerabilities: ["Empathize", "Reason"], // Genuine honesty and thoughtful reasoning move him
  rounds: [
    {
      npcLine: "Hephaestus sets down his hammer and looks at you directly. 'I'll tell you something the other gods won't. Your father is afraid of you. Not of what you are — of what you might become.' He waits. 'Does that surprise you?'",
      options: {
        Assert: { text: "Good. He should be.", stat: "Courage", dc: 12 },
        Reason: { text: "It makes sense. Power fears what it can't control. Even its own children.", stat: "Wisdom", dc: 7 },
        Empathize: { text: "That's sad. For both of us. He could have known me instead of fearing me.", stat: "Empathy", dc: 7 },
        Deflect: { text: "Is that why you're telling me? Because you want me to be afraid of him too?", stat: "Cunning", dc: 12 },
        Endure: { text: "I can't control what he feels. I can only control what I do.", stat: "Discipline", dc: 9 },
      },
    },
    {
      npcLine: "Hephaestus picks up a piece of scrap metal and turns it in his hands. 'A girl came here before you. Your rival. She asked me to forge her something specific. I did.' He pauses. 'She asked about you. Specifically. By name. She wanted to know what I thought of you.' He meets your eyes. 'What should I have told her?'",
      options: {
        Assert: { text: "The truth. That I'm coming and I'm not stopping.", stat: "Courage", dc: 11 },
        Reason: { text: "Whatever you actually think. You don't seem like someone who lies to be polite.", stat: "Wisdom", dc: 7 },
        Empathize: { text: "I wonder why she's asking about me. Maybe she's as uncertain as I am.", stat: "Empathy", dc: 7 },
        Deflect: { text: "What DID you tell her?", stat: "Cunning", dc: 11 },
        Endure: { text: "It doesn't matter what you told her. It matters what I do next.", stat: "Discipline", dc: 9 },
      },
    },
    {
      npcLine: "Hephaestus stands and moves to the forge. The fire brightens as he approaches, as if it recognizes him. 'Last thing. I was thrown from Olympus as a baby. I fell for an entire day. I shattered both legs on impact.' He looks at you. 'The gods are capable of terrible things. Even to their own.' His voice is quiet but steady. 'What will you do when you reach Olympus?'",
      options: {
        Assert: { text: "I'll demand answers. They owe me that much.", stat: "Courage", dc: 10 },
        Reason: { text: "I'll listen first. Then decide. Answers before action.", stat: "Wisdom", dc: 7 },
        Empathize: { text: "I don't know. But I won't do to anyone what they did to you.", stat: "Empathy", dc: 6 },
        Deflect: { text: "I'd rather talk about what happened to you. You deserved better.", stat: "Cunning", dc: 12 },
        Endure: { text: "I'll survive it. Whatever it is. The way you survived the fall.", stat: "Discipline", dc: 8 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Hephaestus smiles — slowly, like metal warming. 'You're honest,' he says. 'That's rarer than divine blood. Rarer than celestial bronze.' He reaches into the forge and pulls out something small and glowing. 'A gift. Not because you're Zeus's daughter — because you earned it by being truthful with someone who was truthful with you.'\n\nHe places it in your hand. A forge-ember, warm and eternal. It will never go out.",
      statChanges: { Wisdom: 1, Empathy: 1 },
      reputation: { gods: 2 },
      flags: { impressedHephaestus: true, hephaestusGift: true },
    },
    draw: {
      text: "Hephaestus nods. 'You're getting there,' he says. 'Not all the way honest yet — but you're trying. That counts.' He clasps your shoulder with a calloused hand. 'Come back someday. When you know more about who you are. The forge will be here.'",
      statChanges: { Wisdom: 1 },
      reputation: { gods: 1 },
      flags: { metHephaestus: true },
    },
    lose: {
      text: "Hephaestus sighs — not angry, disappointed. 'You're performing,' he says quietly. 'Saying what you think I want to hear. I get enough of that from Olympus.' He turns back to the forge. 'The weapon I made you is still good. But the conversation could have been better. Think about why.'",
      statChanges: {},
      flags: { metHephaestus: true },
    },
  },
};

// ── Memory Echo ──
export const ch7Echo = {
  fragments: [
    "The forge of your creation",
    "Fire that shapes without destroying",
    "The god who fell and stood again",
    "Bronze remembers every blow",
    "Your weapon is your answer",
  ],
  correctOrder: [0, 2, 1, 3, 4], // forge of creation → god who fell → fire that shapes → bronze remembers → weapon is answer
  baseDC: 12,
  dreamText: "Fire, everywhere. Not burning — forging. You see yourself on an anvil, being hammered into shape. Each blow is a choice you've made. Each choice left a mark. The fire whispers: 'The forge of your creation began before you were born.'",
  nightmareText: "The forge goes dark. The metal cools mid-shape — frozen, incomplete. A voice says: 'Unfinished.' You reach for the hammer but your hands pass through it. You're the metal, not the smith. And no one is swinging.",
};

// ── Sacrifice: Power for Weapon Enhancement ──
export const ch7SacrificeData = {
  type: "power",
  targetId: "divineSpark",
  narrative: "Hephaestus holds your forged weapon over the fire one last time. 'I can make it stronger,' he says. 'Permanently. But divine craft requires divine fuel.' He looks at you steadily. 'A piece of your divine inheritance. The spark your father gave you without knowing. I can fold it into the metal. The weapon will be extraordinary. But you'll have less of yourself to draw on later.'",
  oracleText: "What you sacrifice becomes part of what you create. The weapon will carry your power — but you will not.",
  gainText: "Your forged weapon gains permanent divine enhancement (+2 to all checks when wielded).",
  flags: { sacrificedForWeapon: true },
  declineFlags: { keptDivineSpark: true },
};

// ── Dream/Camp ──
export const ch7DreamData = {
  campDescription: "The forge cools at night. Hephaestus banks the fire and the automatons go still. You camp on the plateau above the workshop, surrounded by volcanic glass that reflects the stars like a dark mirror.",
  dreamText: "You dream of your weapon being forged — but from the weapon's perspective. You feel the heat, the hammer blows, the quenching. Each blow is a moment from your journey. The weapon knows you. It was shaped by your choices as much as by the forge.",
  nightmareText: "The weapon turns in your hand. It doesn't obey. It has its own will — cold, mechanical, indifferent. 'I am what you made me,' it says. 'Did you make me well?' You wake with your fingers clenched around nothing.",
  communeText: "If the nemesis is near: She was here. She forged something too. Hephaestus won't say what, but the way he avoids the question tells you it matters. You sit by the cooling forge and wonder: are you rivals, or two halves of the same story?",
  communeStatChanges: { Wisdom: 1 },
};

// ── Ticker Messages ──
export const ch7TickerMessages = [
  { condition: { flag: "provenInForge" }, text: "Word spreads among the divine: a mortal weapon, forged by willing hands, tested in Hephaestus's own chamber." },
  { condition: { flag: "impressedHephaestus" }, text: "The forge of Lemnos burns brighter than it has in centuries. The smith god is pleased." },
  { condition: { flag: "repairedAutomaton" }, text: "A small bronze automaton follows the hero like a loyal dog. The other automatons watch it with something like envy." },
  { condition: {}, text: "Smoke rises from Lemnos in unusual patterns. The islanders say the forge god is working on something new." },
  { condition: { flag: "sacrificedForWeapon" }, text: "A weapon glows faintly on the hero's belt. Those who look closely feel something ancient in its light." },
];
