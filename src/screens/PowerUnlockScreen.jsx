import React, { useState, useEffect } from "react";
import { bg, goldBtn } from "../styles";
import { STAT_COLORS } from "../engine/stats";
import { playPowerUnlock } from "../engine/sounds";

/**
 * Power Unlock Screen — Celebration when a stat crosses a power threshold.
 * Shows power name, description, stat-colored glow. Oracle explains.
 */
export default function PowerUnlockScreen({ power, onContinue }) {
  const [fadeIn, setFadeIn] = useState(false);
  const [showOracle, setShowOracle] = useState(false);

  useEffect(() => {
    playPowerUnlock();
    const t1 = setTimeout(() => setFadeIn(true), 200);
    const t2 = setTimeout(() => setShowOracle(true), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!power) return null;

  const color = STAT_COLORS[power.stat] || "#d4a017";
  const tierLabel = ["I", "II", "III"][power.tier - 1] || "?";

  return (
    <div style={bg}>
      <div style={{
        maxWidth: 660,
        width: "100%",
        textAlign: "center",
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease-out",
      }}>
        {/* Glow circle */}
        <div style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: `3px solid ${color}`,
          background: `${color}22`,
          boxShadow: `0 0 30px ${color}44, 0 0 60px ${color}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
          fontSize: 44,
        }}>
          {power.icon}
        </div>

        {/* Title */}
        <div style={{
          fontSize: 13, color: "#706050", letterSpacing: 2,
          textTransform: "uppercase", marginBottom: 6,
        }}>
          Divine Power Unlocked — Tier {tierLabel}
        </div>

        <div style={{
          fontSize: 22, fontWeight: "bold", color,
          fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 8,
        }}>
          {power.name}
        </div>

        <div style={{
          fontSize: 16, color: "#c8b88a", fontFamily: "'Cormorant Garamond', Georgia, serif",
          marginBottom: 20, lineHeight: 1.5,
        }}>
          {power.description}
        </div>

        {/* Stat source */}
        <div style={{
          fontSize: 13, color: "#706050",
          fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 20,
        }}>
          {power.stat} reached {power.threshold}
        </div>

        {/* Oracle explanation */}
        {showOracle && power.oracleExplanation && (
          <div style={{
            background: "rgba(107,143,212,0.08)",
            border: "1px solid rgba(107,143,212,0.2)",
            borderRadius: 12,
            padding: "14px 18px",
            marginBottom: 20,
            opacity: showOracle ? 1 : 0,
            transition: "opacity 0.7s",
          }}>
            <div style={{
              fontSize: 13, color: "#6b8fd4", marginBottom: 6,
              letterSpacing: 1, textTransform: "uppercase",
            }}>
              The Oracle's Insight
            </div>
            <div style={{
              fontSize: 16, color: "#c8b88a", fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic", lineHeight: 1.6,
            }}>
              {power.oracleExplanation}
            </div>
          </div>
        )}

        <button onClick={onContinue} style={goldBtn}>Continue</button>
      </div>
    </div>
  );
}
