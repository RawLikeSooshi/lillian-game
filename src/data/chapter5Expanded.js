/**
 * Chapter 5 Expanded Data — "The Garden of the Hesperides"
 * Prophecy, Encounter (Ladon), Exploration (garden periphery),
 * Dialogue Duel (Hermes as traveler), Memory Echo, Sacrifice, Oath, Dream/Camp, Ticker
 */

// ── Prophecy Pool ──
export const ch5ProphecyPool = [
  {
    id: "ch5_garden",
    text: "The garden grows what the world forgets. What you plant there, you cannot take back.",
    reveal: "The sacrifice in the garden was the first test of who you'll be when godhood calls. What you gave up — or didn't — defined you more than any battle could.",
    chapters: [5],
  },
  {
    id: "ch5_dragon",
    text: "A hundred heads dream a hundred dreams. Only mercy wakes the dreamer.",
    reveal: "Ladon's curse was unbreakable by force. Only empathy — freely given, at personal cost — could crack something that cruelty built.",
    chapters: [5],
  },
  {
    id: "ch5_thunder",
    text: "The lightning does not fall. It rises. From daughter to father, the storm climbs home.",
    reveal: "You are Zeus's daughter. The echoes, the dreams, the pull of Olympus — they were your inheritance calling you back. The storm was always yours.",
    chapters: [5],
  },
];

// ── Major Encounter: Ladon (conditional on fight path) ──
export const ch5EncounterLadon = {
  title: "The Hundred-Headed Guardian",
  enemyName: "Ladon",
  image: "\ud83d\udc09",
  atmosphere: "A hundred heads rise in a wave of scales and sorrow — not a roar but a groan, the sound of something that has been forced to fight for longer than your entire civilization has existed. His eyes don't say 'I'll destroy you.' They say 'I'm sorry.'",
  baseDC: 15,
  woundSource: "ladon",
  choices: [
    {
      prompt: "Three heads strike from the left. The ground trembles as Ladon's coils shift against the tree. Ancient. Massive. Sad.",
      timer: 10,
      options: [
        { text: "Roll under the strike — come up behind the nearest head!", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Stand firm. Deflect with your shield. Don't give ground!", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Shout to the Hesperides — call his name! Something familiar might reach him!", stat: "Empathy", statChanges: { Empathy: 1 } },
      ],
    },
    {
      prompt: "Ladon's tail sweeps the garden floor. Debris flies. A wall of tarnished scales rushes at you like a falling building.",
      timer: 10,
      options: [
        { text: "Leap the tail. Strike his flank. Keep moving!", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Time the sweep. Drop flat. Let it pass inches above you.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Grab a fallen golden branch — hold it up. The tree's light might reach him.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
      ],
    },
    {
      prompt: "Ladon rears to full height. Fifty heads face you at once. The sky darkens behind him. This is the end of the fight, one way or another.",
      timer: 8,
      options: [
        { text: "Charge his center. End this now.", stat: "Courage", statChanges: { Courage: 2 } },
        { text: "Feint left, dodge right — reach the tree while he's off-balance.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Drop your weapon. Open your hands. Show him you're done fighting.", stat: "Empathy", statChanges: { Empathy: 2 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "You move through the fight like water around stone — never where Ladon expects, always where the openings are. Not fighting him. Moving *with* him, reading the exhaustion in his strikes, finding the gaps that three thousand years of forced combat have worn into his technique.\n\nThe dragon collapses. Not defeated — released. A hundred heads lower to the ground, breathing hard, and the sound they make isn't a growl. It's gratitude.\n\nThe Hesperides watch in silence. In three thousand years, no one has ever fought Ladon and won without killing him. You're the first.",
      statChanges: { Courage: 2 },
      reputation: { gods: 2 },
      flags: { defeatedLadon: true, ladonAlive: true },
    },
    success: {
      text: "The fight is brutal — but you find your rhythm. Ladon is powerful, but the curse has been grinding him down for millennia. You outlast him. Not with force — with persistence.\n\nHe sinks to the ground, heads drooping like flowers in a drought. Too tired to continue. Too cursed to surrender.\n\nThe garden is still. The tree glows. And the dragon breathes — ragged, hurting, alive.",
      statChanges: { Courage: 1 },
      reputation: { gods: 1 },
      flags: { defeatedLadon: true, ladonAlive: true },
    },
    partial: {
      text: "You trade blows with a god's watchdog and survive. Barely. Ladon's teeth scraped your shoulder — not a full bite, a glancing blow, but you felt the age in it. Three thousand years of accumulated suffering, concentrated in one set of jaws.\n\nYou're standing. He's lying down. Neither of you won. You both just... stopped.\n\nThe silence afterward is enormous.",
      statChanges: {},
      flags: { defeatedLadon: true, ladonAlive: true },
    },
    fail: {
      text: "Ladon overwhelms you. A head catches you across the chest and pins you to the garden floor. You can't breathe. The weight is impossible — not just physical. Ancient.\n\nThen the pressure releases. Ladon draws back, staring at you with a hundred expressions of something that looks unmistakably like regret. He could have killed you. The curse demanded it.\n\nHe didn't.\n\nThe Hesperides pull you to safety. The tree is beyond reach — for now. But the dragon let you live, and that cost him something too.",
      statChanges: { Courage: -1 },
      flags: { failedAgainstLadon: true, ladonAlive: true },
    },
  },
};

// ── Exploration Nodes (garden periphery) ──
export const ch5ExplorationNodes = {
  title: "The Garden's Secrets",
  description: "The garden extends farther than it should — farther than anything should. Paths branch into groves and hidden glens that feel older than the world outside, as if time pooled here and forgot to drain. You have time to explore two.",
  picks: 2,
  nodes: [
    {
      id: "river_forgetfulness",
      name: "The River of Forgetfulness",
      icon: "\ud83c\udf0a",
      hint: "A slow silver river that erases footprints from its banks as fast as they're made. The water whispers in voices you almost recognize.",
      type: "scene",
      content: {
        text: "A river runs through the garden — silver water, perfectly still except where it isn't. The surface shows reflections that don't match what's above it: faces, places, moments from lives you've never lived.\n\n\"The Lethe,\" Aigle says from behind you. Her voice is careful. \"Or a tributary. It carries memories to the underworld.\"\n\nShe hesitates.\n\n\"If you drink, you'll forget something — something you won't know is gone until you reach for it and find an empty space. If you just watch... sometimes it shows you something you've already forgotten.\"\n\nThe water shows you a face. A woman's face, looking at you with a love so fierce it burns the air between you. Dark hair. Your chin. Your stubborn mouth.\n\nYour mother.\n\nThe image wavers. Ripples. Fades.",
        statChanges: { Wisdom: 1, Empathy: 1 },
        worldStateChanges: { underworldStirring: 1 },
        feedback: "You don't drink. Your hand reached for the water without permission, and you pulled it back.\n\nBut you saw her face — your mother's face — and the seeing itself was a gift. The river takes memories, but sometimes, for reasons of its own, it gives one back first.\n\nYou walk away carrying her face like a coin in your pocket. The river whispers behind you. It sounds like her voice.",
        lesson: "Memory is not just data — it's identity. The Lethe doesn't erase facts. It erases *who you are*. Choosing not to drink, while accepting the glimpse it offered, shows wisdom about what to take and what to leave alone. Some gifts are worth more when you don't reach for them.",
        setsFlags: { visitedLethe: true, sawMothersFace: true },
      },
    },
    {
      id: "tree_knowledge",
      name: "The Tree of Knowledge",
      icon: "\ud83c\udf33",
      hint: "A gnarled tree covered in carved symbols. Every language ever spoken is here — including some that haven't been invented yet.",
      type: "scene",
      content: {
        text: "Near the garden's heart stands a different tree — not golden but ancient beyond measure, its bark a living manuscript of carved symbols. Every language ever spoken is represented here: Greek, Egyptian, Persian, and dozens you don't recognize — angular scripts, looping scripts, one that looks like music notation, one that looks like mathematics.\n\nThe traveler appears beside you. For once, he's not grinning. \"Prometheus planted this one,\" he says quietly. \"Before they chained him to the rock for giving fire to humanity. It grows knowledge the way the golden tree grows power.\"\n\nYou touch the bark. Words flood your mind — not all at once but one at a time, like pages turning in a book written by everyone who ever lived. History. Mathematics. The names of stars. The geometry of bridges. The migration patterns of birds you've never seen.",
        statChanges: { Wisdom: 2 },
        feedback: "You pull your hand away before it becomes too much — before the knowledge drowns the knower. What stays is scattered but real: the names of three constellations, the distance from Athens to Alexandria measured in stadia, the word for 'courage' in Egyptian.\n\nYou know things now that you didn't know a minute ago. The tree gave freely, the way Prometheus gave freely, the way some people can't help sharing what they know even when it costs them everything.",
        lesson: "Knowledge freely offered is one of the most generous gifts that exists. Prometheus was punished for giving knowledge to humanity — chained to a rock, his liver torn out daily. But the tree he planted keeps giving. Taking only what you can carry shows the kind of restraint that knowledge itself teaches.",
        setsFlags: { touchedKnowledgeTree: true },
      },
    },
    {
      id: "nymphs_lament",
      name: "The Nymph's Lament",
      icon: "\ud83c\udfb5",
      hint: "Hespere sits alone on a stone at the garden's edge, singing. The song has no words. It doesn't need any.",
      type: "scene",
      content: {
        text: "You find Hespere apart from her sisters, sitting on a flat stone that overlooks a cliff dropping into clouds. Below the clouds: nothing. The edge of the world, literally.\n\nShe's singing. A melody without words — older than words, older than the concept of singing, a sound that was ancient when the first human throat learned to hum. It's achingly beautiful in the way that things are beautiful when they carry the weight of everything they've lost.\n\nShe stops when she notices you. But she doesn't tell you to leave.\n\n\"We've been here since the beginning,\" she says. Her voice is twilight — the last light before dark. \"When the world was new, this garden was its heart. Heroes came seeking wisdom. Now they come seeking power.\" She looks at the clouds below. \"If they come at all.\"\n\nShe turns those evening eyes on you.\n\n\"Why did YOU come?\"",
        statChanges: { Empathy: 2 },
        reputationChanges: { gods: 1 },
        feedback: "You answer honestly. Whatever you said, Hespere nods — slowly, the way the last light of day nods at the horizon before it goes.\n\n\"That's a better answer than most.\"\n\nShe resumes her song. This time you sit and listen. The melody wraps around you like a warm wind with hands — not grabbing, just holding. When she finishes, you feel older. Not in years. In understanding.\n\nSome things can only be taught by sitting with someone who has been lonely for a very long time and letting them show you what that sounds like.",
        lesson: "Loneliness is not the same as solitude. The Hesperides chose to tend this garden — but they didn't choose to be forgotten. Listening to someone's grief, really listening, without trying to fix it or explain it away, is a form of healing that costs nothing but time and presence.",
        setsFlags: { heardHespereSing: true },
      },
    },
    {
      id: "dragons_nest",
      name: "The Dragon's Nest",
      icon: "\ud83e\udd5a",
      hint: "A hollow beneath the golden tree's roots. Something is hidden there, glinting silver in the dark.",
      type: "scene",
      content: {
        text: "Beneath the massive roots of the golden tree, hidden by Ladon's coils, there's a hollow space — warm, dark, smelling of old scales and something sweeter underneath. A nest.\n\nNot eggs. Something stranger. Small golden scales, shed over millennia, have accumulated into a shimmering pile — a dragon's lifetime measured in cast-off skin. Thousands of them. Maybe tens of thousands.\n\nAnd in the center, a single scale that's different. Silver, not gold. Smaller. It pulses faintly — a rhythm you recognize before you understand why.\n\nA heartbeat.\n\nErytheia whispers from behind you: \"Ladon's first scale. From before the curse. When he was just a dragon — not a prisoner. Just a creature of wonder, living in a garden because gardens are where creatures of wonder belong.\"",
        statChanges: { Wisdom: 1 },
        setsInventory: ["ladonScale"],
        feedback: "You take the silver scale carefully, cupping it in both palms. It's warm — not with magic but with memory. This was Ladon *before*. Before the curse. Before the centuries. Before the pain became everything he knew.\n\nThe scale hums against your skin like a tiny, living heart.\n\nErytheia: \"Keep it. If you ever need to remember what mercy means — if the word starts to lose its shape — hold it and remember what he was. What he could be again.\"",
        lesson: "Objects carry history. This scale isn't powerful the way a weapon is powerful. It's powerful the way a photograph of someone you love is powerful — it reminds you of something important that might otherwise be lost in the noise of everything that came after.",
        setsFlags: { foundLadonScale: true },
      },
    },
  ],
};

// ── Dialogue Duel: Hermes as Traveler ──
export const ch5DialogueDuel = {
  title: "The Traveler's Game",
  npcName: "Loxias",
  npcTitle: "The fellow traveler",
  baseResolve: 10,
  maxRounds: 3,
  resistances: ["Empathize", "Endure"],
  vulnerabilities: ["Cunning", "Reason"],
  rounds: [
    {
      npcLine: "Loxias walks backward effortlessly, facing you, eating his apple, dodging roots he can't possibly see. It's infuriating. It's also, somehow, charming.\n\n\"So,\" he says. \"I've been thinking. The gods — if they're real, big if — do they owe us anything? Or do we owe THEM?\" He grins like he just asked you what you want for lunch. \"Discuss.\"",
      options: {
        Assert: { text: "If they're real, they owe us explanations. For all of this.", stat: "Courage", dc: 12 },
        Reason: { text: "Debt goes both ways. They made us, but we give them meaning. Without worshippers, what's a god?", stat: "Wisdom", dc: 9 },
        Empathize: { text: "Maybe it's not about debt. Maybe it's about family.", stat: "Empathy", dc: 13 },
        Deflect: { text: "Why are you asking? You seem awfully interested in gods for a random traveler.", stat: "Cunning", dc: 8 },
        Endure: { text: "I don't spend time on questions I can't answer. I deal with what's in front of me.", stat: "Discipline", dc: 13 },
      },
    },
    {
      npcLine: "Loxias catches a butterfly without looking. Studies it for exactly one second. Lets it go. The butterfly doesn't seem to mind — it lands on his finger and leaves voluntarily, which is not how butterflies work.\n\n\"Let me try another one,\" he says. \"If someone kept a secret from you — a big one, the kind that rewrites your entire life story — for your own protection... would you forgive them?\"",
      options: {
        Assert: { text: "No. Secrets about my own life aren't theirs to keep.", stat: "Courage", dc: 12 },
        Reason: { text: "It depends on the secret and the danger. Context matters more than principle here.", stat: "Wisdom", dc: 9 },
        Empathize: { text: "I'd try. Protecting someone is an act of love, even when it's wrong.", stat: "Empathy", dc: 14 },
        Deflect: { text: "You're testing me. This isn't hypothetical. What do you know?", stat: "Cunning", dc: 8 },
        Endure: { text: "Forgiveness takes time. I'd need to sit with it before I could answer.", stat: "Discipline", dc: 13 },
      },
    },
    {
      npcLine: "Loxias stops walking. Stops grinning. Stops being the person he's been pretending to be.\n\nHis face is serious — genuinely, fully serious — for the first time since you met him. The mischief drains away like water from a glass, and what's left underneath is older and sharper and sadder than anything a traveler on a road should be.\n\n\"Last one,\" he says. \"If you found out you were more than you thought — more powerful, more important, more dangerous — would you want to know?\"\n\nA pause. His voice drops.\n\n\"Even if the knowing changed everything?\"",
      options: {
        Assert: { text: "Yes. Always. The truth is never worse than the not-knowing.", stat: "Courage", dc: 11 },
        Reason: { text: "Knowledge is neutral. It's what you do with it that makes it dangerous or safe.", stat: "Wisdom", dc: 9 },
        Empathize: { text: "I'd want to know. But I'd need people around me who already knew. So I'm not alone with it.", stat: "Empathy", dc: 12 },
        Deflect: { text: "You already know the answer. You've been leading me to it this whole time.", stat: "Cunning", dc: 8 },
        Endure: { text: "I would. And I'd carry it. That's what I do.", stat: "Discipline", dc: 12 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Loxias stares at you. The silence stretches — three heartbeats, four, five.\n\nThen he laughs. A real laugh — surprised, delighted, the laugh of someone who has spent centuries testing mortals and just met one who turned the test inside out.\n\n\"You're sharper than your father,\" he says. The words slip out before he catches them. His eyes widen — then he grins. \"Don't tell him I said that.\"\n\nHe winks. The wink carries something divine in it — a flash of gold in his irises, a flicker of white wings at his heels, there and gone like a fish breaking the surface of a river.\n\n\"I was supposed to test whether you were ready for what's ahead. You are. More than ready.\"",
      statChanges: { Cunning: 2, Wisdom: 1 },
      reputation: { gods: 2 },
      flags: { impressedHermes: true, hermesBlessing: true },
    },
    draw: {
      text: "Loxias nods slowly. The grin returns — but it's thinner now, more honest.\n\n\"Not bad. Not great, but not bad.\" He stretches — his limbs are too loose, too easy, as if his body is a costume he forgot to button properly. \"You've got potential. Rough around the edges.\"\n\nFor a moment, his sandals shimmer. Wings — tiny, white, impossible — flutter once and vanish.\n\n\"But the edges are the interesting part. Keep walking. The garden is close.\"",
      statChanges: { Wisdom: 1 },
      reputation: { gods: 1 },
      flags: { metHermes: true },
    },
    lose: {
      text: "Loxias sighs. Not disappointed — frustrated, the way a teacher gets frustrated with a student who keeps answering the question that was asked instead of the question that was meant.\n\n\"You answer like a hero,\" he says. \"Stop that. Heroes are predictable. They charge forward, they swing swords, they say noble things. I've met a thousand of them.\"\n\nHe picks up his pace. You have to hurry to keep up.\n\n\"Think *sideways*. The world isn't a straight line, and the best answers aren't on the path. They're three steps to the left of the path, hiding behind a rock, waiting for someone clever enough to look.\"",
      statChanges: {},
      flags: { metHermes: true },
    },
  },
};

// ── Memory Echo (involuntary / unmissable) ──
export const ch5Echo = {
  fragments: [
    "A throne room above the clouds, made of light",
    "She has your eyes",
    "She has her mother's courage",
    "Lightning — not angry, joyful",
    "A daughter born to thunder",
  ],
  correctOrder: [0, 1, 2, 3, 4],
  baseDC: 10,
  involuntary: true,
  dreamText: "This isn't a vision. This is a memory. YOUR memory.\n\nOlympus. A throne room of clouds and gold so bright it sings. Two voices — vast, ancient, breaking with a love that doesn't fit in any language humans have invented:\n\n\"She has your eyes.\"\n\n\"She has her mother's courage.\"\n\nLightning splits the sky — not angry. Joyful. The crack and roar of a father's happiness when his daughter enters the world. YOUR entrance. YOUR world.\n\nYou are a daughter of Zeus.\n\nThe memory doesn't fade. It settles. Into your bones, into your blood, into the place where you've always kept the question you were afraid to ask.\n\nNow you know the answer.",
  nightmareText: "Lightning in your bones. Not from outside — from within. Your blood hums with something ancient and vast and barely contained, as if your veins are wires carrying a current they weren't built for.\n\nThe throne room of Olympus flickers around you — there and not there, real and not real, the way a memory is real.\n\nA voice like thunder: \"You cannot outrun what you are.\"\n\nYou wake shaking. But the trembling feels like power, not fear. Like something waking up inside you that has been sleeping since the day you were born.\n\nIt isn't sleeping anymore.",
};

// ── Sacrifice Data (first sacrifice) ──
export const ch5SacrificeData = {
  type: "stat",
  targetId: "Empathy",
  narrative: "The golden tree pulses — slow, warm, alive. Ladon's hundred heads watch you with tired, pleading eyes that have been asking the same question for three thousand years: *Will this one be different?*\n\nAigle speaks: \"Give a piece of your strength to the garden. The curse will break. Ladon will finally rest.\"\n\nHer voice catches. \"But what you give, you cannot take back. It becomes part of the garden. Part of the tree. Part of the earth. You will leave here with less than you came with.\"\n\nLadon's nearest head turns toward you. The eyes are ancient and exhausted and hoping.",
  oracleText: "What the hero plants in sacred ground grows roots that reach to Olympus.",
  gainText: "Ladon's curse breaks. The hundred heads close their eyes — one by one, like candles being gently blown out. The dragon sleeps. For the first time in three thousand years, the dragon sleeps.\n\nThe garden exhales. The golden tree glows brighter. And something in the earth beneath your feet hums with gratitude.",
  flags: { sacrificedForLadon: true, ladonFreed: true, madeFirstSacrifice: true, gardenBlessed: true },
  worldStateChanges: { gardenRestored: 1 },
};

// ── Dream/Camp ──
export const ch5DreamData = {
  campDescription: "You camp at the garden's edge, where the warped world meets the real one. The golden tree glows softly in the distance — a lantern at the end of the world. The Hesperides' singing drifts through the warm night air, and you realize it's not a song. It's a lullaby. Written before language existed, for a dragon who couldn't sleep.",
  dreamText: "You dream of flying. Not with wings — with lightning. You arc across the sky in a bolt of white fire, and the world below is small and beautiful and yours to protect. Every mountain, every river, every city lit with tiny fires that are people living their lives.\n\nA figure stands on a distant peak, watching you. He holds a thunderbolt the way a father holds a candle in a window — not as a weapon. As a light left on for someone who hasn't come home yet.\n\nHe's smiling.\n\nYou know his face. You've always known it.",
  nightmareText: "The dream twists. You're falling — not from the sky but from Olympus itself. The mountain crumbles beneath you, marble and cloud dissolving into nothing. A voice, echoing through the collapse:\n\n\"The throne breaks all who sit in it.\"\n\nYou wake before you hit the ground. Your hands are tingling. When you hold them up in the dark, for one flickering second, you swear they glow.",
  communeText: "Kira's words echo by the fire. \"I know what we are.\"\n\nSisters. Half-sisters. Daughters of the same impossible father — the king of the gods, the lord of lightning, the one who hid you both among mortals and waited to see what you'd become.\n\nYou stare into the flames and wonder if she's staring into a fire of her own tonight. Thinking about you the way you're thinking about her.\n\nThe stars burn overhead. They look closer than they did before the garden. As if Olympus — wherever it is — just moved a little nearer.",
  communeStatChanges: { Wisdom: 1 },
};

// ── Oath: Oath of the Garden ──
export const ch5OathOpportunity = {
  oathId: "oathOfTheGarden",
  condition: {},
  narrativeSetup: "As you prepare to leave the garden, Hespere approaches. Her sisters stay behind — this is hers to offer.\n\nShe holds a single golden leaf in her palm. It catches light that isn't there — glowing softly, independently, as if it carries its own small sun.\n\n\"Swear to protect what grows,\" she says. Her voice is twilight. \"Not just this garden — all gardens. All wild places. All things that grow slowly and are destroyed quickly by people who don't understand what they're killing.\"\n\nShe holds out the leaf.\n\n\"If you swear, the garden will remember you. When you are lost, green things will guide you home.\"\n\nThe leaf shimmers. The air smells of earth and rain and the beginning of the world.",
  oracleExplanation: "An oath to the garden is an oath to Gaia and Demeter both — grandmother Earth and the goddess who makes things grow. Nature remembers those who defend it. The wild places of the world become your allies — paths appear when you need them, plants sustain you, storms shelter you. But break this oath, and every thorn in the world turns against you. The garden's memory is longer than stone.",
};

// ── Ticker Messages ──
export const ch5TickerMessages = [
  { condition: { flag: "ladonFreed" }, text: "Shepherds near the western coast report a great calm over the land. Something ancient has found peace. The ground itself seems to sigh." },
  { condition: { flag: "tookGoldenApple" }, text: "A golden light was seen streaking west to east across the sky. The gods are watching. Some of them are angry." },
  { condition: { flag: "impressedHermes" }, text: "Travelers on the western roads report finding coins and safe paths where none existed before. Someone swift is looking out for them." },
  { condition: {}, text: "Thunder rolls across clear skies from Athens to Sparta. The oracles say a new power stirs — not a threat. A homecoming." },
  { condition: { flag: "connectedRivalTruth" }, text: "Two lightning bolts were seen striking the same mountaintop at the same moment. The shepherds call it an omen of siblings." },
];
