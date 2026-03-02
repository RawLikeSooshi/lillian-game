import StatBar from "../components/StatBar";
import InventoryBar from "../components/InventoryBar";
import DiscussionGuide from "../components/DiscussionGuide";
import { INITIAL_STATS } from "../engine/stats";
import { bg, card, goldBtn, prophecyCard } from "../styles";

export default function ChapterEndScreen({ heroName, chapter, stats, ch1EndStats, ch2EndStats, flags, figure, identity, inventory, forkChoice, onContinue, onReset }) {
  if (chapter === 1) {
    return (
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
          {Object.entries(stats).sort((a, b) => b[1] - a[1]).map(([n, v]) => <StatBar key={n} name={n} value={v} change={0} />)}
          {inventory && inventory.length > 0 && (
            <div style={{ marginTop: 12, textAlign: "center" }}>
              <p style={{ fontSize: 9, color: "#d4a017", fontVariant: "small-caps", letterSpacing: 1, marginBottom: 6 }}>Inventory</p>
              <InventoryBar inventory={inventory} />
            </div>
          )}
          <div style={{ marginTop: 14, padding: 12, background: "rgba(255,248,220,0.04)", borderRadius: 9, border: "1px solid rgba(212,160,23,0.13)" }}>
            <p style={{ fontSize: 9, color: "#d4a017", marginBottom: 5, fontVariant: "small-caps", letterSpacing: 1 }}>Remember</p>
            <p style={{ fontSize: 12, color: "#a08060", lineHeight: 1.85, margin: 0 }}>These stats show what you've practiced — not what you're worth. Every hero has a different balance. A hero strong in Empathy isn't weaker than one strong in Cunning. The most important thing: <em>you</em> chose, and <em>you</em> can see why.</p>
          </div>
          {onContinue && (
            <button onClick={onContinue} style={{ ...goldBtn, width: "100%", marginTop: 12 }}>
              Continue to Chapter 2 →
            </button>
          )}
          <button onClick={onReset} style={{
            marginTop: 8,
            background: "rgba(212,160,23,0.1)",
            border: "1px solid rgba(212,160,23,0.3)",
            borderRadius: 7,
            padding: "10px 16px",
            color: "#d4a017",
            fontSize: 13,
            fontFamily: "Georgia,serif",
            cursor: "pointer",
            width: "100%",
          }}>
            Play Again with Different Choices ↩
          </button>
        </div>
      </div>
    );
  }

  if (chapter === 2) {
    return (
      <div style={bg}>
        {/* Myth figure reveal */}
        <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 50, marginBottom: 6 }}>{figure.symbol}</div>
          <div style={{ borderLeft: "2px solid rgba(212,160,23,0.3)", paddingLeft: 12, marginBottom: 14, textAlign: "left" }}>
            <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontStyle: "italic", fontSize: 14 }}>
              {figure.revealLine}
            </p>
          </div>
          <p style={{ fontSize: 10, color: "#a08060", letterSpacing: 2, fontVariant: "small-caps", marginBottom: 3 }}>
            Your guide was
          </p>
          <h2 style={{ fontSize: 22, color: "#d4a017", margin: "0 0 10px" }}>{figure.name}</h2>
        </div>

        {/* Hero Portrait */}
        <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 44, marginBottom: 6 }}>{identity.symbol}</div>
          <p style={{ fontSize: 9, color: "#a08060", letterSpacing: 3, fontVariant: "small-caps", marginBottom: 3 }}>The Oracle Now Sees You As</p>
          <h2 style={{ fontSize: 22, color: "#d4a017", margin: "0 0 10px" }}>{identity.title}</h2>
          <div style={{ background: "rgba(212,160,23,0.08)", borderRadius: 11, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontSize: 14 }}>{identity.desc}</p>
          </div>
        </div>

        {/* Stats comparison */}
        <div style={card}>
          <h3 style={{ color: "#d4a017", marginBottom: 12, fontSize: 11, fontVariant: "small-caps", letterSpacing: 1, textAlign: "center" }}>
            {heroName}'s Growth — Chapter I vs Chapter II
          </h3>
          {Object.entries(stats).sort((a, b) => b[1] - a[1]).map(([name, value]) => {
            const ch1Val = ch1EndStats ? ch1EndStats[name] : value;
            const delta = value - ch1Val;
            return (
              <div key={name} style={{ marginBottom: 12 }}>
                <StatBar name={name} value={value} change={0} />
                {delta !== 0 && (
                  <div style={{ textAlign: "right", marginTop: -4 }}>
                    <span style={{
                      fontSize: 10,
                      color: delta > 0 ? "#4caf8a" : "#e85d3a",
                      background: delta > 0 ? "rgba(76,175,138,0.1)" : "rgba(232,93,58,0.1)",
                      borderRadius: 4,
                      padding: "2px 6px",
                    }}>
                      Ch1: {ch1Val} → Ch2: {value} ({delta > 0 ? "+" : ""}{delta})
                    </span>
                  </div>
                )}
              </div>
            );
          })}

          {inventory && inventory.length > 0 && (
            <div style={{ marginTop: 12, textAlign: "center" }}>
              <p style={{ fontSize: 9, color: "#d4a017", fontVariant: "small-caps", letterSpacing: 1, marginBottom: 6 }}>Inventory</p>
              <InventoryBar inventory={inventory} />
            </div>
          )}

          <div style={{ marginTop: 14, padding: 12, background: "rgba(255,248,220,0.04)", borderRadius: 9, border: "1px solid rgba(212,160,23,0.13)" }}>
            <p style={{ fontSize: 9, color: "#d4a017", marginBottom: 5, fontVariant: "small-caps", letterSpacing: 1 }}>Remember</p>
            <p style={{ fontSize: 12, color: "#a08060", lineHeight: 1.85, margin: 0 }}>
              Two chapters in, and your hero is taking shape. The choices are getting harder — and so is the person making them. That's not an accident. That's growth.
            </p>
          </div>

          <DiscussionGuide flags={flags} stats={stats} chapter={2} />

          {onContinue && (
            <button onClick={onContinue} style={{ ...goldBtn, width: "100%", marginTop: 12 }}>
              Continue to Chapter 3 →
            </button>
          )}
          <button onClick={onReset} style={{
            marginTop: 8,
            background: "rgba(212,160,23,0.1)",
            border: "1px solid rgba(212,160,23,0.3)",
            borderRadius: 7,
            padding: "10px 16px",
            color: "#d4a017",
            fontSize: 13,
            fontFamily: "Georgia,serif",
            cursor: "pointer",
            width: "100%",
          }}>
            Play Again with Different Choices ↩
          </button>
        </div>
      </div>
    );
  }

  // Chapter 3 end
  const startStats = INITIAL_STATS;
  const pathLabel = flags.messengerPath_chosen ? "the messenger's path" : "the arena's path";

  return (
    <div style={bg}>
      {/* Narrative coda */}
      <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
        <div style={{ borderLeft: "2px solid rgba(212,160,23,0.3)", paddingLeft: 12, textAlign: "left" }}>
          <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontStyle: "italic", fontSize: 14 }}>
            You leave Corinth the way you arrived — on foot, alone with your thoughts. But something has shifted.
            You chose {pathLabel}, and what happened on it changed how you see the world.
            Three chapters in, and the road ahead is no longer just a road. It's the shape of who you're becoming.
          </p>
        </div>
      </div>

      {/* Hero Portrait */}
      <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
        <div style={{ fontSize: 44, marginBottom: 6 }}>{identity.symbol}</div>
        <p style={{ fontSize: 9, color: "#a08060", letterSpacing: 3, fontVariant: "small-caps", marginBottom: 3 }}>The Oracle Now Sees You As</p>
        <h2 style={{ fontSize: 22, color: "#d4a017", margin: "0 0 10px" }}>{identity.title}</h2>
        <div style={{ background: "rgba(212,160,23,0.08)", borderRadius: 11, padding: "12px 14px", marginBottom: 10 }}>
          <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontSize: 14 }}>{identity.desc}</p>
        </div>
        <p style={{ fontSize: 12, color: "#a08060" }}>This is who you are after three chapters. It will keep changing.</p>
      </div>

      {/* Stats timeline */}
      <div style={card}>
        <h3 style={{ color: "#d4a017", marginBottom: 12, fontSize: 11, fontVariant: "small-caps", letterSpacing: 1, textAlign: "center" }}>
          {heroName}'s Journey — Stats Timeline
        </h3>
        {Object.entries(stats).sort((a, b) => b[1] - a[1]).map(([name, value]) => {
          const s0 = startStats[name];
          const s1 = ch1EndStats ? ch1EndStats[name] : s0;
          const s2 = ch2EndStats ? ch2EndStats[name] : s1;
          return (
            <div key={name} style={{ marginBottom: 14 }}>
              <StatBar name={name} value={value} change={0} />
              <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 2, flexWrap: "wrap" }}>
                {[
                  { label: "Start", val: s0 },
                  { label: "Ch1", val: s1 },
                  { label: "Ch2", val: s2 },
                  { label: "Ch3", val: value },
                ].map((pt, i) => (
                  <span key={i} style={{
                    fontSize: 9,
                    color: "#a08060",
                    background: "rgba(255,248,220,0.04)",
                    borderRadius: 3,
                    padding: "1px 5px",
                  }}>
                    {pt.label}: {pt.val}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        {/* Inventory display */}
        {inventory && inventory.length > 0 && (
          <div style={{ marginTop: 14, padding: 12, background: "rgba(255,248,220,0.04)", borderRadius: 9, border: "1px solid rgba(212,160,23,0.13)", textAlign: "center" }}>
            <p style={{ fontSize: 9, color: "#d4a017", marginBottom: 8, fontVariant: "small-caps", letterSpacing: 1 }}>These travel with you into Chapter 4</p>
            <InventoryBar inventory={inventory} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", marginTop: 6 }}>
              {inventory.map(item => (
                <span key={item.id} style={{ fontSize: 11, color: "#c8b88a" }}>
                  {item.icon} {item.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Prophecy */}
        <div style={{ ...prophecyCard, marginTop: 16, marginBottom: 16 }}>
          <p style={{
            color: "#e8e0d0",
            fontSize: 16,
            lineHeight: 2.2,
            fontStyle: "italic",
            letterSpacing: 1,
            margin: 0,
          }}>
            "You will face a choice that cannot be made with courage alone, or wisdom alone, or any single virtue. The hero who knows herself will find the answer. The hero who does not will make the answer for everyone else."
          </p>
          <p style={{ color: "#a08060", fontSize: 11, marginTop: 12, margin: "12px 0 0" }}>
            You heard this in Chapter 1. You've been answering it since then.
          </p>
        </div>

        <DiscussionGuide flags={flags} stats={stats} chapter={3} />

        <button onClick={onReset} style={{
          marginTop: 12,
          background: "rgba(212,160,23,0.1)",
          border: "1px solid rgba(212,160,23,0.3)",
          borderRadius: 7,
          padding: "10px 16px",
          color: "#d4a017",
          fontSize: 13,
          fontFamily: "Georgia,serif",
          cursor: "pointer",
          width: "100%",
        }}>
          Play Again with Different Choices ↩
        </button>
      </div>
    </div>
  );
}
