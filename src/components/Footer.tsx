export function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper" style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <span
            aria-hidden
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
              height: "2rem",
              borderRadius: "0.85rem",
              background: "linear-gradient(135deg, var(--accent), #60a5fa)",
              color: "#0b0f1d",
              fontWeight: 700
            }}
          >
            H
          </span>
          <strong style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>Hggfg Collective</strong>
        </div>
        <p style={{ margin: 0 }}>
          Crafted for visionaries exploring the edges of immersive storytelling, speculative design, and harmonic
          intelligence. © {new Date().getFullYear()} Hggfg. All resonance preserved.
        </p>
      </div>
    </footer>
  );
}
