/**
 * Chapter 2 Expanded Data — New systems content for "The Road from Delphi"
 * Adds: Prophecy pool, First encounter (bandits), Exploration nodes,
 * Dialogue duel (inn deal), Dream/Camp, Nemesis sighting, Ticker messages
 */

import { PROPHECY_POOL } from "../engine/prophecy";

// ── Prophecy Pool ──
export const ch2ProphecyPool = [
  PROPHECY_POOL.ch2_figure,
  PROPHECY_POOL.ch2_follower,
  PROPHECY_POOL.ch2_soldier,
];

// ── First Encounter: Road Bandits ──
export const ch2Encounter = {
  title: "Desperate Men on the Road",
  enemyName: "Road Bandits",
  image: "⚔️",
  atmosphere: "Three men step from the tree line. Ragged cloaks, cracked sandals, a rusted blade catching the sun. They don't look evil. They look like people who ran out of better options last week.",
  baseDC: 12,
  woundSource: "bandits",
  choices: [
    {
      prompt: "They fan out across the road. The leader raises a blade. Your heartbeat fills your ears.",
      timer: 15,
      options: [
        {
          text: "Stand tall and tell them to move aside.",
          stat: "Courage",
          statChanges: { Courage: 1 },
        },
        {
          text: "Look for an opening — a gap to slip through.",
          stat: "Cunning",
          statChanges: { Cunning: 1 },
        },
        {
          text: "Hold still. Let them come to you. Wait.",
          stat: "Discipline",
          statChanges: { Discipline: 1 },
        },
      ],
    },
    {
      prompt: "The leader lunges. His blade cuts the air. The other two circle wide.",
      timer: 15,
      options: [
        {
          text: "Dodge low and push past. The road is what matters.",
          stat: "Cunning",
          statChanges: { Cunning: 1 },
        },
        {
          text: "Block the blow. Shout a warning. Make it loud.",
          stat: "Courage",
          statChanges: { Courage: 1 },
        },
        {
          text: "Drop and sweep his legs. Use his weight against him.",
          stat: "Discipline",
          statChanges: { Discipline: 1 },
        },
      ],
    },
    {
      prompt: "It's ending. One bandit is on the ground, holding his ribs. He's done. No threat left in him.",
      timer: 15,
      options: [
        {
          text: "Help him up. He's hurt. This is over.",
          stat: "Empathy",
          statChanges: { Empathy: 1 },
        },
        {
          text: "Demand answers. Why are they robbing travelers?",
          stat: "Wisdom",
          statChanges: { Wisdom: 1 },
        },
        {
          text: "Walk away. You've won. That's enough.",
          stat: "Discipline",
          statChanges: { Discipline: 1 },
        },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "They scatter before you even reach for a weapon. Something in the way you moved — the way you *didn't* flinch — told them this was already over.\n\nThe leader drops his blade in the dirt and runs without looking back. You stand in the quiet road and breathe.\n\nA few coins lie where they stood. Not enough to fight over. Enough to tell you how desperate they were.",
      statChanges: { Courage: 1 },
      reputation: { commonPeople: 1 },
      flags: { defeatedBandits: true },
    },
    success: {
      text: "The fight is short. The bandits retreat into the trees, nursing bruises and split lips. None of them were real fighters — just hungry people who made a bad decision on a bad day.\n\nThe leader calls over his shoulder as he runs: \"Lycon's taxes took everything. We had no choice.\"\n\nHis voice cracks on the last word. Something about it tells you he believes it.",
      statChanges: {},
      reputation: { commonPeople: 1 },
      flags: { defeatedBandits: true },
    },
    partial: {
      text: "You hold your own, but it's close. One of them gets a hit in — your arm lights up with pain, hot and sudden, before you drive them back.\n\nNothing's broken. You'll bruise.\n\nAs they flee, the youngest bandit — barely older than you — looks back. The look on his face isn't hatred. It might be shame. Like he just saw himself through someone else's eyes and didn't recognize what he'd become.",
      statChanges: {},
      flags: { defeatedBandits: true },
    },
    fail: {
      text: "They overwhelm you. Your satchel tears open, supplies scatter in the dirt, and by the time you get your footing they've taken what they could carry and vanished into the pines.\n\nYou sit on the road, breathing hard. Bruised. Alive.\n\nThey weren't trying to kill you. Just survive. Knowing that makes it worse, somehow.",
      statChanges: { Courage: -1 },
      flags: { defeatedBandits: false },
    },
  },
};

// ── Exploration Nodes (after figure scene) ──
export const ch2ExplorationNodes = {
  title: "The Road Beyond Corinth",
  description: "The road branches through terraced farmland and low scrubby hills. The air smells of dried thyme and turned earth. Four places catch your eye along the way. You have time to visit two before the light starts to change.",
  picks: 2,
  nodes: [
    {
      id: "abandoned_farm",
      name: "The Abandoned Farm",
      icon: "🏚️",
      hint: "A farmhouse with its door hanging open. Fresh footprints in the dust, all pointed away.",
      type: "scene",
      content: {
        text: "The farm has been abandoned — but recently. The door stands open like a mouth mid-sentence. Inside, food is still on the table: bread going stale, a cup of wine with a fly drowning in it. Someone left in the middle of a meal.\n\nA notice is nailed to the door post. It bears Lycon's seal — the golden bull.\n\nDEBT OWED. PROPERTY SEIZED.\n\nThe family who lived here lost everything to a nobleman's loan. The footprints in the dust all point toward Corinth, where Lycon's agents collect what's owed.",
        statChanges: { Wisdom: 1 },
        reputationChanges: {},
        feedback: "You stand in someone's abandoned life for a while. The table is set for three. One of the chairs is small — a child sat here. Ate here. Drew something in the dust on the table that no one wiped away.\n\nThis is what power looks like from the other side of it.",
        lesson: "Understanding what distant decisions do to real, specific people is a form of Wisdom that changes how you see everything. This farm is a story — and it's connected to yours now.",
        setsFlags: { sawAbandonedFarm: true, learnedAboutLyconDebt: true },
      },
    },
    {
      id: "riverside_wrestlers",
      name: "The Riverside Wrestlers",
      icon: "💪",
      hint: "Laughter and splashing from the riverbank. The sound of people training hard and enjoying it.",
      type: "scene",
      content: {
        text: "A group of young athletes is training in the shallows of a wide, clear river — wrestling, racing, throwing flat stones at targets chalked on boulders. They're from Corinth, getting ready for the seasonal games.\n\nThe water flashes in the sun. Someone gets thrown and comes up laughing.\n\nA broad-shouldered girl with a grin like a drawn bow spots you watching. \"Want to try?\" she calls. \"We're short one for pairs.\"",
        choices: [
          {
            text: "Jump in and wrestle. Nothing like testing yourself.",
            statChanges: { Courage: 1, Discipline: 1 },
            reputationChanges: { commonPeople: 1 },
            feedback: "You lose. Badly. The broad-shouldered girl puts you down three times in a row, and the third time you hit the water so hard you see stars.\n\nBut you get up every time. And by the third fall, the athletes have stopped laughing *at* you and started cheering *for* you.\n\n\"Come back after your quest,\" the girl says, pulling you to your feet. \"We'll teach you the hold that just beat you.\"\n\nYou made three friends in twenty minutes. Your shoulder will hurt for two days. Worth it.",
            lesson: "Being willing to fail in front of strangers — and get back up — is one of the purest forms of courage. These athletes didn't measure you by whether you won. They measured you by how many times you stood back up.",
            setsFlags: { wrestledByRiver: true },
          },
          {
            text: "Watch and learn first. Study their technique.",
            statChanges: { Wisdom: 1, Cunning: 1 },
            feedback: "You watch for twenty minutes from the bank. The broad-shouldered girl uses her hips more than her arms. The tall boy overcommits on his right side. The small one is faster than anyone expects.\n\nWhen you finally step in, you last three times longer than anyone expected. The girl narrows her eyes. \"Quick study,\" she says. Not annoyed. Impressed.\n\nYou trade stories afterward. They know the roads ahead — which bridges are out, where the springs are. That information is worth more than the wrestling.",
            lesson: "Watching before joining gives you information that enthusiasm can't. You entered the ring prepared, and it showed — not just in the fight, but in what you learned after.",
            setsFlags: { wrestledByRiver: true },
          },
        ],
      },
    },
    {
      id: "fortune_teller",
      name: "The Fortune Teller",
      icon: "🔮",
      hint: "A tent of faded cloth by the road, trailing cheap incense. A hand-painted sign reads: YOUR FUTURE, REVEALED.",
      type: "scene",
      content: {
        text: "The fortune teller is almost certainly a fraud. Her tent smells of lamp oil and incense that's been relit too many times. Beaded curtains click in the breeze. She peers at you through rings of kohl.\n\n\"Cross my palm with a coin,\" she says, voice pitched for drama, \"and I will reveal your destiny.\"\n\nYou don't have coins to spare. But something about the way she looks at you is strange — she's performing for the road, but her eyes are genuinely curious. Like she's seeing something she didn't expect.\n\nShe leans forward. The performance drops.\n\n\"I'll tell you one thing for free,\" she says. Her voice is different now — smaller, realer. \"In the city ahead, you'll have to choose between two people who need help. You can only save one.\"\n\nShe blinks. \"That part is real. I don't know how I know it, but I do.\"",
        statChanges: { Wisdom: 1 },
        feedback: "You leave the tent unsettled. The beads click shut behind you. Was that last part real? How could she know about something that hasn't happened yet?\n\nMaybe she says it to everyone. Maybe it's a guess that lands often enough.\n\nMaybe not.\n\nThe road ahead looks different now.",
        lesson: "Sometimes truth hides in unlikely places. Dismissing everything a person says because some of it is false is its own kind of mistake. The fortune teller was mostly performing — but that last line followed you out of the tent. Pay attention to what follows you.",
        setsFlags: { metFortuneTeller: true, foreseenFork: true },
      },
    },
    {
      id: "old_soldier",
      name: "The Old Soldier",
      icon: "🛡️",
      hint: "An old man under an oak tree, polishing a bronze shield. The bronze is real — campaign-grade, not ceremonial.",
      type: "scene",
      content: {
        text: "The old soldier has been sitting under this oak for what looks like a long time. His shield is real bronze — dented, scarred, the kind that's been between someone and a blade more than once. He polishes it the way some people pray: slowly, without thinking, because the hands know the ritual.\n\nHe doesn't look up when you approach.\n\n\"Sit,\" he says. \"You look like someone going somewhere. I've been everywhere. Maybe I can save you a few mistakes.\"\n\nHe tells you about Troy — not the version in the stories, but the real one. The boredom between battles. The fear that tasted like copper in your mouth. The moments when gods walked among the soldiers and nobody was entirely sure if they were real or just exhaustion wearing a familiar face.\n\n\"I saw Athena once,\" he says, matter-of-fact as weather. \"Or I saw a very tall woman who knew exactly what to say to save my life.\" He turns the shield over, finds a new spot to polish. \"Same thing, maybe.\"",
        statChanges: { Wisdom: 1 },
        reputationChanges: {},
        worldStateChanges: { divineFavor: 1 },
        feedback: "He gives you a piece of advice. He says it the way he polishes — slowly, like he's said it before and means it every time.\n\n\"The gods don't care about the brave. They care about the honest. I've seen brave fools die a hundred times. Never seen an honest person destroyed by the gods.\"\n\nHe goes back to polishing. The oak tree drops a leaf. The conversation is over.",
        lesson: "Experience is a teacher that no book can replace. This man has stood where you're walking toward. Listening to people who've been where you're going — really listening, not just waiting to talk — is one of the wisest things you can do.",
        setsFlags: { metOldSoldier: true },
      },
    },
  ],
};

// ── Dialogue Duel: Inn Deal with Lycon's Agent ──
export const ch2DialogueDuel = {
  title: "The Agent's Offer",
  npcName: "Drako",
  npcTitle: "Lycon's Senior Agent",
  baseResolve: 8,
  maxRounds: 3,
  resistances: ["Assert"], // Drako is used to being shouted at
  vulnerabilities: ["Reason", "Empathize"], // Logic and empathy catch him off guard
  rounds: [
    {
      npcLine: "Drako slides a folded letter across the table the way someone lays down a winning hand. His fingers are ink-stained. His eyes are tired.\n\n\"This is straightforward,\" he says. \"My employer wants to know who sent you to the temple. Give me a name — any name — and this letter guarantees safe passage through every city between here and Sparta. It's a generous offer. I'd take it.\"",
      options: {
        Assert: { text: "I don't trade names for safety. Tell Lycon he's wasting his time.", stat: "Courage", dc: 14 },
        Reason: { text: "If Lycon already knows, why does he need me to confirm it? Your employer is guessing.", stat: "Wisdom", dc: 11 },
        Empathize: { text: "You're following orders from a man who doesn't care about you. Why risk yourself for his grudge?", stat: "Empathy", dc: 11 },
        Deflect: { text: "That letter is interesting. How many of those has he handed out? I'm curious what it's actually worth.", stat: "Cunning", dc: 12 },
        Endure: { text: "I'll listen to everything you have to say. Then I'll decide.", stat: "Discipline", dc: 12 },
      },
    },
    {
      npcLine: "Drako leans back. The chair creaks. He studies you the way a merchant studies a coin he suspects is counterfeit — turning you over, looking for the seam.\n\n\"You're young to be this difficult,\" he says. \"Lycon doesn't forget. He doesn't forgive, either. I'm offering you a door before this becomes a wall. Take it.\"",
      options: {
        Assert: { text: "If Lycon wants to threaten me, he can come himself. Not through you.", stat: "Courage", dc: 14 },
        Reason: { text: "A man who sends agents to threaten children on the road isn't as powerful as he thinks he is.", stat: "Wisdom", dc: 11 },
        Empathize: { text: "You've said 'Lycon' six times and your own name zero. When did you stop being your own person, Drako?", stat: "Empathy", dc: 10 },
        Deflect: { text: "This sounds like Lycon's problem. What's in it for you?", stat: "Cunning", dc: 12 },
        Endure: { text: "I'm not in a hurry. Keep talking.", stat: "Discipline", dc: 12 },
      },
    },
    {
      npcLine: "Something cracks in Drako's composure — a fissure, not a collapse. He pulls the letter back across the table. His jaw tightens.\n\n\"Last chance,\" he says. The tiredness in his voice has teeth now. \"After tonight, I can't help you. I won't be able to. Do you understand what that means?\"",
      options: {
        Assert: { text: "Then don't. I never asked for your help.", stat: "Courage", dc: 13 },
        Reason: { text: "You're giving me deadlines for a problem I didn't create. That tells me you're the one running out of options.", stat: "Wisdom", dc: 10 },
        Empathize: { text: "You don't want to do this either. I can see it. Walk away, Drako. Tell him I wasn't worth it.", stat: "Empathy", dc: 10 },
        Deflect: { text: "I think we both know that letter means nothing. Let's stop pretending.", stat: "Cunning", dc: 11 },
        Endure: { text: "I've heard everything you've said. My answer hasn't changed.", stat: "Discipline", dc: 11 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Drako stands. His composure is gone — not shattered, but emptied, like something he set down and can't pick back up.\n\nHe folds the letter carefully and puts it back in his cloak. His hands are steady. His voice is not.\n\n\"You're either very brave or very foolish,\" he says. Then, quieter — almost to himself: \"I used to be brave. Before Lycon.\"\n\nHe leaves without looking back.\n\nThe innkeeper appears with an extra bowl of stew. \"That man has been pressuring travelers for weeks,\" she says, setting it down. \"Nobody's ever out-talked him before.\"\n\nThe stew is good. You earned it.",
      statChanges: { Wisdom: 1, Courage: 1 },
      reputation: { commonPeople: 1 },
      flags: { defeatedDrako: true },
    },
    draw: {
      text: "Drako stands. He didn't get what he came for — but you didn't break him, either. He's still standing, still employed, still Lycon's.\n\n\"This isn't over,\" he says. But he says it like someone who knows it probably is.\n\nThe innkeeper watches him leave. She wipes the table where he sat as if cleaning up after something unpleasant.\n\n\"Be careful on the road tomorrow,\" she says. That's all.",
      statChanges: { Discipline: 1 },
      flags: { drewWithDrako: true },
    },
    lose: {
      text: "Drako smiles. Not cruelly — with the quiet satisfaction of someone who does this every day and is very, very good at it.\n\n\"Think about my offer overnight,\" he says. He leaves the letter on the table. Then he leaves.\n\nYou sit in the quiet inn, replaying the conversation move by move. He was better at this than you. Quicker. More prepared. He knew what you'd say before you said it.\n\nThat's a hard thing to sit with. But sitting with hard things is how you get better at them.",
      statChanges: {},
      flags: { lostToDrako: true },
    },
  },
};

// ── Dream/Camp (before agents scene) ──
export const ch2DreamData = {
  campDescription: "You find a clearing off the road as the sky turns violet. Dry wood catches fast. Stars appear one by one, like someone is lighting them — unhurried, deliberate. The fire crackles and pops, and the dark presses in close around its edges.",
  dreamText: "The dream comes softly — not like falling asleep but like remembering something you didn't know you'd forgotten.\n\nThunder in the distance. But it doesn't sound like a storm. It sounds like a lullaby — something vast and gentle, rumbling the way a voice does when it's trying not to wake someone small.\n\nA mountaintop. A figure standing at the edge. The thunder says something that sounds like your name.\n\nThen you're awake. The fire has burned to embers. The stars have moved. And you can't remember the dream — only the feeling of it. Like being held.",
  nightmareText: "Darkness presses in from every side. Not the dark of night — something thicker, something with weight. Shadows that have too many fingers.\n\nA voice — low, careful, not speaking to you: \"She doesn't know what she is.\"\n\nAnother voice, older: \"Not yet.\"\n\nYou wake gasping, heart hammering. But the fear drains fast, like water through sand. Whatever that was, it wasn't aimed at you. You just overheard something you weren't supposed to hear.",
  communeText: "The fire is warm against your face. You sit with your knees pulled up and think about the day — the market, the figure at the well, the question with no clean answer.\n\nThe figure's words keep circling back: \"You haven't told me what you learned.\"\n\nThe fire pops. A log shifts. What *did* you learn?",
  communeStatChanges: { Wisdom: 1 },
};

// ── Ticker Messages (shown in Ch2 transitions) ──
export const ch2TickerMessages = [
  { condition: { flag: "spokeAgainstLycon" }, text: "Lycon has sent riders east from Delphi. They're asking about a girl." },
  { condition: { flag: "repairedShrine" }, text: "The shrine of Artemis on the Delphi road has been restored. Wildflowers at the base." },
  { condition: { flag: "defeatedBandits" }, text: "Travelers say a young girl fought off three bandits alone on the Corinth road." },
  { condition: { flag: "helpedOldWoman" }, text: "An old woman near Athens speaks of a young traveler. She says the girl's hands were strong." },
  { condition: {}, text: "The Oracle at Delphi has gone silent. No new prophecies for three days. The priests say nothing." },
];
