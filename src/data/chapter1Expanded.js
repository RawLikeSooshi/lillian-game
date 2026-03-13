/**
 * Chapter 1 Expanded Data — New systems content for "The Road to Delphi"
 * Adds: Prophecy pool, Exploration nodes, Memory echo, Nemesis tease, Ticker seeds
 */

import { PROPHECY_POOL } from "../engine/prophecy";

// ── Prophecy Pool (draw 1-3 at chapter start) ──
export const ch1ProphecyPool = [
  PROPHECY_POOL.ch1_thread,
  PROPHECY_POOL.ch1_temple,
  PROPHECY_POOL.ch1_blood,
];

// ── Exploration Nodes (after crossroads scene, before temple) ──
export const ch1ExplorationNodes = {
  title: "The Hills Before Delphi",
  description: "The road to Delphi winds through low hills and silver-green olive groves. The air smells of thyme and warm stone. Three places catch your eye along the way. You have time to visit two before the sun drops.",
  picks: 2,
  nodes: [
    {
      id: "shepherds_fire",
      name: "The Shepherd's Fire",
      icon: "🔥",
      hint: "Smoke threads up from a camp in the hills. The smell of roasting grain drifts down to the road.",
      type: "scene",
      content: {
        text: "An old shepherd sits cross-legged by a small fire, turning barley bread on a flat stone. His dog lifts its head when you approach, then sets it down again — decided about you already.\n\nThe shepherd waves you over like he's been expecting company. \"Sit,\" he says. \"You look like someone headed somewhere that matters.\"\n\nYou sit. The bread is warm and nutty, and the fire crackles between you like a third voice in the conversation.\n\nHe tells stories while you eat — about gods who walked among mortals in disguise, testing the kindness of strangers. \"My grandmother swore she met Hermes once,\" he says, poking the embers. \"Disguised as a beggar at her door. She gave him her last bread. That winter, her goats gave twice the milk.\"\n\nHe pauses. His eyes crinkle.\n\n\"Of course, it could have just been a good year for goats.\"",
        statChanges: { Empathy: 1 },
        reputationChanges: { commonPeople: 1 },
        feedback: "The shepherd asks nothing in return — not your name, not where you're headed. He seems genuinely glad for the company.\n\nAs you stand to leave, he says: \"The road tests everyone differently. Be kind to the next stranger. You never know who's wearing a borrowed face.\"\n\nHis dog walks you to the edge of camp. Then it sits and watches you go, tail still.",
        lesson: "Ordinary people carry extraordinary stories. Sitting down to listen — really listen — is a form of respect that costs nothing and teaches more than most books.",
        setsFlags: { visitedShepherd: true },
      },
    },
    {
      id: "broken_shrine",
      name: "The Broken Shrine",
      icon: "🏛️",
      hint: "A small roadside shrine, half-hidden by creeping ivy. The stone is cracked. Something about it feels unfinished.",
      type: "scene",
      content: {
        text: "The shrine to Artemis is small — barely waist-high — but someone took the time to carve her face with care. Or they did, once. Now her nose is chipped away. Her offerings are scattered in the dirt: a clay bowl, a handful of dried grain, a ribbon faded to nothing.\n\nThe damage isn't weather. It isn't time. The cracks are sharp, deliberate. Someone did this with a rock and a grudge.\n\nThe goddess stares out from the broken stone with one good eye.\n\nYou could clean it up and reset the offerings. Or you could keep walking — it isn't your shrine, isn't your problem, and the sun is already past its peak.",
        choices: [
          {
            text: "Clean the shrine and reset the offerings.",
            statChanges: { Empathy: 1, Discipline: 1 },
            reputationChanges: { gods: 1 },
            feedback: "It takes longer than you expected. You gather the scattered offerings, brush the dirt from the carved face, find wildflowers growing in the ditch and lay them at the base.\n\nWhen you step back, the shrine looks — not new, but tended. Cared for.\n\nA breeze moves through the trees. Warm, despite the shade. The wildflowers nod once, as if something invisible just touched them.\n\nIt might be nothing. It might not.",
            lesson: "Tending to something sacred that isn't yours — when no one is watching and no one will thank you — is one of the quietest forms of goodness there is.",
            setsFlags: { repairedShrine: true },
          },
          {
            text: "Leave it. You have a mission.",
            statChanges: { Discipline: 1 },
            feedback: "You walk past. The broken face of Artemis watches you go with her one good eye.\n\nYou don't feel guilty. Not exactly. But the shrine stays in your mind longer than the road ahead — a small wrong you could have made right, still sitting there in the dirt behind you.",
            lesson: "Not every problem on the road is yours to fix. But some of them follow you anyway.",
            setsFlags: { ignoredShrine: true },
          },
        ],
      },
    },
    {
      id: "merchants_warning",
      name: "The Merchant's Warning",
      icon: "💬",
      hint: "A traveling merchant and his mule rest by the road. He keeps glancing back the way he came.",
      type: "scene",
      content: {
        text: "The merchant sits against a stone wall, eating figs with the focused attention of someone trying not to think about something else. His mule chews grass beside him. Both of them are pointed away from Delphi.\n\n\"Don't go to the temple today,\" he says when he sees you, not even bothering with hello. \"There's a nobleman — Lycon — arrived yesterday with a full retinue. Servants, bodyguards, the lot. He's throwing gold around like rain and making enemies of every priest who won't take it.\"\n\nHe lowers his voice, though the road is empty. \"Word is he's trying to buy a private audience with the Oracle. Jump the whole line. The pilgrims are furious — one was arrested just for complaining.\"\n\nHe bites into another fig and shakes his head. \"I sold him three amphorae of good wine. Didn't taste a drop — just handed them to his servants without looking. That's the kind of man who treats everything the same.\" He spits a seed. \"Things to use.\"",
        statChanges: { Wisdom: 1, Cunning: 1 },
        feedback: "The merchant gives you the name of Lycon's head servant — Drako — and which entrance he uses to avoid the crowds.\n\n\"Not that I'm encouraging trouble,\" he adds, tossing you a fig. \"I'm encouraging information. There's a difference.\"\n\nHe grins. One of his teeth is gold.\n\n\"Probably.\"",
        lesson: "Information gathered before you walk into a situation changes everything about how you move through it. The merchant didn't give you power — he gave you context. That's often worth more.",
        setsFlags: { knewAboutLycon: true },
      },
    },
  ],
};

// ── Memory Echo (after Sphinx puzzle) ──
export const ch1Echo = {
  fragments: [
    "A peak above the clouds",
    "A crack of white fire",
    "Arms holding something small",
    "A woman's face, turned away",
    "Rain that falls sideways",
  ],
  correctOrder: [0, 4, 2, 3, 1], // storm → woman → holding baby → mountaintop → lightning
  baseDC: 16, // Hard early — player likely fails, and that's OK
  dreamText: "Something stirs behind your eyes — a flash of sky and stone and warmth, gone before you can hold it. Like reaching for a word you've forgotten. It was there. It was real.\n\nYou just can't remember what it was.",
  nightmareText: "Darkness. Thunder so close it's inside your chest. Something vast is watching — not with anger, not with love. With patience.\n\nThen nothing.",
};

// ── Nemesis Tease (woven into scene text) ──
// The nemesis tease for Ch1 is narrative-only — a girl watching from across the road.
// This is delivered through a textVariant addition to the existing crossroads scene.
// We don't add a full encounter — just awareness.
export const ch1NemesisTease = {
  // Added after crossroads scene as a brief interstitial
  text: "As you step onto the forest path, you glance back. A girl your age stands across the road, watching you. Same dust on her sandals. Same look in her eyes — like she's going somewhere important.\n\nShe doesn't wave. She doesn't speak. Then the trees close behind you and she's gone.",
  brief: true, // Signals this is atmospheric, not interactive
};

// ── World State / Ticker seeds ──
// Chapter 1 doesn't show ticker messages yet (starts Ch2), but sets world state
export const ch1WorldStateChanges = {
  repairedShrine: { divineFavor: 1 },
  spokeAgainstLycon: { mortalFear: 1 },
  solvedSphinxRiddle: { divineFavor: 1 },
};

// ── Ticker message seeds (displayed in Ch2) ──
export const ch1TickerMessages = [
  { condition: { flag: "spokeAgainstLycon" }, text: "Word on the road: a child challenged a nobleman at the Temple of Apollo. The priests did nothing to stop her." },
  { condition: { flag: "repairedShrine" }, text: "A shepherd near Delphi says someone tended the broken shrine of Artemis. Wildflowers were left at the base." },
  { condition: { flag: "helpedOldWoman" }, text: "An old woman near Athens speaks well of a young traveler. She says the girl didn't hesitate." },
];
