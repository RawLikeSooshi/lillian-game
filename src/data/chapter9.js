/**
 * Chapter 9: "The Siege of Athens"
 * Setting: Athens under divine siege. Gods choosing sides. The biggest combat chapter.
 * Gods active: Athena (openly), Ares (enemy), Hera (through emissary). Multiple gods at war.
 * Rival: Also in Athens. Alliance/enmity/neutrality shapes the siege.
 */

export const chapter9Scenes = {
  theReturn: {
    id: "ch9_return",
    title: "The Return to Athens",
    image: "🏛️",
    mood: "battle",
    transitionText: "You smell the smoke before you see the city. Athens — the crown of Greece, the city of wisdom, the place where you argued with your brother about a goat in a courtyard full of jasmine — is burning at the edges. Not from mortal fire. From divine disagreement. The smoke rises in columns too straight to be natural, too bright to be wood. The gods are here. And they are not in agreement.",
    atmosphere: "The sky above Athens is fractured — storm clouds pressing from the north, unnatural golden light from the south, a bruise-colored seam where the two meet directly above the Parthenon. The air tastes of ozone and ash and something older than both. You are home. Home is on fire.",
    textVariants: {
      rivalAllied: "You and Kira arrive together — two daughters of Olympus, walking side by side into a city that's tearing itself apart over what they represent.\n\nThe road to Athens is choked with refugees. Families carrying everything they own on their backs, soldiers with hollow eyes and borrowed weapons, children holding the hands of parents who are trying not to shake. They recognize you. Word of Zeus's daughter has traveled faster than your feet.\n\n\"She's here,\" a soldier whispers. Not to you. To himself. To hope. \"Maybe now the gods will listen.\"\n\nKira glances at you. Her jaw is set. Her eyes are calculating.\n\n\"They're not fighting over Athens,\" she says quietly. \"They're fighting over us. Over what we represent. Whether demigods are weapons or people.\"\n\nShe's right. This isn't an army at the gates. It's a family argument the size of a city — and the city is caught in the middle, the way children are always caught in the middle.\n\nThe Acropolis stands defiant against the fractured sky. Athens is wounded but not broken. Not yet.",
      rivalEnemy: "You arrive alone. The road to Athens is choked with refugees, but they part for you — not with fear, but with the desperate hope of people who need to believe that someone can fix this. Your reputation walks ahead of you like a herald with a voice louder than yours.\n\nAthens is under siege — not by any mortal army. The sky itself is at war: storm-red from the north where Ares' chosen mass at the gates, silver-bright from the south where Athena's light holds the Acropolis. Between them, the city cowers.\n\nA scout finds you at the gate. Young. Dusty. Frightened in a way he's trying to hide.\n\n\"The other one is already here,\" he says. \"The girl with the dark eyes. She came through the eastern gate.\" He hesitates. \"She's... different from you.\"\n\nHe doesn't elaborate. He doesn't need to.\n\nKira is here. On the other side of whatever this is about to become.",
      default: "The road to Athens should feel like a homecoming. Instead, it feels like walking into a wound you caused by surviving.\n\nThe city is under siege — not by armies but by gods. The sky splits above the Parthenon like a cracked mirror: Ares' storm-red clouds pressing against Athena's silver light, the two halves grinding against each other with a sound like the world's largest millstone. Mortals huddle in their homes while divine power crackles through the streets like heat lightning, singeing the edges of things — awnings, tempers, faith.\n\nRefugees recognize you. Soldiers straighten when you pass. A woman grabs your arm — her grip is iron, her eyes are desperate:\n\n\"Zeus's daughter. Please. Make them stop.\"\n\nYou look up at the Acropolis. Athena is waiting. You can feel it — a pull, steady and deliberate, the way a general summons a lieutenant.\n\nAnd somewhere in the city, Kira is here too. The same forces that brought you to Athens brought her. The same argument. Different sides.",
    },
    choices: [
      {
        text: "Go straight to the Acropolis. Athena is waiting, and every minute counts.",
        statChanges: { Courage: 1, Discipline: 1 },
        setsFlags: { wentToAcropolisFirst: true },
        feedback: "You climb the sacred hill without stopping. The path is steep and worn smooth by ten thousand years of feet — priests, generals, heroes, refugees, all climbing the same stones toward the same temple.\n\nThe soldiers at the base salute you. Actually salute — fist to chest, heads bowed, the gesture reserved for commanders and kings. It takes you a step past them before you realize they mean it.\n\nThe Parthenon gleams above, its columns catching light that doesn't come from the sun. Something is waiting up there. Something that has been waiting since before you were born.",
        lesson: "When a city is in crisis, going to the center of power isn't ambition — it's responsibility. You're not seizing control. You're answering a call that was sent before the siege began.",
      },
      {
        text: "Find the refugees first. They need help before strategy.",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { helpedRefugeesFirst: true },
        reputationChanges: { commonPeople: 2 },
        feedback: "You spend an hour in the refugee camp outside the southern walls. Bandaging wounds with torn cloth. Carrying water in vessels that slosh against your legs. Holding a child — two years old, maybe three, with snot on her face and absolute terror in her eyes — while her mother sleeps for the first time in three days.\n\nThe people here don't care about divine politics. They don't care that you're Zeus's daughter. They care about clean water and a safe place to put their children and whether the walls will hold until morning.\n\nWord spreads. Not fast — word moves differently in a refugee camp. But by the time you leave, they know: Zeus's daughter came. Not to the temple. Not to the generals. To the dirt. To them.",
        lesson: "Leaders who help before they strategize earn something that strategy alone never provides: trust. The refugees will remember this. When the battle comes and the city needs every hand, that memory — the daughter of Zeus, in the dirt with the rest of them — will matter more than any speech.",
      },
      {
        text: "Find Kira. Whatever is about to happen, you need to know where she stands.",
        statChanges: { Cunning: 1, Wisdom: 1 },
        setsFlags: { soughtKiraFirst: true },
        feedback: "You track her through the eastern quarter — asking, following, reading the trail she leaves in people's reactions. Fear. Respect. Confusion. She passed this way and left an impression like a boot print in wet clay.\n\nYou find her in a tavern near the eastern wall. Alone. A cup of wine in front of her she hasn't touched — the surface still, unbroken, a mirror she's staring into instead of drinking from.\n\nWhen she sees you, something crosses her face. Relief? Resignation? The look of someone who's been waiting for the one person who might understand what's about to happen.\n\n\"They offered me a deal,\" she says. No preamble. No greeting. Just the truth, dropped on the table like a weapon.\n\n\"I assume they'll offer you one too.\"",
        lesson: "Understanding your rival's position before committing to your own is strategic wisdom. Kira isn't your enemy by default — she's another piece on the same board. Knowing where she stands changes where you can stand.",
      },
      {
        text: "Survey the walls and gates. Understand the siege before engaging.",
        statChanges: { Wisdom: 1, Discipline: 1, Cunning: 1 },
        setsFlags: { surveyedDefenses: true },
        feedback: "You walk the full circuit of Athens' walls. It takes two hours. Every step teaches you something.\n\nNorthern gate: Ares' forces — bronze-armored, red-plumed, restless. They're not besieging. They're *performing*. Waiting for the audience to arrive. Eastern gate: quiet, but the air shimmers with something you can feel on your skin — a vibration, a potential, like standing next to a bowstring drawn and not yet released. Southern gate: open, refugees streaming in, the only gate that hasn't been claimed by a god. Western gate: sealed from the inside. Strange markings burned into the wood — not Greek. Older.\n\nYou've seen the shape of the siege. It's not a circle. It's a question with four parts. Now you can start answering it.",
        lesson: "Before committing to action in a crisis, understanding the full situation isn't hesitation — it's intelligence. Generals who act without reconnaissance lose battles they could have won. You walked the walls. Now the walls are part of your plan.",
      },
    ],
  },

  councilAthena: {
    id: "ch9_council",
    title: "The Council of Athena",
    image: "🦉",
    mood: "temple",
    transitionText: "The Parthenon is not a temple today. It's a war room. The incense has been cleared, the offerings swept aside, and the altar is covered in maps drawn on stretched hide and marked with tokens of ivory and bronze. The goddess of wisdom is not hiding behind a disguise. Not anymore. Not here.",
    atmosphere: "Athena stands in her own temple, armored in silver and gold, unhelmeted. Her grey eyes miss nothing — they move across you the way they move across a battlefield, cataloging strengths and vulnerabilities in the same glance. An owl sits on her shoulder. The maps on the altar show a city surrounded. This is not prayer. This is planning.",
    text: "Athena doesn't introduce herself. She doesn't need to.\n\nShe is seven feet tall. Armored in silver and gold that moves like cloth and catches light like water. Her face is beautiful the way a blade is beautiful — precise, purposeful, carrying ten thousand years of warfare and wisdom in the lines around her grey eyes.\n\n\"You came,\" she says. Not surprised. Not grateful. A statement of fact, delivered the way a general notes a unit's arrival on the field — with relief calculated in terms of tactical advantage.\n\nThe maps on the altar show Athens and every force arrayed against it. Ares' warriors at the north gate — red tokens, massed and restless. Hera's emissary approaching from the east — a single gold token, moving slowly. Something older and stranger stirring beneath the city — black tokens, uncertain, unreadable.\n\n\"Your father won't intervene,\" Athena says. \"He's bound by laws even he can't break — laws he made, ironically, to prevent exactly this kind of divine civil war.\" Her jaw tightens. \"This city stands or falls on mortal courage, guided by divine wisdom.\"\n\nShe looks at you directly. Grey eyes. Steady as bedrock.\n\n\"My wisdom. Your courage. That's the offer.\"\n\nShe gestures at the maps. \"I need someone to lead the defense. Not because you're Zeus's daughter — I have little patience for bloodline authority. Because you've proven, in eight chapters of this journey, that you can make decisions under pressure when the stakes are real and the answers aren't clean.\"\n\nA pause. The owl blinks.\n\n\"I've been watching. All of us have. You're ready.\"\n\nShe waits. Athena doesn't rush. Neither should you.",
    choices: [
      {
        text: "Accept the command. If Athena trusts you to lead, you'll lead.",
        statChanges: { Courage: 2, Discipline: 1 },
        setsFlags: { acceptedCommand: true },
        reputationChanges: { gods: 1 },
        feedback: "Athena nods. Once. The way a sword falls — clean, decisive, final.\n\n\"Good. No false humility. I chose you because you act, not because you're comfortable.\"\n\nShe begins outlining the defense — formations that use the terrain, fallback positions that turn retreat into ambush, the three things that must not fall: the northern gate, the water supply, and the signal fire on the Acropolis that tells the whole city whether to fight or flee.\n\nYou listen. You learn. You begin to understand — with a weight that settles into your chest like a stone — what it means to carry a city on your shoulders.\n\nIt weighs exactly as much as the people in it.",
        lesson: "Accepting responsibility you didn't seek is different from seeking power you don't deserve. Athena chose you not for your blood but for your record — every choice across every chapter. Saying yes when the right person asks isn't arrogance. It's answering.",
      },
      {
        text: "Ask what she means by 'guided by divine wisdom.' What's her role in this?",
        statChanges: { Wisdom: 2, Cunning: 1 },
        setsFlags: { questionedAthena: true },
        feedback: "Athena's expression shifts. Not much — a degree, maybe two. But from a face carved from ten thousand years of composure, that degree is a standing ovation.\n\n\"I can advise. I can see patterns you can't — the kind that span centuries, that require a mind older than human civilization to hold. I can strengthen your strategy with insight that no mortal general has access to.\"\n\nShe pauses. The owl ruffles its feathers.\n\n\"But I cannot fight for you. The laws of Olympus forbid gods from directly striking at each other's mortal champions. Ares is bending those laws. Bending them until they scream.\"\n\nHer grey eyes harden.\n\n\"I will not.\"",
        lesson: "Understanding the terms of an alliance before accepting it is wisdom, not suspicion. Athena respects the question because it shows you're thinking about what 'guided' actually means — and because unclear boundaries on power are dangerous. Even divine power.",
      },
      {
        text: "Tell her you'll help, but on one condition: the civilians come first.",
        statChanges: { Empathy: 2, Courage: 1 },
        setsFlags: { demandedCivilianPriority: true },
        reputationChanges: { commonPeople: 1 },
        feedback: "Athena goes very still. The stillness of a goddess reassessing.\n\nThen she does something unexpected. She smiles. Not warmly — Athena doesn't do warmly. But with something that might be recognition. As if she's seeing a face she remembers from a very long time ago.\n\n\"Your father would have said the same thing,\" she says. \"Before he became king. Before the crown made him forget what crowns are for.\"\n\nShe rearranges the maps — pulling civilian evacuation routes from the edges to the center, making them the spine of the defense instead of an afterthought.\n\n\"Protecting the people IS the strategy. A city without its people is just stone. You understand that. Most generals don't.\"",
        lesson: "Setting conditions on how you'll help isn't weakness — it's having values. And Athena, goddess of strategic warfare, agreed because protecting civilians IS good strategy. Morality and effectiveness aren't opposites. In the hands of a wise commander, they're the same thing.",
      },
      {
        text: "Ask about Kira. What role does the rival play in this siege?",
        statChanges: { Wisdom: 1, Cunning: 1 },
        setsFlags: { askedAthenaAboutKira: true },
        feedback: "Athena's expression hardens — and from a face already carved from stone, hardening is alarming.\n\n\"The other demigod. Ares' daughter.\"\n\nShe moves a token on the map — a dark bronze piece, positioned between the gates. Neither inside nor outside. Unclaimed.\n\n\"Ares has made her the same offer he makes every ambitious half-blood: power in exchange for service. War in exchange for belonging.\"\n\nShe meets your eyes.\n\n\"I don't know if she accepted. Do you?\"\n\nThe question isn't rhetorical. Athena — goddess of wisdom, who sees patterns spanning millennia — genuinely doesn't know where Kira stands. That uncertainty, on that face, is the most terrifying thing you've seen since the labyrinth.",
        lesson: "Even gods have blind spots. Athena's uncertainty about Kira isn't weakness — it's honesty. Leaders who pretend to know everything are more dangerous than leaders who admit what they can't see. And if the goddess of wisdom can't predict Kira — what chance does anyone have?",
      },
    ],
  },

  herasEmissary: {
    id: "ch9_emissary",
    title: "Hera's Offer",
    image: "👑",
    mood: "city",
    transitionText: "The emissary arrives at dusk. Not through any gate — she simply appears in the agora, as if she stepped out of the air itself. Dressed in white. Carrying no weapon. The soldiers let her pass — not because they choose to, but because their hands won't close around their hilts. Something about her makes violence impossible. That's more frightening than any sword.",
    atmosphere: "The air goes cold and still. The sounds of the siege — the rumble of Ares' thunder, the crackle of divine energy, the distant shouting — fall silent. All of it. As if someone pressed a hand over the mouth of the world. When Hera speaks, even through a messenger, everything listens.",
    text: "The emissary is a woman who might be forty or four thousand. Her face carries the specific beauty of someone who has never needed to explain herself — the beauty of authority so absolute it doesn't require enforcement. Her voice, when she speaks, carries the weight of Olympus itself.\n\n\"I speak for Hera, Queen of the Gods. She has watched your journey with interest.\"\n\nThe word 'interest' sounds like a verdict.\n\n\"She has a proposal.\"\n\nThe words drop into the silence like stones into a well so deep you never hear them land.\n\n\"Leave Athens. Walk away from this siege, from Athena's war, from this city. Take nothing. Ask nothing. Simply leave.\"\n\nA pause. The emissary's eyes are the color of the sky when it can't decide between storm and clarity.\n\n\"If you leave, Hera will end the siege. Ares will withdraw. Athens will stand. No one else needs to die. The cost is only this: you walk away. You prove that you are not your father — that Zeus's daughter can choose peace over pride.\"\n\nAnother pause. Longer. The silence around her is so complete you can hear your own heartbeat.\n\n\"If you stay, the siege intensifies. Ares will commit fully. People will die who didn't have to die. And Hera will not intervene to stop it.\"\n\nShe folds her hands. They're perfectly still.\n\n\"You have until dawn.\"",
    choices: [
      {
        text: "I need to think about this. This isn't a decision you make in a moment.",
        statChanges: { Wisdom: 2, Discipline: 1 },
        setsFlags: { consideredHeraOffer: true },
        feedback: "The emissary nods. And something shifts in her face — something that might, if you looked closely, be the first genuine expression she's shown. Surprise. Respect.\n\n\"Wisdom,\" she says. \"Your father never had it. Perhaps you do.\"\n\nShe vanishes as quietly as she came — not walking away, just ceasing to be present, the way a sound ceases when the source stops vibrating.\n\nYou're left in the agora with a choice that will define everything that comes after. The silence she leaves behind is louder than the siege.",
        lesson: "Refusing to make a life-altering decision under pressure isn't indecision — it's discipline. Hera's offer was designed to force an immediate reaction. Taking time to think is the first act of genuine wisdom.",
      },
      {
        text: "No. I won't be blackmailed. Athens doesn't fall because Hera says so.",
        statChanges: { Courage: 3 },
        setsFlags: { rejectedHeraOffer: true, defiedHera: true },
        reputationChanges: { gods: -1 },
        feedback: "The emissary's eyes widen — just slightly. A crack in the marble of divine composure.\n\n\"You refuse the Queen of the Gods?\"\n\nHer voice is perfectly neutral. A messenger delivering a message about a message. But underneath the neutrality, something is paying very close attention.\n\n\"Then the siege continues. And the blood that follows is on your hands.\"\n\nShe vanishes. The sounds of war return — louder, angrier, as if Ares was listening too and didn't like your answer. Thunder rolls across the sky like a fist hitting a table.\n\nYou feel the weight of what you just did. The full, crushing, honest weight.\n\nBut you also feel something else. Underneath the weight, holding it up: certainty. The kind that doesn't come from knowing you're right. The kind that comes from knowing you can live with who you are.",
        lesson: "Defying a god has consequences. Real, measurable, bloody consequences. But so does accepting a deal that saves one city by trading away your ability to stand for anything. You chose the harder path. Now you have to make it worth the cost.",
      },
      {
        text: "If I leave and Athens is saved... isn't that the right choice?",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { consideredLeaving: true },
        feedback: "The emissary tilts her head. The gesture is eerily human — and calculated to be.\n\n\"That is the question, isn't it?\" Almost sympathetic. Almost. \"One life — yours, spent elsewhere — against the thousands who live here.\"\n\nShe lets that sit.\n\n\"Hera believes that true leadership is knowing when to step aside. Not every problem needs a hero standing in it. Some problems need an absence — a removal of the element that causes the friction.\"\n\nThe logic is sound. Clean. Elegant. A city saved for the price of one person walking away.\n\nThat's what makes it so dangerous. The best traps don't look like traps. They look like wisdom.",
        lesson: "Hera's argument has real weight — and that's the point. Sometimes the heroic thing IS to step aside. The question you have to answer isn't whether the logic is sound (it is) — it's whether Hera is using reasonable logic to achieve an unreasonable goal. Good arguments can serve bad purposes. Learning to tell the difference is the hardest form of wisdom.",
      },
      {
        text: "What was offered to Kira? The same deal?",
        statChanges: { Cunning: 2 },
        setsFlags: { askedAboutKiraDeal: true },
        feedback: "The emissary pauses. The first crack in her composure — hairline, almost invisible, but *there*. The hesitation of a messenger who just encountered a question she wasn't briefed on.\n\n\"The other daughter of Olympus was offered... a different arrangement.\" She recovers quickly — the marble reassembling. \"By a different god.\"\n\nA correction: \"What concerns you is your choice. Not hers.\"\n\nBut you saw the hesitation. You *saw* it. Kira wasn't offered peace. She was offered something else — something the emissary doesn't want to name. And whoever offered it wasn't Hera.\n\nAres. It had to be Ares. His own daughter. A different deal for a different weapon.\n\nThe board just got more complicated.",
        lesson: "Asking the right question can reveal more than the answer. The emissary's hesitation told you three things: Kira got a different deal, it came from a different god, and Hera doesn't fully control what's happening here. Information like that doesn't just change your next move. It changes the game.",
      },
    ],
  },

  theBattle: {
    id: "ch9_battle",
    title: "After the Storm",
    image: "⚔️",
    mood: "battle",
    transitionText: "The battle is over. The silence that follows is worse than anything that preceded it — not the silence of peace but the silence of exhaustion, of a city catching its breath before it dares to believe it survived.",
    atmosphere: "Smoke rises from the northern wall in slow, weary columns. The bronze-armored warriors have withdrawn — or been driven back — leaving scorch marks on the stone and the smell of hot metal in the air. Athens stands. But the cost is carved into every face you see, the way weather carves stone.",
    textVariants: {
      defiedHera: "You chose to stay. And the siege intensified — exactly as Hera promised, to the letter, as if the blood that followed was a contract she'd already signed.\n\nAres committed everything. His warriors hit the northern wall like a bronze tide — wave after wave, each one harder than the last. The fighting lasted nine hours. You were in the thick of it — not because you had to be, not because it was strategic, but because the soldiers fighting beside you needed to see you there. Needed to know that Zeus's daughter wasn't commanding from a hilltop. She was bleeding in the mud with the rest of them.\n\nThe wall held. Barely. The Athenian defenders, bolstered by your presence and Athena's strategy, broke Ares' assault at the gate. The god of war withdrew — not defeated, but denied. There's a difference, and Ares knows it.\n\nBut the cost. Forty-three defenders dead. The northern quarter in ruins. Families that will never sit together again at a table that no longer exists.\n\nYou did this. By staying, you invited the storm. And the storm took what storms always take.\n\nThe question isn't whether you were right. The question is whether you can carry the weight of being right when right has a body count.",
      consideredLeaving: "You stayed, but the doubt traveled with you through every moment of the battle — a second shadow, whispering Hera's offer in the back of your mind.\n\n*If you had left, these people would be alive.*\n\nAres' assault was brutal but not total — Hera's offer lingered in the air like an unanswered question, and Ares held back just enough to make you wonder if leaving would have been enough. The fighting lasted six hours. You led from behind the lines — directing defenders, calling retreats when sectors were overwhelmed, making the decisions that save lives instead of the ones that win glory.\n\nWhen it was over, the wall held. Twenty-one dead. Better than it could have been. Worse than it had to be.\n\nThe emissary's words echo in the smoke: *The blood that follows...* You'll carry that phrase like your brother's coin. Always. In your pocket. Warm with grief.",
      default: "The battle came at dawn. Ares' forces hit the northern wall with the precision of a god who has been planning sieges since before stone was invented. The fighting was unlike anything you've experienced — not a monster, not a confrontation, but *war*. Organized. Brutal. Relentless. The sound alone was enough to break people.\n\nAthena's strategy held. Your decisions — where to reinforce, when to fall back, who to trust with which gate — shaped the defense the way a hand shapes clay. The wall held. Athens stands.\n\nBut thirty defenders are dead. The northern quarter smolders. A temple to Hephaestus — you think of him, his honest face, his scarred hands — collapsed in the fighting. Children are crying in the streets for parents who aren't coming home.\n\nVictory doesn't feel like the stories said it would. The stories forgot to mention the silence afterward. The stories forgot the smell.",
    },
    choices: [
      {
        text: "Walk through the aftermath. See every face. Remember every cost.",
        statChanges: { Empathy: 2, Wisdom: 1, Courage: 1 },
        setsFlags: { walkedAftermath: true },
        reputationChanges: { commonPeople: 2 },
        feedback: "You walk for three hours. You stop at every stretcher, every grieving family, every soldier staring at nothing with the blank expression of someone whose mind has gone somewhere safer.\n\nYou don't speak unless spoken to. You don't offer comfort you can't back up. No 'it will be okay.' No 'they're in a better place.' You just stand there. You let them see your face and know that the person who made the decisions is the person looking at what the decisions cost.\n\nA woman whose husband died at the northern gate grabs your hand. Her grip is crushing.\n\n\"He believed in you,\" she says.\n\nShe's not angry. That's the part that breaks something in you. Anger would be easier. Anger you could fight.\n\nBy the time you reach the Acropolis again, you are carrying every name. Every face. Every cost.\n\nYou will carry them to Olympus. You will set them down in front of your father and say: *This is what your silence costs.*",
        lesson: "Witnessing the cost of your decisions is not punishment — it's responsibility. Leaders who look away from consequences make the same mistakes again. You will never forget these faces. And that memory — heavy, permanent, specific — will make every future decision better.",
      },
      {
        text: "Find Athena. Debrief. Understand what happens next.",
        statChanges: { Wisdom: 2, Discipline: 1 },
        setsFlags: { debriefedAthena: true },
        feedback: "Athena is at the altar, studying the maps. She's moved pieces — Ares' withdrawal is marked with red tokens pushed to the edge. New positions are drawn. She's already planning for the next thing.\n\n\"He'll come again,\" she says without looking up. \"Unless you end this at the source.\"\n\nShe taps a point above the map — above it literally, her finger pointing at a spot in the air where Olympus would be if maps included the homes of gods.\n\n\"The siege won't stop while the gods disagree. The gods won't agree while you stand between them.\" She looks at you now. Her grey eyes are tired — a goddess, tired, and the tiredness makes her more real than the armor does. \"You know what that means.\"\n\nShe's telling you to go to Olympus. To face the source. To walk into your own family's house and say: *enough.*",
        lesson: "Debriefing after a crisis is how experience becomes wisdom. Athena doesn't celebrate victory — she analyzes it, finds the weak points, plans for what's next. The battle was one event. The war is larger. And the war won't end here.",
      },
      {
        text: "Find Kira. What happened to her during the battle?",
        statChanges: { Cunning: 1, Empathy: 1 },
        setsFlags: { soughtKiraAfterBattle: true },
        feedbackVariants: {
          rivalAllied: "You find her at the eastern gate, sitting against the wall with her back to the stone and her sword across her knees. She's alive. The soldiers near her are alive. She held the eastern gate — alone, for two hours, when reinforcements were pulled north. Ares' daughter, fighting against Ares' army.\n\n\"We did it,\" she says when she sees you. She sounds surprised. Genuinely surprised, the way someone sounds when a plan they didn't quite believe in works.\n\n\"We actually did it.\"\n\nFor the first time since you met her, *rival* feels like the wrong word.",
          rivalEnemy: "You find her at the edge of the city, near where Ares' forces withdrew. She's wounded — a gash across her arm, bandaged badly with someone else's cloth. She fought on Ares' side. When the assault failed, she was left behind.\n\nShe looks at you without hostility. Just exhaustion. The kind that goes deeper than muscle.\n\n\"He promised it would be quick,\" she says. Her voice is flat. \"He lied. Gods always lie.\"\n\nShe doesn't resist when the Athenian soldiers take her weapons. She looks at the sword leaving her hand the way you'd watch a friend walk away.",
          default: "You find her on the walls, watching the smoke rise from the northern quarter. She didn't fight for either side. She watched. She stood on the wall between two armies and chose neither.\n\n\"I couldn't choose,\" she says when she sees you. No shame. No excuse. Just the truth. \"They both offered me power. Neither offered me a reason.\"\n\nShe looks at you. Her dark eyes are steady.\n\n\"You had a reason. That's the difference between us.\"\n\nShe's not wrong. But you're not sure she's right, either. Having a reason and having the right reason aren't always the same thing.",
        },
        lesson: "After a battle, understanding where everyone stands is as important as understanding who won. Kira's position — wherever she ended up — reveals something about the whole conflict. It was never just about Athens. It was about choices.",
      },
      {
        text: "Help the healers. There are wounded who need hands, not generals.",
        statChanges: { Empathy: 2, Discipline: 1 },
        setsFlags: { helpedHealers: true },
        reputationChanges: { commonPeople: 2 },
        feedback: "You spend the day in the makeshift hospital near the agora. The air smells of blood and olive oil and the sharp herb the healers use to stop infection. You bandage wounds — not neatly, you're not a healer, but tightly, which matters more. You carry water. You hold someone's hand while an old woman sets a broken bone with a sound that makes your stomach turn.\n\nYou're covered in other people's blood by midday. It dries on your arms. You keep working.\n\nThe healer — that old woman, who has seen more wars than you've seen years — watches you work. She doesn't say much. She doesn't need to.\n\nAt the end of the day, she puts a hand on your shoulder.\n\n\"Good,\" she says. Just that. *Good.*\n\nFrom a woman who has set a thousand bones and never bothered with praise, that word is worth a crown.",
        lesson: "After leading a battle, choosing to serve the wounded isn't a demotion — it's a completion. Strategy saves cities. Compassion saves the people inside them. Both are necessary. Neither is sufficient alone.",
      },
    ],
  },

  theChoice: {
    id: "ch9_choice",
    title: "The Three Paths",
    image: "⛰️",
    mood: "sacred",
    transitionText: "Night falls on a city that survived. The fires are out. The walls are patched. The dead are counted. Tomorrow, a choice that will define everything you've become and everything you might still be.",
    atmosphere: "The Parthenon at night — broken in places, smoke-stained, but standing. Stars visible through a crack in the roof that wasn't there yesterday. Athena is gone. The maps are gone. You are alone with the biggest decision of your life, and the stars are the only audience.",
    text: "Athens is saved — for now. But Athena was clear: the siege won't end while the gods disagree. And the gods won't agree while you stand between them.\n\nThree paths lie before you. Each one is real. Each one has consequences you can't fully predict. Each one will cost something you can't get back.\n\nThe first: Go to Olympus. Climb the mountain. Face the gods. Confront your father. End this at the source — the divine family that broke the world by breaking itself. The road is dangerous and the outcome is uncertain. But it addresses the root of everything.\n\nThe second: Stay mortal. Renounce your divine heritage. Tell the gods you are not theirs to fight over. Live as a human, age as a human, die as a human. The siege ends because there's nothing divine left to argue about.\n\nThe third: Find another way. Not Olympus, not mortality — something no one has tried. Unite the demigods. Build a bridge between mortal and divine that doesn't require choosing one over the other. A path with no map, no precedent, and no guarantee.\n\nYou sit in the broken Parthenon and think about who you are. Who you've been. Who you want to be.\n\nThe stars turn above you. They've been turning since before the gods were born. They'll turn long after.\n\nWhat you're willing to lose.",
    choices: [
      {
        text: "Olympus. Face the gods. End this the only way it can end — at the top.",
        statChanges: { Courage: 2, Discipline: 1 },
        setsFlags: { choseOlympus: true, ch9PathChosen: "olympus" },
        feedback: "The decision settles over you like armor. Not heavy — fitted. Like something that was always meant to be worn.\n\nOlympus. The mountain of the gods. Your father's home. The home he hid you from, the family he kept you from, the truth he buried so deep you had to cross the world to dig it up.\n\nAthena's voice comes from the empty temple. From the stone itself, maybe. From the wisdom that lives in this place.\n\n\"Good. The mountain has been waiting for you since the day you were born.\"\n\nYou pack at dawn. The road to Olympus starts at the northern edge of Greece — through Thessaly, past Thermopylae, to the mountain that touches the sky. It will take everything you have.\n\nBut you've been building *everything you have* for nine chapters. Every choice. Every sacrifice. Every person you helped and every person you failed. Every name you're carrying.\n\nTime to spend it.",
        lesson: "Choosing to confront the source of a problem — even when the source is more powerful than everything you've faced combined — is the definition of moral courage. You're not going to Olympus to fight. You're going to be heard. That's harder.",
      },
      {
        text: "Stay mortal. Let go of the divine. Be human, fully and completely.",
        statChanges: { Empathy: 2, Wisdom: 2 },
        setsFlags: { choseMortality: true, ch9PathChosen: "mortal" },
        feedback: "You feel it the moment you decide — a loosening. Like a knot untying somewhere deep inside you, in the place where your divine blood lives and hums and reaches for the sky. It doesn't vanish. It quiets. The storms above Athens dim, just slightly — the sky exhaling.\n\nAthena appears. For the first time in your knowledge of her — in any story, in any age — she looks sad.\n\n\"You could change everything,\" she says. \"You have the power to reshape Olympus.\"\n\n\"That's why I'm letting it go,\" you say.\n\nShe nods. The nod carries the weight of a goddess accepting something she wishes were different.\n\n\"Your father will grieve. But he'll understand. He's been afraid of Olympus for longer than you've been alive.\"\n\nMortality. A life measured in decades, not millennia. Love that ends. Friends who age. A body that slows. It's the smallest path.\n\nIt might also be the bravest.",
        lesson: "Choosing to be ordinary when you could be extraordinary is not failure. It can be the most courageous choice there is. Power renounced for the right reasons is more meaningful than power wielded for the wrong ones. And a mortal life, fully lived, is not a lesser life. It's just a shorter one.",
      },
      {
        text: "Neither. Find the third path. Build something new.",
        statChanges: { Wisdom: 2, Cunning: 1, Courage: 1 },
        setsFlags: { choseThirdPath: true, ch9PathChosen: "bridge" },
        feedback: "\"No one has ever done this.\"\n\nThat's the first thing Athena says when you tell her. Not 'you can't.' Not 'it won't work.' Just: *no one has ever done this.*\n\n\"A bridge between mortal and divine. A council, not a hierarchy. Demigods not as weapons or pawns but as translators — people who belong to both worlds and can speak the language of each.\"\n\nShe's quiet for a long time. The owl on her shoulder turns its head. Three hundred and sixty degrees. Looking at everything.\n\n\"It could work,\" she says. \"It's never been tried because it requires something the gods have never had: the willingness to be equal. To sit at a table with mortals and not pretend the table belongs to them.\"\n\nShe looks at you. And for the first time, the look isn't commander-to-soldier. It's person-to-person.\n\n\"You'll need allies. Mortal and divine. You'll need Kira. And you'll need your father to listen — really listen, not the way gods listen, which is just waiting for mortals to stop talking.\"\n\n\"I know,\" you say.\n\n\"Good. The third path is the longest. Start walking.\"",
        lesson: "When given two options that both feel incomplete, creating a third option isn't evasion — it's innovation. The third path has no map because no one has walked it. That's terrifying. It's also the only reason it might work — because everything that's been tried before has failed.",
      },
      {
        text: "I'm not ready to choose yet. I need one more night to think.",
        statChanges: { Wisdom: 1, Discipline: 1 },
        setsFlags: { delayedChoice: true },
        feedback: "You lie back on the cold stone of the Parthenon floor and stare at the stars through the broken roof. The stone is hard against your back. The smoke still stings your eyes. Somewhere in the city, a dog barks. Somewhere else, someone is singing — low, quiet, a lullaby for children who can't sleep because the world shook today.\n\nTomorrow, you'll choose. Tonight, you'll let every lesson, every friendship, every wound, every moment of this impossible journey settle into its proper place — like sediment in a jar of water, finding the bottom, becoming clear.\n\nSomewhere, very far away — or very far above — thunder rolls. Not angry. Patient. The patience of a father who has been waiting since the day he hid his daughter and walked away without looking back.\n\nHe's still waiting. He'll wait as long as you need.\n\nThe choice will come at dawn. But tonight — your last night as the person you've been — you rest.",
        lesson: "Knowing when you're not ready to decide is itself a decision — and often a wise one. Sleep and reflection and the quiet hours before dawn are tools as powerful as any weapon in the forge. The choice will be clearer in the morning. It always is.",
      },
    ],
  },
};

// ── No fork — linear with massive branch consequences ──

export default chapter9Scenes;
