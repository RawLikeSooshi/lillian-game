import { useState, useEffect } from "react";

const INITIAL_STATS = { Courage: 3, Wisdom: 3, Discipline: 3, Empathy: 3, Cunning: 3 };
const STAT_COLORS = { Courage: "#e85d3a", Wisdom: "#6b8fd4", Discipline: "#8b6db5", Empathy: "#4caf8a", Cunning: "#d4a017" };
const STAT_ICONS = { Courage: "⚔️", Wisdom: "📜", Discipline: "🏛️", Empathy: "🫶", Cunning: "🦊" };

const scenes = [
  {
    id: "intro", title: "The Road to Delphi", image: "🛤️",
    atmosphere: "The sun hangs low over dusty hills. Olive trees line the road ahead.",
    text: `You are a young hero of Athens, chosen by fate to seek the Oracle at Delphi. The journey is three days long — and the gods are always watching.\n\nBefore you've gone far, you spot an old woman alone on the road. Her cart is stuck deep in the mud. She struggles, pulling with all her strength, but the wheel won't budge. She looks up at you with tired eyes.`,
    choices: [
      { text: "Run to help her right away — without hesitation.", statChanges: { Courage: 1, Empathy: 2 }, feedback: "You didn't stop to calculate — you just acted. The old woman smiles strangely. Something about her eyes seems ancient.", lesson: "Acting for others without waiting for a reward takes both Courage and Empathy. The gods notice those who help without being asked." },
      { text: "Stop and study the cart first — find the best way to help.", statChanges: { Wisdom: 2, Discipline: 1 }, feedback: "You spot a stone jamming the wheel, remove it — and the cart rolls free on the first try. The woman laughs with delight.", lesson: "Taking a moment to think before acting often leads to better results. That's not hesitation — it's Wisdom and Discipline working together." },
      { text: "Call out advice from the road but keep walking — you have a mission.", statChanges: { Cunning: 1, Discipline: 1 }, feedback: "You shout a suggestion and continue on. She calls after you: 'A hero who only helps with words will face a day when words aren't enough.'", lesson: "Staying focused on your goal is important — but avoiding difficulty when you could help is a form of Cunning that can slowly make you colder." },
      { text: "Walk past. You can't afford delays on a sacred mission.", statChanges: { Discipline: 1, Empathy: -1 }, feedback: "You walk by. The woman watches you go in silence. You feel something in your chest — not quite guilt, but something like it.", lesson: "Discipline is real and valuable. But when discipline becomes an excuse to ignore suffering, it costs something harder to measure." },
    ],
  },
  {
    id: "crossroads", title: "The Riddle at the Crossroads", image: "🌲",
    atmosphere: "Two paths split before you. Stone markers, worn by years of travelers.",
    text: `At the crossroads you find a carved stone marker. One arrow points right: The Long Road — Safe, 2 days. The other points left: The Forest Path — Fast, half a day. Enter only if you can answer the Sphinx's riddle.\n\nA group of older travelers nearby shakes their heads at the forest path. "Three people tried last month," one says. "None came back with their pride intact."`,
    choices: [
      { text: "Take the forest path. A true hero doesn't avoid challenges.", statChanges: { Courage: 2, Cunning: 1 }, feedback: "You step into the cool shadows of the forest. Somewhere ahead, something ancient is waiting — and part of you is already thinking.", lesson: "Choosing the harder path because you believe in yourself is one of the purest forms of Courage. The Sphinx respects those who don't run." },
      { text: "Take the long road. Arriving safely is more important than arriving quickly.", statChanges: { Wisdom: 1, Discipline: 2 }, feedback: "The long road is peaceful. You walk and think, observing the land. You arrive steady — and more prepared for what's ahead.", lesson: "There is no shame in the careful path. Wisdom knows the difference between a challenge worth taking and a risk without reason." },
      { text: "Ask the older travelers what the riddle was like.", statChanges: { Wisdom: 2, Empathy: 1 }, feedback: "One traveler says: 'She always asks something different — but it's always about who you really are.' You nod and walk toward the forest.", lesson: "Gathering information before deciding isn't weakness — it's how a chess player thinks. Wisdom is knowing what to ask." },
      { text: "Walk to the forest edge and call out: 'What kind of riddle will you ask me?'", statChanges: { Cunning: 2, Courage: 1 }, feedback: "The sphinx appears, eyebrow raised. 'Interesting. Most heroes pretend they already know everything.' She seems... almost impressed.", lesson: "Asking a bold question before a challenge is a form of Cunning — you gather intelligence and show confidence at the same time." },
    ],
  },
  {
    id: "temple", title: "The Temple of Apollo", image: "🏛️",
    atmosphere: "White marble columns rise above you. The smell of laurel and incense fills the air.",
    text: `You've arrived. The Temple of Apollo glows in the afternoon light. A long line of pilgrims waits to see the Oracle.\n\nThen you notice something troubling. Near the front, a richly dressed nobleman is slipping gold coins to a temple priest — clearly trying to cut ahead of everyone who has been waiting for days.\n\nThe people in line murmur quietly. No one speaks up.`,
    choices: [
      { text: "Speak up loudly: 'This is a sacred place — not a market.'", statChanges: { Courage: 2, Empathy: 1 }, feedback: "The crowd goes quiet. The head priest turns — and slowly nods. 'The hero speaks truly.' The nobleman is sent to the back.", lesson: "Standing up publicly for what's right when everyone else is silent takes real Courage. You also spoke for the people who felt they couldn't." },
      { text: "Pull a priest aside and quietly tell them what you saw.", statChanges: { Wisdom: 2, Discipline: 1 }, feedback: "The priest listens, thanks you, and handles it discreetly. The nobleman is quietly moved back. Less dramatic — but the right thing still happened.", lesson: "Sometimes justice doesn't need an audience. Wisdom knows when a quiet word does more good than a loud one." },
      { text: "Approach the nobleman yourself and ask him why he's in such a hurry.", statChanges: { Cunning: 2, Empathy: 1 }, feedback: "He's caught off guard. Talking to him, you learn he's panicking about his sick daughter. You still report the bribe — but with more understanding.", lesson: "Understanding why someone does something wrong doesn't make it right — but it makes you wiser about people. Cunning and Empathy together let you see the whole picture." },
      { text: "Stay quiet. It's not your place to create conflict in a holy space.", statChanges: { Discipline: 1 }, feedback: "You say nothing. The nobleman gets his private consultation. The people in line look defeated. You feel the weight of silence.", lesson: "Sometimes staying quiet is the right call. But it's worth asking honestly: was it Discipline, or was it fear of conflict? The honest answer matters." },
    ],
  },
];

const heroIdentity = (stats) => {
  const sorted = Object.entries(stats).sort((a, b) => b[1] - a[1]);
  const [top, second] = [sorted[0][0], sorted[1][0]];
  const map = {
    Courage: { Wisdom: ["The Brave Thinker","You face challenges head-on but never without thought. Heroes like you are rare — you can lead a charge and know exactly why it matters.","🦁"], Empathy: ["The Heart of the Battle","You are fearless — but you fight for others, not for glory. The gods admire those who use courage as a shield for the people they love.","🛡️"], Cunning: ["The Daring Fox","Bold and clever. You take the risky path — but you've already thought three moves ahead. Odysseus would respect you.","🦊"], Discipline: ["The Iron Hero","You face danger with iron will. Controlled, direct, unshakeable. You're the kind of hero others follow in dark moments.","⚔️"] },
    Wisdom: { Courage: ["The Thinking Warrior","You understand that the mind is the sharpest weapon. But you're not afraid to act when action is needed. Athena herself would nod.","🦉"], Empathy: ["The Gentle Sage","You see people deeply and think clearly. You don't just solve problems — you understand the people inside them.","📜"], Cunning: ["The Architect","You plan, observe, and out-think. You build solutions others don't see coming. Daedalus would call you a peer.","🔭"], Discipline: ["The Scholar of Olympus","Methodical, precise, deeply wise. Your decisions are never random. You build understanding the way a temple is built — stone by stone.","🏛️"] },
    Discipline: { Wisdom: ["The Patient Champion","Others rush. You persist. You know that the slow, steady path often leads somewhere the sprinters never reach.","🌿"], Courage: ["The Unyielding","Focused and fearless. Once you commit to something, nothing moves you. Challenges just make you steadier.","🗿"], Empathy: ["The Quiet Protector","You do what needs to be done, without drama — and always with care for the people around you. That's rare.","🌙"], Cunning: ["The Relentless Strategist","Patient and precise. You wait for the right moment — and when it comes, your move is perfectly placed.","♟️"] },
    Empathy: { Courage: ["The Defender","You feel things deeply — and you're brave enough to act on it. You don't just see people's pain, you step into it with them.","💫"], Wisdom: ["The Healer","Understanding and wise. You see the world through others' eyes — and that makes your decisions richer than most.","🌊"], Cunning: ["The People-Reader","You understand humans better than they understand themselves. That's its own kind of power — one most people never develop.","🫶"], Discipline: ["The Steady Heart","You care deeply and act consistently. People trust you — not because you're loud, but because you always show up.","🌸"] },
    Cunning: { Wisdom: ["The Strategist","You think in systems and angles. Where others see a wall, you see three ways through it.","🔮"], Courage: ["The Bold Trickster","Like Hermes himself — quick, clever, and unafraid. You take the unconventional path and arrive first.","⚡"], Empathy: ["The Human Decoder","Clever and compassionate. You understand what makes people tick — and you use it to help, not harm.","🗺️"], Discipline: ["The Planner","Nothing is left to chance. You think ahead, prepare, and execute. Games come naturally to minds like yours.","🎯"] },
  };
  const e = map[top]?.[second] || map[top]?.Wisdom || ["The Rising Hero","Your path is your own — and it's just beginning.","⭐"];
  return { title: e[0], desc: e[1], symbol: e[2] };
};

function StatBar({ name, value, change }) {
  const [d, setD] = useState(value - (change || 0));
  useEffect(() => { const t = setTimeout(() => setD(value), 120); return () => clearTimeout(t); }, [value]);
  return (
    <div style={{ marginBottom: 9 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
        <span style={{ fontSize: 12, color: "#d4c5a0" }}>{STAT_ICONS[name]} {name}</span>
        <span style={{ fontSize: 12, color: STAT_COLORS[name], fontWeight: "bold" }}>{d}{change > 0 && <span style={{ color: "#4caf8a", marginLeft: 4, fontSize: 10 }}>+{change}</span>}{change < 0 && <span style={{ color: "#e85d3a", marginLeft: 4, fontSize: 10 }}>{change}</span>}</span>
      </div>
      <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 4, height: 7 }}>
        <div style={{ width: `${Math.min(100,(d/10)*100)}%`, height: "100%", background: STAT_COLORS[name], borderRadius: 4, transition: "width 0.8s ease", boxShadow: `0 0 6px ${STAT_COLORS[name]}88` }} />
      </div>
    </div>
  );
}

export default function App() {
  const [phase, setPhase] = useState("welcome");
  const [heroName, setHeroName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [sceneIndex, setSceneIndex] = useState(0);
  const [stats, setStats] = useState(INITIAL_STATS);
  const [lastChanges, setLastChanges] = useState({});
  const [choice, setChoice] = useState(null);
  const [showLesson, setShowLesson] = useState(false);

  const scene = scenes[sceneIndex];
  const identity = heroIdentity(stats);

  const handleChoice = (c) => {
    const ns = { ...stats };
    Object.entries(c.statChanges).forEach(([k, v]) => { ns[k] = Math.max(0, Math.min(10, ns[k] + v)); });
    setChoice(c); setStats(ns); setLastChanges(c.statChanges); setPhase("result");
    setTimeout(() => setShowLesson(true), 700);
  };

  const handleNext = () => {
    setShowLesson(false); setChoice(null); setLastChanges({});
    if (sceneIndex < scenes.length - 1) { setSceneIndex(i => i + 1); setPhase("scene"); }
    else setPhase("end");
  };

  const reset = () => { setPhase("welcome"); setStats(INITIAL_STATS); setSceneIndex(0); setHeroName(""); setNameInput(""); setLastChanges({}); setChoice(null); setShowLesson(false); };

  const bg = { minHeight: "100vh", background: "linear-gradient(160deg,#1a1008 0%,#2a1f0a 40%,#1a0f15 100%)", fontFamily: "Georgia,serif", color: "#e8d8b0", display: "flex", flexDirection: "column", alignItems: "center", padding: "18px 14px 36px" };
  const card = { background: "rgba(255,248,220,0.05)", border: "1px solid rgba(212,160,23,0.28)", borderRadius: 16, padding: 20, maxWidth: 660, width: "100%", boxSizing: "border-box" };
  const goldBtn = { background: "linear-gradient(135deg,#d4a017,#a07010)", border: "none", borderRadius: 8, padding: "12px 26px", color: "#1a0f00", fontSize: 14, fontFamily: "Georgia,serif", fontWeight: "bold", cursor: "pointer" };

  if (phase === "welcome") return (
    <div style={bg}>
      <div style={{ ...card, textAlign: "center", marginTop: 24 }}>
        <div style={{ fontSize: 56, marginBottom: 8 }}>🏛️</div>
        <h1 style={{ fontSize: 24, color: "#d4a017", letterSpacing: 3, marginBottom: 5, fontVariant: "small-caps" }}>Hero of Olympus</h1>
        <p style={{ fontSize: 10, color: "#a08060", letterSpacing: 4, marginBottom: 18 }}>CHAPTER I — THE ROAD TO DELPHI</p>
        <p style={{ lineHeight: 1.9, color: "#c8b88a", marginBottom: 18, fontSize: 14 }}>In ancient Greece, every hero begins with a single choice.<br/>The gods don't judge you by your power — they judge you by your character.<br/><br/>The choices you make will shape who you become.<br/>There are no wrong answers. Only different kinds of heroes.</p>
        <div style={{ background: "rgba(212,160,23,0.08)", border: "1px solid rgba(212,160,23,0.16)", borderRadius: 12, padding: "12px 16px", marginBottom: 18, textAlign: "left" }}>
          <p style={{ fontSize: 10, color: "#d4a017", marginBottom: 8, fontVariant: "small-caps", letterSpacing: 1 }}>Your Five Hero Stats</p>
          {Object.keys(INITIAL_STATS).map(s => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
              <span>{STAT_ICONS[s]}</span>
              <span style={{ fontSize: 13, color: STAT_COLORS[s], fontWeight: "bold", width: 82 }}>{s}</span>
              <span style={{ fontSize: 12, color: "#888070" }}>{ {Courage:"Acting even when it's scary",Wisdom:"Thinking before you act",Discipline:"Staying focused",Empathy:"Understanding how others feel",Cunning:"Finding clever solutions"}[s] }</span>
            </div>
          ))}
        </div>
        <button onClick={() => setPhase("name")} style={goldBtn}>Begin Your Journey →</button>
      </div>
    </div>
  );

  if (phase === "name") return (
    <div style={bg}>
      <div style={{ ...card, textAlign: "center", marginTop: 54 }}>
        <div style={{ fontSize: 44, marginBottom: 8 }}>⚡</div>
        <h2 style={{ fontSize: 20, color: "#d4a017", marginBottom: 8 }}>Who are you, young hero?</h2>
        <p style={{ color: "#a08060", marginBottom: 18, lineHeight: 1.8, fontSize: 14 }}>Every hero has a name.<br/>Yours will be remembered in the halls of Olympus.</p>
        <input value={nameInput} onChange={e => setNameInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && nameInput.trim()) { setHeroName(nameInput.trim()); setPhase("scene"); } }} placeholder="Enter your hero's name..." style={{ background: "rgba(255,248,220,0.08)", border: "1px solid rgba(212,160,23,0.4)", borderRadius: 8, padding: "11px 14px", fontSize: 17, color: "#e8d8b0", fontFamily: "Georgia,serif", textAlign: "center", width: "100%", boxSizing: "border-box", marginBottom: 12, outline: "none" }} autoFocus />
        <button disabled={!nameInput.trim()} onClick={() => { setHeroName(nameInput.trim()); setPhase("scene"); }} style={{ ...goldBtn, opacity: nameInput.trim() ? 1 : 0.4, cursor: nameInput.trim() ? "pointer" : "default" }}>This is my name →</button>
      </div>
    </div>
  );

  if (phase === "scene") return (
    <div style={bg}>
      <div style={{ ...card, marginBottom: 10, padding: "11px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
          <span style={{ color: "#d4a017", fontSize: 12, fontVariant: "small-caps" }}>⚡ {heroName}</span>
          <span style={{ color: "#a08060", fontSize: 10 }}>Scene {sceneIndex+1}/{scenes.length}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
          {Object.entries(stats).map(([n,v]) => <StatBar key={n} name={n} value={v} change={0}/>)}
        </div>
      </div>
      <div style={card}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 30 }}>{scene.image}</span>
          <div>
            <p style={{ fontSize: 9, color: "#a08060", letterSpacing: 2, fontVariant: "small-caps", marginBottom: 1 }}>{scene.atmosphere}</p>
            <h2 style={{ fontSize: 17, color: "#d4a017", margin: 0 }}>{scene.title}</h2>
          </div>
        </div>
        <div style={{ borderLeft: "2px solid rgba(212,160,23,0.3)", paddingLeft: 12, marginBottom: 18 }}>
          {scene.text.split("\n").map((l,i) => <p key={i} style={{ margin: "0 0 8px", lineHeight: 1.85, color: "#c8b88a", fontSize: 14 }}>{l}</p>)}
        </div>
        <p style={{ fontSize: 10, color: "#d4a017", marginBottom: 8, fontVariant: "small-caps", letterSpacing: 1 }}>What do you do?</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {scene.choices.map((c,i) => (
            <button key={i} onClick={() => handleChoice(c)}
              style={{ background: "rgba(255,248,220,0.05)", border: "1px solid rgba(212,160,23,0.19)", borderRadius: 9, padding: "11px 13px", color: "#e8d8b0", fontSize: 13, fontFamily: "Georgia,serif", textAlign: "left", cursor: "pointer", lineHeight: 1.65, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background="rgba(212,160,23,0.12)"; e.currentTarget.style.borderColor="rgba(212,160,23,0.46)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="rgba(255,248,220,0.05)"; e.currentTarget.style.borderColor="rgba(212,160,23,0.19)"; }}
            >
              <span style={{ color: "#d4a017", marginRight: 6, fontWeight: "bold" }}>{"ABCD"[i]}.</span>{c.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  if (phase === "result" && choice) return (
    <div style={bg}>
      <div style={{ ...card, marginBottom: 10, padding: "11px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
          <span style={{ color: "#d4a017", fontSize: 12, fontVariant: "small-caps" }}>⚡ {heroName}</span>
          <span style={{ color: "#4caf8a", fontSize: 10 }}>✦ Stats Updated</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
          {Object.entries(stats).map(([n,v]) => <StatBar key={n} name={n} value={v} change={lastChanges[n]||0}/>)}
        </div>
      </div>
      <div style={card}>
        <h3 style={{ color: "#d4a017", marginBottom: 10, fontSize: 12, fontVariant: "small-caps", letterSpacing: 1 }}>{scene.title} — What Happened</h3>
        <div style={{ background: "rgba(255,248,220,0.06)", borderRadius: 9, padding: 13, marginBottom: 10 }}>
          <p style={{ lineHeight: 1.85, color: "#c8b88a", margin: 0, fontStyle: "italic", fontSize: 14 }}>"{choice.feedback}"</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
          {Object.entries(choice.statChanges).map(([s,v]) => (
            <span key={s} style={{ background: v>0?"rgba(76,175,138,0.13)":"rgba(232,93,58,0.13)", border: `1px solid ${v>0?"rgba(76,175,138,0.36)":"rgba(232,93,58,0.36)"}`, borderRadius: 5, padding: "3px 8px", fontSize: 11, color: v>0?"#4caf8a":"#e85d3a" }}>
              {STAT_ICONS[s]} {s} {v>0?`+${v}`:v}
            </span>
          ))}
        </div>
        {showLesson && (
          <div style={{ background: "rgba(107,143,212,0.1)", border: "1px solid rgba(107,143,212,0.26)", borderRadius: 9, padding: 13, marginBottom: 14 }}>
            <p style={{ fontSize: 10, color: "#6b8fd4", marginBottom: 4, letterSpacing: 1, fontVariant: "small-caps" }}>🦉 The Oracle's Insight</p>
            <p style={{ lineHeight: 1.85, color: "#b0c4e8", margin: 0, fontSize: 13 }}>{choice.lesson}</p>
          </div>
        )}
        {showLesson && <button onClick={handleNext} style={{ ...goldBtn, width: "100%" }}>{sceneIndex<scenes.length-1?"Continue the Journey →":"See My Hero Portrait →"}</button>}
      </div>
    </div>
  );

  if (phase === "end") return (
    <div style={bg}>
      <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
        <div style={{ fontSize: 50, marginBottom: 6 }}>{identity.symbol}</div>
        <p style={{ fontSize: 9, color: "#a08060", letterSpacing: 3, fontVariant: "small-caps", marginBottom: 3 }}>The Oracle Sees You As</p>
        <h2 style={{ fontSize: 22, color: "#d4a017", margin: "0 0 10px" }}>{identity.title}</h2>
        <div style={{ background: "rgba(212,160,23,0.08)", borderRadius: 11, padding: "12px 14px", marginBottom: 10 }}>
          <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontSize: 14 }}>{identity.desc}</p>
        </div>
        <p style={{ fontSize: 12, color: "#a08060" }}>This is who <em>{heroName}</em> is becoming — after just one chapter.</p>
      </div>
      <div style={card}>
        <h3 style={{ color: "#d4a017", marginBottom: 10, fontSize: 11, fontVariant: "small-caps", letterSpacing: 1, textAlign: "center" }}>{heroName}'s Stats — End of Chapter I</h3>
        {Object.entries(stats).sort((a,b)=>b[1]-a[1]).map(([n,v])=><StatBar key={n} name={n} value={v} change={0}/>)}
        <div style={{ marginTop: 14, padding: 12, background: "rgba(255,248,220,0.04)", borderRadius: 9, border: "1px solid rgba(212,160,23,0.13)" }}>
          <p style={{ fontSize: 9, color: "#d4a017", marginBottom: 5, fontVariant: "small-caps", letterSpacing: 1 }}>Remember</p>
          <p style={{ fontSize: 12, color: "#a08060", lineHeight: 1.85, margin: 0 }}>These stats show what you've practiced — not what you're worth. Every hero has a different balance. A hero strong in Empathy isn't weaker than one strong in Cunning. The most important thing: <em>you</em> chose, and <em>you</em> can see why.</p>
        </div>
        <button onClick={reset} style={{ marginTop: 12, background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.3)", borderRadius: 7, padding: "10px 16px", color: "#d4a017", fontSize: 13, fontFamily: "Georgia,serif", cursor: "pointer", width: "100%" }}>
          Play Again with Different Choices ↩
        </button>
      </div>
    </div>
  );

  return null;
}
