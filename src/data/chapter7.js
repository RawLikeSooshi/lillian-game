/**
 * Chapter 7: "The Forge of Hephaestus"
 * Setting: Volcanic island of Lemnos. Heat, sulfur, divine craftsmanship.
 * God: Hephaestus — openly himself. Honest, blunt, kind.
 */

export const chapter7Scenes = {
  volcanicShore: {
    id: "ch7_shore",
    title: "The Volcanic Shore",
    image: "🌋",
    mood: "road",
    transitionText: "The boat drops you on a beach the color of night. Black sand, fine as ground bone, crunches under your feet with a sound like nothing you've heard. The air hits you like opening an oven — thick with sulfur, heavy with heat, tasting of rotten eggs and hot iron. Lemnos. The island of the forge god. It doesn't care whether you're ready.",
    atmosphere: "Steam hisses from cracks in obsidian rock. The beach is volcanic glass — sharp, dark, warm through your sandals. Nothing grows within a hundred yards of the waterline. The island is breathing.",
    text: "Lemnos doesn't welcome visitors. It tolerates them.\n\nThe shore is volcanic rock — sharp as broken pottery, dark as the inside of a fist, and warm enough to feel through the leather of your sandals. Steam vents hiss between boulders, spitting sulfur-scented clouds that sting your eyes and coat your tongue with metal. The air smells like the world's worst cooking and the world's oldest furnace, all at once.\n\nInland, the volcano owns the skyline. Not erupting — breathing. Slow plumes of white smoke drift from vents near the summit like the exhalations of something enormous and patient. Somewhere inside that mountain, someone is working. You can feel it in the ground — a vibration, steady as a heartbeat, the rhythm of a hammer that has been falling for centuries.\n\nThe path from the beach climbs steeply. The heat intensifies with every step, pressing against your face like a hand. Your waterskin is already half empty and you've barely started.\n\nThis island will test your endurance before it tests anything else.",
    choices: [
      {
        text: "Pace yourself. Slow and steady up the slope. Conserve water.",
        statChanges: { Discipline: 2 },
        setsFlags: { pacedAscent: true },
        feedback: "You ration every sip — one mouthful per hundred steps, counted precisely. You rest in the shade of boulders when the heat peaks, pressing your back against stone that's merely warm instead of scorching. It takes twice as long as charging would have.\n\nBut when you reach the plateau, you're tired — not broken. Your legs ache. Your waterskin has a few sips left. And you can feel the forge-vibration in your feet now, steady and strong.\n\nThe volcano rumbles. Approval? Indigestion? Hard to tell with volcanoes.",
        lesson: "Endurance isn't about toughness — it's about pacing. The people who survive harsh environments aren't the strongest. They're the ones who respect the environment enough to adjust their approach. The mountain doesn't care how brave you are. It cares whether you brought enough water.",
      },
      {
        text: "Push through quickly. The faster you climb, the sooner you're out of this heat.",
        statChanges: { Courage: 1, Discipline: 1 },
        setsFlags: { rushedAscent: true },
        feedback: "You charge up the slope like it owes you something. Your lungs burn — not from exertion but from the sulfur, thick and chemical, coating the inside of your throat. Halfway up, your foot catches on a jagged ridge of obsidian and you go down hard, scraping your palm on rock that's sharp enough to draw blood and hot enough to cauterize it.\n\nYou make it to the top. Gasping. Dehydrated. Bleeding from one hand. But standing.\n\nSometimes brute force works. Sometimes it costs more than it should. You won't know which this was until later.",
        lesson: "Speed can be a valid strategy — but it has costs that aren't always obvious at the time. You arrived faster but diminished. In a situation that requires peak performance afterward, arriving exhausted is its own kind of failure.",
      },
      {
        text: "Study the steam vents. They might show you a cooler path.",
        statChanges: { Wisdom: 2 },
        setsFlags: { foundCoolPath: true },
        feedback: "You stop at the base and watch. The steam vents aren't random — they follow fault lines in the rock, like veins in a body. Between the lines, the obsidian is cooler — dark and smooth where the vented areas are crusted white with mineral deposits.\n\nYou trace a zigzag path between the fault lines, stepping where the rock is cool to the touch, and the temperature drops noticeably. The route is longer but the air is cleaner. You arrive at the plateau fresh, observant, and carrying a piece of information the others missed:\n\nTool marks on some of the rocks. Someone maintains this path. Someone *wants* people to find the cooler way.",
        lesson: "The environment was giving you information — the steam vents were a map, not just an obstacle. The people who read landscapes the way others read books have an enormous advantage. The cool path wasn't hidden. It just required someone who looked before they climbed.",
      },
      {
        text: "Look for signs that someone else has climbed this recently.",
        statChanges: { Cunning: 1, Wisdom: 1 },
        setsFlags: { trackedRival: true },
        feedback: "There — scuff marks on the obsidian, a shade lighter than the surrounding rock where sandal leather scraped away the surface layer. And there — a waterskin, discarded and empty, wedged between two boulders. Recently empty. The leather hasn't stiffened yet.\n\nShe was here. Your rival. Probably yesterday, judging by how far the volcanic dust has drifted back over her trail. She was moving fast — and she underestimated the heat.\n\nNo other traces. Just those two mistakes. She's getting better at hiding her path.\n\nBut not perfect. Not yet.",
        lesson: "Tracking someone tells you two things at once: where they went and how they think. The discarded waterskin means she underestimated the heat — rushed, like you considered doing. The clean trail otherwise means she's learning from her mistakes. Both pieces of information matter.",
      },
    ],
  },

  theForge: {
    id: "ch7_forge",
    title: "The Forge of Hephaestus",
    image: "🔨",
    mood: "forge",
    transitionText: "The plateau opens into a workshop carved from the living rock of the mountain — vast, vaulted, lit by a forge fire so bright it has its own weather. Heat pours from the entrance like breath from a dragon's mouth. Inside, someone is hammering — slow, deliberate, powerful. Each strike rings like a bell being tuned.",
    atmosphere: "Bronze automatons stand motionless along the walls like soldiers waiting for orders that may never come. The forge fire burns white-hot at the center — so bright it hurts to look at directly. Tools hang in perfect order on walls blackened by centuries of soot. This is a place where things are made.",
    text: "He's not what you expected.\n\nHephaestus sits on a stone bench near the forge, wiping soot from his hands with a cloth that was probably white once. He's broad-shouldered and strong-armed — the arms of someone who has swung a hammer every day for longer than your civilization has existed — but he moves carefully. One leg is shorter than the other, braced with a device of his own making: gears and springs and bronze struts that click softly with each movement. His face is honest and weathered, like good leather that's been left in the sun. Not handsome the way the other gods are handsome. Real.\n\nHe looks up when you enter. No surprise. No performance. No mask.\n\n\"I know who you are,\" he says. His voice is low and direct, with the roughness of someone who spends more time talking to metal than to people. \"Zeus's daughter. He told me you'd come eventually.\"\n\nHe tosses the cloth aside.\n\n\"Sit down. I'm not going to test you with riddles or disguises. That's my family's habit, not mine.\"\n\nHe pours you water from a clay jug. It's cool — impossibly, perfectly cool, as if the jug exists in a different relationship with temperature than everything else on this island.\n\n\"Your father is powerful but absent. That's his nature — he does things from a distance and calls it protection. The question isn't whose child you are.\"\n\nHe meets your eyes. Brown eyes. Steady. The steadiest thing you've seen since the ferryman.\n\n\"It's whose equal you'll become.\"\n\nHe waits. He's genuinely interested in your answer. Not testing — asking. And the difference, you're learning, matters more than anything.",
    choices: [
      {
        text: "'I don't want to be anyone's equal. I want to be myself.'",
        statChanges: { Courage: 2, Wisdom: 1 },
        setsFlags: { answeredSelf: true },
        feedback: "Hephaestus laughs — a real laugh, deep and warm, like the sound the forge makes when the fire catches properly. The kind of laugh that fills a room and makes the automatons' heads turn.\n\n\"Good answer. Most people your age would have named a parent, or a hero, or said something about being 'the best.' You said something harder.\"\n\nHe leans forward. The bronze brace on his leg clicks softly.\n\n\"Being yourself requires knowing yourself. Do you? Because the forge is about to find out.\"",
        lesson: "Rejecting comparison is an act of courage. Most people define themselves relative to others — better than, equal to, different from. Saying 'I want to be myself' sounds simple. It's the hardest answer in the room.",
      },
      {
        text: "'My mother's equal. She raised me without any divine power.'",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { answeredMother: true },
        feedback: "Hephaestus goes quiet. The forge fire dims — just slightly, as if it's listening.\n\nHis eyes change. Something old moves behind them.\n\n\"My mother threw me from Olympus when I was born,\" he says softly. \"Because I was imperfect. I fell for an entire day. I shattered both legs on the rocks below.\"\n\nHe touches the bronze brace absently.\n\n\"Your mother kept you. Raised you. Loved you without any divine power to make it easier.\"\n\nHe nods slowly. \"You chose well, naming her. She earned it. Most gods never do.\"",
        lesson: "Honoring the parent who was present — rather than reaching for the one who was absent — shows a kind of emotional wisdom that Hephaestus, who was literally thrown away by his mother, understands better than anyone alive or divine.",
      },
      {
        text: "'I want to understand why you're being honest with me when the other gods weren't.'",
        statChanges: { Cunning: 1, Wisdom: 1 },
        setsFlags: { questionedHonesty: true },
        feedback: "Hephaestus shrugs. The movement is economical — no wasted motion, even in his gestures. A craftsman's body, everything purposeful.\n\n\"Because I'm the only one who doesn't need anything from you. I build things. I fix things. I don't play politics.\"\n\nHe holds up his hands — scarred across every knuckle, callused to leather, burn marks layered over older burn marks. Hands that have never stopped working.\n\n\"These are honest. The forge is honest. Metal doesn't lie — you heat it, you shape it, it shows you exactly what it is. I like that about it.\"\n\nHe looks at you.\n\n\"I like that about you, too. What I've seen so far.\"",
        lesson: "Asking someone why they're being trustworthy is itself a sign of wisdom. Trust should be examined, not just accepted with relief. Hephaestus respected the question because it showed you're thinking — not just grateful.",
      },
      {
        text: "'I don't know yet. That's why I'm still walking.'",
        statChanges: { Discipline: 1, Wisdom: 1 },
        setsFlags: { answeredUncertain: true },
        feedback: "Hephaestus nods. The nod of a craftsman who just heard a piece of metal ring true.\n\n\"Honesty. Good.\" He stands — the brace clicking, bearing his weight — and moves toward the forge. \"Most heroes have an answer rehearsed. Polished like a speech. You haven't.\"\n\nThe forge fire brightens as he approaches, as if recognizing him.\n\n\"Good. The forge will help you figure it out.\" He picks up his hammer — enormous, black-handled, worn smooth by millennia of grip. \"That's what it does. It burns away everything that isn't true.\"\n\nHe hefts the hammer once. The air rings.\n\n\"Let's see what's left.\"",
        lesson: "Admitting you don't know — especially about something as fundamental as who you're becoming — is harder and more honest than any rehearsed answer. Uncertainty, when it's genuine, is a form of integrity. Hephaestus works with raw material. He prefers it unfinished.",
      },
    ],
  },

  theMaking: {
    id: "ch7_making",
    title: "The Making",
    image: "⚒️",
    mood: "forge",
    transitionText: "Hephaestus leads you deeper into the forge. The heat is extraordinary — the air shimmers like water, and your skin prickles with sweat that evaporates before it can form drops. Bronze automatons stir along the walls, bringing materials to the central anvil with the silent efficiency of a hive.",
    atmosphere: "The forge fire shifts colors as you watch — orange to white to blue to something beyond blue, a color that doesn't have a name. The metal on the anvil sings as it heats, a high clear note that climbs and climbs. This is where divine weapons are born.",
    text: "Hephaestus stands at the central anvil. The forge fire paints his face in shifting colors — orange, white, blue — and the heat bends the air between you like a lens.\n\nFive blanks of celestial bronze lie on the workbench. Each one is partially shaped — started but not finished, roughed out but not refined. Waiting for someone to decide what they'll become.\n\n\"Every weapon reflects the person who wields it,\" Hephaestus says. His voice is calm over the roar of the fire. \"I don't choose for you. Never have. Never will.\"\n\nHe gestures to the blanks:\n\nA sword — half-formed, balanced for precision. Even incomplete, the edge catches light.\n\nA shield — heavy, broad, with mounting points for reinforcement. Solid as a promise.\n\nA mirror — polished bronze, already catching the forge light in ways that shouldn't be possible. Reflections that move independently of what they're reflecting.\n\nA lyre — small, portable, with strings that hum without being touched. Music that already exists, waiting to be released.\n\nA lockpick — delicate, intricate, with mechanisms so small you can barely see them. A whisper made of metal.\n\n\"Pick the one that feels true,\" Hephaestus says. \"Not the one that feels powerful. There's a difference.\"\n\nHe steps back. The forge waits. The blanks wait. The whole mountain holds its breath.",
    choices: [
      {
        text: "The sword. You've earned the right to fight directly.",
        statChanges: { Courage: 2 },
        setsFlags: { forgedSword: true, forgedWeapon: true },
        setsInventory: ["forgedSword"],
        feedback: "You take the sword blank. It's heavy in your hands — heavier than it looks — but balanced in a way that makes the weight disappear when you grip it right.\n\nHephaestus nods. \"Courage chooses the blade. I respect that.\"\n\nHe shows you how to work the forge. Not gently — the forge isn't gentle. You hammer. Your arms burn. Sparks fly like orange stars, landing on your forearms and dying. The metal screams under the impact — a high, thin sound that changes pitch as the shape emerges. Hammer. Heat. Hammer again. The rhythm enters your bones.\n\nWhen it cools — quenched in water that hisses and boils and fills the workshop with steam — the sword gleams with an inner light. Not flashy. Steady. The light of something that knows what it's for.\n\nIt fits your hand like it was always yours. Like your hand grew around the memory of holding it.",
        lesson: "A sword is the most direct of weapons — it says 'I will face you openly, with nothing between us.' Choosing the blade means choosing confrontation over avoidance. That's not reckless — not if you've earned the skills to back it up.",
      },
      {
        text: "The shield. Protection matters more than attack.",
        statChanges: { Discipline: 2 },
        setsFlags: { forgedShield: true, forgedWeapon: true },
        setsInventory: ["forgedShield"],
        feedback: "Hephaestus's eyes brighten — the first real spark of pleasure you've seen on his face. \"The shield. Interesting. Most heroes reach for the sword first. They always do.\"\n\nHe guides your hands as you hammer the bronze flat, fold it, hammer again. Each fold strengthens the metal — layers on layers, like the rings of a tree, each one adding resilience. The sound of hammering changes: sharp at first, then deeper, more resonant, as the shield grows denser.\n\nWhen it's done, it hums. A low, steady resonance you feel in your chest rather than hear with your ears. The surface is smooth and dark, and your reflection in it looks older than you are.\n\n\"It will hold against anything once,\" he says. \"After that, it depends on you.\"",
        lesson: "Choosing defense over attack reflects a discipline most heroes don't have — the understanding that surviving is more important than winning. A shield doesn't end fights. It ensures you're still standing when they end.",
      },
      {
        text: "The mirror. Knowledge is the strongest weapon.",
        statChanges: { Wisdom: 2 },
        setsFlags: { forgedMirror: true, forgedWeapon: true },
        setsInventory: ["forgedMirror"],
        feedback: "Hephaestus pauses. The forge fire dims — just slightly — as if surprised.\n\n\"Very few choose the mirror,\" he says quietly. \"Perseus did, once. He used it to see Medusa's reflection instead of her face. It saved his life.\"\n\nThe polishing takes hours. No hammering — just careful, patient, circular work with cloths of increasing fineness. Your arms ache differently than they would from swinging a hammer. This is the ache of precision. Of attention sustained past the point of comfort.\n\nWhen it's done, the mirror shows more than reflections. For one vertiginous moment, you see yourself as you truly are — not your face but your *self*, laid open like a book. Your strengths. Your fears. The places where you're strong and the places where you're still growing.\n\nIt's startling. And it's the most useful thing anyone has ever given you.",
        lesson: "A mirror as a weapon is an ancient Greek idea — Perseus used one to defeat what he couldn't face directly. It represents the power of seeing clearly. Wisdom isn't passive. Applied correctly, it's the sharpest weapon in the forge.",
      },
      {
        text: "The lyre. Connection is stronger than combat.",
        statChanges: { Empathy: 2 },
        setsFlags: { forgedLyre: true, forgedWeapon: true },
        setsInventory: ["forgedLyre"],
        feedback: "Hephaestus smiles — a genuine, warm smile that transforms his weathered face into something almost gentle.\n\n\"Orpheus chose the lyre,\" he says. \"It let him walk into the Underworld and almost walk back out.\"\n\nStringing the lyre requires a different kind of skill. Each string must be tuned not to a musical note but to an emotion — joy, grief, courage, calm. Your fingers find the tension by feel, tightening until the string *sings* with the feeling it carries. The work is intimate. Quiet. Nothing like hammering.\n\nWhen it's done, you draw your thumb across the strings. The forge fire flickers. The automatons along the walls pause mid-motion, heads turning. Even the mountain seems to hold its breath.\n\n\"It will reach anyone,\" Hephaestus says. \"Even things that have no ears. Even things that have forgotten how to listen.\"",
        lesson: "Choosing empathy as your weapon means believing that connection can resolve what force cannot. The lyre doesn't destroy — it communicates. In a world full of monsters, that's either the bravest choice or the most foolish. Often both.",
      },
      {
        text: "The lockpick. Access is the ultimate power.",
        statChanges: { Cunning: 2 },
        setsFlags: { forgedLockpick: true, forgedWeapon: true },
        setsInventory: ["forgedLockpick"],
        feedback: "Hephaestus raises an eyebrow — a single degree of movement that carries more expression than most people's entire faces.\n\n\"The lockpick. That's new.\"\n\nThe work is unlike anything else in the forge — delicate where everything else is powerful. Tiny tumblers the size of apple seeds. Springs as thin as eyelashes. Mechanisms within mechanisms, each one clicking into place with a sound like a whispered secret. You burn your fingers three times on components too small to grip with tongs.\n\nBut when it's done, it's beautiful. Not the beauty of a sword — the beauty of a clock, of a puzzle box, of a thing designed to understand other things.\n\n\"This will open any lock made by mortal hands,\" Hephaestus says. He turns it in the forge light, admiring his own work. \"Divine locks... well. We'll see about those.\"",
        lesson: "A lockpick is a tool of access, not destruction. Choosing it means you value getting *in* over breaking *through.* It's the choice of someone who believes the best solutions involve doors, not walls. Hermes would approve. So does Hephaestus, though he'd deny it.",
      },
    ],
  },

  theTest: {
    id: "ch7_test",
    title: "The Test of the Forge",
    image: "🔥",
    mood: "forge",
    transitionText: "Hephaestus leads you to a chamber deeper in the mountain — through corridors of living rock where the walls pulse with heat and the air tastes of molten bronze. \"Every weapon must be tested,\" he says. His voice is matter-of-fact. The way a doctor says 'this will sting.' \"Not against a target. Against a trial.\"",
    atmosphere: "The testing chamber is circular, carved from obsidian so dark it eats the light. Bronze automatons line the walls in alcoves, their forge-fire eyes dim, waiting. The air doesn't just crackle — it hums. The whole mountain is paying attention.",
    textVariants: {
      forgedSword: "The automatons stir. Three of them step forward — bronze warriors with blank faces and movements like flowing water. They don't speak. They're beyond speech. They're precision.\n\n\"Your sword against my machines,\" Hephaestus says from the doorway. \"They won't kill you — I built them better than that. But they won't go easy, either.\"\n\nHis eyes are steady. This is a gift, not a punishment.\n\n\"Show me what you forged is worthy.\"\n\nThe first automaton raises its fist. It's faster than something made of bronze has any right to be.",
      forgedShield: "A mechanism activates in the ceiling — bronze arms descending on articulated joints, each one holding a different weapon: spear, hammer, sword. They begin to swing in a pattern — slow at first, almost gentle. Then faster. Then faster.\n\n\"Your shield against my gauntlet,\" Hephaestus says. \"Block everything. The shield will hold as long as your arms do.\"\n\nThe first blow falls like a building.",
      forgedMirror: "The chamber darkens. Not gradually — completely, as if someone poured ink into the air. Shapes move in the blackness. Not automatons — illusions. Reflections of things that aren't there.\n\n\"Your mirror against my illusions,\" Hephaestus says. His voice comes from everywhere. \"Find what's real. The mirror will show you truth. But only if you have the nerve to look.\"\n\nThe first illusion steps forward. It wears your face.",
      forgedLyre: "The chamber fills with sound — grinding gears, hissing steam, the deep volcanic rumble of the mountain itself, all layered into a wall of noise that makes your teeth vibrate. An automaton stands in the center, damaged and erratic, its limbs swinging wildly, its movement pattern broken beyond prediction.\n\n\"Your lyre against chaos,\" Hephaestus says. \"Calm the machine. The lyre can reach anything — but you have to find the right frequency.\"\n\nThe automaton lurches toward you. Its broken arm sweeps the air.",
      forgedLockpick: "A door appears in the chamber wall — massive, bronze, covered in mechanisms that click and shift and reset themselves. Behind it, you can hear something moving — something that wants to be found.\n\n\"Your lockpick against my finest lock,\" Hephaestus says. \"Three layers. Each more complex than the last. And the door runs on a timer.\"\n\nHis voice is calm. \"If you don't finish, it seals. Permanently.\"\n\nThe first mechanism clicks. The timer starts. You can hear it counting.",
      default: "The testing chamber activates. Whatever you forged, this is where you prove it was the right choice.\n\nHephaestus watches from the entrance, arms folded, the forge light painting half his face orange and leaving the other half in shadow.\n\n\"I'll know when it's over,\" he says. \"So will you.\"",
    },
    choices: [
      {
        text: "Trust your weapon. Let the forging guide your instincts.",
        statChanges: { Courage: 1, Wisdom: 1 },
        setsFlags: { trustedWeapon: true },
        feedback: "You stop thinking and start *feeling*. The weapon responds — not like a tool in your hand but like a hand itself, an extension of something you didn't know you had until this moment. The test unfolds around you and you meet it the way water meets rock: naturally, without plan, finding every gap.\n\nHephaestus watches from the doorway. When it's over, he nods.\n\n\"That's what a true forging looks like,\" he says. \"The weapon and the wielder become one thing. You don't use it. You *are* it.\"\n\nHis voice carries the satisfaction of a craftsman watching his work do exactly what it was built to do.",
        lesson: "Trust in your own creation — whether it's a weapon, a plan, or a decision you made three chapters ago — requires letting go of doubt at the moment it matters most. You chose this weapon for a reason. Trusting that reason under pressure is what makes the choice real.",
      },
      {
        text: "Be methodical. Observe the test's pattern before committing.",
        statChanges: { Discipline: 1, Wisdom: 1 },
        setsFlags: { methodicalTest: true },
        feedback: "You wait. You watch. Three heartbeats. Five. The test has a rhythm — of course it does. Hephaestus builds everything with rhythm. The hammer, the forge, the automatons — they all pulse to the same internal clock.\n\nOnce you see it, you move with precision. Not flashy. Not dramatic. Just effective — each motion fitting into the next like gears in a machine. The test ends cleanly. Efficiently. No wasted movement.\n\n\"Disciplined,\" Hephaestus says. Not a compliment — a diagnosis. But his tone says he approves. Deeply.",
        lesson: "Patience under pressure is a rare skill. Most people react immediately to danger — instinct demands it. You waited long enough to understand the test before facing it. That small delay — the gap between seeing and acting — is where wisdom lives.",
      },
      {
        text: "Push your limits. This is the moment to discover what you can really do.",
        statChanges: { Courage: 2 },
        setsFlags: { pushedLimits: true },
        feedback: "You throw everything into it — everything you have, everything you've learned, every drop of courage and skill and divine blood that flows in your veins.\n\nThe weapon blazes in your hands. Literally — for three seconds, it glows. White-hot. Not from the forge. From *you*. The light pours from your grip into the metal and the metal sings with it.\n\nYou didn't know you could do that. Neither did Hephaestus.\n\n\"Interesting,\" he says. And from a god who has forged weapons for ten thousand years, who has seen every hero and every weapon and every fire that's ever burned — *interesting* is the highest word there is.\n\n\"There's more to you than the numbers suggest.\"",
        lesson: "Testing your limits is how you discover them. You'll never know what you're capable of until you're in a situation that demands everything you have and then asks for more. The forge didn't just test the weapon. It tested you. And you surprised everyone — including yourself.",
      },
      {
        text: "Adapt. If the test changes, change with it.",
        statChanges: { Cunning: 1, Empathy: 1 },
        setsFlags: { adaptedToTest: true },
        feedback: "The test shifts mid-sequence — Hephaestus changes the pattern, because of course he does. A craftsman who builds tests that don't change isn't building tests. He's building theater.\n\nYou pivot. The weapon moves with you — not against you, not dragging behind, but *with* you, as if it anticipated the shift before you did. Maybe it did. The forging goes both ways.\n\nWhen the test ends, you're breathing hard but unbroken.\n\n\"Adaptable,\" Hephaestus says. The word comes out with weight — with respect. \"That's the rarest quality in a wielder. Most people are either brave or careful. You're neither. You're flexible.\"\n\nHe turns the word over like he'd turn a piece of bronze.\n\n\"I can't forge that. You came with it.\"",
        lesson: "Adaptability is underrated because it's hard to teach. You can train courage. You can practice discipline. But the ability to change approach mid-crisis — to let go of Plan A without panicking, to find Plan B while Plan A is still falling apart — comes from somewhere deeper. From being comfortable with uncertainty itself.",
      },
    ],
  },
};

// ── Quest chapter7 has no fork — linear with exploration branching ──

export default chapter7Scenes;
