const chapter1 = [
  {
    id: "intro", title: "The Road to Delphi", image: "🛤️",
    atmosphere: "The sun hangs low over dusty hills. Olive trees line the road ahead.",
    text: `You are a young hero of Athens, chosen by fate to seek the Oracle at Delphi. The journey is three days long — and the gods are always watching.\n\nBefore you've gone far, you spot an old woman alone on the road. Her cart is stuck deep in the mud. She struggles, pulling with all her strength, but the wheel won't budge. She looks up at you with tired eyes.`,
    choices: [
      { text: "Run to help her right away — without hesitation.", statChanges: { Courage: 1, Empathy: 2 }, setsFlags: { helpedOldWoman: true, tookDirectAction: true }, feedback: "You didn't stop to calculate — you just acted. The old woman smiles strangely. Something about her eyes seems ancient.", lesson: "Acting for others without waiting for a reward takes both Courage and Empathy. The gods notice those who help without being asked." },
      { text: "Stop and study the cart first — find the best way to help.", statChanges: { Wisdom: 2, Discipline: 1 }, setsFlags: { helpedOldWoman: true, studiedBeforeActing: true }, feedback: "You spot a stone jamming the wheel, remove it — and the cart rolls free on the first try. The woman laughs with delight.", lesson: "Taking a moment to think before acting often leads to better results. That's not hesitation — it's Wisdom and Discipline working together." },
      { text: "Call out advice from the road but keep walking — you have a mission.", statChanges: { Cunning: 1, Discipline: 1 }, feedback: "You shout a suggestion and continue on. She calls after you: 'A hero who only helps with words will face a day when words aren't enough.'", lesson: "Staying focused on your goal is important — but avoiding difficulty when you could help is a form of Cunning that can slowly make you colder." },
      { text: "Walk past. You can't afford delays on a sacred mission.", statChanges: { Discipline: 1, Empathy: -1 }, feedback: "You walk by. The woman watches you go in silence. You feel something in your chest — not quite guilt, but something like it.", lesson: "Discipline is real and valuable. But when discipline becomes an excuse to ignore suffering, it costs something harder to measure." },
    ],
  },
  {
    id: "crossroads", title: "The Riddle at the Crossroads", image: "🌲",
    atmosphere: "Two paths split before you. Stone markers, worn by years of travelers.",
    text: `At the crossroads you find a carved stone marker. One arrow points right: The Long Road — Safe, 2 days. The other points left: The Forest Path — Fast, half a day. Enter only if you can answer the Sphinx's riddle.\n\nA group of older travelers nearby shakes their heads at the forest path. "Three people tried last month," one says. "None came back with their pride intact."`,
    choices: [
      { text: "Take the forest path. A true hero doesn't avoid challenges.", statChanges: { Courage: 2, Cunning: 1 }, setsFlags: { tookForestPath: true }, feedback: "You step into the cool shadows of the forest. Somewhere ahead, something ancient is waiting — and part of you is already thinking.", lesson: "Choosing the harder path because you believe in yourself is one of the purest forms of Courage. The Sphinx respects those who don't run." },
      { text: "Take the long road. Arriving safely is more important than arriving quickly.", statChanges: { Wisdom: 1, Discipline: 2 }, feedback: "The long road is peaceful. You walk and think, observing the land. You arrive steady — and more prepared for what's ahead.", lesson: "There is no shame in the careful path. Wisdom knows the difference between a challenge worth taking and a risk without reason." },
      { text: "Ask the older travelers what the riddle was like.", statChanges: { Wisdom: 2, Empathy: 1 }, setsFlags: { tookForestPath: true }, feedback: "One traveler says: 'She always asks something different — but it's always about who you really are.' You nod and walk toward the forest.", lesson: "Gathering information before deciding isn't weakness — it's how a chess player thinks. Wisdom is knowing what to ask." },
      { text: "Walk to the forest edge and call out: 'What kind of riddle will you ask me?'", statChanges: { Cunning: 2, Courage: 1 }, setsFlags: { tookForestPath: true }, feedback: "The sphinx appears, eyebrow raised. 'Interesting. Most heroes pretend they already know everything.' She seems... almost impressed.", lesson: "Asking a bold question before a challenge is a form of Cunning — you gather intelligence and show confidence at the same time." },
    ],
  },
  {
    id: "temple", title: "The Temple of Apollo", image: "🏛️",
    atmosphere: "White marble columns rise above you. The smell of laurel and incense fills the air.",
    text: `You've arrived. The Temple of Apollo glows in the afternoon light. A long line of pilgrims waits to see the Oracle.\n\nThen you notice something troubling. Near the front, a richly dressed nobleman is slipping gold coins to a temple priest — clearly trying to cut ahead of everyone who has been waiting for days.\n\nThe people in line murmur quietly. No one speaks up.`,
    choices: [
      { text: "Speak up loudly: 'This is a sacred place — not a market.'", statChanges: { Courage: 2, Empathy: 1 }, setsFlags: { spokeAgainstLycon: true }, feedback: "The crowd goes quiet. The head priest turns — and slowly nods. 'The hero speaks truly.' The nobleman is sent to the back.", lesson: "Standing up publicly for what's right when everyone else is silent takes real Courage. You also spoke for the people who felt they couldn't." },
      { text: "Pull a priest aside and quietly tell them what you saw.", statChanges: { Wisdom: 2, Discipline: 1 }, setsFlags: { reportedLyconQuietly: true }, feedback: "The priest listens, thanks you, and handles it discreetly. The nobleman is quietly moved back. Less dramatic — but the right thing still happened.", lesson: "Sometimes justice doesn't need an audience. Wisdom knows when a quiet word does more good than a loud one." },
      { text: "Approach the nobleman yourself and ask him why he's in such a hurry.", statChanges: { Cunning: 2, Empathy: 1 }, setsFlags: { understoodLycon: true }, feedback: "He's caught off guard. Talking to him, you learn he's panicking about his sick daughter. You still report the bribe — but with more understanding.", lesson: "Understanding why someone does something wrong doesn't make it right — but it makes you wiser about people. Cunning and Empathy together let you see the whole picture." },
      { text: "Stay quiet. It's not your place to create conflict in a holy space.", statChanges: { Discipline: 1 }, setsFlags: { stayedSilentAtTemple: true }, feedback: "You say nothing. The nobleman gets his private consultation. The people in line look defeated. You feel the weight of silence.", lesson: "Sometimes staying quiet is the right call. But it's worth asking honestly: was it Discipline, or was it fear of conflict? The honest answer matters." },
    ],
  },
];

export default chapter1;
