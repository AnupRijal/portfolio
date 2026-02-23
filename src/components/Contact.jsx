import { data } from '../data';

export default function Contact() {
  const { contact } = data;

  const handleEmail = (e) => {
    e.preventDefault();
    window.location = 'mai' + 'lto:' + 'anup.rijal247' + '@' + 'gmail.com';
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="reveal">
          <div className="section-label">// let's talk</div>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" />
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
              I'm actively looking for <strong>PhD opportunities</strong> in ML, evolutionary computation,
              and AI optimization — and always happy to chat about research, code, or motorcycles.
            </p>

            <a href="#" onClick={handleEmail} className="contact-link">
              <div>
                <div className="link-text">{contact.email}</div>
                <div className="link-label">Email</div>
              </div>
            </a>

            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <div>
                <div className="link-text">{contact.linkedinLabel}</div>
                <div className="link-label">LinkedIn</div>
              </div>
            </a>

            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <div>
                <div className="link-text">{contact.githubLabel}</div>
                <div className="link-label">GitHub</div>
              </div>
            </a>

            <a href={contact.scholar} target="_blank" rel="noopener noreferrer" className="contact-link">
              <div>
                <div className="link-text">Google Scholar</div>
                <div className="link-label">Research Profile</div>
              </div>
            </a>
          </div>

          <div className="reveal" style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Bungee', cursive",
              fontSize: 'clamp(3rem,8vw,6rem)',
              background: 'linear-gradient(135deg,#00f0ff,#7b2fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
              marginBottom: '1rem',
            }}>
              LET'S<br />BUILD<br />SOMETHING
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
              Open to MS/PhD programs · Research collabs · Internships
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
