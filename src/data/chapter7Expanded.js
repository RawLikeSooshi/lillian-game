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
    reveal: "Your rival visited Hephaestus before you. Whatever she forged, it was made with the same divine bronze, in the same eternal fire. When your weapons meet, the forge will remember both.",
    chapters: [7],
  },
  {
    id: "ch7_equal",
    text: "The god who builds asks the question the god who rules never will.",
    reveal: "Hephaestus asked whose equal you'd become — not whose servant, not whose weapon. Zeus never asked because he assumed the answer. That difference matters more than divine blood.",
    chapters: [7],
  },
];

// ── Major Encounter: Weapon Test ──
export const ch7EncounterTest = {
  title: "Trial of the Forge",
  enemyName: "Bronze Automaton",
  image: "🤖",
  atmosphere: "The automaton moves with inhuman precision — no hesitation, no wasted motion, every joint clicking into its next position before the last one finishes. Bronze plates shift and lock like armor assembling itself. Its eyes glow with forge-fire. Hephaestus built it to test, not to destroy. But the gap between those two things is narrower than you'd like.",
  baseDC: 13,
  weaponBonus: 3,
  woundSource: "automaton",
  choices: [
    {
      prompt: "The automaton lunges — a straight punch aimed at your center. Mechanical. Precise. Faster than bronze should move.",
      timer: 15,
      options: [
        { text: "Sidestep and counter. Speed beats power.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Brace and deflect. Let the force pass through you.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Read the gears. Predict where it strikes next.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
      ],
    },
    {
      prompt: "The automaton reconfigures — arms splitting, reforming, spinning. The air hums with moving bronze.",
      timer: 15,
      options: [
        { text: "Go low. Strike at its legs. Destabilize.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Hold. Wait for the pattern to show its gap.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Trust your weapon's unique quality. Now.", stat: "Courage", statChanges: { Courage: 1 } },
      ],
    },
    {
      prompt: "The automaton staggers — but recovers. Its eyes flicker. It's learning your moves. The next attack will be different.",
      timer: 15,
      options: [
        { text: "Change everything. Do what it doesn't expect.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Press now. Before it adapts.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Speak to it. It's Hephaestus's creation — maybe it can hear.", stat: "Empathy", statChanges: { Empathy: 1 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "The automaton stops mid-swing. Its arms lower — slowly, deliberately, the way a soldier lowers a weapon when they've decided the fight is over. The forge-fire in its eyes dims to a gentle amber glow.\n\nThen it bows. An awkward, mechanical bow — the bow of something that was never designed to bend at the waist, choosing to anyway.\n\nHephaestus claps. Slowly. Three times.\n\n\"That's the first time anyone's made it bow. Ever.\" His voice is quiet with something that might be awe. From a god. \"The weapon is worthy. So is the wielder.\"\n\nThe automaton straightens and holds something out to you — a small bronze gear, warm from its own body. A gift. From one creation to another.",
      statChanges: { Courage: 1, Wisdom: 1 },
      reputation: { gods: 2 },
      flags: { automatonBowed: true, provenInForge: true },
    },
    success: {
      text: "The automaton shudders and locks in place — joints frozen, arms mid-motion, forge-light steady. Test complete.\n\nYou're standing. Breathing hard. Sweat cooling on your face in the volcanic heat. But standing.\n\nHephaestus examines your weapon with a craftsman's eye — turning it, testing the edge with his thumb, holding it up to the forge light.\n\n\"Good work,\" he says. \"Not perfect.\"\n\nA pause. The hint of a smile.\n\n\"But perfect is boring anyway.\"",
      statChanges: { Courage: 1 },
      reputation: { gods: 1 },
      flags: { provenInForge: true },
    },
    partial: {
      text: "The automaton catches you with a glancing blow — bronze against bone, a bright shock of pain that travels from your shoulder to your teeth. The test ends on time, not on your terms.\n\nHephaestus shrugs. The shrug of a man who has seen ten thousand tests and grades on a curve.\n\n\"You survived. The weapon didn't shatter. That's a passing grade.\"\n\nA pause.\n\n\"Barely.\"",
      statChanges: {},
      flags: { provenInForge: true },
    },
    fail: {
      text: "The automaton pins you against the chamber wall — not roughly, but precisely, the way a craftsman pins a piece of metal to the workbench. It knows exactly how much force to use. Hephaestus built it that well.\n\nHe calls it off with a whistle — two notes, sharp and clear — and it releases you immediately.\n\n\"The weapon is fine,\" he says, helping you up. His grip is iron. His voice is not unkind.\n\n\"You're not ready for it yet. That's normal. Most heroes need time to grow into what they've made.\"\n\nHe means it. And somehow, the kindness makes it sting more than cruelty would.",
      statChanges: { Discipline: -1 },
      flags: { failedForgeTest: true },
    },
  },
};

// ── Exploration Nodes (Lemnos) ──
export const ch7ExplorationNodes = {
  title: "The Slopes of Lemnos",
  description: "The volcanic island holds secrets beyond the forge — old workshops, lava tubes, the remnants of creations that came before you. Hephaestus waves you toward the plateau. \"Explore while your weapon cools. Don't touch the green crystals. Don't pet the large automatons. Come back before sunset.\" He pauses. \"The sunset here is... dramatic.\"",
  picks: 2,
  nodes: [
    {
      id: "abandoned_workshop",
      name: "The Abandoned Workshop",
      icon: "🏚️",
      hint: "A smaller forge, half-swallowed by sulfur crystals that grow like yellow frost on every surface. Tools still hang on the walls, waiting.",
      type: "puzzle",
      content: {
        puzzleId: "ch7_puzzle_artifact",
        text: "The workshop hasn't been used in centuries — maybe longer — but the volcanic heat has preserved everything like an insect in amber. Workbenches. Molds. Half-finished projects frozen in mid-creation, the metal still holding the shape of the last hammer blow.\n\nAnd in the center, on a stone pedestal crusted with sulfur crystals: three items, each identical. Each claiming to be the original.\n\nA puzzle. Left by whoever worked here last — or left by Hephaestus himself, testing anyone curious enough to wander in.",
        statChanges: { Wisdom: 1 },
        feedback: "The workshop yields its secret. Among the tools and molds, behind the pedestal, you find something unexpected: design sketches on bronze tablets, etched with a hand steadier than any mortal craftsman's.\n\nWeapons you've never seen. Armor that moves like cloth. A crown that thinks.\n\nOne sketch is labeled in handwriting you don't recognize — older than Greek, sharper:\n\n\"For the daughter of storms.\"",
        lesson: "Abandoned places aren't empty — they're archives. What someone left behind tells you as much about them as what they took. And sometimes, what they left was meant for you.",
        setsFlags: { exploredWorkshop: true },
      },
    },
    {
      id: "lava_tubes",
      name: "The Lava Tubes",
      icon: "🕳️",
      hint: "Tunnels carved by ancient lava, cooled now but still warm. Something glints blue deep inside.",
      type: "scene",
      content: {
        text: "The lava tubes are a surprise — cool inside, insulated from the surface heat by layers of solidified stone. Your footsteps echo as you descend, each one bouncing off walls streaked with minerals: copper-green, tin-silver, and something else. Something that glows faintly blue in the dark, pulsing with its own light.\n\nCelestial bronze ore. Unrefined. The raw material of divine weapons, still embedded in the rock where the earth made it.\n\nDeeper in, you hear clicking. Something mechanical. A small automaton — damaged, one leg dragging, crawling in circles like a wind-up toy with a broken spring — blocks the narrowest part of the path. It's not hostile. It's lost.\n\nBeyond it, the blue vein of ore opens up — thick, accessible, humming with potential.",
        statChanges: { Wisdom: 1 },
        setsInventory: ["celestialBronzeOre"],
        feedback: "You collect a handful of raw celestial bronze. It sits in your palm like a warm coal — heavy, dense, humming faintly, as if the metal remembers being inside the earth and is still vibrating with the frequency of deep places.\n\nHephaestus will know what to do with it.\n\nThe broken automaton watches you leave. Its one working eye tracks you to the tunnel mouth. If gratitude had a mechanical expression, that would be it.",
        lesson: "Raw materials have potential, not power. The ore in your hand could become anything — weapon, tool, art, something no one has imagined yet. What it becomes depends entirely on who shapes it and why. That's true of bronze. It's true of you.",
        setsFlags: { exploredLavatubes: true, foundCelestialOre: true },
      },
    },
    {
      id: "automaton_graveyard",
      name: "The Automaton Graveyard",
      icon: "⚙️",
      hint: "A plateau behind the forge, littered with bronze shells in various states of disrepair. Some still twitch. One might be salvageable.",
      type: "scene",
      content: {
        text: "The plateau behind the forge is a graveyard of machines. Automatons in every state of disrepair — ancient ones crusted with volcanic minerals, recent ones still bright with polish, all of them still and silent. Failed experiments. Retired workers. Broken guardians. Things that served their purpose and were set aside.\n\nMost are beyond repair. But one — small, about the size of a dog — sparks weakly when you approach. Its head turns toward you. One eye glows dim orange. The other is dark.\n\nIt makes a sound. Not speech — it was never built for speech. A whir, a click, a pattern. Three short. One long. Three short. It's trying to communicate.\n\nYou could try to repair it. The mechanisms look logical — gears connect to gears, springs drive motion. You're not a smith, but you have hands and patience.\n\nOr you could leave it. Hephaestus abandoned it for a reason. Maybe that reason was good.",
        statChanges: { Empathy: 1, Cunning: 1 },
        feedback: "You spend an hour on the plateau, hands black with old oil, fingers pricked by tiny gears. The mechanisms are logical — you were right about that. Gears connect to gears. Springs drive axles. Each part has a purpose you can trace.\n\nThe corroded drive spring is the problem. You find a working one in a nearby shell — a donor from a larger, long-dead automaton — and fit it into place. Your fingers are too big for some of the connections. You use a splinter of obsidian as a tool.\n\nThe small automaton shudders. Sparks. Both eyes glow amber. It stands on four bronze legs, shakes itself like a wet dog — sending tiny gears and dust flying — and looks at you.\n\nThen it sits at your feet. And doesn't move.\n\nIt chose you.",
        lesson: "Repairing something that was discarded — choosing to give it a second chance when its creator didn't — is an act of empathy that requires practical skill. The automaton didn't need sympathy. It needed someone willing to get their hands dirty and figure out which gear was broken. Compassion and competence, working together.",
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
  resistances: ["Deflect", "Assert"],
  vulnerabilities: ["Empathize", "Reason"],
  rounds: [
    {
      npcLine: "Hephaestus sets down his hammer. The silence after the last ring is enormous — the forge itself seems to lean in.\n\n\"I'll tell you something the other gods won't,\" he says. His eyes are steady. No games. No layers. Just a man at his workbench, speaking plainly.\n\n\"Your father is afraid of you. Not of what you are — of what you might become.\"\n\nHe waits. The forge fire crackles.\n\n\"Does that surprise you?\"",
      options: {
        Assert: { text: "Good. He should be.", stat: "Courage", dc: 12 },
        Reason: { text: "It makes sense. Power fears what it can't control. Even its own children.", stat: "Wisdom", dc: 7 },
        Empathize: { text: "That's sad. For both of us. He could have known me instead of fearing me.", stat: "Empathy", dc: 7 },
        Deflect: { text: "Is that why you're telling me? Because you want me to be afraid of him too?", stat: "Cunning", dc: 12 },
        Endure: { text: "I can't control what he feels. I can only control what I do.", stat: "Discipline", dc: 9 },
      },
    },
    {
      npcLine: "Hephaestus picks up a piece of scrap bronze and turns it in his scarred fingers. The way he handles it — absently, lovingly — tells you more about him than any speech could.\n\n\"A girl came here before you. Your rival.\"\n\nHe doesn't look up from the bronze.\n\n\"She asked me to forge her something specific. I did.\" A pause. \"She also asked about you. By name. She wanted to know what I thought of you.\"\n\nNow he looks up. His eyes are direct as a hammer strike.\n\n\"What should I have told her?\"",
      options: {
        Assert: { text: "The truth. That I'm coming and I'm not stopping.", stat: "Courage", dc: 11 },
        Reason: { text: "Whatever you actually think. You don't seem like someone who lies to be polite.", stat: "Wisdom", dc: 7 },
        Empathize: { text: "I wonder why she's asking about me. Maybe she's as uncertain as I am.", stat: "Empathy", dc: 7 },
        Deflect: { text: "What DID you tell her?", stat: "Cunning", dc: 11 },
        Endure: { text: "It doesn't matter what you told her. It matters what I do next.", stat: "Discipline", dc: 9 },
      },
    },
    {
      npcLine: "Hephaestus stands. The brace on his leg clicks — a sound you've gotten used to, a sound that's become part of his rhythm the way a heartbeat is part of yours.\n\nHe moves to the forge. The fire brightens as he approaches — not like it's responding to fuel, but like it's responding to *him*. Recognition. Welcome.\n\n\"Last thing.\" His voice is quiet. Quieter than it's been. \"I was thrown from Olympus as a baby. I fell for an entire day. I shattered both legs on the rocks of Lemnos.\"\n\nHe looks at you. His face is open. Unprotected. The face of someone showing you a wound that never fully healed.\n\n\"The gods are capable of terrible things. Even to their own.\"\n\nThe forge fire reflects in his eyes.\n\n\"What will you do when you reach Olympus?\"",
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
      text: "Hephaestus smiles. Slowly — the way metal warms, from the inside out.\n\n\"You're honest,\" he says. \"That's rarer than divine blood. Rarer than celestial bronze. Rarer than anything I've ever pulled from the fire.\"\n\nHe reaches into the forge — bare-handed, because the fire doesn't burn him, because the fire is *his* — and pulls out something small and glowing. An ember. Not dying — permanent. A piece of the forge fire itself, shaped into a sphere the size of an olive.\n\n\"A gift,\" he says, placing it in your palm. It's warm. Not hot. Warm the way a hand is warm. \"Not because you're Zeus's daughter. Because you earned it by being truthful with someone who was truthful with you.\"\n\nThe ember will never go out. You can feel that the way you feel your own pulse — certain, steady, permanent.",
      statChanges: { Wisdom: 1, Empathy: 1 },
      reputation: { gods: 2 },
      flags: { impressedHephaestus: true, hephaestusGift: true },
    },
    draw: {
      text: "Hephaestus nods. \"You're getting there,\" he says. \"Not all the way honest yet — but you're trying. That counts.\"\n\nHe clasps your shoulder. His hand is enormous and calloused and surprisingly gentle — the grip of someone who knows exactly how much pressure any material can take.\n\n\"Come back someday. When you know more about who you are. The forge will be here.\"\n\nHe says it the way the mountain says it — as a fact, not a promise. The forge has been here since the beginning. It will be here at the end.",
      statChanges: { Wisdom: 1 },
      reputation: { gods: 1 },
      flags: { metHephaestus: true },
    },
    lose: {
      text: "Hephaestus sighs. Not with anger — with the weariness of a craftsman who just watched promising material fail to hold its shape.\n\n\"You're performing,\" he says quietly. \"Saying what you think I want to hear. I get enough of that from Olympus. Every god up there is performing. I built my forge down here specifically to avoid it.\"\n\nHe turns back to the fire.\n\n\"The weapon I made you is still good. But the conversation could have been better.\" He picks up his hammer. \"Think about why.\"",
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
  correctOrder: [0, 2, 1, 3, 4],
  baseDC: 12,
  dreamText: "Fire. Everywhere. Not burning — forging.\n\nYou see yourself on an anvil — not literally, but truly. Being hammered into shape. Each blow is a choice you've made. The old woman on the road — *clang*. The Sphinx — *clang*. The temple, the market, the soldiers' dilemma — *clang, clang, clang*. The garden. The sacrifice. The Underworld.\n\nEach choice left a mark. Each mark made you stronger — or different — or both.\n\nThe fire whispers. Not with words. With heat.\n\n\"The forge of your creation began before you were born. But the forging — the real forging — that's been you. Every step. Every choice. You are your own hammer.\"",
  nightmareText: "The forge goes dark. Not slowly — instantly, as if the fire was never there. The metal on the anvil cools mid-shape — frozen, incomplete, caught between what it was and what it was becoming.\n\nA voice — Hephaestus's voice, but wrong, hollow, the voice of a craftsman looking at a failed piece:\n\n\"Unfinished.\"\n\nYou reach for the hammer. Your hands pass through it. You're not the smith. You're the metal. And no one is swinging.\n\nYou wake with your hands clenched. The forge fire burns low. But it burns.",
};

// ── Sacrifice: Power for Weapon Enhancement ──
export const ch7SacrificeData = {
  type: "power",
  targetId: "divineSpark",
  narrative: "Hephaestus holds your forged weapon over the fire one last time. The metal glows — not red, not white, but the color between, the color of possibility.\n\n\"I can make it stronger,\" he says. His voice is level. No sales pitch. No pressure. Just a craftsman describing what's possible. \"Permanently stronger. But divine craft requires divine fuel.\"\n\nHe looks at you. Brown eyes. Steady.\n\n\"A piece of your divine inheritance. The spark your father gave you — buried in your blood, sealed away, slowly waking. I can fold it into the metal. The weapon will be extraordinary.\" A pause. \"But you'll have less of yourself to draw on later. That spark doesn't grow back.\"\n\nThe forge fire waits. The weapon waits. Hephaestus waits.\n\nHe won't tell you what to do. That's not who he is.",
  oracleText: "What you sacrifice becomes part of what you create. The weapon will carry your power — but you will not.",
  gainText: "Your forged weapon glows with an inner light — faint but permanent, warm but not hot. Divine enhancement: +2 to all checks when wielded.\n\nHephaestus tests the edge with his thumb. A drop of golden ichor beads where the metal touches divine skin.\n\n\"Good,\" he says. \"The spark took. It's part of the blade now — part of the shield, the mirror, whatever you made. It will serve you. But remember: you gave it freely. The weapon owes you nothing. You owe it everything.\"",
  flags: { sacrificedForWeapon: true },
  declineFlags: { keptDivineSpark: true },
};

// ── Dream/Camp ──
export const ch7DreamData = {
  campDescription: "The forge cools at night — not cold, never cold on Lemnos, but quieter. The fire banks to ember and the automatons go still, standing in their alcoves like bronze statues. You camp on the plateau above the workshop, surrounded by volcanic glass that reflects the stars like a dark mirror. The sky here is cleaner than anywhere you've been — no city light, no smoke, just the ancient stars and the faint glow of the forge below, breathing orange.",
  dreamText: "You dream of your weapon being forged. But the perspective is wrong — you're not watching. You *are* the weapon.\n\nYou feel the heat. The hammer blows — each one a moment from your journey, landing with precision, shaping the metal of you into something new. The old woman on the road. The crossing. The garden. The Underworld. Each blow changes your shape. Each blow hurts. Each blow makes you stronger.\n\nThe quenching — cold water after fire — is the shock of truth. The reveal. The identity.\n\nThe weapon knows you. It was shaped by your choices as much as by the forge. You made it. But it also, in some way, made you.\n\nYou wake with your hands warm. Not from the dream. From what's inside them.",
  nightmareText: "The weapon turns in your hand. It doesn't obey — it has its own will now, cold and mechanical and indifferent, the will of metal that remembers being shaped but doesn't remember why.\n\n\"I am what you made me,\" it says. Not with a voice. With the weight of its existence.\n\n\"Did you make me well?\"\n\nYou wake with your fingers clenched around nothing. But the question doesn't leave. It sits in your hand where the weapon should be, warm and heavy and waiting for an answer.",
  communeText: "She was here. Your rival — your sister — forged something in the same fire, from the same bronze, with the same god watching. Hephaestus won't say what she made. But the way he avoids the question — the way his eyes flick to a spot near the anvil and then away — tells you it matters. It matters enormously.\n\nYou sit by the cooling forge, the small bronze automaton curled at your feet if you repaired it, and wonder: are you rivals? Allies? Two halves of the same unfinished story?\n\nThe forge ember glows in the dark. It doesn't answer. But it stays warm.",
  communeStatChanges: { Wisdom: 1 },
};

// ── Ticker Messages ──
export const ch7TickerMessages = [
  { condition: { flag: "provenInForge" }, text: "Word spreads among the divine: a mortal weapon, forged by willing hands, tested in Hephaestus's own chamber. The smith god is satisfied." },
  { condition: { flag: "impressedHephaestus" }, text: "The forge of Lemnos burns brighter than it has in centuries. Sailors navigating by starlight use the glow as a bearing." },
  { condition: { flag: "repairedAutomaton" }, text: "A small bronze automaton follows a young hero like a loyal dog. The other automatons watch it go with something that might, in a machine, be called longing." },
  { condition: {}, text: "Smoke rises from Lemnos in unusual patterns — spirals, not plumes. The islanders say the forge god is working on something he hasn't made before." },
  { condition: { flag: "sacrificedForWeapon" }, text: "A weapon glows faintly at a young hero's belt. Those who look closely feel something ancient in its light — something given, not taken." },
];
