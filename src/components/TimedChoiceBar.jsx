import React, { useState, useEffect, useRef } from "react";
import { timerBar } from "../styles";
import { playTimerTick, playTimerUrgent, playTimerExpire } from "../engine/sounds";

/**
 * Depleting timer bar for timed combat choices.
 * Gold gradient fades to grey. Pulses at 3 seconds remaining.
 * Calls onExpire when time runs out.
 */
export default function TimedChoiceBar({ duration = 10, active = true, onExpire, timerExtension = 0 }) {
  const totalDuration = duration + timerExtension;
  const [remaining, setRemaining] = useState(totalDuration);
  const intervalRef = useRef(null);
  const expiredRef = useRef(false);

  useEffect(() => {
    if (!active) return;
    setRemaining(totalDuration);
    expiredRef.current = false;

    let lastSecond = totalDuration;
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        const next = Math.max(0, prev - 0.1);
        const sec = Math.ceil(next);
        if (sec < lastSecond && next > 0) {
          lastSecond = sec;
          if (next <= 3) playTimerUrgent();
          else playTimerTick();
        }
        if (next <= 0 && !expiredRef.current) {
          expiredRef.current = true;
          playTimerExpire();
          setTimeout(() => onExpire?.(), 0);
        }
        return next;
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [active, totalDuration]);

  const pct = (remaining / totalDuration) * 100;
  const isUrgent = remaining <= 3 && remaining > 0;

  const barColor =
    remaining <= 0
      ? "#555"
      : isUrgent
        ? "#e85d3a"
        : `linear-gradient(90deg, #d4a017 0%, #a07010 ${pct}%)`;

  return (
    <div style={timerBar}>
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: typeof barColor === "string" && barColor.startsWith("linear")
            ? barColor
            : barColor,
          borderRadius: 3,
          transition: "width 0.1s linear",
          boxShadow: isUrgent ? "0 0 8px rgba(232,93,58,0.6)" : "none",
          animation: isUrgent ? "pulse 0.5s ease-in-out infinite" : "none",
        }}
      />
      <div
        style={{
          textAlign: "right",
          fontSize: 13,
          color: isUrgent ? "#e85d3a" : "#706050",
          marginTop: 2,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {remaining > 0 ? `${Math.ceil(remaining)}s` : "Time!"}
      </div>
    </div>
  );
}
