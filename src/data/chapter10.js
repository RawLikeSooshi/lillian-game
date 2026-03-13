/**
 * Chapter 10: "The Daughter of Thunder" — FINAL CHAPTER
 * Setting: Mount Olympus. The ascent. The Hall of the Gods. Zeus. The Three Paths.
 * No god in disguise — every god revealed. All flags, oaths, reputations converge.
 */

export const chapter10Scenes = {
  theAscent: {
    id: "ch10_ascent",
    title: "The Ascent",
    image: "\u26A1",
    transitionText: "The mountain has no path. Not anymore. The trail dissolves into cloud and light and a pressure that makes your ears ring. This is Mount Olympus — not the mountain mortals see, but the real one, the one that exists between what is and what could be.",
    atmosphere: "The air thickens. Each step upward bends the light. Your shadow stretches in directions that shouldn't exist.",
    text: "You've been climbing for what feels like hours. Or days. Time doesn't work the same here.\n\nThe stone beneath your feet is warm — not from the sun, but from something deeper. The mountain itself is alive. It remembers everyone who has climbed it, and that number is very, very small.\n\nThe air changes first. It becomes heavier, richer, as if each breath contains more than oxygen. Colors sharpen. Sounds carry from impossible distances — a forge ringing, a lyre playing, laughter that shakes the clouds.\n\nReality bends. You see yourself reflected in the rock face — but older. Younger. Different versions, different choices. Every path you didn't take shimmers for a moment and fades.\n\nThe summit is close. You can feel it pulling you upward. But the mountain is testing you — not with monsters, not with riddles. With the weight of what you're about to become.",
    choices: [
      {
        text: "Keep climbing. One step at a time. Don't look at the reflections.",
        statChanges: { Discipline: 2, Courage: 1 },
        setsFlags: { steadyAscent: true },
        feedback: "You fix your eyes forward. The reflections call to you — other lives, other choices, the roads not taken. You let them pass. One step. Another. The mountain feels your resolve and the pressure eases, just slightly. Not because it approves. Because it respects.",
        lesson: "When reality itself tries to distract you with what-ifs and might-have-beens, the most powerful thing you can do is keep walking. The past is a teacher, not a destination.",
      },
      {
        text: "Stop and look at the reflections. What paths did you almost take?",
        statChanges: { Wisdom: 2, Empathy: 1 },
        setsFlags: { examinedReflections: true },
        feedback: "You see yourself choosing differently at every crossroads. Abandoning the quest. Joining the rival. Refusing the gods entirely. Each reflection is vivid and real — a life you could have lived.\n\nAnd then you understand: none of them are wrong. They're just not yours. You chose this path. You keep choosing it. That's what makes it yours.",
        lesson: "Looking at the lives you didn't live isn't weakness — it's understanding. You chose this path not because it was the only one, but because it was the right one for who you are. That distinction matters.",
      },
      {
        text: "Reach out to the mountain. Try to understand what it wants.",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { communedWithOlympus: true },
        feedback: "You press your palm against the warm stone and close your eyes. The mountain speaks — not in words, but in feeling. It has carried the weight of gods for millennia. It has watched heroes climb and fall and climb again.\n\nIt wants to know: are you climbing to take, or to give? The answer matters. You let your heart answer for you, and the mountain's warmth spreads through your hand like a welcome.",
        lesson: "The mountain isn't an obstacle — it's a guardian. Understanding what a guardian wants is different from understanding what an enemy wants. Guardians don't want to stop you. They want to know you're ready.",
      },
      {
        text: "Run. Sprint the final stretch. You're done waiting.",
        statChanges: { Courage: 2, Cunning: 1 },
        setsFlags: { chargedAscent: true },
        feedback: "You launch yourself up the final slope. The air screams. The reflections blur. Your divine blood ignites — not metaphorically, you can see light running under your skin like lightning in a cloud.\n\nYou burst through the cloud line and the summit opens before you. You're breathing hard. You're grinning. The mountain didn't want patience — it wanted to see if you had fire.",
        lesson: "Sometimes the test isn't endurance or wisdom. Sometimes it's whether you have the audacity to stop being careful and just go. Olympus was built by beings who seized what they wanted. That doesn't make it right — but it makes it real.",
      },
    ],
  },

  hallOfTheGods: {
    id: "ch10_hall",
    title: "The Hall of the Gods",
    image: "\uD83C\uDFDB\uFE0F",
    transitionText: "The summit opens into a hall that shouldn't fit on any mountaintop. Twelve thrones arranged in a semicircle, each one unique, each one occupied. The light here comes from everywhere and nowhere.",
    atmosphere: "Twelve gods. Twelve thrones. Every eye on you. The air hums with power so dense it has a taste — like ozone and honey and the moment before a thunderstorm.",
    textVariants: {
      impressedPoseidon: "You step into the Hall of the Gods. Twelve thrones. Twelve faces. Some you recognize — from disguises shed, from dreams decoded, from lessons that only make sense now.\n\nPoseidon nods from his throne of coral and dark water. He spoke to you as a fisherman once. He's not hiding anymore.\n\nEach god looks at you with an expression shaped by everything you've done. Every choice. Every oath kept or broken. Every person helped or ignored. They know your story — they've been part of it.\n\nThis is not a trial. This is a reckoning of the truest kind: they are showing you what they see when they look at you.",
      default: "You step into the Hall of the Gods. Twelve thrones. Twelve faces that carry the weight of eternity.\n\nSome you met in disguise — the old woman at the crossroads, the merchant in the marketplace, the captain on the sea. They're not hiding anymore. Every god sits revealed, and each one watches you with eyes that hold thousands of years of judgment.\n\nThey know everything. Every choice you made. Every oath you swore. Every person you helped or failed. Every time you were brave, and every time you weren't.\n\nThis is the retrospective. Not your judgment — your mirror.",
    },
    choices: [
      {
        text: "Stand tall. Meet every gaze. You've earned the right to be here.",
        statChanges: { Courage: 2 },
        setsFlags: { stoodTallBeforeGods: true },
        reputationChanges: { gods: 1 },
        feedback: "Ares smiles — not cruelly, but with respect. Athena's eyes narrow in what might be approval. Aphrodite tilts her head, curious. Hephaestus nods from behind his forge-scarred hands.\n\n'She stands,' Hera says from her throne. The words echo. It sounds like a verdict. The other gods are silent, and in their silence, you hear everything they think of you.",
        lesson: "Standing before those who are more powerful than you — without flinching, without apology — is not arrogance. It's self-respect. The gods don't need you to grovel. They need to see who you actually are.",
      },
      {
        text: "Bow. Not in submission — in acknowledgment. They are what they are.",
        statChanges: { Wisdom: 1, Empathy: 1 },
        setsFlags: { bowedToGods: true },
        reputationChanges: { gods: 2 },
        feedback: "The bow is slight — a nod of the head, a bending of the shoulders. It says: I see you. I know what you are. I respect the weight of it.\n\nDemeter's expression softens. Hermes grins. Apollo strums a single chord on his lyre — a note that sounds like approval. Even Dionysus, draped across his vine-covered throne, raises his cup.\n\n'She understands,' Athena says quietly. 'Good.'",
        lesson: "Respect given freely is different from submission extracted by force. You bowed because you chose to, not because they demanded it. That distinction changes everything about the gesture.",
      },
      {
        text: "Ask them: 'What did you learn about me?' Turn it around.",
        statChanges: { Cunning: 1, Courage: 1 },
        setsFlags: { questionedGods: true },
        feedback: "Silence. Then Hermes laughs — a real, delighted laugh. 'Oh, I like her,' he says.\n\nAthena speaks first. 'You think before you act. Not always — but when it matters.' Ares: 'You fight when you have to. You don't enjoy it. That's rarer than you know.' Artemis: 'You protect the small things.' Hephaestus: 'You fix what's broken.'\n\nEach god speaks a sentence. Together, they paint a portrait of you that is more honest than any mirror.",
        lesson: "Asking someone what they've learned about you is the most vulnerable question you can ask — and the most revealing. You gave the gods permission to tell you the truth. That takes more courage than fighting any monster.",
      },
      {
        text: "Look for Kira. She should be here too.",
        statChanges: { Empathy: 2 },
        setsFlags: { lookedForRival: true },
        feedback: "Your eyes scan the hall — past thrones of marble and bronze and living wood — and find her. Kira. Standing at the far end of the hall, separate from the thrones, watching you.\n\nShe looks different. Tired. Older somehow, though it's only been weeks. She doesn't smile when your eyes meet, but she doesn't look away either.\n\nShe made it too. Whatever comes next, you're both here.",
        lesson: "In the biggest moment of your life, your first instinct was to look for someone else. That says more about you than any stat or any god's judgment. Connection isn't weakness. It might be the strongest thing about you.",
      },
    ],
  },

  zeus: {
    id: "ch10_zeus",
    title: "Father and Daughter",
    image: "\u26A1",
    transitionText: "The other gods recede — not physically, but in presence. The hall narrows to two people. One throne remains lit. The largest one. The one that crackles with contained lightning.",
    atmosphere: "Zeus stands from his throne. He is exactly what you expected and nothing like what you expected. Ancient. Powerful. And something you didn't anticipate: afraid.",
    text: "Zeus, King of Olympus, Lord of the Sky, Father of Gods and Men, stands before you. His throne still crackles behind him. The other gods watch from shadows that feel intentional — giving you space.\n\nHe's tall. His beard is grey-white, like storm clouds. His eyes are the exact blue of yours.\n\nHe doesn't speak immediately. For a being who commands thunder, the silence is deafening.\n\nThen:\n\n'I owe you an explanation,' he says. His voice doesn't boom. It's quiet. Almost human. 'I hid you. I placed you in the mortal world and I let you grow up without knowing what you were. Without knowing who I was.'\n\nHe pauses. Lightning flickers in his eyes — not anger, grief.\n\n'Hera would have found you. She finds them all. The children I have with mortals — she hunts them. Not out of cruelty, though it looks like cruelty. Out of pain. And I...' He stops. Starts again. 'I was trying to protect you. But protection that requires hiding someone from themselves is its own kind of harm. I know that now.'\n\nAnother pause. Longer.\n\n'You didn't ask for this blood. You didn't ask for this power. You didn't ask for a father who rules the sky but couldn't raise his own daughter. And I am sorry. Genuinely sorry. Not as a god — as your father.'\n\nThe hall is silent. Even the other gods are still.\n\n'So I'm going to ask you something no god has ever asked a mortal. Something I've never asked anyone.'\n\nHis eyes meet yours.\n\n'What do you want?'",
    choices: [
      {
        text: "'I want to know why now. Why reveal yourself now, after everything?'",
        statChanges: { Wisdom: 2, Cunning: 1 },
        setsFlags: { askedZeusWhy: true },
        feedback: "Zeus closes his eyes. 'Because you proved something. Every god on Olympus was watching — each in their own disguise, each testing you in their own way. You passed. Not because you were perfect. Because you were genuine.'\n\nHe opens his eyes. 'And because the world is changing. The old boundaries between divine and mortal are fraying. You're not just my daughter — you're proof that the two worlds can coexist in one person. That's either very dangerous or very important. Possibly both.'",
        lesson: "Asking 'why now' is one of the most important questions you can ask anyone who reveals a long-held secret. The timing of a truth matters as much as the truth itself. Zeus didn't tell you because you were ready — he told you because the world needed you to know.",
      },
      {
        text: "'I want you to say it was wrong. Not just that you're sorry — that it was wrong.'",
        statChanges: { Courage: 2, Empathy: 1 },
        setsFlags: { demandedAccountability: true },
        feedback: "Zeus flinches. The King of Olympus, who faced Typhon and the Titans, flinches at the words of his daughter.\n\n'It was wrong,' he says. Each word costs him something visible. 'Not the protection. The silence. You deserved to know who you were. You deserved a choice. I took that from you, and no amount of divine reasoning makes that right.'\n\nThe thunder outside goes silent. The other gods look at each other. No one has ever heard Zeus admit fault. Not like this.",
        lesson: "There is a difference between an apology and accountability. An apology says 'I'm sorry you were hurt.' Accountability says 'What I did was wrong.' You asked for accountability, and you got it. That changes the shape of every conversation that follows.",
      },
      {
        text: "'I want to understand. Not forgive — understand. Tell me everything.'",
        statChanges: { Wisdom: 2, Discipline: 1 },
        setsFlags: { soughtUnderstanding: true },
        feedback: "And he does. He tells you about the prophecy — that a daughter of Zeus would one day stand at the crossroads of divine and mortal and choose the fate of both. He tells you about Hera's rage and his own cowardice. He tells you about the nights he watched you from the sky, disguised as distant lightning.\n\n'I told myself I was protecting you,' he says. 'But watching from a distance is not the same as being there. I know that. I always knew that.'\n\nIt takes a long time. When he's finished, you don't forgive him. But you understand. And that, for now, is enough.",
        lesson: "Seeking understanding is harder than seeking revenge and harder than offering forgiveness. It requires you to hold two truths at once: that someone hurt you, and that they had reasons. Understanding doesn't erase the hurt. But it makes it something you can carry instead of something that carries you.",
      },
      {
        text: "'I want what every kid wants. I want my dad to be proud of me.'",
        statChanges: { Empathy: 2, Courage: 1 },
        setsFlags: { wantedPride: true },
        feedback: "Zeus's composure breaks. The god of thunder, the king of everything, puts his hand over his eyes. When he takes it away, his eyes are bright.\n\n'I have been proud of you,' he says, 'since the moment you shared your bread with a stranger on a dusty road in the first week of your journey. Before you fought anything. Before you solved anything. You were kind when no one was watching. That is the only test that matters.'\n\nThe lightning in the hall turns warm — golden instead of white. It feels like sunlight.",
        lesson: "Wanting a parent's pride isn't childish — it's human. And the thing that made Zeus proudest wasn't power or cleverness or bravery. It was kindness. That's worth remembering when the world tells you that strength is what matters most.",
      },
    ],
  },

  threePaths: {
    id: "ch10_paths",
    title: "The Three Paths",
    image: "\uD83D\uDD31",
    transitionText: "The conversation with Zeus settles like dust after a storm. The hall reassembles. All twelve gods are present again. And now the question hangs in the air — the real question, the one everything has been building toward.",
    atmosphere: "Three doorways materialize in the hall. One blazes with divine fire. One glows with warm, earthen light. The third — barely visible — shimmers like a thread between worlds.",
    textVariants: {
      lookedForRival: "Zeus steps back. The hall changes — three doorways open where solid marble stood.\n\nAnd Kira is beside you now. Not behind you, not across the hall. Beside you. Facing the same three doors.\n\n'We both have to choose,' she says. Her voice is steady but her hands are shaking. 'I've been trying to figure out what I want since I got here. I thought I knew.' She looks at you. 'What are you going to do?'\n\nZeus speaks to both of you: 'The first path leads to Olympus. Divinity. A throne among the gods. Power beyond measure, but you leave the mortal world behind.'\n\nThe second doorway pulses. 'The second path leads home. Mortality. You keep everything you've built — every friendship, every memory, every human bond. But the divine power fades. You become fully, completely mortal.'\n\nThe third doorway — the faintest one — flickers. 'The third path...' Zeus pauses. 'The third path has a cost. It is the Path of the Thread — walk between both worlds. Keep your power and your humanity. But it requires a sacrifice that cannot be undone.'",
      default: "Zeus steps back. Three doorways open in the air.\n\n'This is the choice,' he says. 'The only one I cannot make for you.'\n\nThe first doorway blazes with celestial fire. 'Divinity. Join Olympus. A throne. Power beyond mortal imagining. But you leave the mortal world — its joys, its sorrows, its beautiful smallness — behind.'\n\nThe second doorway glows warm and golden. 'Mortality. Go home. Keep every friendship, every memory, every human bond you've forged. But the divine power fades. You become fully, beautifully mortal.'\n\nThe third doorway shimmers, barely there. 'The third path. The Path of the Thread. Walk between worlds — divine and mortal, power and humanity, forever balanced. But it requires a sacrifice. Something precious. Something that cannot be replaced.'",
    },
    choices: [
      {
        text: "Step toward the first door. Claim divinity. Become a goddess.",
        statChanges: { Courage: 2, Discipline: 1 },
        setsFlags: { choseDivinity: true, madePathChoice: true },
        feedback: "The divine fire parts for you. You feel it — the pull of eternity, the promise of power that makes mountains tremble. Every god in the hall watches. Some nod. Some look sad.\n\nKira watches you from the mortal doorway. She doesn't speak. But her expression says everything: she always knew you'd reach higher.\n\n'Then it is done,' Zeus says. And there is pride in his voice — and loss.",
        lesson: "Choosing power when it's offered to you isn't wrong — not if you understand the cost. Divinity means eternity, but eternity means watching everyone mortal you love grow old and fade. The throne is real. So is the loneliness that comes with it.",
      },
      {
        text: "Step toward the second door. Reject divinity. Stay mortal. Stay free.",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { choseMortality: true, madePathChoice: true },
        feedback: "The warm light embraces you. It smells like bread and rain and home — whatever home means to you now.\n\nThe divine power ebbs. You feel it leaving, like warmth draining from your hands on a cold day. But what replaces it is something else — a lightness, a freedom. The weight of destiny lifts.\n\nZeus watches you walk away from everything he is. And he smiles. 'Brave,' he says. 'Braver than any god.'",
        lesson: "Rejecting power — real, immense, offered-freely power — is one of the hardest things a person can do. You chose humanity. You chose the messy, painful, beautiful shortness of a mortal life. That's not weakness. That might be the strongest choice in this entire story.",
      },
      {
        text: "Step toward the third door. The Path of the Thread. Walk between worlds.",
        statChanges: { Wisdom: 1, Courage: 1, Empathy: 1 },
        setsFlags: { choseThreadPath: true, madePathChoice: true },
        requiresFlag: "completedEcho",
        feedback: "The shimmer solidifies as you approach. The Thread becomes visible — a line of golden light connecting Olympus to the mortal world, divine to human, power to compassion.\n\nBut the cost. The Oracle's voice sounds one final time — not in your head, but in the hall, for every god to hear: 'The Thread requires a bridge. The bridge is me. If she walks this path, I go silent. Not destroyed — completed. My purpose fulfilled.'\n\nYou look back. The Oracle — the presence that has guided you, taught you, whispered lessons after every choice — is asking you to let it go. Not because it's dying. Because you don't need it anymore.\n\n'You have learned enough to teach yourself,' it says. 'That was always the point.'",
        lesson: "The third path costs you the thing that taught you how to learn. That's the deepest lesson of all: the best teachers make themselves unnecessary. You don't need the Oracle anymore. You are the Oracle now — the voice inside that knows right from wrong, that weighs choices, that learns from mistakes. That was always you.",
      },
      {
        text: "Don't choose yet. Turn to Kira. 'What are you going to do?'",
        statChanges: { Empathy: 2 },
        setsFlags: { askedRivalFirst: true },
        feedback: "Kira looks at you for a long time. 'I thought I'd take the first door,' she says. 'I've wanted power my whole life. To prove I deserved it. To prove I was enough.'\n\nShe looks at the doors. 'But I watched you on this journey. You didn't need power to be enough. You just... were.'\n\nShe turns to the second door. Then back to you. 'I don't know yet. Choose first. I want to see what you do.'\n\nThe choice is still yours. But now you know: what you choose may shape what she chooses too.",
        lesson: "Pausing at the biggest moment of your life to ask someone else what they need is extraordinary. Kira is your rival, your mirror, your almost-friend. What you choose will echo in her choice. That's not pressure — that's connection. The deepest kind.",
      },
    ],
  },

  epilogue: {
    id: "ch10_epilogue",
    title: "The Story of {heroName}",
    image: "\uD83C\uDF1F",
    atmosphere: "The choice is made. The doors close. The hall dissolves into light. And what remains is a story — your story, told from beginning to end.",
    textVariants: {
      choseDivinity: "The light takes you. Olympus opens like a flower and you are inside it — part of it. A thirteenth throne appears, smaller than the others but blazing with new light.\n\nThe world below continues. Your companions remember you — the half-divine girl who chose the sky. They tell your story at campfires, in marketplaces, in the quiet hours before dawn.\n\nKira chose mortality. She went home. She became a teacher — someone who helps young heroes find their way. Sometimes, on stormy nights, she looks up at the lightning and smiles.\n\nYou watch from above. You protect when you can. You learn what it means to be eternal, which is lonelier and more beautiful than you imagined.\n\nThis was {heroName}'s story. A mortal girl who became a god. Not because she was born to it — because she chose it. And the choice, as always, was what mattered.",
      choseMortality: "The light fades gently. You walk down the mountain — the mortal side, where the air smells like pine and rain. Your divine blood settles into something quieter. You feel the weight of your body, the ache in your legs, the grumble of your stomach.\n\nIt feels wonderful.\n\nYour companions are waiting at the mountain's base. They don't know what happened at the summit, but they know you came back. That's enough.\n\nKira walks down a different path. She chose differently — but she chose freely, and that's what matters.\n\nZeus watches from above. He doesn't interfere. He doesn't visit. But every thunderstorm for the rest of your life carries a warmth that storms shouldn't have.\n\nYou grow up. You live. You have a life that is messy and short and astonishingly precious.\n\nThis was {heroName}'s story. A girl who was offered the sky and chose the earth. Not because the sky wasn't beautiful — because the earth was where she was needed.",
      choseThreadPath: "The Thread takes hold. You feel it — a golden line connecting your heart to Olympus and to the earth below. Both worlds pulse through you. The power stays. The humanity stays. And the Oracle goes quiet — not with sadness, but with the satisfaction of a job completed.\n\nYou walk between worlds. Some days you sit on Olympus and argue with Athena about philosophy. Some days you walk mortal roads, helping travelers, fixing what's broken, sitting with people who need someone to sit with them.\n\nKira watches you for a long time from the mortal world. Then she starts walking her own thread — not divine, but connected. You meet at crossroads sometimes. You argue. You laugh. You're not friends, exactly. You're something better: you're equals who chose different things and respect each other for it.\n\nThe Oracle's last words stay with you: 'You don't need me anymore.' It was right. You carry the lessons inside you now. Every choice comes with its own voice — yours.\n\nThis was {heroName}'s story. A girl who refused to choose between two halves of herself. Who found a third way. Who became the bridge.\n\nAnd the bridge held.",
      askedRivalFirst: "You look at Kira. Kira looks at you. And somehow, without speaking, you both understand.\n\nThe choice will come. It's yours to make. But this moment — standing in the Hall of the Gods, side by side with the person who pushed you hardest — this moment is the real ending.\n\nNot what you choose. But that you're here to choose at all.\n\nThe doors wait. The gods watch. And {heroName}'s story continues — because the best stories don't end with a choice. They end with the understanding that got you there.\n\nThis was {heroName}'s story. And it isn't over yet.",
      default: "The choice echoes through Olympus and settles into the world like a stone dropped in still water. The ripples spread in every direction.\n\nYour companions carry your story forward. The gods remember you — some fondly, some with the wariness reserved for mortals who surprised them. Kira finds her own path, shaped in part by watching yours.\n\nZeus, for the first time in millennia, is quiet. Not the silence of a king. The silence of a father watching his daughter become something he couldn't have imagined.\n\nThis was {heroName}'s story. Born mortal. Tested by gods. Shaped by choices — not the grand ones, but the small daily ones. The bread shared. The hand offered. The truth spoken when a lie would have been easier.\n\nEvery choice mattered. Even the ones that seemed small at the time.\n\nEspecially those.",
    },
    choices: [
      {
        text: "Close the book. The story is complete.",
        statChanges: {},
        setsFlags: { storyComplete: true },
        feedback: "The hall fades. The mountain fades. What remains is a feeling — warm, complicated, earned. You did it. Not perfectly. Not easily. But genuinely.\n\nThe Hero of Olympus. The Daughter of Thunder.\n\nYou.",
        lesson: "Every story ends. What matters isn't the ending — it's what you carry with you after the last page. You learned about courage, wisdom, discipline, empathy, and cunning. But mostly, you learned about choice. That every day is full of them. And that who you become is the sum of the ones you make.\n\nThank you for playing. This story was yours.",
      },
    ],
  },
};

// ── Quest: chapter10 has no fork — linear with convergence ──

export default chapter10Scenes;
