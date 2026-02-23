import { useEffect, useRef, useState } from 'react';
import { data } from '../data';

function useTypewriter(lines) {
  const [text, setText] = useState('');
  const state = useRef({ li: 0, ci: 0, deleting: false });

  useEffect(() => {
    let timeout;
    const tick = () => {
      const { li, ci, deleting } = state.current;
      const current = lines[li];
      if (!deleting) {
        const next = ci + 1;
        setText(current.slice(0, next));
        if (next === current.length) {
          state.current = { li, ci: next, deleting: true };
          timeout = setTimeout(tick, 1800);
        } else {
          state.current = { li, ci: next, deleting: false };
          timeout = setTimeout(tick, 75);
        }
      } else {
        const next = ci - 1;
        setText(current.slice(0, next));
        if (next === 0) {
          state.current = { li: (li + 1) % lines.length, ci: 0, deleting: false };
          timeout = setTimeout(tick, 75);
        } else {
          state.current = { li, ci: next, deleting: true };
          timeout = setTimeout(tick, 40);
        }
      }
    };
    timeout = setTimeout(tick, 75);
    return () => clearTimeout(timeout);
  }, [lines]);

  return text;
}

function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    class Particle {
      constructor(x, y) {
        this.x = this.baseX = x;
        this.y = this.baseY = y;
        this.size = 2;
        this.density = Math.random() * 30 + 1;
        this.color = '#0d0a2a';
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      update() {
        const { x: mx, y: my } = mouseRef.current;
        const dx = mx - this.x, dy = my - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxD = 140;
        if (dist < maxD) {
          const force = (maxD - dist) / maxD;
          this.x -= (dx / dist) * force * this.density;
          this.y -= (dy / dist) * force * this.density;
          const r = Math.floor(force * 123);
          const g = Math.floor(200 * (1 - force) + 47 * force);
          const b = Math.floor(200 + force * 55);
          this.color = `rgb(${r},${g},${b})`;
          this.size = 2 + force * 6;
        } else {
          this.x += (this.baseX - this.x) / 10;
          this.y += (this.baseY - this.y) / 10;
          this.color = '#0d0a2a';
          this.size = 2;
        }
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = [];
      for (let y = 0; y < canvas.height; y += 30)
        for (let x = 0; x < canvas.width; x += 30)
          particlesRef.current.push(new Particle(x, y));
    };

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onResize = () => init();

    init();
    animate();
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas id="polkaBg" ref={canvasRef} />;
}

function DownloadDropdown() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    <div className={`btn-download-wrap ${open ? 'open' : ''}`}>
      <button
        className="btn-pill-download"
        onClick={e => { e.stopPropagation(); setOpen(o => !o); }}
      >
        View Resume / CV
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4l4 4 4-4" stroke="#00f0ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="download-menu">
        <a href={data.resume} target="_blank" rel="noopener noreferrer">Resume</a>
        <a href={data.cv} target="_blank" rel="noopener noreferrer">Full CV</a>
      </div>
    </div>
  );
}

export default function Hero() {
  const text = useTypewriter(data.typewriterLines);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="banner" id="home">
      <ParticleCanvas />

      <div className="banner-content">
        <h1>ANUP<br /><span>RIJAL</span></h1>
        <p className="typewriter">
          <span>{text}</span>
          <span className="cursor-blink">|</span>
        </p>
      </div>

      <div className="banner-image">
  <img src={`${process.env.PUBLIC_URL}/img/hero.png`} alt="Anup Rijal" />
</div>

      <div className="banner-desc container">
        <p>
          ML Researcher &amp; Full-Stack Developer crafting intelligent systems —
          from published deep learning architectures to hackathon-winning apps.
          Based in Kirksville, MO. Graduating May 2026.
        </p>
        <div className="bannerLinks mt-2 pb-2">
          <a href="#contact" className="btn-pill-outline" onClick={e => scrollTo(e, 'contact')}>Get In Touch</a>
          <a href="#projects" className="btn-pill-red" onClick={e => scrollTo(e, 'projects')}>View Projects</a>
          <DownloadDropdown />
        </div>
      </div>

      <div className="scroll-indicator"><span /></div>
    </div>
  );
}
