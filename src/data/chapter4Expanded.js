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
  atmosphere: "Six heads descend from the cliff face on necks as long as ship masts — swaying, tasting the air, each one moving independently like fingers of a hand groping in the dark. The water below boils white. There is no going back. There was never going back.",
  baseDC: 14,
  woundSource: "scylla",
  choices: [
    {
      prompt: "The first head strikes — snaking down at a sailor coiling rope on the starboard side. Fast. So fast.",
      timer: 15,
      options: [
        { text: "Shove the sailor clear!", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Hurl cargo at the head — distract it!", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Scream a warning. Get the whole crew bracing!", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "Two heads at once. Port and starboard. The ship rocks like a toy in a bathtub. Someone is screaming.",
      timer: 15,
      options: [
        { text: "Focus on the nearest head. Save who you can reach.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Grab a torch from the fire pit. Swing it. Fire. Now.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
        { text: "Pull the smallest sailor below deck. Easiest target. Move.", stat: "Empathy", statChanges: { Empathy: 1 } },
      ],
    },
    {
      prompt: "A head wraps around the mast. The wood groans. The whole ship tilts. Seconds.",
      timer: 15,
      options: [
        { text: "Cut the cargo net rope — the weight will fall on the head.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Climb the mast. Strike at the grip. Up close.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Join the crew on the tiller. Steer the ship out from under.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "Almost clear. One last head lunges from the cliff — straight at you.",
      timer: 8,
      options: [
        { text: "Duck and roll. Let it miss.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Stand. Look it in the eye. Don't flinch.", stat: "Courage", statChanges: { Courage: 2 } },
        { text: "Shield yourself with a plank. Absorb the blow.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "You move through the chaos like you were born to it — not fearless, but clear. Every choice lands. Every instinct fires true. The crew watches you with something between awe and gratitude, and Scylla — all six heads — withdraws into the cliff face, frustrated, empty-jawed.\n\nShe took nothing from this ship.\n\nThe captain is quiet for a long time after. Then, without looking at you: \"I've been crossing these straits for decades. I've never seen anyone your age do what you just did.\"\n\nThe water calms. Sicily appears ahead like a promise.",
      statChanges: { Courage: 2 },
      reputation: { commonPeople: 2, gods: 1 },
      flags: { survivedScylla: true, impressedAtSea: true },
    },
    success: {
      text: "The ship breaks free. Behind you, Scylla retreats with a piece of the mast clamped in one jaw and a barrel of supplies in another — offerings she took instead of people.\n\nNo one died. That's the victory. It doesn't feel like a victory yet, but the crew knows what it is.\n\nThe strait opens behind you into the calm blue of the Sicilian coast. The worst is over. You survived something that most people only survive in stories.",
      statChanges: { Courage: 1 },
      reputation: { commonPeople: 1 },
      flags: { survivedScylla: true },
    },
    partial: {
      text: "You held your own, but the strait didn't let you through clean. A head caught your arm — a scrape, not a grab, but enough to draw blood and enough to remind you what those jaws were built for. The sailor beside you got clipped too — shoulder, not bad, could have been worse.\n\nYou're both alive. Right now, that's the only metric that counts.\n\nAs the ship limps free, you look back at the cliff. For one moment, you swear one of the heads is watching you go — not with hunger. With something sadder.",
      statChanges: {},
      flags: { survivedScylla: true },
    },
    fail: {
      text: "Scylla hit you full across the shoulders and drove you to the deck like a thrown stone. The world went white, then dark. The crew pulled you below while the captain fought the ship free.\n\nYou come to with salt water in your mouth and pain in your back and the sound of the strait fading behind you.\n\nYou're bruised. Shaken. Alive.\n\nThe captain says nothing. But she bandages your shoulder with a gentleness that doesn't match her hands — rough, calloused, the hands of someone who's lost people before and decided long ago that saving the ones she can is the only answer.",
      statChanges: { Courage: -1 },
      flags: { survivedScylla: true, woundedByScylla: true },
    },
  },
};

// ── Exploration Nodes (Sicily coast) ──
export const ch4ExplorationNodes = {
  title: "The Sicilian Coast",
  description: "The coast unfolds before you — wild, warm, old in a way that mainland Greece isn't. Caves at the waterline, fishing villages clinging to cliffs, and stranger things inland where the roads lose their names. Time to explore three places before the path turns west.",
  picks: 3,
  nodes: [
    {
      id: "sea_cave",
      name: "The Sea Cave",
      icon: "🕳️",
      hint: "A cave mouth at the waterline, fringed with salt crystals that catch the light like teeth. Something glimmers in the dark.",
      type: "scene",
      content: {
        text: "The cave is shallow but beautiful — impossibly so. Blue light filters up through the water beneath you, making the walls glow like the inside of a sapphire. The air is cool and mineral and old, and the sound of the sea outside becomes something softer in here — a murmur, a pulse, a heartbeat.\n\nIn a crevice near the back, you find something: a fragment of a trident, made of a metal you've never seen — dark, greenish, warm to the touch despite the cave's cool. The edges are sharp and clean, as if it broke yesterday.\n\nThe cave walls are carved with old Greek text, the letters softened by centuries of salt spray: \"What the sea breaks, the sea remembers.\"",
        statChanges: { Wisdom: 1 },
        setsInventory: ["tridentShard"],
        feedback: "The trident shard hums in your hand — a vibration so low you feel it in your teeth rather than hear it. It's not whole. It's a fragment of something vast.\n\nBut even broken, it feels important. Like a word from a sentence you'll understand later. The sea gave you a gift. Whether you earned it or whether it was waiting for you — you can't tell the difference anymore.",
        lesson: "The sea destroys and preserves in equal measure. This fragment survived because the cave kept it safe — sometimes broken things are protected until the right person comes along to carry them forward.",
        setsFlags: { foundTridentShard: true },
      },
    },
    {
      id: "oracle_dead",
      name: "The Oracle of the Dead",
      icon: "💀",
      hint: "A dark entrance in the hillside, wreathed in cold air. Locals leave offerings at the mouth but never enter.",
      type: "scene",
      content: {
        text: "The entrance breathes cold — unnaturally cold for a Sicilian afternoon. The air coming from the hillside smells of earth and copper and something older than either.\n\nAn old woman sits outside, tending candles whose flames don't move despite the breeze.\n\n\"You want to go in,\" she says. Not a question — a reading. \"The dead speak here. Not always clearly. But always honestly.\"\n\nShe hands you a candle. The wax is black. \"Keep it lit. If it goes out, leave. Immediately. Don't argue with the dark.\"\n\nInside, the air thickens. You hear whispers — not words exactly, but the shapes of words. Sounds that almost resolve into meaning, like voices through a wall. Something is trying to tell you something.\n\nThe candle stays lit. Barely.",
        statChanges: { Wisdom: 1, Empathy: 1 },
        worldStateChanges: { underworldStirring: 1 },
        feedback: "You don't understand the whispers. Not yet. But the candle stayed lit — and the feeling as you stepped back into the sunlight was not fear. It was recognition.\n\nSomething down there knows you. Knows your name. And it's not afraid of you — it's waiting. Patiently, the way the sea cave waited. The way everything on this journey seems to have been waiting.",
        lesson: "Not all knowledge comes from books or people. Some comes from places — from the earth, from the dark, from the silence between sounds. The Oracle of the Dead isn't evil. It's ancient, and ancient things communicate in languages you have to learn to hear.",
        setsFlags: { visitedOracleOfDead: true },
      },
    },
    {
      id: "fishermens_council",
      name: "The Fishermen's Council",
      icon: "🐟",
      hint: "Weathered fishermen arguing loudly around a fire on the beach. The smoke smells of grilled fish and strong opinions.",
      type: "scene",
      content: {
        text: "The fishermen of the Sicilian coast hold council every evening — not in a building, not with rules, just a circle of stones on the beach and a fire and fish on sticks and arguments that have been running longer than anyone can remember.\n\nTonight, they're arguing about the weather. \"The winds are wrong,\" says a man with a face like a walnut. \"They change direction without warning. My grandmother says it means the gods are fighting.\"\n\n\"Your grandmother says everything means the gods are fighting,\" says another. They all laugh — but the laughter has a nervous edge, the way laughter does when the joke is too close to true.",
        statChanges: { Empathy: 1 },
        reputationChanges: { commonPeople: 1 },
        feedback: "They invite you to eat. Fresh-caught fish charred on sticks, bread broken by hand, wine so strong they cut it with seawater. They ask about the mainland and you tell them what you know and they tell you what they've seen and by the time the fire burns low you feel like you've known them for years.\n\nYou haven't. But you've shared a fire. In some parts of the world, that's the same thing.",
        lesson: "Community forms around shared meals and honest argument. These fishermen don't agree about the weather, the gods, or the best way to cook fish. But they eat together every night. That's a model for how disagreement should work.",
        setsFlags: { joinedFishermenCouncil: true },
      },
    },
    {
      id: "nemesis_camp",
      name: "A Familiar Camp",
      icon: "👁️",
      hint: "A campsite near the road. Recently used. The coals still glow. A symbol you don't recognize is carved into a tree.",
      type: "scene",
      content: {
        text: "The camp is fresh — coals breathing orange in the fire ring, water still sitting in a cup someone set down and didn't finish. Whoever was here left within the hour.\n\nCarved into a tree trunk is a symbol you don't recognize — angular, deliberate, like a letter from an alphabet that hasn't been invented yet. It makes your skin prickle the way the air prickles before a storm.\n\nNear it, scratched into the bark with a knife point, five words:\n\n\"I know what we are. Do you?\"\n\nIt's her. The rival. Kira. She was here. She crossed the strait ahead of you. And she's not hiding — she's leaving you a trail.",
        statChanges: { Cunning: 1 },
        feedback: "You trace the carved words with your fingertip. The bark is still raw.\n\n\"I know what we are.\"\n\nWhat does she know? More than you? The same things, seen from a different angle? Something you haven't even begun to guess?\n\nShe's not running from you. She's running ahead. And she wants you to follow.\n\nThat changes everything — and nothing.",
        lesson: "A rival who leaves you messages instead of hiding her trail isn't trying to defeat you — she's trying to communicate. Kira could have vanished. Instead, she carved her question into a tree and walked away. The nature of the competition just shifted.",
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
  resistances: ["Deflect", "Assert"],
  vulnerabilities: ["Empathize", "Reason"],
  rounds: [
    {
      npcLine: "Nereus stands at the tiller, his eyes on the approaching strait. The light falls on his face differently than it falls on the water — as if the light knows him.\n\n\"Before we cross,\" he says, \"I want to know something about you. Not your name — I know that already.\" He doesn't explain how. \"Your relationship with the sea. Do you respect it?\"",
      options: {
        Assert: { text: "I'm not afraid of it, if that's what you're asking.", stat: "Courage", dc: 14 },
        Reason: { text: "I respect anything that's more powerful than me and doesn't care about my opinion.", stat: "Wisdom", dc: 10 },
        Empathize: { text: "The sea is alive. It has moods. I try to read them, not fight them.", stat: "Empathy", dc: 10 },
        Deflect: { text: "I've never spent much time on the sea. What should I know?", stat: "Cunning", dc: 14 },
        Endure: { text: "I'll respect whatever gets us across safely.", stat: "Discipline", dc: 12 },
      },
    },
    {
      npcLine: "Nereus is quiet for a long moment. The boat rocks gently. When he speaks again, his voice has dropped — not in volume, but in depth. As if the words are coming from somewhere deeper than his chest.\n\n\"What do you think Scylla is?\" he asks. \"Not what she does. What she *is*.\"",
      options: {
        Assert: { text: "A monster. Something that hurts people.", stat: "Courage", dc: 15 },
        Reason: { text: "Something that was something else before. Monsters usually are.", stat: "Wisdom", dc: 10 },
        Empathize: { text: "Lonely. You said it yourself — she wasn't always like this.", stat: "Empathy", dc: 9 },
        Deflect: { text: "Does it matter? She'll try to eat us either way.", stat: "Cunning", dc: 15 },
        Endure: { text: "I don't know yet. Ask me after we've crossed.", stat: "Discipline", dc: 12 },
      },
    },
    {
      npcLine: "\"Last question,\" Nereus says. But his eyes — his eyes are different now. Deeper. Older than his face, older than the boat, older than the wood the boat was made from when it was still a tree. The color of the deep ocean where sunlight surrenders.\n\n\"If you could command the sea — truly command it, every wave, every current, every creature in its depths — what would you do with it?\"",
      options: {
        Assert: { text: "Protect people. Make the crossings safe.", stat: "Courage", dc: 12 },
        Reason: { text: "I wouldn't command it. The sea shouldn't answer to one person.", stat: "Wisdom", dc: 9 },
        Empathize: { text: "I'd heal Scylla. If she was something else before, maybe she could be again.", stat: "Empathy", dc: 9 },
        Deflect: { text: "That's a dangerous question to answer honestly. Why are you really asking?", stat: "Cunning", dc: 13 },
        Endure: { text: "I'd leave it as it is. The sea isn't mine to change.", stat: "Discipline", dc: 11 },
      },
    },
    {
      npcLine: "Nereus nods. Slowly. The nod of a man who has heard a thousand answers to this question and remembers every one.\n\n\"One more thing.\" His voice changes. It sounds like deep water — not the surface kind, the kind that has weight and darkness and things moving in it that have never seen the sun.\n\n\"When you reach the mountain at the end of your journey... tell my brother I said hello.\"",
      options: {
        Assert: { text: "Your brother? Who are you, really?", stat: "Courage", dc: 10 },
        Reason: { text: "You're not a fisherman. You never were.", stat: "Wisdom", dc: 9 },
        Empathize: { text: "Thank you for bringing me across. Whatever you are.", stat: "Empathy", dc: 8 },
        Deflect: { text: "I'll deliver the message. But I want to know who's sending it.", stat: "Cunning", dc: 12 },
        Endure: { text: "I will. I don't need to know more than that.", stat: "Discipline", dc: 10 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Nereus smiles. And for one breath — just one — his eyes are the color of the deep ocean. Not brown. Not grey. The blue-black of water that goes down forever.\n\n\"You'll do,\" he says. \"Tell Zeus — tell my brother — that his daughter understands the sea.\"\n\nHe touches the water with one finger. Just a touch — the way you'd tap a sleeping dog to let it know you're there.\n\nThe strait ahead goes still. Not calm — *still*. As if the water itself is holding its breath.\n\nYou blink. The old man is just an old man again. Cracked hands. Weathered face. A fishing boat that looks like driftwood.\n\nBut the water remembers. You can feel it.",
      statChanges: { Wisdom: 2, Empathy: 1 },
      reputation: { gods: 2 },
      flags: { impressedPoseidon: true, poseidonBlessing: true },
    },
    draw: {
      text: "Nereus nods. \"You're not ready to hear everything,\" he says. His voice is gentle — not disappointed. Patient. The patience of tides.\n\n\"But you listened. That's more than most.\"\n\nThe crossing begins. The water is rough but not hostile — as if something vast is testing you but hasn't decided to be unkind about it.",
      statChanges: { Wisdom: 1 },
      reputation: { gods: 1 },
      flags: { metPoseidon: true },
    },
    lose: {
      text: "Nereus shakes his head. Gently — the way the sea shakes a boat it isn't trying to sink.\n\n\"You speak before you hear,\" he says. \"The sea punishes that.\"\n\nThe crossing begins. It's harder than it needed to be — the currents fight the tiller, the spray stings like it means to. Something is displeased.\n\nBut you survive. And you'll carry what he said longer than you carry the bruises.",
      statChanges: {},
      flags: { metPoseidon: true },
    },
  },
};

// ── Memory Echo ──
export const ch4Echo = {
  fragments: [
    "Olympus — white stone above the clouds",
    "Your blood hums like a plucked string",
    "The sea parts and whispers your name",
    "His brother's eyes in an old man's face",
    "She carries the storm inside her",
  ],
  correctOrder: [0, 2, 4, 1, 3],
  baseDC: 13,
  dreamText: "The vision is clearer than it's ever been — almost too clear, like looking at the sun through thin cloth.\n\nOlympus. Real. Solid. White stone above the clouds, shining with a light that doesn't come from the sun. The sea below it reaches upward, and something in your blood reaches with it — a hum, a pull, like a compass finding north.\n\nA voice — the same voice, deeper now: \"She carries the storm inside her.\"\n\nThe vision holds for three heartbeats. Then it breaks. But the hum in your blood doesn't stop. Not completely. Not anymore.",
  nightmareText: "A churning whirlpool. You're inside it — not on the surface, below. Descending in slow circles through water that glows faintly green.\n\nSomething at the bottom is waiting. Not a monster. Not a god. Something between — vast and patient and old. It doesn't reach for you. It doesn't need to.\n\nIt knows you're coming.",
};

// ── Oath: Oath of the Sea ──
export const ch4OathOpportunity = {
  oathId: "oathOfTheSea",
  condition: {},
  narrativeSetup: "After the crossing, the captain — whoever they were — stands at the bow and looks back at the strait. The water is calm now, impossibly calm, as if it's pretending the last few hours didn't happen.\n\n\"The sea giveth and the sea taketh,\" they say. Not a proverb — a fact, stated the way you'd state the color of the sky.\n\n\"If you swear never to harm a sailor — never, no matter the circumstance — the sea will remember. It will help you when you need it most.\"\n\nThey hold out their hand. This isn't a handshake. It's an oath. You can feel the weight of it in the air between your palms — heavy, salt-scented, ancient. The sea is listening.",
  oracleExplanation: "An oath to the sea is an oath to Poseidon, whether you know it or not. Sailors who keep this oath find that storms bend around their ships and currents carry them true. Those who break it... the sea has a long memory. Longer than stone. Longer than grudges. Longer than gods.",
};

// ── Dream/Camp ──
export const ch4DreamData = {
  campDescription: "The Sicilian night wraps around you — warm, fragrant with wild thyme and something sweeter you can't name. You camp on a bluff overlooking the sea. The strait is behind you now, a dark line between two darker landmasses. The stars are different here — closer, brighter, as if someone polished them for your arrival.",
  dreamText: "The dream takes you above the water. Not flying — rising. As if the air itself decided to carry you.\n\nBelow, the strait shimmers in moonlight. Scylla's heads wave like seaweed — slow, gentle, almost beautiful from this height. From above, she looks small. Almost sad. A creature trapped in a shape she didn't choose.\n\nThe dream shifts. Olympus. Wreathed in clouds that glow from within. A door — bronze, vast, carved with symbols that move. Your name is above it. Not written. *Carved*. As if it's always been there.\n\nYou reach for the handle. You almost touch it.\n\nThen you wake. The stars have moved. The fire is embers. And your hand is still reaching.",
  nightmareText: "Water everywhere. Not drowning — dissolving. Your edges softening, your fingers becoming current, your thoughts spreading outward into salt and foam.\n\nA voice, vast as the tide: \"This is what happens if you fail.\"\n\nYou wake dry. On solid ground. Heart hammering.\n\nBut the feeling lingers — the feeling of being *poured* into something larger than yourself. It wasn't entirely frightening. And that's the part that frightens you.",
  communeText: "Kira's message carved into the tree echoes in your mind as the fire crackles. \"I know what we are.\"\n\nYou sit with your knees pulled up and turn the words over like the trident shard in your pocket. *What we are.* Not what *I* am. What *we* are. She included you.\n\nThe stars offer no answers. But the question itself feels like a door — and you're standing in front of it, deciding whether to knock.",
  communeStatChanges: { Wisdom: 1 },
};

// ── Ticker Messages ──
export const ch4TickerMessages = [
  { condition: { flag: "impressedAtSea" }, text: "Stories spread of a young hero who faced Scylla and walked away untouched. Sailors raise a cup to her name." },
  { condition: { flag: "defeatedDrako" }, text: "Lycon's influence wanes. His agents have been recalled from three cities. The name costs more than it's worth." },
  { condition: { flag: "impressedPoseidon" }, text: "The seas around Sicily are calm — unnaturally calm. Fishermen leave offerings and don't ask why." },
  { condition: {}, text: "Mount Etna rumbles in its sleep. The Sicilians say Typhon stirs beneath — the monster who almost killed Zeus." },
  { condition: { flag: "foundNemesisCamp" }, text: "A girl matching Kira's description was seen heading west along the coast. She was asking about a garden." },
];
