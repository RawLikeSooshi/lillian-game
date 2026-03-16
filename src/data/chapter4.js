/**
 * Chapter 4: "The Straits of Messina"
 * Setting: Narrow sea passage. Scylla and Charybdis. The hero crosses by ship.
 * God in disguise: Poseidon as weathered captain.
 */

export const chapter4Scenes = {
  portRhegion: {
    id: "ch4_port",
    title: "The Port at Rhegion",
    image: "⚓",
    mood: "docks",
    transitionText: "The road south ends where all roads end eventually — at the sea. Rhegion appears around a bend in the coast: a rough port town of salt-crusted timber and tarred rope, where the gulls scream like they're arguing with the wind and losing. From the dock, you can see the straits — a narrow throat of water between two landmasses, where the current moves in ways that look less like water and more like something breathing.",
    atmosphere: "Salt and tar. Ropes creak against the pier. The wind carries something else — a low sound from the strait, like the sea clearing its throat.",
    text: "You need to cross the Straits of Messina. Every sailor you ask says the same thing: possible, but never safe. Something lives in the rocks on the east side — something with too many mouths. Something else churns the water on the west, pulling ships down into a throat of foam that opens and closes like a heartbeat.\n\nThree captains are willing to take you.\n\nA young woman with a fast ship and a crew of twelve. She moves like her vessel — sharp, confident, aggressive. She charges double and doesn't apologize for it.\n\nAn old man with a fishing boat so weathered it looks like driftwood that learned to float. Slow, he says, but he knows every current by name. Been crossing for forty years. He charges nothing — says he's going that way anyway.\n\nA merchant captain with a cargo vessel. Heavy, stable, room for passengers. Fair price, fair speed. The kind of choice that would never be a story anyone tells.",
    choices: [
      {
        text: "Choose the young captain. Speed means less time in danger.",
        statChanges: { Courage: 1, Cunning: 1 },
        setsFlags: { choseYoungCaptain: true },
        feedback: "Captain Althea grins when you choose her — a quick, sharp grin that shows teeth. \"Smart,\" she says. \"The straits respect speed.\"\n\nHer crew moves like one animal with twelve bodies — efficient, wordless, each person exactly where they need to be. They've done this a hundred times. You can tell because none of them looks at the strait. They look at the ropes, the sail, the captain. Never the water.\n\nThat tells you something about what's in it.",
        lesson: "Speed as a strategy works when the danger comes from prolonged exposure. The less time in the strait, the fewer chances for something to go wrong. Althea understands this in her bones.",
      },
      {
        text: "Choose the old fisherman. Experience matters more than speed.",
        statChanges: { Wisdom: 2 },
        setsFlags: { choseOldCaptain: true },
        feedback: "The old man nods when you approach his boat. Not surprised. Not flattered. As if he'd already picked you out of the crowd and was waiting for you to catch up.\n\n\"I hoped you'd choose me,\" he says quietly. His name, he claims, is Nereus.\n\n\"The straits don't respect speed.\" He squints at the water the way a farmer reads soil — not with fear, but with knowledge worn smooth by decades. \"They respect understanding.\"\n\nHis hands on the tiller are brown and cracked and certain. Something about the way he reads the current makes you feel safer than any fast ship could. Not because the danger is less — because he *knows* it.",
        lesson: "Forty years of experience carries information that no amount of bravery can replace. Nereus doesn't fear the straits. He understands them. That's a deeper kind of safety than speed can offer.",
      },
      {
        text: "Choose the merchant ship. Steady and safe.",
        statChanges: { Discipline: 1, Wisdom: 1 },
        setsFlags: { choseMerchantCaptain: true },
        feedback: "The merchant captain, Demos, is practical and unhurried — the kind of man who measures everything twice and then measures it again because the first two measurements were made before breakfast.\n\n\"We'll cross at dawn,\" he says. \"When the currents are weakest and the wind is with us.\"\n\nHis ship is heavy but stable, the hull thick with tar, the crew professional and unexcitable. This isn't their first crossing, and they clearly intend for it not to be their last.\n\nNothing about this choice will make a good story. That's exactly the point.",
        lesson: "Choosing the reliable option when the stakes are life and death isn't boring — it's discipline. Demos won't make the crossing exciting. He'll make it survivable. Sometimes those are the same thing.",
      },
      {
        text: "Ask all three captains what they know about what lives in the straits.",
        statChanges: { Wisdom: 1, Cunning: 1 },
        setsFlags: { askedAboutStraits: true },
        feedback: "Althea shrugs. \"Something with too many heads. We go fast, it doesn't matter.\"\n\nDemos is more careful: \"Scylla on the east, Charybdis on the west. We hug the middle and pray the middle holds.\"\n\nThe old man — Nereus — says nothing for a long moment. He looks at the strait the way you'd look at someone you used to love.\n\nThen, quietly: \"She's lonely. Scylla. She wasn't always a monster.\"\n\nThe other two captains don't hear him. But you do. And you choose after hearing all three.",
        lesson: "Three experts, three different truths about the same danger. Gathering information from multiple sources doesn't confuse the picture — it completes it. Each captain saw a different piece of what waits in the strait.",
      },
    ],
  },

  theCrossing: {
    id: "ch4_crossing",
    title: "The Crossing",
    image: "🌊",
    mood: "ship",
    transitionText: "Dawn. The sail fills. The ship noses into the strait like a finger into a wound.\n\nThe water changes — dark blue to grey-green, the color of something old and troubled. The current grabs the hull, and you feel the whole ship shudder, as if it just realized where it's going.",
    atmosphere: "The strait narrows. Wind dies. The water churns from somewhere below, moving in directions that don't make sense. On the eastern cliffs, something shifts — too large, too many shapes at once.",
    textVariants: {
      choseOldCaptain: "Nereus stands at the tiller, calm as bedrock. His eyes read the water the way yours read a book — scanning, parsing, understanding.\n\n\"Watch the water,\" he says. \"Not the cliffs. The water tells you what's coming before the cliffs do.\"\n\nHe's right. The current shifts — a whirlpool forming to the west, slow and vast, pulling the surface into a spiraling drain. On the eastern cliff, you see movement: dark shapes on long necks, too many of them, reaching down from the rocks like fingers from a hand.\n\n\"Scylla,\" Nereus says. The name sounds different in his mouth — not a warning. An acknowledgment. As if he's naming an old acquaintance who has changed beyond recognition.\n\n\"She'll take something. She always does.\" His hands don't move on the tiller. \"The question is what you're willing to lose.\"",
      default: "The crossing begins. The water is wrong — moving in two directions at once, as if two seas are fighting over the same channel.\n\nOn the eastern cliff, you see what everyone warned you about.\n\nScylla.\n\nNot one creature but a colony of hunger — six heads on necks as long as ship masts, each one swaying independently, tasting the air, the spray, the fear. They reach down from the rock face like something trying to grow roots in the wrong direction.\n\nBelow, the water spirals: Charybdis. A mouth in the ocean. It opens and closes with a sound like the sea swallowing itself.\n\nThe captain shouts orders. The crew scrambles. The ship lurches.\n\nAnd you realize this is the moment where your choices start to matter in a way they never have before.",
    },
    choices: [
      {
        text: "Help the crew. Do whatever they need — pull ropes, bail water, anything.",
        statChanges: { Discipline: 2, Empathy: 1 },
        setsFlags: { helpedCrewDuringCrossing: true },
        feedback: "You throw yourself into the work. You don't know the names of half the ropes, but you know how to pull and you know how to follow the voice of someone who does. Your palms burn. Salt water stings your eyes. You pull anyway.\n\nThe crew notices. Not with words — there's no time for words. One sailor, drenched and shaking with exhaustion, catches your eye and nods. Just once.\n\nIt says more than any speech.",
        lesson: "In a crisis, the most valuable thing you can do is often the simplest: help. Not lead, not strategize, not inspire — just put your hands on a rope and pull. That's worth more than you know.",
      },
      {
        text: "Watch the water patterns. Try to predict where the danger will strike next.",
        statChanges: { Wisdom: 2, Cunning: 1 },
        setsFlags: { watchedWaterPatterns: true },
        feedback: "You grip the rail and study the water. The whirlpool has a rhythm — it pulls strongest every thirty heartbeats, then eases. Scylla's heads follow the spray, not the ship. When the waves crest, the heads strike. When the water flattens, they pull back.\n\nYou shout what you see to the captain. The ship adjusts course — two degrees starboard, just enough.\n\nTwo heads snap at empty air where the mast would have been. Where you would have been.",
        lesson: "Pattern recognition under pressure is one of the most valuable skills you can develop. The strait wasn't random — it had rules, hidden in the rhythm of the water. You found them. That saved lives.",
      },
      {
        text: "Protect the other passengers. There's a family huddled near the cargo hold.",
        statChanges: { Empathy: 2, Courage: 1 },
        setsFlags: { protectedPassengers: true },
        feedback: "A merchant family — mother, father, two small children — is pressed against the cargo hold, holding each other like they're trying to become one person. The smallest child is screaming into her father's chest.\n\nYou put yourself between them and the spray. When a wave hits the ship broadside, you brace your legs and hold the rail. The water hammers your back. You hold.\n\nThe father looks at you over his children's heads. \"Thank you,\" he says. His voice cracks on the second word. \"Thank you.\"",
        lesson: "Choosing to protect people who can't protect themselves isn't the strategically optimal move — the crew needed help too. But some choices aren't about optimization. They're about who you are when the water rises.",
      },
      {
        text: "Focus on Scylla. If you can distract one of the heads, it's one fewer threat.",
        statChanges: { Courage: 2, Cunning: 1 },
        setsFlags: { distractedScylla: true },
        feedback: "You grab a piece of loose cargo — a barrel lid, heavy enough to matter — and hurl it at the nearest head. It strikes the neck and the head snaps toward the distraction, jaws closing on wood instead of the sailor who was one second from being seized.\n\nThe head turns toward you. Eyes like tide pools — dark, depthless, confused. For a moment, there's something behind the hunger. Something that remembers being something else.\n\nThen the head retreats. It worked. Once.",
        lesson: "Direct confrontation with something overwhelming isn't always foolish — sometimes it's the only option you have. The key is doing it with purpose. You distracted one head and saved one person. That's not nothing. That's everything, to that person.",
      },
    ],
  },

  aftermath: {
    id: "ch4_aftermath",
    title: "The Cost of Passage",
    image: "🩸",
    mood: "ship",
    atmosphere: "The strait opens behind you like an unclenched fist. Sicily ahead — green, warm, impossibly still. But the ship is wounded, and so is someone aboard.",
    textVariants: {
      helpedCrewDuringCrossing: "The crossing is over. The ship is battered — rigging torn, hull gouged, the mainsail hanging like a broken wing. You're soaked, exhausted, and alive.\n\nBut not everyone came through whole. A young sailor — barely older than you, with sea-salt hair and hands that haven't finished growing — was caught by one of Scylla's heads. He's alive, but his arm is badly injured. The captain wraps it while the sailor tries not to cry and mostly succeeds.\n\n\"This is the price,\" the captain says. Not to the sailor. To you. \"The straits always take something.\"",
      protectedPassengers: "The family is safe. The children have stopped screaming. The mother holds them with the fierce grip of someone who just learned exactly how much the world wants to take.\n\nBut a sailor wasn't so lucky. Scylla caught him while you were shielding the family — one of those long necks reaching past you for the easier target. His leg is torn. He'll live, but he won't sail again.\n\nYou protected one group. Another paid the price. The math of impossible choices — the kind where every answer is right and wrong at the same time.",
      default: "The ship limps toward the Sicilian shore. You're alive. The crossing cost you nothing permanent.\n\nBut it cost the crew. A young sailor was struck by Scylla — not fatally, but enough. He sits against the mast, staring at his bandaged arm with the blank expression of someone trying to understand how the morning went so wrong so fast.\n\nThe captain says nothing. Some costs don't need commentary.",
    },
    choices: [
      {
        text: "Sit with the injured sailor. Be present.",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { satWithInjuredSailor: true },
        reputationChanges: { commonPeople: 1 },
        feedback: "His name is Kyros. He's seventeen. His arm is wrapped in linen that's already turning red at the edges.\n\nHe doesn't want to talk about the arm. He wants to know where you're going and why. You tell him some of it — not all. When you finish, he looks at the water for a long time.\n\n\"I hope it's worth it,\" he says.\n\nYou don't know what to say to that. So you sit with him in the silence, and the silence does the work that words can't.",
        lesson: "Being present for someone's pain — without fixing it, without explaining it away, without saying 'it could have been worse' — is one of the hardest and most important things a person can do. Kyros didn't need a healer. He needed someone to sit next to him while the world rearranged itself.",
      },
      {
        text: "Ask the captain what could have been done differently.",
        statChanges: { Wisdom: 2, Discipline: 1 },
        setsFlags: { askedCaptainAftermath: true },
        feedback: "The captain looks at you for a long time. The kind of look that decides how much truth a person can hold.\n\n\"Faster approach? We lose two, maybe three. Slower? Charybdis takes the ship and everyone on it. We went through the middle.\" A pause. The water laps against the hull.\n\n\"Someone always gets hurt in the middle.\"\n\nThey lean against the rail. \"The straits don't have a safe path. Only less dangerous ones. Knowing the difference is the whole job.\"",
        lesson: "Some situations have no good option — only a range of bad ones. The captain's experience taught them that the goal isn't to avoid all harm. It's to minimize it. That's a different kind of wisdom than finding the right answer — it's finding the least wrong one.",
      },
      {
        text: "Help repair the ship. The work needs doing.",
        statChanges: { Discipline: 2 },
        setsFlags: { helpedRepairShip: true },
        reputationChanges: { commonPeople: 1 },
        feedback: "Three hours. Your hands learn the shape of hull planks, the resistance of wet rope, the particular stubbornness of a sail that doesn't want to be folded. The crew teaches you wordlessly — hand here, pull this, hold that steady.\n\nThe work is hard and repetitive and exactly what you need. By the time you're done, your arms ache, your palms are raw, and the ship is seaworthy again.\n\nSomething in you is seaworthy again too.",
        lesson: "Practical work after a crisis is its own kind of healing. Doing something useful with your hands when your mind is spinning gives the spinning somewhere to go. No amount of thinking replaces the feeling of a repaired hull under your palm.",
      },
      {
        text: "Look toward Sicily. What's ahead matters more than what's behind.",
        statChanges: { Discipline: 1, Courage: 1 },
        setsFlags: { lookedForward: true },
        feedback: "The Sicilian coast is green and soft and entirely unfamiliar. Wild herbs on the hillsides. Terraced vineyards catching the light. A landscape that doesn't know what you just survived and doesn't care.\n\nThe injured sailor will heal. The ship will be repaired. And you will keep going — not because the crossing didn't matter, but because stopping here would mean it mattered for nothing.",
        lesson: "Moving forward after something difficult isn't the same as ignoring what it cost. You carry it and keep walking. Some people call that resilience. It's also just a choice — the one where you decide the pain was part of the path, not the end of it.",
      },
    ],
  },

  sicilianShore: {
    id: "ch4_shore",
    title: "The Sicilian Shore",
    image: "🏝️",
    mood: "road",
    atmosphere: "White sand warm under your feet. Wild oregano on the wind. The sound of the strait fading behind you, replaced by cicadas and the lap of gentle water. A different sea — the same sea, behaving itself.",
    text: "Sicily is a different country in everything but language. The air is warmer, heavy with jasmine and wild thyme. The trees are strange — twisted pines and silvery olives and something with dark leaves and bright fruit you've never seen. The people speak Greek with an accent that rounds every word like a pebble smoothed by water.\n\nThe port town where you land is small but welcoming. News of the crossing has already spread — a ship making it through the strait with all hands alive is notable enough to earn free wine and a table near the fire.\n\nThe captain — whoever you chose — finds you before departing.\n\n\"The road ahead leads to the western coast,\" they say, one hand on the doorframe, half-in and half-out of your story. \"I've heard talk of a garden there. At the edge of the world. Golden fruit. A dragon that never sleeps.\"\n\nThey pause. \"Most people think it's a myth.\" Their eyes find yours. \"But then, most people think Scylla is a myth too.\"",
    choices: [
      {
        text: "Ask about the garden. What do people say about it?",
        statChanges: { Wisdom: 1, Cunning: 1 },
        setsFlags: { askedAboutGarden: true },
        feedback: "The captain's eyes change — a flicker between fear and something older than fear. Wonder, maybe.\n\n\"The Garden of the Hesperides. Golden apples that grant... something. Nobody agrees what. A dragon called Ladon that never sleeps, never blinks, never stops watching. The nymphs who tend it are daughters of Atlas — the Titan who holds up the sky.\"\n\nThey shake their head. \"People who go looking for it don't always come back. But the ones who do...\"\n\nA pause. They choose their words like a sailor chooses a heading.\n\n\"They're different after.\"",
        lesson: "Legends that everyone knows but nobody investigates are worth paying attention to. The garden is real to the people here — not because they've seen it, but because they've seen what it does to the people who come back.",
      },
      {
        text: "Thank them for the passage. Part as friends.",
        statChanges: { Empathy: 1, Wisdom: 1 },
        setsFlags: { partedasFriends: true },
        reputationChanges: { commonPeople: 1 },
        feedback: "The captain takes your hand. Not a handshake — a grip. The kind that means *I got you through* and *you helped me get through* and *we survived something together that most people only hear about.*\n\nNo words. None needed. Some things are too large for language and too important for silence, and a handshake is the space between.\n\nWhoever they are, they brought you across. That bond is permanent now.",
        lesson: "Gratitude expressed simply is worth more than gratitude expressed elaborately. The captain doesn't need a speech. They need to know you understood what the crossing cost — and that you're carrying your share of it.",
      },
      {
        text: "Ask about the rival — the girl your age. Has anyone seen her?",
        statChanges: { Cunning: 1 },
        setsFlags: { askedAboutRival: true },
        feedback: "The captain thinks — forehead creased, eyes scanning memory the way they scan water.\n\n\"A girl, traveling alone? Yes. She crossed two days ago. Different ship — the fast one, Althea's.\" They study your face. \"Asked about the same garden.\"\n\nA pause. \"Friend of yours?\"\n\nYou don't know how to answer that. She's not a friend. She's not an enemy. She's something the Greek language hasn't invented a word for yet.",
        lesson: "Tracking someone who's on the same path isn't paranoia — it's awareness. She's ahead of you. That means she'll reach whatever is waiting first. Whether that's an advantage or a danger depends on things you don't know yet.",
      },
      {
        text: "Head inland immediately. You've been on the water long enough.",
        statChanges: { Discipline: 1, Courage: 1 },
        setsFlags: { headedInlandQuickly: true },
        feedback: "You don't linger. The Sicilian interior calls — hills covered in wild herbs that brush your legs as you walk, vineyards carved into slopes that catch the afternoon light, and a road that winds westward toward something you can feel in your chest but can't name.\n\nThe port shrinks behind you. The sea smell fades. The land smell takes over — warm stone, rosemary, dry earth.\n\nAhead: the west coast, the edge of the known world, and whatever waits at the end of it.",
        lesson: "Momentum has its own kind of intelligence. Sometimes the best thing to do after surviving something terrible is to keep moving before doubt has time to catch up and sit down.",
      },
    ],
  },
};

// ── Quest chapter4 has no fork — linear with exploration branching ──

export default chapter4Scenes;
