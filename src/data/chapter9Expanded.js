/**
 * Chapter 9 Expanded Data — "The Siege of Athens"
 * Prophecy, Encounter (Battle of Athens — BIGGEST combat), Exploration (Athens sites),
 * Dialogue Duel (Hera's Emissary), Memory Echo (Zeus speaks), Sacrifice (multiple),
 * Dream/Camp, Ticker
 */

// ── Prophecy Pool ──
export const ch9ProphecyPool = [
  {
    id: "ch9_siege",
    text: "The city of wisdom will burn unless the daughter of storms remembers what she learned in the dust.",
    reveal: "Athens survived because you carried every lesson from every chapter into the siege. The dust was Delphi, the road, the strait, the garden, the forge — every place that taught you something.",
    chapters: [9],
  },
  {
    id: "ch9_destiny",
    text: "Three roads from one mountain. Only one leads home. The other two lead somewhere better.",
    reveal: "Olympus, mortality, the third path — none of them are wrong. 'Home' isn't a place. It's a state of knowing who you are. All three paths lead there, by different routes.",
    chapters: [9],
  },
  {
    id: "ch9_blood",
    text: "The blood of gods and the blood of mortals will mix on Athenian stone. What grows from it will change Olympus.",
    reveal: "The battle wasn't just violence — it was a planting. Divine and mortal fighting side by side created something neither world had seen: proof that they could stand together. What grows from that proof will reshape everything.",
    chapters: [9],
  },
];

// ── Major Encounter: The Battle of Athens (DC 16, 5 rounds — BIGGEST combat) ──
export const ch9EncounterBattle = {
  title: "The Battle of Athens",
  enemyName: "Ares' Bronze Vanguard",
  image: "⚔️",
  atmosphere: "The northern gate shudders — bronze hinges screaming as something enormous hits from outside. Then it buckles. Bronze-armored warriors pour through the breach like liquid metal — not mortals, not fully divine, something between. Ares' chosen. Behind them, visible through the smoke, the god of war himself watches from a throne made of spears driven into the earth. The sky bleeds red.\n\nThis is the battle. The biggest. The one that decides whether Athens stands or becomes a story people tell about what happens when gods disagree.",
  baseDC: 16,
  woundSource: "ares_vanguard",
  choices: [
    {
      prompt: "First wave. Bronze shields lock into a formation no mortal army uses. The defenders are already falling back. The gate is breached.",
      timer: 12,
      options: [
        { text: "Rally the defenders! Stand at the front. Hold the line!", stat: "Courage", statChanges: { Courage: 1 } },
        { text: "Direct reinforcements to the weak point. Command from where you can see.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
        { text: "Hit their flank while they're focused on the gate. Surprise them.", stat: "Cunning", statChanges: { Cunning: 1 } },
      ],
    },
    {
      prompt: "Ares' warriors reform. Tighter. Faster. They're adapting to your tactics. The second wave is smarter than the first.",
      timer: 15,
      options: [
        { text: "Adapt back. Change the formation. Be unpredictable.", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Hold. Don't react. Let them waste energy on a wall that won't move.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Inspire the line. Shout the names of the fallen. Give them a reason.", stat: "Empathy", statChanges: { Empathy: 1 } },
      ],
    },
    {
      prompt: "The eastern gate erupts. A second wave — flanking. The defenders can't hold both walls. You're being split.",
      timer: 15,
      options: [
        { text: "Split forces. Trust the eastern commander. Hold the north yourself.", stat: "Wisdom", statChanges: { Wisdom: 1 } },
        { text: "Collapse the eastern tunnel. Sacrifice the gate to save the city.", stat: "Discipline", statChanges: { Discipline: 1 } },
        { text: "Send word to everyone — Kira, civilians, anyone. All hands.", stat: "Empathy", statChanges: { Empathy: 1 } },
      ],
    },
    {
      prompt: "Ares himself steps forward. Not to fight — to speak. His voice shakes the stones. 'Surrender, niece. This doesn't have to end in blood.' The defenders hesitate.",
      timer: 12,
      options: [
        { text: "Answer him. Loudly. Let every defender hear your refusal.", stat: "Courage", statChanges: { Courage: 2 } },
        { text: "Ignore him. Turn to the soldiers. 'He's afraid. That's why he's talking.'", stat: "Cunning", statChanges: { Cunning: 1 } },
        { text: "Silence. Hold the line. Actions answer louder than gods.", stat: "Discipline", statChanges: { Discipline: 1 } },
      ],
    },
    {
      prompt: "Final push. Everything Ares has left — one massive charge at the weakened gate. The defenders are exhausted. You're exhausted. This is the last stand.",
      timer: 8,
      options: [
        { text: "Lead the countercharge. Meet them at the breach. Head-on.", stat: "Courage", statChanges: { Courage: 2 } },
        { text: "Spring the trap — oil, debris, fire. Make the gate a killing ground.", stat: "Cunning", statChanges: { Cunning: 2 } },
        { text: "Hold. Just hold. Lock shields. Endure. Discipline wins wars.", stat: "Discipline", statChanges: { Discipline: 2 } },
        { text: "Call on Athena's blessing. You've earned it. Let wisdom guide the end.", stat: "Wisdom", statChanges: { Wisdom: 2 } },
        { text: "Stand at the weakest point. Be where you're needed most.", stat: "Empathy", statChanges: { Empathy: 2 } },
      ],
    },
  ],
  outcomes: {
    crit: {
      text: "The line holds. More than holds — it *breaks* Ares' charge the way a cliff breaks a wave. The bronze warriors falter, stumble, and for one impossible moment the tide reverses. They retreat. Not in order — in shock.\n\nYou stand at the gate. Blood on your hands — some of it yours, most of it not. Fire in your eyes that isn't metaphorical. Something in your divine blood has woken fully, and the light that pours from you is visible from every rooftop in Athens.\n\nAres sees it. From his throne of spears, across the smoking field, the god of war looks at a nine-year-old standing in the breach of a broken gate — and flinches.\n\n\"You fight like Zeus,\" he says. It's not a compliment. It's a warning. And underneath the warning, something quieter: respect.\n\nHe withdraws. The sky clears — slowly, the red draining like blood from water. Athens erupts in exhausted, weeping cheers.\n\nYou don't cheer. You know what this cost. Every name. Every face. You're carrying all of them.\n\nBut you also know what you just did. You held a city against a god. And the god blinked first.",
      statChanges: { Courage: 2, Discipline: 1 },
      reputation: { commonPeople: 3, gods: 2 },
      flags: { wonBattleOfAthens: true, impressedAres: true, battleCritical: true },
    },
    success: {
      text: "The gate holds. Ares' forces break against it — not all at once but in pieces, squad by squad, the bronze armor losing its divine shine as the god's will wavers. They fall back through the smoke, leaving their dead on Athenian stone.\n\nAthens stands. You stood with it.\n\nAres watches from the hills as his army retreats. He doesn't flee. He *withdraws* — deliberate, controlled, the god of war conducting his own retreat with the precision of a craftsman putting away his tools.\n\n\"Next time,\" his voice echoes across the field. There will be a next time.\n\nBut not today. Today, Athens survived. Today, a girl who walked out of the ashes of a house with a blue door held a city together with her choices.",
      statChanges: { Courage: 1, Discipline: 1 },
      reputation: { commonPeople: 2, gods: 1 },
      flags: { wonBattleOfAthens: true },
    },
    partial: {
      text: "The gate holds — barely. The northern quarter is lost, the wall cracked in three places, and the cost in lives is staggering. But the inner city stands. The Acropolis stands. The people huddled in the southern shelters — the ones you evacuated, if you did — are alive.\n\nAres withdraws. Not because he was defeated — because the cost of continuing exceeded the prize. A god's calculation: is this city worth more soldiers? The answer, today, was no.\n\nYou're wounded. A cut across your ribs from a bronze blade that shouldn't have gotten that close. Not fatal. Not nothing. Enough to know — in your body, not just your mind — that you are mortal. That divine blood doesn't make you invulnerable. It just makes the stakes higher.\n\nAthens survived. You're not sure you won.",
      statChanges: {},
      reputation: { commonPeople: 1 },
      flags: { survivedBattleOfAthens: true, woundedInBattle: true },
    },
    fail: {
      text: "The gate breaks. For one terrible hour, Ares' forces surge into the northern quarter — bronze and fire and the systematic destruction of everything in their path. The fighting is street by street, house by house, the kind of combat that has no room for strategy. Just survival.\n\nYou're overwhelmed. Knocked to the ground. Dragged to safety by soldiers who pay for that kindness with their bodies. You try to stand. A bronze fist drives you back down.\n\nAthena intervenes. Directly. Bending the laws she swore to follow, stepping onto the field in full divine radiance, pulling the city back from the edge with a display of power that will earn her consequences on Olympus.\n\nAres is forced to withdraw — not by military defeat but by divine mandate. The letter of the law, invoked by a goddess who knows every letter.\n\nAthens stands. But not because of you.\n\nThe defenders don't blame you. The soldiers who dragged you to safety don't blame you. That makes it worse. So much worse.\n\nYou failed. You know it. Athena knows it. And somewhere on the smoking field, Ares is smiling. Because he didn't need to win. He needed you to lose.",
      statChanges: { Courage: -1 },
      reputation: { commonPeople: -1 },
      flags: { survivedBattleOfAthens: true, battleFailed: true, athenaIntervened: true },
    },
  },
};

// ── Exploration Nodes (Athens — pick 2 of 4) ──
export const ch9ExplorationNodes = {
  title: "Preparing for the Siege",
  description: "Athens has hours before the battle begins. The city needs everything — prayers, plans, walls, and allies. Four places call to you. Time allows only two. Choose where to invest the last hours of peace.",
  picks: 2,
  nodes: [
    {
      id: "acropolis_prayer",
      name: "The Acropolis",
      icon: "🏛️",
      hint: "The ancient altars. Pray. Listen. Seek the echoes of heroes who knelt here before you.",
      type: "scene",
      content: {
        text: "The Acropolis at twilight. The Parthenon columns cast long shadows across stone that has been walked on by every hero, every general, every frightened citizen who ever climbed this hill looking for something they couldn't name.\n\nYou kneel at the altar of Athena. Not to pray for victory — you're past that. You pray for clarity. For the right decisions at the right moments. For the strength to carry whatever comes.\n\nThe stone hums beneath your knees. Warm. Not from the sun — the sun is setting. From something else. The altar knows your blood.\n\nA whisper rises from the stone — not a voice, an impression. The feeling of a thousand knees pressing this same spot. Theseus knelt here. Perseus. Heracles. They were all afraid.\n\nThey all stood up anyway.",
        statChanges: { Wisdom: 1, Courage: 1 },
        feedback: "The prayer didn't give you answers. It gave you something better: perspective. You are part of a chain of heroes stretching back to the dawn of the world — linked to them not by blood (though that too) but by the act of kneeling in the same place and asking for the same thing: the strength to do what's right when what's right is terrifying.\n\nThe altar's warmth stays with you as you descend. Like a hand on your shoulder. Like someone saying: *you're not the first. You won't be the last. But you're here now, and that's what matters.*",
        lesson: "Quiet reflection before a crisis isn't weakness — it's calibration. You aligned yourself with the best parts of your heritage. Not the divine part. The human part — the part that kneels, that asks, that stands up afraid and walks toward the thing anyway.",
        setsFlags: { prayedAtAcropolis: true },
      },
    },
    {
      id: "agora_evacuation",
      name: "The Agora",
      icon: "🏪",
      hint: "The marketplace is chaos. Civilians need organizing, evacuating. Someone needs to stand in the center of the panic and give it a shape.",
      type: "scene",
      content: {
        text: "The agora is pandemonium. Merchants throwing goods onto carts. Families arguing about which direction to run. Children crying. Old people standing still, too overwhelmed to move. No one is in charge because no one believes being in charge will help.\n\nYou step into the center of the crowd.\n\n\"Listen!\"\n\nYour voice carries further than it should — something in your blood amplifies it, lifts it over the noise, drops it into every ear like a stone into still water.\n\n\"Every family with children — southern quarter. Now. Merchants, load your carts and follow them. If you can carry a weapon and you're willing to stand — stay.\"\n\nThe crowd goes still. A breath. Another.\n\nThen they move. Not in panic. In *order*. Directed. Purposeful. Families heading south with children on their hips. Merchants forming a line of carts. And the volunteers — fourteen, then eighteen, then twenty-two — picking up weapons they've never held, staying because someone told them it mattered.\n\nSixty-three families evacuated. Twenty-two volunteers. You gave them structure. They gave themselves courage.",
        statChanges: { Empathy: 2, Discipline: 1 },
        reputationChanges: { commonPeople: 2 },
        feedback: "The agora empties in under an hour. Children who were screaming are now sleeping in the southern shelters, held by parents who are shaking but organized. The volunteers are drilling with borrowed spears — badly, but willingly.\n\nYou built order from chaos with nothing but your voice and the willingness to stand in the center of the storm while everyone else wanted to run.\n\nThat's not a divine power. That's a human one. It just happened to be amplified by thunder.",
        lesson: "Evacuation is not retreat — it's the protection of what matters most. And the volunteers who stayed to fight did so because they saw you handling the evacuation first. People fight better when they know their families are safe. You understood that. Most generals don't.",
        setsFlags: { evacuatedAgora: true },
      },
    },
    {
      id: "the_walls",
      name: "The Walls",
      icon: "🧱",
      hint: "Fortify the defenses. Stone, sweat, labor. Every brick placed now saves a life later.",
      type: "scene",
      content: {
        text: "The walls of Athens were built to withstand mortal armies. They were not built to withstand gods. But you can reinforce them — and the difference between a wall that holds for one hour and a wall that holds for nine might be the difference between survival and a story told about what used to stand here.\n\nYou work alongside the soldiers. Hauling stone. Digging trenches that fill with grit and sweat. Positioning barricades at the gates. The labor is brutal — your arms scream, your hands crack and bleed, the stone is heavy in a way that defies its size.\n\nA mason — sixty years old, arms like oak branches — shows you how to stack stones so they lock under impact instead of crumbling. A veteran — missing two fingers on his left hand — shows you where to place oil reservoirs for the fire traps.\n\nBy nightfall, the northern wall has three new defensive layers, two oil traps, and a collapsible tunnel that can seal the gate if it's breached.\n\nYour hands are destroyed. The wall is not.",
        statChanges: { Discipline: 2, Courage: 1 },
        feedback: "The soldiers who worked beside you don't call you 'demigod' or 'Zeus's daughter' or 'hero.' They call you by your name. You earned that by bleeding alongside them, by lifting the same stones, by learning from a sixty-year-old mason who knows more about walls than any god.\n\nThe wall is stronger because you were here. So are the people behind it.",
        lesson: "Fortification is discipline made physical. Every stone placed, every trench dug, every trap set is a decision to endure rather than retreat. The wall doesn't care about your bloodline. It cares about whether you showed up to build it.",
        setsFlags: { fortifiedWalls: true },
      },
    },
    {
      id: "underground",
      name: "The Underground",
      icon: "🕳️",
      hint: "Beneath Athens, something older than the city stirs. The dead of Athens remember who they were. If your reputation reaches deep enough, they might remember you too.",
      type: "scene",
      content: {
        text: "Beneath the city, tunnels wind into darkness. The old Athenians knew about them — passages to the Underworld, they said. Not to Hades himself, but to the border regions — the place where the dead and the living overlap, where memory and earth are the same thing.\n\nYou descend. The air grows cold and heavy — the smell of deep stone and old water and something that isn't decay but is related to it. The smell of time.\n\nAt the bottom of the deepest tunnel, a figure waits. Neither alive nor dead. A shade, but aware — more solid than the shades of Asphodel, held together by something stronger than memory. By *identity*. By refusing to fade.\n\n\"Zeus's daughter,\" the shade says. Its voice is the sound of stone remembering it was once a mountain. \"We felt you above. The dead of Athens — every soldier who ever fell defending this city, every mother who died in a siege, every child who didn't make it to the shelters — they stir.\"\n\nThe shade extends a hand. The cold radiates from it like heat from a forge.\n\n\"We can hold one gate. For one hour. The dead cannot be killed twice.\"\n\nA pause.\n\n\"Will you accept our aid?\"",
        statChanges: { Wisdom: 1, Cunning: 1 },
        worldStateChanges: { underworldStirring: 2 },
        feedback: "You clasp the shade's hand. It's cold as winter stone — cold enough to burn — but the grip is stronger than any living hand you've held.\n\n\"One gate,\" you agree. \"One hour. The eastern gate.\"\n\nThe shade nods. Behind it, in the dark, you see them — hundreds of shades, thousands, the accumulated dead of a city that has been defending itself for millennia. They don't speak. They don't need to. They straighten. They form ranks.\n\n\"At dawn,\" the shade says. \"The dead of Athens will stand where the living cannot.\"\n\nA pause. The cold intensifies.\n\n\"Remember us. When you reach Olympus. Remember what we paid.\"\n\nYou climb back to the surface carrying an alliance no living general has ever held. The dead of Athens will fight for you — not because of your blood, but because of what you did with it.",
        lesson: "Help comes from places you can't predict when you've earned a reputation that extends beyond the living world. The dead of Athens chose to stand with you — not because of your father, but because of your choices. Reputation is currency that transcends death.",
        setsFlags: { underworldAlliance: true },
        condition: { minReputation: { commonPeople: 3 } },
      },
    },
  ],
};

// ── Dialogue Duel: Hera's Emissary ──
export const ch9DialogueDuel = {
  title: "The Queen's Terms",
  npcName: "Iris",
  npcTitle: "Hera's Emissary",
  baseResolve: 14,
  maxRounds: 4,
  resistances: ["Deflect"],
  vulnerabilities: ["Endure"],
  rounds: [
    {
      npcLine: "Iris regards you with eyes that shift color — grey to green to gold, like oil on water, like a sky that can't decide whether to storm or clear.\n\n\"You have fought well,\" she says. Her voice carries Hera's authority the way a river carries a mountain's weight — not the source, but the delivery system.\n\n\"Hera acknowledges this. But fighting well and fighting wisely are not the same thing.\"\n\nShe tilts her head. The gesture is divine — too precise, too deliberate, a movement calculated to convey exactly the right amount of respect.\n\n\"Tell me. What do you think you're defending?\"",
      options: {
        Assert: { text: "Athens. Its people. Their right to live without divine interference.", stat: "Courage", dc: 14 },
        Reason: { text: "Not just Athens. The principle that mortals deserve self-determination.", stat: "Wisdom", dc: 12 },
        Empathize: { text: "The people I've watched suffer because gods can't agree about anything.", stat: "Empathy", dc: 13 },
        Deflect: { text: "What does Hera think I'm defending? That might be more interesting.", stat: "Cunning", dc: 16 },
        Endure: { text: "I don't need to justify my choices to Olympus. I made them. I stand by them.", stat: "Discipline", dc: 11 },
      },
    },
    {
      npcLine: "Iris's expression softens — or performs softening, which with a divine messenger is the same thing.\n\n\"Your father hid you,\" she says. The words are gentle. Surgical. \"He hid you because he was afraid of what you might become. Not afraid of you — afraid *for* you.\"\n\nA pause. The colors in her eyes settle on grey — Athena's grey, you realize, not Hera's.\n\n\"Do you understand the difference?\"",
      options: {
        Assert: { text: "I understand it. And I'm here anyway. Fear doesn't get to make my decisions.", stat: "Courage", dc: 15 },
        Reason: { text: "Being hidden to be protected is still being hidden. The intent doesn't change the result.", stat: "Wisdom", dc: 12 },
        Empathize: { text: "I believe he loved me. I also believe love doesn't excuse control.", stat: "Empathy", dc: 11 },
        Deflect: { text: "This isn't about my father. This is about Hera's offer. Stay on subject.", stat: "Cunning", dc: 16 },
        Endure: { text: "I've carried that knowledge for a long time now. It doesn't break me.", stat: "Discipline", dc: 10 },
      },
    },
    {
      npcLine: "\"Hera offers this.\" Iris's voice changes — less messenger, more vessel. Hera's own words, delivered through a borrowed mouth.\n\n\"Come to Olympus. Not as a warrior — as a peacemaker. She will guarantee your safety. Your father will hear you. The wars end.\"\n\nA pause.\n\n\"But you come alone. No army. No Athena. No allies. Just you and the truth you carry.\"\n\nIris's eyes are Hera's now — deep, ancient, the eyes of a queen who has been queen longer than most civilizations have existed.\n\n\"She asks: is peace worth your pride?\"",
      options: {
        Assert: { text: "If Hera wants peace, she doesn't need conditions. This is a trap with a bow on it.", stat: "Courage", dc: 15 },
        Reason: { text: "Guaranteed safety from Hera means nothing if Zeus and Ares aren't bound by the same promise.", stat: "Wisdom", dc: 12 },
        Empathize: { text: "I want peace too. But peace built on isolation isn't peace — it's surrender in a nicer dress.", stat: "Empathy", dc: 13 },
        Deflect: { text: "What happens to Athens while I'm on Olympus 'making peace'? Who holds the gates?", stat: "Cunning", dc: 14 },
        Endure: { text: "I'll go to Olympus. On my terms. Not Hera's. Not anyone's.", stat: "Discipline", dc: 10 },
      },
    },
    {
      npcLine: "Iris steps back. The divine light around her flickers — the rainbow shimmering at its edges, threatening to dissolve.\n\n\"One final question. From Hera herself.\"\n\nThe air goes heavy. Cold. The temperature of judgment.\n\n\"What would you say to the Queen of the Gods, if she were standing before you right now?\"",
      options: {
        Assert: { text: "I'd say: you destroyed my family. And I'm still standing. Make of that what you will.", stat: "Courage", dc: 12 },
        Reason: { text: "I'd ask her why. Not accuse — ask. Because I think even she doesn't fully know anymore.", stat: "Wisdom", dc: 10 },
        Empathize: { text: "I'd say: you and I have more in common than you think. We both lost something to Zeus's choices.", stat: "Empathy", dc: 11 },
        Deflect: { text: "Tell her to watch. She'll see my answer soon enough.", stat: "Cunning", dc: 14 },
        Endure: { text: "Tell her nothing. Let my actions speak. She's been watching long enough to understand.", stat: "Discipline", dc: 10 },
      },
    },
  ],
  outcomes: {
    win: {
      text: "Iris bows. Actually bows — the divine messenger of the Queen of the Gods, bending at the waist before a mortal girl standing in a broken city, covered in dust and other people's grief.\n\n\"Hera was wrong about you,\" she says. Her voice is her own again — not Hera's. Warm where Hera's was cold. Surprised where Hera's was certain.\n\n\"She thought you were Zeus's weapon. You're something else. Something Olympus hasn't seen in a very long time.\"\n\nShe straightens. The rainbow light intensifies — and then she vanishes. Not gradually. Completely. One moment she's there; the next, the air where she stood is warm and smells of rain.\n\nAbove you, for the first time in days, the sky above Athens is a single color: gold.\n\nYou just won a war of words with a god's own voice. The battle isn't over. But the terms just changed. And somewhere on Olympus, a queen is reconsidering.",
      statChanges: { Wisdom: 2, Courage: 1 },
      reputation: { gods: 2, commonPeople: 1 },
      flags: { impressedHera: true, irisBlessing: true },
    },
    draw: {
      text: "Iris nods slowly. \"You have conviction. Whether it's wisdom or stubbornness, time will tell — and Hera is patient enough to wait for the verdict.\"\n\nShe steps back. The rainbow flickers.\n\n\"The offer stands until dawn. After that...\"\n\nShe doesn't finish. She doesn't need to. The unfinished sentence is the threat — the space where consequences live.\n\nThe rainbow fades. The siege sounds return. You held your ground against a divine emissary. But she left with more questions than answers — for both of you.",
      statChanges: { Wisdom: 1 },
      reputation: { gods: 1 },
      flags: { metIris: true },
    },
    lose: {
      text: "Iris shakes her head. The gesture carries the weight of Olympus — disappointment on a divine scale.\n\n\"You are your father's child,\" she says. \"All fire. No reflection.\"\n\nThe words land like a blade — not because they're cruel, but because they might be true.\n\n\"Hera's patience has limits. Remember that.\"\n\nShe vanishes. The air goes cold. You said what you meant — but you didn't say it well enough. The words that could have turned an enemy into a neutral party, that could have earned you the one thing you can't forge or fight for — divine restraint — died on your tongue.\n\nThere will be consequences. Hera always follows through.",
      statChanges: {},
      reputation: { gods: -1 },
      flags: { metIris: true, failedDiplomacy: true },
    },
  },
};

// ── Memory Echo: Zeus Speaks ──
export const ch9Echo = {
  fragments: [
    "Zeus speaks",
    "Not a vision",
    "His voice",
    "I hid you because I was afraid",
    "Come home when you're ready",
  ],
  correctOrder: [0, 1, 2, 3, 4],
  baseDC: 5,
  dreamText: "This is not a dream. You know the difference by now — after nine chapters of visions and fragments and half-remembered flashes, you know what a dream feels like. This is something else.\n\nThis is your father's voice.\n\nZeus. King of the gods. Lord of thunder. The most powerful being in existence. Speaking directly into your mind for the first time in your life.\n\n\"I hid you because I was afraid for you. Not of you. For you.\"\n\nA pause. Thunder — but gentle. The gentlest thunder you've ever heard. The sound of a sky trying not to cry.\n\n\"The gods destroy what they love. It's our worst habit and our oldest one. I didn't want that for you. I wanted you to grow up human — to be kind and brave and curious and all the things that gods forget how to be when they've been gods for too long.\"\n\nAnother pause. Longer.\n\n\"Come home when you're ready. Not before. Not because Athena says so, or Hera demands it, or because anyone tells you it's time. When YOU are ready.\"\n\nThe voice fades. The silence it leaves behind is the most profound thing you've ever experienced — not empty silence but *full* silence. The silence of a room after someone said everything they needed to say.\n\nYour father spoke to you. For the first time. And the last thing he said was: *when you're ready.*\n\nNot an order. Not a summons. A door left open, with the light on.",
  nightmareText: "The voice cracks the sky open — Zeus, but not the gentle version. The furious version. The version that threw Hephaestus from Olympus and chained Prometheus to a rock and fought a war against his own father.\n\n\"THEY USED YOU. ALL OF THEM. EVERY GOD WHO TOUCHED YOUR JOURNEY HAD AN AGENDA.\"\n\nThe nightmare rewrites every divine encounter: Hermes' guidance as recruitment. Poseidon's questions as intelligence-gathering. Persephone's truth as manipulation. Hephaestus' honesty as a different kind of control.\n\nIs any of it true? All of it? None?\n\nYou wake gasping. Heart hammering. The nightmare isn't that the gods are evil. It's that you can't be entirely certain they're not. And certainty — the certainty that the people who helped you did it because they cared, not because they had a plan — is the one thing you need right now and can't verify.\n\nThe nightmare fades. But the doubt stays. Quiet. Patient. Waiting.",
};

// ── Sacrifice Data (multiple options) ──
export const ch9SacrificeForgedItem = {
  type: "item",
  targetId: "tridentShard",
  narrative: "The city's defenses are failing. A section of the northern wall is cracking — divine energy from Ares' assault eating through stone that was built to withstand mortal siege, not godly rage.\n\nAthena's strategist shows you a mechanism built into the wall — ancient, pre-Athenian, dormant for centuries. A divine catalyst could wake it. Something forged by the gods. Something carrying the sea's power.\n\nThe trident shard in your pack hums. It could power the mechanism. The wall would hold — not just hold, but *regenerate*, sealing cracks as fast as they form.\n\nBut the shard would be consumed. The sea's gift, given up to save a city of land.",
  oracleText: "What the sea gave, the city needs. Some gifts are given to be given away.",
  gainText: "The trident shard dissolves into the wall mechanism — blue light flooding through the stone like veins filling with blood. The northern wall seals. Cracks close. The stone *grows*, thickening, strengthening, the sea's power becoming the earth's armor.\n\nFewer casualties. Fewer names to carry.\n\nThe sea gave you a gift. You passed it on. That's what gifts are for.",
  flags: { sacrificedForgedItem: true, wallPowered: true },
};

export const ch9SacrificeStatPoint = {
  type: "stat",
  targetId: "Courage",
  narrative: "A companion — one of the soldiers who has been by your side since the siege began, a young woman named Thea who reminds you of the broad-shouldered girl from the Corinthian river — is pinned under rubble at the northern gate. A fallen column. Bronze debris. The weight of a wall designed to stop armies, pressing down on someone who was just trying to hold it up.\n\nYou can shield her. Channel your divine energy into a barrier — a bubble of force between her body and the crushing stone. But the energy required will cost you. Permanently.\n\nNot a wound. Something deeper. A piece of what makes you *you* — burned away to protect someone else. You'll feel the absence forever. A hollow where something used to live.",
  oracleText: "The measure of a hero is not what they gain, but what they willingly surrender.",
  gainText: "The barrier holds. The rubble shifts. Thea crawls free — bruised, bleeding, alive. She looks at you and knows, without being told, what it cost.\n\n\"I'll remember,\" she says. She means it the way the dead of Athens mean it. Permanently.\n\nYou feel the absence where the power was — a cool, quiet hollow in your chest. It doesn't hurt. It's just... less. You are less than you were ten seconds ago.\n\nBut Thea is breathing. And 'less' is a price you'd pay again.",
  flags: { sacrificedForCompanion: true },
};

export const ch9SacrificeDivinePower = {
  type: "power",
  targetId: "stormcalling",
  narrative: "Ares' gate — a portal of divine fire, pulsing at the northern wall like a wound in the world — feeds his warriors into Athens. As long as it burns, reinforcements pour through. Close the gate, and the tide turns. Leave it open, and the city drowns in bronze.\n\nThe gate can be closed. But closing a god's portal requires divine power equal to the god who opened it.\n\nYou have that power. Zeus's blood. The storm that lives in your veins. You can channel it into the gate — pour yourself into the fire, match its frequency, overload it, shut it down.\n\nBut the power you spend won't come back. The storm in your blood will quiet. You'll be more mortal after. Permanently. The lightning in your fists will dim. The connection to Olympus will thin.\n\nYou'll be closer to the girl from Athens. Further from the daughter of Zeus.\n\nThe gate pulses. Waiting for an answer.",
  oracleText: "To close a god's door, pay a god's price. What you lose in power, you gain in peace.",
  gainText: "You press your hands against the portal. The fire resists — Ares' rage, concentrated and ancient, pushing back against your palms. Your blood sings in response — lightning rising from your bones, pouring through your hands, into the fire.\n\nThe collision is silent. Light without sound. Power meeting power.\n\nThe gate closes. The fire dies. The portal seals shut with a sound like a door closing on a chapter of your life.\n\nThe storm in your blood quiets. Not gone — dimmed. Like a fire banked to embers. You can still feel it. But it's smaller now. You gave a piece of yourself to save a city.\n\nNo more reinforcements pour through. The battle turns. Decisively. Because of what you paid.",
  flags: { sacrificedDivinePower: true, aresGateClosed: true },
  worldStateChanges: { aresInfluence: -2 },
};

// ── Dream/Camp ──
export const ch9DreamData = {
  campDescription: "There is no proper camp tonight. You sit in the shadow of the Parthenon, wrapped in a borrowed cloak that smells of someone else's sweat and smoke. Sleeping soldiers surround you — exhausted beyond dreams, their breathing the only evidence that the city is still alive. The smoke of the siege mingles with the smell of wild thyme from the hillside. Athens breathes around you — wounded, weary, stubborn. Still here.",
  dreamText: "The dream is a battlefield — but not today's. It's older. Ancient. A city that isn't Athens, under a sky that isn't this sky.\n\nAthena stands on one side. Ares on the other. Between them: rubble, and the bodies of people who didn't get to choose which god they belonged to.\n\nThey've done this before. A thousand times. A thousand cities. The same argument, repeated across millennia, because gods don't learn from repetition the way mortals do.\n\nBut in the dream, someone walks between them. A girl. Not a goddess. Not quite mortal. She puts a hand on each of their arms — one on silver armor, one on bronze — and says a single word.\n\nYou can't hear it. But both gods lower their weapons.\n\nYou wake knowing two things: this has happened before, and it's never worked permanently.\n\nUntil now, maybe.",
  nightmareText: "War-dreams. Not metaphors — *memories*. Every soldier who died today visits you. Not angry. Not accusing. Just present. They stand in a circle around your sleeping form, their faces the faces you walked past in the aftermath, the faces you promised to carry.\n\nThey're holding you to it.\n\n\"Remember us,\" they say. Not in unison — one at a time, each voice distinct, each name a weight placed carefully on your shoulders. \"When you reach the mountain. When you stand before the gods. Remember what we paid for your choices.\"\n\nYou wake with tears on your face and the absolute, unshakeable certainty that you will remember. Every single one.\n\nYou will carry their names to Olympus. You will set them down in the hall of the gods. And you will say: *This is what silence costs.*",
  communeText: "Kira sits across the dying fire, sleepless. Her face is lit from below — orange and shadow, the colors of the day still burning on her skin. Neither of you speaks for a long time. The fire pops. A log shifts. Somewhere in the city, a dog howls.\n\n\"Do you think they planned this?\" she asks. \"The gods? That we'd end up here, in the same city, making the same choice, sitting at the same fire?\"\n\nYou don't answer. She doesn't need you to. The question sits between you like a third person — someone who has been following you both since the beginning, waiting for you to notice.\n\nThe fire burns low. The stars wheel. You're both still here.\n\nThat's enough for tonight.",
  communeStatChanges: { Wisdom: 1 },
};

// ── Ticker Messages ──
export const ch9TickerMessages = [
  { condition: { flag: "wonBattleOfAthens" }, text: "Athens stands. Songs are already being written about the battle at the northern gate. They call it 'The Nine Hours.'" },
  { condition: { flag: "impressedAres" }, text: "Ares has withdrawn to Thrace. His generals say he hasn't spoken since the siege. His throne of spears sits empty." },
  { condition: { flag: "impressedHera" }, text: "Hera's storms have calmed across all of Greece. Something changed her mind — or someone did. The temples report: the queen is thinking." },
  { condition: {}, text: "Mount Olympus is visible from every city in Greece tonight. It has never been this bright. The mountain is waiting." },
  { condition: { flag: "underworldAlliance" }, text: "The dead of Athens are at rest again. They held the eastern gate for exactly one hour, as promised. Then they returned to the earth. The gate still smells of cold stone." },
];
