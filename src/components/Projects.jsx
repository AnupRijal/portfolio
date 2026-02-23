import { data } from '../data';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="reveal">
          <div className="section-label">// things i built</div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
        </div>

        <div className="project-grid">
          {data.projects.map((proj, i) => (
            <div className="project-card reveal" key={i}>
              <div className="project-emoji">{proj.emoji}</div>
              <div className="project-body">
                <div className="project-title">{proj.title}</div>
                <div className="project-desc">{proj.desc}</div>
                <div>
                  {proj.tags.map((tag, j) => (
                    <span className="tech-tag" key={j}>{tag}</span>
                  ))}
                </div>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    {proj.linkLabel}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
