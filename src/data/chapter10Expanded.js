/**
 * Chapter 10 Expanded Data — "The Daughter of Thunder" (FINAL CHAPTER)
 * Prophecy (final), Encounter (Ascent endurance), Exploration (Olympus summit),
 * Dialogue Duel (Zeus), Memory Echo (complete), Sacrifice (Oracle), Dream (final), Ticker
 */

// ── Prophecy Pool (FINAL — destiny/completion) ──
export const ch10ProphecyPool = [
  {
    id: "ch10_thread",
    text: "The thread that connects all worlds runs through a single heart.",
    reveal: "The Thread was never a path — it was you. Every world you touched, every person you changed, every choice you made wove the connection between mortal and divine. The thread was always your story.",
    chapters: [10],
  },
  {
    id: "ch10_thunder",
    text: "The daughter of thunder does not strike — she illuminates.",
    reveal: "Zeus's power is destruction. Yours is clarity. Lightning doesn't just burn — it lights up the entire sky for a single, brilliant moment. That's what you did. You showed everyone — mortal and god — what they could be.",
    chapters: [10],
  },
  {
    id: "ch10_circle",
    text: "The last prophecy is the first one understood.",
    reveal: "Every prophecy from the Oracle pointed to this moment. Not the choice at the summit — the understanding that got you there. The Oracle never predicted the future. It reflected the truth you weren't ready to see. Until now.",
    chapters: [10],
  },
];

// ── Major Encounter: The Ascent (DC 15 endurance, 3 rounds) ──
export const ch10EncounterAscent = {
  title: "The Divine Resistance",
  enemyName: "Mount Olympus",
  image: "\u26F0\uFE0F",
  atmosphere: "The mountain itself resists you. Not with malice — with gravity, with pressure, with the weight of what you're about to face. The air thickens. Each step costs more than the last. This is the final test of everything your body has endured.",
  baseDC: 15,
  woundSource: "olympus",
  choices: [
    {
      prompt: "The path crumbles beneath your feet. The mountain is shedding its mortal skin — the stone becomes something between crystal and light. You can feel the altitude in your lungs, in your blood, in your bones.",
      timer: 12,
      options: [
        { text: "Dig your hands into the crystal and climb. Muscle and will.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Find the pattern in the crumbling — step where the stone is still solid.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
        { text: "Slow your breathing. Control your body. One step at a time.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "A wind strikes you — not natural wind, but divine pressure. The mountain is pushing back. The ghosts of failed heroes swirl in the gale, their faces twisted with regret. They whisper: 'Turn back. You aren't ready.'",
      timer: 12,
      options: [
        { text: "Ignore the voices. They failed. You won't.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Answer them: 'Maybe not. But I'm here anyway.'", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Listen to one ghost. Learn what made them fail so you don't repeat it.", stat: "Cunning", statChanges: { Cunning: 1 } },
      ],
    },
    {
      prompt: "The summit is close — you can see the light above the clouds. But the final stretch is vertical. Smooth crystal, no handholds, and the divine pressure is at its strongest. Your arms burn. Your vision blurs. Everything in your body says stop.",
      timer: 10,
      options: [
        { text: "Call on your divine blood. Let the lightning carry you.", stat: "Courage", statChanges: { Courage: 2 } },
        { text: "Find peace. Let go of the struggle. Rise instead of climb.", stat: "Empathy", statChanges: { Empathy: 1 } },
        { text: "Remember everyone who helped you get here. Climb for them.", stat: "Empathy", statChanges: { Empathy: 2 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "You summit Mount Olympus like it was made for you. The crystal sings as you pass. The ghosts of failed heroes go quiet — not in defeat, but in recognition. One of them smiles.\n\nThe divine pressure doesn't ease — it transforms. It becomes welcome. The mountain wasn't fighting you. It was preparing you. And you passed.",
      statChanges: { Courage: 2, Discipline: 1 },
      reputation: { gods: 2 },
      flags: { conqueredOlympus: true, perfectAscent: true },
    },
    success: {
      text: "You reach the summit. Battered, winded, but standing. The cloud line breaks and the light of Olympus hits you — warm and ancient and impossibly bright.\n\nYou made it. The mountain tested you and you held. Not perfectly, but enough.",
      statChanges: { Courage: 1 },
      reputation: { gods: 1 },
      flags: { conqueredOlympus: true },
    },
    partial: {
      text: "The summit comes at a cost. You crawl the last stretch on your hands and knees, pulling yourself over the edge of the cloud line. Your hands are cut. Your lungs ache.\n\nBut you're here. On Olympus. That's what matters.",
      statChanges: {},
      flags: { conqueredOlympus: true },
    },
    fail: {
      text: "The mountain almost breaks you. You fall twice, losing ground each time. The ghosts crowd close, not mocking — mourning.\n\nBut something pulls you up. A hand of wind, a push from below. Poseidon? Athena? Your own stubbornness? You don't know. But you reach the summit, barely, carried as much as climbing.\n\nYou made it. That's enough. It has to be.",
      statChanges: { Courage: -1 },
      flags: { conqueredOlympus: true, assistedAscent: true },
    },
  },
};

// ── Exploration Nodes (Olympus summit — pick 2 of 3) ──
export const ch10ExplorationNodes = {
  title: "The Summit of Olympus",
  description: "Before the Hall of the Gods opens, you find three places on the summit. Time enough to visit two before the doors open.",
  picks: 2,
  nodes: [
    {
      id: "forge_of_stars",
      name: "The Forge of Stars",
      icon: "\uD83D\uDD28",
      hint: "A forge burns with white fire. Hephaestus's masterwork. Something here can be upgraded.",
      type: "scene",
      content: {
        text: "The forge is beautiful and terrifying. White fire burns without fuel. Tools hang on racks that extend into infinity — every hammer, tong, and chisel ever imagined.\n\nHephaestus isn't here, but his presence is. A note, written in soot on the anvil: 'Place what you carry on the flame. What survives will be better than before.'\n\nThe fire waits. It's not hungry — it's patient. Whatever you place in it, the forge will refine. The question is whether you trust the fire.",
        statChanges: { Discipline: 1, Wisdom: 1 },
        setsInventory: ["starforgedToken"],
        feedback: "You place your most valued item in the flame. The fire roars — white, then blue, then a color you've never seen. When it cools, what remains is changed. Stronger. Lighter. Glowing with starlight.\n\nHephaestus's forge doesn't destroy — it purifies. It burns away what's unnecessary and leaves what's essential. A lesson in itself.",
        lesson: "Refinement requires heat. The forge doesn't ask permission to burn away impurities — it just does. What survives the fire is the truest version of itself. The same is true of people.",
        setsFlags: { visitedForge: true, forgedFinalItem: true },
      },
    },
    {
      id: "library_of_fate",
      name: "The Library of Fate",
      icon: "\uD83D\uDCDC",
      hint: "Scrolls that contain every prophecy ever spoken. Your prophecies are here too.",
      type: "scene",
      content: {
        text: "The library is infinite. Scrolls stretch in every direction — prophecies spoken, prophecies unfulfilled, prophecies broken. The air smells like old paper and possibility.\n\nA shelf near the entrance holds scrolls marked with your name. Every prophecy the Oracle gave you, from the first to the last. You can read them now — all of them — and see the pattern.\n\nThey were never predictions. They were descriptions. The Oracle saw what was already inside you and named it before you could.",
        statChanges: { Wisdom: 2 },
        feedback: "You read through every prophecy. Some make you laugh. Some make your eyes burn. Together, they tell a story — your story, from a perspective you couldn't have understood until now.\n\nThe Oracle wasn't guiding you. It was mirroring you. Showing you what you couldn't yet see about yourself.",
        lesson: "Looking back at every prediction and seeing how they came true changes your relationship with the future. Not because the future is predetermined — but because the seeds of what you become are always visible, if you know how to look.",
        setsFlags: { visitedLibrary: true, reviewedProphecies: true },
      },
    },
    {
      id: "heras_garden",
      name: "Hera's Garden",
      icon: "\uD83C\uDF3A",
      hint: "A garden of impossible flowers. Hera's private sanctuary. She's waiting.",
      type: "scene",
      content: {
        text: "The garden is achingly beautiful. Flowers that don't exist in the mortal world bloom in colors you have no names for. A fountain murmurs at the center.\n\nHera sits on a stone bench. She looks up when you enter. Her face is complicated — anger and sadness and something that might be respect, all tangled together.\n\n'So you made it,' she says. 'The daughter of my husband's wandering eye, standing in my garden.' She looks at the flowers. 'I have hated every child like you. You know that.'\n\nShe pauses.\n\n'But I watched you. I watched you choose compassion when cruelty would have been easier. I watched you protect people who had no claim on you. I watched you forgive things that didn't deserve forgiveness.'\n\nShe stands. 'I won't pretend to love you. But I will say this: you are not what I expected. And for a goddess who has seen everything, that is no small thing.'",
        statChanges: { Empathy: 2, Courage: 1 },
        reputationChanges: { gods: 2 },
        feedback: "Hera extends her hand. Not warmth — but truce. Acknowledgment. From a goddess who had every reason to destroy you, this is more meaningful than any blessing.\n\n'Don't make me regret this,' she says. But there's a ghost of a smile on her lips.",
        lesson: "Reconciliation with someone who hated you isn't about making them love you. It's about both of you finding enough honesty to see each other clearly. Hera didn't forgive Zeus. She recognized you. There's a difference, and it matters.",
        setsFlags: { visitedHerasGarden: true, heraReconciled: true },
      },
    },
  ],
};

// ── Dialogue Duel: Zeus (Resolve 10, 3 rounds, vulnerable to everything genuine) ──
export const ch10DialogueDuel = {
  title: "A Conversation with Thunder",
  npcName: "Zeus",
  npcTitle: "King of Olympus, Father",
  baseResolve: 10,
  maxRounds: 3,
  resistances: [], // He resists nothing. He WANTS to be reached.
  vulnerabilities: ["Assert", "Reason", "Empathize", "Deflect", "Endure"], // Vulnerable to everything genuine.
  rounds: [
    {
      npcLine: "Zeus leans forward on his throne. The lightning in his eyes dims to something almost human. 'I want to know something. Through all of this — the trials, the disguises, the gods testing you — did you ever hate me? For hiding you? For being absent?'",
      options: {
        Assert: { text: "Yes. I hated you. I had every right to.", stat: "Courage", dc: 6 },
        Reason: { text: "I didn't have enough information to hate you. I was angry at a shape, not a person.", stat: "Wisdom", dc: 6 },
        Empathize: { text: "I hated what you did. Not who you are. Those are different things.", stat: "Empathy", dc: 5 },
        Deflect: { text: "Does it matter? We're here now. That's what counts.", stat: "Cunning", dc: 7 },
        Endure: { text: "Some days yes. Some days no. That's the honest answer.", stat: "Discipline", dc: 5 },
      },
    },
    {
      npcLine: "Zeus is quiet for a long moment. Then: 'I've been king for millennia. I've held this throne through wars and treachery and the weight of the entire world. And none of it — none of it — was as difficult as watching you grow up from a distance and not being allowed to help.'",
      options: {
        Assert: { text: "Then you should have helped anyway. Rules are made to be broken.", stat: "Courage", dc: 6 },
        Reason: { text: "You were trapped by the same system you built. That's the tragedy of power.", stat: "Wisdom", dc: 5 },
        Empathize: { text: "I believe you. That sounds like the hardest thing in the world.", stat: "Empathy", dc: 5 },
        Deflect: { text: "You're the king of the gods. Who was stopping you, exactly?", stat: "Cunning", dc: 7 },
        Endure: { text: "I don't need an explanation. I need a father. Can you be that?", stat: "Discipline", dc: 5 },
      },
    },
    {
      npcLine: "Zeus stands. He is impossibly tall. Lightning crackles in his beard, in his hands, in the air around him. But his eyes — your eyes — are soft. 'Whatever you choose — the divinity, the mortality, the third path — I want you to know something. I did not make you strong. You did that yourself. All I gave you was the blood. Everything else — the courage, the wisdom, the heart — that was you. That was always you.'",
      options: {
        Assert: { text: "I know. And I want you to remember that, whatever happens next.", stat: "Courage", dc: 5 },
        Reason: { text: "You gave me more than blood. You gave me a quest. That shaped me too.", stat: "Wisdom", dc: 5 },
        Empathize: { text: "Thank you. That's what I needed to hear.", stat: "Empathy", dc: 4 },
        Deflect: { text: "Careful. You almost sound like a dad right now.", stat: "Cunning", dc: 6 },
        Endure: { text: "I know who I am. I've known since the first crossroads.", stat: "Discipline", dc: 5 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Zeus smiles. It transforms his face — the storm god becomes a father. He reaches out and puts his hand on your head. Lightning flows through you, but it doesn't burn. It warms.\n\n'My daughter,' he says. Two words. They carry the weight of an ocean.\n\nThe other gods watch. Athena's eyes are bright. Poseidon nods. Even Hera, from her distant throne, does not look away.",
      statChanges: { Wisdom: 1, Empathy: 1, Courage: 1 },
      reputation: { gods: 3 },
      flags: { connectedWithZeus: true, zeusBlessing: true },
    },
    draw: {
      text: "Zeus nods slowly. 'You're not ready to hear everything I want to say,' he says. 'And I'm not ready to say it. But we started.' He puts his hand on your shoulder — carefully, like he's afraid you'll break. 'We started. That's enough.'",
      statChanges: { Wisdom: 1 },
      reputation: { gods: 1 },
      flags: { connectedWithZeus: true },
    },
    lose: {
      text: "Zeus sighs. 'There is a wall between us,' he says. 'I built it. You reinforced it. Maybe one day we'll take it down.' He doesn't touch you. But he looks at you — really looks — and in his eyes you see a thousand years of regret.\n\n'Whatever you choose,' he says, 'choose it for yourself. Not for me. Not against me. For you.'",
      statChanges: {},
      flags: { metZeus: true },
    },
  },
};

// ── Memory Echo (COMPLETE — baseDC: 1, automatic) ──
export const ch10Echo = {
  fragments: [
    "A girl on a dusty road",
    "Bread shared with a stranger",
    "Gods in disguise, watching",
    "The rival who became a mirror",
    "The thread that connects all worlds",
    "The daughter of thunder",
    "You don't need me anymore",
  ],
  correctOrder: [0, 1, 2, 3, 4, 5, 6],
  baseDC: 1,
  dreamText: "The vision is complete. Every fragment — from every chapter, every dream, every whispered prophecy — assembles into a single, unbroken image. Your story, told in seven heartbeats. You see it all. You understand it all. The Oracle's voice is warm, and final: 'Remember this. All of it. It was yours.'",
  nightmareText: "There is no nightmare. Not tonight. The darkness that has followed you since the beginning steps into the light, and it has your face. It smiles. 'I was never your enemy,' it says. 'I was the part of you that wasn't ready. I'm ready now.' The darkness dissolves into you, and you are whole.",
};

// ── Sacrifice: The Oracle (FINAL — meta-sacrifice) ──
export const ch10SacrificeData = {
  type: "power",
  targetId: "oracleConnection",
  narrative: "The Third Path — the Path of the Thread — requires a bridge between the mortal and divine worlds. A connection so deep it can hold both realities together.\n\nThe Oracle speaks. Not in riddles. Not in lessons. In plain, honest words:\n\n'I am that bridge. My voice — the one that has guided you, taught you, whispered after every choice — is what connects the worlds. If you walk the Thread, I become the Thread. I go silent. Not destroyed. Completed.'\n\nA pause.\n\n'You have learned enough to teach yourself. You have grown past the need for my guidance. And that — that is the greatest success a teacher can have.'\n\nAnother pause. Quieter.\n\n'You don't need me anymore. And I am so proud of who you've become.'",
  oracleText: "Every lesson. Every whispered insight after every choice. Every prophecy decoded and understood. That is what you sacrifice — not the memory, but the voice. The teacher steps back so the student can stand alone.",
  gainText: "The Path of the Thread — walk between worlds. Keep your divine power and your mortal heart. Become the bridge.",
  flags: { sacrificedOracle: true, oracleCompleted: true },
  worldStateChanges: { oracleActive: -1, threadPathOpen: 1 },
};

// ── Dream/Camp (FINAL — all themes converge) ──
export const ch10DreamData = {
  campDescription: "There is no campfire on Olympus. Instead, you sit on a ledge of crystal that overlooks the entire world. The stars are closer here — close enough to touch. Every constellation tells a story. Tonight, they tell yours.",
  dreamText: "The dream is every dream you've ever had in this journey, played back in sequence. The dusty road. The sea. The labyrinth. The garden. The forge. Every face — friend, foe, god, mortal — appears and nods and fades.\n\nAnd at the end, you see yourself. Not a reflection. You, standing at the summit, older and wiser and tired and whole. The future you smiles.\n\n'You made it,' she says. 'Not perfectly. Not easily. But genuinely.'\n\nYou wake up. The last dream is over.",
  nightmareText: "There are no nightmares left. The darkness is inside you now, integrated, understood. You sleep the deepest sleep of your life, and when you wake, you are ready.",
  communeText: "Kira sits on the ledge beside you. Neither of you speaks for a long time. The stars turn. The world breathes.\n\n'Do you know what you're going to choose?' she asks.\n\n'No,' you say.\n\n'Good,' she says. 'If you already knew, it wouldn't be a real choice.'\n\nYou sit in silence until dawn. It's the best conversation you've ever had.",
  communeStatChanges: { Wisdom: 1, Empathy: 1 },
};

// ── Ticker Messages (world-resolution themed) ──
export const ch10TickerMessages = [
  { condition: { flag: "conqueredOlympus" }, text: "The mortal world feels the mountain's acknowledgment. Crops grow. Storms gentle. Something has shifted." },
  { condition: { flag: "heraReconciled" }, text: "For the first time in an age, Hera's temples receive offerings of thanks, not appeasement." },
  { condition: { flag: "connectedWithZeus" }, text: "Thunder rolls across the world — not in anger, but in joy. Even the gods notice." },
  { condition: {}, text: "The stars rearrange. A new constellation appears — a girl climbing a mountain, one hand reaching for the sky." },
  { condition: { flag: "sacrificedOracle" }, text: "The Oracle at Delphi goes silent. The priestess smiles. 'It is complete,' she says. 'The last lesson has been taught.'" },
];
