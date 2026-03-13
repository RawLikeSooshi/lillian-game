/**
 * Chapter 6: "The Halls of Hades"
 * Setting: The Underworld. Descent, crossing the Styx, Fields of Asphodel,
 *          Cerberus, Persephone's court. The hero learns the full truth of her origin.
 * God in disguise: Hades as a quiet ferryman. No agenda — asks good questions.
 * Rival: Kira is also in the Underworld. Extended conversation, not a duel.
 */

export const chapter6Scenes = {
  descent: {
    id: "ch6_descent",
    title: "The Way Down",
    image: "🕳️",
    transitionText: "The cave mouth breathes cold air. The path slopes steeply into darkness. Somewhere far below, you hear water — not flowing, but waiting.",
    atmosphere: "The light fades behind you. Ahead, the dark is absolute. Then — torchlight, and the smell of still water.",
    text: "The river appears without warning. One moment you're walking on stone; the next, the path ends at a shore of black sand. A river stretches before you — not flowing, not still, but somewhere in between. The water is the color of nothing.\n\nA boat waits at the shore. A ferryman stands in it, pole in hand. He's not what you expected — not skeletal, not frightening. He's quiet. Middle-aged. Patient. He looks like someone who has been doing this job for a very long time and has made peace with it.\n\n'Passage requires payment,' he says. His voice is calm. Not unkind. 'One coin. That's the rule. It's always been the rule.'",
    inventoryBeat: {
      item: "templeCoin",
      hasText: "Your hand goes to the temple coin from Apollo's shrine — the one you've carried since Chapter 1. It hums in your fingers. The ferryman's eyes track the movement. 'That will do,' he says. 'More than do, actually. That coin was minted on Olympus.' He holds out his hand.",
      lacksText: "You have no coin. The ferryman watches you search your pockets with an expression that isn't quite pity. 'Most of the dead are buried with one,' he says. 'The living who come here... they usually bring something.' He studies you for a long moment. 'But you're not most living visitors, are you?' He gestures you aboard anyway.",
    },
    choices: [
      {
        text: "Give the coin willingly. It was meant for this.",
        statChanges: { Wisdom: 1, Discipline: 1 },
        setsFlags: { gaveCoinToCharon: true },
        consumesItem: "templeCoin",
        feedback: "You place the coin in his palm. It flares once — golden light in the dark — and then goes still. The ferryman nods. 'Apollo's coins always burn brightest down here. Ironic.' He pushes off from the shore.",
        lesson: "Some things you carry are meant to be given away. The coin served its purpose not by being kept but by being spent at the right moment. Recognizing when to let go of something valuable is its own kind of wisdom.",
      },
      {
        text: "Ask the ferryman who he really is before you pay.",
        statChanges: { Wisdom: 2 },
        setsFlags: { questionedFerryman: true },
        feedback: "The ferryman tilts his head. 'That's not a question most people ask. They're usually too scared or too sad.' He doesn't answer directly. 'I'm the person who takes you across. That's enough for now.' But his eyes — dark and deep as the river — suggest he's much more than that.",
        lesson: "Asking the right question of the right person is more valuable than any coin. The ferryman noticed that you noticed. In the Underworld, being observant matters more than being brave.",
      },
      {
        text: "Step onto the boat with confidence. You belong here as much as anyone.",
        statChanges: { Courage: 2 },
        setsFlags: { boardedBoldly: true },
        feedback: "You step onto the boat without hesitation. It rocks once, then steadies. The ferryman raises an eyebrow — the first expression you've seen on his face. 'You don't fear the dead,' he observes. 'Why not?' It's a real question, not a challenge.",
        lesson: "Confidence in unfamiliar territory isn't the same as recklessness. You stepped onto the boat because you trusted yourself. The ferryman respected that — not because courage impressed him, but because false courage wouldn't have steadied the boat.",
      },
      {
        text: "Sit quietly in the boat and watch the water. Let the crossing happen.",
        statChanges: { Discipline: 1, Empathy: 1 },
        setsFlags: { quietCrossing: true },
        feedback: "You sit. The ferryman poles the boat in silence. The water passes beneath you — and in it, you see faces. Not frightening ones. Sad ones. People who lived and loved and are now here. The ferryman watches you watching them. 'You see them,' he says softly. 'Not everyone does.'",
        lesson: "Stillness is its own kind of action. By sitting quietly, you saw what hurried passengers miss — the faces in the water, the weight of the place. The Underworld rewards attention, not aggression.",
      },
    ],
  },

  asphodel: {
    id: "ch6_asphodel",
    title: "The Fields of Asphodel",
    image: "🌾",
    transitionText: "Beyond the river, the land opens into vast grey fields. Pale flowers — asphodels — stretch to the horizon. Shades drift among them like fog.",
    atmosphere: "The air is still. No wind. No sun. A diffuse grey light comes from everywhere and nowhere. The dead move slowly, without purpose.",
    text: "The Fields of Asphodel are not what the stories say. There's no torture here, no punishment. Just... nothing. The shades drift, half-remembered versions of who they were. They don't speak unless spoken to. Most of them don't even look up.\n\nIt's the saddest place you've ever been. Not because it's cruel — because it's empty.\n\nA small shade detaches from the others and approaches you. A child — perhaps seven or eight when they died. They look at you with eyes that still hold something the others have lost: recognition.\n\n'You're alive,' the child says. Not a question. 'I can tell because you're warm.' They reach toward your hand but stop short. 'Can you carry a message? To the living? My mother. She's in Corinth. Tell her I'm not afraid. Tell her the flowers are pretty, even if they're grey.'",
    choices: [
      {
        text: "Promise to carry the message. Mean it.",
        statChanges: { Empathy: 2, Discipline: 1 },
        setsFlags: { promisedShadeChild: true },
        reputationChanges: { underworld: 1, commonPeople: 1 },
        feedback: "You kneel to be eye-level with the shade. 'I'll find her,' you say. 'I promise.' The child smiles — and for a moment, the grey field blooms with faint color. Other shades turn to look. They felt it too. A living promise, made to the dead.",
        lesson: "A promise to someone who can never enforce it is the purest kind of promise. You'll carry this message because you said you would — not because anyone will check. That's what integrity means when no one is watching.",
      },
      {
        text: "Ask the child's name. They deserve to be remembered as a person, not just a shade.",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { learnedShadeName: true },
        reputationChanges: { underworld: 1 },
        feedback: "'Theron,' the child says. And then, surprised: 'I almost forgot. No one's asked in...' They trail off. Time doesn't work here. 'Theron, son of Melina, from the street near the fountain in Corinth.' Saying it brings them more into focus — sharper, more real. Names have power, even here.",
        lesson: "Asking someone's name is an act of recognition — it says 'you are a person, not a category.' In a place where identity fades, remembering someone's name is the greatest gift you can give.",
      },
      {
        text: "Tell the child the truth: you might not make it to Corinth. But you'll try.",
        statChanges: { Wisdom: 1, Courage: 1, Empathy: 1 },
        setsFlags: { honestWithShade: true },
        feedback: "The child considers this. 'That's more honest than most living people,' they say. And then: 'My mother always said honest people are the ones worth trusting.' The shade is quiet for a moment. 'Try. That's enough.'",
        lesson: "Honesty with vulnerable people is harder than lying to powerful ones. You could have promised easily. Instead, you gave the truth. The child respected that — because even the dead can tell the difference between a kind lie and a brave truth.",
      },
      {
        text: "Sit with the child for a while. They seem lonely.",
        statChanges: { Empathy: 2 },
        setsFlags: { satWithShadeChild: true },
        reputationChanges: { underworld: 2 },
        feedback: "You sit in the grey flowers. The child sits beside you. They don't talk much — just being near someone warm is enough. Other shades drift closer, drawn by the warmth. For a few minutes, the Fields of Asphodel are a little less empty.\n\nWhen you stand to go, the child says: 'Thank you. I remember what warm feels like now.'",
        lesson: "Presence is the most underrated gift. You didn't fix anything. You didn't solve the child's problem. You sat with them. Sometimes that's worth more than all the heroics in the world.",
      },
    ],
  },

  cerberus: {
    id: "ch6_cerberus",
    title: "The Guardian",
    image: "🐕",
    transitionText: "The path narrows. Ahead, a gate of black iron. And before it — enormous, impossible, three-headed — the guardian of the dead.",
    atmosphere: "The ground vibrates with a low growl. Three sets of eyes track your approach. Each head is the size of a horse.",
    text: "Cerberus.\n\nThree heads. Each one watching you with a different expression. The left head snarls — pure aggression. The right head tilts, curious, ears forward. The middle head watches with calm, intelligent eyes.\n\nHe's not attacking. Not yet. He's waiting to see what you do. This is his purpose — to guard the gate. The living don't pass. That's the rule.\n\nBut rules have exceptions. And how you approach this moment will determine which exception you become.",
    choices: [
      {
        text: "Face him head-on. Stand tall. Show no fear.",
        statChanges: { Courage: 3 },
        setsFlags: { facedCerberus: true, cerberusMethodCourage: true },
        feedback: "You walk forward. The left head lunges — and stops, inches from your face. Hot breath washes over you. You don't flinch. The middle head tilts. The right head whines softly.\n\nCerberus has seen a thousand heroes. Most of them ran. Most of the ones who didn't fight. You did neither. You stood. After a long moment, the three-headed dog steps aside.\n\n'Interesting,' says a voice from behind you. The ferryman. Still here.",
        lesson: "Courage isn't the absence of fear — it's the choice to stand when every instinct says run. Cerberus wasn't testing your strength. He was testing your nerve. Animals — even divine ones — respect stillness more than aggression.",
      },
      {
        text: "Sing. The old lullaby your mother used to sing. Orpheus did it with music.",
        statChanges: { Wisdom: 3 },
        setsFlags: { sangToCerberus: true, cerberusMethodWisdom: true },
        feedback: "Your voice is small in the vast cavern. The lullaby is simple — something about stars and sleep and safety. It's not magic. It's memory.\n\nThe left head stops snarling. The right head's ears droop. The middle head sighs — a sound like a mountain exhaling. Slowly, impossibly, three enormous heads lower to the ground. Cerberus's tail — you didn't even notice he had one — thumps once against the stone.\n\nThe gate is unguarded.",
        lesson: "Orpheus passed Cerberus with divine music. You passed him with a lullaby. The lesson isn't that music is magic — it's that gentleness disarms what force cannot. Wisdom is knowing which tool fits the moment.",
      },
      {
        text: "Toss something to the side — a distraction. Slip past while he's looking.",
        statChanges: { Cunning: 3 },
        setsFlags: { trickedCerberus: true, cerberusMethodCunning: true },
        feedback: "You grab a loose stone and throw it into the darkness to the left. The left head snaps toward it. You throw another to the right — the right head tracks it. The middle head watches you, unimpressed.\n\nBut two out of three heads is enough. You slide past while the middle head decides whether to care. By the time it does, you're through the gate.\n\nFrom behind you, you hear what might be a low chuckle. Cerberus has been tricked before. He doesn't seem to mind.",
        lesson: "Cunning doesn't mean dishonesty — it means using available resources creatively. You didn't hurt Cerberus or lie to him. You redirected his attention. The middle head saw through it — but respected the ingenuity enough to let it work.",
      },
      {
        text: "Approach slowly. Extend your hand. Let him smell you.",
        statChanges: { Empathy: 3 },
        setsFlags: { befriendedCerberus: true, cerberusMethodEmpathy: true },
        feedback: "You walk forward with your hand out, palm up. The left head growls. The right head stretches forward and sniffs. Your hand is tiny against his muzzle.\n\nThe right head's tail wags. The left head stops growling. The middle head leans down and presses its nose against your chest — right over your heart.\n\nCerberus steps aside. Not because you tricked him or scared him or enchanted him. Because he decided you were allowed. The ferryman, watching from behind, nods once.",
        lesson: "Empathy with animals — even supernatural ones — starts with respect. You approached Cerberus as a being, not an obstacle. He has guarded this gate since the beginning. No one ever just... said hello.",
      },
      {
        text: "Stop walking. Plant your feet. Wait. Let him come to you.",
        statChanges: { Discipline: 3 },
        setsFlags: { outpatiencedCerberus: true, cerberusMethodDiscipline: true },
        feedback: "You stop. Cerberus watches. Minutes pass. The left head loses interest and yawns — an enormous, terrifying yawn. The right head lies down, chin on paws. The middle head holds your gaze for a long, long time.\n\nThen it blinks. And steps aside.\n\nYou waited longer than he expected. In the Underworld, patience is the rarest currency. You just paid with it.",
        lesson: "Discipline is the ability to do nothing when everything in you screams to act. Cerberus expected you to run, fight, or trick. You did none of those. You waited. And in the Underworld — where time is infinite — patience is the most surprising thing a living person can show.",
      },
    ],
  },

  persephonesCourt: {
    id: "ch6_court",
    title: "Persephone's Court",
    image: "👑",
    transitionText: "Beyond the gate, the cavern opens into something unexpected: a garden. Underground, impossible, but real. Dark flowers bloom in soil that has never seen the sun.",
    atmosphere: "The throne room is a garden. Pomegranate trees line the walls. The air smells of earth and flowers and something ancient.",
    textVariants: {
      befriendedCerberus: "Persephone's court is not what you expected. It's a garden — dark flowers, underground streams, pomegranate trees heavy with fruit. Beautiful and sad at the same time.\n\nThe Queen of the Underworld sits on a throne of woven branches. She's younger than you imagined — or older. It's hard to tell. She's regal, composed, and her eyes hold a sadness that isn't about her own situation. It's broader than that.\n\nShe noticed how you passed Cerberus. 'He likes you,' she says. 'That hasn't happened in a long time.' She studies your face. 'I know what you are. I've been expecting you.'",
      default: "Persephone's court is not what you expected. It's a garden — dark flowers, underground streams, pomegranate trees heavy with fruit. Beautiful and sad at the same time.\n\nThe Queen of the Underworld sits on a throne of woven branches. She's younger than you imagined — or older. It's hard to tell. She's regal, composed, and her eyes hold a sadness that isn't about her own situation. It's broader than that.\n\n'I know what you are,' she says, without introduction. 'I've been expecting you. Sit. Eat nothing — that rule is real. But sit.'",
    },
    choices: [
      {
        text: "Sit. Listen. She clearly has something to tell you.",
        statChanges: { Wisdom: 2, Discipline: 1 },
        setsFlags: { listenedToPersephone: true },
        feedback: "You sit on the stone bench she indicates. Persephone watches you for a long moment — not judging, assessing. 'You listen,' she says. 'That's rare in Zeus's children.' The word hangs in the air. Zeus. She said it like she was naming the weather.",
        lesson: "When someone powerful offers to speak, the wisest response is silence. Persephone didn't need you to be impressive. She needed you to be present. Listening is how you earn the next sentence.",
      },
      {
        text: "Ask her directly: what does she know about you?",
        statChanges: { Courage: 1, Cunning: 1 },
        setsFlags: { askedPersephoneDirectly: true },
        feedback: "Persephone's lips twitch — almost a smile. 'Direct. Your father was never direct. He preferred thunderbolts and omens.' She leans forward. 'I know who your father is. I know why you were hidden. And I know what Hera will do when she finds out you exist.'",
        lesson: "Asking a direct question of someone who holds secrets is a gamble — they might refuse, deflect, or be offended. Persephone wasn't offended. She was relieved. Sometimes people with heavy knowledge are waiting for someone brave enough to ask.",
      },
      {
        text: "Tell her about the shade child. About the message.",
        statChanges: { Empathy: 2 },
        setsFlags: { toldPersephoneAboutShade: true },
        requiresFlag: "promisedShadeChild",
        reputationChanges: { underworld: 1 },
        feedback: "Persephone's expression changes — the sadness deepens, but something warm enters it too. 'You spoke with one of my charges,' she says. 'And you promised to carry a message.' She looks at you differently now. 'Most heroes come to the Underworld to take. You came and gave.'",
        lesson: "Telling Persephone about the shade child wasn't strategic — it was instinctive. But it revealed something about your character that impressed a queen. Empathy, freely given, opens doors that no key can.",
      },
      {
        text: "Ask about the ferryman. Who is he really?",
        statChanges: { Wisdom: 1, Cunning: 1 },
        setsFlags: { askedAboutFerryman: true },
        feedback: "Persephone glances toward the entrance of the court. 'My husband likes to meet the interesting ones personally,' she says. 'He finds the ferry... meditative.' She looks back at you. 'Did he frighten you?' She doesn't wait for the answer. 'He doesn't frighten anyone. That's what makes him different from his brothers.'",
        lesson: "Hades — disguised as the ferryman. Not Charon, but the Lord of the Dead himself, poling the boat in silence. He chose to meet you not as a king but as a servant. That tells you everything about what kind of god he is.",
      },
    ],
  },

  theTruth: {
    id: "ch6_truth",
    title: "The Truth",
    image: "⚡",
    transitionText: "Persephone stands. The garden dims. When she speaks again, her voice carries the weight of something she has waited a long time to say.",
    atmosphere: "The underground garden is silent. Even the flowers seem to lean in to listen.",
    text: "Persephone walks among her pomegranate trees, touching the dark fruit absently. Then she turns to face you.\n\n'Your father is Zeus. King of the gods. Lord of the sky. You already suspected — the signs have been everywhere. The storm in your blood, the way lightning doesn't frighten you, the coin from Apollo's temple that burned brighter than it should have.'\n\nShe sits across from you.\n\n'Your mother was mortal. A woman of extraordinary courage and ordinary origins. Zeus loved her — as much as Zeus is capable of loving anyone. When you were born, he knew Hera would come for you. She always does. His other mortal children — Heracles, Perseus — they suffered terribly because of Hera's jealousy.'\n\nHer voice softens.\n\n'So he hid you. Completely. He placed you with a family, sealed your divine blood so deeply that even the gods couldn't sense it, and told the Oracle at Delphi to watch over you. The Oracle was instructed to set you on your journey when you were ready — not before. Every god you've met along the way — Athena, Hermes, Poseidon — they were checking on you. Reporting back.'\n\nShe pauses.\n\n'Your father loves you. In his way. But his way involves hiding you from your own identity for your entire life. And now Hera is starting to notice.'",
    choices: [
      {
        text: "He had no right to hide this from me. No matter the reason.",
        statChanges: { Courage: 2, Wisdom: 1 },
        setsFlags: { angryAtZeus: true, truthRevealed: true },
        reputationChanges: { gods: -1 },
        feedback: "Persephone nods slowly. 'No,' she agrees. 'He didn't. But he did it anyway. That's what gods do — they make decisions for others and call it protection.' She meets your eyes. 'Your anger is valid. Hold onto it. It will keep you sharp. But don't let it become the only thing you feel.'",
        lesson: "Anger at a parent who hid the truth — even to protect you — is legitimate. You have a right to your feelings about your own identity. But Persephone's warning is important: anger is a tool, not a destination. Use it. Don't become it.",
      },
      {
        text: "I understand why he did it. Hera would have destroyed me.",
        statChanges: { Wisdom: 2, Empathy: 1 },
        setsFlags: { understoodZeus: true, truthRevealed: true },
        reputationChanges: { gods: 1 },
        feedback: "Persephone studies you with something like surprise. 'That's... more generous than most of his children have been. Heracles raged. Perseus questioned. You understand.' She's quiet for a moment. 'Understanding doesn't mean you have to forgive. But it does mean you see clearly. That matters.'",
        lesson: "Understanding someone's reasons doesn't mean approving of their choices. You can see why Zeus hid you AND still wish he hadn't. Holding both truths at once is a sign of maturity — and it's harder than choosing one or the other.",
      },
      {
        text: "What happens now? Does Hera know?",
        statChanges: { Cunning: 1, Discipline: 1 },
        setsFlags: { focusedOnFuture: true, truthRevealed: true },
        feedback: "Persephone's expression darkens. 'She suspects. The Underworld is the one place she can't easily watch — that's partly why your path led here. But when you return to the surface...' She trails off. 'You'll need to be ready. Hera doesn't destroy quickly. She destroys thoroughly.'",
        lesson: "When you learn something that changes everything, there's a choice: dwell on the past or prepare for the future. You chose to look ahead. That's not avoidance — it's strategy. The truth is revealed. What you do with it next is what matters.",
      },
      {
        text: "Tell me about my mother. The mortal one. Who was she?",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { askedAboutMother: true, truthRevealed: true },
        feedback: "Persephone's face softens completely. 'Her name was Alexis. She was a potter in a small village. No noble blood, no special destiny — just a woman who was brave enough to love a god and wise enough to let you go when it was time.' Persephone touches a pomegranate flower. 'She's still alive. She thinks about you every day. She doesn't know where you are, but she knows you're safe. Zeus promised her that much.'",
        lesson: "In a room full of revelations about gods and destiny, you asked about your mother. The mortal one. The one who held you and let you go. That instinct — to seek the human story inside the divine one — is what makes you different from the other children of Zeus.",
      },
    ],
  },
};

// ── Quest chapter6 has no fork — linear with exploration branching ──

export default chapter6Scenes;
