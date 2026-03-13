import React, { useState, useEffect } from "react";
import { bg, goldBtn } from "../styles";
import ProphecyCard from "../components/ProphecyCard";
import { getPropheciesForReveal } from "../engine/prophecy";

/**
 * Post-chapter prophecy reveal.
 * Shows all drawn prophecy cards and flips them to reveal what they meant.
 */
export default function ProphecyRevealScreen({
  drawnProphecies, chaptersToReveal, onContinue,
}) {
  const [revealedCount, setRevealedCount] = useState(0);
  const prophecies = getPropheciesForReveal(drawnProphecies, chaptersToReveal);

  useEffect(() => {
    if (revealedCount >= prophecies.length) return;
    const timer = setTimeout(() => {
      setRevealedCount(c => c + 1);
    }, 1500);
    return () => clearTimeout(timer);
  }, [revealedCount, prophecies.length]);

  if (prophecies.length === 0) {
    return (
      <div style={bg}>
        <div style={{ textAlign: "center", padding: 32 }}>
          <div style={{ fontSize: 16, color: "#a08060", fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 16 }}>
            No prophecies to reveal yet.
          </div>
          <button onClick={onContinue} style={goldBtn}>Continue</button>
        </div>
      </div>
    );
  }

  const allRevealed = revealedCount >= prophecies.length;

  return (
    <div style={bg}>
      <div style={{
        maxWidth: 660, width: "100%",
      }}>
        <div style={{
          textAlign: "center", marginBottom: 20,
        }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🔮</div>
          <div style={{
            fontSize: 18, fontWeight: "bold", color: "#d4a017",
            fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 6,
          }}>
            The Prophecies Revealed
          </div>
          <div style={{
            fontSize: 16, color: "#a08060", fontStyle: "italic",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}>
            Now you understand what the Oracle was telling you.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {prophecies.map((p, i) => (
            <div key={`${p.chapter}-${i}`}>
              <div style={{
                fontSize: 13, color: "#706050", marginBottom: 4,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}>
                Chapter {p.chapter}
              </div>
              <ProphecyCard
                text={p.prophecyText}
                revealText={p.revealText}
                revealed={i < revealedCount}
              />
            </div>
          ))}
        </div>

        {allRevealed && (
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button onClick={onContinue} style={goldBtn}>Continue</button>
          </div>
        )}
      </div>
    </div>
  );
}
