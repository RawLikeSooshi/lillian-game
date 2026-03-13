import React, { useState } from "react";
import { sacrificeCard, goldBtn } from "../styles";

/**
 * Two-step confirmation for irreversible sacrifices.
 * Red-tinted warning card, distinct from normal gold theme.
 */
export default function SacrificeConfirm({ sacrifice, onConfirm, onCancel }) {
  const [step, setStep] = useState(1); // 1 = first warning, 2 = final confirm

  if (!sacrifice) return null;

  return (
    <div style={sacrificeCard}>
      {step === 1 ? (
        <>
          <div
            style={{
              fontSize: 12,
              color: "#b04040",
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Sacrifice
          </div>

          <div style={{ textAlign: "center", fontSize: 32, marginBottom: 8 }}>
            {sacrifice.icon}
          </div>

          <div
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#e8d8b0",
              textAlign: "center",
              marginBottom: 8,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            {sacrifice.label}
          </div>

          <div
            style={{
              fontSize: 16,
              color: "#c8b88a",
              textAlign: "center",
              marginBottom: 16,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.5,
            }}
          >
            {sacrifice.description}
          </div>

          {sacrifice.gain && (
            <div
              style={{
                fontSize: 16,
                color: "#4caf8a",
                textAlign: "center",
                marginBottom: 16,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
              }}
            >
              In return: {sacrifice.gain}
            </div>
          )}

          <div
            style={{
              fontSize: 16,
              color: "#b04040",
              textAlign: "center",
              marginBottom: 16,
              fontWeight: "bold",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            This cannot be undone.
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button
              onClick={onCancel}
              style={{
                ...goldBtn,
                background: "transparent",
                border: "1px solid rgba(200,184,138,0.3)",
                color: "#c8b88a",
              }}
            >
              Keep it
            </button>
            <button
              onClick={() => setStep(2)}
              style={{
                ...goldBtn,
                background: "linear-gradient(135deg,#b04040,#802020)",
                color: "#ffd8d8",
              }}
            >
              Sacrifice
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              fontSize: 16,
              color: "#e8d8b0",
              textAlign: "center",
              marginBottom: 16,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.6,
            }}
          >
            Are you certain? Once given, it is gone forever.
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button
              onClick={() => setStep(1)}
              style={{
                ...goldBtn,
                background: "transparent",
                border: "1px solid rgba(200,184,138,0.3)",
                color: "#c8b88a",
              }}
            >
              Wait...
            </button>
            <button
              onClick={onConfirm}
              style={{
                ...goldBtn,
                background: "linear-gradient(135deg,#b04040,#802020)",
                color: "#ffd8d8",
              }}
            >
              I am certain.
            </button>
          </div>
        </>
      )}
    </div>
  );
}
