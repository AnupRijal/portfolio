import { data } from '../data';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <div className="section-label">// who am i</div>
            <h2 className="section-title">About Me</h2>
            <div className="section-divider" />
            <p className="about-text">
              Hey! I'm a <strong>CS + Data Science double major</strong> at Truman State University
              with a deep love for making machines smarter and also occasionally making them do silly things too.
            </p>
            <p className="about-text" style={{ marginTop: '1rem' }}>
              I do <strong>ML research</strong> (2 published papers and counting), build
              full-stack web apps, and spend my free time wondering if attention mechanisms
              truly understand anything. Currently hunting for <strong>MS/PhD opportunities</strong> in
              evolutionary computation and AI-based optimization.
            </p>
            <p className="about-text" style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.45)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem' }}>
              Also: Aspiring motovlogger | IT wizard | tutor
            </p>
          </div>

          <div className="reveal">
            <div className="row g-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {data.stats.map((s, i) => (
                <div className="stat-box" key={i}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
