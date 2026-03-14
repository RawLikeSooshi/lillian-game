/**
 * Chapter 8 Expanded Data — "The Labyrinth of Crete"
 * Prophecy, Encounter (Minotaur), Exploration (Labyrinth interior),
 * Dialogue Duel (Minos), Memory Echo, Sacrifice (Woolen Thread), Dream/Camp, Ticker
 */

// ── Prophecy Pool ──
export const ch8ProphecyPool = [
  {
    id: "ch8_maze",
    text: "The maze does not trap the lost. It traps the proud.",
    reveal: "The labyrinth was never about navigation. It was about whether you could see a person inside a monster, a question inside a corridor, a choice inside a dead end.",
    chapters: [8],
  },
  {
    id: "ch8_thread",
    text: "Two threads. One mortal. One divine. Only one leads home.",
    reveal: "The woolen thread from Chapter 1 and Ariadne's crimson thread were always connected. One was given by a stranger. The other by a princess who speaks with a god's voice. Both led to the same place: the center of who you are.",
    chapters: [8],
  },
  {
    id: "ch8_name",
    text: "The monster has a name. Say it, and the walls come down.",
    reveal: "Asterion. His name was Asterion. Every monster in every story was a person first. The labyrinth existed because nobody said his name — they only said what he looked like.",
    chapters: [8],
  },
];

// ── Major Encounter: The Minotaur ──
export const ch8EncounterMinotaur = {
  title: "Asterion's Challenge",
  enemyName: "The Minotaur",
  image: "\u{1F402}",
  atmosphere: "Asterion rises to his full height. Seven feet of muscle, horn, and ancient pain. He doesn't charge — he watches. If you chose violence, he'll defend himself. If you chose compassion, this is different. The air between you hums with Poseidon's curse.",
  baseDC: 15,
  altDC: { stat: "Empathy", dc: 16, flag: "attemptedHeal" },
  woundSource: "minotaur",
  choices: [
    {
      prompt: "Asterion tests you. He stamps the ground — the whole chamber shakes. Stones fall from the ceiling.",
      timer: 12,
      options: [
        { text: "Stand your ground. Don't flinch. Show him you're not afraid.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Speak his name. 'Asterion. I know who you are.'", stat: "Empathy", statChanges: { Empathy: 1 } },
        { text: "Dodge the falling stones and find cover. Survival first.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "He charges — not to kill, but to test. Horns lowered, thundering across the garden. The ground cracks beneath his hooves.",
      timer: 15,
      options: [
        { text: "Sidestep at the last second. Use his momentum against him.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Brace and catch his horns. Meet strength with strength.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Drop to your knees. Show you won't fight. Force him to choose.", stat: "Empathy", statChanges: { Empathy: 2 } },
      ],
    },
    {
      prompt: "He stops. Breathing hard. His eyes are wet. 'Why are you here?' he asks. 'Why does anyone come here?'",
      timer: 15,
      options: [
        { text: "Because the labyrinth is part of my journey. I had to face what's inside.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
        { text: "Because someone should have come a long time ago. Not to fight — to listen.", stat: "Empathy", statChanges: { Empathy: 1 } },
        { text: "Because I don't believe in monsters. I believe in people who got hurt.", stat: "Courage", statChanges: { Courage: 1 } },
      ],
    },
    {
      prompt: "The final moment. Asterion extends one massive hand — palm up. Open. Vulnerable. He's waiting to see what you do.",
      timer: 15,
      options: [
        { text: "Take his hand. Whatever happens next, you face it together.", stat: "Empathy", statChanges: { Empathy: 2 } },
        { text: "Place your weapon on the ground first. Then take his hand.", stat: "Discipline", statChanges: { Discipline: 1, Courage: 1 } },
        { text: "Nod. You don't need to touch him — the understanding between you is enough.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "Asterion lowers his head. Not in defeat — in respect. 'You are the first,' he says, 'who came here and saw me.' The labyrinth shudders. The curse weakens. Something that has been wound tight for decades begins, slowly, to unravel.\n\nKira watches from the shadows. When she steps forward, her weapon is sheathed. 'I was going to kill him,' she says quietly. 'Thank you for showing me I was wrong.'",
      statChanges: { Empathy: 2, Wisdom: 1 },
      reputation: { gods: 2, commonPeople: 1 },
      flags: { impressedMinotaur: true, kiraRespects: true },
    },
    success: {
      text: "Asterion accepts you. Not as a friend — that will take time — but as someone who is not his enemy. The garden is quiet. The labyrinth's walls stop shifting.\n\n'Thank you,' he says. 'For saying my name.'",
      statChanges: { Empathy: 1 },
      reputation: { gods: 1 },
      flags: { impressedMinotaur: true },
    },
    partial: {
      text: "It's messy. You stumble, hesitate, say the wrong thing twice. But you don't attack, and eventually Asterion sits back down. 'You tried,' he says. 'That's... something.' It's not a victory. But it's not a failure either.",
      statChanges: {},
      flags: { metMinotaur: true },
    },
    fail: {
      text: "Asterion's charge catches you. Not fatally — he pulled the blow at the last second — but you're thrown across the garden and into a wall. Your shoulder screams. As your vision clears, you see him standing over you, horrified at what he's done.\n\n'I'm sorry,' he says. 'I'm sorry. I didn't mean — I can't always—' He retreats to his corner. The curse reasserts itself. The moment is lost.",
      statChanges: { Courage: -1 },
      flags: { metMinotaur: true, woundedByMinotaur: true },
    },
  },
};

// ── Exploration Nodes (Labyrinth Interior) ──
export const ch8ExplorationNodes = {
  title: "The Corridors Between",
  description: "The labyrinth is vast. As you make your way toward the center, passages branch off into chambers that shouldn't exist underground. Time to explore two before pressing on.",
  picks: 2,
  nodes: [
    {
      id: "hall_of_mirrors",
      name: "The Hall of Mirrors",
      icon: "\u{1FA9E}",
      hint: "A corridor lined with polished bronze. Your reflections look... different.",
      type: "scene",
      content: {
        text: "The mirrors are not glass — they're polished bronze, ancient and slightly green. Your reflection is wrong. Not distorted — transformed.\n\nIn one mirror, you see yourself crowned with lightning. In another, you're older, scarred, wearing armor. In a third, you're sitting on a throne that floats above the clouds.\n\n'The mirrors show what the gods see when they look at you,' a voice says. It comes from everywhere. 'Not what you are. What you could become. Every version is true. Every version is a choice you haven't made yet.'",
        statChanges: { Wisdom: 2 },
        feedback: "The mirrors showed you futures — not predictions, possibilities. The crowned version, the scarred warrior, the sky-throne. None of them are guaranteed. All of them are available. The gods see potential. Now you do too.",
        lesson: "Identity isn't fixed. The person you are right now is one of many possible versions of yourself. The mirrors didn't show you your fate — they showed you your range. What you do with that information is the real question.",
        setsFlags: { sawMirrors: true },
      },
    },
    {
      id: "prisoners_cell",
      name: "The Prisoner's Cell",
      icon: "\u{1F517}",
      hint: "A locked door. Behind it, someone is humming a song you almost recognize.",
      type: "scene",
      content: {
        text: "The cell is old — older than the labyrinth itself. Inside, chained to the wall, is a man who looks like he hasn't aged in centuries. He's thin, bearded, and his eyes are the sharpest you've ever seen.\n\n'Ah,' he says, as if you're expected. 'You found me. That's unusual. Most people walk right past.' He rattles his chains. 'I don't suppose you know how to pick a lock? Or would a show of strength do?'\n\nHis voice is familiar. Not because you've met him — because you've heard his name in every story about cleverness ever told.",
        choices: [
          {
            text: "Try to break the chains. (DC 11 Courage or Discipline)",
            statChanges: { Courage: 1, Discipline: 1 },
            setsFlags: { freedPrisoner: true },
            feedback: "The chains are old but the lock is complex — Daedalus-made. You find a weak link and hammer it with a stone until it gives. The man stands, stretching muscles that haven't moved freely in years. 'Daedalus,' he says. 'My name is Daedalus. I built this place, and it imprisoned me for my trouble.' He looks at you with something like gratitude. 'You've freed the architect. That changes the map.'",
            lesson: "The person who built the prison is sometimes the person trapped inside it. Daedalus created the labyrinth and became its prisoner. Freeing the creator changes everything about the creation.",
          },
          {
            text: "Ask him questions first. Who imprisoned him and why?",
            statChanges: { Wisdom: 1, Cunning: 1 },
            setsFlags: { questionedPrisoner: true },
            feedback: "'Minos,' the man says. 'I built his labyrinth, and then he decided I knew too much to be free. The irony is not lost on me.' He pauses. 'I'm Daedalus. The architect. I know every corridor, every trick, every dead end. If you free me, I can guide you to the center. If you don't...' He shrugs. 'I'll be here when the next hero comes through.'",
            lesson: "Gathering information before acting is almost always worth the time. Daedalus's identity changes the calculation — he's not just a prisoner, he's a resource. But resources have their own agendas.",
          },
        ],
      },
    },
    {
      id: "treasury",
      name: "The Treasury of Minos",
      icon: "\u{1F4B0}",
      hint: "A chamber that glows gold. The air tastes like metal and something older.",
      type: "scene",
      content: {
        text: "The treasury is staggering — gold, jewels, weapons, armor, artifacts from civilizations you don't recognize. But at the back of the chamber, behind the treasure, is something else entirely.\n\nA doorway. Not a Cretan doorway — a doorway made of black stone, carved with symbols that writhe. The air around it is cold. Not cold like winter. Cold like absence. Like the place beyond it is missing something fundamental — warmth, light, life.\n\n'That leads to the underworld,' says a voice behind you. A shade — translucent, barely there — stands among the gold. 'Minos keeps it sealed. The dead aren't supposed to use that door. But the door doesn't care about supposed to.'",
        statChanges: { Wisdom: 1 },
        worldStateChanges: { underworldStirring: 1 },
        feedback: "An underworld gate, hidden in a treasury, sealed by a king who doesn't want anyone to know. The dead aren't supposed to use it — which means someone has. Or will. You file the location away. Some doors are meant to be found before they're meant to be opened.",
        lesson: "The most dangerous things are often hidden behind the most obvious ones. A mountain of gold hides a gate to the underworld. Minos isn't just a king — he's a gatekeeper. Understanding what people are really guarding is more valuable than anything they put on display.",
        setsFlags: { foundUnderworldGate: true },
      },
    },
    {
      id: "heart_of_maze",
      name: "The Heart of the Maze",
      icon: "\u{2764}\uFE0F",
      hint: "A pulse. Deep in the walls. The labyrinth has a heartbeat.",
      type: "scene",
      content: {
        text: "You find it in a chamber with no doors — you had to press through a wall that felt like water to enter. At the center of the room, embedded in the floor, is a stone that beats.\n\nNot metaphorically. It contracts and expands like a heart. The walls pulse with it. The floor vibrates. The entire labyrinth — every corridor, every dead end, every shifting wall — is connected to this stone.\n\nThe labyrinth speaks. Not in words. In impressions. Images. Feelings.\n\nIt shows you its purpose: not to trap, but to test. Not to kill, but to question. The labyrinth is an examination — and Asterion at its center is the final question. What do you do with something that is powerful, suffering, and not your fault?\n\nThe labyrinth asks you: do you understand?",
        statChanges: { Wisdom: 2, Empathy: 1 },
        feedback: "The labyrinth is alive because Daedalus built it with a question at its center. Not a riddle — a moral question. Every corridor is a thought. Every dead end is a wrong answer. The heart of the maze isn't a stone. It's the question itself: what do you do with someone else's suffering?",
        lesson: "The greatest structures ever built — physical or social — are organized around a central question. The labyrinth's question is about compassion versus convenience. It's the question every civilization has to answer about the people it doesn't know how to help.",
        setsFlags: { foundLabyrinthHeart: true },
      },
    },
  ],
};

// ── Dialogue Duel: King Minos ──
export const ch8DialogueDuel = {
  title: "The King's Tribunal",
  npcName: "King Minos",
  npcTitle: "King of Crete, Judge of the Dead",
  baseResolve: 12,
  maxRounds: 4,
  resistances: ["Empathize", "Deflect"], // Minos is political — feelings don't move him, evasion insults him
  vulnerabilities: ["Reason", "Assert"], // Logic and directness earn his respect
  rounds: [
    {
      npcLine: "Minos leans forward on his throne. 'You entered my labyrinth without permission. My guards found thread at the entrance. My daughter's thread.' His voice is ice. 'Explain yourself, or I'll add you to the maze's collection.'",
      options: {
        Assert: { text: "I went because the labyrinth called me. Your guards couldn't have stopped me, and we both know it.", stat: "Courage", dc: 11 },
        Reason: { text: "Your labyrinth tests people. I passed the test. Punishing someone who passed is poor strategy for a king.", stat: "Wisdom", dc: 10 },
        Empathize: { text: "I met Asterion. Your... the creature below. He's suffering, Minos. He asked me to say his name.", stat: "Empathy", dc: 14 },
        Deflect: { text: "What thread? I found my own way. Your daughter and I have never spoken.", stat: "Cunning", dc: 15 },
        Endure: { text: "I'll accept whatever judgment you give. But I don't regret going.", stat: "Discipline", dc: 12 },
      },
    },
    {
      npcLine: "Minos's jaw tightens. 'The creature — Asterion — is contained for a reason. The curse of Poseidon cannot be undone by a child with good intentions. Do you understand what you've meddled with?'",
      options: {
        Assert: { text: "I understand better than you do. I stood in front of him. You haven't done that in years.", stat: "Courage", dc: 11 },
        Reason: { text: "Containment without purpose is just cruelty with extra steps. What's your plan for him? Wait until he dies?", stat: "Wisdom", dc: 10 },
        Empathize: { text: "He's your wife's son, Minos. Whatever the curse did to his body, he's still a person.", stat: "Empathy", dc: 14 },
        Deflect: { text: "If the containment worked, I shouldn't have been able to reach him. Maybe the labyrinth wanted me there.", stat: "Cunning", dc: 13 },
        Endure: { text: "I understand consequences. Do you? Because a generation of heroes dying in your maze has consequences too.", stat: "Discipline", dc: 11 },
      },
    },
    {
      npcLine: "Minos stands. The room feels smaller. 'I am the judge of the dead, child. I weigh souls. Do you think I haven't weighed this? Do you think I keep him below because it's easy?'",
      options: {
        Assert: { text: "Then weigh mine. Right now. Judge whether what I did was right or wrong. You're supposed to be good at that.", stat: "Courage", dc: 10 },
        Reason: { text: "If it's not easy, then you've already questioned it. That means there's a better answer. You just haven't found it yet.", stat: "Wisdom", dc: 9 },
        Empathize: { text: "I think you keep him below because facing him hurts. And you've been a king too long to let people see you hurt.", stat: "Empathy", dc: 15 },
        Deflect: { text: "Judging the dead is different from judging the living. The living can still change.", stat: "Cunning", dc: 13 },
        Endure: { text: "I believe you. I believe it's hard. But hard isn't the same as right, and you know that.", stat: "Discipline", dc: 11 },
      },
    },
    {
      npcLine: "Minos is silent for a long time. When he speaks, the king is gone. What's left is a tired man. 'What would you have me do? The curse is Poseidon's. I cannot break it. I cannot free what I cannot control.'",
      options: {
        Assert: { text: "Then stop controlling and start listening. He told me what he wants. He wants to see the sky.", stat: "Courage", dc: 10 },
        Reason: { text: "You don't have to break the curse to change the conditions. Move him above ground. Give him sunlight. Give him a name again.", stat: "Wisdom", dc: 9 },
        Empathize: { text: "You're asking me because you've wanted someone to ask for years. You didn't need my answer, Minos. You needed permission.", stat: "Empathy", dc: 13 },
        Deflect: { text: "That's not my decision to make. But the fact that you're asking a stranger means you already know yours.", stat: "Cunning", dc: 12 },
        Endure: { text: "Start small. A window. A visit. Something that says: I see you, and you're not forgotten.", stat: "Discipline", dc: 10 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Minos sits down heavily. For a moment, he's not a king — he's a stepfather who locked a child in a basement and told himself it was necessary.\n\n'You will leave Crete,' he says. 'And I will... think about what you've said.' He waves a hand. 'Ariadne will see you to your ship.' He pauses. 'Tell no one what you saw. Not the labyrinth. Not...' He can't say the name. 'Not him.'\n\nBut something in his eyes has shifted. The door below might open — not today, but someday. Because you planted the question.",
      statChanges: { Wisdom: 2, Courage: 1 },
      reputation: { gods: 1, nobles: 1 },
      flags: { convincedMinos: true, minosReconsidering: true },
    },
    draw: {
      text: "Minos stares at you. 'You're not wrong,' he says. 'But you're not king of Crete. The weight of this is not yours to carry.' He dismisses you — but without anger. Without punishment. That's more than most people get from Minos.\n\nAriadne meets you outside the throne room. 'He listened,' she says. 'That never happens.'",
      statChanges: { Wisdom: 1 },
      reputation: { nobles: 1 },
      flags: { arguedWithMinos: true },
    },
    lose: {
      text: "Minos's face hardens. 'You are a child playing at philosophy in a world that runs on power,' he says. 'Leave Crete. Don't come back.' Guards escort you to the harbor.\n\nBut as you leave the palace, Ariadne finds you. 'He's angry because you're right,' she whispers. 'That's the most dangerous kind of angry. But also the most useful.'",
      statChanges: {},
      flags: { angeredMinos: true },
    },
  },
};

// ── Memory Echo ──
export const ch8Echo = {
  fragments: [
    "Zeus",
    "He sees you",
    "Father and daughter",
    "Across the distance",
    "Soon",
  ],
  correctOrder: [0, 1, 2, 3, 4], // Zeus → He sees you → Father and daughter → Across the distance → Soon
  baseDC: 5,
  dreamText: "No puzzle this time. No fragments to arrange. Just clarity. Zeus stands on Olympus. You stand in the labyrinth. Across the distance between mortal and divine, father and daughter look at each other. He mouths one word: 'Soon.'",
  nightmareText: "Lightning. Not a storm — a signal. Someone on a mountain, reaching down through the clouds. The hand is enormous. It could crush you. It doesn't. It waits. Open. Patient. Terrifying in its gentleness.",
};

// ── Sacrifice: The Woolen Thread ──
export const ch8SacrificeData = {
  type: "item",
  targetId: "woolenThread",
  narrative: "Ariadne stands at the labyrinth exit. Others will come after you — other heroes, other seekers, other lost souls. The labyrinth will trap them as it tried to trap you.\n\n'Your thread,' Ariadne says, looking at the woolen strand from the very beginning of your journey. 'If you leave it here — woven into mine — it becomes a permanent guide. Anyone who enters will find their way out. Not just you. Everyone. Forever.'\n\nShe looks at you steadily. 'But it's yours. From your first day. I won't ask you to give it up.'\n\nTwo threads. One mortal. One divine. Which leads home?",
  oracleText: "Two threads. One mortal. One divine. Which leads home?",
  gainText: "The labyrinth's exit becomes permanent. No one will ever be lost in the maze again. Your name will be woven into the walls — not as a conqueror, but as the one who made the path.",
  flags: { sacrificedWoolenThread: true, labyrinthPathPermanent: true },
  worldStateChanges: { labyrinthOpen: 1 },
};

// ── Dream/Camp ──
export const ch8DreamData = {
  campDescription: "The harbor of Heraklion at night. Salt air, distant music, the sound of waves against Cretan stone. You camp on the dock, watching the stars wheel above the sea. The labyrinth is behind you. What you did inside it is not.",
  dreamText: "You dream of the labyrinth — but from above, like a bird. Its corridors spell letters. Not Greek. Older. A language of lines and turns that reads: 'The path home is through the center of what you fear.' At the center, Asterion's garden blooms. In the dream, it reaches the surface. Flowers push through stone. Crete is covered in them.",
  nightmareText: "The labyrinth collapses. Asterion falls into darkness. You reach for him but he's too far. 'You could have saved me,' he says. Not accusing. Stating. You wake with dirt under your fingernails that wasn't there before.",
  communeText: "Kira sits on the dock, legs dangling over the water. She doesn't look at you when you sit down. 'I would have killed him,' she says. 'Before. Before I saw his eyes.' She's quiet for a long time. 'Are we heroes or are we just people who got lucky enough to ask the right question?' You don't answer. She doesn't need you to.",
  communeStatChanges: { Empathy: 1 },
};

// ── Ticker Messages ──
export const ch8TickerMessages = [
  { condition: { flag: "impressedMinotaur" }, text: "The labyrinth of Crete has gone quiet. For the first time in memory, no screams echo from below." },
  { condition: { flag: "convincedMinos" }, text: "King Minos has ordered a window cut into the ceiling above the labyrinth's center. Workers are confused but obedient." },
  { condition: { flag: "freedPrisoner" }, text: "A man claiming to be Daedalus has been seen on the docks of Heraklion, asking about ships to Athens." },
  { condition: { flag: "sacrificedWoolenThread" }, text: "Travelers report that the labyrinth of Crete has become navigable. A thread of light guides them through." },
  { condition: {}, text: "Poseidon's temples across Crete report tremors. The sea god stirs — something has changed in his domain." },
];
