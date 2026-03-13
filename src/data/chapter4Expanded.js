/**
 * Chapter 4 Expanded Data — "The Straits of Messina"
 * Prophecy, Encounter (Scylla), Exploration (Sicily coast),
 * Dialogue Duel (Poseidon as captain), Memory Echo, Oath, Dream/Camp, Ticker
 */

// ── Prophecy Pool ──
export const ch4ProphecyPool = [
  {
    id: "ch4_sea",
    text: "The sea will test what the road taught you.",
    reveal: "Scylla and Charybdis measured your priorities — who you protect, what you sacrifice, how you face the impossible.",
    chapters: [4],
  },
  {
    id: "ch4_captain",
    text: "The captain who charges nothing is paying a debt older than the ocean.",
    reveal: "If you chose the old fisherman: Nereus was Poseidon, watching his domain through mortal eyes. His silence was its own kind of respect.",
    chapters: [4],
  },
  {
    id: "ch4_shore",
    text: "What waits on the far shore has been waiting for longer than you know.",
    reveal: "The Garden of the Hesperides wasn't a myth — and neither is the choice waiting there. The far shore was always your destination, even before you knew it.",
    chapters: [4],
  },
];

// ── Major Encounter: Scylla ──
export const ch4EncounterScylla = {
  title: "Scylla's Strike",
  enemyName: "Scylla",
  image: "🐉",
  atmosphere: "Six heads on long necks reach down from the cliff. Each one could seize a person. The water boils. There's no going back.",
  baseDC: 14,
  woundSource: "scylla",
  choices: [
    {
      prompt: "The first head strikes at the starboard side — directly at a sailor coiling rope.",
      timer: 10,
      options: [
        { text: "Shove the sailor out of the way!", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Throw cargo at the head — distract it!", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Shout a warning so the whole crew braces!", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "Two heads strike at once — one from each side. The ship rocks violently.",
      timer: 10,
      options: [
        { text: "Focus on the nearest head. Save who you can reach.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Grab a torch from the fire pit and swing it. Scylla fears fire.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
        { text: "Pull the smallest sailor below deck — they're the easiest target.", stat: "Empathy", statChanges: { Empathy: 1 } },
      ],
    },
    {
      prompt: "A head grabs hold of the mast. The whole ship lurches. You have seconds.",
      timer: 10,
      options: [
        { text: "Cut the rope holding the cargo net — it'll fall on the head.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Climb the mast and strike at the head's grip.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Help the crew pull on the tiller — steer the ship free.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "The ship is clear of the worst of it. But one last head lunges — at you.",
      timer: 8,
      options: [
        { text: "Duck and roll. Let it miss.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Stand your ground. Look it in the eye. Don't flinch.", stat: "Courage", statChanges: { Courage: 2 } },
        { text: "Shield yourself with a plank. Absorb the blow.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "You move through the chaos like you belong in it. Every choice lands. The crew watches you with a mixture of awe and relief. Scylla withdraws, frustrated — she took nothing from this ship.\n\nThe captain is quiet for a long time. Then: 'I've never seen anyone your age do that. Not once.'",
      statChanges: { Courage: 2 },
      reputation: { commonPeople: 2, gods: 1 },
      flags: { survivedScylla: true, impressedAtSea: true },
    },
    success: {
      text: "The ship breaks free. Scylla took a piece of the mast and a barrel of supplies, but no one was killed. You helped. The crew knows it.\n\nThe strait opens behind you into the calm waters of the Sicilian coast. The worst is over.",
      statChanges: { Courage: 1 },
      reputation: { commonPeople: 1 },
      flags: { survivedScylla: true },
    },
    partial: {
      text: "You held your own, but it was close. A head caught your arm — a scrape, not a grab, but enough to leave a mark. The sailor you tried to protect got clipped too.\n\nYou're both alive. That's the only metric that matters right now.",
      statChanges: {},
      flags: { survivedScylla: true },
    },
    fail: {
      text: "Scylla overwhelmed you. A head caught you full across the shoulders and slammed you to the deck. The crew pulled you below while the captain fought the ship free.\n\nYou're bruised, shaken, and alive. The sailor you tried to protect is worse off. The captain says nothing, but bandages your shoulder with surprising gentleness.",
      statChanges: { Courage: -1 },
      flags: { survivedScylla: true, woundedByScylla: true },
    },
  },
};

// ── Exploration Nodes (Sicily coast) ──
export const ch4ExplorationNodes = {
  title: "The Sicilian Coast",
  description: "The coast stretches before you — caves, fishing villages, and stranger things. Time to explore three places before heading inland.",
  picks: 3,
  nodes: [
    {
      id: "sea_cave",
      name: "The Sea Cave",
      icon: "🕳️",
      hint: "A cave mouth at the waterline. Something glimmers inside.",
      type: "scene",
      content: {
        text: "The cave is shallow but beautiful — blue light filters through the water, making the walls glow. In a crevice near the back, you find something unexpected: a fragment of a trident, made of a metal you've never seen. It's warm to the touch.\n\nThe cave walls are carved with old Greek text: 'What the sea breaks, the sea remembers.'",
        statChanges: { Wisdom: 1 },
        setsInventory: ["tridentShard"],
        feedback: "The trident shard hums in your hand. It's not whole — it's a fragment of something much larger. But even broken, it feels important. The sea gave you a gift.",
        lesson: "The sea destroys and preserves in equal measure. This fragment survived because the cave protected it. Sometimes broken things are kept safe until someone comes who can use them.",
        setsFlags: { foundTridentShard: true },
      },
    },
    {
      id: "oracle_dead",
      name: "The Oracle of the Dead",
      icon: "💀",
      hint: "A dark entrance in the hillside. Locals leave offerings but don't enter.",
      type: "scene",
      content: {
        text: "The entrance is cold — unnaturally cold for Sicily. An old woman sits outside, tending candles.\n\n'You want to go in,' she says. It isn't a question. 'The dead speak here. Not always clearly, but always honestly.' She hands you a candle. 'Keep it lit. If it goes out, leave immediately.'\n\nInside, the air is thick. You hear whispers — not words, but the shape of words. Something is trying to tell you something.",
        statChanges: { Wisdom: 1, Empathy: 1 },
        worldStateChanges: { underworldStirring: 1 },
        feedback: "You don't understand the whispers. Not yet. But the candle stayed lit, and the feeling as you left was not fear — it was recognition. Something down there knows you. And it's waiting.",
        lesson: "Not all knowledge comes from books or people. Some comes from places. The Oracle of the Dead isn't evil — it's ancient, and ancient things communicate differently.",
        setsFlags: { visitedOracleOfDead: true },
      },
    },
    {
      id: "fishermens_council",
      name: "The Fishermen's Council",
      icon: "🐟",
      hint: "A group of weathered fishermen arguing loudly around a fire.",
      type: "scene",
      content: {
        text: "The fishermen of the Sicilian coast hold council every evening — an informal gathering where they argue about everything from the best bait to the meaning of life.\n\nTonight, they're arguing about the weather. 'The winds are wrong,' says one. 'They change direction without warning. My grandmother says it means the gods are fighting.'\n\n'Your grandmother says everything means the gods are fighting,' says another. They all laugh — but uneasily.",
        statChanges: { Empathy: 1 },
        reputationChanges: { commonPeople: 1 },
        feedback: "They invite you to eat with them. Fresh-caught fish, bread, and strong wine diluted with water. They ask about the mainland. You tell them what you know. By the end of the evening, you feel like you've known them for years.",
        lesson: "Community forms around shared meals and shared stories. These fishermen don't need to agree about the weather to eat together. That's a model for how disagreement should work.",
        setsFlags: { joinedFishermenCouncil: true },
      },
    },
    {
      id: "nemesis_camp",
      name: "A Familiar Camp",
      icon: "👁️",
      hint: "A campsite near the road. Recently used. A symbol carved into a tree.",
      type: "scene",
      content: {
        text: "The camp is fresh — coals still warm, water still in the cup by the fire ring. Someone was here within the hour.\n\nCarved into a tree trunk is a symbol you don't recognize — but it makes your skin prickle. Near it, scratched with a knife:\n\n'I know what we are. Do you?'\n\nIt's her. The rival. Kira. She was here. She crossed the strait ahead of you. And she's leaving you messages now.",
        statChanges: { Cunning: 1 },
        feedback: "You trace the carved words with your finger. 'I know what we are.' What does she know? More than you? The same? Something different?\n\nShe's not running from you. She's running ahead. And she wants you to follow.",
        lesson: "A rival who leaves you messages isn't trying to hurt you — they're trying to communicate. Kira could have hidden her trail. Instead, she marked it. That changes the nature of the competition.",
        setsFlags: { foundNemesisCamp: true, nemesisAhead: true },
      },
    },
  ],
};

// ── Dialogue Duel: Poseidon as Captain ──
export const ch4DialogueDuel = {
  title: "The Captain's Questions",
  npcName: "Nereus",
  npcTitle: "The old fisherman",
  baseResolve: 12,
  maxRounds: 4,
  resistances: ["Deflect", "Assert"], // Gods see through evasion and aren't intimidated
  vulnerabilities: ["Empathize", "Reason"], // Genuine feeling and wisdom impress Poseidon
  rounds: [
    {
      npcLine: "Nereus looks out at the approaching strait. 'Before we cross, I want to know something about you. Not your name — I know that. Your relationship with the sea. Do you respect it?'",
      options: {
        Assert: { text: "I'm not afraid of it, if that's what you're asking.", stat: "Courage", dc: 14 },
        Reason: { text: "I respect anything that's more powerful than me and doesn't care about my opinion.", stat: "Wisdom", dc: 10 },
        Empathize: { text: "The sea is alive. It has moods. I try to read them, not fight them.", stat: "Empathy", dc: 10 },
        Deflect: { text: "I've never spent much time on the sea. What should I know?", stat: "Cunning", dc: 14 },
        Endure: { text: "I'll respect whatever gets me across safely.", stat: "Discipline", dc: 12 },
      },
    },
    {
      npcLine: "Nereus is quiet for a moment. Then: 'What do you think Scylla is? Not what she does — what she is.'",
      options: {
        Assert: { text: "A monster. Something that hurts people.", stat: "Courage", dc: 15 },
        Reason: { text: "Something that was something else before. Monsters usually are.", stat: "Wisdom", dc: 10 },
        Empathize: { text: "Lonely. You said it yourself — she wasn't always like this.", stat: "Empathy", dc: 9 },
        Deflect: { text: "Does it matter? She'll try to eat us either way.", stat: "Cunning", dc: 15 },
        Endure: { text: "I don't know yet. Ask me after we've crossed.", stat: "Discipline", dc: 12 },
      },
    },
    {
      npcLine: "'Last question,' Nereus says. His eyes are different now — deeper, older than his face. 'If you could command the sea — truly command it — what would you do with it?'",
      options: {
        Assert: { text: "Protect people. Make the crossings safe.", stat: "Courage", dc: 12 },
        Reason: { text: "I wouldn't command it. The sea shouldn't answer to one person.", stat: "Wisdom", dc: 9 },
        Empathize: { text: "I'd heal Scylla. If she was something else before, maybe she could be again.", stat: "Empathy", dc: 9 },
        Deflect: { text: "That's a dangerous question to answer honestly. Why are you asking?", stat: "Cunning", dc: 13 },
        Endure: { text: "I'd leave it as it is. It's not mine to change.", stat: "Discipline", dc: 11 },
      },
    },
    {
      npcLine: "Nereus nods slowly. 'One more thing.' His voice changes — like the sound of deep water. 'When you reach the mountain at the end of your journey... tell my brother I said hello.'",
      options: {
        Assert: { text: "Your brother? Who are you, really?", stat: "Courage", dc: 10 },
        Reason: { text: "You're not a fisherman. You never were.", stat: "Wisdom", dc: 9 },
        Empathize: { text: "Thank you for bringing me across. Whatever you are.", stat: "Empathy", dc: 8 },
        Deflect: { text: "I'll deliver the message. But I want to know who's sending it.", stat: "Cunning", dc: 12 },
        Endure: { text: "I will. I don't need to know more.", stat: "Discipline", dc: 10 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Nereus smiles — and for a moment, his eyes are the color of the deep ocean. 'You'll do,' he says. 'Tell Zeus — tell my brother — that his daughter understands the sea.' He touches the water, and the crossing ahead goes still for a heartbeat.\n\nYou blink. The old man is just an old man again. But the water remembers.",
      statChanges: { Wisdom: 2, Empathy: 1 },
      reputation: { gods: 2 },
      flags: { impressedPoseidon: true, poseidonBlessing: true },
    },
    draw: {
      text: "Nereus nods. 'You're not ready to hear everything,' he says. 'But you listened. That's more than most.' The crossing begins. The water is rough but not hostile. Something is watching over the ship.",
      statChanges: { Wisdom: 1 },
      reputation: { gods: 1 },
      flags: { metPoseidon: true },
    },
    lose: {
      text: "Nereus shakes his head gently. 'You speak before you hear,' he says. 'The sea punishes that.' The crossing begins. It's harder than it needed to be. But you survive. And you'll remember what he said.",
      statChanges: {},
      flags: { metPoseidon: true },
    },
  },
};

// ── Memory Echo ──
export const ch4Echo = {
  fragments: [
    "Olympus on the horizon",
    "Your blood pulls you",
    "The sea knows your name",
    "Poseidon's brother",
    "She carries the storm",
  ],
  correctOrder: [0, 2, 4, 1, 3], // Olympus → sea knows → she carries storm → blood pulls → Poseidon's brother
  baseDC: 13,
  dreamText: "The vision is clearer than ever. Olympus, shining above the clouds. The sea reaching up toward it. Your blood singing in response. A voice: 'She carries the storm inside her.'",
  nightmareText: "A churning whirlpool. You're inside it. Not drowning — descending. Something at the bottom is waiting. It's not angry. It's patient.",
};

// ── Oath: Oath of the Sea ──
export const ch4OathOpportunity = {
  oathId: "oathOfTheSea",
  condition: {}, // Available to everyone
  narrativeSetup: "After the crossing, the captain — whoever they were — stands at the bow and looks back at the strait.\n\n'The sea giveth and the sea taketh,' they say. 'If you swear never to harm a sailor — never, no matter the circumstances — the sea will remember. It will help you when you need it most.'\n\nThey hold out their hand. This isn't a handshake — it's an oath. You can feel the weight of it in the air.",
  oracleExplanation: "An oath to the sea is an oath to Poseidon, whether you know it or not. Sailors who keep this oath find that storms bend around their ships. Those who break it... the sea has a long memory.",
};

// ── Dream/Camp ──
export const ch4DreamData = {
  campDescription: "The Sicilian night is warm and fragrant with wild thyme. You camp on a bluff overlooking the sea. The strait is behind you now.",
  dreamText: "The dream takes you above the water. You fly — not with wings but with will. Below, the strait shimmers. Scylla's heads wave like seaweed. From above, she looks small. Almost sad. The dream shifts: Olympus, wreathed in clouds. A door. Your name carved above it.",
  nightmareText: "Water everywhere. Not drowning — dissolving. You're becoming part of the sea. A voice says: 'This is what happens if you fail.' You wake dry, on solid ground. But the feeling lingers.",
  communeText: "If the nemesis is near: Kira's message echoes in your mind. 'I know what we are.' You sit by the fire and try to figure out what she means. The stars offer no answers, but the question itself feels important.",
  communeStatChanges: { Wisdom: 1 },
};

// ── Ticker Messages ──
export const ch4TickerMessages = [
  { condition: { flag: "impressedAtSea" }, text: "Stories spread of a young hero who faced Scylla and lived to tell it." },
  { condition: { flag: "defeatedDrako" }, text: "Lycon's influence wanes. His agents have been recalled from three cities." },
  { condition: { flag: "impressedPoseidon" }, text: "The seas around Sicily are calm — unusually calm. Fishermen give thanks." },
  { condition: {}, text: "Mount Etna rumbles. The Sicilians say Typhon stirs beneath." },
  { condition: { flag: "foundNemesisCamp" }, text: "A girl matching your rival's description was seen heading west along the coast." },
];
