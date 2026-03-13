/**
 * Chapter 6 Expanded Data — "The Halls of Hades"
 * Prophecy, Encounter (Cerberus), Exploration (Underworld regions),
 * Dialogue Duel (Persephone), Memory Echo (origin), Sacrifice, Dream, Ticker,
 * Rival conversation (Kira in the Underworld)
 */

// ── Prophecy Pool ──
export const ch6ProphecyPool = [
  {
    id: "ch6_descent",
    text: "To find the truth, descend to where no light has ever reached.",
    reveal: "The Underworld held the answers the surface could not. Your origin was hidden in the one place Hera doesn't watch — the domain of Hades, who keeps his own counsel.",
    chapters: [6],
  },
  {
    id: "ch6_death",
    text: "Death is not the opposite of life. It is the opposite of forgetting.",
    reveal: "The shades of Asphodel forget who they were. The ones who are remembered by the living hold their shape. Memory is what separates the dead from the truly gone.",
    chapters: [6],
  },
  {
    id: "ch6_roots",
    text: "What grows in darkness grows the deepest roots.",
    reveal: "Persephone's garden blooms underground. Your identity was hidden in darkness. Both grew stronger for it. The things kept from the light aren't always damaged — sometimes they're protected.",
    chapters: [6],
  },
];

// ── Major Encounter: Cerberus ──
export const ch6EncounterCerberus = {
  title: "The Three-Headed Guardian",
  enemyName: "Cerberus",
  image: "🐕",
  atmosphere: "Three heads in the dark. Three sets of eyes, each one the size of a lantern, each one burning with a different fire. The ground trembles with every breath he takes. The gate to the deeper Underworld rises behind him like a mouth waiting to open.",
  baseDC: 14,
  woundSource: "cerberus",
  choices: [
    {
      prompt: "The left head lunges — jaws snapping, breath like a furnace. The right circles to your flank. The middle watches. Deciding.",
      timer: 12,
      options: [
        { text: "Hold your ground. Stare down the left head. Don't blink.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Speak calmly. Your voice. Not a weapon.", stat: "Empathy", statChanges: { Empathy: 1 } },
        { text: "Watch the middle head. It's the one making decisions.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
      ],
    },
    {
      prompt: "All three heads rear back. A unified growl shakes dust from the ceiling. The cavern vibrates in your teeth.",
      timer: 10,
      options: [
        { text: "Step forward. Closer, not farther. Into the growl.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Throw something to the side. Split his attention.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Stay absolutely still. Don't react. Become stone.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "The right head drops low, sniffing near your feet. Warm breath on your ankles. The left growls a warning. The middle tilts — considering.",
      timer: 10,
      options: [
        { text: "Extend your hand. Slowly. Palm up. Let him decide.", stat: "Empathy", statChanges: { Empathy: 1 } },
        { text: "Hum a tune. Something gentle. Orpheus knew the way.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
        { text: "One step toward the gate. Deliberate. Test the line.", stat: "Cunning", statChanges: { Cunning: 1 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "Cerberus lowers all three heads. The middle one presses its nose to your chest — right over your heart — and holds there. You feel the vibration of his breathing through your ribs. One massive huff.\n\nThen all three heads step aside. The tail — enormous, sweeping the width of the cavern — wags. Once. The sound it makes against the stone is like a drumbeat.\n\nThe ferryman's voice, from behind: \"He hasn't done that since Orpheus. And Orpheus had a lyre.\" A pause. \"You had something better.\"",
      statChanges: { Empathy: 2 },
      reputation: { underworld: 2, gods: 1 },
      flags: { passedCerberus: true, cerberusApproved: true },
    },
    success: {
      text: "Cerberus watches you pass through the gate. No attack, no affection — just acknowledgment. The transaction is complete. You earned passage.\n\nThe left head yawns. The right head's ears track you as you move. The middle head blinks once — slow, deliberate — and looks away.\n\nYou're through. The gate closes behind you with a sound like a story ending.",
      statChanges: { Courage: 1 },
      reputation: { underworld: 1 },
      flags: { passedCerberus: true },
    },
    partial: {
      text: "The left head snaps — not at you, but near you. Close enough to feel the wind of the jaws. A warning. A reminder of what he could do and is choosing not to.\n\nYou stumble back. Steady yourself. The middle head gives you a look that, on a smaller animal, you'd call disappointed.\n\nYou edge past the gate. Through. Alive. But the look follows you.",
      statChanges: {},
      flags: { passedCerberus: true },
    },
    fail: {
      text: "The left head strikes. Not to kill — Cerberus doesn't kill the living, that's not his job — but to throw. The impact is like being hit by a wave made of fur and muscle. You slam into the cavern wall. Stars. Darkness. Stone against your back.\n\nWhen you recover, the ferryman is standing over you. His face is calm. His eyes are kind.\n\n\"He doesn't want to hurt you,\" he says. \"But you haven't convinced him yet.\"\n\nHe offers his hand. \"Try again. Differently.\"",
      statChanges: { Courage: -1 },
      flags: { passedCerberus: true, thrownByCerberus: true },
    },
  },
};

// ── Exploration Nodes (Underworld regions) ──
export const ch6ExplorationNodes = {
  title: "The Depths of the Underworld",
  description: "The Underworld stretches in all directions — not a cave but a country, with its own geography, its own sky that isn't a sky, its own rivers and fields and cities of the dead. Four paths branch from the main road. You have time to walk two of them before continuing to Persephone's court.",
  picks: 2,
  nodes: [
    {
      id: "elysium",
      name: "The Fields of Elysium",
      icon: "🌟",
      hint: "Golden light in the distance. Impossible warmth. The sound of laughter — real laughter, not the memory of it.",
      type: "scene",
      content: {
        text: "Elysium is everything Asphodel isn't. Bright. Warm. Alive with color that shouldn't exist underground — green grass, blue sky (or something that learned to look like sky), golden light that comes from everywhere and nowhere.\n\nThe heroes who earned their rest walk here. Warriors. Poets. Healers. Leaders. People who burned so brightly in life that death couldn't dim them.\n\nOne shade approaches you. A young woman in bronze armor, no older than twenty. She carries a spear she'll never use again — but she carries it anyway, the way some people carry a pen or a favorite stone. Out of habit. Out of identity.\n\n\"I was a hero,\" she says. \"Not a famous one. I defended my village from raiders. Killed three. The fourth killed me.\"\n\nShe smiles. Not sadly.\n\n\"It was worth it. Every single time I think about it, it was worth it.\"\n\nShe looks at you with eyes that have had centuries to think about what they saw.\n\n\"You're on your way to being a hero. Can I give you advice?\" She doesn't wait. \"Don't aim for Elysium. Aim for the people you'll save on the way here. This place is nice.\" She gestures at the golden fields. \"But it's not the point.\"",
        statChanges: { Courage: 1, Wisdom: 1 },
        feedback: "She wasn't a failed hero. She was an unsung one — her village remembers, even if no bard ever sang her name. That was enough for Elysium. That was enough for the only judge that matters.\n\nHer advice settles into you like a stone dropped into deep water. It sinks. It stays.",
        lesson: "Heroism isn't measured by fame or monuments or epic poems. This woman saved her village and died doing it. No one outside that village knows her name. Elysium knows. That's the only record that matters.",
        setsFlags: { visitedElysium: true, metFailedHero: true },
      },
    },
    {
      id: "tartarus_edge",
      name: "The Edge of Tartarus",
      icon: "🔥",
      hint: "A chasm in the rock. Heat rises from below — not fire-heat but something older. Screaming, or wind. Hard to tell the difference.",
      type: "scene",
      content: {
        text: "You don't go in. No one goes in by choice — not even gods, if they can help it. But from the edge, you can see down.\n\nTartarus is a pit without a bottom. The walls glow with a heat that isn't fire — it's something that existed before fire was invented, something that *taught* fire how to burn. Down there, the Titans are chained. Down there, the worst of the worst serve sentences measured not in years but in the death and rebirth of stars.\n\nA voice rises from the pit. Not screaming — speaking. Clear and calm and old enough that the language it uses predates Greek by millennia. But you understand it perfectly.\n\n\"Daughter of Zeus.\"\n\nThe voice knows you. It knows your name, your blood, your father.\n\n\"Your father put us here. Do you think he was right?\"\n\nSilence. Then:\n\n\"We were cruel. But we were first. Does being first count for nothing?\"",
        statChanges: { Wisdom: 1, Courage: 1 },
        worldStateChanges: { titanWhispers: 1 },
        feedback: "You step back from the edge. The voice fades — not because it stopped speaking, but because the distance swallowed it.\n\nThe question doesn't fade. Were the Titans truly evil, or just the losers of a war between generations? They were cruel — but cruelty is not unique to Titans. The Olympians have their share.\n\nHistory is written by the victors. Even here.",
        lesson: "Tartarus forces the hardest question in any conflict: were the defeated truly wrong, or just defeated? The Titans were cruel. So are the Olympians, sometimes. Moral clarity is harder to find than heroes admit — and the Underworld is where that difficulty lives, carved into the rock.",
        setsFlags: { visitedTartarusEdge: true, heardTitanVoice: true },
      },
    },
    {
      id: "river_lethe",
      name: "The River Lethe",
      icon: "💧",
      hint: "A quiet river with water so clear it looks like liquid glass. Shades drink from it and walk away... lighter. And emptier.",
      type: "scene",
      content: {
        text: "The River Lethe is the most beautiful thing in the Underworld. Crystal clear water over smooth stones, a gentle current that barely whispers, banks of soft grey sand. Shades come here and kneel and drink — and when they rise, their faces are smooth. Empty. The pain is gone. The joy is gone. Everything is gone.\n\nThey walk away lighter. And less.\n\nThe ferryman is beside you. You didn't hear him approach — you never do.\n\n\"You could drink,\" he says. Not offering. Observing. The way a doctor describes a treatment without recommending it. \"Forget every hard thing that's happened. The fear. The doubt. The weight of what you've learned about yourself. Start clean.\"\n\nHe pauses. The water murmurs.\n\n\"Or you could remember everything. Every moment. The good and the terrible, all tangled together the way real memories are. Most people can't handle that.\"\n\nAnother pause. Longer.\n\n\"The ones who can are the ones who change things.\"",
        statChanges: { Wisdom: 2 },
        feedback: "You didn't drink. Your hand moved toward the water — just for a second, just a reflex — and you pulled it back.\n\nThe water is still calling. It always will. That's what the Lethe does — it doesn't force you. It invites you. And the invitation never expires.\n\nBut you chose to carry your memories. All of them. Including the ones that hurt.\n\nThe ferryman nods. \"Good,\" he says. Nothing more. But the way he says it — quiet, final, certain — tells you that this was the thing he was watching for. This was the test.",
        lesson: "Forgetting pain is the most tempting offer the Underworld makes. But pain is information — it tells you what matters, what to protect, what you're willing to fight for. Choosing to remember is choosing to remain whole. Even when wholeness hurts.",
        setsFlags: { visitedLethe: true, choseToRemember: true },
      },
    },
    {
      id: "punishment_fields",
      name: "The Fields of Punishment",
      icon: "⚖️",
      hint: "Figures in the distance, repeating the same tasks endlessly. One of them is pushing a boulder. He seems to be... smiling?",
      type: "scene",
      content: {
        text: "Sisyphus. The boulder. The hill.\n\nYou've heard the story — he cheated death, and his punishment is to push a boulder up a hill forever. It rolls back down every time he reaches the top. Every time. For eternity.\n\nBut watching it happen is different from hearing about it. The boulder is enormous — twice his height, the color of grief. He pushes. Muscles straining, feet digging into the slope, every fiber of his being focused on a task that has no end. He reaches the top. The boulder trembles. Tips. Rolls back down with a sound like the world laughing at him.\n\nHe watches it go.\n\nThen he sees you watching, and he stops. The boulder rolls to the bottom without him. He sits on the slope.\n\n\"Let me guess,\" he says. His voice is surprisingly warm — the voice of a man who has had a very long time to make friends with himself. \"You want to know if it's as bad as they say.\"\n\nHe grins. An actual grin — warm and defiant and alive in a way that nothing in this place should be.\n\n\"It was. For the first thousand years. Then I realized something.\"\n\nHe leans forward.\n\n\"The boulder is the punishment. But the walk back down?\" He gestures at the slope — the long, gentle incline between the top and the bottom. \"That's mine. They can't take that from me. I decide how I walk back down. Slowly. Fast. I count the steps sometimes. I think about things. I've worked out the meaning of the universe six times.\"\n\nHe stands. Brushes off his hands.\n\n\"Got to go. The boulder won't push itself.\"\n\nHe winks. \"Yet.\"",
        statChanges: { Discipline: 1, Wisdom: 1 },
        feedback: "Sisyphus found freedom inside a punishment. Not by escaping it — by claiming the parts of it that belong to him. The push is the punishment. The walk back down is his. No god dictates how he descends the slope. It's the smallest rebellion imaginable.\n\nIt's been going on for millennia.\n\nYou think about it for a long time after. About the spaces between the hard parts. About who owns those spaces. About what you build in them.",
        lesson: "You can't always control your circumstances. But you can always control your response. Sisyphus's punishment is eternal — his attitude is his own. Finding agency inside constraint is the deepest form of freedom. And the walk back down the hill? That belongs to him. Forever.",
        setsFlags: { visitedPunishmentFields: true, metSisyphus: true },
      },
    },
  ],
};

// ── Dialogue Duel: Persephone ──
export const ch6DialogueDuel = {
  title: "The Queen's Questions",
  npcName: "Persephone",
  npcTitle: "Queen of the Underworld",
  baseResolve: 12,
  maxRounds: 3,
  resistances: ["Deflect", "Cunning"],
  vulnerabilities: ["Empathize", "Reason"],
  rounds: [
    {
      npcLine: "Persephone sits on her throne of living branches. A pomegranate flower blooms near her hand — slowly, deliberately, as if performing for an audience of one.\n\n\"You've come a long way,\" she says. \"But distance doesn't impress me. Everyone here traveled the longest road there is.\" Her eyes hold yours. \"What have you learned that's worth bringing into my court?\"",
      options: {
        Assert: { text: "That I'm stronger than anyone expected. Including me.", stat: "Courage", dc: 12 },
        Reason: { text: "That the right question matters more than the right answer. Every god I've met taught me that differently.", stat: "Wisdom", dc: 9 },
        Empathize: { text: "That people are in pain everywhere — even here. Maybe especially here. And that sitting with them matters.", stat: "Empathy", dc: 8 },
        Deflect: { text: "I'm still figuring that out. Isn't that the point of the journey?", stat: "Cunning", dc: 16 },
        Endure: { text: "I learned that carrying things — hard things, heavy things — is something I can do. That's enough for now.", stat: "Discipline", dc: 10 },
      },
    },
    {
      npcLine: "Persephone leans forward. The branches of her throne lean with her — reaching, growing, as if the whole garden is paying attention.\n\n\"My husband rules the dead. His brother rules the sea. His other brother rules the sky.\" She watches for your reaction. \"Which realm would you want, if you could choose?\"",
      options: {
        Assert: { text: "None of them. I'd want my own.", stat: "Courage", dc: 11 },
        Reason: { text: "The one that needs the most help. Power should go where it's needed, not where it's wanted.", stat: "Wisdom", dc: 9 },
        Empathize: { text: "This one. The dead need someone who cares about them. The sky and sea are beautiful but they don't need compassion.", stat: "Empathy", dc: 8 },
        Deflect: { text: "Which one would you want, if you weren't already here?", stat: "Cunning", dc: 14 },
        Endure: { text: "Whichever one I could serve the longest without breaking.", stat: "Discipline", dc: 10 },
      },
    },
    {
      npcLine: "Persephone stands. She walks to the edge of her garden, where the dark flowers meet the stone, and looks out at something you can't see.\n\n\"Last question,\" she says. Her voice is different now — less regal, more real. The voice of a woman, not a queen.\n\n\"When this is all over — the journey, the gods, the battles, the revelations — what do you want your story to mean?\"",
      options: {
        Assert: { text: "That I made my own choices. Not my father's. Not the Oracle's. Mine.", stat: "Courage", dc: 10 },
        Reason: { text: "That someone with power used it to make things less broken. Not perfect — just less broken.", stat: "Wisdom", dc: 8 },
        Empathize: { text: "That I mattered to the people I met along the way. Not as a hero. As a person.", stat: "Empathy", dc: 8 },
        Deflect: { text: "I'm still figuring that out. Isn't that the point of the journey?", stat: "Cunning", dc: 16 },
        Endure: { text: "I want it to mean that I carried the weight without breaking. That I finished what I started.", stat: "Discipline", dc: 9 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Persephone stands. And for the first time — the first time in this entire chapter of dark flowers and grey fields and quiet grief — she smiles. Not sadly. With hope. The rarest flower in the Underworld.\n\n\"You are ready,\" she says. \"More ready than any child of Zeus I've ever met. And I've met them all.\"\n\nShe plucks a pomegranate flower from her garden — dark red, impossibly alive — and holds it out.\n\n\"Keep this. It won't wilt above ground. It will remind you that beautiful things grow in the dark.\"\n\nShe touches your forehead. A warmth spreads through you — not fire, not lightning. Something deeper. Something that grows.\n\n\"Go. Return to the surface. And when Hera comes — and she will come — remember that the Queen of the Dead is on your side.\"\n\nShe says this quietly. As if it's the most powerful promise she can make.\n\nIt is.",
      statChanges: { Wisdom: 2, Empathy: 2 },
      reputation: { underworld: 2, gods: 1 },
      flags: { impressedPersephone: true, persephoneBlessing: true },
    },
    draw: {
      text: "Persephone nods slowly. \"You're not quite ready,\" she says. \"But you're closer than you think.\"\n\nShe doesn't offer a gift. But she stands and walks you to the gate herself — her own feet on the dark stone, her own hand on the iron.\n\n\"The truth is yours now. What you build with it is up to you.\"\n\nAt the gate, she pauses. \"Come back someday. When you're older. I'd like to finish this conversation.\"\n\nIt sounds like an invitation. It sounds like a promise. It sounds like the kind of thing a queen says when she's decided to invest in someone who isn't finished yet.",
      statChanges: { Wisdom: 1 },
      reputation: { underworld: 1 },
      flags: { persephoneNeutral: true },
    },
    lose: {
      text: "Persephone shakes her head. Not harshly — gently, the way rain shakes a leaf.\n\n\"You deflect,\" she says. \"You guard yourself when you should be open. I understand why — you've had to guard yourself your whole life. But not here. Not with me.\"\n\nShe doesn't seem angry. Just... aware. Aware that some walls take longer to lower than others.\n\n\"The truth is still yours. But you'll need to earn its meaning yourself. I can't give that to you.\"\n\nShe gestures toward the gate. The audience is over. But the door isn't locked.",
      statChanges: {},
      flags: { persephoneDisappointed: true },
    },
  },
};

// ── Memory Echo: Full Origin Revealed ──
export const ch6Echo = {
  fragments: [
    "Zeus loved a mortal woman named Alexis",
    "Hera's jealousy is ancient and absolute",
    "You were hidden to survive",
    "The Oracle was your guardian since birth",
    "Your blood carries the storm home",
  ],
  correctOrder: [0, 1, 2, 3, 4],
  baseDC: 8,
  dreamText: "The vision is the clearest it has ever been. No symbols. No metaphor. No fragments. Just the truth, laid bare like a skeleton on a beach.\n\nZeus. A mortal woman named Alexis — dark-haired, strong-handed, brave enough to love a god and wise enough to know what it would cost. A child born with lightning curled in her tiny fists. Hera's wrath gathering on the horizon like a storm that has been building since the beginning of time.\n\nA desperate father — the most powerful being in the world, and powerless to protect his daughter from his own wife — sealing his child's power, layer by layer, like wrapping a flame in cloth. Placing her with strangers who would love her. Walking away without looking back.\n\nAn Oracle, watching. Waiting. Counting the years until the seal would crack and the journey could begin.\n\nYour journey. Your blood. Your storm.\n\nThe vision doesn't end this time. It simply becomes part of you — another chamber of your heart, one that was always there, just locked.",
  nightmareText: "Hera's face. Beautiful and terrible — the beauty of a blade, the terror of a smile that knows exactly what it's going to destroy and has all the time in the world to do it.\n\nShe sees you. Through the layers of protection, through the Underworld's walls, through the dark and the distance and the centuries of careful hiding.\n\nShe sees you.\n\nAnd she smiles. Not with cruelty — with patience. She has waited before. For Heracles. For Perseus. For every child her husband loved more than he loved her.\n\nShe can wait again.",
};

// ── Sacrifice: Let a Shade Send a Memory ──
export const ch6SacrificeData = {
  narrativeSetup: "Near the edge of the Fields of Asphodel, a shrine stands — ancient even by Underworld standards, carved from a single piece of obsidian so dark it seems to drink the light. The ferryman gestures toward it.\n\n\"If you leave something here — something that matters to you, not an object but a piece of what it represents — a shade can use it to send one memory to the living. A face. A feeling. A single moment, delivered as a dream to someone who loved them.\"\n\nHe looks at you. His eyes are kind and deep and ask nothing.\n\n\"It won't help you. It won't make you stronger. It won't change the balance of any fight to come. It's purely for them.\"\n\nA pause. The grey flowers nod in a wind that isn't there.\n\n\"Most heroes walk past this shrine.\"",
  prompt: "Will you sacrifice an item so a shade can send a memory to the living?",
  sacrificeOptions: [
    {
      itemId: "woolenThread",
      text: "Leave the woolen thread. The old woman's warmth — given to someone who needs it more.",
      feedback: "You place the thread on the shrine. It glows — soft, warm light in all this grey, the color of firelight, the color it's always been — and unravels into nothing. Into the air. Into the ground. Into someone.\n\nSomewhere in the fields, a shade gasps. Their hand goes to their chest.\n\nTonight, a grandmother in Thessaly will dream of her granddaughter's face. She won't know why. She'll wake up crying and smiling at the same time. She'll think it was just a dream.\n\nIt wasn't.",
    },
    {
      itemId: "figureToken",
      text: "Leave the figure's token. Let someone else feel watched over.",
      feedback: "The carved token dissolves into light on the shrine — gentle, golden, the light of someone who cares. A shade nearby — a young soldier, still wearing the ghost of his armor — stumbles. Catches himself. Stands straighter. More real.\n\nTonight, his mother will dream of him standing in sunlight. He'll tell her he's at peace.\n\nIt won't be entirely true. But it will be enough. Some truths are better as dreams.",
    },
    {
      itemId: "nikosBracelet",
      text: "Leave Niko's bracelet. Friendship, passed forward.",
      feedback: "The leather bracelet burns with a gentle fire on the obsidian shrine. The fire doesn't consume — it transforms. The leather becomes light. The light becomes memory.\n\nA shade of an old woman, so faded she was almost gone, suddenly remembers her own name. She says it aloud. The sound rings through the grey fields like a bell.\n\nTonight, a distant descendant she never met will dream of a face they've never seen — and feel, for reasons they can't explain, inexplicably loved.",
    },
  ],
  refuseOption: {
    text: "Walk past the shrine. You need everything you have.",
    feedback: "You walk past. The ferryman says nothing. His silence isn't judgment — it's acceptance. Not everyone can give. Not everyone should.\n\nBut a shade near the shrine watches you go. And the grey of its face — already grey, already fading — seems a shade greyer than before.",
  },
  statChanges: { Empathy: 1 },
  reputationChanges: { underworld: 2 },
  setsFlags: { madeSacrifice: true },
  refuseFlags: { refusedSacrifice: true },
};

// ── Dream/Camp ──
export const ch6DreamData = {
  campDescription: "There is no night in the Underworld. But there is a place where the path widens and the stone is smooth and warm — heated from below by something that isn't fire, something older and kinder. The ferryman says: \"Rest here. Even the dead sleep, in their way.\" Dark flowers nearby smell faintly of rain — impossible rain, the memory of rain, the idea of rain in a place that has never seen a cloud.",
  dreamText: "The dream is not a dream. It's a memory — but not yours.\n\nYou're seeing through Zeus's eyes.\n\nYou hold an infant. Impossibly small. Impossibly bright. Lightning flickers in her tiny fists — not dangerous, joyful, the electricity of a new life that doesn't know yet how extraordinary it is.\n\nYou feel his love. Vast and terrified and absolute. The love of the most powerful being in the world for the most fragile thing he's ever created.\n\nYou feel him seal the power away. Layer by layer. Like wrapping a flame in silk. Carefully. Gently. Each layer a promise: *I will come back for you. When it's safe. When you're ready.*\n\nYou feel him place the child with strangers — kind strangers, good strangers, strangers with a blue door and a jasmine courtyard — and walk away.\n\nWithout looking back.\n\nBecause if he looks back, he won't be able to leave.\n\nYou wake with tears on your face that aren't yours.",
  nightmareText: "Hera's voice, whispering from every direction — from the stone, from the dark, from the flowers, from the water:\n\n\"I see you, little spark. I see you hiding in my husband's brother's domain. Did you think the dead could protect you? Did you think darkness could hide lightning?\"\n\nThe whisper curls around you like smoke.\n\n\"I'm patient. I've always been patient. Ask Heracles. Ask Io. Ask every woman and child your father ever loved and I ever found.\"\n\nYou wake gasping. The ferryman is watching. His face is calm. His eyes are the steadiest thing in the Underworld.\n\n\"Bad dream?\" he asks. His voice doesn't waver. \"Dreams are louder down here. But they're also just dreams.\"\n\nHe doesn't say *she can't reach you.* He doesn't say *you're safe.* He says something better:\n\n\"I'm here. Rest.\"",
  communeText: "You sit in the dark, processing everything Persephone told you. Zeus. Your father. The mortal woman named Alexis who had your hands. The hiding. The Oracle. The gods who walked beside you pretending to be strangers.\n\nIt all connects now. Every strange moment, every too-convenient rescue, every god who seemed to know more than they should. You weren't stumbling through a journey. You were being guided home. By people who loved you but couldn't say so.\n\nThe ferryman sits nearby. Silent. After a very long time — long enough that the dark flowers have opened and closed twice — he speaks.\n\n\"Knowing who you are is not the same as deciding who you'll be.\" His voice is quiet enough to barely disturb the air. \"The first is a fact. The second is a choice.\"\n\nHe doesn't say anything else. He doesn't need to.",
  communeStatChanges: { Wisdom: 2 },
};

// ── Rival Extended Conversation: Kira in the Underworld ──
export const ch6RivalConversation = {
  title: "The Rival Below",
  npcName: "Kira",
  npcTitle: "Your rival",
  setupText: "You find her near the River Lethe, sitting on a rock with her knees drawn up, staring at the water. She's not drinking. Her jaw is set the way it always is — but the rest of her looks different down here. Smaller. Younger. Like the Underworld stripped away the armor she wears on the surface.\n\nShe looks up when she hears your footsteps. And for once — for the first time since you've known her — she doesn't put on the sharp smile or the guarded posture. She just looks at you.\n\n\"I figured you'd come here too,\" she says. She sounds tired. The kind of tired that sleep doesn't fix.\n\n\"Sit down. I'm not going to fight you. Not here. Not in front of the dead.\"",
  exchanges: [
    {
      kiraLine: "\"I know what you are,\" Kira says. She picks up a smooth stone from the riverbank and turns it in her fingers. \"Daughter of Zeus. I've known for a while — longer than you, probably.\" She tosses the stone into the Lethe. It disappears without a ripple. \"I'm Ares's daughter. War god's kid.\" A pause. \"Not exactly a legacy I chose.\"",
      responses: [
        {
          text: "We didn't choose any of this. Neither of us.",
          statChanges: { Empathy: 1 },
          kiraReaction: "She nods. Slowly. \"No. We didn't.\"\n\nSomething in her softens — just a fraction, like a fist uncurling one finger at a time. \"I've been angry about it for a long time. Longer than I've been angry at you.\" She looks at the river. \"Which is saying something.\"",
          setsFlags: { empathizedWithKira: true },
        },
        {
          text: "Is that why you've been competing with me? Proving you're more than your father?",
          statChanges: { Wisdom: 1 },
          kiraReaction: "She flinches. Just once — a quick contraction, there and gone.\n\nThen she laughs. A real laugh, surprised out of her like a bird startled from a branch. \"Yeah. Probably.\" She runs her hand through her hair. \"Ares's legacy is destruction. I wanted to prove I could be something else.\" She looks at you sideways. \"You're annoyingly perceptive. You know that, right?\"",
          setsFlags: { understoodKira: true },
        },
        {
          text: "Ares's daughter. That explains the fighting skills.",
          statChanges: { Cunning: 1 },
          kiraReaction: "She snorts. \"Skills, sure. Also the temper. The restlessness. The inability to sit still for more than ten minutes without wanting to punch something.\"\n\nShe stretches — a fighter's stretch, automatic, built into her body.\n\n\"But yeah. I'm good in a fight. Not sure that's enough for where we're going.\"",
          setsFlags: { acknowledgedKiraStrength: true },
        },
      ],
    },
    {
      kiraLine: "\"I came down here for the same reason you did,\" Kira says. \"Answers.\" She's quiet for a moment. The Lethe whispers beside them.\n\n\"Persephone told me things about Ares that he'd never say himself. She told me he's proud of me.\" Her voice cracks — just slightly, a hairline fracture in the armor. \"He just doesn't know how to say it.\"\n\nShe picks up another stone. Holds it.\n\n\"Gods are terrible at being parents.\"",
      responses: [
        {
          text: "Yeah. They really are.",
          statChanges: { Empathy: 1, Wisdom: 1 },
          kiraReaction: "She laughs. Genuinely — the sound catching her off guard, breaking through the grey of this place like a crack of light.\n\n\"First thing we've agreed on.\"\n\nShe extends a fist. Not a handshake — a fist bump. The gesture of someone who grew up fighting, not shaking hands.\n\n\"Truce? At least until we're out of the Underworld?\"",
          setsFlags: { kiraTriggeredTruce: true },
        },
        {
          text: "Maybe they're not terrible. Maybe they're just scared, like everyone else.",
          statChanges: { Empathy: 2 },
          kiraReaction: "Kira considers this. For a long time. The Lethe runs beside them, patient as always.\n\n\"I don't want that to be true,\" she says finally. Her voice is quiet — the quietest you've ever heard it. \"Because if they're scared, then they're not in control. And if the gods aren't in control...\"\n\nShe trails off. The stone in her hand is still.\n\n\"Then it's just us.\"",
          setsFlags: { deepenedKiraBond: true },
        },
        {
          text: "We don't need them to be good parents. We need them to get out of the way.",
          statChanges: { Courage: 1, Discipline: 1 },
          kiraReaction: "Kira's eyes light up. The armor comes back — but different now. Not defensive. Ready.\n\n\"Now THAT I can work with.\"\n\nShe stands. Energy returning like a tide coming in.\n\n\"You know what? I've been treating you like an enemy. But we're not enemies. We're two kids with absent divine fathers trying to figure out the world without a manual.\"\n\nShe grins. Sharp, but genuine — the first time you've seen both at once.\n\n\"Maybe we should do that together.\"",
          setsFlags: { kiraPartnership: true },
        },
      ],
    },
    {
      kiraLine: "\"When we get back to the surface,\" Kira says, \"Hera is going to come for both of us. Zeus's daughter, Ares's daughter — she won't care about the difference.\"\n\nShe looks at you directly. No games. No armor. Just a girl, sitting by a river in the land of the dead, saying something that matters.\n\n\"I'd rather face that with you than against you.\"",
      responses: [
        {
          text: "Then we face it together. Partners, not rivals.",
          statChanges: { Courage: 1, Empathy: 1 },
          kiraReaction: "Kira nods. Slowly. Testing the weight of the word the way you'd test a bridge before crossing.\n\n\"Partners.\"\n\nShe says it again, quieter: \"Partners.\"\n\n\"I've never had a partner,\" she admits. \"This might be terrible.\"\n\nBut she's smiling. And this time, it reaches her eyes.",
          setsFlags: { kiraAlly: true, rivalBecamePartner: true },
        },
        {
          text: "Allies, at least. We can figure out the rest later.",
          statChanges: { Wisdom: 1, Cunning: 1 },
          kiraReaction: "\"Allies works,\" she says. The word sits more comfortably on her — it requires less trust, and trust is the currency she's most careful with.\n\n\"I'm not great at trust. But I'm good at watching someone's back in a fight.\"\n\nShe holds out her hand. Properly this time — a handshake, not a fist bump. The gesture of someone who's decided to try.\n\n\"Allies.\"",
          setsFlags: { kiraAlly: true },
        },
        {
          text: "I don't trust you yet. But I don't want to fight you either.",
          statChanges: { Discipline: 1, Wisdom: 1 },
          kiraReaction: "Kira nods. Something in her face says she expected this — and respects it more than a handshake she didn't earn.\n\n\"Honest. I respect that more than a fake handshake.\"\n\nShe stands. Brushes the grey sand from her clothes.\n\n\"I'll be ahead of you on the road. Not running from you — just doing my own thing. For now.\"\n\nShe pauses at the edge of the light.\n\n\"But if Hera comes? Call me.\"",
          setsFlags: { kiraCautious: true },
        },
      ],
    },
  ],
};

// ── Ticker Messages ──
export const ch6TickerMessages = [
  { condition: { flag: "passedCerberus" }, text: "Whispers in the Underworld: a living child walked past Cerberus. The shades gather to watch the road. Something is changing." },
  { condition: { flag: "truthRevealed" }, text: "On Olympus, a storm gathers. Zeus stands at the edge of the mountain, looking down through the clouds. He knows." },
  { condition: { flag: "madeSacrifice" }, text: "In a village far from here, someone wakes from a dream of a face they thought they'd forgotten. They cry and don't know why. They don't need to." },
  { condition: {}, text: "Hera's ravens circle the entrance to the Underworld. They cannot enter — Hades's domain is sovereign. But they watch. They always watch." },
  { condition: { flag: "kiraAlly" }, text: "Two sets of footprints on the road out of the Underworld. Side by side. The shades have never seen that before." },
];
