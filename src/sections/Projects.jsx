import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "EduNexus",
    sub: "Academic Management Platform",
    desc: "Full-stack academic system with barcode attendance, AI database assistant, fee management, result generation. Dockerized with CI/CD pipeline.",
    tags: ["Django", "Python", "PostgreSQL", "Docker", "Gemini API", "CI/CD"],
    url: "https://github.com/akshatdhanak/EduNexus",
    accent: "var(--orange)",
    featured: true,
    status: "DEPLOYED",
  },
  {
    id: "02",
    title: "Aura AI",
    sub: "Context-Aware Chatbot",
    desc: "MERN-stack AI chatbot with persistent conversations, auth, and polished UI. Powered by Gemini API with real-time streaming responses.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Gemini API"],
    url: "https://github.com/akshatdhanak/Aura-AI---not-just-a-chatbot",
    accent: "var(--blue)",
    status: "LIVE",
  },
  {
    id: "03",
    title: "SafePlate",
    sub: "AI Food Safety Analyzer",
    desc: "ML-powered tool that scans ingredients to detect allergens, harmful additives, and dietary risk scores using advanced NLP models.",
    tags: ["Python", "scikit-learn", "Flask", "React", "ML Pipeline"],
    url: "https://github.com/akshatdhanak",
    accent: "var(--cyan)",
    status: "BETA",
  },
  {
    id: "04",
    title: "StoryMate",
    sub: "AI Storytelling Engine",
    desc: "Interactive narrative platform with AI-driven story generation, character customization, and branching storylines built on .NET.",
    tags: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "SQL Server"],
    url: "https://github.com/akshatdhanak",
    accent: "var(--purple)",
    status: "WIP",
  },
  {
    id: "05",
    title: "NeuralVista",
    sub: "CV Analytics Dashboard",
    desc: "Real-time computer vision platform with object detection, facial recognition, live metrics, and model monitoring dashboard.",
    tags: ["Spring Boot", "TensorFlow", "React", "PostgreSQL", "Docker"],
    url: "https://github.com/akshatdhanak",
    accent: "var(--orange)",
    status: "WIP",
  },
];

function ProjectCard({ p, i, inView }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mx", `${x}%`);
    cardRef.current.style.setProperty("--my", `${y}%`);
  };

  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`block ${p.featured ? "md:col-span-2" : ""}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        className="fut-card group h-full cursor-pointer relative"
      >
        {/* Corner brackets with accent color */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l transition-colors duration-300" style={{ borderColor: `${p.accent}60` }} />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r transition-colors duration-300" style={{ borderColor: `${p.accent}60` }} />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l transition-colors duration-300" style={{ borderColor: `${p.accent}60` }} />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r transition-colors duration-300" style={{ borderColor: `${p.accent}60` }} />

        {/* Mouse spotlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(350px circle at var(--mx,50%) var(--my,50%), ${p.accent}09, transparent 60%)`,
          }}
        />

        {/* Top accent line */}
        <div
          className="h-[1px] w-0 group-hover:w-full transition-all duration-700"
          style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
        />

        <div className="fut-card-inner">
          {/* Header row */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-[10px] text-zinc-700">{p.id}</span>
                {p.featured && (
                  <span
                    className="font-mono text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 border"
                    style={{ color: p.accent, borderColor: `${p.accent}40`, background: `${p.accent}08` }}
                  >
                    Featured
                  </span>
                )}
                <span
                  className="font-mono text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 border"
                  style={{
                    color: p.status === "DEPLOYED" || p.status === "LIVE" ? "#22c55e" : p.accent,
                    borderColor: p.status === "DEPLOYED" || p.status === "LIVE" ? "#22c55e40" : `${p.accent}40`,
                    background: p.status === "DEPLOYED" || p.status === "LIVE" ? "#22c55e08" : `${p.accent}08`,
                  }}
                >
                  {p.status}
                </span>
              </div>
              <h3
                className="font-display text-xl md:text-2xl font-bold text-white group-hover:transition-colors duration-300"
                style={{ "--hover-color": p.accent }}
              >
                <span className="group-hover:text-[var(--orange)] transition-colors duration-400">{p.title}</span>
              </h3>
              <p className="font-mono text-[11px] text-zinc-600 mt-1">{p.sub}</p>
            </div>

            <motion.div
              whileHover={{ x: 3, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="ml-4 shrink-0 mt-2"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-zinc-700 group-hover:text-[var(--orange)] transition-colors duration-300">
                <path d="M4 14L14 4M14 4H6M14 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>

          <p className="text-sm text-zinc-500 leading-relaxed mb-6">{p.desc}</p>

          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="sec" ref={ref}>
      <div className="sec-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-6 mb-20"
        >
          <div className="sec-label">Projects</div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4 }}
            className="line-h flex-1 origin-left"
          />
          <span className="font-mono text-[10px] text-zinc-800 tracking-widest">03 / 07</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.2rem,5vw,5.5rem)] font-extrabold tracking-tight leading-[1.05] mb-4"
        >
          Things I've{" "}
          <span className="grad-text">shipped</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="font-light text-zinc-600 max-w-xl mb-16"
        >
          Real problems, real solutions. No tutorials, no copy-paste — engineering from first principles.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
