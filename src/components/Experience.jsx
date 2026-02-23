import { data } from '../data';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="reveal">
          <div className="section-label">// work history</div>
          <h2 className="section-title">Experience</h2>
          <div className="section-divider" />
        </div>

        <div className="timeline">
          {data.experience.map((exp, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className="timeline-dot" />
              <div className="exp-card">
                <div className="exp-title">{exp.title}</div>
                <div className="exp-org">{exp.org}</div>
                <div className="exp-date">{exp.date}</div>
                <div className="exp-desc">{exp.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
