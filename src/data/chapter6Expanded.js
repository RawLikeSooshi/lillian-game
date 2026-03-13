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
    reveal: "The shades of Asphodel forget who they were. The ones who are remembered by the living hold their shape. Memory is what separates the dead from the gone.",
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
  atmosphere: "Three heads. Three sets of eyes. The ground trembles with each breath. The gate to the deeper Underworld looms behind him.",
  baseDC: 14,
  woundSource: "cerberus",
  choices: [
    {
      prompt: "The left head lunges, jaws snapping. The right head circles to flank you. The middle head watches.",
      timer: 12,
      options: [
        { text: "Hold your ground and stare down the left head.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Speak calmly — your voice, not your sword.", stat: "Empathy", statChanges: { Empathy: 1 } },
        { text: "Watch the middle head — it's the one making decisions.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
      ],
    },
    {
      prompt: "All three heads rear back. A unified growl shakes the cavern walls. Dust falls from the ceiling.",
      timer: 10,
      options: [
        { text: "Step forward. Closer, not farther.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Throw something to the side — split his attention.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Stay absolutely still. Don't react.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "The right head drops low, sniffing the ground near your feet. The left head growls warningly. The middle head tilts.",
      timer: 10,
      options: [
        { text: "Extend your hand slowly. Let him decide.", stat: "Empathy", statChanges: { Empathy: 1 } },
        { text: "Hum a tune. Something gentle. Orpheus knew.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
        { text: "Take one deliberate step toward the gate. Test the boundary.", stat: "Cunning", statChanges: { Cunning: 1 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "Cerberus lowers all three heads. The middle one presses its nose to your chest — right over your heart. It huffs once. Then all three heads step aside, and the massive tail wags.\n\nThe ferryman's voice comes from behind you: 'He hasn't done that since Orpheus. And Orpheus had a lyre.'",
      statChanges: { Empathy: 2 },
      reputation: { underworld: 2, gods: 1 },
      flags: { passedCerberus: true, cerberusApproved: true },
    },
    success: {
      text: "Cerberus watches you pass through the gate. No attack, no affection — just acknowledgment. You earned passage. The left head yawns. The right head's ears track you. The middle head blinks once.\n\nYou're through.",
      statChanges: { Courage: 1 },
      reputation: { underworld: 1 },
      flags: { passedCerberus: true },
    },
    partial: {
      text: "The left head snaps — not at you, but near you. A warning. You stumble back, then steady yourself. The middle head gives you a look that says 'try harder.' You edge past the gate while the right head watches with what might be disappointment.",
      statChanges: {},
      flags: { passedCerberus: true },
    },
    fail: {
      text: "The left head strikes. Not to kill — Cerberus doesn't kill the living — but to throw. You slam into the cavern wall. Stars explode across your vision.\n\nWhen you recover, the ferryman is standing over you. 'He doesn't want to hurt you,' he says. 'But you haven't convinced him yet.' He helps you up. 'Try again. Differently.'",
      statChanges: { Courage: -1 },
      flags: { passedCerberus: true, thrownByCerberus: true },
    },
  },
};

// ── Exploration Nodes (Underworld regions) ──
export const ch6ExplorationNodes = {
  title: "The Depths of the Underworld",
  description: "The Underworld stretches in all directions. Four paths branch from the main road. You have time to explore two before continuing to Persephone's court.",
  picks: 2,
  nodes: [
    {
      id: "elysium",
      name: "The Fields of Elysium",
      icon: "🌟",
      hint: "Golden light in the distance. Laughter. A place that feels wrong for the Underworld.",
      type: "scene",
      content: {
        text: "Elysium is everything Asphodel isn't — bright, warm, alive with color. The heroes who earned their rest walk here: warriors, poets, healers, leaders.\n\nOne shade approaches you. A young woman in armor, no older than twenty. She carries a spear she'll never use again.\n\n'I was a hero,' she says. 'Not a famous one. I defended my village from raiders. Killed three. The fourth killed me.' She smiles — not sadly. 'It was worth it. Every time I think about it, it was worth it.'\n\nShe looks at you with ancient eyes. 'You're on your way to being a hero. Can I give you advice?' She doesn't wait. 'Don't aim for Elysium. Aim for the people you'll save on the way. This place is nice, but it's not the point.'",
        statChanges: { Courage: 1, Wisdom: 1 },
        feedback: "The failed hero wasn't failed at all — she just didn't get a bard to sing about her. Her village remembers. That's enough for Elysium. Her advice settles into you like a stone into water.",
        lesson: "Heroism isn't measured by fame or monuments. This woman saved her village and died doing it. No one outside that village knows her name. Elysium knows. That's the only judge that matters.",
        setsFlags: { visitedElysium: true, metFailedHero: true },
      },
    },
    {
      id: "tartarus_edge",
      name: "The Edge of Tartarus",
      icon: "🔥",
      hint: "A chasm. Heat rises from below. Screaming, or wind — hard to tell.",
      type: "scene",
      content: {
        text: "You don't go in. No one goes in by choice. But from the edge, you can see down.\n\nTartarus is a pit without a bottom. The walls glow with a heat that isn't fire — it's something older. Down there, the Titans are chained. Down there, the worst of the worst serve sentences measured in eternities.\n\nA voice rises from the pit. Not screaming — speaking. Clear and calm.\n\n'Daughter of Zeus.' The voice knows you. 'Your father put us here. Do you think he was right?'\n\nThe voice belongs to something ancient. Something that was a god before the gods.\n\n'We were cruel,' the voice continues. 'But we were first. Does being first count for nothing?'",
        statChanges: { Wisdom: 1, Courage: 1 },
        worldStateChanges: { titanWhispers: 1 },
        feedback: "You step back from the edge. The voice fades. But the question doesn't. Were the Titans truly evil, or just the losers of a war between generations? History is written by the victors — even in the Underworld.",
        lesson: "Tartarus forces the hardest question in any conflict: were the defeated truly wrong, or just defeated? The Titans were cruel — but so are the Olympians, sometimes. Moral clarity is harder to find than heroes admit.",
        setsFlags: { visitedTartarusEdge: true, heardTitanVoice: true },
      },
    },
    {
      id: "river_lethe",
      name: "The River Lethe",
      icon: "💧",
      hint: "A quiet river. The water is perfectly clear. Shades drink from it and walk away... different.",
      type: "scene",
      content: {
        text: "The River Lethe is beautiful. Crystal clear, gentle current, smooth stones along its banks. Shades come here to drink — and when they do, they forget. Everything. Pain, joy, love, loss. They walk away lighter but emptier.\n\nThe ferryman is beside you. You didn't hear him approach.\n\n'You could drink,' he says. Not offering — observing. 'Forget every hard thing that's happened. The fear, the doubt, the weight of what you've learned. Start clean.'\n\nHe pauses.\n\n'Or you could remember everything. Every moment. The good and the terrible, all at once. Most people can't handle that. The ones who can...' He trails off. 'Well. They're the ones who change things.'",
        statChanges: { Wisdom: 2 },
        feedback: "You didn't drink. The water is still calling — it always will. But you chose to carry your memories, all of them, including the ones that hurt. The ferryman nods. 'Good,' he says. Nothing more.",
        lesson: "Forgetting pain is tempting. But pain is information — it tells you what matters, what to protect, what to fight for. Choosing to remember is choosing to remain whole, even when wholeness hurts.",
        setsFlags: { visitedLethe: true, choseToRemember: true },
      },
    },
    {
      id: "punishment_fields",
      name: "The Fields of Punishment",
      icon: "⚖️",
      hint: "Figures in the distance, repeating the same tasks. One of them is pushing a boulder.",
      type: "scene",
      content: {
        text: "Sisyphus. The boulder. You've heard the story — he cheated death, and his punishment is to push a boulder up a hill forever. It rolls back down every time.\n\nBut watching it happen is different from hearing about it. Sisyphus pushes. The boulder rolls. He walks back down and pushes again. Over and over.\n\nHe sees you watching and stops. The boulder rolls down without him.\n\n'Let me guess,' he says. 'You want to know if it's as bad as they say.' He sits on the slope. 'It was, for the first thousand years. Then I realized something.' He grins — an actual grin, warm and defiant. 'The boulder is the punishment. But the walk back down? That's mine. They can't take that from me. I decide how I walk back down. Slowly. Fast. I count the steps. I think about things. I've worked out the meaning of the universe six times.'\n\nHe stands. 'Got to go. The boulder won't push itself.' He winks. 'Yet.'",
        statChanges: { Discipline: 1, Wisdom: 1 },
        feedback: "Sisyphus found freedom inside a punishment. Not by escaping it — by claiming the parts of it that belong to him. The walk back down is his. No god controls that. It's the smallest rebellion imaginable, and it's been going on for millennia.",
        lesson: "You can't always control your circumstances. But you can always control how you respond to them. Sisyphus's punishment is eternal — but his attitude is his own. Finding agency inside constraint is the deepest form of freedom.",
        setsFlags: { visitedPunishmentFields: true, metSisyphus: true },
      },
    },
  ],
};

// ── Dialogue Duel: Persephone ──
export const ch6DialogueDuel = {
  title: "The Queen's Examination",
  npcName: "Persephone",
  npcTitle: "Queen of the Underworld",
  baseResolve: 15,
  maxRounds: 5,
  resistances: ["Deflect"], // Persephone sees through evasion absolutely
  vulnerabilities: ["Endure", "Empathize"], // Honesty and emotional truth move her
  rounds: [
    {
      npcLine: "Persephone leans forward on her throne of woven branches. 'Before I tell you anything, I need to know what you'll do with the truth. Power is not the same as readiness.' Her gaze is steady and ancient. 'Why are you here? Not the Underworld — here, in front of me, asking questions.'",
      options: {
        Assert: { text: "Because I deserve answers. I've earned them.", stat: "Courage", dc: 15 },
        Reason: { text: "Because every path I've walked since Delphi has led me here. This is where the answers are.", stat: "Wisdom", dc: 13 },
        Empathize: { text: "Because not knowing who I am hurts. And I think you understand that kind of pain.", stat: "Empathy", dc: 11 },
        Deflect: { text: "Because a god I've never met decided my life for me. I want to understand why.", stat: "Cunning", dc: 17 },
        Endure: { text: "Because I'm ready. Whatever the truth is, I can carry it.", stat: "Discipline", dc: 11 },
      },
    },
    {
      npcLine: "'Your father hid you,' Persephone says. 'Sealed your blood, erased your scent from Olympus, and told no one but the Oracle. He did this because Hera would have killed you.' She pauses. 'Was he right to do that?'",
      options: {
        Assert: { text: "No. It wasn't his choice to make alone.", stat: "Courage", dc: 14 },
        Reason: { text: "It depends on whether there was another option. Was there?", stat: "Wisdom", dc: 12 },
        Empathize: { text: "I think he was scared. Gods get scared too, don't they?", stat: "Empathy", dc: 10 },
        Deflect: { text: "Does it matter now? It's done. I'm here.", stat: "Cunning", dc: 17 },
        Endure: { text: "I'm alive. That means something, whatever his reasons.", stat: "Discipline", dc: 12 },
      },
    },
    {
      npcLine: "Persephone stands and walks among her dark flowers. 'I was taken from my mother,' she says. 'Dragged to this place. Eventually I found beauty here. Built a garden in the dark.' She turns to you. 'Do you think a person can be grateful for something that was done to them against their will?'",
      options: {
        Assert: { text: "No. Gratitude requires choice. You can love your garden without being grateful for the kidnapping.", stat: "Courage", dc: 13 },
        Reason: { text: "You can be grateful for the outcome without approving of the method. Both can be true.", stat: "Wisdom", dc: 11 },
        Empathize: { text: "You built something beautiful from something terrible. That's not gratitude — that's strength.", stat: "Empathy", dc: 9 },
        Deflect: { text: "That sounds like a question you're asking yourself, not me.", stat: "Cunning", dc: 18 },
        Endure: { text: "I don't know yet. I'm still in the middle of my story. Ask me when it's over.", stat: "Discipline", dc: 10 },
      },
    },
    {
      npcLine: "'Hera will come for you,' Persephone says flatly. 'She always does. She drove Heracles mad. She sent serpents to Perseus's crib. She is relentless and she is patient.' She fixes you with a stare. 'What will you do when she finds you?'",
      options: {
        Assert: { text: "I'll face her. I'm not Heracles. I'm not Perseus. I'm me.", stat: "Courage", dc: 13 },
        Reason: { text: "I'll need allies. No one faces Hera alone and wins.", stat: "Wisdom", dc: 12 },
        Empathize: { text: "I want to understand her. Jealousy that old must come from pain that deep.", stat: "Empathy", dc: 11 },
        Deflect: { text: "What does she want, exactly? Revenge? Justice? There's a difference.", stat: "Cunning", dc: 15 },
        Endure: { text: "I'll survive. I've survived everything so far.", stat: "Discipline", dc: 10 },
      },
    },
    {
      npcLine: "Persephone returns to her throne. Her eyes are bright — almost warm. 'Last question. And this one matters most.' She leans forward. 'You are the daughter of Zeus. You have divine blood, a hero's journey, and the attention of Olympus. What do you want it all to mean?'",
      options: {
        Assert: { text: "I want it to mean that I chose my own path. Not Zeus's. Not Hera's. Mine.", stat: "Courage", dc: 12 },
        Reason: { text: "I want it to mean that I understood the world clearly enough to make it better.", stat: "Wisdom", dc: 11 },
        Empathize: { text: "I want it to mean that the people I've met along the way were better for knowing me.", stat: "Empathy", dc: 9 },
        Deflect: { text: "I'm still figuring that out. Isn't that the point of the journey?", stat: "Cunning", dc: 16 },
        Endure: { text: "I want it to mean that I carried the weight without breaking. That I finished.", stat: "Discipline", dc: 9 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Persephone stands. For the first time, she smiles — not sadly, but with something like hope.\n\n'You are ready,' she says. 'More ready than any child of Zeus I've met. And I've met them all.' She plucks a pomegranate flower from her garden and holds it out. 'Keep this. It won't wilt above ground. It will remind you that beautiful things grow in the dark.'\n\nShe touches your forehead. A warmth spreads through you — not fire, not lightning. Something deeper. 'Go. Return to the surface. And when Hera comes — and she will — remember that the Queen of the Dead is on your side.'",
      statChanges: { Wisdom: 2, Empathy: 2 },
      reputation: { underworld: 2, gods: 1 },
      flags: { impressedPersephone: true, persephoneBlessing: true },
    },
    draw: {
      text: "Persephone nods slowly. 'You're not quite ready,' she says. 'But you're closer than you think.' She doesn't offer a gift, but she stands and walks you to the gate herself. 'The truth is yours now. What you build with it is up to you.'\n\nAt the gate, she pauses. 'Come back someday. When you're older. I'd like to finish this conversation.'",
      statChanges: { Wisdom: 1 },
      reputation: { underworld: 1 },
      flags: { persephoneNeutral: true },
    },
    lose: {
      text: "Persephone shakes her head. 'You deflect,' she says. 'You guard yourself when you should be open.' She doesn't seem angry — just disappointed. 'The truth is still yours. But you'll need to earn its meaning yourself. I can't give that to you.'\n\nShe gestures toward the gate. The audience is over.",
      statChanges: {},
      flags: { persephoneDisappointed: true },
    },
  },
};

// ── Memory Echo: Full Origin Revealed ──
export const ch6Echo = {
  fragments: [
    "Zeus loved a mortal woman",
    "Hera's jealousy is ancient and absolute",
    "You were hidden to survive",
    "The Oracle was your guardian",
    "Your blood carries the storm",
  ],
  correctOrder: [0, 1, 2, 3, 4], // Chronological: Zeus loved → Hera's jealousy → hidden → Oracle watched → blood carries storm
  baseDC: 8,
  dreamText: "The vision is the clearest it has ever been. No symbols, no metaphor — just the truth, laid bare. Zeus. A mortal woman named Alexis. A child born with lightning in her veins. Hera's wrath gathering like a storm. A desperate father sealing his daughter's power and hiding her among mortals. An Oracle watching, waiting, until the day the seal would crack and the journey would begin. Your journey. Your blood. Your storm.",
  nightmareText: "Hera's face — beautiful and terrible. She sees you. Through the layers of protection, through the Underworld's walls, through time itself. She sees you. And she smiles. Not with cruelty — with patience. She has waited before. She can wait again.",
};

// ── Sacrifice: Let a Shade Send a Memory ──
export const ch6SacrificeData = {
  narrativeSetup: "Near the edge of the Fields of Asphodel, a shrine stands — ancient even by Underworld standards. The ferryman gestures toward it.\n\n'If you leave something here — something that matters to you — a shade can use it to send one memory to the living. A face. A feeling. A single moment, delivered as a dream to someone who loved them.'\n\nHe looks at you. 'It won't help you. It won't make you stronger. It won't change the balance of any fight to come. It's purely for them.' He pauses. 'Most heroes walk past this shrine.'",
  prompt: "Will you sacrifice an item so a shade can send a memory to the living?",
  sacrificeOptions: [
    {
      itemId: "woolenThread",
      text: "Leave the woolen thread. The old woman's warmth — given to someone who needs it more.",
      feedback: "You place the thread on the shrine. It glows — soft, warm light in the grey — and unravels into nothing. Somewhere in the fields, a shade gasps. Tonight, a grandmother in Thessaly will dream of her granddaughter's face. She won't know why. But she'll wake up crying and smiling at the same time.",
    },
    {
      itemId: "figureToken",
      text: "Leave the figure's token. Let someone else feel watched over.",
      feedback: "The carved token dissolves into light on the shrine. A shade — a young soldier — stumbles and then stands straighter, more real. Tonight, his mother will dream of him standing in sunlight, telling her he's at peace. It won't be entirely true. But it will be enough.",
    },
    {
      itemId: "nikosBracelet",
      text: "Leave Niko's bracelet. Friendship, passed forward.",
      feedback: "The leather bracelet burns with a gentle fire. A shade of an old woman, forgotten by time, suddenly remembers her own name. Tonight, a distant descendant she never met will dream of a face they've never seen — and feel inexplicably loved.",
    },
  ],
  refuseOption: {
    text: "Walk past the shrine. You need everything you have.",
    feedback: "You walk past. The ferryman says nothing. But a shade near the shrine watches you go, and the grey of its face seems a shade greyer.",
  },
  statChanges: { Empathy: 1 },
  reputationChanges: { underworld: 2 },
  setsFlags: { madeSacrifice: true },
  refuseFlags: { refusedSacrifice: true },
};

// ── Dream/Camp ──
export const ch6DreamData = {
  campDescription: "There is no night in the Underworld. But there is a place where the path widens and the stone is smooth and warm. The ferryman says: 'Rest here. Even the dead sleep, in their way.' The dark flowers nearby smell faintly of rain.",
  dreamText: "The dream is not a dream. It's a memory — but not yours. You're seeing through Zeus's eyes. You hold an infant — impossibly small, impossibly bright. Lightning flickers in her tiny fists. You feel his love: vast, terrified, certain. You feel him seal the power away, layer by layer, like wrapping a flame in cloth. You feel him place the child with strangers and walk away without looking back. Because if he looks back, he won't be able to leave.\n\nYou wake with tears on your face that aren't yours.",
  nightmareText: "Hera's voice, whispering from every direction: 'I see you, little spark. I see you hiding in my husband's brother's domain. Did you think the dead could protect you? Did you think darkness could hide lightning?'\n\nYou wake gasping. The ferryman is watching. 'Bad dream?' he asks. His voice is steady. 'Dreams are louder down here. But they're also just dreams.'",
  communeText: "You sit in the dark, processing everything Persephone told you. Zeus. Your father. The mortal woman. The hiding. The Oracle. The gods who watched over you, never revealing themselves.\n\nIt all connects now — every strange moment, every too-convenient rescue, every god who seemed to know more than they said. You weren't stumbling through a journey. You were being guided home.\n\nThe ferryman sits nearby, silent. After a long time, he says: 'Knowing who you are is not the same as deciding who you'll be. The first is a fact. The second is a choice.'",
  communeStatChanges: { Wisdom: 2 },
};

// ── Rival Extended Conversation: Kira in the Underworld ──
export const ch6RivalConversation = {
  title: "The Rival Below",
  npcName: "Kira",
  npcTitle: "Your rival",
  setupText: "You find her near the River Lethe, sitting on a rock, staring at the water. She's not drinking. She looks up when she hears you, and for once, she doesn't put on the sharp smile or the guarded posture.\n\n'I figured you'd come here too,' she says. She sounds tired. 'Sit down. I'm not going to fight you. Not here.'",
  exchanges: [
    {
      kiraLine: "'I know what you are,' Kira says. 'Daughter of Zeus. I've known for a while — longer than you, probably.' She picks up a stone and turns it over. 'I'm Ares's daughter. War god's kid. Not exactly a legacy I chose.'",
      responses: [
        {
          text: "We didn't choose any of this. Neither of us.",
          statChanges: { Empathy: 1 },
          kiraReaction: "She nods. 'No. We didn't.' Something in her softens — just a fraction. 'I've been angry about it for a long time. Longer than I've been angry at you.'",
          setsFlags: { empathizedWithKira: true },
        },
        {
          text: "Is that why you've been competing with me? Proving you're more than your father?",
          statChanges: { Wisdom: 1 },
          kiraReaction: "She flinches. Then laughs — a real laugh, surprised out of her. 'Yeah. Probably. Ares's legacy is destruction. I wanted to prove I could be something else.' She looks at you sideways. 'You're annoyingly perceptive.'",
          setsFlags: { understoodKira: true },
        },
        {
          text: "Ares's daughter. That explains the fighting skills.",
          statChanges: { Cunning: 1 },
          kiraReaction: "She snorts. 'Skills, sure. Also the temper. The restlessness. The inability to sit still for more than ten minutes.' She stretches. 'But yeah. I'm good in a fight. Not sure that's enough for where we're going.'",
          setsFlags: { acknowledgedKiraStrength: true },
        },
      ],
    },
    {
      kiraLine: "'I came down here for the same reason you did,' Kira says. 'Answers. Persephone told me things about Ares that he'd never say himself.' She's quiet for a moment. 'She told me he's proud of me. He just doesn't know how to say it.' Her voice cracks, just slightly. 'Gods are terrible at being parents.'",
      responses: [
        {
          text: "Yeah. They really are.",
          statChanges: { Empathy: 1, Wisdom: 1 },
          kiraReaction: "She laughs. Genuinely. 'First thing we've agreed on.' She extends a fist. Not a handshake — a fist bump. 'Truce? At least until we're out of the Underworld?'",
          setsFlags: { kiraTriggeredTruce: true },
        },
        {
          text: "Maybe they're not terrible. Maybe they're just scared, like everyone else.",
          statChanges: { Empathy: 2 },
          kiraReaction: "Kira considers this. For a long time. 'I don't want that to be true,' she says finally. 'Because if they're scared, then they're not in control. And if the gods aren't in control...' She trails off. 'Then it's just us.'",
          setsFlags: { deepenedKiraBond: true },
        },
        {
          text: "We don't need them to be good parents. We need them to get out of the way.",
          statChanges: { Courage: 1, Discipline: 1 },
          kiraReaction: "Kira's eyes light up. 'Now THAT I can work with.' She stands, energy returning. 'You know what? I've been treating you like an enemy. But we're not enemies. We're two kids with absent divine fathers trying to figure out the world.' She grins — sharp, but genuine. 'Maybe we should do that together.'",
          setsFlags: { kiraPartnership: true },
        },
      ],
    },
    {
      kiraLine: "'When we get back to the surface,' Kira says, 'Hera is going to come for both of us. Zeus's daughter, Ares's daughter — she won't care about the difference.' She looks at you directly. 'I'd rather face that with you than against you.'",
      responses: [
        {
          text: "Then we face it together. Partners, not rivals.",
          statChanges: { Courage: 1, Empathy: 1 },
          kiraReaction: "Kira nods. Slowly. 'Partners.' She says it like she's testing the weight of the word. 'I've never had a partner. This might be terrible.' But she's smiling.",
          setsFlags: { kiraAlly: true, rivalBecamePartner: true },
        },
        {
          text: "Allies, at least. We can figure out the rest later.",
          statChanges: { Wisdom: 1, Cunning: 1 },
          kiraReaction: "'Allies works,' she says. 'I'm not great at trust. But I'm good at watching someone's back in a fight.' She holds out her hand — properly this time. A handshake. 'Allies.'",
          setsFlags: { kiraAlly: true },
        },
        {
          text: "I don't trust you yet. But I don't want to fight you either.",
          statChanges: { Discipline: 1, Wisdom: 1 },
          kiraReaction: "Kira nods. 'Honest. I respect that more than a fake handshake.' She stands. 'I'll be ahead of you on the road. Not running from you — just... doing my own thing. For now.' She pauses. 'But if Hera comes? Call me.'",
          setsFlags: { kiraCautious: true },
        },
      ],
    },
  ],
};

// ── Ticker Messages ──
export const ch6TickerMessages = [
  { condition: { flag: "passedCerberus" }, text: "Rumours in the Underworld: a living child walked past Cerberus. The shades whisper." },
  { condition: { flag: "truthRevealed" }, text: "On Olympus, a storm gathers. Zeus stands at the edge, looking down. He knows." },
  { condition: { flag: "madeSacrifice" }, text: "In a village far away, someone wakes from a dream of a face they thought they'd forgotten. They cry and don't know why." },
  { condition: {}, text: "Hera's ravens circle the entrance to the Underworld. They cannot enter. But they watch." },
  { condition: { flag: "kiraAlly" }, text: "Two sets of footprints on the road out of the Underworld. Side by side." },
];
