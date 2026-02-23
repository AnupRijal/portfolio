import { data } from '../data';

export default function Publications() {
  return (
    <section id="publications">
      <div className="container">
        <div className="reveal pub-header">
          <div>
            <div className="section-label">// peer-reviewed work</div>
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Research & Publications</h2>
            <div className="section-divider" />
          </div>
          <a
            href="https://scholar.google.com/citations?user=kbW6qwIAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-outline"
            style={{ marginBottom: '3rem', whiteSpace: 'nowrap' }}
          >
            Google Scholar ↗
          </a>
        </div>

        {data.publications.map((pub, i) => (
          <div className="pub-card reveal" key={i}>
            <span className={`pub-badge badge-${pub.badgeType}`}>{pub.badge}</span>
            <div className="pub-title">{pub.title}</div>
            <div className="pub-date">{pub.ref}</div>
            <div className="pub-desc">{pub.desc}</div>
            <div>
              {pub.metrics.map((m, j) => (
                <span className="pub-metric" key={j}>{m}</span>
              ))}
            </div>
            {pub.paperLink && (
              <a href={pub.paperLink} target="_blank" rel="noopener noreferrer" className="pub-paper-link">
                Read Paper ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
