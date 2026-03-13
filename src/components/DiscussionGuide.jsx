import { useState } from "react";

function generateDiscussionQuestions(flags, stats, chapter) {
  if (chapter === 3) return generateCh3Questions(flags);
  const questions = [];

  // Q1: Market scene — did the player act before understanding, or wait?
  const actedImpulsively = flags.tookDirectAction;
  if (actedImpulsively) {
    questions.push("When you saw the man take the coins, what did you think was happening? What changed when you found out more?");
  } else {
    questions.push("Why do you think you waited to find out more before doing anything? Is there ever a time when waiting is the wrong move?");
  }

  // Q2: Soldier's dilemma — always include
  questions.push("The soldier question — I want to know what you actually think. Not the 'right' answer. What's your gut feeling, and why?");

  // Q3: Based on Lycon agent choice
  if (flags.liedToLyconsAgent) {
    questions.push("When you gave the agent a name — what were you thinking in that moment? Do you think that choice will matter later?");
  } else if (flags.spokeAgainstLycon) {
    questions.push("You didn't take the easy way out with Lycon's agent. What made you decide that? Was there a moment where you almost chose differently?");
  } else {
    questions.push("Lycon's agent offered you a way to make everything easier. What do you think makes those kinds of offers hard to say no to?");
  }

  return questions.slice(0, 3);
}

function generateCh3Questions(flags) {
  const questions = [];

  if (flags.messengerPath_chosen) {
    questions.push("You chose the messenger's path over the arena. What drew you to it? Would you choose differently now?");
  } else if (flags.arenaPath_chosen) {
    questions.push("You chose the arena over the messenger. What made that feel like the right call?");
  }

  questions.push("What did you think of Niko? Did you trust them? Why or why not?");

  questions.push("Did anything in this chapter surprise you? Was there a moment where the outcome wasn't what you expected?");

  return questions.slice(0, 3);
}

export default function DiscussionGuide({ flags, stats, chapter }) {
  const [open, setOpen] = useState(false);
  const questions = generateDiscussionQuestions(flags, stats, chapter);

  return (
    <div style={{ marginTop: 18 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "1px solid rgba(212,160,23,0.3)",
          borderRadius: 8,
          padding: "10px 16px",
          color: "#d4a017",
          fontSize: 16,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          cursor: "pointer",
          width: "100%",
          textAlign: "left",
        }}
      >
        {open ? "▾" : "▸"} For Parents — Discussion Prompts
      </button>
      {open && (
        <div style={{
          marginTop: 10,
          background: "#faf8f0",
          border: "1px solid #e0d8c0",
          borderRadius: 12,
          padding: "18px 20px",
          color: "#3a3020",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}>
          <h4 style={{ fontSize: 16, color: "#5a4a30", marginBottom: 6, fontWeight: "normal", fontStyle: "italic" }}>
            A few questions worth talking about
          </h4>
          <p style={{ fontSize: 13, color: "#8a7a60", fontStyle: "italic", margin: "0 0 14px" }}>
            These questions have no right answers. They're just good ones.
          </p>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {questions.map((q, i) => (
              <li key={i} style={{ marginBottom: 10, lineHeight: 1.75, fontSize: 16, color: "#4a3a20" }}>
                {q}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
