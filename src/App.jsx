import { motion } from 'framer-motion';
import MatrixBackground from './MatrixBackground'; 
import { Github, ExternalLink, MapPin, Database, Sparkles, BrainCircuit, HeartPulse, ArrowUpRight, Rocket, Download } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "Chroma AI",
      role: "Visual Search Engine",
      desc: "Analyzes user-uploaded photos to extract color DNA and fetch matching images using custom algorithms and Pexels API.",
      tech: ["React", "Three.js", "Algorithms"],
      icon: <Sparkles size={24} />,
      github: "https://github.com/Satyam9935/Chrome.ai", 
      demo: "https://chromeengine.netlify.app/" 
    },
    {
      title: "Heal Digital",
      role: "SIH Hackathon (3rd Place)",
      desc: "Secure digital health platform linked with Aadhaar QR codes for instant medical history retrieval.",
      tech: ["React", "TypeScript", "Tailwind"],
      icon: <HeartPulse size={24} />,
      github: "https://github.com", 
      demo: "#"
    },
    {
      title: "MindMakers",
      role: "AI EdTech Tool",
      desc: "Automated test generator using Large Language Models (LLM) to create questions from raw text.",
      tech: ["Python", "Gen AI", "LangChain"],
      icon: <BrainCircuit size={24} />,
      github: "https://github.com", 
      demo: "#"
    },
    {
      title: "NASA Time Machine",
      role: "Space Explorer",
      desc: "Archival exploration tool allowing users to travel back in time to view astronomical imagery via NASA Open APIs.",
      tech: ["React", "REST API", "Tailwind"],
      icon: <Rocket size={24} />,
      github: "https://github.com/Satyam9935/Explorer",
      demo: "https://nasatimemachine.netlify.app/"
    }
  ];

  return (
    <>
      <MatrixBackground />

      <div className="container">
        
        {/* NAVBAR */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', marginBottom: '2rem' }}>
          <div style={{ fontWeight: '700', fontSize: '1.25rem' }}>SATYAM<span className="gradient-text">.DEV</span></div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <a href="mailto:satyamp9005@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8 }}>Contact</a>
              
              <a 
                href="/resume.pdf" 
                download="Satyam_Patel_Resume.pdf"
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '8px', 
                  background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', 
                  padding: '8px 16px', borderRadius: '100px', color: 'white', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500', transition: '0.3s'
                }}
              >
                  <Download size={16} /> Resume
              </a>
          </div>
        </nav>

        {/* BENTO GRID LAYOUT */}
        <div className="bento-grid">
          
          {/* HERO CARD */}
          <motion.div 
            className="card hero-card"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            <div style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}>
              <span className="tech-pill">Data Science</span>
              <span className="tech-pill">AI Automation</span>
            </div>
            <h1>Building intelligence <br /> for the <span className="gradient-text">modern web.</span></h1>
            <p className="tagline">
              I am <strong>Satyam Patel</strong>. I bridge the gap between complex Python logic and beautiful React interfaces to build real-time, intelligent applications.
            </p>
            <a href="#projects" className="btn-glow">
              View Projects <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* LOCATION CARD */}
          <motion.div 
            className="card stat-card"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          >
            <div className="icon-box" style={{ margin: 0 }}><MapPin size={24} /></div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Based in</div>
              <div style={{ fontWeight: '600' }}>Lucknow, India</div>
            </div>
          </motion.div>

          {/* TECH STACK CARD */}
          <motion.div 
            className="card"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
          >
            <h3 style={{ margin: '0 0 1rem 0' }}>Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {["Python", "React", "SQL", "Java", "Next.js", "Three.js"].map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* ACHIEVEMENTS CARD */}
          <motion.div 
            className="card" style={{ gridColumn: 'span 1' }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          >
             <h3 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
               <Database size={18} className="gradient-text" /> Wins
             </h3>
             <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6' }}>
               <li>🏆 3rd Place SIH</li>
               <li>🚀 Top 10 BuildFast</li>
               <li>⭐ 5 Star Hackerrank</li>
             </ul>
          </motion.div>

        </div>

        {/* PROJECTS SECTION */}
        <section id="projects" style={{ marginTop: '6rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Selected Work</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {projects.map((p, i) => (
              <motion.div 
                key={i}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div className="icon-box" style={{ marginBottom: 0 }}>{p.icon}</div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                      <Github size={20} className="text-secondary" style={{ cursor: 'pointer', transition: '0.2s' }} />
                    </a>
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                      <ExternalLink size={20} className="text-secondary" style={{ cursor: 'pointer', transition: '0.2s' }} />
                    </a>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>{p.title}</h3>
                <div style={{ fontSize: '0.85rem', color: '#a855f7', marginBottom: '1rem', fontWeight: '500' }}>{p.role}</div>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer style={{ marginTop: '6rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: '#64748b' }}>
          <p>© 2025 Satyam Patel. Crafted with React.</p>
        </footer>
      </div>
    </>
  );
}