/**
 * Chapter 3 Expanded Data — New systems content for "The City of Corinth"
 * Adds: Prophecy pool, Encounters (warehouse/saboteur), Exploration nodes,
 * Dialogue duel (convergence woman), Memory echo, Oath opportunity,
 * Dream/Camp, Nemesis (major), Prophecy reveal, Ticker messages
 */

import { PROPHECY_POOL } from "../engine/prophecy";

// ── Prophecy Pool ──
export const ch3ProphecyPool = [
  PROPHECY_POOL.ch3_fork,
  PROPHECY_POOL.ch3_name,
  PROPHECY_POOL.ch3_rival,
];

// ── Encounter: Warehouse Confrontation (Mira path) ──
export const ch3EncounterWarehouse = {
  title: "The Warehouse Guards",
  enemyName: "Aldric's Men",
  image: "🏭",
  atmosphere: "The warehouse door is ironwood, scarred with nail marks. Two men stand in front of it — dock workers by their hands, hired muscle by their posture. The alley smells of salt and old rope.",
  baseDC: 13,
  woundSource: "warehouse",
  choices: [
    {
      prompt: "Two men. One door. They see you coming. Neither moves aside.",
      timer: 10,
      options: [
        { text: "Tell them you're here for the girl. Make it clear you're not leaving.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Act like a delivery runner. Walk like you belong.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Circle the building. Find another way in.", stat: "Cunning", statChanges: { Cunning: 1 } },
      ],
    },
    {
      prompt: "A hand grabs your arm. Rough grip. 'Kid, you don't want to be here.'",
      timer: 10,
      options: [
        { text: "Twist free. Push past. Speed matters now.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Shout Mira's name. Let her know someone came.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Go limp. Dead weight. Hard to hold.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
      ],
    },
    {
      prompt: "You're inside. Dark. Crates stacked high. Footsteps behind you. Mira is somewhere in the back.",
      timer: 10,
      options: [
        { text: "Knock a shelf across the aisle. Block him. Buy time.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Turn and face him. You're done running.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Call for Mira. Trust she'll find you.", stat: "Empathy", statChanges: { Empathy: 1 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "You move through the warehouse like you've done this a hundred times — ducking between crates, reading the shadows, trusting your feet. The guards never lay a hand on you.\n\nMira is standing in the back room, arms crossed, package tucked under one elbow. Completely calm.\n\n\"Took you long enough,\" she says.",
      statChanges: { Courage: 1, Cunning: 1 },
      reputation: { commonPeople: 1 },
      flags: { clearedWarehouse: true },
    },
    success: {
      text: "You get past the guards with a few bruises that will color by morning. Mira is in the back room, safe, the package held against her chest like armor.\n\n\"I wasn't scared,\" she says. Her chin is up. Her eyes are dry.\n\nShe wasn't.",
      statChanges: { Courage: 1 },
      reputation: { commonPeople: 1 },
      flags: { clearedWarehouse: true },
    },
    partial: {
      text: "You get through, but it costs you. A cut on your forearm — stinging, shallow, bleeding more than it should. Mira helps you up when you find her.\n\n\"Are you the rescuer?\" she asks, looking at the blood on your arm.\n\n\"You should see the other guy,\" you say.\n\nYou shouldn't.",
      statChanges: {},
      flags: { clearedWarehouse: true },
    },
    fail: {
      text: "The guards push you back into the alley. You land on cobblestones, palms stinging.\n\nBut your shouting was heard. Five minutes later, Mira walks out the warehouse door on her own, package in hand, back straight.\n\n\"I was about to leave anyway,\" she says. Then, softer: \"But thank you for trying. Most people don't.\"",
      statChanges: { Empathy: 1 },
      flags: { clearedWarehouse: false },
    },
  },
};

// ── Encounter: Arena Saboteur (Castor path) ──
export const ch3EncounterSaboteur = {
  title: "The Saboteur Caught",
  enemyName: "Theron",
  image: "🏟️",
  atmosphere: "Dawn at the equipment storage. Cold sand underfoot. The training ground is empty except for you and the person you came to find. Theron is already here — and he knows why.",
  baseDC: 12,
  woundSource: "saboteur",
  choices: [
    {
      prompt: "Theron sees you. His face shuts like a door. 'I don't know what you're talking about.'",
      timer: 10,
      options: [
        { text: "Block his path. You're not done.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Show him the evidence. Let the facts do it.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
        { text: "Tell him you understand why. But it has to stop.", stat: "Empathy", statChanges: { Empathy: 1 } },
      ],
    },
    {
      prompt: "Theron turns aggressive. Steps toward you. 'You're an outsider. This isn't your business.'",
      timer: 10,
      options: [
        { text: "Stay calm. His anger is proof, not a threat.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Match him. 'Sabotage isn't sport. That's everyone's business.'", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Step back. Let him cool. Time is yours.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
      ],
    },
    {
      prompt: "Theron is cornered. Eyes darting. Deciding whether to run or talk.",
      timer: 10,
      options: [
        { text: "Give him a way out. 'Return the sandals. Nobody has to know.'", stat: "Empathy", statChanges: { Empathy: 1 } },
        { text: "Block the exit. This gets resolved here.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Call the trainer. This needs a witness.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "Theron breaks. Not dramatically — quietly, the way things break when they've been cracking for a long time.\n\nHe retrieves the sandals from behind a storage rack. His hands are shaking.\n\n\"I trained him,\" he says. Not to you, really. To the wall. To himself. \"And he passed me in six months. Six months.\"\n\nThe sandals are returned. Castor never finds out who took them. That was Theron's choice — and yours.",
      statChanges: { Wisdom: 1, Empathy: 1 },
      flags: { exposedTheron: true, sandalsReturned: true },
    },
    success: {
      text: "Theron returns the sandals reluctantly — holding them out at arm's length, like giving back something he stole from himself.\n\nHe knows it's over. The trainer will find out. But from Theron himself, not from you.\n\nThat was his last choice in this, and he made it.",
      statChanges: { Courage: 1 },
      flags: { exposedTheron: true, sandalsReturned: true },
    },
    partial: {
      text: "Theron doesn't return the sandals. He doesn't deny it either — just stands there with his jaw working, caught between who he was and what he did.\n\nYou tell the trainer. The sandals are found hidden behind a rack. Justice is served — but messier than you wanted, with none of the clean edges you imagined.",
      statChanges: {},
      flags: { exposedTheron: true },
    },
    fail: {
      text: "Theron pushes past you and is gone before you can react. The storage room is empty.\n\nBut you know the truth now. You tell the trainer everything — names, motives, the record that Castor broke. It takes longer this way. But the sandals are eventually found, and the truth follows them out.",
      statChanges: {},
      flags: { exposedTheron: false },
    },
  },
};

// ── Exploration Nodes (Corinth, before fork) ──
export const ch3ExplorationNodes = {
  title: "The City of Corinth",
  description: "Corinth stretches around you — loud, alive, layered like a cake made of noise and ambition. Before you choose which path to take tonight, there's time to explore. Two places. Choose well.",
  picks: 2,
  nodes: [
    {
      id: "the_docks",
      name: "The Docks",
      icon: "⚓",
      hint: "Salt air and the sound of ropes under strain. Sailors from across the sea, speaking in languages you've never heard.",
      type: "scene",
      content: {
        text: "The docks are beautiful chaos — sailors hauling cargo up gangplanks, merchants arguing with their whole bodies, a woman on the prow of a painted ship singing in a language that sounds like water over stones.\n\nTwo sailors from a vessel called the Argo are sitting on coiled rope, talking about the weather with the seriousness of people whose lives depend on it.\n\n\"Something's wrong on Olympus,\" one says, spitting into the harbor. \"The winds change direction three times a day. My captain says the gods are arguing.\"\n\nThe other nods, scratching salt from his beard. \"My grandmother says when the weather goes mad, it means someone important is coming home.\" He pauses. \"Or leaving.\"",
        statChanges: { Wisdom: 1 },
        feedback: "The sailors' gossip sits in your mind like a burr. Strange weather. Gods arguing. Someone coming home — or leaving.\n\nYou file it away in the place where you keep things you don't understand yet but might need later.",
        lesson: "People on the edges of the world — sailors, shepherds, border guards — notice things that people in the center miss. Their information isn't lesser. It's different. And different is sometimes exactly what you need.",
        setsFlags: { heardDocksGossip: true },
      },
    },
    {
      id: "the_library",
      name: "The Library",
      icon: "📚",
      hint: "A quiet stone building behind the marketplace. The door is open. The silence inside has weight.",
      type: "scene",
      content: {
        text: "The library smells of cedar and old papyrus — the particular smell of knowledge being kept safe. A young scribe with ink-stained fingers helps you find what you're looking for: stories about the gods and their children.\n\nOne scroll in particular catches your eye. The papyrus is old and damaged at the edges, brown with age, but the words are clear enough:\n\n'...sent away at birth to protect them from divine jealousy...'\n\n'...the blood manifests slowly, through choices that reveal the divine parent's nature...'\n\n'...not all find their way home. Some choose not to.'\n\nThe scribe watches you read it. \"Interesting choice,\" she says, carefully neutral. \"Most travelers ask for maps.\"",
        statChanges: { Wisdom: 2 },
        worldStateChanges: { divineFavor: 1 },
        feedback: "The scroll's words follow you out of the library and into the street, where the sun is too bright and the noise is too loud and nothing looks the same as it did an hour ago.\n\nChildren of the gods, hidden among mortals. Blood that manifests through choices. Not all find their way home.\n\nA warmth blooms in your chest that has nothing to do with the afternoon sun.",
        lesson: "The most important information doesn't always announce itself. Sometimes it sits quietly on a shelf, in a damaged scroll that most people walk past, waiting for the right person to read it.",
        setsFlags: { readLibraryScroll: true },
      },
    },
    {
      id: "the_arena",
      name: "The Arena",
      icon: "🏟️",
      hint: "Cheering from the athletics ground. The sound of feet on packed sand. The games are coming.",
      type: "scene",
      content: {
        text: "The athletics ground hums with energy — young runners cutting laps, wrestlers circling each other in the sand pit, spectators calling out bets and encouragements that blend into one continuous roar.\n\nYou spot a boy about your age on the track — intense, focused, running practice laps with a form so clean it looks like the movement was invented for him. A trainer watches with his arms crossed, shaking his head in slow admiration.\n\n\"That's Castor,\" someone tells you. \"He's going to win. Nobody can touch him.\"\n\nCastor finishes his lap and notices you watching. He nods — one serious person recognizing another. No words needed. A look that says: *I see you seeing me. We're the same kind of creature.*",
        statChanges: { Discipline: 1 },
        feedback: "You've seen Castor now — seen him move, seen the discipline in every stride. If his name comes up later, you won't be meeting a stranger. You'll be meeting someone whose work you've already witnessed.",
        lesson: "Observing someone in their element tells you more about them than any introduction could. Castor didn't need to speak. His discipline spoke for him — in every stride, every turn, every breath.",
        setsFlags: { metCastorEarly: true },
      },
    },
    {
      id: "underground_market",
      name: "The Underground Market",
      icon: "🕳️",
      hint: "A narrow alley off the main street. A boy at the entrance catches your eye. 'Want to see the real market?' he says.",
      type: "scene",
      reputationGate: { faction: "underworld", min: -5 },
      content: {
        text: "The underground market is exactly what it sounds like — a marketplace beneath the city, in tunnels so old they predate Corinth itself. The stone is worn smooth by centuries of feet. Torches flicker in brackets, throwing shadows that jump and dance.\n\nThe goods down here are unusual. Relics of uncertain origin. Information with price tags. Services that don't have official names.\n\nA woman with elaborate braids and a scar across her knuckles approaches you. \"New face,\" she says, head tilted, eyes sharp. \"What are you looking for?\"\n\nShe doesn't seem hostile. More like a shopkeeper sizing up a customer — figuring out which shelf you belong on.",
        choices: [
          {
            text: "Ask about Lycon. What does the underground know about him?",
            statChanges: { Cunning: 1, Wisdom: 1 },
            reputationChanges: { underworld: 1 },
            feedback: "She laughs — a sound like coins dropping. \"Lycon? Everyone knows Lycon down here. He borrows from our people and never pays back. Thinks his name is a shield.\"\n\nShe leans in. She tells you three things about Lycon's operations that even Drako probably doesn't know. You don't ask how she knows. That's not how it works down here.\n\n\"Information's free the first time,\" she says. \"Consider it a welcome gift.\"",
            lesson: "Information has different values in different markets. What's hidden in the official world is common knowledge in the underground — and the reverse is equally true. The world has layers, and each layer has its own experts.",
            setsFlags: { learnedUnderworldSecrets: true },
          },
          {
            text: "Just look around. See what this place is.",
            statChanges: { Wisdom: 1 },
            reputationChanges: { underworld: 1 },
            feedback: "You browse for twenty minutes. You don't buy anything. But you learn that Corinth has layers you never imagined — and that some of the people down here aren't criminals. They're people the city above doesn't make room for. Families. Craftsmen. A woman selling medicine that the official healers won't stock.\n\nThe underground isn't lawless. It has its own laws. They're just different ones.",
            lesson: "Systems create outsiders. Not everyone outside the law chose to be there. Understanding this doesn't mean endorsing everything that happens in the shadows — it means seeing the full picture, including the parts the city would rather you didn't.",
            setsFlags: { exploredUnderground: true },
          },
        ],
      },
    },
  ],
};

// ── Dialogue Duel: Convergence Woman ──
export const ch3DialogueDuel = {
  title: "The Woman Who Knows Your Name",
  npcName: "Helena",
  npcTitle: "A woman of influence",
  baseResolve: 10,
  maxRounds: 3,
  resistances: ["Deflect"],
  vulnerabilities: ["Assert", "Empathize"],
  rounds: [
    {
      npcLine: "Helena leans forward. The merchant's table between you feels like a negotiating line — territory neither of you has claimed yet.\n\n\"I've heard three versions of what happened at the Temple of Apollo,\" she says. \"I want the fourth — yours. But first, convince me it's worth my time. There are many young heroes on roads.\"",
      options: {
        Assert: { text: "I didn't come to convince you. I came because you asked. That's your answer.", stat: "Courage", dc: 11 },
        Reason: { text: "You've been waiting for me specifically. That means you already think it's worth your time.", stat: "Wisdom", dc: 12 },
        Empathize: { text: "You want to know if I'm real. Not a story, not a rumor — a real person. So do I.", stat: "Empathy", dc: 10 },
        Deflect: { text: "Tell me what the other three versions said first. Then I'll tell you which one was closest.", stat: "Cunning", dc: 14 },
        Endure: { text: "Take your time. I'm not in a hurry.", stat: "Discipline", dc: 12 },
      },
    },
    {
      npcLine: "Helena's expression shifts — the guard dropping, the curiosity rising. She picks up her wine cup for the first time, turns it in her fingers without drinking.\n\n\"The world is full of people who act on impulse and call it courage. What makes you different?\"",
      options: {
        Assert: { text: "I don't know if I'm different. I just didn't want to be the person who walked past.", stat: "Courage", dc: 10 },
        Reason: { text: "Impulse doesn't ask questions afterward. I'm here. Still asking. That's the difference.", stat: "Wisdom", dc: 12 },
        Empathize: { text: "I'm not sure I am different. But I'm trying to be someone I can live with. Isn't that what everyone wants?", stat: "Empathy", dc: 10 },
        Deflect: { text: "What makes you different, Helena? You're testing strangers instead of acting yourself.", stat: "Cunning", dc: 15 },
        Endure: { text: "I don't have an answer to that yet. I might never. But I'm not done looking.", stat: "Discipline", dc: 12 },
      },
    },
    {
      npcLine: "Helena reaches for a folded note on the table. Her hand hovers — not hesitating, deciding. The difference is subtle but real.\n\n\"One last thing. Why should I help you? What do you actually want?\"",
      options: {
        Assert: { text: "I want to keep going. That's all. I don't need your help — but I won't refuse it.", stat: "Courage", dc: 10 },
        Reason: { text: "You already decided to help. This question is for you, not me. You want to know if your instinct was right.", stat: "Wisdom", dc: 11 },
        Empathize: { text: "I want to matter. Not to be famous — just to have done something that mattered. I think you understand that.", stat: "Empathy", dc: 9 },
        Deflect: { text: "The better question is what do you want, Helena? You went to a lot of trouble to find me.", stat: "Cunning", dc: 14 },
        Endure: { text: "I don't know yet. But I'm going to find out.", stat: "Discipline", dc: 12 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Helena slides the note across the table. Her hand is steady.\n\n\"This will end Lycon's interest in you. He responds to pressure from multiple sources — this makes three.\"\n\nShe stands. Straightens the fall of her clothing with the precise attention of someone who controls how she's seen.\n\n\"You're going somewhere, young hero. I don't know where. But I intend to find out.\"\n\nAt the edge of the square, she pauses. \"The road south leads to the sea. Be careful. The world gets larger from here.\"",
      statChanges: { Wisdom: 1, Courage: 1 },
      reputation: { nobles: 1 },
      flags: { impressedHelena: true, receivedHelenaNote: true },
    },
    draw: {
      text: "Helena considers you. The note stays on the table between you — close enough to reach, far enough to mean something.\n\n\"Come back when you know what you want,\" she says.\n\nShe doesn't seem disappointed. More like she's invested in something that hasn't matured yet — a seed she's decided to water, but only once.",
      statChanges: { Wisdom: 1 },
      flags: { drewWithHelena: true },
    },
    lose: {
      text: "Helena stands. She picks up the note and folds it into her sleeve with the ease of someone who does this often.\n\n\"You're interesting,\" she says. \"But interesting isn't enough yet.\"\n\nShe pauses at the edge of the table. \"The road south leads to the sea. That's free advice — no strings.\"\n\nShe leaves you with your thoughts, a cold cup of wine, and the feeling of a door that didn't close all the way.",
      statChanges: {},
      flags: { lostToHelena: true },
    },
  },
};

// ── Memory Echo (after convergence) ──
export const ch3Echo = {
  fragments: [
    "Columns of white stone, impossibly high",
    "A man whose hands glow like broken sky",
    "Something small, wrapped in cloud-wool",
    "Hide her — quickly",
    "They must not know",
  ],
  correctOrder: [0, 3, 4, 1, 2],
  baseDC: 14,
  dreamText: "The vision is clearer this time — sharper, like someone wiped fog from glass.\n\nA temple. Columns so tall they disappear into cloud. A man whose hands crackle with light — not fire, not lightning, something between. He's holding something small against his chest. A cradle? No — a bundle, wrapped in something that moves like mist.\n\nWords, urgent: \"Hide her. They must not know.\"\n\nWhose cradle? Whose child?\n\nThe vision breaks. But this time, pieces stay — like light burned into the backs of your eyelids. You can still see the glow of his hands.",
  nightmareText: "The vision comes jagged — a shattered mirror showing pieces that don't line up. A voice screaming, but from far away, as if through water. The smell of ozone — sharp, clean, the smell of air after lightning splits it open.\n\nSomething hiding. Not from you — *for* you.\n\nYou wake with the feeling of being held by hands made of light. It fades. But slowly. Slower than before.",
};

// ── Oath Opportunity: Oath of Return (Niko) ──
export const ch3OathOpportunity = {
  oathId: "oathOfReturn",
  condition: { flag: "madeAllyOfNiko" },
  narrativeSetup: "Before you leave Corinth, Niko finds you at the gate. He's trying to look casual and failing spectacularly — hands in pockets, shoulders too high, a grin that keeps sliding off his face.\n\n\"I know you're going somewhere important,\" he says. \"I won't ask where. But —\"\n\nHe holds out his hand. Not for a handshake. For a promise.\n\n\"Promise me you'll come back? Or at least try?\"\n\nThis isn't a contract. It's a kid asking a friend not to disappear. The simplest and hardest kind of promise there is.",
  oracleExplanation: "An oath freely given to a friend weighs more than a contract signed under pressure. Niko isn't asking for a guarantee — he's asking if you value what you've built here enough to try to come back to it. The answer to that question will follow you farther than you think.",
};

// ── Dream/Camp ──
export const ch3DreamData = {
  campDescription: "The city inn is warm and noisy below, but your room is quiet. You sit by the window and watch Corinth settle into evening — lights appearing in windows like eyes opening, the harbor going dark, the last merchants packing up in the square. The city breathes out.",
  dreamText: "The dream comes again — and this time, you almost recognize it.\n\nA lullaby made of thunder. Low, vast, careful — like something enormous trying to be gentle. A face. Yours, but so much younger. Tiny. A blanket that isn't cloth — it moves like cloud, like mist with weight.\n\nSomeone saying: \"She'll be safe. They won't look for her there.\"\n\nAnother voice, breaking: \"How long?\"\n\n\"As long as it takes.\"\n\nYou wake. The thunder-lullaby fades. But the voices linger — and for the first time, you're certain you've heard them before. Not in a dream. Before that.",
  nightmareText: "Shadows again. But this time they have faces — not angry faces. Worried ones. Something vast is looking for you. Not to hurt you. To find you.\n\nThe difference matters more than you can explain.",
  communeText: "Niko sits on the floor of your room, cross-legged, talking about the city at night — the underground market, Helena, the ships that leave at dawn and where they go. He asks you nothing about your journey. He doesn't need to know.\n\nHe just wants to be near someone who's going somewhere. You understand that more than you expected to.",
  communeStatChanges: { Empathy: 1 },
};

// ── Ticker Messages ──
export const ch3TickerMessages = [
  { condition: { flag: "defeatedBandits" }, text: "Bandits on the Delphi road have scattered. Travelers pass safely again." },
  { condition: { flag: "defeatedDrako" }, text: "Lycon's agent Drako has left Corinth quietly. Word is he's been reassigned — or dismissed." },
  { condition: { flag: "readLibraryScroll" }, text: "The Corinth library reports unusual interest in old scrolls about divine children. The scribe remembers your face." },
  { condition: {}, text: "The winds over the Isthmus blow in circles. Sailors say Olympus stirs. The gods are restless." },
  { condition: { flag: "liedToLyconsAgent" }, text: "Lycon's men are searching Thebes for someone who doesn't exist. A name you gave them." },
];
