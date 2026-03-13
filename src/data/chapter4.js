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
    transitionText: "The road south ends at the sea. Rhegion is a rough port town — salt-crusted wood, the smell of fish and tar, ships creaking at anchor. The straits are visible from the dock: a narrow channel between two landmasses, where the water moves in ways that don't look right.",
    atmosphere: "The dock creaks beneath your feet. Sailors move with purpose. Everyone here knows what the straits can do.",
    text: "You need to cross the Straits of Messina. Every sailor you ask says the same thing: it's possible, but not safe. Something lives in the rocks on the east side. Something else churns the water on the west.\n\nThree captains are willing to take you:\n\nA young woman with a fast ship and a crew of twelve. She's confident, aggressive, and charges double.\n\nAn old man with a fishing boat. Slow but knows every current. He's been crossing for forty years. He charges nothing — says he's going that way anyway.\n\nA merchant captain with a cargo ship. Safe but slow. Room for passengers. Fair price.",
    choices: [
      {
        text: "Choose the young captain. Speed means less time in danger.",
        statChanges: { Courage: 1, Cunning: 1 },
        setsFlags: { choseYoungCaptain: true },
        feedback: "Captain Althea grins when you choose her. 'Smart,' she says. 'The straits respect speed.' Her crew is sharp and moves like they've done this a hundred times. They probably have.",
        lesson: "Speed as a strategy works when the danger is prolonged exposure. The less time in the strait, the fewer chances for something to go wrong. Althea understands this instinctively.",
      },
      {
        text: "Choose the old fisherman. Experience matters more than speed.",
        statChanges: { Wisdom: 2 },
        setsFlags: { choseOldCaptain: true },
        feedback: "The old man nods when you approach his boat. 'I hoped you'd choose me,' he says quietly. His name, he claims, is Nereus. 'The straits don't respect speed. They respect understanding.' Something about the way he reads the water makes you feel safer than any fast ship could.",
        lesson: "Forty years of experience carries information that no amount of bravery can replace. Sometimes the quiet option is the wise option. Nereus doesn't fear the straits — he understands them.",
      },
      {
        text: "Choose the merchant ship. Steady and safe.",
        statChanges: { Discipline: 1, Wisdom: 1 },
        setsFlags: { choseMerchantCaptain: true },
        feedback: "The merchant captain, Demos, is practical and unhurried. 'We'll cross at dawn,' he says. 'When the currents are weakest.' His ship is heavy but stable. The crew is professional. This isn't their first crossing, and they intend for it not to be their last.",
        lesson: "Choosing the reliable option when stakes are high isn't boring — it's discipline. Demos won't make the crossing exciting, and that's exactly the point.",
      },
      {
        text: "Ask all three captains what they know about what lives in the straits.",
        statChanges: { Wisdom: 1, Cunning: 1 },
        setsFlags: { askedAboutStraits: true },
        feedback: "Althea shrugs: 'Something with too many heads. We go fast, it doesn't matter.' Demos says: 'Scylla on the east, Charybdis on the west. Hug the middle.' The old man says nothing for a long moment. Then: 'She's lonely. Scylla. She wasn't always a monster.' You choose after hearing all three.",
        lesson: "Gathering information from multiple sources gives you a richer picture than any single expert. Each captain knows a different truth about the same danger.",
      },
    ],
  },

  theCrossing: {
    id: "ch4_crossing",
    title: "The Crossing",
    image: "🌊",
    transitionText: "Dawn. The ship enters the strait. The water changes color — dark blue to grey-green. The current grabs the hull like a hand.",
    atmosphere: "The strait narrows. The water churns. On the eastern cliffs, something moves.",
    textVariants: {
      choseOldCaptain: "Nereus stands at the tiller, calm as stone. 'Watch the water,' he says. 'Not the cliffs. The water will tell you what's coming.'\n\nHe's right. The current shifts — a whirlpool forming to the west, pulling the ship. On the eastern cliff, you see movement: dark shapes, too many of them, reaching.\n\n'Scylla,' Nereus says, as if naming an old acquaintance. 'She'll take something. She always does. The question is what you're willing to lose.'",
      default: "The crossing begins. The water is wrong — moving in two directions at once. On the eastern cliff, you see what everyone warned you about.\n\nScylla. Not one creature but many — heads on long necks, reaching down from the rocks. Below, the water spirals: Charybdis, pulling everything toward its center.\n\nThe captain shouts orders. The crew scrambles. And you realize this is the moment where your choices start to matter in a different way.",
    },
    choices: [
      {
        text: "Help the crew. Do whatever they need — pull ropes, bail water, anything.",
        statChanges: { Discipline: 2, Empathy: 1 },
        setsFlags: { helpedCrewDuringCrossing: true },
        feedback: "You throw yourself into the work. You don't know the names of half the ropes, but you can pull and you can follow instructions. The crew notices. One sailor, drenched and exhausted, gives you a nod that says more than any words.",
        lesson: "In a crisis, the most valuable thing you can do is often the simplest: help. Not lead, not strategize — just help. Hands that pull when asked are worth more than voices that plan.",
      },
      {
        text: "Watch the water patterns. Try to predict where the danger will strike next.",
        statChanges: { Wisdom: 2, Cunning: 1 },
        setsFlags: { watchedWaterPatterns: true },
        feedback: "You study the currents. The whirlpool has a rhythm — it pulls strongest every thirty seconds. Scylla's heads follow the spray, not the ship. You shout what you see to the captain. The ship adjusts course. Two heads snap at empty air where you would have been.",
        lesson: "Pattern recognition under pressure is one of the most valuable skills a person can develop. The strait wasn't random — it had rules. You found them.",
      },
      {
        text: "Protect the other passengers. There's a family huddled near the cargo hold.",
        statChanges: { Empathy: 2, Courage: 1 },
        setsFlags: { protectedPassengers: true },
        feedback: "A merchant family — mother, father, two small children — is pressed against the cargo hold, terrified. You put yourself between them and the spray. When a wave hits, you brace. The children bury their faces against their mother. 'Thank you,' the father says. 'Thank you.'",
        lesson: "Choosing to protect people who can't protect themselves isn't the strategically optimal move — the crew needed help too. But some choices aren't about optimization. They're about who you are when the water rises.",
      },
      {
        text: "Focus on Scylla. If you can distract one of the heads, it's one fewer threat.",
        statChanges: { Courage: 2, Cunning: 1 },
        setsFlags: { distractedScylla: true },
        feedback: "You grab a piece of cargo and hurl it toward the nearest head. It snaps at the distraction — and misses a sailor who was about to be grabbed. The head turns toward you, confused, then retreats. It worked. Once.",
        lesson: "Direct confrontation with overwhelming danger isn't always foolish — sometimes it's the only option. The key is doing it with purpose, not recklessness. You distracted one head and saved one person. That's not nothing.",
      },
    ],
  },

  aftermath: {
    id: "ch4_aftermath",
    title: "The Cost of Passage",
    image: "🩸",
    atmosphere: "The strait is behind you. Sicily is ahead. But the ship is damaged and someone is hurt.",
    textVariants: {
      helpedCrewDuringCrossing: "The crossing is over. The ship is battered but afloat. You're soaked, exhausted, and alive.\n\nBut not everyone is unhurt. A young sailor — barely older than you — was caught by one of Scylla's heads. He's alive, but his arm is badly injured. The captain wraps it while the sailor tries not to cry.\n\n'This is the price,' the captain says. Not to the sailor — to you. 'The straits always take something.'",
      protectedPassengers: "The family is safe. The children are crying but unhurt. The mother looks at you with an expression you'll remember for a long time.\n\nBut a sailor wasn't so lucky. Scylla caught him while you were protecting the family. His leg is torn. He'll live, but he won't sail again.\n\nYou protected one group. Another paid the price. The math of impossible choices.",
      default: "The ship limps toward the Sicilian shore. You're alive. The crossing cost you nothing permanent.\n\nBut it cost the crew. A young sailor was injured by Scylla — not fatally, but enough. He sits against the mast, staring at his bandaged arm.\n\nThe captain says nothing. Some costs don't need commentary.",
    },
    choices: [
      {
        text: "Sit with the injured sailor. Be present.",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { satWithInjuredSailor: true },
        reputationChanges: { commonPeople: 1 },
        feedback: "His name is Kyros. He's seventeen. He doesn't want to talk about his arm. He wants to know where you're going and why. You tell him some of it. Not all of it. When you're done, he says: 'I hope it's worth it.' You don't know what to say to that.",
        lesson: "Being present for someone's pain — without fixing it, without explaining it, without minimizing it — is one of the hardest and most important things you can do. Kyros didn't need a healer. He needed someone to sit with him.",
      },
      {
        text: "Ask the captain what could have been done differently.",
        statChanges: { Wisdom: 2, Discipline: 1 },
        setsFlags: { askedCaptainAftermath: true },
        feedback: "The captain looks at you for a long moment. 'Faster approach? We lose more. Slower? Charybdis takes the ship. We went through the middle. Someone always gets hurt in the middle.' They pause. 'The straits don't have a safe path. Only less dangerous ones.'",
        lesson: "Some situations genuinely have no good option — only a range of bad ones. The captain's experience taught them that the goal isn't to avoid all harm. It's to minimize it. That's a different kind of wisdom than finding the right answer.",
      },
      {
        text: "Help repair the ship. The work needs doing.",
        statChanges: { Discipline: 2 },
        setsFlags: { helpedRepairShip: true },
        reputationChanges: { commonPeople: 1 },
        feedback: "You spend three hours patching hull planks and re-tying rigging. You don't know how to do most of it, but you learn. The crew teaches you wordlessly — hand here, pull this, hold that. By the time you're done, you're exhausted but the ship is seaworthy again.",
        lesson: "Practical work after a crisis is a form of healing — not just for the ship, but for you. Doing something useful with your hands when your mind is spinning is a way of processing that no amount of thinking can replace.",
      },
      {
        text: "Look toward Sicily. What's ahead matters more than what's behind.",
        statChanges: { Discipline: 1, Courage: 1 },
        setsFlags: { lookedForward: true },
        feedback: "The Sicilian coast is green and unfamiliar. You don't know what's there. But you survived the crossing, and that means something. The injured sailor will heal. The ship will be repaired. And you will keep going.",
        lesson: "Moving forward after difficulty isn't the same as ignoring the cost. You acknowledge it, carry it, and keep walking. Some people call this resilience. It's also a choice.",
      },
    ],
  },

  sicilianShore: {
    id: "ch4_shore",
    title: "The Sicilian Shore",
    image: "🏝️",
    atmosphere: "White sand. Warm air. The sound of the strait fading behind you. A new land.",
    text: "Sicily is different from mainland Greece. The air is warmer, the trees are different, and the people speak Greek with an accent that takes getting used to.\n\nThe port town where you land is small but welcoming. News of the crossing has already spread — a ship making it through the strait with all hands alive is notable enough to earn respect.\n\nThe captain — whoever you chose — finds you before departing.\n\n'The road ahead leads to the western coast,' they say. 'I've heard stories about a garden there. At the edge of the world. Most people think it's a myth.' They pause. 'But then, most people think Scylla is a myth too.'",
    choices: [
      {
        text: "Ask about the garden. What do people say about it?",
        statChanges: { Wisdom: 1, Cunning: 1 },
        setsFlags: { askedAboutGarden: true },
        feedback: "The captain's eyes change — something between fear and wonder. 'The Garden of the Hesperides. Golden apples. A dragon that never sleeps. The nymphs who tend it are the daughters of Atlas.' They shake their head. 'People who go looking for it don't always come back. But the ones who do... they're different after.'",
        lesson: "Legends that everyone knows but no one investigates are worth examining. The garden is real to the people here — not because they've seen it, but because they've seen the people who came back from it.",
      },
      {
        text: "Thank them for the passage. Part as friends.",
        statChanges: { Empathy: 1, Wisdom: 1 },
        setsFlags: { partedasFriends: true },
        reputationChanges: { commonPeople: 1 },
        feedback: "The captain takes your hand. No words — just a grip that says everything about shared danger and survival. Whoever they are, they got you through. That counts for something permanent.",
        lesson: "Gratitude expressed simply is worth more than gratitude expressed elaborately. The captain doesn't need a speech. They need to know you understood what it cost.",
      },
      {
        text: "Ask about the rival — the girl your age. Has anyone seen her?",
        statChanges: { Cunning: 1 },
        setsFlags: { askedAboutRival: true },
        feedback: "The captain thinks. 'A girl, traveling alone? Yes. She crossed two days ago. Different ship. Asked about the same garden.' They look at you curiously. 'Friend of yours?' You don't know how to answer that.",
        lesson: "Tracking someone who's on the same journey as you isn't paranoia — it's awareness. She's ahead of you. That means she'll reach whatever is waiting first.",
      },
      {
        text: "Head inland immediately. You've been on the water long enough.",
        statChanges: { Discipline: 1, Courage: 1 },
        setsFlags: { headedInlandQuickly: true },
        feedback: "You don't linger. The Sicilian interior calls — hills covered in wild herbs, vineyards carved into slopes, and a road that winds westward toward something you can feel but not name.",
        lesson: "Momentum has its own kind of intelligence. Sometimes the best thing you can do after surviving something difficult is to keep moving before doubt catches up.",
      },
    ],
  },
};

// ── Quest chapter4 has no fork — linear with exploration branching ──

export default chapter4Scenes;
