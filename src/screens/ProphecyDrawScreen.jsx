import React, { useState, useEffect } from "react";
import { bg, goldBtn } from "../styles";
import ProphecyCard from "../components/ProphecyCard";
import DiceRoll from "../components/DiceRoll";
import { drawProphecies } from "../engine/prophecy";

/**
 * Chapter-opening prophecy card draw.
 * D20 + Wisdom determines how many cards (1-3).
 */
export default function ProphecyDrawScreen({
  prophecyPool, stats, onProphecyDrawComplete, chapter, heroName,
}) {
  const [phase, setPhase] = useState("intro"); // intro | rolling | revealing | done
  const [drawResult, setDrawResult] = useState(null);
  const [revealedCount, setRevealedCount] = useState(0);

  const handleStartDraw = () => {
    const result = drawProphecies(stats.Wisdom || 3, prophecyPool);
    setDrawResult(result);
    setPhase("rolling");
  };

  const handleRollComplete = () => {
    setPhase("revealing");
  };

  useEffect(() => {
    if (phase !== "revealing" || !drawResult) return;
    if (revealedCount >= drawResult.cards.length) return;

    const timer = setTimeout(() => {
      setRevealedCount(c => c + 1);
    }, 800);

    return () => clearTimeout(timer);
  }, [phase, revealedCount, drawResult]);

  const allRevealed = drawResult && revealedCount >= drawResult.cards.length;

  const handleContinue = () => {
    onProphecyDrawComplete?.({
      cards: drawResult.cards,
      roll: drawResult.roll,
    });
  };

  return (
    <div style={bg}>
      {/* Intro */}
      {phase === "intro" && (
        <div style={{
          background: "#0a0806",
          borderRadius: 16,
          padding: "40px 24px",
          maxWidth: 660,
          width: "100%",
          boxSizing: "border-box",
          textAlign: "center",
        }}>
          <div style={{ fontSize: 13, color: "#706050", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
            Chapter {chapter}
          </div>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🔮</div>
          <div style={{
            fontSize: 18, fontWeight: "bold", color: "#d4a017",
            fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 12,
          }}>
            The Oracle Whispers
          </div>
          <div style={{
            fontSize: 16, color: "#a08060", fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.6, marginBottom: 24,
          }}>
            Before the journey continues, fate deals its cards.
            The wiser you are, the more the Oracle reveals.
          </div>
          <button onClick={handleStartDraw} style={goldBtn}>
            Draw from the deck of fate
          </button>
        </div>
      )}

      {/* Rolling */}
      {phase === "rolling" && drawResult && (
        <div style={{
          background: "#0a0806",
          borderRadius: 16,
          padding: "32px 24px",
          maxWidth: 660,
          width: "100%",
          boxSizing: "border-box",
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 16, color: "#a08060", fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 8,
          }}>
            How many cards does fate reveal?
          </div>
          <DiceRoll
            roll={drawResult.roll}
            modifier={null}
            dc={null}
            stat="Wisdom"
            onComplete={handleRollComplete}
          />
          <div style={{
            fontSize: 16, color: "#d4a017", fontWeight: "bold", marginTop: 8,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}>
            {drawResult.count} card{drawResult.count !== 1 ? "s" : ""} drawn
          </div>
        </div>
      )}

      {/* Revealing cards */}
      {(phase === "revealing" || phase === "done") && drawResult && (
        <div style={{
          maxWidth: 660,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          <div style={{
            fontSize: 13, color: "#706050", letterSpacing: 2,
            textTransform: "uppercase", textAlign: "center", marginBottom: 4,
          }}>
            Fate's Cards
          </div>

          {drawResult.cards.map((card, i) => (
            <ProphecyCard
              key={card.id}
              text={card.text}
              delay={i * 800}
            />
          ))}

          {allRevealed && (
            <div style={{ textAlign: "center", marginTop: 12 }}>
              <div style={{
                fontSize: 16, color: "#706050", fontStyle: "italic",
                fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 12,
              }}>
                Remember these words. Their meaning will become clear.
              </div>
              <button onClick={handleContinue} style={goldBtn}>
                Begin
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
