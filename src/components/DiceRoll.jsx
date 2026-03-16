import React, { useState, useEffect } from "react";
import { OUTCOME_COLORS } from "../engine/dice";
import { playDiceRollStart, playDiceLand } from "../engine/sounds";

/**
 * Animated D20 roll display.
 * Shows the die spinning through random numbers, then landing on the result.
 * Flashes gold on nat 20, red on nat 1.
 */
export default function DiceRoll({ roll, modifier, dc, stat, onComplete }) {
  const [displayNumber, setDisplayNumber] = useState(1);
  const [phase, setPhase] = useState("spinning"); // spinning | landed | done

  useEffect(() => {
    if (!roll) return;

    // Spin through random numbers for 1.2 seconds
    playDiceRollStart();
    const spinInterval = setInterval(() => {
      setDisplayNumber(Math.floor(Math.random() * 20) + 1);
    }, 60);

    const landTimer = setTimeout(() => {
      clearInterval(spinInterval);
      setDisplayNumber(roll.raw);
      setPhase("landed");
      playDiceLand(roll.raw);
    }, 1200);

    const doneTimer = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 2500);

    return () => {
      clearInterval(spinInterval);
      clearTimeout(landTimer);
      clearTimeout(doneTimer);
    };
  }, [roll]);

  if (!roll) return null;

  const isNat20 = roll.raw === 20;
  const isNat1 = roll.raw === 1;
  const total = roll.raw + (modifier || 0);
  const outcome = isNat20 ? "crit" : isNat1 ? "fail" : total >= dc ? "success" : total >= dc - 3 ? "partial" : "fail";

  const dieColor =
    phase === "landed" || phase === "done"
      ? isNat20 ? "#ffd700" : isNat1 ? "#e85d3a" : "#e8d8b0"
      : "#c8b88a";

  const dieGlow =
    phase === "landed" && isNat20
      ? "0 0 20px rgba(255,215,0,0.6)"
      : phase === "landed" && isNat1
        ? "0 0 20px rgba(232,93,58,0.6)"
        : "none";

  return (
    <div style={{ textAlign: "center", margin: "16px 0" }}>
      {/* The die */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 72,
          height: 72,
          borderRadius: 12,
          border: `2px solid ${dieColor}`,
          background: "rgba(0,0,0,0.4)",
          boxShadow: dieGlow,
          fontSize: 32,
          fontWeight: "bold",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: dieColor,
          transition: "all 0.3s",
          transform: phase === "spinning" ? `rotate(${displayNumber * 18}deg)` : "rotate(0deg)",
        }}
      >
        {displayNumber}
      </div>

      {/* Roll breakdown (appears after landing) */}
      {(phase === "landed" || phase === "done") && (
        <div
          style={{
            marginTop: 12,
            fontSize: 16,
            color: "#a08060",
            opacity: phase === "done" ? 1 : 0.8,
            transition: "opacity 0.5s",
          }}
        >
          <span style={{ color: dieColor }}>D20 ({roll.raw})</span>
          {stat && modifier !== undefined && (
            <span>
              {" + "}
              <span style={{ color: "#c8b88a" }}>
                {stat} ({modifier >= 0 ? "+" : ""}{modifier})
              </span>
            </span>
          )}
          <span style={{ color: "#a08060" }}> = {total}</span>
          {dc && <span style={{ color: "#706050" }}> vs DC {dc}</span>}
          {isNat20 && (
            <div style={{ color: "#ffd700", fontWeight: "bold", marginTop: 6, fontSize: 16 }}>
              NATURAL 20!
            </div>
          )}
          {isNat1 && (
            <div style={{ color: "#e85d3a", fontWeight: "bold", marginTop: 6 }}>
              Natural 1...
            </div>
          )}
          {!isNat20 && !isNat1 && phase === "done" && (
            <div style={{ color: OUTCOME_COLORS[outcome], marginTop: 6, fontWeight: "bold" }}>
              {outcome === "success" ? "Success!" : outcome === "partial" ? "Partial Success" : "Failed"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
