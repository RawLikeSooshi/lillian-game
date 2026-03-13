/**
 * Chapter 9 Expanded Data — "The Siege of Athens"
 * Prophecy, Encounter (Battle of Athens — BIGGEST combat), Exploration (Athens sites),
 * Dialogue Duel (Hera's Emissary), Memory Echo (Zeus speaks), Sacrifice (multiple),
 * Dream/Camp, Ticker
 *
 * Oaths tested to breaking point. Maximum narrative weight.
 */

// ── Prophecy Pool ──
export const ch9ProphecyPool = [
  {
    id: "ch9_siege",
    text: "The city of wisdom will burn unless the daughter of storms remembers what she learned in the dust.",
    reveal: "Athens survived because you carried every lesson from every chapter into the siege. The dust was Delphi, the road, the straits, the arena — every place that taught you something.",
    chapters: [9],
  },
  {
    id: "ch9_destiny",
    text: "Three roads from one mountain. Only one leads home. The other two lead somewhere better.",
    reveal: "Olympus, mortality, the third path — none of them are wrong. 'Home' isn't a place. It's a state of knowing who you are. All three paths lead there, by different routes.",
    chapters: [9],
  },
  {
    id: "ch9_blood",
    text: "The blood of gods and the blood of mortals will mix on Athenian stone. What grows from it will change Olympus.",
    reveal: "The battle wasn't just violence — it was a planting. Divine and mortal fighting side by side created something neither world had seen: proof that they could stand together.",
    chapters: [9],
  },
];

// ── Major Encounter: The Battle of Athens (DC 16, 5 rounds — BIGGEST combat) ──
export const ch9EncounterBattle = {
  title: "The Battle of Athens",
  enemyName: "Ares' Bronze Vanguard",
  image: "⚔️",
  atmosphere: "The northern gate shudders. Bronze-armored warriors pour through the breach — not mortals, not fully divine, something between. Ares' chosen. Behind them, the god of war watches from a throne of spears. The sky bleeds red. This is the battle. The biggest. The one that decides everything.",
  baseDC: 16,
  woundSource: "ares_vanguard",
  choices: [
    {
      prompt: "The first wave hits the gate. Bronze shields lock together in a formation you've never seen. The Athenian defenders are falling back.",
      timer: 12,
      options: [
        { text: "Rally the defenders! Stand at the front and hold the line!", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Direct the archers to focus fire on the shield formation's joints.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
        { text: "Pull the defenders back to the second wall — make them fight for every street.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "A bronze champion breaks through — twice the size of any mortal, wreathed in Ares' fire. He's heading for the civilian quarter.",
      timer: 10,
      options: [
        { text: "Intercept him yourself. You're the only one strong enough.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Lure him into the narrow streets where his size is a disadvantage.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Coordinate three squads to surround and contain him.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "The eastern gate erupts — a second wave. You're being flanked. The defenders can't hold both walls.",
      timer: 10,
      options: [
        { text: "Split your forces. Trust the eastern gate commander and hold the north yourself.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
        { text: "Collapse the eastern gate tunnel — sacrifice the gate to save the city.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Send word to anyone — Kira, civilians, anyone who can hold a weapon.", stat: "Empathy", statChanges: { Empathy: 1 } },
      ],
    },
    {
      prompt: "Ares himself steps forward. Not to fight — to speak. 'Surrender, niece. This doesn't have to end in blood.' His voice shakes the stones. The defenders hesitate.",
      timer: 12,
      options: [
        { text: "Answer him. Loudly. Let every defender hear you refuse.", stat: "Courage", statChanges: { Courage: 2 } },
        { text: "Ignore him. Turn to the soldiers. 'He's afraid. That's why he's talking.' ", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Hold the line in silence. Actions speak louder than gods.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "The final push. Everything Ares has left — one massive charge at the weakened northern gate. The defenders are exhausted. You're exhausted. This is the last stand.",
      timer: 8,
      options: [
        { text: "Lead the countercharge. Meet them head-on at the breach.", stat: "Courage", statChanges: { Courage: 2 } },
        { text: "Spring the trap you prepared — oil, debris, fire. Make the gate a killing ground.", stat: "Cunning", statChanges: { Cunning: 2 } },
        { text: "Hold. Just hold. Discipline wins wars, not charges. Lock shields and endure.", stat: "Discipline", statChanges: { Discipline: 2 } },
        { text: "Call on Athena's blessing. You've earned it. Let wisdom guide the final moment.", stat: "Wisdom", statChanges: { Wisdom: 2 } },
        { text: "Stand with the weakest point in the line. Be where you're needed most.", stat: "Empathy", statChanges: { Empathy: 2 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "The line holds. More than holds — it breaks Ares' charge like a wave on stone. The bronze warriors falter, then retreat. You stand at the gate, blood on your hands, fire in your eyes, and Ares sees something in you that makes a god flinch.\n\n'You fight like Zeus,' he says. It's not a compliment. It's a warning.\n\nHe withdraws. The sky clears. Athens erupts in exhausted, weeping cheers.\n\nYou don't cheer. You know what this cost. But you also know what you just did: you held a city against a god.",
      statChanges: { Courage: 2, Discipline: 1 },
      reputation: { commonPeople: 3, gods: 2 },
      flags: { wonBattleOfAthens: true, impressedAres: true, battleCritical: true },
    },
    success: {
      text: "The gate holds. Ares' forces break against it — not all at once, but in pieces. Squad by squad, they fall back. The bronze warriors retreat through the smoke, leaving their dead.\n\nAthens stands. You stood with it.\n\nAres watches from the hills. He doesn't retreat — he withdraws. There's a difference. 'Next time,' his voice echoes. There will be a next time.\n\nBut not today. Today, Athens survived.",
      statChanges: { Courage: 1, Discipline: 1 },
      reputation: { commonPeople: 2, gods: 1 },
      flags: { wonBattleOfAthens: true },
    },
    partial: {
      text: "The gate holds — barely. The northern quarter is lost, the wall cracked in three places, and the cost in lives is staggering. But the inner city stands. Ares withdraws, not because he was defeated, but because the cost of continuing exceeded the prize.\n\nYou're wounded. Not fatally, but enough to know you're mortal. The defenders look at you with a mix of gratitude and grief.\n\nAthens survived. You're not sure you won.",
      statChanges: {},
      reputation: { commonPeople: 1 },
      flags: { survivedBattleOfAthens: true, woundedInBattle: true },
    },
    fail: {
      text: "The gate breaks. For a terrible hour, Ares' forces surge into the northern quarter. The fighting is street by street, house by house. You're overwhelmed, knocked down, dragged to safety by soldiers who paid for it with their lives.\n\nAthena intervenes — bending the rules she swore to follow, pulling the city back from the edge. Ares is forced to withdraw by divine mandate, not military defeat.\n\nAthens stands, but not because of you. The defenders don't blame you. That makes it worse.\n\nYou failed. You know it. Athena knows it. And somewhere, Ares is laughing.",
      statChanges: { Courage: -1 },
      reputation: { commonPeople: -1 },
      flags: { survivedBattleOfAthens: true, battleFailed: true, athenaIntervened: true },
    },
  },
};

// ── Exploration Nodes (Athens — pick 2 of 4) ──
export const ch9ExplorationNodes = {
  title: "Preparing for the Siege",
  description: "Athens has hours before the battle. Four locations call to you, but time allows only two. Choose where to invest your final preparations.",
  picks: 2,
  nodes: [
    {
      id: "acropolis_prayer",
      name: "The Acropolis",
      icon: "🏛️",
      hint: "Pray at the ancient altars. Seek divine favor. Listen for echoes of prophecy.",
      type: "scene",
      content: {
        text: "The Acropolis at twilight. The Parthenon columns cast long shadows. You kneel at the altar of Athena — not to pray for victory, but for clarity.\n\nThe stone hums beneath your knees. A warmth spreads through you — not fire, but recognition. The altar knows your blood.\n\nA whisper in the stone: 'Daughter of Zeus. The mountain remembers you.'\n\nYou feel it: a connection to every hero who ever knelt here. Theseus. Perseus. Heracles. They were all afraid. They all stood up anyway.",
        statChanges: { Wisdom: 1, Courage: 1 },
        feedback: "The prayer doesn't give you answers. It gives you something better: perspective. You are part of a chain of heroes stretching back to the dawn of the world. They faced impossible odds too. The altar's warmth stays with you as you descend.",
        lesson: "Prayer — or meditation, or quiet reflection before a crisis — is not weakness. It's calibration. You aligned yourself with the best parts of your heritage. That alignment will steady you when the battle comes.",
        setsFlags: { prayedAtAcropolis: true },
      },
    },
    {
      id: "agora_evacuation",
      name: "The Agora",
      icon: "🏪",
      hint: "The marketplace is chaos. Civilians need organizing and evacuating.",
      type: "scene",
      content: {
        text: "The agora is pandemonium. Merchants packing goods, families arguing about where to go, children crying. No one is in charge.\n\nYou step into the center of the crowd. 'Listen!' Your voice carries further than it should — something in your blood amplifies it. 'I need every family with children to move to the southern quarter. Merchants, load your carts and follow. If you can carry a weapon and are willing, stay.'\n\nThe crowd goes still. Then they move. Organized, directed, purposeful.\n\nSixty-three families evacuated. Fourteen merchants with loaded carts. Twenty-two volunteers who pick up weapons for the first time.\n\nYou gave them structure. They gave themselves courage.",
        statChanges: { Empathy: 2, Discipline: 1 },
        reputationChanges: { commonPeople: 2 },
        feedback: "The agora empties in under an hour. Children who were crying are now sleeping in the southern shelters. The volunteers are drilling with borrowed spears. You built order from chaos with nothing but your voice and the willingness to stand in the center of the storm.",
        lesson: "Evacuation is not retreat — it's protection of what matters most. The volunteers who stayed did so because you showed them that the evacuation was handled. People fight better when they know their families are safe.",
        setsFlags: { evacuatedAgora: true },
      },
    },
    {
      id: "the_walls",
      name: "The Walls",
      icon: "🧱",
      hint: "Fortify the defenses. Discipline and labor. Every stone matters.",
      type: "scene",
      content: {
        text: "The walls of Athens were built to withstand armies. They were not built to withstand gods. But you can reinforce them.\n\nYou work alongside the soldiers — hauling stone, digging trenches, positioning barricades at the gates. The labor is brutal. Your hands crack and bleed. A mason shows you how to stack stones so they hold under impact. A veteran shows you where to place oil reservoirs for the fire traps.\n\nBy nightfall, the northern wall has three new defensive layers, two oil traps, and a collapsible tunnel that can seal the gate if it's breached.\n\nYour hands are destroyed. The wall is not.",
        statChanges: { Discipline: 2, Courage: 1 },
        feedback: "The soldiers who worked beside you don't call you 'demigod' or 'Zeus's daughter.' They call you by your name. You earned that by bleeding alongside them. The wall is stronger because you were here. So are they.",
        lesson: "Fortification is discipline made physical. Every stone placed, every trench dug, every trap set — these are decisions to endure rather than retreat. The wall doesn't care about your bloodline. It cares about whether you showed up to build it.",
        setsFlags: { fortifiedWalls: true },
      },
    },
    {
      id: "underground",
      name: "The Underground",
      icon: "🕳️",
      hint: "Beneath Athens, something older than the city stirs. If your reputation is high enough, they might help.",
      type: "scene",
      content: {
        text: "Beneath the city, tunnels wind into darkness. The old Athenians knew about them — passages to the underworld, they said. Not to Hades himself, but to the border regions where the dead and the living overlap.\n\nYou descend. The air is cold and heavy with the smell of earth. At the bottom of the deepest tunnel, a figure waits — neither alive nor dead. A shade, but aware. Ancient.\n\n'Zeus's daughter,' the shade says. 'We felt you above. The dead of Athens — every soldier who ever fell defending this city — they stir. They want to help.'\n\nThe shade extends a hand. 'We can hold one gate. For one hour. The dead cannot be killed twice. Will you accept our aid?'",
        statChanges: { Wisdom: 1, Cunning: 1 },
        worldStateChanges: { underworldStirring: 2 },
        feedback: "You clasp the shade's hand. It's cold as winter stone — but the grip is strong. 'One gate. One hour,' you agree. 'The eastern gate.'\n\nThe shade nods. 'At dawn, the dead of Athens will stand where the living cannot. Remember us when you reach Olympus.'\n\nYou climb back to the surface carrying an alliance no living general has ever held.",
        lesson: "Help comes from unexpected places when you've earned a reputation that extends beyond the living world. The dead of Athens chose to help not because of your blood, but because of your actions. Reputation is currency that transcends death.",
        setsFlags: { underworldAlliance: true },
        condition: { minReputation: { commonPeople: 3 } },
      },
    },
  ],
};

// ── Dialogue Duel: Hera's Emissary ──
export const ch9DialogueDuel = {
  title: "The Queen's Terms",
  npcName: "Iris",
  npcTitle: "Hera's Emissary",
  baseResolve: 14,
  maxRounds: 4,
  resistances: ["Deflect"], // Divine messengers see through evasion
  vulnerabilities: ["Endure"], // Standing firm impresses even Hera's servants
  rounds: [
    {
      npcLine: "Iris regards you with eyes that shift color like oil on water. 'You have fought well. Hera acknowledges this. But fighting well and fighting wisely are not the same thing. Tell me — what do you think you're defending?'",
      options: {
        Assert: { text: "Athens. Its people. Their right to live without divine interference.", stat: "Courage", dc: 14 },
        Reason: { text: "Not just Athens. The principle that mortals deserve self-determination.", stat: "Wisdom", dc: 12 },
        Empathize: { text: "The people I've watched suffer because gods can't agree.", stat: "Empathy", dc: 13 },
        Deflect: { text: "What does Hera think I'm defending? That might be more interesting.", stat: "Cunning", dc: 16 },
        Endure: { text: "I don't need to justify my choices to Olympus. I made them. I stand by them.", stat: "Discipline", dc: 11 },
      },
    },
    {
      npcLine: "'Your father hid you,' Iris says softly. 'He hid you because he was afraid of what you might become. Not afraid of you — afraid for you. Do you understand the difference?'",
      options: {
        Assert: { text: "I understand it. And I'm here anyway. Fear doesn't get to make my decisions.", stat: "Courage", dc: 15 },
        Reason: { text: "Being hidden to be protected is still being hidden. The intent doesn't change the result.", stat: "Wisdom", dc: 12 },
        Empathize: { text: "I believe he loved me. I also believe love doesn't excuse control.", stat: "Empathy", dc: 11 },
        Deflect: { text: "This isn't about my father. This is about Hera's offer.", stat: "Cunning", dc: 16 },
        Endure: { text: "I've carried that knowledge for a long time. It doesn't break me.", stat: "Discipline", dc: 10 },
      },
    },
    {
      npcLine: "'Hera offers this: come to Olympus not as a warrior, but as a peacemaker. She will guarantee your safety. Your father will hear you. The wars end.' Iris pauses. 'But you come alone. No army. No Athena. Just you.'",
      options: {
        Assert: { text: "If Hera wants peace, she doesn't need conditions. This is a trap.", stat: "Courage", dc: 15 },
        Reason: { text: "Guaranteed safety from Hera means nothing if Zeus and Ares aren't bound by the same guarantee.", stat: "Wisdom", dc: 12 },
        Empathize: { text: "I want peace too. But peace built on isolation isn't peace — it's surrender.", stat: "Empathy", dc: 13 },
        Deflect: { text: "What happens to Athens while I'm on Olympus 'making peace'?", stat: "Cunning", dc: 14 },
        Endure: { text: "I'll go to Olympus. On my terms. Not Hera's.", stat: "Discipline", dc: 10 },
      },
    },
    {
      npcLine: "Iris is silent for a long moment. Then: 'You are more like your father than Hera expected. That is not a compliment from her.' She looks at you with something unexpected — respect. 'What message shall I carry back to the Queen?'",
      options: {
        Assert: { text: "Tell her I'm coming to Olympus. And I'm bringing everything I've learned.", stat: "Courage", dc: 12 },
        Reason: { text: "Tell her the age of gods deciding mortal fates without mortal voices is ending.", stat: "Wisdom", dc: 11 },
        Empathize: { text: "Tell her I understand why she's angry at Zeus. But I'm not him. Give me a chance to prove it.", stat: "Empathy", dc: 11 },
        Deflect: { text: "Tell her to watch. She'll see my answer soon enough.", stat: "Cunning", dc: 14 },
        Endure: { text: "Tell her nothing. Let my actions speak. She's been watching long enough to understand.", stat: "Discipline", dc: 10 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Iris bows — actually bows, the divine messenger of the Queen of the Gods, bowing to a mortal girl standing in a broken city.\n\n'Hera was wrong about you,' she says. 'She thought you were Zeus's weapon. You're something else. Something Olympus hasn't seen in a very long time.'\n\nShe vanishes in a flash of rainbow light. The air warms. For the first time in days, the sky above Athens is a single color: gold.\n\nYou just won a war of words with a god's own voice. The battle isn't over. But the terms just changed.",
      statChanges: { Wisdom: 2, Courage: 1 },
      reputation: { gods: 2, commonPeople: 1 },
      flags: { impressedHera: true, irisBlessing: true },
    },
    draw: {
      text: "Iris nods slowly. 'You have conviction. Whether it's wisdom or stubbornness, Hera will discover soon enough.' She steps back. 'The offer stands until dawn. After that...' She doesn't finish. She doesn't need to.\n\nThe rainbow fades. The siege sounds return. You held your ground, but the emissary left with more questions than answers — for both of you.",
      statChanges: { Wisdom: 1 },
      reputation: { gods: 1 },
      flags: { metIris: true },
    },
    lose: {
      text: "Iris shakes her head. 'You are your father's child. All fire, no reflection.' Her voice carries disappointment that feels like a physical weight. 'Hera's patience has limits. Remember that.'\n\nShe vanishes. The air goes cold. You said what you meant, but you didn't say it well enough. The words that could have turned an enemy into a neutral party died on your tongue.\n\nThere will be consequences for this.",
      statChanges: {},
      reputation: { gods: -1 },
      flags: { metIris: true, failedDiplomacy: true },
    },
  },
};

// ── Memory Echo: Zeus Speaks ──
export const ch9Echo = {
  fragments: [
    "Zeus speaks",
    "Not a vision",
    "His voice",
    "I hid you because I was afraid",
    "Come home when you're ready",
  ],
  correctOrder: [0, 1, 2, 3, 4], // Zeus speaks → Not a vision → His voice → I was afraid → Come home
  baseDC: 5, // Unmissable — this message is meant to be heard
  dreamText: "This is not a dream. You know the difference by now. This is your father's voice — Zeus, king of the gods, speaking directly into your mind for the first time in your life.\n\n'I hid you because I was afraid for you. Not of you. For you. The gods destroy what they love. I didn't want that for you.'\n\nA pause. Thunder, but gentle — like a heartbeat.\n\n'Come home when you're ready. Not before. Not because anyone tells you to. When YOU are ready.'\n\nThe voice fades. The silence it leaves behind is the most profound thing you've ever heard.",
  nightmareText: "The voice cracks the sky open. Zeus — not gentle, not kind. Furious. 'THEY USED YOU. ALL OF THEM. EVERY GOD WHO TOUCHED YOUR JOURNEY HAD AN AGENDA.'\n\nThe nightmare shows you every divine encounter reframed: help that was manipulation, kindness that was recruitment, wisdom that was control. Is any of it true? All of it? None?\n\nYou wake gasping. The nightmare isn't that the gods are evil. It's that you can't be certain they're not.",
};

// ── Sacrifice Data (multiple options) ──
export const ch9SacrificeForgedItem = {
  type: "item",
  targetId: "tridentShard", // Or whatever forged item the player carries
  narrative: "The city's defenses are failing. Athena's strategist shows you a mechanism in the wall — ancient, divine-built, dormant. It needs a catalyst. Something forged by the gods.\n\nThe trident shard in your pack hums. It could power the mechanism. The wall would hold — guaranteed. But the shard would be consumed. Gone forever.",
  oracleText: "What the sea gave, the city needs. Some gifts are given to be given away.",
  gainText: "The northern wall holds absolutely. No breach. Fewer casualties.",
  flags: { sacrificedForgedItem: true, wallPowered: true },
};

export const ch9SacrificeStatPoint = {
  type: "stat",
  targetId: "Courage", // Sacrifice a point of any stat
  narrative: "A companion — one of the soldiers who has been by your side since the siege began — is pinned under rubble at the northern gate. You can shield them with your own body, but the divine energy required will cost you. Permanently.\n\nNot a wound. Something deeper. A piece of what makes you... you. Burned away to protect someone else.",
  oracleText: "The measure of a hero is not what they gain, but what they willingly surrender.",
  gainText: "Your companion survives. They will remember this for the rest of their life.",
  flags: { sacrificedForCompanion: true },
};

export const ch9SacrificeDivinePower = {
  type: "power",
  targetId: "stormcalling", // Or whatever divine power the player has
  narrative: "Ares' gate — a portal of divine fire feeding his warriors into Athens — pulses at the northern wall. It can be closed. But closing a god's gate requires divine power equal to the god who opened it.\n\nYou have that power. Zeus's blood runs in your veins. You can channel it into the gate and seal it shut. But the power you spend will not return. You'll be more mortal after. Permanently.",
  oracleText: "To close a god's door, pay a god's price. What you lose in power, you gain in peace.",
  gainText: "Ares' gate closes. No more reinforcements. The battle turns decisively.",
  flags: { sacrificedDivinePower: true, aresGateClosed: true },
  worldStateChanges: { aresInfluence: -2 },
};

// ── Dream/Camp ──
export const ch9DreamData = {
  campDescription: "There is no proper camp tonight. You sit in the shadow of the Parthenon, wrapped in a borrowed cloak, surrounded by sleeping soldiers. The smoke of the siege mingles with the smell of thyme from the hillside. Athens breathes around you — wounded but alive.",
  dreamText: "The dream is a battlefield, but not today's. It's older — ancient. Athena and Ares standing on opposite sides of a city that isn't Athens. They've done this before. A thousand times. A thousand cities.\n\nBut in the dream, someone walks between them. A girl. Not a goddess. Not quite mortal. She puts a hand on each of their arms and says a single word you can't hear.\n\nBoth gods lower their weapons.\n\nYou wake knowing two things: this has happened before, and it's never worked permanently. Until now, maybe.",
  nightmareText: "War-dreams. Not metaphors — memories. Every soldier who died today visits you. Not angry. Just present. They stand in a circle around your sleeping form, watching. Waiting.\n\n'Remember us,' they say in unison. 'When you reach the mountain. Remember what we paid.'\n\nYou wake with tears on your face and the absolute certainty that you will remember. Every single one.",
  communeText: "If Kira is near: She sits across the dying fire, sleepless too. Neither of you speaks for a long time. Then she says: 'Do you think they planned this? The gods? That we'd end up here, in the same city, making the same choice?'\n\nYou don't answer. But the question sits between you like a third person at the fire.",
  communeStatChanges: { Wisdom: 1 },
};

// ── Ticker Messages ──
export const ch9TickerMessages = [
  { condition: { flag: "wonBattleOfAthens" }, text: "Athens stands. Songs are already being written about the battle at the northern gate." },
  { condition: { flag: "impressedAres" }, text: "Ares has withdrawn to Thrace. His generals say he hasn't spoken since the siege failed." },
  { condition: { flag: "impressedHera" }, text: "Hera's storms have calmed across Greece. Something changed her mind — or someone did." },
  { condition: {}, text: "Mount Olympus is visible from every city in Greece tonight. It has never been this bright." },
  { condition: { flag: "underworldAlliance" }, text: "The dead of Athens are at rest. They held the eastern gate for exactly one hour, as promised." },
];
