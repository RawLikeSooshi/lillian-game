import React, { useState, useEffect } from "react";
import { bg, goldBtn } from "../styles";

/**
 * Prologue — four short narrative pages before Chapter 1.
 * No choices. Just story. Text fades in paragraph by paragraph.
 */
export default function PrologueScreen({ pages, onComplete }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [key, setKey] = useState(0); // Force re-mount for animations

  const isLast = pageIndex >= pages.length - 1;

  const handleNext = () => {
    if (isLast) {
      onComplete();
      return;
    }
    setFading(true);
    setTimeout(() => {
      setPageIndex(i => i + 1);
      setKey(k => k + 1);
      setFading(false);
    }, 500);
  };

  const paragraphs = pages[pageIndex].split("\n").filter(l => l.trim());

  return (
    <div style={{
      ...bg,
      justifyContent: "center",
      minHeight: "100vh",
    }}>
      <div style={{
        maxWidth: 580, width: "100%", padding: "48px 28px",
        boxSizing: "border-box",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.5s ease",
      }}>
        {/* Page indicator */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 10,
          marginBottom: 40,
        }}>
          {pages.map((_, i) => (
            <div key={i} style={{
              width: i === pageIndex ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: i === pageIndex
                ? "rgba(var(--ch-accent-rgb),0.8)"
                : i < pageIndex
                  ? "rgba(var(--ch-accent-rgb),0.3)"
                  : "rgba(160,128,96,0.15)",
              transition: "all 0.4s ease",
            }} />
          ))}
        </div>

        {/* Story text — each paragraph fades in with stagger */}
        <div key={key} style={{ textAlign: "left", minHeight: 220 }}>
          {paragraphs.map((line, i) => (
            <p key={i} style={{
              fontSize: 17,
              color: "#e8d8b0",
              lineHeight: 2,
              margin: "0 0 14px",
              animation: `fadeInUp 0.7s ease ${0.2 + i * 0.15}s both`,
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Continue button */}
        <div style={{
          textAlign: "center",
          animation: `fadeIn 0.6s ease ${0.2 + paragraphs.length * 0.15 + 0.3}s both`,
        }}>
          <button onClick={handleNext} style={{
            ...goldBtn,
            marginTop: 28,
            background: isLast
              ? "rgba(var(--ch-accent-rgb),0.15)"
              : "rgba(160,128,96,0.08)",
            border: isLast
              ? "1px solid rgba(var(--ch-accent-rgb),0.4)"
              : "1px solid rgba(160,128,96,0.25)",
            color: isLast ? "var(--ch-accent)" : "#a08060",
            fontSize: 16,
            padding: "14px 32px",
          }}>
            {isLast ? "Begin Your Journey →" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
