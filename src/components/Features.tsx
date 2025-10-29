import { featureClusters } from "@/lib/data";

export function Features() {
  return (
    <section id="features" aria-labelledby="features-heading" style={{ padding: "4.5rem 0" }}>
      <div className="wrapper">
        <div style={{ maxWidth: "58ch", marginBottom: "3rem" }}>
          <span className="pill">Signal constellation</span>
          <h2
            id="features-heading"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", margin: "1.25rem 0", lineHeight: 1.15 }}
          >
            Three interlocking systems shape the Hggfg continuum.
          </h2>
          <p>
            Each layer harmonizes real-time inputs with curated artistry, forming an adaptive experience engine that
            continuously refines itself around the participant.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.5rem" }}>
          {featureClusters.map((feature) => (
            <article key={feature.title} className="surface feature-card">
              <header style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                <span
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "0.95rem",
                    border: "1px solid rgba(124, 92, 255, 0.4)",
                    background: "rgba(124, 92, 255, 0.18)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                    color: "var(--accent-soft)",
                    fontSize: "1rem"
                  }}
                  aria-hidden
                >
                  {feature.label}
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </header>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
                {feature.points.map((point) => (
                  <li key={point} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <span
                      aria-hidden
                      style={{
                        width: "0.65rem",
                        height: "0.65rem",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, var(--accent), #60a5fa)",
                        boxShadow: "0 0 12px rgba(124, 92, 255, 0.4)"
                      }}
                    />
                    <span style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
