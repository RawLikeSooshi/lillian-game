import StatBar from "../components/StatBar";
import InventoryBar from "../components/InventoryBar";
import DiscussionGuide from "../components/DiscussionGuide";
import ReputationBadge from "../components/ReputationBadge";
import OathBadge from "../components/OathBadge";
import NemesisBanner from "../components/NemesisBanner";
import { INITIAL_STATS } from "../engine/stats";
import { ECHO_REVELATIONS } from "../engine/memoryEcho";
import { bg, card, goldBtn, prophecyCard } from "../styles";

const CHAPTER_TITLES = {
  1: "The Road to Delphi",
  2: "The Road from Delphi",
  3: "The City of Corinth",
  4: "The Straits of Messina",
  5: "The Garden of the Hesperides",
  6: "The Halls of Hades",
  7: "The Forge of Hephaestus",
  8: "The Labyrinth of Crete",
  9: "The Siege of Athens",
  10: "The Daughter of Thunder",
};

export default function ChapterEndScreen({
  heroName, chapter, stats, ch1EndStats, ch2EndStats, chapterEndStats = {},
  flags, figure, identity, inventory, forkChoice,
  reputation, worldState, nemesis, echoProgress, drawnProphecies, oaths,
  onContinue, onReset,
}) {
  const startStats = INITIAL_STATS;

  // Build stats timeline from chapterEndStats
  const getChapterStats = (ch) => chapterEndStats[ch] || null;

  // ── Chapter-specific endings for 1, 2, 3 (preserved) ──
  if (chapter === 1) {
    return (
      <div style={bg}>
        <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 50, marginBottom: 6 }}>{identity.symbol}</div>
          <p style={{ fontSize: 12, color: "#a08060", letterSpacing: 3, fontVariant: "small-caps", marginBottom: 3 }}>The Oracle Sees You As</p>
          <h2 style={{ fontSize: 22, color: "#d4a017", margin: "0 0 10px" }}>{identity.title}</h2>
          <div style={{ background: "rgba(212,160,23,0.08)", borderRadius: 11, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontSize: 16 }}>{identity.desc}</p>
          </div>
          <p style={{ fontSize: 16, color: "#a08060" }}>This is who <em>{heroName}</em> is becoming — after just one chapter.</p>
        </div>
        <div style={card}>
          <h3 style={{ color: "#d4a017", marginBottom: 10, fontSize: 13, fontVariant: "small-caps", letterSpacing: 1, textAlign: "center" }}>{heroName}'s Stats — End of Chapter I</h3>
          {Object.entries(stats).sort((a, b) => b[1] - a[1]).map(([n, v]) => <StatBar key={n} name={n} value={v} change={0} />)}
          {inventory?.length > 0 && (
            <div style={{ marginTop: 12, textAlign: "center" }}>
              <p style={{ fontSize: 12, color: "#d4a017", fontVariant: "small-caps", letterSpacing: 1, marginBottom: 6 }}>Inventory</p>
              <InventoryBar inventory={inventory} />
            </div>
          )}

          {/* Echo Progress */}
          {echoProgress > 0 && <EchoProgressBar echoProgress={echoProgress} />}

          <ChapterEndButtons chapter={chapter} onContinue={onContinue} onReset={onReset} />
        </div>
      </div>
    );
  }

  if (chapter === 2) {
    return (
      <div style={bg}>
        <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 50, marginBottom: 6 }}>{figure.symbol}</div>
          <div style={{ borderLeft: "2px solid rgba(212,160,23,0.3)", paddingLeft: 12, marginBottom: 14, textAlign: "left" }}>
            <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontStyle: "italic", fontSize: 16 }}>{figure.revealLine}</p>
          </div>
          <p style={{ fontSize: 12, color: "#a08060", letterSpacing: 2, fontVariant: "small-caps", marginBottom: 3 }}>Your guide was</p>
          <h2 style={{ fontSize: 22, color: "#d4a017", margin: "0 0 10px" }}>{figure.name}</h2>
        </div>

        <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 44, marginBottom: 6 }}>{identity.symbol}</div>
          <p style={{ fontSize: 12, color: "#a08060", letterSpacing: 3, fontVariant: "small-caps", marginBottom: 3 }}>The Oracle Now Sees You As</p>
          <h2 style={{ fontSize: 22, color: "#d4a017", margin: "0 0 10px" }}>{identity.title}</h2>
          <div style={{ background: "rgba(212,160,23,0.08)", borderRadius: 11, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontSize: 16 }}>{identity.desc}</p>
          </div>
        </div>

        <div style={card}>
          <StatsComparison heroName={heroName} stats={stats} ch1EndStats={ch1EndStats} chapter={2} />
          {inventory?.length > 0 && <InventorySection inventory={inventory} nextChapter={3} />}

          {/* Nemesis */}
          {nemesis && <NemesisSection nemesis={nemesis} />}
          {/* Echo Progress */}
          {echoProgress > 0 && <EchoProgressBar echoProgress={echoProgress} />}
          {/* Reputation */}
          {reputation && <ReputationSection reputation={reputation} />}

          <DiscussionGuide flags={flags} stats={stats} chapter={2} />
          <ChapterEndButtons chapter={chapter} onContinue={onContinue} onReset={onReset} />
        </div>
      </div>
    );
  }

  if (chapter === 3) {
    const pathLabel = flags.messengerPath_chosen ? "the messenger's path" : "the arena's path";
    return (
      <div style={bg}>
        <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
          <div style={{ borderLeft: "2px solid rgba(212,160,23,0.3)", paddingLeft: 12, textAlign: "left" }}>
            <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontStyle: "italic", fontSize: 16 }}>
              You leave Corinth the way you arrived — on foot, alone with your thoughts. But something has shifted.
              You chose {pathLabel}, and what happened on it changed how you see the world.
              Three chapters in, and the road ahead is no longer just a road. It's the shape of who you're becoming.
            </p>
          </div>
        </div>

        <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 44, marginBottom: 6 }}>{identity.symbol}</div>
          <p style={{ fontSize: 12, color: "#a08060", letterSpacing: 3, fontVariant: "small-caps", marginBottom: 3 }}>The Oracle Now Sees You As</p>
          <h2 style={{ fontSize: 22, color: "#d4a017", margin: "0 0 10px" }}>{identity.title}</h2>
          <div style={{ background: "rgba(212,160,23,0.08)", borderRadius: 11, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontSize: 16 }}>{identity.desc}</p>
          </div>
          <p style={{ fontSize: 16, color: "#a08060" }}>This is who you are after three chapters. It will keep changing.</p>
        </div>

        <div style={card}>
          <StatsTimeline heroName={heroName} stats={stats} startStats={startStats} chapterEndStats={chapterEndStats} ch1EndStats={ch1EndStats} ch2EndStats={ch2EndStats} chapter={3} />
          {inventory?.length > 0 && <InventorySection inventory={inventory} nextChapter={4} />}

          {/* New systems summary */}
          {nemesis && <NemesisSection nemesis={nemesis} />}
          {echoProgress > 0 && <EchoProgressBar echoProgress={echoProgress} />}
          {reputation && <ReputationSection reputation={reputation} />}
          {oaths?.length > 0 && <OathsSection oaths={oaths} />}

          <DiscussionGuide flags={flags} stats={stats} chapter={3} />
          <ChapterEndButtons chapter={chapter} onContinue={onContinue} onReset={onReset} />
        </div>
      </div>
    );
  }

  // ── Generic Chapter End (4-10) ──
  return (
    <div style={bg}>
      {/* Narrative coda */}
      <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
        <div style={{ fontSize: 13, color: "#706050", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
          End of Chapter {chapter}
        </div>
        <h2 style={{ fontSize: 20, color: "#d4a017", margin: "0 0 12px", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          {CHAPTER_TITLES[chapter] || `Chapter ${chapter}`}
        </h2>
        <div style={{ borderLeft: "2px solid rgba(212,160,23,0.3)", paddingLeft: 12, textAlign: "left" }}>
          <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontStyle: "italic", fontSize: 16 }}>
            {getChapterCoda(chapter, flags, heroName)}
          </p>
        </div>
      </div>

      {/* Hero Portrait */}
      <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
        <div style={{ fontSize: 44, marginBottom: 6 }}>{identity.symbol}</div>
        <p style={{ fontSize: 12, color: "#a08060", letterSpacing: 3, fontVariant: "small-caps", marginBottom: 3 }}>
          The Oracle Now Sees You As
        </p>
        <h2 style={{ fontSize: 22, color: "#d4a017", margin: "0 0 10px" }}>{identity.title}</h2>
        <div style={{ background: "rgba(212,160,23,0.08)", borderRadius: 11, padding: "12px 14px" }}>
          <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontSize: 16 }}>{identity.desc}</p>
        </div>
      </div>

      {/* Stats & Systems */}
      <div style={card}>
        <StatsTimeline heroName={heroName} stats={stats} startStats={startStats} chapterEndStats={chapterEndStats} ch1EndStats={ch1EndStats} ch2EndStats={ch2EndStats} chapter={chapter} />
        {inventory?.length > 0 && <InventorySection inventory={inventory} nextChapter={chapter + 1} />}

        {/* Echo Progress — always show if > 0 */}
        {echoProgress > 0 && <EchoProgressBar echoProgress={echoProgress} />}

        {/* Reputation */}
        {reputation && <ReputationSection reputation={reputation} />}

        {/* Nemesis */}
        {nemesis && <NemesisSection nemesis={nemesis} />}

        {/* Oaths */}
        {oaths?.length > 0 && <OathsSection oaths={oaths} />}

        {/* Chapter 10 — final prophecy retrospective */}
        {chapter === 10 && (
          <div style={{ ...prophecyCard, marginTop: 16, marginBottom: 16 }}>
            <p style={{ color: "#e8e0d0", fontSize: 16, lineHeight: 2.2, fontStyle: "italic", letterSpacing: 1, margin: 0 }}>
              "This was {heroName}'s story. And it always will be."
            </p>
          </div>
        )}

        <ChapterEndButtons chapter={chapter} onContinue={onContinue} onReset={onReset} />
      </div>
    </div>
  );
}

// ── Reusable sub-components ──

function StatsComparison({ heroName, stats, ch1EndStats, chapter }) {
  return (
    <>
      <h3 style={{ color: "#d4a017", marginBottom: 12, fontSize: 13, fontVariant: "small-caps", letterSpacing: 1, textAlign: "center" }}>
        {heroName}'s Growth — Chapter {chapter - 1} vs Chapter {chapter}
      </h3>
      {Object.entries(stats).sort((a, b) => b[1] - a[1]).map(([name, value]) => {
        const prevVal = ch1EndStats ? ch1EndStats[name] : value;
        const delta = value - prevVal;
        return (
          <div key={name} style={{ marginBottom: 12 }}>
            <StatBar name={name} value={value} change={0} />
            {delta !== 0 && (
              <div style={{ textAlign: "right", marginTop: -4 }}>
                <span style={{
                  fontSize: 12,
                  color: delta > 0 ? "#4caf8a" : "#e85d3a",
                  background: delta > 0 ? "rgba(76,175,138,0.1)" : "rgba(232,93,58,0.1)",
                  borderRadius: 4, padding: "2px 6px",
                }}>
                  Ch{chapter - 1}: {prevVal} → Ch{chapter}: {value} ({delta > 0 ? "+" : ""}{delta})
                </span>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

function StatsTimeline({ heroName, stats, startStats, chapterEndStats, ch1EndStats, ch2EndStats, chapter }) {
  return (
    <>
      <h3 style={{ color: "#d4a017", marginBottom: 12, fontSize: 13, fontVariant: "small-caps", letterSpacing: 1, textAlign: "center" }}>
        {heroName}'s Journey — Stats Timeline
      </h3>
      {Object.entries(stats).sort((a, b) => b[1] - a[1]).map(([name, value]) => {
        // Build timeline points
        const points = [{ label: "Start", val: startStats[name] }];
        for (let i = 1; i < chapter; i++) {
          const chStats = chapterEndStats[i] || (i === 1 ? ch1EndStats : i === 2 ? ch2EndStats : null);
          if (chStats) points.push({ label: `Ch${i}`, val: chStats[name] });
        }
        points.push({ label: `Ch${chapter}`, val: value });

        return (
          <div key={name} style={{ marginBottom: 14 }}>
            <StatBar name={name} value={value} change={0} />
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 2, flexWrap: "wrap" }}>
              {points.map((pt, i) => (
                <span key={i} style={{
                  fontSize: 12, color: "#a08060",
                  background: "rgba(255,248,220,0.04)",
                  borderRadius: 3, padding: "1px 5px",
                }}>
                  {pt.label}: {pt.val}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

function InventorySection({ inventory, nextChapter }) {
  return (
    <div style={{ marginTop: 14, padding: 12, background: "rgba(255,248,220,0.04)", borderRadius: 9, border: "1px solid rgba(212,160,23,0.13)", textAlign: "center" }}>
      <p style={{ fontSize: 12, color: "#d4a017", marginBottom: 8, fontVariant: "small-caps", letterSpacing: 1 }}>
        {nextChapter <= 10 ? `These travel with you into Chapter ${nextChapter}` : "Your inventory"}
      </p>
      <InventoryBar inventory={inventory} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", marginTop: 6 }}>
        {inventory.map(item => (
          <span key={item.id} style={{ fontSize: 13, color: "#c8b88a" }}>
            {item.icon} {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function EchoProgressBar({ echoProgress }) {
  const current = ECHO_REVELATIONS.find(r => r.level === echoProgress);
  return (
    <div style={{ marginTop: 14, padding: 12, background: "rgba(139,109,181,0.06)", borderRadius: 9, border: "1px solid rgba(139,109,181,0.2)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <span style={{ fontSize: 12, color: "#8b6db5", fontVariant: "small-caps", letterSpacing: 1 }}>Memory Echo Progress</span>
        <span style={{ fontSize: 13, color: "#8b6db5" }}>{echoProgress}/10</span>
      </div>
      <div style={{ height: 6, background: "rgba(139,109,181,0.1)", borderRadius: 3, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${echoProgress * 10}%`, background: "#8b6db5", borderRadius: 3, transition: "width 0.5s" }} />
      </div>
      {current && (
        <p style={{ fontSize: 16, color: "#a08060", fontStyle: "italic", marginTop: 8, marginBottom: 0, lineHeight: 1.6 }}>
          Last vision: "{current.brief}"
        </p>
      )}
    </div>
  );
}

function ReputationSection({ reputation }) {
  const factions = Object.entries(reputation).filter(([, v]) => v !== 0);
  if (factions.length === 0) return null;
  return (
    <div style={{ marginTop: 14, padding: 12, background: "rgba(212,160,23,0.04)", borderRadius: 9, border: "1px solid rgba(212,160,23,0.13)" }}>
      <p style={{ fontSize: 12, color: "#d4a017", fontVariant: "small-caps", letterSpacing: 1, marginBottom: 8 }}>Reputation</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {factions.map(([faction, value]) => (
          <ReputationBadge key={faction} faction={faction} value={value} />
        ))}
      </div>
    </div>
  );
}

function NemesisSection({ nemesis }) {
  return (
    <div style={{ marginTop: 14 }}>
      <NemesisBanner nemesis={nemesis} />
    </div>
  );
}

function OathsSection({ oaths }) {
  return (
    <div style={{ marginTop: 14, padding: 12, background: "rgba(76,175,138,0.04)", borderRadius: 9, border: "1px solid rgba(76,175,138,0.15)" }}>
      <p style={{ fontSize: 12, color: "#4caf8a", fontVariant: "small-caps", letterSpacing: 1, marginBottom: 8 }}>Oaths Sworn</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {oaths.map(o => <OathBadge key={o.id} oathId={o.id} />)}
      </div>
    </div>
  );
}

function ChapterEndButtons({ chapter, onContinue, onReset }) {
  return (
    <>
      {onContinue && (
        <button onClick={onContinue} style={{ ...goldBtn, width: "100%", marginTop: 12 }}>
          {chapter < 10 ? `Continue to Chapter ${chapter + 1} →` : "See Your Ending →"}
        </button>
      )}
      <button onClick={onReset} style={{
        marginTop: 8,
        background: "rgba(212,160,23,0.1)",
        border: "1px solid rgba(212,160,23,0.3)",
        borderRadius: 7, padding: "10px 16px",
        color: "#d4a017", fontSize: 16,
        fontFamily: "'Cormorant Garamond', Georgia, serif", cursor: "pointer", width: "100%",
      }}>
        Play Again with Different Choices ↩
      </button>
    </>
  );
}

function getChapterCoda(chapter, flags, heroName) {
  const codas = {
    4: "The strait is behind you. Sicily stretches ahead. The sea tested you — not to break you, but to see what you're made of. The answer is still forming.",
    5: "The garden is a memory now — golden light, ancient trees, and a choice that changed something permanent. You know who you are. The question is what you'll do about it.",
    6: "You climbed out of the Underworld carrying truth heavier than any treasure. You are a daughter of Zeus. The world above looks different now — because you're different.",
    7: "The forge-fire still warms your skin. You carry something Hephaestus made for you — and something he told you that matters more than any weapon.",
    8: "The labyrinth is behind you. The Minotaur's fate is decided. Ariadne's thread — or yours — led you out. Some mazes are made of stone. Some are made of choices.",
    9: "Athens stands — battered but alive. The siege is over. The gods have spoken. And now, the mountain waits. Olympus. Home? Or just another destination?",
    10: `This was ${heroName}'s story. Every choice, every battle, every quiet moment by the fire. The Oracle's final lesson is this: the story was never about power, or gods, or destiny. It was about who you chose to be when no one was watching.`,
  };
  return codas[chapter] || `Chapter ${chapter} draws to a close. The road continues.`;
}
