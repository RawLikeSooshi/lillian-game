import { useState, useEffect } from "react";
import { STAT_COLORS, STAT_ICONS } from "../engine/stats";

export default function StatBar({ name, value, change }) {
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
