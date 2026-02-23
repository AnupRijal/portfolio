import { data } from '../data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="reveal">
          <div className="section-label">// tech stack</div>
          <h2 className="section-title">Skills</h2>
          <div className="section-divider" />
        </div>
        <div className="skills-grid">
          {data.skills.map((group, i) => (
            <div className="skill-group reveal" key={i}>
              <div className="skill-group-title">{group.title}</div>
              {group.chips.map((chip, j) => (
                <span className="skill-chip" key={j}>{chip}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
