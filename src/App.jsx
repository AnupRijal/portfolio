import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Publications />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <footer>
        <div className="container">
          <p>Built with <span>effort &amp; love</span> by Anup · 2025 · Kirksville, MO</p>
        </div>
      </footer>
      <ScrollReveal />
    </>
  );
}
