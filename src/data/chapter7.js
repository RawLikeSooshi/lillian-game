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
    transitionText: "The boat drops you on a black-sand beach. The air is thick with sulfur and the ground radiates heat through your sandals. Lemnos. The island of the forge god.",
    atmosphere: "Steam rises from cracks in the rock. The beach is obsidian glass. Nothing grows within a hundred yards of the waterline.",
    text: "Lemnos doesn't welcome visitors. The shore is volcanic rock — sharp, dark, and warm to the touch. Steam vents hiss between boulders. The air smells like rotten eggs and hot metal.\n\nInland, the volcano dominates the skyline. Not erupting — breathing. Slow plumes of white smoke drift from vents near the summit. Somewhere inside that mountain, someone is working.\n\nThe path from the beach climbs steeply. The heat intensifies with every step. Your water skin is already half empty and you've barely started.\n\nThis island will test your endurance before it tests anything else.",
    choices: [
      {
        text: "Pace yourself. Slow and steady up the slope. Conserve water.",
        statChanges: { Discipline: 2 },
        setsFlags: { pacedAscent: true },
        feedback: "You ration every sip. You rest in the shade of boulders when the heat peaks. It takes twice as long, but when you reach the plateau, you're tired — not broken. The volcano rumbles approval, or maybe that's your imagination.",
        lesson: "Endurance isn't about toughness. It's about pacing. The people who survive harsh environments aren't the strongest — they're the ones who respect the environment enough to adjust their approach.",
      },
      {
        text: "Push through quickly. The faster you climb, the sooner you're out of this heat.",
        statChanges: { Courage: 1, Discipline: 1 },
        setsFlags: { rushedAscent: true },
        feedback: "You charge up the slope. Your lungs burn from the sulfur. Halfway up, you stumble and scrape your palm on obsidian rock. But you make it — gasping, dehydrated, but standing. Sometimes brute force works. Sometimes it costs more than it should.",
        lesson: "Speed can be a valid strategy, but it has costs. You made it up faster, but you arrived diminished. In situations that require peak performance afterward, arriving exhausted is its own kind of failure.",
      },
      {
        text: "Study the steam vents. They might show you a cooler path.",
        statChanges: { Wisdom: 2 },
        setsFlags: { foundCoolPath: true },
        feedback: "The steam vents aren't random — they follow fault lines. Between the lines, the rock is cooler. You trace a zigzag path between the vents, and the temperature drops noticeably. It's longer, but you arrive fresh and observant. You noticed something else too: tool marks on some of the rocks. Someone maintains this path.",
        lesson: "Observation before action. The environment was giving you information — the steam vents were a map, not just an obstacle. The people who read landscapes like text have an enormous advantage over those who just push through them.",
      },
      {
        text: "Look for signs that someone else has climbed this recently.",
        statChanges: { Cunning: 1, Wisdom: 1 },
        setsFlags: { trackedRival: true },
        feedback: "There — scuff marks on the obsidian. A water skin, discarded and empty, wedged between two rocks. She was here. Your rival climbed this same path, probably yesterday. She was moving fast. And she left no other traces — just these two mistakes. She's getting better at hiding her trail.",
        lesson: "Tracking someone tells you two things: where they went and how they think. The discarded water skin means she underestimated the heat. The clean trail otherwise means she's learning. Both pieces of information matter.",
      },
    ],
  },

  theForge: {
    id: "ch7_forge",
    title: "The Forge of Hephaestus",
    image: "🔨",
    transitionText: "The plateau opens into a vast workshop carved into the volcanic rock. Heat pours from within. Someone is hammering — slow, deliberate, powerful.",
    atmosphere: "Bronze automatons stand motionless along the walls. The forge fire burns white-hot. Tools hang in perfect order. This is a place of creation.",
    text: "He's not what you expected.\n\nHephaestus sits on a stone bench near the forge, wiping soot from his hands with a cloth. He's broad-shouldered and strong-armed, but he moves carefully — one leg is shorter than the other, braced with a device of his own making. His face is honest and weathered, like good leather.\n\nHe looks up when you enter. No surprise. No pretense.\n\n'I know who you are,' he says. 'Zeus's daughter. He told me you'd come eventually.' He tosses the cloth aside. 'Sit down. I'm not going to test you with riddles or disguises. That's my family's habit, not mine.'\n\nHe pours you water from a clay jug. It's cool — impossibly cool for this place.\n\n'Your father is powerful but absent. That's his nature. The question isn't whose child you are. It's whose equal you'll become.'\n\nHe waits. He's genuinely interested in your answer.",
    choices: [
      {
        text: "'I don't want to be anyone's equal. I want to be myself.'",
        statChanges: { Courage: 2, Wisdom: 1 },
        setsFlags: { answeredSelf: true },
        feedback: "Hephaestus laughs — a real laugh, deep and warm. 'Good answer. Most people your age would have said they want to be like their parents, or better than their parents. You said something harder.' He leans forward. 'Being yourself requires knowing yourself. Do you?'",
        lesson: "Rejecting comparison is an act of courage. Most people define themselves relative to others — better than, equal to, different from. Defining yourself on your own terms requires knowing what those terms are.",
      },
      {
        text: "'My mother's equal. She raised me without any divine power.'",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { answeredMother: true },
        feedback: "Hephaestus goes quiet for a moment. His eyes change. 'My mother threw me from Olympus when I was born,' he says softly. 'Because I was imperfect. Your mother kept you and raised you.' He nods slowly. 'You chose well, naming her. She earned it.'",
        lesson: "Honoring the parent who was present — rather than reaching for the one who was absent — shows emotional wisdom. Hephaestus, who was literally thrown away by his mother, understands the value of that choice better than anyone.",
      },
      {
        text: "'I want to understand why you're being honest with me when the other gods weren't.'",
        statChanges: { Cunning: 1, Wisdom: 1 },
        setsFlags: { questionedHonesty: true },
        feedback: "Hephaestus shrugs. 'Because I'm the only one who doesn't need anything from you. I build things. I fix things. I don't play politics.' He holds up his hands — scarred, strong, callused. 'These are honest. The forge is honest. Metal doesn't lie. I like that about it.'",
        lesson: "Asking why someone is being trustworthy is itself a sign of wisdom. Trust should be examined, not just accepted. Hephaestus respects the question because it shows you're thinking, not just relieved.",
      },
      {
        text: "'I don't know yet. That's why I'm still walking.'",
        statChanges: { Discipline: 1, Wisdom: 1 },
        setsFlags: { answeredUncertain: true },
        feedback: "Hephaestus nods approvingly. 'Honesty. I like it. Most heroes have an answer ready — they've rehearsed it. You haven't.' He stands and moves toward the forge. 'Good. The forge will help you figure it out. That's what it does. It burns away everything that isn't true.'",
        lesson: "Admitting you don't know something yet — especially about yourself — is harder and more honest than giving a polished answer. Uncertainty, when genuine, is a form of integrity.",
      },
    ],
  },

  theMaking: {
    id: "ch7_making",
    title: "The Making",
    image: "⚒️",
    transitionText: "Hephaestus leads you deeper into the forge. The heat is extraordinary. Bronze automatons stir to life, bringing materials.",
    atmosphere: "The forge fire shifts colors — orange, white, blue. The metal sings as it heats. This is where divine weapons are born.",
    text: "Hephaestus stands at the central anvil. Five blanks of celestial bronze lie on the workbench, each partially shaped.\n\n'Every weapon reflects the person who wields it,' he says. 'I don't choose for you. You choose for yourself.'\n\nHe gestures to the blanks:\n\nA sword — half-formed, balanced for precision.\nA shield — heavy, broad, with mounting points for reinforcement.\nA mirror — polished bronze, already catching the forge light strangely.\nA lyre — small, portable, with strings that hum without being touched.\nA lockpick — delicate, intricate, with mechanisms you can barely see.\n\n'Pick the one that feels true. Not the one that feels powerful. There's a difference.'\n\nHe steps back. The forge waits.",
    choices: [
      {
        text: "The sword. You've earned the right to fight directly.",
        statChanges: { Courage: 2 },
        setsFlags: { forgedSword: true, forgedWeapon: true },
        setsInventory: ["forgedSword"],
        feedback: "You take the sword blank. It's heavy but balanced. Hephaestus nods. 'Courage chooses the blade. I respect that.' He shows you how to work the forge — hammer, heat, hammer again. Your arms burn. The metal screams. But when it cools, the sword gleams with an inner light. It fits your hand like it was always yours.",
        lesson: "A sword is the most direct of weapons — it says 'I will face you openly.' Choosing the sword means choosing confrontation over avoidance. That's not reckless if you've earned the skills to back it up.",
      },
      {
        text: "The shield. Protection matters more than attack.",
        statChanges: { Discipline: 2 },
        setsFlags: { forgedShield: true, forgedWeapon: true },
        setsInventory: ["forgedShield"],
        feedback: "Hephaestus's eyes brighten. 'The shield. Interesting. Most heroes reach for the sword first.' He guides your hands as you hammer the bronze flat, fold it, hammer again. The shield grows heavier and stronger with each fold. When it's done, it hums with a low resonance. 'It will hold against anything once,' he says. 'After that, it depends on you.'",
        lesson: "Choosing defense over offense reflects a particular kind of discipline — the understanding that surviving matters more than winning. A shield doesn't end fights. It ensures you're still standing when they end.",
      },
      {
        text: "The mirror. Knowledge is the strongest weapon.",
        statChanges: { Wisdom: 2 },
        setsFlags: { forgedMirror: true, forgedWeapon: true },
        setsInventory: ["forgedMirror"],
        feedback: "Hephaestus pauses. 'Very few choose the mirror,' he says quietly. 'Perseus did, once. It saved his life.' The polishing takes hours — no hammering, just careful, patient work. When it's done, the mirror shows more than reflections. For a moment, you see yourself as you truly are. It's startling. And helpful.",
        lesson: "A mirror as a weapon is an ancient Greek idea — Perseus used one to defeat Medusa. It represents the power of seeing clearly, of understanding what you face before you face it. Wisdom isn't passive. It's a weapon.",
      },
      {
        text: "The lyre. Connection is stronger than combat.",
        statChanges: { Empathy: 2 },
        setsFlags: { forgedLyre: true, forgedWeapon: true },
        setsInventory: ["forgedLyre"],
        feedback: "Hephaestus smiles — a genuine, warm smile. 'Orpheus chose the lyre. It let him walk into the underworld and almost walk back out.' Stringing the lyre requires patience and an ear for tone. Each string must be tuned not to a note, but to an emotion. When it's done, playing it makes the forge fire flicker and the automatons pause. 'It will reach anyone,' he says. 'Even things that have no ears.'",
        lesson: "Choosing empathy as your weapon means believing that connection can resolve what force cannot. The lyre doesn't destroy — it communicates. In a world full of monsters, that's either the bravest or the most foolish choice. Often both.",
      },
      {
        text: "The lockpick. Access is the ultimate power.",
        statChanges: { Cunning: 2 },
        setsFlags: { forgedLockpick: true, forgedWeapon: true },
        setsInventory: ["forgedLockpick"],
        feedback: "Hephaestus raises an eyebrow. 'The lockpick. That's new.' The work is delicate — tiny tumblers, springs the size of eyelashes, mechanisms within mechanisms. You burn your fingers three times. But when it's done, it's beautiful in its precision. 'This will open any lock made by mortal hands,' he says. 'Divine locks... well. We'll see.'",
        lesson: "A lockpick is a tool of access, not destruction. Choosing it means you value getting in over breaking through. It's the choice of someone who believes the best solutions involve doors, not walls. Hermes would approve. So does Hephaestus, though he'd never admit it.",
      },
    ],
  },

  theTest: {
    id: "ch7_test",
    title: "The Test of the Forge",
    image: "🔥",
    transitionText: "Hephaestus leads you to a chamber deeper in the mountain. 'Every weapon must be tested,' he says. 'Not against a target — against a trial.'",
    atmosphere: "The testing chamber is circular, carved from obsidian. Bronze automatons line the walls, waiting. The air crackles with anticipation.",
    textVariants: {
      forgedSword: "The automatons stir. Three of them step forward — bronze warriors with blank faces and smooth movements. They don't speak. They don't need to.\n\n'Your sword against my machines,' Hephaestus says. 'They won't kill you — I built them better than that. But they won't go easy either. Show me what you forged is worthy.'\n\nThe first automaton raises its fist. It's faster than it looks.",
      forgedShield: "A mechanism activates in the ceiling. Bronze arms descend, each holding a different weapon — spear, hammer, sword. They begin to swing in a pattern, slow at first, then faster.\n\n'Your shield against my gauntlet,' Hephaestus says. 'Block everything. The shield will hold as long as your arms do.'\n\nThe first blow falls.",
      forgedMirror: "The chamber darkens. Shapes move in the shadows — not automatons, but illusions. Reflections of things that aren't there.\n\n'Your mirror against my illusions,' Hephaestus says. 'Find what's real. The mirror will show you truth, but only if you look.'\n\nThe first illusion steps forward. It looks exactly like you.",
      forgedLyre: "The chamber fills with sound — grinding gears, hissing steam, the rumble of the mountain itself. An automaton stands in the center, damaged and erratic, swinging wildly.\n\n'Your lyre against chaos,' Hephaestus says. 'Calm the machine. The lyre can reach anything — but you have to find the right frequency.'\n\nThe automaton lurches toward you.",
      forgedLockpick: "A door appears in the chamber wall — massive, bronze, covered in mechanisms. Behind it, you can hear something moving.\n\n'Your lockpick against my finest lock,' Hephaestus says. 'Three layers. Each more complex than the last. And the door is on a timer — if you don't finish, it seals permanently.'\n\nThe first mechanism clicks. The timer starts.",
      default: "The testing chamber activates. Whatever you forged, this is where you prove it was the right choice.\n\nHephaestus watches from the entrance. 'I'll know when it's over,' he says. 'So will you.'",
    },
    choices: [
      {
        text: "Trust your weapon. Let the forging guide your instincts.",
        statChanges: { Courage: 1, Wisdom: 1 },
        setsFlags: { trustedWeapon: true },
        feedback: "You stop thinking and start feeling. The weapon responds — not like a tool, but like an extension of your hand. The test unfolds around you and you meet it naturally, without hesitation. Hephaestus nods from the doorway. 'That's what a true forging looks like. The weapon and the wielder become one thing.'",
        lesson: "Trust in your own creation — whether it's a weapon, a plan, or a decision — requires letting go of doubt. You chose this weapon for a reason. Trusting that reason in the moment of testing is what makes the choice real.",
      },
      {
        text: "Be methodical. Observe the test's pattern before committing.",
        statChanges: { Discipline: 1, Wisdom: 1 },
        setsFlags: { methodicalTest: true },
        feedback: "You wait. You watch. The test has a rhythm — Hephaestus builds everything with rhythm. Once you see it, you move with precision. Not flashy, not dramatic. Just effective. The test ends cleanly. 'Disciplined,' Hephaestus says. Not a compliment — a fact. But his tone says he approves.",
        lesson: "Patience under pressure is a rare skill. Most people react to danger immediately. You waited long enough to understand it first. That small delay — the gap between stimulus and response — is where wisdom lives.",
      },
      {
        text: "Push your limits. This is the moment to discover what you can really do.",
        statChanges: { Courage: 2 },
        setsFlags: { pushedLimits: true },
        feedback: "You throw everything into it. The weapon blazes in your hands — literally, for a moment, it glows. You didn't know you could do that. Neither did Hephaestus. 'Interesting,' he says, and from a god who has forged weapons for millennia, that word carries weight. 'There's more to you than the stats suggest.'",
        lesson: "Testing your limits is how you discover them. You won't know what you're capable of until you're in a situation that demands more than you think you have. The forge didn't just test the weapon — it tested you.",
      },
      {
        text: "Adapt. If the test changes, change with it.",
        statChanges: { Cunning: 1, Empathy: 1 },
        setsFlags: { adaptedToTest: true },
        feedback: "The test shifts — Hephaestus changes the pattern mid-sequence, because of course he does. You pivot without hesitation. The weapon moves with you, not against you. When the test ends, you're breathing hard but unbroken. 'Adaptable,' Hephaestus says. 'That's the rarest quality. Most people are either brave or careful. You're flexible.'",
        lesson: "Adaptability is underrated because it's hard to teach. You can train courage. You can build discipline. But the ability to change approach mid-crisis comes from a different place — from being comfortable with uncertainty.",
      },
    ],
  },
};

// ── Quest chapter7 has no fork — linear with exploration branching ──

export default chapter7Scenes;
