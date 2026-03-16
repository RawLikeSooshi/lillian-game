/**
 * Chapter 5: "The Garden of the Hesperides"
 * Setting: The western edge of the world. Reality warps. Golden apple tree.
 * God in disguise: Hermes as a fellow traveler (funny, irreverent, tests Cunning vs sincerity).
 * Rival: Not present but left a carved message on a tree.
 */

export const chapter5Scenes = {
  edgeOfMap: {
    id: "ch5_edge",
    title: "The Edge of the Map",
    image: "\ud83c\udf00",
    mood: "sacred",
    transitionText: "The road runs out. Not gradually — it simply stops, mid-sentence, like a thought someone abandoned. The last milestone reads a number you can't parse, the numerals looping back on themselves as if the stonecutter forgot how counting works.\n\nBeyond it, the world bends.",
    atmosphere: "The air tastes like copper and smells like a storm that hasn't decided whether to arrive. Shadows fall in directions that don't correspond to the sun. An olive tree grows with its roots in the sky, perfectly healthy, perfectly wrong.",
    text: "You've reached the place where maps become guesses and guesses become prayers.\n\nThe landscape is wrong in ways that unsettle your eyes before your mind catches up — olive trees growing upside down, their roots gripping a cloudless sky like fingers. The sun pauses mid-arc, then slides backward for one long heartbeat before resuming as if nothing happened. Flowers bloom and wilt and bloom again in the time it takes you to blink.\n\nA fellow traveler sits on a fallen column, eating an apple with the contentment of someone at a sidewalk café. He's young, lean, with a face built for trouble and sandals that are far too fine for the road — the kind of footwear that suggests either enormous wealth or enormous theft.\n\n\"Weird, isn't it?\" he says, grinning. \"The world doesn't like being at its own edge. Makes it cranky.\" He tosses you an apple. It's just a regular apple. You check. \"I'm heading the same way you are. Probably. Unless you're going somewhere boring, in which case I'll find better company.\"",
    choices: [
      {
        text: "Accept the apple and sit with him. Anyone comfortable here is worth knowing.",
        statChanges: { Wisdom: 1, Empathy: 1 },
        setsFlags: { befriendedTraveler: true },
        feedback: "He introduces himself as \"Loxias.\" It's obviously not his real name — he says it with a grin that dares you to call him on it, the way someone shows you a card trick and waits for you to spot the move.\n\nThe apple tastes like every apple you've ever eaten, somehow. All of them at once. He notices you noticing.\n\n\"The edge does that,\" he says. \"Makes things more themselves.\"\n\nHe knows things about the road ahead, and he shares them freely. Too freely, maybe. But his eyes are sharp and his company is better than the upside-down trees.",
        lesson: "People who are comfortable in uncomfortable places usually know something you don't. Sitting down with a stranger at the edge of the world takes less courage than you'd think — and teaches more than you'd expect.",
      },
      {
        text: "Ask him directly: how is he so calm when reality is breaking?",
        statChanges: { Cunning: 2 },
        setsFlags: { questionedTraveler: true },
        feedback: "His grin widens — not the grin of someone caught, but the grin of someone who's been waiting for a good question.\n\n\"Who says I'm calm? Maybe I'm just talented at panicking quietly.\" He takes another bite. \"Or maybe I've been here before. The edge of the world isn't as far as people think. It's wherever the rules stop working.\"\n\nHe looks at you with sudden sharpness — the mischief dropping for half a second, replaced by something older and more careful.\n\n\"You're not afraid. That's interesting. Most people are screaming by the time the trees go upside down.\"",
        lesson: "Asking the right question is its own kind of intelligence. You didn't ask who he was or where he was going — you asked why he wasn't afraid. That tells you more about both of you than a name ever would.",
      },
      {
        text: "Ignore him and study the upside-down trees. The wrongness has a pattern.",
        statChanges: { Wisdom: 2 },
        setsFlags: { studiedWarpedLandscape: true },
        feedback: "The trees aren't random. They grow in a spiral — roots pointing toward a single spot on the western horizon like compass needles drawn to true north. The sun's backward slide follows the same arc. The flowers bloom and die along the same curve.\n\nEverything is pointing somewhere. Everything is *pulling* toward something.\n\nThe traveler watches you study this with an expression he hasn't worn before. The grin is gone. What's underneath it might be respect.",
        lesson: "When the world stops making sense, look for the pattern underneath the chaos. Broken rules often point to the thing that broke them. The garden is pulling reality toward itself, the way a whirlpool pulls water.",
      },
      {
        text: "Keep moving. This place feels dangerous — don't linger.",
        statChanges: { Discipline: 1, Courage: 1 },
        setsFlags: { pressedThroughEdge: true },
        feedback: "You push forward. The traveler falls into step beside you without being invited — not rudely, but with the easy inevitability of water finding a downhill path.\n\n\"In a hurry?\" he asks. \"Good. The edge doesn't like visitors who stay too long. It starts to change them.\" He says this cheerfully — the way someone mentions a shark in the water while continuing to swim.\n\n\"The last person who lingered here too long started growing roots out of her feet. True story. Mostly.\"",
        lesson: "Some places are for passing through, not studying. Knowing when to keep moving — even when curiosity is pulling at your sleeves — is a discipline that protects you from dangers you don't yet understand.",
      },
    ],
  },

  hesperides: {
    id: "ch5_nymphs",
    title: "The Daughters of Evening",
    image: "\ud83c\udf3a",
    mood: "garden",
    transitionText: "The spiral of warped trees tightens. The air grows warm and heavy with sweetness — not flower-sweetness but something deeper, like the smell of the earth after a summer rain. Light turns golden, then deeper — the color of late afternoon, though it's barely noon. And you hear singing. Not music exactly. Sound that was old before music was invented.",
    atmosphere: "The garden unfolds before you like a secret told in color. Everything here is more alive than anything you've ever seen — every petal sharper, every shadow deeper, every breath of wind carrying a scent that changes before you can name it.",
    text: "The Garden of the Hesperides is real.\n\nIt unfolds around you as you step through the last twisted trees — and the wrongness stops. Here, everything is *right*. Impossibly, heartbreakingly right. The colors are deeper than colors should be. The air is warm and clear and tastes like honey and rain.\n\nThree women tend it — nymphs, ancient as the earth beneath them, beautiful in a way that has nothing to do with youth and everything to do with patience. Aigle, whose skin shimmers with faint light, as if she swallowed a lantern centuries ago. Erytheia, whose hair is the red of the last moment of sunset. Hespere, whose eyes hold the evening itself — dark, deep, full of endings.\n\nThey look up when you arrive. Not surprised. Expectant.\n\n\"We've been waiting,\" Aigle says. Her voice is warm. \"Not for you specifically. For someone. It's been so long since anyone came.\"\n\nErytheia touches a golden branch and it sways toward her fingers. \"They used to visit — heroes, gods, seekers. Now the world has forgotten where we are.\"\n\nHespere says nothing. She watches you with those evening eyes.\n\nBehind them, the tree. THE tree. Its bark is silver-white, its leaves are beaten gold that chime in a wind you can't feel, and from every branch hang apples that glow like small captured suns.\n\nCoiled around the trunk, a hundred-headed dragon sleeps. Or pretends to.",
    choices: [
      {
        text: "Speak to them with respect: 'I'm honored to be here. Tell me about the garden.'",
        statChanges: { Empathy: 1, Wisdom: 1 },
        setsFlags: { respectedHesperides: true },
        reputationChanges: { gods: 1 },
        feedback: "Aigle smiles — a real smile, the first genuine one you've seen in this place, and it changes her face entirely. She looks, for a moment, not ancient but ageless. Not tired but patient.\n\n\"The garden was planted by Hera, as a wedding gift from Gaia — grandmother Earth. We were chosen to tend it. The apples grant...\" She pauses. \"Well. That depends on who takes them and why.\"\n\nErytheia adds: \"Most heroes just try to grab one and run. Heracles did. He didn't even say hello.\" She looks at you with something like wonder. \"You asked first. That's new.\"",
        lesson: "Treating ancient beings with genuine respect — not fear, not worship, but the respect you'd show anyone who has cared for something beautiful for a very long time — opens doors that force never could. The Hesperides have been robbed and ignored for centuries. Being *asked* about their home meant something real.",
      },
      {
        text: "Ask about the dragon. 'Is it safe? Is it... all right?'",
        statChanges: { Empathy: 2 },
        setsFlags: { askedAboutLadon: true },
        feedback: "The three sisters exchange a look. A look that carries three thousand years of shared grief in a single glance.\n\nHespere finally speaks. Her voice is like twilight — beautiful, fading, holding on.\n\n\"Ladon. He's not a guard by choice. He was cursed to never sleep, never leave, never stop watching. A hundred heads, and not one of them has known rest in three thousand years.\"\n\nHer eyes are wet. \"He's in pain. Always. He remembers what it was like to dream.\"",
        lesson: "You saw a dragon and your first thought was 'Is it okay?' — not 'Is it dangerous?' That distinction defines a certain kind of hero. The kind that sees suffering before threat, even in something that could kill you.",
      },
      {
        text: "Look for signs of the rival. She was ahead of you — has she been here?",
        statChanges: { Cunning: 1, Wisdom: 1 },
        setsFlags: { searchedForRivalInGarden: true },
        feedback: "On the trunk of a cypress near the garden's edge, fresh knife marks. The bark is still weeping sap.\n\n\"I know what we are.\"\n\nThe same message. But beneath it, something new. Five more words, carved deeper, as if she pressed harder:\n\n\"Don't take the apple.\"\n\nAigle follows your gaze. \"The other girl? She came. She stood in front of the tree for a long time — longer than most. Then she left.\" She tilts her head, evening light catching her shimmering skin. \"Took nothing. That was unusual.\"",
        lesson: "Your rival left you a warning, not a trap. 'Don't take the apple' is advice from someone who looked at the choice and understood its cost. A rival who tries to protect you is more than a rival — and the word for what she is might be something you're not ready to say yet.",
      },
      {
        text: "Say nothing. Just take in the beauty of the garden. Some moments don't need words.",
        statChanges: { Discipline: 1, Empathy: 1 },
        setsFlags: { absorbedGarden: true },
        feedback: "You stand still. The garden breathes around you — flowers opening and closing in slow pulses, light shifting like something alive, the dragon's hundred heads rising and falling in a rhythm that looks like breathing but might be the closest Ladon gets to dreaming.\n\nThe sisters watch you not-rush. Something in their ancient faces softens — a tension you didn't know was there, unwinding. They've been bracing for the next hero who wants to take something.\n\nYou just want to *be here*. That's a different kind of arrival.",
        lesson: "Silence in a sacred place is its own kind of speech. Not every beautiful thing needs a response. Sometimes the bravest act is to be present — fully, quietly present — and let the moment be exactly what it is.",
      },
    ],
  },

  dragonLadon: {
    id: "ch5_dragon",
    title: "Ladon's Hundred Sorrows",
    image: "\ud83d\udc09",
    mood: "garden",
    atmosphere: "The dragon stirs. A hundred heads turn toward you — slowly, heavily, like sunflowers following a sun they're tired of watching. A hundred pairs of eyes, each one holding a different shade of the same ancient pain.",
    textVariants: {
      askedAboutLadon: "You approach Ladon carefully, knowing what Hespere told you. The dragon's hundred heads rise — not to attack but to *look* at you. Each head is different: some ancient and scarred with scales worn smooth as river stones, some almost young. All of them are tired. Tired the way mountains would be tired if mountains could feel.\n\nA low sound comes from deep in the dragon's chest. Not a growl. A moan. The sound of something that has been in pain so long the pain has become its only language.\n\nThree thousand years without sleep.\n\nHespere stands behind you. \"He knows you care,\" she whispers. \"That's why he hasn't struck. But the curse won't let him stand down. If you reach for the tree, he'll fight.\" Her voice breaks. \"He doesn't want to. He has to.\"",
      default: "The dragon wakes. All hundred heads rise at once, and the sound is like a forest of serpents drawing breath — a vast, hissing inhalation that makes the golden leaves tremble on their branches.\n\nLadon. The never-sleeping guardian of the golden tree.\n\nBut something is wrong. The dragon's movements are stiff, aching. Several heads droop and sway as if fighting to stay conscious. His scales are dull in patches — the color of tarnished bronze instead of living gold. Where his coils press against the tree trunk, the bark has been worn glass-smooth by centuries of the same position.\n\nThis isn't a monster guarding treasure. This is a prisoner chained to a post.\n\n\"He's been here since the beginning,\" Aigle says softly. \"Cursed never to sleep, never to leave, never to close even one pair of eyes. He guards because he must. Not because he chooses.\"\n\nThe nearest head looks at you. The eyes are intelligent. Exhausted. Old beyond counting.\n\nThey are asking you something.",
    },
    choices: [
      {
        text: "Try to heal Ladon. Lay hands on his nearest head and pour your empathy into the touch.",
        statChanges: { Empathy: 2, Courage: 1 },
        setsFlags: { triedToHealLadon: true, empathyPathLadon: true },
        feedback: "The nearest head flinches when your hand touches it — a shudder that runs through all hundred necks like wind through a wheat field. Then it goes still.\n\nUnder your palm, you feel the curse. It hums through the dragon's body like a wire pulled too tight — vibrating, constant, merciless. You can't break it. Not yet. You don't have enough.\n\nBut for one moment, one head closes its eyes.\n\nOne head, for the first time in three thousand years, rests.\n\nLadon makes a sound that shakes the golden leaves from the nearest branch. Not a roar. A sigh. The sigh of a creature who had forgotten what rest felt like and is remembering.",
        lesson: "You can't always fix what's broken. But you can give someone a moment of peace — and sometimes, that single moment matters more than a cure. One head resting out of a hundred is still one head at peace. That's not nothing. That's the whole world, to that head.",
      },
      {
        text: "Prepare to fight. If the curse forces him to guard, you'll have to get past him.",
        statChanges: { Courage: 2 },
        setsFlags: { fightPathLadon: true },
        feedback: "You settle into a stance. Hands up. Weight balanced. Ladon's hundred heads focus on you, and for one terrible moment you see intelligence in the nearest pair of eyes — old, tired, impossibly sad intelligence. The look of someone who has been forced to hurt people for longer than your civilization has existed.\n\nThe dragon doesn't want this fight any more than you do.\n\nBut the curse tightens. You can *see* it — a ripple through the scales, a stiffening, the eyes going hard not with anger but with compulsion. The heads rear back.\n\nIt's happening. Whether you're ready or not.",
        lesson: "Sometimes combat is unavoidable — not because either side wants it, but because something larger than both of you demands it. Fighting a creature you pity is one of the hardest things a warrior can face. The blade feels heavier when you're sorry for what you're swinging at.",
      },
      {
        text: "Speak to the dragon. Tell him your name and why you've come.",
        statChanges: { Wisdom: 1, Empathy: 1 },
        setsFlags: { spokeToLadon: true },
        feedback: "You speak clearly. No shouting. No weapon raised. Just your name, your journey, why you're here.\n\nThe hundred heads listen. They don't understand the words — but they understand the tone. Something honest. Something unafraid. Something that isn't demanding.\n\nLadon doesn't stand down. The curse won't let him. But the aggression in his posture softens — a degree, maybe two. The coils loosen slightly around the trunk. He's still a guardian.\n\nBut he's a guardian who's listening. And for a creature who has heard nothing but battle cries and demands for three millennia, listening is almost as good as resting.",
        lesson: "Speaking honestly to something that could kill you requires a specific kind of bravery — not the physical kind but the kind that makes you vulnerable. Ladon has heard threats and war cries for millennia. He's almost never heard someone just talk to him, the way you'd talk to anyone in pain.",
      },
      {
        text: "Ask the Hesperides if there's a way to free him. There must be a way.",
        statChanges: { Wisdom: 2 },
        setsFlags: { askedToFreeLadon: true },
        feedback: "The three sisters look at each other. A conversation passes between them in a language older than Greek — a language of glances and small movements and shared centuries.\n\nAigle speaks first: \"The curse can be broken. But the price is high.\"\n\nErytheia: \"A hero's sacrifice. Not blood — something more personal. A piece of who you are.\"\n\nHespere says: \"The last hero who could have done it took the apple instead.\"\n\nThe silence after that is heavy enough to bend the light.\n\nThey're looking at you. Waiting. The way they've waited for three thousand years.",
        lesson: "Asking the right question changes the entire shape of a problem. Every hero before you asked 'How do I get past the dragon?' You asked 'How do I free the dragon?' Same situation. Completely different question. Completely different world of answers.",
      },
    ],
  },

  goldenApple: {
    id: "ch5_apple",
    title: "The First Sacrifice",
    image: "\ud83c\udf4e",
    mood: "sacred",
    atmosphere: "The golden tree pulses — slow, steady, like a heart made of light. Ladon's hundred heads watch you with the patience of something that has been waiting for this moment since before your grandmother was born. The Hesperides hold their breath. Even the wind stops.",
    textVariants: {
      empathyPathLadon: "One of Ladon's heads rests against your shoulder, eyes closed. The weight of it is enormous — and gentle, the way a sleeping child is heavy. The other ninety-nine heads watch the tree with the resigned vigilance of three thousand years.\n\nYour touch gave him something — a crack in the curse. The smallest fissure in an unbroken wall. Not enough to free him. Enough for him to remember what freedom felt like.\n\nAigle steps forward. Her shimmer has dimmed — this is hard for her too.\n\n\"You have a choice,\" she says. \"The golden apple is yours to take. It will make you stronger — significantly, tangibly stronger. But Ladon's curse feeds on the tree's power. Take the apple, and the curse tightens. What's left of him... breaks.\"\n\nShe swallows. \"He dies.\"\n\nErytheia: \"Or you can give something of yourself. A piece of your strength — whatever you hold most closely. Pour it into the garden, into the tree, into Ladon's bones. It will break the curse. He'll rest. Finally rest.\"\n\nThe traveler — Loxias — watches from the edge of the garden, no longer grinning. For the first time, his face holds something it wasn't built for: solemnity.",
      fightPathLadon: "The fight was brutal and beautiful and wrong. Ladon fought because the curse demanded it, and you fought because there was no other path to the tree. The dragon lies against the trunk now, exhausted, a hundred heads lowered to the ground like wilted flowers.\n\nHe's alive. Barely.\n\nAigle's eyes are hard — not with anger at you, but with the accumulated grief of watching this happen again and again. \"You have a choice,\" she says. \"Take the apple. You earned it by combat. Ladon's curse will crush him without the tree's power supporting what's left. He'll die. But you'll be stronger.\"\n\nErytheia, quieter: \"Or give something of yourself. Pour your strength into the garden. Heal what the fight broke. Break the curse. Let him rest.\"\n\nHespere says nothing. She's kneeling beside the dragon, one hand on his nearest head, stroking the dull scales with the tenderness of someone saying goodbye.",
      default: "The moment of choice arrives. The garden holds its breath.\n\nThe golden apple glows on the lowest branch — close enough to touch, pulsing with a warmth that reaches your face from two feet away. Ladon's hundred heads track your movements but don't strike. Something in your approach gave him pause — or hope.\n\nAigle speaks. \"The apple grants power. Real power — not symbolic, not metaphorical. But the tree's strength and the curse are connected. Take the apple, and Ladon's curse tightens beyond what he can bear.\"\n\nShe meets your eyes. \"He won't survive it.\"\n\nErytheia: \"There is another way. Give a piece of yourself — your strength, your edge, whatever you hold most closely. Pour it into the garden. The curse breaks. Ladon rests. But you leave here with less than you came with.\"\n\nHespere looks at you with evening eyes. Her voice, when it comes, is barely a whisper:\n\n\"Every hero before you took the apple.\"",
    },
    choices: [
      {
        text: "Sacrifice a piece of yourself. Let Ladon rest. He's suffered enough.",
        statChanges: { Empathy: 2 },
        setsFlags: { sacrificedForLadon: true, ladonFreed: true, madeFirstSacrifice: true },
        reputationChanges: { gods: 2, commonPeople: 1 },
        feedback: "You step forward and place your hand on the tree.\n\nSomething flows out of you. You can feel it leaving — not like blood, not like warmth, but like a color draining from a painting. Something essential, something you didn't know you had until it was going. It hurts. Not in your body. Deeper. In the place where you keep the things that make you *you*.\n\nThe golden light of the tree pulses once. Twice. Then spreads — down through the roots, into the earth, up through Ladon's coils. The curse unravels like old rope finally cut free. Fiber by fiber. Strand by strand.\n\nOne by one, the hundred heads close their eyes.\n\nLadon sleeps. For the first time in three thousand years, Ladon sleeps.\n\nThe sound he makes is the quietest sound you've ever heard. A sigh that has been waiting thirty centuries to be exhaled.\n\nHespere is weeping. Aigle touches your shoulder. \"Thank you,\" she says. Just that. Just two words. They're enough.",
        lesson: "The first sacrifice is the hardest. Not because of what you lose — but because you discover that you're the kind of person who will give something up for someone else's peace. That knowledge changes you more than the loss does. You left the tree diminished. You left the tree knowing who you are.",
      },
      {
        text: "Take the golden apple. You need every advantage for what's ahead.",
        statChanges: { Courage: 1, Cunning: 1 },
        setsFlags: { tookGoldenApple: true },
        setsInventory: ["goldenApple"],
        reputationChanges: { gods: -1 },
        feedback: "You reach up and pluck the apple. It comes free with a sound like a bell struck once in an empty cathedral — a single, clear note that hangs in the air.\n\nWarmth floods through you. Power. Real, immediate, undeniable. You are more than you were ten seconds ago.\n\nBehind you, Ladon shudders. The curse tightens like a fist. The hundred heads strain against it — necks arching, mouths opening in a sound that you will hear in your dreams for the rest of your life. Not a roar. A plea.\n\nThe Hesperides turn away. Aigle's shimmer goes dark. Erytheia covers her face.\n\nHespere's voice, barely audible, carrying three thousand years of this exact moment:\n\n\"Just like the others.\"",
        lesson: "Taking what you need isn't always wrong. But it's never free. The apple is real power, and the road ahead is dangerous. Whether this was the right choice depends entirely on what you do with what you gained — and whether you can carry the sound Ladon made when you took it.",
      },
      {
        text: "Refuse both. Walk away from the tree. Neither path feels right.",
        statChanges: { Wisdom: 1, Discipline: 1 },
        setsFlags: { refusedAppleChoice: true },
        feedback: "\"No,\" you say. \"I won't take the apple. And I won't sacrifice something I don't understand for a curse I didn't cause.\"\n\nThe sisters stare. Aigle's mouth opens, then closes. In three thousand years of heroes coming to this tree, no one has ever refused both.\n\nThe garden is quiet. Ladon watches with a hundred expressions you can't read.\n\n\"Then nothing changes,\" Aigle says. Her voice is careful. \"Ladon suffers. The apple remains. And you leave empty-handed.\"\n\nBut the traveler — Loxias — catches your eye from the edge of the garden. He nods. Just once. The smallest motion. And something in that nod says: *Not wrong. Not wrong at all.*",
        lesson: "Refusing a false choice — saying 'I need more information' or 'these aren't my only options' — takes more courage than choosing either side. Sometimes the bravest thing is to walk away from a decision that doesn't feel honest, and accept the cost of not acting.",
      },
      {
        text: "Ask the traveler what he thinks. He's been watching. He knows something.",
        statChanges: { Cunning: 1, Wisdom: 1 },
        setsFlags: { askedTravelerAboutApple: true },
        feedback: "Loxias looks surprised — genuinely, for the first time since you met him. The grin falls away and what's underneath is sharper and older than he's been letting on.\n\nThen he laughs. But it's a different laugh. Quieter. Real.\n\n\"You're asking ME? I'm just a traveler.\" But his eyes are serious. \"Okay. Here's what I think: the apple is real power, and Ladon's suffering is real suffering. Both are true at the same time. The question isn't which matters more.\"\n\nHe straightens his too-fine sandals.\n\n\"The question is which one you can carry.\"\n\nA pause. Then, lightly — too lightly:\n\n\"Your father would take the apple. Just so you know.\"",
        lesson: "Asking for counsel at a crossroads isn't weakness — it's the recognition that you're standing inside a problem and someone outside it might see the shape more clearly. The traveler didn't tell you what to do. He told you what you're really deciding. And that last line about your father — that's a clue. File it.",
      },
    ],
  },

  theExit: {
    id: "ch5_exit",
    title: "Daughter of Thunder",
    image: "\u26a1",
    mood: "road",
    atmosphere: "The garden fades behind you. The warped landscape begins to right itself, like a dreamer waking. The traveler walks beside you. The air crackles with something that isn't static. Something that has been building for five chapters and is about to break.",
    textVariants: {
      sacrificedForLadon: "You leave the garden lighter. Not weaker — lighter. Something heavy was traded for something else, and the exchange left you different in a way you can't measure with the tools you had before.\n\nThe traveler walks beside you in silence for the first time since you met him. No jokes. No observations. Just footsteps on earth that's slowly remembering how to be normal.\n\nThe warped landscape rights itself as you walk — trees growing the right way up, shadows finding their proper angles, the sun resuming its honest arc. The world is welcoming you back. It looks different from this side.\n\nThen it hits.\n\nNot a vision. Not a dream. A MEMORY.\n\nOlympus. A throne room made of clouds and light so bright it has weight. Two voices — vast, ancient, shaking with a love so large it doesn't fit in human words:\n\n\"She has your eyes.\"\n\n\"She has her mother's courage.\"\n\nLightning. The smell of ozone — sharp, electric, the smell of the sky splitting open with joy. A baby crying. YOUR crying. The sound you made when you entered the world.\n\nYou stagger. The traveler catches your arm. His grip is stronger than it should be.\n\n\"Easy,\" he says. His voice is different now. The joke is gone. What's underneath is kind and old and has been waiting a long time to speak honestly. \"You're remembering.\"\n\nYou look at him. Really look. The too-fine sandals. The way he moves — quicksilver, impossible to pin down. The fact that reality has been bending around him like water around a stone this entire time.\n\n\"You're not Loxias,\" you say.\n\nHe smiles. Sad and proud at the same time — the smile of someone delivering news that is wonderful and terrible and will change everything.\n\n\"No. I'm Hermes. Messenger of the gods.\" A pause. His eyes are gold. They've always been gold — you just weren't looking. \"Your father sent me to watch over you.\"\n\nAnother pause. The sky holds its breath.\n\n\"Your father is Zeus. You are a daughter of the king of the gods.\"\n\nThe sky rumbles. Not with anger. With recognition. The sound a world makes when something that was hidden finally steps into the light.",
      default: "You leave the garden. The traveler walks beside you, quiet for the first time — unusual enough to notice, unusual enough to worry about.\n\nThe warped landscape straightens around you as you walk, like a wrinkled cloth being smoothed by an invisible hand. Trees right themselves. Shadows fall where they should. The sun remembers its job.\n\nThen the memory comes. Uninvited. Unstoppable. Like a wave you didn't see building.\n\nOlympus. Clouds like marble floors. A room full of light so bright it sings. Two voices, enormous and familiar — familiar the way your own heartbeat is familiar, the way thunder is familiar:\n\n\"She has your eyes.\"\n\n\"She has her mother's courage.\"\n\nLightning. Not threatening — celebratory. Joyful. The crack and roar of a sky splitting open because something wonderful has happened. The sound a father makes — the sound a WORLD makes — when his child is born.\n\nYOUR birth.\n\nYou fall to your knees. The traveler catches you before you hit the ground. His hands are stronger than they should be. His grip doesn't shake.\n\n\"Breathe,\" he says. The grin is gone. His voice is different — older, kinder, layered with something that isn't mortal. \"You're not losing your mind. You're finding it.\"\n\nHe takes off his ridiculous sandals. They sprout wings. Small, white, fluttering like startled doves.\n\n\"I'm Hermes,\" he says. Simply. No performance. No trick. \"Messenger of the gods. I was sent to walk with you until you were ready to hear the truth.\"\n\nHe meets your eyes. His are gold.\n\n\"You are a daughter of Zeus. The king of Olympus is your father.\"\n\nThunder rolls across a clear sky. And something inside you — something that has been coiled tight since the day you stood in a courtyard in Athens and wasn't afraid of lightning — finally, finally unfurls.",
    },
    choices: [
      {
        text: "'I knew. Some part of me always knew.'",
        statChanges: { Wisdom: 2 },
        setsFlags: { acceptedIdentity: true, ch5Complete: true },
        reputationChanges: { gods: 1 },
        feedback: "Hermes nods. Not surprised. Relieved.\n\n\"You did. The echoes, the dreams, the way lightning never scared you — it's been calling you home since you were born. Your blood knew before your mind did.\"\n\nHe puts a hand on your shoulder. The weight of it is warm and strange and exactly right.\n\n\"It doesn't change who you've been,\" he says. \"Every choice, every sacrifice, every person you helped on the road — that was you. Not Zeus's daughter. You.\"\n\nA pause.\n\n\"It changes what you can become.\"",
        lesson: "Self-knowledge often arrives as confirmation, not revelation. The signs were always there — the echoes, the pull of the mountain, the way you understood things no mortal should. Accepting what you already felt is its own kind of courage. The hardest truths are the ones you already know.",
      },
      {
        text: "'I'm angry. Why did no one tell me sooner?'",
        statChanges: { Courage: 1, Empathy: 1 },
        setsFlags: { angryAtTruth: true, ch5Complete: true },
        feedback: "Hermes doesn't flinch. He's been expecting this.\n\n\"Because Zeus asked us not to. He wanted you to grow as yourself — not as his daughter. Not as a weapon or a legacy or a name people worship before they meet you. As a person.\"\n\nHe pauses. The gold fades from his eyes for a moment — they're just brown, just human, just tired.\n\n\"Was he right? I honestly don't know. But his reasons weren't selfish. For once.\"\n\nThe anger stays. Hot and real and yours.\n\nBut underneath it, you feel something else: understanding. Partial. Reluctant. Like a door you don't want to open but can't quite keep closed.",
        lesson: "Anger at being kept in the dark about your own identity is completely valid. The people who kept the secret may have had reasons — even good ones. Both things can be true at the same time: they were trying to protect you, AND you deserved to know. Holding both truths is hard. But it's honest.",
      },
      {
        text: "'What does it mean? What am I supposed to do with this?'",
        statChanges: { Discipline: 1, Wisdom: 1 },
        setsFlags: { seekingPurpose: true, ch5Complete: true },
        feedback: "Hermes laughs — but gently. The way you'd laugh at a child who asks the one question all the adults are afraid of.\n\n\"THAT'S the right question. Not 'who am I' — you already know that. 'What do I do with it.'\"\n\nHe straightens. The wings on his sandals flutter.\n\n\"Olympus needs you. Not as a soldier. Not as a weapon. As something new. The gods are stuck in old patterns — the same arguments, the same wars, the same everything for ten thousand years. You've been growing out here in ways we don't understand.\"\n\nHe grins — and there he is, the real Hermes, the quicksilver god who loves chaos the way some people love music.\n\n\"That terrifies most of them. Not me. I love a good surprise.\"",
        lesson: "When you learn something that changes the shape of your entire life, the most powerful response isn't to dwell on the revelation. It's to ask what comes next. Identity is not a destination. It's a starting point.",
      },
      {
        text: "'The rival — Kira. She wrote \"I know what we are.\" She knew.'",
        statChanges: { Cunning: 2 },
        setsFlags: { connectedRivalTruth: true, ch5Complete: true },
        feedback: "Hermes goes very still. The stillness of a god who just realized a mortal saw something he didn't expect them to see.\n\n\"Yes,\" he says. His voice drops. \"Kira figured it out on her own. No one told her. No one had to.\"\n\nThe wind picks up. Hermes meets your eyes.\n\n\"She's Zeus's daughter too. Your half-sister.\"\n\nThe ground shifts under you. Not literally — not this time. But the world rearranges itself in your mind. The rival. The girl who's been one step ahead. The carved messages. The warning about the apple.\n\nSister.\n\nHermes: \"This changes things, doesn't it.\"\n\nIt's not a question.",
        lesson: "Connecting the dots between separate clues — across chapters, across conversations, across carved messages on trees — is the deepest form of intelligence. Not trickery. Pattern recognition. 'I know what we are' wasn't about being heroes. It was about being sisters. The rivalry just became the most complicated thing in your life.",
      },
    ],
  },
};

// ── Rival note: carved on a cypress tree in the garden ──
// "I know what we are." + "Don't take the apple."

export default chapter5Scenes;
