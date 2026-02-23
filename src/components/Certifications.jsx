import { data } from '../data';

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="reveal">
          <div className="section-label">// credentials</div>
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider" />
        </div>
        <div className="cert-row reveal">
          {data.certifications.map((cert, i) => (
            <div className="cert-card" key={i}>
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
