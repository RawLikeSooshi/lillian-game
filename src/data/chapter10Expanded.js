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
    reveal: "The Thread was never a path — it was you. Every world you touched, every person you changed, every choice you made wove the connection between mortal and divine. The thread was always your story. You were always the bridge.",
    chapters: [10],
  },
  {
    id: "ch10_thunder",
    text: "The daughter of thunder does not strike — she illuminates.",
    reveal: "Zeus's power is destruction — the lightning that splits trees and shatters stone. Yours is clarity — the lightning that lights up the entire sky for a single, brilliant moment so everyone can see. That's what you did. You showed mortals and gods what they could be. Not by force. By example.",
    chapters: [10],
  },
  {
    id: "ch10_circle",
    text: "The last prophecy is the first one understood.",
    reveal: "Every prophecy from the Oracle pointed here. Not to the choice at the summit — to the understanding that made the choice possible. The Oracle never predicted the future. It reflected the truth you weren't ready to see. Until now.",
    chapters: [10],
  },
];

// ── Major Encounter: The Ascent (DC 15 endurance, 3 rounds) ──
export const ch10EncounterAscent = {
  title: "The Divine Resistance",
  enemyName: "Mount Olympus",
  image: "\u26F0\uFE0F",
  atmosphere: "The mountain itself resists you. Not with malice — with gravity, with pressure, with the accumulated weight of what you're about to face. The air thickens until breathing feels like drinking. Each step costs more than the last — not in strength but in certainty. The mountain isn't testing your body. It's testing whether you'll keep climbing when your body asks you to stop.\n\nThis is the final test of everything you've endured. Every road. Every sea. Every labyrinth. Every choice that cost you something. The mountain remembers all of it. It wants to know if you do too.",
  baseDC: 15,
  woundSource: "olympus",
  choices: [
    {
      prompt: "The path crumbles. The stone beneath your feet sheds its mortal skin — rock becoming crystal, crystal becoming light. The altitude is in your lungs, your blood, the ringing in your ears that won't stop.",
      timer: 12,
      options: [
        { text: "Dig your hands into the crystal. Climb. Muscle and will and nothing else.", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Find the pattern. Step where the stone is solid. Read the mountain.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
        { text: "Slow your breathing. One step at a time. Control what you can.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "A wind strikes — not weather but divine pressure, the mountain pushing back. Ghosts of failed heroes swirl in the gale. Their faces are twisted with regret. They whisper: 'Turn back. You aren't ready.'",
      timer: 12,
      options: [
        { text: "Ignore the voices. They failed. You won't.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Answer them: 'Maybe not. But I'm here anyway.'", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Listen to one ghost. Learn what broke them so it doesn't break you.", stat: "Cunning", statChanges: { Cunning: 1 } },
      ],
    },
    {
      prompt: "The summit — visible now, blazing above the clouds. But the final stretch is vertical. Smooth crystal. No handholds. Divine pressure at its peak. Your arms burn. Your vision blurs. Everything says stop.",
      timer: 10,
      options: [
        { text: "Call on your blood. Let the lightning carry you the last distance.", stat: "Courage", statChanges: { Courage: 2 } },
        { text: "Let go of the struggle. Stop climbing. Rise.", stat: "Empathy", statChanges: { Empathy: 1 } },
        { text: "Remember every person who helped you get here. Climb for them.", stat: "Empathy", statChanges: { Empathy: 2 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "You summit Mount Olympus the way lightning strikes a tree — with absolute, inevitable certainty. The crystal sings beneath your hands. The ghosts of failed heroes go quiet — not in defeat but in recognition. One of them — a young woman with a spear — smiles. The hero from Elysium. She made it here once too.\n\nThe divine pressure doesn't ease. It transforms. It becomes welcome — the resistance of something that was testing you because it needed to be sure. And now it's sure.\n\nThe mountain wasn't fighting you. It was preparing you. The way fire prepares a blade.\n\nYou stand at the top of the world. Below you: everything you've ever known. Above you: everything you're about to become.",
      statChanges: { Courage: 2, Discipline: 1 },
      reputation: { gods: 2 },
      flags: { conqueredOlympus: true, perfectAscent: true },
    },
    success: {
      text: "You reach the summit. Battered. Winded. Hands cut from crystal, lungs aching from air that's more light than oxygen. But standing.\n\nThe cloud line breaks and the light of Olympus hits you — warm and ancient and impossibly bright. The light of a place that has been waiting for you. Not patiently. Impatiently. The way a parent waits at a window.\n\nYou made it. The mountain tested you and you held. Not perfectly — there were moments when your grip slipped, when the ghosts' whispers found the cracks. But enough. More than enough.",
      statChanges: { Courage: 1 },
      reputation: { gods: 1 },
      flags: { conqueredOlympus: true },
    },
    partial: {
      text: "The summit comes at a cost. You crawl the last stretch — hands and knees on crystal that cuts your palms, pulling yourself over the edge of the cloud line with the last strength your body has.\n\nBut you're here. On Olympus. Your hands are bleeding and your breath comes in ragged gasps and your whole body trembles with the effort of existing at this altitude.\n\nBut you're here. That matters more than how you arrived.",
      statChanges: {},
      flags: { conqueredOlympus: true },
    },
    fail: {
      text: "The mountain almost breaks you. You fall twice — losing ground, sliding on crystal, the ghosts crowding close with faces that aren't mocking. Mourning. They've seen this before.\n\nBut something pulls you up. A hand of wind. A push from below. Poseidon? Athena? Your own divine blood, refusing to let you fail at the last step? You don't know.\n\nYou reach the summit — barely. Carried as much as climbing. The gods you've met along the way, lending one final push from the shadows.\n\nYou made it. That has to be enough. Because you're here, and here is where the story has always been going.",
      statChanges: { Courage: -1 },
      flags: { conqueredOlympus: true, assistedAscent: true },
    },
  },
};

// ── Exploration Nodes (Olympus summit — pick 2 of 3) ──
export const ch10ExplorationNodes = {
  title: "The Summit of Olympus",
  description: "Before the Hall of the Gods opens, the summit offers you three places — each one a final gift from the divine world. Time enough to visit two before the doors open and the last chapter begins.",
  picks: 2,
  nodes: [
    {
      id: "forge_of_stars",
      name: "The Forge of Stars",
      icon: "\uD83D\uDD28",
      hint: "A forge that burns with white fire so bright it has no shadow. Hephaestus's masterwork. Something you carry can be made into something more.",
      type: "scene",
      content: {
        text: "The forge is beautiful and terrifying. White fire burns without fuel — self-sustaining, eternal, the fire that existed before wood was invented. Tools hang on racks that extend into infinity — every hammer, tong, and chisel ever imagined, including some that haven't been imagined yet.\n\nHephaestus isn't here. But his presence is — the warmth, the patience, the honest heat of a god who makes things instead of breaking them.\n\nA note, written in soot on the anvil in handwriting you recognize:\n\n\"Place what you carry on the flame. What survives will be better than before. What doesn't survive wasn't real.\"\n\nThe fire waits. It's not hungry — it's patient. The patience of a craftsman who has all the time in the world and uses every second of it.",
        statChanges: { Discipline: 1, Wisdom: 1 },
        setsInventory: ["starforgedToken"],
        feedback: "You place your most valued item in the flame. The fire roars — white, then blue, then a color that doesn't exist in the mortal spectrum, a color that can only be seen from the top of a mountain that touches the sky.\n\nWhen it cools, what remains is changed. Stronger. Lighter. Glowing with starlight — the light of the forge that made the first divine weapons, the first automaton, the first beautiful thing.\n\nHephaestus's forge doesn't destroy. It purifies. Burns away what's unnecessary. Leaves what's essential.\n\nThe note on the anvil has changed. New words, still in soot:\n\n\"Good. You chose well. — H.\"",
        lesson: "Refinement requires fire. The forge doesn't ask permission to burn away impurities — it just does. What survives is the truest version of itself. The same is true of people. The same is true of you.",
        setsFlags: { visitedForge: true, forgedFinalItem: true },
      },
    },
    {
      id: "library_of_fate",
      name: "The Library of Fate",
      icon: "\uD83D\uDCDC",
      hint: "Scrolls stretching in every direction. Every prophecy ever spoken. Including yours.",
      type: "scene",
      content: {
        text: "The library is infinite. Not large — infinite. Scrolls in every direction, reaching past the limits of vision into a distance that doesn't resolve. Every prophecy ever spoken. Every prophecy that will be spoken. Every prophecy that was spoken and then broken by someone who refused to accept it.\n\nThe air smells like old paper and possibility and the specific dust of things that have been waiting a very long time to be read.\n\nA shelf near the entrance holds scrolls marked with your name. Every prophecy the Oracle gave you — from the first crossroads to the last dream. You can read them now. All of them. In order.\n\nAnd for the first time, you can see the pattern. They were never predictions. They were descriptions. The Oracle saw what was already inside you — courage you hadn't tested, wisdom you hadn't earned, compassion you hadn't yet given — and named it before you could.\n\nThe Oracle didn't guide you. It mirrored you.",
        statChanges: { Wisdom: 2 },
        feedback: "You read through every prophecy. Some make you laugh — *the maze does not trap the lost; it traps the proud* — because you remember the moment you understood it. Some make your eyes burn — *death is not the opposite of life; it is the opposite of forgetting* — because you remember who taught you that.\n\nTogether, they tell a story. Your story, from a perspective you couldn't have understood until now. The perspective of someone who always knew you'd make it — not because the outcome was fixed, but because the person was.\n\nYou were always going to be this version of yourself. The Oracle just helped you find her faster.",
        lesson: "Looking back at every prediction and seeing the pattern changes your relationship with the future. Not because the future is determined — but because the seeds of who you become are always visible, if you know how to look. The Oracle knew. Now you do too.",
        setsFlags: { visitedLibrary: true, reviewedProphecies: true },
      },
    },
    {
      id: "heras_garden",
      name: "Hera's Garden",
      icon: "\uD83C\uDF3A",
      hint: "A garden of impossible flowers. Colors that don't have names. Hera's private sanctuary. She's waiting for you.",
      type: "scene",
      content: {
        text: "The garden is achingly beautiful. Flowers that don't exist in the mortal world bloom in colors your eyes don't have names for — colors between violet and grief, between gold and joy. A fountain murmurs at the center, the water running upward instead of down.\n\nHera sits on a stone bench. She looks up when you enter — and her face is the most complicated thing you've ever seen. Anger. Sadness. Respect. Surprise. All tangled together like threads in a loom that no one's figured out how to weave yet.\n\n\"So you made it,\" she says. \"The daughter of my husband's wandering eye. Standing in my garden.\"\n\nShe looks at the flowers. Touches one — a bloom the color of heartbreak — and it leans into her hand.\n\n\"I have hated every child like you. You know that. Every mortal-born demigod is a reminder that Zeus loved someone who wasn't me. That I wasn't enough.\"\n\nShe pauses. The garden is silent.\n\n\"But I watched you. I watched you choose compassion when cruelty would have been easier. I watched you protect people who had no claim on you — a shade child, a cursed boy, refugees who didn't know your name. I watched you forgive things that didn't deserve forgiveness.\"\n\nShe stands. She's tall. Not as tall as Athena. But taller than you expected.\n\n\"I won't pretend to love you. I don't. But I will say this: you are not what I expected. And for a goddess who has seen everything, who has watched every permutation of this story play out across ten thousand years — *that* is no small thing.\"",
        statChanges: { Empathy: 2, Courage: 1 },
        reputationChanges: { gods: 2 },
        feedback: "Hera extends her hand. Not warmth. Not forgiveness. But truce. The acknowledgment of one strong person by another — across a gulf of pain and jealousy and divine politics that has nothing to do with you and everything to do with you.\n\nYou take her hand. It's cool. Firm. The grip of a queen who has held her throne for longer than your species has existed.\n\n\"Don't make me regret this,\" she says.\n\nBut there's a ghost of a smile on her lips. The first one she's given a child of Zeus in millennia.",
        lesson: "Reconciliation with someone who hated you isn't about making them love you. It's about both of you finding enough honesty to see each other clearly. Hera didn't forgive Zeus. She recognized *you* — as a person, not a symbol. There's a difference. And the difference is everything.",
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
  resistances: [],
  vulnerabilities: ["Assert", "Reason", "Empathize", "Deflect", "Endure"],
  rounds: [
    {
      npcLine: "Zeus leans forward on his throne. The lightning in his eyes dims to something almost human — blue, warm, searching.\n\n\"I want to know something,\" he says. His voice is quiet. The quiet of someone who has been rehearsing this question for nine years and still doesn't know how to ask it.\n\n\"Through all of this — the trials, the disguises, the gods testing you in a hundred ways you didn't choose — did you ever hate me? For hiding you? For being absent?\"",
      options: {
        Assert: { text: "Yes. I hated you. I had every right to.", stat: "Courage", dc: 6 },
        Reason: { text: "I didn't have enough information to hate you. I was angry at a shape, not a person.", stat: "Wisdom", dc: 6 },
        Empathize: { text: "I hated what you did. Not who you are. Those are different things.", stat: "Empathy", dc: 5 },
        Deflect: { text: "Does it matter? We're here now. That's what counts.", stat: "Cunning", dc: 7 },
        Endure: { text: "Some days yes. Some days no. That's the honest answer.", stat: "Discipline", dc: 5 },
      },
    },
    {
      npcLine: "Zeus is quiet for a long moment. The kind of quiet that fills a room the way water fills a vessel — completely, leaving no space for anything else.\n\nThen:\n\n\"I've been king for millennia. I've held this throne through wars and treachery and the weight of an entire world pressing on my shoulders every day for longer than mountains have existed.\"\n\nHis hands — enormous, scarred, the hands that hold thunderbolts — rest on his knees. Still.\n\n\"And none of it. None of it was as difficult as watching you grow up from a distance and not being allowed to help.\"",
      options: {
        Assert: { text: "Then you should have helped anyway. Rules are made to be broken. You of all people know that.", stat: "Courage", dc: 6 },
        Reason: { text: "You were trapped by the same system you built. That's the tragedy of power.", stat: "Wisdom", dc: 5 },
        Empathize: { text: "I believe you. That sounds like the hardest thing in the world.", stat: "Empathy", dc: 5 },
        Deflect: { text: "You're the king of the gods. Who was stopping you, exactly?", stat: "Cunning", dc: 7 },
        Endure: { text: "I don't need an explanation. I need a father. Can you be that? Starting now?", stat: "Discipline", dc: 5 },
      },
    },
    {
      npcLine: "Zeus stands. He is impossibly tall — taller than the Parthenon's columns, taller than the trees of the Hesperides, the tallest thing you've ever looked up at. Lightning crackles in his beard, in his hands, in the air around him like a second skin.\n\nBut his eyes — your eyes, your exact eyes — are soft. The softest thing on Olympus.\n\n\"Whatever you choose — the divinity, the mortality, the third path — I want you to know something.\"\n\nHis voice is steady. The steadiest it's been since you entered the hall.\n\n\"I did not make you strong. You did that yourself. Every choice, every sacrifice, every time you were brave when it would have been easier to be afraid — that was you.\"\n\nLightning flickers. Warm now. Golden.\n\n\"All I gave you was the blood. Everything else — the courage, the wisdom, the heart — that was you. That was always you.\"",
      options: {
        Assert: { text: "I know. And I want you to remember that. Whatever happens next.", stat: "Courage", dc: 5 },
        Reason: { text: "You gave me more than blood. You gave me a quest. And the quest shaped me too.", stat: "Wisdom", dc: 5 },
        Empathize: { text: "Thank you. That's what I needed to hear.", stat: "Empathy", dc: 4 },
        Deflect: { text: "Careful. You almost sound like a dad right now.", stat: "Cunning", dc: 6 },
        Endure: { text: "I know who I am. I've known since the first crossroads. Since the first choice.", stat: "Discipline", dc: 5 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Zeus smiles. It transforms his face — the storm god becomes a father. The throne becomes a chair. The lightning becomes sunlight.\n\nHe reaches out and puts his hand on your head. The hand is enormous — it could hold the sky — but the touch is gentle. The gentlest thing you've ever felt.\n\nLightning flows through you. Not the destructive kind. The kind that carries warmth, and recognition, and the specific love of a father who has been waiting nine years to do this one thing.\n\n\"My daughter,\" he says.\n\nTwo words. They carry the weight of an ocean. They carry the weight of a blue door and a jasmine courtyard and a night that split the sky and a girl who survived it and walked out of the ashes and never stopped walking.\n\nThe other gods watch. Athena's eyes are bright. Poseidon nods. Hephaestus's scarred hands are steady. Hermes, for once, is not smiling — he's something better. He's moved.\n\nEven Hera, from her distant throne, does not look away.",
      statChanges: { Wisdom: 1, Empathy: 1, Courage: 1 },
      reputation: { gods: 3 },
      flags: { connectedWithZeus: true, zeusBlessing: true },
    },
    draw: {
      text: "Zeus nods slowly. \"You're not ready to hear everything I want to say,\" he says. \"And I'm not ready to say it. There are words I've been carrying for nine years that are going to take more than one conversation to set down.\"\n\nHe puts his hand on your shoulder — carefully, the way you'd touch something precious and breakable. Not because you're breakable. Because the moment is.\n\n\"We started,\" he says. \"That's enough. More conversations will come. I'll make sure of that.\"\n\nThe lightning in the hall is warm. Not golden — but getting there.",
      statChanges: { Wisdom: 1 },
      reputation: { gods: 1 },
      flags: { connectedWithZeus: true },
    },
    lose: {
      text: "Zeus sighs. The sigh of a being who has held the sky and found it lighter than this conversation.\n\n\"There is a wall between us,\" he says. \"I built it. You reinforced it. Neither of us is wrong for that.\"\n\nHe doesn't touch you. But he looks at you — really looks, with the full weight of divine attention focused on a single mortal face — and in his eyes you see a thousand years of regret. It's the heaviest thing you've ever seen. Heavier than Olympus.\n\n\"Whatever you choose,\" he says, \"choose it for yourself. Not for me. Not against me. For you.\"\n\nHe sits back down on his throne. The conversation isn't over. But this part of it is.",
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
  dreamText: "The vision is complete.\n\nEvery fragment — from every chapter, every dream, every whispered prophecy, every sleepless night, every moment of terror and beauty and grief and wonder — assembles into a single, unbroken image.\n\nYour story. Told in seven heartbeats.\n\nA girl on a dusty road. Bread shared with a stranger. Gods in disguise, watching. A rival who became a mirror. A thread that connects all worlds. The daughter of thunder.\n\nAnd the last fragment — the one that completes the picture, the one that turns fragments into a whole:\n\n*You don't need me anymore.*\n\nThe Oracle's voice. Warm. Final. The warmth of a teacher watching a student open a door they built themselves.\n\n\"Remember this,\" it says. \"All of it. Every choice. Every mistake. Every kindness. Every hard thing you carried because putting it down would have meant leaving someone behind.\"\n\nA pause. The last pause.\n\n\"It was yours. All of it. It was always yours.\"",
  nightmareText: "There is no nightmare tonight.\n\nThe darkness that has followed you since the beginning — since the night the sky split open, since the ashes, since the first step on the road to Delphi — steps into the light.\n\nIt has your face.\n\nNot frightening. Not monstrous. Just you — the you that was afraid, that doubted, that woke gasping from a hundred nightmares in a hundred different places.\n\nIt smiles.\n\n\"I was never your enemy,\" it says. \"I was the part of you that wasn't ready. The part that needed to walk a little further, learn a little more, carry a little longer.\"\n\nIt holds out its hand.\n\n\"I'm ready now.\"\n\nYou take its hand. The darkness dissolves into you — not disappearing but integrating. Becoming part of the whole. The fear becomes caution. The doubt becomes discernment. The nightmares become memories.\n\nYou are whole. For the first time. Completely whole.",
};

// ── Sacrifice: The Oracle (FINAL — meta-sacrifice) ──
export const ch10SacrificeData = {
  type: "power",
  targetId: "oracleConnection",
  narrative: "The Third Path — the Path of the Thread — requires a bridge between the mortal and divine worlds. Not a road. Not a gate. A living connection, woven from understanding, strong enough to hold both realities together without either one collapsing.\n\nThe Oracle speaks. Not in riddles. Not in lessons. Not in the careful, coded language it's used for ten chapters. In plain, honest words. Its own voice. For the first time.\n\n\"I am that bridge. My voice — the one that has guided you, taught you, corrected you, praised you, whispered after every choice you've made since the first crossroads on the road to Delphi — is what connects the worlds. If you walk the Thread, I become the Thread. I go silent.\"\n\nA pause. The silence is full — the fullest silence in the game.\n\n\"Not destroyed. Completed. The way a teacher is completed when the student no longer needs them.\"\n\nAnother pause.\n\n\"You have learned enough to teach yourself. You have grown past the need for my guidance. And that — that is the greatest success a teacher can have.\"\n\nThe Oracle's voice is warm. Warmer than it's ever been. The warmth of someone saying goodbye not because they want to, but because it's time.\n\n\"You don't need me anymore.\"\n\nThe warmest pause.\n\n\"And I am so proud of who you've become.\"",
  oracleText: "Every lesson. Every whispered insight after every choice. Every prophecy decoded and understood. That is what you sacrifice — not the memory, but the voice. The teacher steps back so the student can stand alone.",
  gainText: "The Oracle goes silent. Not with a click or a fade or a dramatic flash of light. With a breath — a long, satisfied exhalation, the sound of a voice that said everything it needed to say.\n\nThe Thread blazes. Golden light fills the space between Olympus and the earth — a permanent connection, woven from every lesson, every choice, every small kindness. The bridge holds.\n\nYou are the bridge now. The voice that guides you is your own.\n\nIt always was.",
  flags: { sacrificedOracle: true, oracleCompleted: true },
  worldStateChanges: { oracleActive: -1, threadPathOpen: 1 },
};

// ── Dream/Camp (FINAL — all themes converge) ──
export const ch10DreamData = {
  campDescription: "There is no campfire on Olympus. Instead, you sit on a ledge of crystal that overlooks the entire world. Every city. Every road. Every sea you crossed and every mountain you climbed and every place where you stopped and helped someone or failed to and kept going anyway.\n\nThe stars are closer here. Close enough to touch — and if you did, you think they'd be warm. Every constellation tells a story. Tonight, they tell yours.",
  dreamText: "The dream is every dream you've ever had in this journey, played back in sequence — not as fragments but as chapters. Complete.\n\nThe dusty road to Delphi. The Sphinx's stone-dark eyes. The sea crossing, the strait, Scylla's hundred heads closing one by one. The garden where the apples grew. The forge where the fire shaped you. The Underworld where you learned your name. The labyrinth where you said someone else's. The siege where you carried forty-three names to the top of a hill.\n\nEvery face appears: the old woman, the shade child, Asterion, Hephaestus, Persephone, the ferryman with the kind eyes. Niko, with his hands in his pockets. Kira, with her armor slowly coming off. Every god. Every mortal. Every shade.\n\nThey nod. One by one. And fade.\n\nAnd at the end — after everyone — you see yourself. Not a reflection. Not a mirror-version or a future-ghost. You. Standing at the summit. Older, maybe. Wiser, definitely. Tired and whole.\n\nThe future you smiles.\n\n\"You made it,\" she says. \"Not perfectly. Not easily. But genuinely.\"\n\nYou wake up.\n\nThe last dream is over. All the dreams are over. What comes next is not a dream. It's a choice.\n\nYour choice.",
  nightmareText: "There are no nightmares left. Not tonight. Not anymore.\n\nThe darkness is inside you now — integrated, understood, carried with purpose instead of fled from in terror. The fear is still there. It always will be. But it's *yours* now. A tool. A compass. A reminder of what matters.\n\nYou sleep the deepest sleep of your life. No visions. No whispers. No gods watching from the shadows.\n\nJust rest. The kind you've earned.\n\nAnd when you wake, you are ready.",
  communeText: "Kira sits on the crystal ledge beside you. The whole world below. The stars above. The space between filled with everything you've done and haven't done and might still do.\n\nNeither of you speaks for a long time. The stars turn. The world breathes. A distant thunderstorm — somewhere over Athens, maybe — flickers against the dark.\n\n\"Do you know what you're going to choose?\" she asks.\n\n\"No,\" you say.\n\n\"Good,\" she says. \"If you already knew, it wouldn't be a real choice.\"\n\nYou sit in silence until dawn. Watching the world turn. Watching the stars tell your story.\n\nIt's the best conversation you've ever had.",
  communeStatChanges: { Wisdom: 1, Empathy: 1 },
};

// ── Ticker Messages (world-resolution themed) ──
export const ch10TickerMessages = [
  { condition: { flag: "conqueredOlympus" }, text: "The mortal world feels the mountain's acknowledgment. Crops grow fuller. Storms gentle. Something has shifted in the balance between earth and sky." },
  { condition: { flag: "heraReconciled" }, text: "For the first time in an age, Hera's temples receive offerings of thanks — not appeasement. The flowers in her garden bloom a color no one has seen before." },
  { condition: { flag: "connectedWithZeus" }, text: "Thunder rolls across every sky in the world — not in anger, not in warning. In joy. Even the gods look up." },
  { condition: {}, text: "The stars rearrange. A new constellation appears in the night sky: a girl climbing a mountain, one hand reaching for the stars. Astronomers will argue about its name for centuries. The gods already know it." },
  { condition: { flag: "sacrificedOracle" }, text: "The Oracle at Delphi goes silent. The priestess stands in the empty temple, smiling. 'It is complete,' she says to no one. 'The last lesson has been taught.' She walks outside, into the sunlight, and closes the door behind her." },
];
