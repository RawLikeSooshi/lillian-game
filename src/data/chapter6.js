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
    transitionText: "The cave mouth breathes cold air — not the cold of winter but the cold of depth, of stone that has never known the sun. The path slopes steeply into a darkness so complete it has texture. Somewhere far below, you hear water. Not flowing. Waiting.",
    atmosphere: "The last daylight dies behind you like a snuffed candle. Ahead: absolute dark. Then — torchlight, faint and orange, and the smell of still water and ancient stone and something else. Something patient.",
    text: "The river appears without warning. One moment you're walking on stone; the next, the path simply ends at a shore of black sand that crunches like ground glass under your feet. A river stretches before you — not flowing, not still, but somewhere between, as if the water itself can't decide whether to move or to mourn. Its color is the color of nothing. Not black. Not grey. The absence of color, the way silence is the absence of sound.\n\nA boat waits at the shore. A ferryman stands in it, pole in hand.\n\nHe's not what you expected. Not skeletal, not hooded, not frightening. He's quiet. Middle-aged. Patient in the way that only someone who has done the same thing for millennia can be patient — not waiting for something to happen, but at peace with the fact that it will. His face is kind in a way that has nothing to do with smiling.\n\n\"Passage requires payment,\" he says. His voice is calm. Low. The kind of voice that makes you lean in, not back. \"One coin. That's the rule. It's always been the rule.\"",
    inventoryBeat: {
      item: "templeCoin",
      hasText: "Your hand goes to the temple coin from Apollo's shrine — the one you've carried since the very beginning, from a priest who pressed it into your palm and said 'for your courage.' It hums against your fingers now, warm in the cold, like a small heart beating. The ferryman's eyes track the movement. Dark eyes. Deeper than the river.\n\n\"That will do,\" he says. \"More than do, actually. That coin was minted on Olympus.\" He holds out his hand. His palm is open and still. \"They always burn brightest down here. Ironic, isn't it.\"",
      lacksText: "You have no coin. The ferryman watches you search your pockets with an expression that isn't quite pity — something gentler, something that has seen this happen a thousand times and never grown impatient with it.\n\n\"Most of the dead are buried with one,\" he says. \"The living who come here... they usually bring something.\"\n\nHe studies you for a long moment. The river laps at the boat's hull.\n\n\"But you're not most living visitors, are you?\"\n\nHe gestures you aboard anyway. The boat doesn't rock when you step in. As if it was expecting you.",
    },
    choices: [
      {
        text: "Give the coin willingly. It was meant for this.",
        statChanges: { Wisdom: 1, Discipline: 1 },
        setsFlags: { gaveCoinToCharon: true },
        consumesItem: "templeCoin",
        feedback: "You place the coin in his palm. It flares once — golden light in all this dark, bright enough to show the faces in the water for one heartbeat — and then goes still. Just a coin again.\n\nThe ferryman closes his fingers around it. \"Apollo's coins always burn brightest down here,\" he says. Not impressed. Observing. The way a gardener observes which plants grow toward the light.\n\nHe pushes off from the shore. The boat moves without sound.",
        lesson: "Some things you carry are meant to be given away. The coin served its purpose not by being kept but by being spent at exactly the right moment. Knowing when to let go of something valuable — that's its own kind of wisdom.",
      },
      {
        text: "Ask the ferryman who he really is before you pay.",
        statChanges: { Wisdom: 2 },
        setsFlags: { questionedFerryman: true },
        feedback: "The ferryman tilts his head. The movement is small — barely a movement at all — but it changes his whole face.\n\n\"That's not a question most people ask,\" he says. \"They're usually too scared. Or too sad. Or too busy being brave to notice that bravery isn't what's needed here.\"\n\nHe doesn't answer directly. \"I'm the person who takes you across. That's enough for now.\"\n\nBut his eyes — dark and still and deep as the river he stands on — suggest he is very much more than that. And the fact that you asked tells him something too.",
        lesson: "Asking the right question of the right person is more valuable than any coin. The ferryman noticed that you noticed. In the Underworld, being observant matters more than being brave.",
      },
      {
        text: "Step onto the boat with confidence. You belong here as much as anyone.",
        statChanges: { Courage: 2 },
        setsFlags: { boardedBoldly: true },
        feedback: "You step onto the boat without hesitation. It rocks once — then steadies beneath you, finding its balance as if the wood itself decided to hold you.\n\nThe ferryman raises an eyebrow. The first expression you've seen on his face — subtle, almost imperceptible, the kind of expression that lives in millimeters.\n\n\"You don't fear the dead,\" he observes. Not a compliment. A question disguised as a statement.\n\n\"Why not?\"\n\nHe means it. He actually wants to know.",
        lesson: "Confidence in unfamiliar territory isn't recklessness — it's a decision about who you want to be when the ground changes under your feet. The ferryman respected it. Not because courage impressed him — very little impresses a man who has ferried the dead for eternity — but because false courage wouldn't have steadied the boat.",
      },
      {
        text: "Sit quietly in the boat and watch the water. Let the crossing happen.",
        statChanges: { Discipline: 1, Empathy: 1 },
        setsFlags: { quietCrossing: true },
        feedback: "You sit. The ferryman poles the boat in silence — real silence, the kind that has weight and presence, the kind that most people rush to fill because it frightens them.\n\nThe water passes beneath you. And in it — faces. Not frightening ones. Sad ones. People who lived and loved and laughed and are now here, drifting in the dark water like leaves in a slow river. A woman who looks like she was someone's mother. A boy who looks like he was someone's friend. An old man with a kind face, turning slowly in the current.\n\nThe ferryman watches you watching them.\n\n\"You see them,\" he says softly. \"Not everyone does.\"",
        lesson: "Stillness is its own kind of action. By sitting quietly, you saw what hurried passengers miss — the faces in the water, the weight of the place, the enormous quiet sadness of a world where everyone has already arrived. The Underworld rewards attention, not aggression.",
      },
    ],
  },

  asphodel: {
    id: "ch6_asphodel",
    title: "The Fields of Asphodel",
    image: "🌾",
    transitionText: "Beyond the river, the land opens — vast, grey, endless. Pale flowers cover everything — asphodels, growing without sun, without rain, without reason. They nod in a wind you can't feel. Shades drift among them like smoke from a fire that went out a long time ago.",
    atmosphere: "No wind. No sun. A diffuse grey light comes from everywhere and nowhere, the color of a sky that has forgotten what blue means. The dead move slowly here, without purpose, without urgency. Without anything at all.",
    text: "The Fields of Asphodel are not what the stories say. There's no torture here, no punishment, no dramatic suffering. Just... absence. The shades drift — half-remembered versions of who they were, wearing faces that are slowly losing their features, like coins rubbed smooth by centuries of handling. They don't speak unless spoken to. Most don't even look up.\n\nIt's the saddest place you've ever been. Not because it's cruel. Because it's empty. Because this is what happens to most people — not fire, not paradise, just a slow, grey forgetting.\n\nA small shade detaches from the others and approaches you. A child — seven or eight when they died, by the look of them. They're more solid than the others, more present, as if something in them is holding on harder.\n\nThey look at you with eyes that still hold what the others have lost: recognition. The understanding that *you* are a *you*.\n\n\"You're alive,\" the child says. Not a question. A fact, delivered with the certainty of someone who knows the difference in their bones. \"I can tell because you're warm.\"\n\nThey reach toward your hand. Stop short. Their fingers hover an inch from yours.\n\n\"Can you carry a message? To the living? My mother. She's in Corinth.\" The child's voice is steady — steadier than yours would be. \"Tell her I'm not afraid. Tell her the flowers are pretty, even if they're grey.\"",
    choices: [
      {
        text: "Promise to carry the message. Mean it.",
        statChanges: { Empathy: 2, Discipline: 1 },
        setsFlags: { promisedShadeChild: true },
        reputationChanges: { underworld: 1, commonPeople: 1 },
        feedback: "You kneel. Not because the child is small — because this moment deserves your full height brought down to theirs.\n\n\"I'll find her,\" you say. \"I promise.\"\n\nThe child smiles. And for a moment — just a moment — the grey field around you blooms with faint color. A flush of green in the asphodel stems. A hint of blue in the empty sky. Other shades turn to look, drawn by something they can't name.\n\nThey felt it. A living promise, made to the dead. It has weight here. It has color.\n\nWhen you stand, the grey returns. But the promise stays.",
        lesson: "A promise to someone who can never enforce it — who can never check, never follow up, never hold you accountable — is the purest kind of promise there is. You'll carry this message because you said you would. That's what integrity means when no one is watching.",
      },
      {
        text: "Ask the child's name. They deserve to be remembered as a person, not just a shade.",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { learnedShadeName: true },
        reputationChanges: { underworld: 1 },
        feedback: "\"Theron,\" the child says. And then, surprised — eyes widening, features sharpening: \"I almost forgot.\" They pause. Time doesn't work here. They can't say how long it's been. \"Theron, son of Melina, from the street near the fountain in Corinth.\"\n\nSaying the name brings them into focus — sharper, more real, like a drawing being traced over with ink. The other shades nearby grow slightly more solid too, as if remembering is contagious.\n\nNames have power. Even here. Especially here.",
        lesson: "Asking someone's name is an act of recognition — it says 'you are a person, not a category.' In a place where identity fades like writing in rain, remembering someone's name is the greatest gift you can give. It costs you nothing. It gives them back themselves.",
      },
      {
        text: "Tell the child the truth: you might not make it to Corinth. But you'll try.",
        statChanges: { Wisdom: 1, Courage: 1, Empathy: 1 },
        setsFlags: { honestWithShade: true },
        feedback: "The child considers this. Their head tilts — a gesture so alive, so human, it hurts to see it on a shade.\n\n\"That's more honest than most living people,\" they say. A pause. \"My mother always said honest people are the ones worth trusting. She said liars smile too much.\"\n\nThe shade is quiet for a moment. Then:\n\n\"Try. That's enough.\"",
        lesson: "Honesty with vulnerable people is harder than lying to powerful ones. You could have promised easily — it would have cost nothing and meant everything to a dead child. Instead, you gave the truth. The child respected it. Because even the dead can tell the difference between a kind lie and a brave truth.",
      },
      {
        text: "Sit with the child for a while. They seem lonely.",
        statChanges: { Empathy: 2 },
        setsFlags: { satWithShadeChild: true },
        reputationChanges: { underworld: 2 },
        feedback: "You sit among the grey flowers. The child sits beside you — close, but not touching. Just near. Just warm.\n\nThey don't talk much. Words cost something here — energy, substance, the last threads of self. But being near someone warm is enough. It's everything, actually.\n\nOther shades drift closer. Drawn by the warmth the way cold hands are drawn to a fire. For a few minutes, the Fields of Asphodel have a center. A small circle of almost-living, gathered around a girl who chose to sit.\n\nWhen you stand to go, the child says: \"Thank you. I remember what warm feels like now.\"\n\nThe words follow you into the dark. They'll follow you for a long time.",
        lesson: "Presence is the most underrated gift. You didn't fix anything. You didn't solve the child's problem or change the nature of the Underworld. You sat with them. Sometimes that's worth more than all the heroics in the world.",
      },
    ],
  },

  cerberus: {
    id: "ch6_cerberus",
    title: "The Guardian",
    image: "🐕",
    transitionText: "The path narrows. The stone closes in. Ahead, a gate of black iron — and before it, filling the passage from wall to wall, the guardian of the dead. You feel him before you see him: the ground vibrating with a growl so deep it's more a feeling than a sound.",
    atmosphere: "Three sets of eyes in the dark. Each one the size of a lantern. The air tastes of hot breath and old stone and something animal and ancient. The ground vibrates with each exhale.",
    text: "Cerberus.\n\nThree heads, each one the size of a horse. Each one watching you with a different expression — different intelligence, different intent, as if three separate creatures share one enormous body.\n\nThe left head snarls. Pure aggression. Teeth bared, hackles raised, every muscle saying *turn around.*\n\nThe right head tilts. Ears forward. Curious. Sniffing the air between you, trying to read the story your scent is telling.\n\nThe middle head watches. Calm. Intelligent. The decision-maker. Its eyes are dark and deep and old, and they hold something that isn't anger and isn't curiosity. It's assessment. This head has watched a thousand heroes approach this gate. It knows what comes next.\n\nExcept it doesn't. Not this time.\n\nBecause Cerberus isn't attacking. He's waiting. Waiting to see what *you* do. This is his purpose — to guard the gate, to keep the living from the dead. That's the rule.\n\nBut rules have exceptions. And how you approach this moment will determine which exception you become.",
    choices: [
      {
        text: "Face him head-on. Stand tall. Show no fear.",
        statChanges: { Courage: 3 },
        setsFlags: { facedCerberus: true, cerberusMethodCourage: true },
        feedback: "You walk forward. Steady. Eyes on the middle head — the one that decides.\n\nThe left head lunges — jaws snapping shut inches from your face. Hot breath washes over you like a furnace door opening. Saliva drips onto the stone. You don't flinch. Your hands don't move. Your feet don't shift.\n\nThe left head holds there — inches away, teeth still bared. The right head whines softly, confused. The middle head tilts.\n\nCerberus has seen a thousand heroes. Most ran. Most of the ones who stayed drew weapons. You did neither. You just... stood.\n\nAfter a long moment — long enough for your heartbeat to count each second — the three-headed dog steps aside.\n\n\"Interesting,\" says a voice from behind you. The ferryman. Still here. \"He remembers the brave ones.\"",
        lesson: "Courage isn't the absence of fear — it's the choice to stand when every nerve in your body is screaming at you to run. Cerberus wasn't testing your strength. He was testing your nerve. Animals — even divine ones — respect stillness more than aggression.",
      },
      {
        text: "Sing. The old lullaby your mother used to sing. Orpheus did it with music.",
        statChanges: { Wisdom: 3 },
        setsFlags: { sangToCerberus: true, cerberusMethodWisdom: true },
        feedback: "Your voice is small in the vast cavern. Tiny. The lullaby is simple — something about stars and sleep and safety. Something the woman who raised you used to sing when the storms came and you weren't afraid but she was. She's gone now. The lullaby is all that's left of her voice. It's not magic. It's memory. It's the most human sound in the most inhuman place.\n\nThe left head stops snarling. The jaw drops. The right head's ears droop — soft, low, the way a dog's ears go when it hears something gentle. The middle head exhales — a sigh like a mountain breathing out, like something that has been clenched for centuries finally loosening.\n\nSlowly, impossibly, three enormous heads lower to the ground. Cerberus's tail — you didn't even notice he had one, massive, sweeping the cavern floor — thumps once against the stone.\n\nThe gate is unguarded. The lullaby echoes in the dark long after you stop singing.",
        lesson: "Orpheus passed Cerberus with divine music, played on a golden lyre. You passed him with a lullaby from someone who loved you and is gone. The lesson isn't that music is magic. It's that gentleness disarms what force cannot. Wisdom is knowing which tool fits the moment — and sometimes the tool is the softest thing you have.",
      },
      {
        text: "Toss something to the side — a distraction. Slip past while he's looking.",
        statChanges: { Cunning: 3 },
        setsFlags: { trickedCerberus: true, cerberusMethodCunning: true },
        feedback: "You grab a loose stone and throw it into the darkness to the left. The left head snaps toward the sound — instinct, pure instinct, predator tracking prey. You throw another to the right. The right head follows, ears pricked.\n\nThe middle head watches you. Unimpressed. Undeceived.\n\nBut two out of three is enough. You slide past the flank of the enormous body, close enough to feel the heat of his fur, and through the gate while the middle head decides whether the game was clever enough to deserve passage.\n\nApparently, it was. From behind you, you hear a sound that might be a low, rumbling chuckle. Cerberus has been tricked before. He doesn't seem to mind. Much.",
        lesson: "Cunning doesn't mean dishonesty. You didn't hurt Cerberus, lie to him, or disrespect him. You redirected his attention — creatively, quickly, under pressure. The middle head saw through it entirely. But he respected the ingenuity enough to let it work.",
      },
      {
        text: "Approach slowly. Extend your hand. Let him smell you.",
        statChanges: { Empathy: 3 },
        setsFlags: { befriendedCerberus: true, cerberusMethodEmpathy: true },
        feedback: "You walk forward. Slowly. One step. Another. Your hand extends — palm up, fingers open, the universal language of *I'm not a threat.*\n\nThe left head growls. Low, dangerous, uncertain.\n\nThe right head stretches forward and sniffs. Your hand is impossibly small against the muzzle — a mouse offering its paw to a mountain. But the right head's tail wags. Once. Twice.\n\nThe left head stops growling.\n\nThe middle head leans down — slowly, deliberately, with the careful grace of something that knows its own size — and presses its nose against your chest. Right over your heart. It holds there for three beats. Listening.\n\nThen Cerberus steps aside. Not because you tricked him. Not because you scared him. Not because you enchanted him.\n\nBecause he decided you were allowed.\n\nThe ferryman, watching from behind, nods once. \"That,\" he says quietly, \"is a first.\"",
        lesson: "Empathy with animals — even supernatural ones — starts with respect. You didn't approach Cerberus as an obstacle to overcome. You approached him as a being. He has guarded this gate since the beginning of death. No one, in all that time, has ever just said hello.",
      },
      {
        text: "Stop walking. Plant your feet. Wait. Let him come to you.",
        statChanges: { Discipline: 3 },
        setsFlags: { outpatiencedCerberus: true, cerberusMethodDiscipline: true },
        feedback: "You stop. Cerberus watches. The left head growls. The middle head stares.\n\nMinutes pass. Real minutes — long, heavy, each one carrying the weight of a cavern full of dark and a three-headed dog and a girl who won't move.\n\nThe left head loses interest. Yawns — an enormous, terrifying yawn that shows teeth the length of your forearm. The right head lies down, chin on paws, eyes half-closed. The middle head holds your gaze for a long, long time.\n\nThen it blinks. And steps aside.\n\nYou waited longer than he expected. In the Underworld, where time is infinite and patience is the one thing the dead have in abundance, patience from a *living* person is the most surprising thing there is. You just spent it. Cerberus accepted the payment.",
        lesson: "Discipline is the ability to do nothing when everything inside you screams to act. Cerberus expected you to run, to fight, to sing, to trick. You did none of those things. You waited. And in the Underworld — where time has no meaning — patience from someone who doesn't have forever is the rarest currency there is.",
      },
    ],
  },

  persephonesCourt: {
    id: "ch6_court",
    title: "Persephone's Court",
    image: "👑",
    transitionText: "Beyond the gate, the cavern opens into something that shouldn't exist: a garden. Underground, lightless, impossible — but real. Dark flowers bloom in soil that has never known the sun. The air changes — warmer, softer, carrying a scent like night-blooming jasmine and fresh earth after rain. Life, growing in the kingdom of the dead.",
    atmosphere: "The throne room is a garden. Pomegranate trees line the walls, heavy with dark fruit. The air smells of rich earth and night flowers and something ancient and regal. There is beauty here. There is also an enormous sadness, woven into every petal.",
    textVariants: {
      befriendedCerberus: "Persephone's court is not what you expected. It's a garden — dark flowers with petals like velvet, underground streams running clear over black stones, pomegranate trees heavy with fruit the color of old garnets. Beautiful and sad at the same time, the way the last hour of daylight is beautiful and sad.\n\nThe Queen of the Underworld sits on a throne of woven branches — living branches, growing from the stone floor, still producing leaves. She's younger than you imagined. Or older. Or both at once. Her face holds a sadness that isn't about her own situation — it's broader, deeper, the sadness of someone who has watched the whole world lose people and can do nothing about it.\n\nShe noticed how you passed Cerberus.\n\n\"He likes you,\" she says. The words carry weight — this hasn't happened in a long time. She studies your face the way the ferryman studied your coin — looking for what's real.\n\n\"I know what you are. I've been expecting you.\"",
      default: "Persephone's court is not what you expected. It's a garden — dark flowers, underground streams, pomegranate trees heavy with fruit the color of old garnets. Beautiful and sad at the same time, the way the last hour of daylight is beautiful.\n\nThe Queen of the Underworld sits on a throne of living branches. She's younger than you imagined — or older. Her face holds a sadness that isn't personal. It's constitutional. The sadness of a queen whose subjects are everyone, eventually.\n\n\"I know what you are,\" she says, without introduction. \"I've been expecting you.\"\n\nShe gestures to a stone bench. \"Sit. Eat nothing — that rule is real, and it's the one rule in my kingdom I cannot bend. But sit.\"",
    },
    choices: [
      {
        text: "Sit. Listen. She clearly has something to tell you.",
        statChanges: { Wisdom: 2, Discipline: 1 },
        setsFlags: { listenedToPersephone: true },
        feedback: "You sit on the stone bench she indicates. It's warm — impossibly warm for underground stone, as if the garden's life has seeped into the rock itself.\n\nPersephone watches you for a long moment. Not judging. Reading.\n\n\"You listen,\" she says. \"That's rare in Zeus's children.\"\n\nThe name hangs in the air between you — *Zeus* — spoken the way you'd name the weather. Casually. Factually. As if the king of the gods is just another relative she deals with.",
        lesson: "When someone powerful and ancient offers to speak, the wisest response is silence. Persephone didn't need you to be impressive. She didn't need bravery or cleverness or charm. She needed you to be present. Listening is how you earn the next sentence.",
      },
      {
        text: "Ask her directly: what does she know about you?",
        statChanges: { Courage: 1, Cunning: 1 },
        setsFlags: { askedPersephoneDirectly: true },
        feedback: "Persephone's lips twitch — almost a smile. The first movement toward warmth you've seen on her face.\n\n\"Direct,\" she says. \"Your father was never direct. He preferred thunderbolts and omens and sending other gods to deliver his messages.\" She leans forward. The branches of her throne lean with her, as if they're listening too.\n\n\"I know who your father is. I know why you were hidden. And I know what Hera will do when she finds out you exist.\"",
        lesson: "Asking a direct question of someone who holds secrets is always a gamble. Persephone wasn't offended. She was relieved. Sometimes people carrying heavy knowledge are waiting — have been waiting for years, for centuries — for someone brave enough to simply ask.",
      },
      {
        text: "Tell her about the shade child. About the message.",
        statChanges: { Empathy: 2 },
        setsFlags: { toldPersephoneAboutShade: true },
        requiresFlag: "promisedShadeChild",
        reputationChanges: { underworld: 1 },
        feedback: "Persephone's expression changes. The regal composure doesn't break — it *deepens*. The sadness is still there, but something warm enters it, like sunlight finding a crack in a stone wall.\n\n\"You spoke with one of my charges,\" she says. Her voice is different now. Softer. \"And you promised to carry a message.\"\n\nShe looks at you the way you imagine a mother looks at a child who just did something unexpectedly kind.\n\n\"Most heroes come to the Underworld to take. You came here and gave.\"",
        lesson: "Telling Persephone about the shade child wasn't strategic. It was instinctive — the right thing to say because it was the true thing to say. But it revealed something about your character that impressed a queen who has seen everything. Empathy, freely offered, opens doors that no key can.",
      },
      {
        text: "Ask about the ferryman. Who is he really?",
        statChanges: { Wisdom: 1, Cunning: 1 },
        setsFlags: { askedAboutFerryman: true },
        feedback: "Persephone glances toward the entrance of the court. The glance is brief but the feeling behind it is not — it's the way someone looks toward a door when the person they love is on the other side of it.\n\n\"My husband,\" she says, \"likes to meet the interesting ones personally. He finds the ferry... meditative.\"\n\nShe looks back at you. \"Did he frighten you?\"\n\nShe doesn't wait for the answer. She already knows it.\n\n\"He doesn't frighten anyone. That's what makes him different from his brothers. Zeus rules with thunder. Poseidon rules with storms. My husband rules with quiet. It's more effective than either of them will ever admit.\"",
        lesson: "Hades. Not Charon — Hades himself, Lord of the Dead, poling the boat in silence. He chose to meet you not as a king on a throne but as a servant on a river. That single choice tells you everything about what kind of god he is — and what kind of ruler the Underworld actually has.",
      },
    ],
  },

  theTruth: {
    id: "ch6_truth",
    title: "The Truth",
    image: "⚡",
    transitionText: "Persephone stands. The garden dims — not darkening but focusing, the way a room quiets when someone important is about to speak. When her voice comes again, it carries the weight of something she has held for a long time and is finally setting down.",
    atmosphere: "The underground garden is silent. The streams have stopped moving. Even the flowers lean in, their dark petals angled toward the queen. The air itself holds its breath.",
    text: "Persephone walks among her pomegranate trees, touching the dark fruit the way someone touches a familiar banister — absently, from habit, drawing comfort from the texture. Then she turns.\n\n\"Your father is Zeus. King of the gods. Lord of the sky.\"\n\nShe says it plainly. No dramatic pause. No thunder. Just the truth, delivered the way it deserves to be — clearly, directly, with respect for the person hearing it.\n\n\"You already suspected. The signs have been everywhere — the storm in your blood, the way lightning doesn't frighten you, the coin from Apollo's temple that burned brighter than it should have.\"\n\nShe sits across from you. Close enough that you could reach out and touch the pomegranate tree between you.\n\n\"Your mother was mortal. A woman of extraordinary courage and ordinary origins. Zeus loved her — as much as Zeus is capable of loving anyone, which is more than his reputation suggests and less than she deserved.\"\n\nHer voice softens. Not with pity. With understanding.\n\n\"When you were born, he knew Hera would come for you. She always does. His other mortal children — Heracles, Perseus — they suffered terribly because of Hera's jealousy. He wouldn't let that happen again.\"\n\nShe pauses. Touches a dark flower.\n\n\"So he hid you. Completely. He sealed your divine blood so deeply that even the gods couldn't sense it. He placed you with a mortal family in Athens — good people, kind people, a house with a blue door and a courtyard full of jasmine — and told the Oracle at Delphi to watch over you from a distance.\"\n\nShe pauses. Touches a dark flower. Her hand trembles — just slightly.\n\n\"But Hera found them.\"\n\nThe garden goes still. Completely still. Even the underground streams stop moving.\n\n\"She couldn't sense you — the seal held. But she traced the patterns. She noticed a house in Athens where the lightning never struck, where the storms always parted. A family that was just slightly too lucky. And Hera — patient, methodical, absolute — burned them out of the world in a single night.\"\n\nPersephone's voice is quiet. Not gentle — precise. The precision of someone delivering a wound they know will land.\n\n\"Your brother. The woman who raised you — the one who wove cloaks with stars to keep you safe. The man who stood in the doorway every evening watching the sun go down. Gone. All of them. In a flash of divine fire that wasn't lightning.\"\n\nShe meets your eyes.\n\n\"You survived because the seal held. Because Zeus's power, buried in your blood, wrapped itself around you in the dark and held on. Hera never knew you were there. She thought she was punishing a family that had hidden something — she didn't realize the something was still breathing in the rubble.\"\n\nA pause. Heavy. The heaviest silence you've ever felt.\n\n\"Your father knows. He knows the family he chose to protect you paid the price for his deception. That guilt — not just 'I hid my daughter,' but 'the people I hid her with are dead because of me' — that's what he carries. Every day. On a throne made of lightning, surrounded by gods, carrying a grief he can never speak aloud.\"\n\nShe looks away. Toward the pomegranate trees.\n\n\"Every god you've met along the way — Hermes, Poseidon, the figure at the well — they were checking on you. Reporting back. Making sure Hera's work hadn't finished what it started.\"\n\nHer voice drops.\n\n\"And now she's starting to notice that something survived.\"",
    choices: [
      {
        text: "He had no right to hide this from me. No matter the reason.",
        statChanges: { Courage: 2, Wisdom: 1 },
        setsFlags: { angryAtZeus: true, truthRevealed: true },
        reputationChanges: { gods: -1 },
        feedback: "Persephone nods. Slowly. The nod of someone who has been waiting for this answer.\n\n\"No,\" she agrees. \"He didn't. But he did it anyway. That's what gods do — they make decisions for others and call it protection.\"\n\nShe meets your eyes. Hers are ancient and sad and completely honest.\n\n\"Your anger is valid. Hold onto it — it will keep you sharp when you need to be sharp. But don't let it become the only thing you feel. Anger that replaces everything else becomes a prison. And you've been in enough prisons without knowing it.\"",
        lesson: "Anger at a parent who hid the truth — even to protect you — is legitimate. Completely. You have a right to your feelings about your own identity. But Persephone's warning is real: anger is a tool, not a destination. Use it. Don't let it use you.",
      },
      {
        text: "I understand why he did it. Hera would have destroyed me.",
        statChanges: { Wisdom: 2, Empathy: 1 },
        setsFlags: { understoodZeus: true, truthRevealed: true },
        reputationChanges: { gods: 1 },
        feedback: "Persephone studies you. Something moves behind her eyes — surprise, maybe. Or recognition.\n\n\"That's more generous than most of his children have been,\" she says. \"Heracles raged for years. Perseus questioned everything. You...\" She pauses. \"You understand.\"\n\nA long moment of quiet. The pomegranate tree between you drops a single dark petal.\n\n\"Understanding doesn't mean you have to forgive,\" she says. \"But it means you see clearly. And clarity — not anger, not forgiveness, clarity — is what you'll need for what comes next.\"",
        lesson: "Understanding someone's reasons doesn't mean approving of their choices. You can see why Zeus hid you AND still wish he hadn't. Holding both truths at once — without collapsing into one or the other — is a sign of a kind of maturity that most adults never reach. Let alone a child of nine.",
      },
      {
        text: "What happens now? Does Hera know?",
        statChanges: { Cunning: 1, Discipline: 1 },
        setsFlags: { focusedOnFuture: true, truthRevealed: true },
        feedback: "Persephone's expression darkens. The garden darkens with it — the flowers closing slightly, the streams slowing.\n\n\"She suspects. The Underworld is the one place she can't easily watch — Hades keeps his domain private, and even Zeus's wife respects that boundary. That's partly why your path led here.\"\n\nShe trails off. Then, quieter:\n\n\"When you return to the surface, the protections fade. She'll sense you. And Hera doesn't destroy quickly.\" The queen's hands fold in her lap. \"She destroys thoroughly. Brick by brick. Person by person. Until everything you love is ash, and she can look at Zeus and say 'this is what your mistakes cost.'\"",
        lesson: "When you learn something that rewrites your entire life, there's a choice: dwell on the past or prepare for the future. You chose to look ahead. That's not avoidance — it's strategy. The truth is known. What you build with it next is what matters.",
      },
      {
        text: "Tell me about my mother. The mortal one. Who was she?",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { askedAboutMother: true, truthRevealed: true },
        feedback: "Persephone's face softens completely. The regal mask doesn't break — it dissolves, replaced by something warmer and older and more human than anything you've seen in the Underworld.\n\n\"Her name was Alexis,\" she says. \"She was a potter. In a small village. No noble blood, no special destiny, no prophecy hanging over her cradle. Just a woman who was brave enough to love a god and wise enough to know what it would cost.\"\n\nPersephone touches a pomegranate flower. It blooms at her touch.\n\n\"She gave you up so Zeus could hide you. She didn't want to — he had to beg, and gods don't beg. But she understood. If Hera found her with you, neither of you would survive.\"\n\nA pause. The flower glows faintly in the dark.\n\n\"She's still alive. She doesn't know about the family in Athens — what happened to them, what happened to you. Zeus promised her you were safe. He keeps that promise the only way he knows how: from a distance.\"\n\nPersephone's voice drops lower.\n\n\"Her hands look like yours. The same shape. The same strength. I've watched her from here — I watch everyone, eventually — and I can tell you this: she carries the weight of letting you go every single day. And she would be so proud of who you've become.\"",
        lesson: "In a room full of revelations about gods and destiny and divine politics, you asked about your birth mother. Not the family who raised you — you already know what happened to them. You asked about the woman who held you first and let you go. That instinct — to seek the human story inside the divine one — is what makes you different from every other child of Zeus who has ever lived.",
      },
    ],
  },
};

// ── Quest chapter6 has no fork — linear with exploration branching ──

export default chapter6Scenes;
