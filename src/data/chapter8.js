/**
 * Chapter 8: "The Labyrinth of Crete"
 * Setting: Palace of Minos, the Labyrinth beneath Knossos.
 * God in disguise: Dionysus speaking through Ariadne.
 * Rival: Kira — encountered at the Minotaur.
 */

export const chapter8Scenes = {
  palaceMinos: {
    id: "ch8_palace",
    title: "The Palace of Minos",
    image: "\u{1F3DB}\uFE0F",
    mood: "palace",
    transitionText: "The ship docks at Heraklion under a copper sky. Crete is older than mainland Greece — you can feel it in the stones, in the way people walk, in the silence between conversations. The palace of Knossos rises on a hill like a creature crouching.",
    atmosphere: "Painted columns. The smell of bull-hide and incense. Every hallway branches into two more. Even the palace above ground is a maze.",
    text: "King Minos holds court in a throne room decorated with leaping dolphins and double-headed axes. He is not what you expected — not a tyrant, not a fool. He is precise, intelligent, and deeply suspicious of travelers.\n\n'Another young Greek on a quest,' he says, not looking up from a wax tablet. 'The last three tried to steal from my treasury. The one before that wanted to kill my... pet.' He looks at you now. His eyes are sharp. 'What do you want in my kingdom?'\n\nThe court watches. Guards line the walls. A girl about your age sits on a low stool near the throne, spinning thread. She hasn't looked up once, but you feel certain she's listening to everything.",
    choices: [
      {
        text: "Tell him the truth. You're on a journey and Crete is part of it.",
        statChanges: { Courage: 2, Wisdom: 1 },
        setsFlags: { toldMinosTruth: true },
        feedback: "Minos sets down his tablet. For a long moment, he says nothing. Then: 'Truth. From a traveler. That's new.' He waves a hand. 'You may stay. But know this — my guards will be watching, and the labyrinth below this palace is not a tourist attraction. Stay above ground.' The girl with the thread looks up for the first time. She's smiling.",
        lesson: "Honesty with powerful people is a gamble, but a calculated one. Minos has heard every lie. The truth stands out precisely because nobody offers it. Sometimes the bravest strategy is the simplest.",
      },
      {
        text: "Say you're a scholar, studying Cretan architecture.",
        statChanges: { Cunning: 2 },
        setsFlags: { liedToMinos: true },
        feedback: "Minos raises an eyebrow. 'A scholar. At your age.' He doesn't believe you — that much is obvious. But he also doesn't press. 'Scholars are harmless,' he says. 'Usually.' He waves you away. The girl with the thread watches you leave. Her expression says: I know you're lying. But I'm curious why.",
        lesson: "A lie that's slightly too clever draws more attention than a simple truth. Minos didn't believe you, but he let you stay — which means he wants to see what you do next. You've bought time, but you've also put yourself under a microscope.",
      },
      {
        text: "Ask about the labyrinth directly. Why does a palace need a maze beneath it?",
        statChanges: { Courage: 1, Wisdom: 1 },
        setsFlags: { askedMinosAboutLabyrinth: true },
        feedback: "The room goes cold. Guards shift. Minos stares at you like you've just drawn a weapon.\n\n'The labyrinth,' he says quietly, 'is not your concern. It exists to contain something that should not be free. That is all you need to know.' He dismisses you. But as you leave, the girl with the thread catches your eye and mouths two words: 'Find me.'",
        lesson: "Direct questions about sensitive topics reveal information even when they're refused. Minos's reaction told you everything: the labyrinth matters, what's inside matters more, and he's afraid. Fear in a king is worth noting.",
      },
      {
        text: "Stay quiet. Observe the court. Let Minos make his own assumptions.",
        statChanges: { Discipline: 1, Cunning: 1 },
        setsFlags: { observedMinosCourt: true },
        feedback: "You say very little. Minos studies you, waiting for the pitch, the request, the trick. When none comes, he seems unsettled. 'You're either very clever or very dangerous,' he says. 'In my experience, they're the same thing.' He lets you stay. The girl with the thread has stopped spinning. She's watching you with open curiosity.",
        lesson: "Silence in a room full of noise is its own kind of power. Minos expected you to perform — when you didn't, he had to fill the silence with his own assumptions. That gave you information without spending any.",
      },
    ],
  },

  labyrinthEntrance: {
    id: "ch8_entrance",
    title: "The Thread and the Door",
    image: "\u{1F9F6}",
    mood: "labyrinth",
    transitionText: "Night. The palace sleeps, but the girl with the thread is waiting for you in a corridor that smells of earth and old stone. Below your feet, something hums.",
    atmosphere: "Torchlight on painted walls. A door that leads down. The sound of breathing from somewhere deep below.",
    text: "Her name is Ariadne. She is the princess of Crete, daughter of Minos — and something about her is wrong. Not wrong as in broken. Wrong as in more than she should be.\n\n'I know why you're here,' she says. Her voice is calm, ancient, amused. 'You're here for what's below. Everyone who comes to Crete eventually goes below.'\n\nShe holds up a ball of crimson thread. 'This will lead you out. Tie it at the entrance, follow it back when you're done. Without it, the labyrinth keeps you. It was designed by Daedalus to be impossible to solve by memory alone.'\n\nShe tilts her head. 'You already have thread, don't you? I can feel it. Something from the beginning of your journey. It resonates.'",
    inventoryBeat: {
      item: "woolenThread",
      text: "The woolen thread from the old woman's loom — from your very first choice — pulses with warmth in your pack. It hums in harmony with Ariadne's crimson thread, like two voices singing the same note. 'Yes,' Ariadne whispers. 'That thread knows the way. It always has.'",
    },
    choices: [
      {
        text: "Take Ariadne's thread. The labyrinth is too dangerous without it.",
        statChanges: { Wisdom: 2 },
        setsFlags: { tookAriadnesThread: true },
        setsInventory: ["ariadnesThread"],
        feedback: "Ariadne presses the thread into your hand. It's warm — warmer than thread should be. 'Tie it at the entrance,' she says. 'Don't let go. The labyrinth will try to make you forget why you're holding it.' She pauses. 'I'll wait here. I always wait here.' Something in her voice is unbearably old.",
        lesson: "Accepting help when it's genuinely offered isn't weakness — it's wisdom. The labyrinth was built to defeat pride. Ariadne's thread is the counter-argument: you don't have to solve everything alone.",
      },
      {
        text: "Ask Ariadne how she knows all this. She speaks like someone much older.",
        statChanges: { Wisdom: 1, Empathy: 1 },
        setsFlags: { questionedAriadne: true, tookAriadnesThread: true },
        setsInventory: ["ariadnesThread"],
        feedback: "Ariadne's smile flickers. 'I know things I shouldn't,' she admits. 'Sometimes I say words that aren't mine. Sometimes I see through eyes that belong to someone else.' She touches her temple. 'A god speaks through me. Not always. But here, at the entrance to the labyrinth, always.' Her eyes shift — for a heartbeat, they're deep purple, like wine. Then brown again. 'Take the thread. He wants you to survive this.'",
        lesson: "When someone tells you they're more than they appear, believe them — but also see the person underneath. Ariadne is both a girl and a vessel. Both deserve your attention.",
      },
      {
        text: "Refuse the thread. You'll find your own way through.",
        statChanges: { Courage: 2, Discipline: 1 },
        setsFlags: { refusedAriadnesThread: true },
        feedback: "Ariadne stares at you. Then she laughs — not mockingly, but with something like admiration. 'Pride,' she says. 'The labyrinth loves pride. It feeds on it.' She puts the thread away. 'If you survive, find me at the exit. If you don't...' She shrugs. 'The labyrinth will add you to its collection.' The door yawns open below.",
        lesson: "Refusing help to prove yourself is sometimes courage and sometimes foolishness. The line between them is whether you can actually handle what's coming. You're about to find out which one this is.",
      },
      {
        text: "Ask what's really down there. Not the legends — the truth.",
        statChanges: { Wisdom: 2 },
        setsFlags: { learnedMinotaurTruth: true, tookAriadnesThread: true },
        setsInventory: ["ariadnesThread"],
        feedback: "Ariadne's face changes. The amusement drains away. What's left is grief.\n\n'His name is Asterion,' she says. 'He's my half-brother. Poseidon cursed him — or blessed him, depending on who you ask. He's not a monster. He's a boy who looks like a monster. There's a difference.' She hands you the thread. 'Please remember that. When you see him, please remember he has a name.'",
        lesson: "The truth about monsters is almost always more complicated than the story. Ariadne calls him by name. That changes everything about what you're walking into.",
      },
    ],
  },

  insideLabyrinth: {
    id: "ch8_inside",
    title: "The Living Maze",
    image: "\u{1F300}",
    mood: "labyrinth",
    transitionText: "Down. The stairs spiral into darkness. The walls are smooth stone, carved with images that seem to move in the torchlight. Behind you, the entrance shrinks to a point of light, then disappears.",
    atmosphere: "The walls breathe. Not metaphorically — they shift, expand, contract. The labyrinth is alive in some way you can't explain. Your footsteps echo wrong.",
    textVariants: {
      tookAriadnesThread: "The thread pays out behind you — a thin red line in the darkness. It's the only thing that makes sense down here. The walls move. Corridors that existed a minute ago close. New ones open. The labyrinth is alive, and it's testing you.\n\nSomewhere ahead, something breathes. Deep, slow, patient. The sound of something that has been waiting a very long time.\n\nThe labyrinth whispers. Not words — impressions. Turn left. No, right. No, go back. It wants you lost. It wants you afraid. The thread in your hand says otherwise.",
      default: "Without thread, the labyrinth is a nightmare given architecture. Every turn looks the same. Every corridor leads to another corridor. You mark walls with your knife, but when you come back, the marks have moved.\n\nThe labyrinth is alive. It rearranges itself. It breathes.\n\nSomewhere ahead, something breathes too. Deep, slow, patient. You're not alone down here, and you haven't been since the first step.\n\nYou have to choose: trust your instincts, or surrender to the maze and let it take you where it wants.",
    },
    choices: [
      {
        text: "Follow the left wall. Classic maze-solving technique.",
        statChanges: { Wisdom: 1, Discipline: 1 },
        setsFlags: { followedLeftWall: true },
        feedback: "The left-wall technique works in normal mazes. This is not a normal maze. But the discipline of the method keeps your mind sharp. You notice patterns — the labyrinth shifts, but not randomly. There are rules. The walls move away from something at the center, like water flowing around a stone. Follow the disruption.",
        lesson: "Systematic approaches don't always solve unusual problems, but they keep you thinking clearly while you search for the real solution. The method was wrong, but the mindset was right.",
      },
      {
        text: "Listen to the breathing. Walk toward it.",
        statChanges: { Courage: 2 },
        setsFlags: { walkedTowardBreathing: true },
        feedback: "Everyone else who entered this labyrinth ran from the breathing. You walk toward it. The labyrinth seems... surprised. Corridors open ahead of you — not to confuse, but to guide. As if the maze itself respects what you're doing. The breathing gets louder. Closer. Whatever is at the center knows you're coming.",
        lesson: "Walking toward what frightens you changes the nature of the encounter. The labyrinth was designed to trap people who run. When you walk forward with purpose, it becomes a hallway instead of a prison.",
      },
      {
        text: "Talk to the labyrinth. If it's alive, maybe it listens.",
        statChanges: { Empathy: 1, Wisdom: 1 },
        setsFlags: { spokeToLabyrinth: true },
        feedback: "'I'm not here to steal,' you say to the walls. 'I'm not here to destroy. I want to meet whoever you're protecting.' Silence. Then — the walls shift. A corridor opens, straight and clear, lit by a faint phosphorescence. The labyrinth heard you. It's not sure if it believes you. But it's giving you a chance.",
        lesson: "Treating something with intelligence as if it has intelligence is never wasted. The labyrinth might be stone and magic, but it was built by Daedalus — and Daedalus built with purpose. Understanding purpose is the beginning of communication.",
      },
      {
        text: "Close your eyes. Feel the thread — both threads — and let them guide you.",
        statChanges: { Discipline: 1, Empathy: 1 },
        setsFlags: { followedThreadsBlind: true },
        requiresItem: "woolenThread",
        feedback: "You close your eyes. The woolen thread from Chapter 1 and Ariadne's crimson thread hum together — a harmony you can feel in your bones. You walk blind, letting the threads pull you. Left. Right. Straight. Down. The labyrinth shifts around you, but the threads cut through its deception like sunlight through fog. When you open your eyes, you're standing before a massive bronze door. The center.",
        lesson: "Sometimes the tools you've carried from the beginning are the ones that matter most at the end. The woolen thread wasn't just a keepsake — it was preparation for this moment. Everything connects.",
      },
    ],
  },

  theMinotaur: {
    id: "ch8_minotaur",
    title: "The Child of Poseidon",
    image: "\u{1F402}",
    mood: "labyrinth",
    atmosphere: "The center of the labyrinth is not a prison cell. It's a garden — underground, lit by cracks in the ceiling where sunlight filters through. Flowers grow. A stream runs through stone channels. And in the middle, sitting with his back against a column, is Asterion.",
    textVariants: {
      learnedMinotaurTruth: "You know his name before you see his face. Asterion.\n\nHe is enormous — seven feet tall, shoulders like a bull, horns curving from a head that is neither human nor animal but somehow both. His eyes are brown and deeply, heartbreakingly intelligent.\n\nHe looks at you. Not with hunger. Not with rage. With recognition.\n\n'Another one,' he says. His voice is like grinding stone, but the words are gentle. 'You're smaller than the last ones. They came with swords.' He touches a scar on his arm. 'Are you here to kill me too?'\n\nBehind you, footsteps. Kira emerges from another corridor. She stops when she sees Asterion. Her hand goes to her weapon. Then she sees you. Then she sees his eyes.\n\n'Oh,' she says quietly. 'He's not what the stories say.'",
      default: "The Minotaur is not what the stories say.\n\nHe is massive — a creature of bull and man, horns and hands, muscle and something ancient. But he is sitting in a garden, surrounded by flowers he has clearly been tending. Water runs through channels he carved himself. The ceiling is cracked to let in light.\n\nHe looks at you. The stories say he should charge, should roar, should kill. Instead, he says: 'Are you here to end me?'\n\nHis voice is rough but his words are precise. He is a person. He has been alone for a very long time.\n\nBehind you, footsteps. Kira emerges from another corridor. She stops. Her hand goes to her weapon. She looks at the Minotaur, then at you.\n\n'This is the monster?' she says. 'He's... gardening.'",
    },
    text: null,
    choices: [
      {
        text: "Kill him. End his suffering. It's the merciful thing to do.",
        statChanges: { Courage: 2, Discipline: 1 },
        setsFlags: { killedMinotaur: true, minotaurDead: true },
        feedback: "Asterion closes his eyes. 'Thank you,' he whispers. He doesn't fight. He doesn't resist. The garden is still afterward — perfectly, terribly still.\n\nKira watches without speaking. When it's done, she says: 'Was that mercy or murder?' You don't answer. She doesn't press. Some questions don't have answers — they just have weight.\n\nThe labyrinth shudders. The walls begin to open. The maze mourns its ward.",
        lesson: "Mercy killing is one of the oldest moral questions in human thought. There's no right answer that doesn't cost something. You ended real suffering, but you also ended a real life. Carrying both truths at once is what makes this kind of choice so difficult — and so important.",
      },
      {
        text: "Try to heal him. Break the curse. (Requires Empathy check — DC 16)",
        statChanges: { Empathy: 3, Wisdom: 1 },
        setsFlags: { healedMinotaur: true },
        feedback: "You put your hands on Asterion's shoulders. The curse resists — Poseidon's power is old and vast and angry. Your hands burn. Your vision whites out. You push through.\n\nAsterion screams — not in pain but in transformation. The bull recedes. The horns shrink. What's left is a young man, shaking, weeping, human for the first time in decades.\n\n'My name,' he says through tears, 'is Asterion. I remember now. I remember everything.' Kira lowers her weapon. 'How did you do that?' she asks. You don't know. You just... felt what he felt. And refused to let it continue.\n\nBut you've released something powerful. A child of Poseidon, unbound. The consequences of that choice will follow you.",
        lesson: "Healing someone isn't just fixing what's broken — it's believing they can be whole again when no one else does. The DC was 16 because the world didn't want this to happen. You did it anyway. But compassion has consequences, and releasing power always changes the equation.",
      },
      {
        text: "Free him. Open the labyrinth. Let him choose his own fate.",
        statChanges: { Courage: 1, Empathy: 1, Wisdom: 1 },
        setsFlags: { freedMinotaur: true },
        feedback: "You don't kill him. You don't try to change him. You go to the walls and begin looking for a way out that isn't the way you came in.\n\nAsterion watches you, confused. 'What are you doing?'\n\n'Looking for a door,' you say. 'One that opens from both sides.'\n\nKira understands first. She starts helping. Together, you find it — a sealed passage behind the garden. Ancient. Pre-Daedalus. It leads to the surface.\n\n'You can leave,' you tell Asterion. 'Or stay. But the choice should be yours.'\n\nHe stands slowly. He's never had a choice before. The weight of it makes him tremble. 'I don't know what's out there,' he says.\n\n'Neither do I,' you say. 'That's the point.'",
        lesson: "Freedom is the hardest gift to give because you can't control what happens next. Asterion might be fine. He might not. The consequences belong to him now. That's what freedom means — and it's terrifying and beautiful in equal measure.",
      },
      {
        text: "Sit with him. Don't decide yet. Ask him what he wants.",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { satWithMinotaur: true },
        feedback: "You sit down across from Asterion in his garden. Kira, after a moment, sits too.\n\n'What do you want?' you ask him.\n\nHe stares at you. Nobody has ever asked. The silence stretches. Then: 'I want to see the sky. Not through cracks. The whole sky.' He pauses. 'And I want someone to say my name without being afraid.'\n\n'Asterion,' you say.\n\nHe closes his eyes. A tear runs down his inhuman face. 'Yes,' he says. 'That's my name.'\n\nThe three of you sit in the garden. The labyrinth is quiet. For the first time in decades, it's not a prison. It's just a place where three young people are trying to figure out the right thing to do.",
        lesson: "Before you decide someone's fate, ask them what they want. It seems obvious, but it's the step most heroes skip. Asterion has lived for decades without anyone asking. The question itself is a form of healing.",
      },
    ],
  },

  theExit: {
    id: "ch8_exit",
    title: "The Way Out",
    image: "\u{1F31F}",
    mood: "labyrinth",
    atmosphere: "The labyrinth shifts. Whatever you chose — the center has changed, and the maze knows it. The walls are opening. Or closing. It depends on what you did.",
    textVariants: {
      tookAriadnesThread: "The crimson thread glows in the shifting dark. You follow it — hand over hand, step by step — back through corridors that have rearranged themselves around your choice. The labyrinth is different now. Quieter. Whatever you did at the center changed something fundamental.\n\nAriadne is waiting at the entrance. She looks at your face and knows everything before you speak.\n\n'You saw him,' she says. Not a question.\n\n'Asterion,' you say. She closes her eyes. 'Yes. My brother. Was he...?' She can't finish the question. You answer it anyway.",
      refusedAriadnesThread: "Without thread, the way out is a nightmare. The labyrinth fights you — corridors closing, walls shifting, the sound of stone grinding against stone. You run, stumble, backtrack, run again.\n\nBut you survive. You survive because the labyrinth, whatever it is, seems to respect what you did at the center. It doesn't help you — but it stops actively trying to trap you.\n\nYou emerge into starlight, scraped and exhausted. Ariadne is there. She sees you and her expression shifts from worry to relief to something harder to name.\n\n'You went without thread,' she says. 'And you came back. That hasn't happened before.'",
      default: "The way out is neither easy nor impossible. The labyrinth guides you in its own strange way — a corridor that wasn't there before, a current of air that smells like the surface. You follow instinct and luck in equal measure.\n\nAriadne waits at the entrance, spinning thread in the dark. When she sees you, she stops.\n\n'Tell me,' she says. 'Tell me about my brother.'",
    },
    choices: [
      {
        text: "Tell Ariadne everything. She deserves to know.",
        statChanges: { Empathy: 2, Courage: 1 },
        setsFlags: { toldAriadneEverything: true },
        reputationChanges: { gods: 1 },
        feedback: "You tell her. All of it — what Asterion looked like, what he said, what you chose. Ariadne listens without interrupting. When you're done, her eyes are that deep purple again — Dionysus looking through her.\n\n'You did well,' says a voice that isn't quite hers. 'The maze tests every hero differently. Most fail by treating it as a puzzle to solve. You treated it as a person to meet.' The purple fades. Ariadne blinks. 'Thank you,' she says. Just herself now. Just a girl who loves her brother.",
        lesson: "Honesty with people who are hurting is harder than honesty with people who are angry. Ariadne asked because she needed to know. Giving someone the truth when it's painful is an act of deep respect.",
      },
      {
        text: "Ask Ariadne about the voice that speaks through her.",
        statChanges: { Wisdom: 2 },
        setsFlags: { askedAboutDionysus: true },
        feedback: "Ariadne's expression softens. 'Dionysus,' she says. 'The god of wine and madness and truth. He chose me when I was small. I don't know why.' She touches her temple. 'He shows me things. The difference between what people say and what they mean. The shape of stories before they happen.' She looks at you. 'He showed me you. Months ago. He said: this one will understand the labyrinth. I didn't know what he meant until tonight.'",
        lesson: "Gods who speak through mortals choose carefully. Dionysus is the god of transformation — of one thing becoming another. Ariadne, half-mortal, half-vessel, is his perfect instrument. And he chose her because she was already wise. The god amplified what was already there.",
      },
      {
        text: "Leave quietly. You need time to process what happened down there.",
        statChanges: { Discipline: 1, Wisdom: 1 },
        setsFlags: { leftQuietly: true },
        feedback: "You nod to Ariadne but don't speak. She understands — better than most people would. She lets you go.\n\nThe night air of Crete hits you like cold water. Stars. Real stars, not cracks in a ceiling. You breathe. Whatever you did in the labyrinth, it changed you. You can feel it — a weight in your chest that wasn't there before. Not heavy. Significant.",
        lesson: "Processing difficult experiences takes time and silence. Not every moment needs to be discussed immediately. Sometimes the wisest thing you can do after something profound is simply breathe and let it settle.",
      },
      {
        text: "Ask about Kira. Did she make it out?",
        statChanges: { Empathy: 1, Cunning: 1 },
        setsFlags: { askedAboutKiraExit: true },
        feedback: "Ariadne glances at a second thread — blue, not crimson — that trails from a different entrance. 'She left an hour ago,' Ariadne says. 'She was... different when she came out. Quieter.' Ariadne pauses. 'She asked me to tell you something. She said: We are the same thing. Not rivals. The same thing.' You're not sure what that means yet. But it matters.",
        lesson: "Your rival saw the same impossible choice you did. Whatever she decided, it changed her too. Shared impossible experiences create bonds that go deeper than friendship or competition. You and Kira now share something no one else will ever understand.",
      },
    ],
  },
};

// ── No quest fork — linear with exploration branching ──

export default chapter8Scenes;
