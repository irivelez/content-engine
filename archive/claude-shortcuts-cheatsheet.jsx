import { useState } from "react";

const shortcuts = {
  browser: [
    { keys: "Cmd + K", action: "Start a new chat instantly", detail: "Skip the button. Fresh context in 0.3s." },
    { keys: "↑ Arrow Up", action: "Edit your last message", detail: "Fix instead of follow-up. Saves ~21x tokens." },
    { keys: "Cmd + .", action: "Stop generation mid-response", detail: "Kill wrong outputs instantly. Save tokens." },
    { keys: "Cmd + /", action: "Toggle sidebar on/off", detail: "Reclaim 24% screen space on a laptop." },
    { keys: "Cmd + Shift + L", action: "Switch dark/light theme", detail: "Instant toggle vs digging through settings." },
    { keys: "Shift + Enter", action: "New line without sending", detail: "Structure prompts properly before sending." },
  ],
  code: [
    { keys: "Esc Esc", action: "Rewind to any checkpoint", detail: "Full undo — code, conversation, or both." },
    { keys: "Ctrl + R", action: "Search prompt history", detail: "Fuzzy-search all past prompts across sessions." },
    { keys: "Option + T", action: "Toggle extended thinking", detail: "Per-message control. Save tokens on simple Qs." },
    { keys: "Ctrl + G", action: "Open prompt in your editor", detail: "Write complex prompts in VS Code, not terminal." },
    { keys: "Shift + Tab", action: "Cycle permission modes", detail: "Normal → Auto-accept → Plan mode." },
    { keys: "/btw", action: "Side question without interrupting", detail: "Ask mid-task. Main work keeps running." },
  ],
};

const ShortcutCard = ({ shortcut, index, accentColor }) => (
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      padding: "14px 16px",
      borderRadius: "12px",
      backgroundColor: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      transition: "all 0.2s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
      e.currentTarget.style.borderColor = accentColor + "44";
      e.currentTarget.style.transform = "translateY(-1px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    <div
      style={{
        minWidth: "28px",
        height: "28px",
        borderRadius: "8px",
        background: `linear-gradient(135deg, ${accentColor}22, ${accentColor}44)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "13px",
        fontWeight: "700",
        color: accentColor,
        flexShrink: 0,
      }}
    >
      {index + 1}
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
        <kbd
          style={{
            display: "inline-block",
            padding: "3px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "600",
            fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
            letterSpacing: "0.3px",
            background: `linear-gradient(135deg, ${accentColor}18, ${accentColor}30)`,
            color: accentColor,
            border: `1px solid ${accentColor}33`,
            whiteSpace: "nowrap",
          }}
        >
          {shortcut.keys}
        </kbd>
        <span style={{ fontSize: "14px", fontWeight: "600", color: "#E8E8ED" }}>
          {shortcut.action}
        </span>
      </div>
      <p style={{ margin: 0, fontSize: "12.5px", color: "#8E8EA0", lineHeight: "1.4" }}>
        {shortcut.detail}
      </p>
    </div>
  </div>
);

const SectionHeader = ({ icon, title, subtitle, accentColor }) => (
  <div style={{ marginBottom: "16px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          background: `linear-gradient(135deg, ${accentColor}22, ${accentColor}44)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
        }}
      >
        {icon}
      </div>
      <div>
        <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "700", color: "#F0F0F5", letterSpacing: "-0.3px" }}>
          {title}
        </h2>
        <p style={{ margin: 0, fontSize: "12px", color: "#8E8EA0" }}>{subtitle}</p>
      </div>
    </div>
  </div>
);

export default function ClaudeShortcutsCheatsheet() {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    { value: "29 min", label: "saved daily", color: "#D97706" },
    { value: "~35%", label: "fewer tokens", color: "#10B981" },
    { value: "120 hrs", label: "saved per year", color: "#8B5CF6" },
  ];

  return (
    <div
      style={{
        maxWidth: "880px",
        margin: "0 auto",
        padding: "32px 24px",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        backgroundColor: "#0D0D12",
        color: "#E8E8ED",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "12px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #D97706, #F59E0B)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
            }}
          >
            ⌨
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: "800",
              background: "linear-gradient(135deg, #F0F0F5, #8E8EA0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.5px",
            }}
          >
            12 Claude Shortcuts
          </h1>
        </div>
        <p style={{ margin: 0, fontSize: "14px", color: "#8E8EA0", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
          The shortcuts that cut a workflow in half. 6 for the browser, 6 for Claude Code.
        </p>
        <p style={{ margin: "8px 0 0", fontSize: "11px", color: "#555" }}>
          Mac shortcuts shown · Replace Cmd → Ctrl and Option → Alt on Windows/Linux
        </p>
      </div>

      {/* Stats bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "32px",
          flexWrap: "wrap",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              padding: "12px 24px",
              borderRadius: "12px",
              backgroundColor: hoveredStat === i ? stat.color + "18" : "rgba(255,255,255,0.04)",
              border: `1px solid ${hoveredStat === i ? stat.color + "44" : "rgba(255,255,255,0.08)"}`,
              textAlign: "center",
              transition: "all 0.2s ease",
              cursor: "default",
              minWidth: "130px",
            }}
            onMouseEnter={() => setHoveredStat(i)}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <div style={{ fontSize: "22px", fontWeight: "800", color: stat.color, letterSpacing: "-0.5px" }}>
              {stat.value}
            </div>
            <div style={{ fontSize: "12px", color: "#8E8EA0", marginTop: "2px" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Two columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        {/* Browser */}
        <div>
          <SectionHeader
            icon="🌐"
            title="Browser"
            subtitle="claude.ai"
            accentColor="#F59E0B"
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {shortcuts.browser.map((s, i) => (
              <ShortcutCard key={i} shortcut={s} index={i} accentColor="#F59E0B" />
            ))}
          </div>
        </div>

        {/* Claude Code */}
        <div>
          <SectionHeader
            icon="⌘"
            title="Claude Code"
            subtitle="terminal"
            accentColor="#8B5CF6"
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {shortcuts.code.map((s, i) => (
              <ShortcutCard key={i} shortcut={s} index={i + 6} accentColor="#8B5CF6" />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "28px",
          padding: "16px 20px",
          borderRadius: "12px",
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: "13px", color: "#8E8EA0", lineHeight: "1.5" }}>
          Source: <span style={{ color: "#E8E8ED" }}>@hanakoxbt</span> · Pick 3 shortcuts today. Add 3 more next week. In a month your hands move faster than your mouse.
        </p>
      </div>
    </div>
  );
}