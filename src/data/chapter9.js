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
    transitionText: "You smell the smoke before you see the city. Athens — the crown of Greece — is burning at the edges. Not from mortal fire. From divine disagreement.",
    atmosphere: "The sky above Athens is wrong. Storm clouds on one side, unnatural sunlight on the other. The gods are here, and they are not in agreement.",
    textVariants: {
      rivalAllied: "You and Kira arrive together. The road to Athens is choked with refugees — families carrying what they can, soldiers with hollow eyes. They recognize you. Word of Zeus's daughter has traveled faster than you have.\n\n'She's here,' a soldier whispers. 'Maybe now the gods will listen.'\n\nKira glances at you. 'They're not fighting over Athens,' she says quietly. 'They're fighting over you. Over us. Over what we represent.'\n\nShe's right. This isn't an army at the gates. It's a family argument the size of a city. Ares wants war. Athena wants strategy. Hera wants order — her order. And somewhere above all of it, Zeus is silent.\n\nThe Acropolis stands defiant against the strange sky. Athens is wounded but not broken. Not yet.",
      rivalEnemy: "You arrive alone. The road to Athens is choked with refugees, but they part for you. Your reputation walks ahead like a herald.\n\nAthens is under siege — but not by any mortal army. The sky itself is fractured: storm on one side, burning light on the other. Ares' warriors mass at the northern gate, clad in bronze that glows with divine heat. They aren't conquering. They're provoking.\n\nA scout finds you at the gate. 'The other one is already here,' he says. 'The girl with the dark eyes. She came through the eastern gate. She's... different from you.' He doesn't elaborate.\n\nKira is here. On the other side.",
      default: "The road to Athens should feel like a homecoming. Instead, it feels like walking into a wound.\n\nThe city is under siege — not by armies, but by gods. The sky splits above the Parthenon: Ares' storm-red clouds pressing against Athena's silver light. Mortals huddle in their homes while divine power crackles through the streets like heat lightning.\n\nRefugees recognize you. Soldiers straighten when you pass. A woman grabs your arm: 'Zeus's daughter. Please. Make them stop.'\n\nYou look up at the Acropolis. Athena is waiting. You can feel it.\n\nAnd somewhere in the city, Kira is here too. The same forces that brought you to Athens brought her.",
    },
    choices: [
      {
        text: "Go straight to the Acropolis. Athena is waiting, and every minute counts.",
        statChanges: { Courage: 1, Discipline: 1 },
        setsFlags: { wentToAcropolisFirst: true },
        feedback: "You climb the sacred hill without stopping. The soldiers at the base salute you — actually salute you, like you're someone who matters. The Parthenon gleams above, its columns catching light that doesn't come from the sun.",
        lesson: "When a city is in crisis, going to the center of power isn't ambition — it's responsibility. You're not seizing control. You're answering a call.",
      },
      {
        text: "Find the refugees first. They need help before strategy.",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { helpedRefugeesFirst: true },
        reputationChanges: { commonPeople: 2 },
        feedback: "You spend an hour in the refugee camp outside the walls. Bandaging wounds. Carrying water. Holding a child while her mother sleeps for the first time in days. The people here don't care about divine politics. They care about surviving the night.\n\nWord spreads. Zeus's daughter, in the dirt with the rest of them.",
        lesson: "Leaders who help before they strategize earn something that strategy alone cannot provide: trust. The refugees will remember this. When the battle comes, that memory will matter.",
      },
      {
        text: "Find Kira. Whatever is about to happen, you need to know where she stands.",
        statChanges: { Cunning: 1, Wisdom: 1 },
        setsFlags: { soughtKiraFirst: true },
        feedback: "You track her through the eastern quarter. She's in a tavern, alone, staring at a cup of wine she hasn't touched. When she sees you, something crosses her face — relief? Resignation? Both.\n\n'They offered me a deal,' she says without preamble. 'I assume they'll offer you one too.'",
        lesson: "Understanding your rival's position before committing to your own is strategic wisdom. Kira isn't your enemy by default — she's another piece on the same board. Knowing where she stands changes where you can stand.",
      },
      {
        text: "Survey the walls and gates. Understand the siege before engaging.",
        statChanges: { Wisdom: 1, Discipline: 1, Cunning: 1 },
        setsFlags: { surveyedDefenses: true },
        feedback: "You walk the full circuit of Athens' walls. Northern gate: Ares' forces, bronze-armored and restless. Eastern gate: quiet, but the air shimmers with something unseen. Southern gate: open, refugees streaming in. Western gate: sealed, strange markings burned into the wood.\n\nYou've seen the shape of the siege. Now you can plan.",
        lesson: "Before committing to any course of action in a crisis, understanding the full situation is not hesitation — it's intelligence. Generals who act without reconnaissance lose battles they could have won.",
      },
    ],
  },

  councilAthena: {
    id: "ch9_council",
    title: "The Council of Athena",
    image: "🦉",
    transitionText: "The Parthenon is not a temple today. It's a war room. And the goddess of wisdom is not hiding behind a disguise.",
    atmosphere: "Athena stands in her own temple, armored and unhelmeted. Her grey eyes miss nothing. Maps cover the altar. This is not prayer. This is planning.",
    text: "Athena doesn't introduce herself. She doesn't need to. She's seven feet tall, armored in silver and gold, and her eyes hold the weight of ten thousand years of warfare and wisdom.\n\n'You came,' she says. Not surprised. Not grateful. Just stating a fact, like a general noting a unit's arrival.\n\nThe maps on the altar show Athens and the forces arrayed around it. Ares' warriors at the north. Hera's emissary approaching from the east. Something older and stranger stirring beneath the city.\n\n'Your father won't intervene,' Athena says. 'He's bound by laws even he can't break — laws he made. This city stands or falls on mortal courage, guided by divine wisdom.' She looks at you directly. 'My wisdom. Your courage. That's the offer.'\n\nShe gestures at the maps. 'I need someone to lead the defense. Not because you're Zeus's daughter — because you've proven you can make decisions under pressure. I've been watching.'\n\nShe waits. Athena doesn't rush.",
    choices: [
      {
        text: "Accept the command. If Athena trusts you to lead, you'll lead.",
        statChanges: { Courage: 2, Discipline: 1 },
        setsFlags: { acceptedCommand: true },
        reputationChanges: { gods: 1 },
        feedback: "Athena nods once. 'Good. No false humility. I chose you because you act, not because you're comfortable.' She begins outlining the defense — formations, fallback positions, the three things that must not fall. You listen. You learn. You begin to understand what it means to carry a city on your shoulders.",
        lesson: "Accepting responsibility you didn't seek is different from seeking power you don't deserve. Athena chose you not for your bloodline but for your record. Saying yes when the right person asks is not arrogance — it's answering.",
      },
      {
        text: "Ask what she means by 'guided by divine wisdom.' What's her role in this?",
        statChanges: { Wisdom: 2, Cunning: 1 },
        setsFlags: { questionedAthena: true },
        feedback: "Athena's expression shifts — is that respect? 'I can advise. I can see patterns you can't. I can strengthen your strategy with insight that spans millennia. But I cannot fight for you. The laws of Olympus forbid gods from directly striking at each other's mortal champions.' She pauses. 'Ares is bending those laws. I will not.'",
        lesson: "Understanding the terms of an alliance before accepting it is wisdom, not suspicion. Athena respects the question because it shows you're thinking about what 'guided' actually means. Power with unclear boundaries is dangerous — even divine power.",
      },
      {
        text: "Tell her you'll help, but on one condition: the civilians come first.",
        statChanges: { Empathy: 2, Courage: 1 },
        setsFlags: { demandedCivilianPriority: true },
        reputationChanges: { commonPeople: 1 },
        feedback: "Athena goes very still. Then she does something unexpected: she smiles. 'Your father would have said the same thing. Before he became king.' She rearranges the maps, pulling civilian evacuation routes to the center. 'Protecting the people IS the strategy. A city without its people is just stone.'",
        lesson: "Setting conditions on how you'll help isn't weakness — it's having values. Athena, goddess of strategic warfare, agreed because protecting civilians IS good strategy. Morality and effectiveness are not opposites.",
      },
      {
        text: "Ask about Kira. What role does the rival play in this siege?",
        statChanges: { Wisdom: 1, Cunning: 1 },
        setsFlags: { askedAthenaAboutKira: true },
        feedback: "Athena's expression hardens. 'The other demigod. Ares has made her the same offer he made every ambitious half-blood: power in exchange for service. I don't know if she accepted.' She meets your eyes. 'Do you?'\n\nThe question isn't rhetorical. Athena genuinely doesn't know. That's terrifying. If the goddess of wisdom can't predict Kira, what chance do you have?",
        lesson: "Even gods have blind spots. Athena's uncertainty about Kira isn't weakness — it's honesty. Leaders who pretend to know everything are more dangerous than those who admit what they don't know.",
      },
    ],
  },

  herasEmissary: {
    id: "ch9_emissary",
    title: "Hera's Offer",
    image: "👑",
    transitionText: "The emissary arrives at dusk. Not through any gate. She simply appears in the agora, dressed in white, carrying no weapon. The soldiers let her pass. Something about her makes it impossible to raise a sword.",
    atmosphere: "The air goes cold and still. The sounds of the siege fall silent. Even Ares' thunder pauses. When Hera speaks — even through a messenger — the world listens.",
    text: "The emissary is a woman who might be forty or four thousand. Her voice carries the authority of Olympus itself.\n\n'I speak for Hera, Queen of the Gods. She has watched your journey with interest. She has a proposal.'\n\nThe words drop like stones into deep water.\n\n'Leave Athens. Walk away from this siege, from Athena's war, from this city. Take nothing. Ask nothing. Simply leave.'\n\nShe pauses. The silence is absolute.\n\n'If you leave, Hera will end the siege. Ares will withdraw. Athens will stand. No one else needs to die. The cost is only this: you walk away from the fight. You prove that you are not your father — that Zeus's daughter can choose peace over pride.'\n\nAnother pause.\n\n'If you stay... the siege intensifies. Ares will commit fully. People will die who didn't have to die. And Hera will not intervene to stop it.'\n\nShe folds her hands. 'You have until dawn.'",
    choices: [
      {
        text: "I need to think about this. This isn't a decision you make in a moment.",
        statChanges: { Wisdom: 2, Discipline: 1 },
        setsFlags: { consideredHeraOffer: true },
        feedback: "The emissary nods, as if this is the first answer she's heard in a thousand years that didn't disappoint her. 'Wisdom,' she says. 'Your father never had it. Perhaps you do.'\n\nShe vanishes as quietly as she came. You're left in the agora with a choice that will define everything that comes after.",
        lesson: "Refusing to make a life-altering decision under pressure is not indecision — it's discipline. Hera's offer was designed to force an immediate reaction. Taking time to think is the first act of genuine wisdom.",
      },
      {
        text: "No. I won't be blackmailed. Athens doesn't fall because Hera says so.",
        statChanges: { Courage: 3 },
        setsFlags: { rejectedHeraOffer: true, defiedHera: true },
        reputationChanges: { gods: -1 },
        feedback: "The emissary's eyes widen — just slightly. 'You refuse the Queen of the Gods?' Her voice is perfectly neutral. 'Then the siege continues. And the blood that follows is on your hands.'\n\nShe vanishes. The sounds of war return, louder than before. Ares' thunder rolls across the sky.\n\nYou feel the weight of what you just did. But you also feel something else: certainty.",
        lesson: "Defying a god has consequences. Real ones. But so does accepting a deal that saves one city by abandoning your principles. You chose the harder path. Now you have to earn it.",
      },
      {
        text: "If I leave and Athens is saved... isn't that the right choice?",
        statChanges: { Empathy: 2, Wisdom: 1 },
        setsFlags: { consideredLeaving: true },
        feedback: "The emissary tilts her head. 'That is the question, isn't it? One life — yours, spent elsewhere — against the thousands who live here.' She almost sounds sympathetic. 'Hera believes that true leadership is knowing when to step aside. Not every problem needs a hero. Some problems need an absence.'\n\nThe logic is sound. That's what makes it so dangerous.",
        lesson: "Hera's argument has real weight. Sometimes the heroic thing IS to step aside. The question you have to answer is whether this is one of those times — or whether Hera is using reasonable logic to achieve an unreasonable goal. Good arguments can serve bad purposes.",
      },
      {
        text: "What was offered to Kira? The same deal?",
        statChanges: { Cunning: 2 },
        setsFlags: { askedAboutKiraDeal: true },
        feedback: "The emissary pauses — the first crack in her composure. 'The other daughter of Olympus was offered... a different arrangement. By a different god.' She recovers. 'What concerns you is your choice. Not hers.'\n\nBut you saw the hesitation. Kira wasn't offered peace. She was offered something else. And whoever offered it wasn't Hera.",
        lesson: "Asking the right question can reveal more than the answer itself. The emissary's hesitation told you three things: Kira got a different deal, it came from a different god, and Hera doesn't fully control what's happening here. Information like that changes everything.",
      },
    ],
  },

  theBattle: {
    id: "ch9_battle",
    title: "After the Storm",
    image: "⚔️",
    transitionText: "The battle is over. The silence that follows is worse than the noise that preceded it.",
    atmosphere: "Smoke rises from the northern wall. The bronze-armored warriors have withdrawn — or been driven back. Athens stands. But the cost is carved into every face you see.",
    textVariants: {
      defiedHera: "You chose to stay. And the siege intensified, exactly as Hera promised.\n\nAres committed everything. His warriors hit the northern wall like a bronze tide. The fighting lasted nine hours. You were in the thick of it — not because you had to be, but because the soldiers fighting beside you needed to see you there.\n\nThe wall held. Barely. The Athenian defenders, bolstered by your presence and Athena's strategy, broke Ares' assault at the gate. The god of war withdrew — not defeated, but denied. There's a difference, and Ares knows it.\n\nBut the cost. Forty-three defenders dead. The northern quarter in ruins. Families who will never be whole again.\n\nYou did this. By staying, you invited the storm. And the storm took what storms always take.",
      consideredLeaving: "You stayed, but the doubt traveled with you through every moment of the battle.\n\nAres' assault was brutal but not total — Hera's offer lingered in the air like an unanswered question. The fighting lasted six hours. You led from behind the lines, directing defenders, calling retreats when sectors were overwhelmed.\n\nWhen it was over, the wall held. Twenty-one dead. Better than it could have been. Worse than it had to be.\n\nThe emissary's words echo: 'The blood that follows...' You'll carry that.",
      default: "The battle came at dawn. Ares' forces hit the northern wall. The fighting was unlike anything you've experienced — not a monster, not a confrontation, but war. Organized, brutal, and relentless.\n\nAthena's strategy held. Your decisions — where to reinforce, when to fall back, who to trust with which gate — shaped the defense. The wall held. Athens stands.\n\nBut thirty defenders are dead. The northern quarter smolders. A temple to Hephaestus collapsed. Children are crying in the streets.\n\nVictory doesn't feel like the stories said it would.",
    },
    choices: [
      {
        text: "Walk through the aftermath. See every face. Remember every cost.",
        statChanges: { Empathy: 2, Wisdom: 1, Courage: 1 },
        setsFlags: { walkedAftermath: true },
        reputationChanges: { commonPeople: 2 },
        feedback: "You walk for three hours. You stop at every stretcher, every grieving family, every soldier staring at nothing. You don't speak unless spoken to. You don't offer comfort you can't back up.\n\nA woman whose husband died at the northern gate grabs your hand. 'He believed in you,' she says. She's not angry. That's worse.\n\nBy the time you reach the Acropolis again, you are carrying every name.",
        lesson: "Witnessing the cost of your decisions is not punishment — it's responsibility. Leaders who look away from consequences make the same mistakes twice. You will never forget these faces, and that memory will make every future decision better.",
      },
      {
        text: "Find Athena. Debrief. Understand what happens next.",
        statChanges: { Wisdom: 2, Discipline: 1 },
        setsFlags: { debriefedAthena: true },
        feedback: "Athena is at the altar, studying the maps. She's moved pieces — Ares' withdrawal is marked. New positions are drawn.\n\n'He'll come again,' she says. 'Unless you end this at the source.' She taps a point above the map — Olympus. 'The siege won't stop while the gods disagree. You know what that means.'\n\nShe's telling you to go to Olympus. To face the source. To confront your own family.",
        lesson: "Debriefing after a crisis is how you turn experience into wisdom. Athena doesn't celebrate victory — she analyzes it, finds the weak points, and prepares for what's next. The battle was one event. The war is larger.",
      },
      {
        text: "Find Kira. What happened to her during the battle?",
        statChanges: { Cunning: 1, Empathy: 1 },
        setsFlags: { soughtKiraAfterBattle: true },
        feedbackVariants: {
          rivalAllied: "You find her at the eastern gate, sitting against the wall. Her sword is still in her hand. She's alive. The soldiers near her are alive. She held the eastern gate alone when reinforcements were pulled to the north.\n\n'We did it,' she says. She sounds surprised. 'We actually did it.'\n\nFor the first time, rival feels like the wrong word.",
          rivalEnemy: "You find her at the edge of the city, near where Ares' forces withdrew. She's wounded — not badly, but enough. She fought on Ares' side. When the assault failed, she was left behind.\n\nShe looks at you without hostility. Just exhaustion. 'He promised it would be quick,' she says. 'He lied. Gods always lie.'\n\nShe doesn't resist when the Athenian soldiers take her weapons.",
          default: "You find her on the walls, watching the smoke. She didn't fight for either side. She watched. That tells you something.\n\n'I couldn't choose,' she says when she sees you. 'They both offered me power, and neither offered me a reason.' She looks at you. 'You had a reason. That's the difference.'\n\nShe's not wrong.",
        },
        lesson: "After a battle, understanding where everyone stands is as important as understanding who won. Kira's position reveals something about the entire conflict — it was never truly about Athens. It was about choices.",
      },
      {
        text: "Help the healers. There are wounded who need hands, not generals.",
        statChanges: { Empathy: 2, Discipline: 1 },
        setsFlags: { helpedHealers: true },
        reputationChanges: { commonPeople: 2 },
        feedback: "You spend the day in the makeshift hospital near the agora. Bandaging wounds. Carrying water. Holding someone's hand while a healer sets a broken bone. You're covered in other people's blood by midday.\n\nA healer — an old woman who has seen more wars than you've seen years — watches you work. 'Good,' she says. Just that. Good.",
        lesson: "After leading a battle, choosing to serve the wounded is not a demotion — it's a completion. Strategy saves cities. Compassion saves the people in them. Both are necessary. Neither is sufficient alone.",
      },
    ],
  },

  theChoice: {
    id: "ch9_choice",
    title: "The Three Paths",
    image: "⛰️",
    transitionText: "Night falls on a city that survived. Tomorrow, a choice that will define everything.",
    atmosphere: "The Parthenon at night. Stars visible through the broken roof. Athena is gone. You are alone with the biggest decision of your life.",
    text: "Athens is saved — for now. But Athena was clear: the siege won't end while the gods disagree, and the gods won't agree while you stand between them.\n\nThree paths lie before you. Each one is real. Each one has consequences you can't fully predict.\n\nThe first: Go to Olympus. Now. Climb the mountain, face the gods, confront your father. End this at the source. The road is dangerous and the outcome uncertain, but it addresses the root of everything — the divine family that broke the world by breaking itself.\n\nThe second: Stay mortal. Renounce your divine heritage. Tell the gods you are not theirs to fight over. Live as a human, age as a human, die as a human. The siege ends because there's nothing divine left to fight about.\n\nThe third: Find another way. Not Olympus, not mortality — something no one has tried. Unite the demigods. Build a bridge between mortal and divine that doesn't require choosing one over the other. It's the path with no map.\n\nYou sit in the Parthenon and think about who you are. Who you want to be. What you're willing to lose.",
    choices: [
      {
        text: "Olympus. Face the gods. End this the only way it can end — at the top.",
        statChanges: { Courage: 2, Discipline: 1 },
        setsFlags: { choseOlympus: true, ch9PathChosen: "olympus" },
        feedback: "The decision settles over you like armor. Olympus. The mountain of the gods. Your father's home — the home he hid you from.\n\nAthena's voice comes from nowhere: 'Good. The mountain has been waiting for you since the day you were born.'\n\nYou pack at dawn. The road to Olympus starts at the northern edge of Greece, through Thessaly, past Thermopylae, to the mountain that touches the sky. It will take everything you have.\n\nBut you've been building 'everything you have' for nine chapters. Time to spend it.",
        lesson: "Choosing to confront the source of a problem — even when the source is more powerful than you — is the definition of moral courage. You're not going to Olympus to fight. You're going to be heard. That's harder.",
      },
      {
        text: "Stay mortal. Let go of the divine. Be human, fully and completely.",
        statChanges: { Empathy: 2, Wisdom: 2 },
        setsFlags: { choseMortality: true, ch9PathChosen: "mortal" },
        feedback: "You feel it the moment you decide — a loosening, like a knot untying somewhere deep inside you. The divine blood doesn't vanish, but it quiets. The storms in the sky dim, just slightly.\n\nAthena appears. For the first time, she looks... sad? 'You could change everything,' she says. 'You have the power.'\n\n'That's why I'm letting it go,' you say.\n\nShe nods. 'Your father will grieve. But he'll understand. He's been afraid of Olympus for longer than you've been alive.'\n\nMortality. A life measured in decades, not millennia. It's the smallest path and the bravest.",
        lesson: "Choosing to be ordinary when you could be extraordinary is not failure — it can be the most courageous choice of all. Power renounced for the right reasons is more meaningful than power wielded for the wrong ones.",
      },
      {
        text: "Neither. Find the third path. Build something new.",
        statChanges: { Wisdom: 2, Cunning: 1, Courage: 1 },
        setsFlags: { choseThirdPath: true, ch9PathChosen: "bridge" },
        feedback: "No one has ever done this. That's the first thing Athena says when you tell her.\n\n'A bridge between mortal and divine. A council, not a hierarchy. Demigods not as weapons but as translators.' She's quiet for a long time. 'It could work. It's never been tried because it requires something the gods have never had: the willingness to be equal.'\n\nShe looks at you with something that might be hope. 'You'll need allies. Mortal and divine. You'll need Kira. And you'll need your father to listen.'\n\n'I know,' you say.\n\n'Good. The third path is the longest. Start walking.'",
        lesson: "When given two options that both feel incomplete, creating a third option is not evasion — it's innovation. The third path has no map because no one has walked it yet. That's terrifying and necessary.",
      },
      {
        text: "I'm not ready to choose yet. I need one more night to think.",
        statChanges: { Wisdom: 1, Discipline: 1 },
        setsFlags: { delayedChoice: true },
        feedback: "You lie back on the cold stone of the Parthenon and stare at the stars through the broken roof. Tomorrow, you'll choose. Tonight, you'll let every lesson, every friendship, every wound, every moment of this journey settle into its proper place.\n\nSomewhere, very far away, thunder rolls. Not angry. Patient.\n\nYour father is waiting. He's been waiting since the day he hid you. The choice will come. But tonight, you rest.",
        lesson: "Knowing when you're not ready to decide is itself a decision — and often a wise one. Sleep, reflection, and time are tools as powerful as any weapon. The choice will be clearer at dawn.",
      },
    ],
  },
};

// ── No fork — linear with massive branch consequences ──

export default chapter9Scenes;
