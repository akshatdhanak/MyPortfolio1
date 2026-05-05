import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "EduNexus",
    sub: "Academic Management Platform",
    desc: "Full-stack academic system with barcode attendance, AI database assistant, fee management, result generation. Dockerized with CI/CD pipeline.",
    tags: ["Django", "Python", "PostgreSQL", "Docker", "Gemini API", "CI/CD"],
    url: "https://github.com/akshatdhanak/EduNexus",
    gradient: "from-blue-500 via-indigo-600 to-purple-700",
    featured: true,
  },
  {
    title: "Aura AI",
    sub: "Context-Aware Chatbot",
    desc: "MERN-stack AI chatbot with persistent conversations, auth, and polished UI. Powered by Gemini API.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Gemini API"],
    url: "https://github.com/akshatdhanak/Aura-AI---not-just-a-chatbot",
    gradient: "from-purple-500 via-pink-600 to-rose-700",
  },
  {
    title: "SafePlate",
    sub: "AI Food Safety Analyzer",
    desc: "ML-powered tool that scans ingredients to detect allergens, harmful additives, and dietary risk scores.",
    tags: ["Python", "scikit-learn", "Flask", "React", "ML Pipeline"],
    url: "https://github.com/akshatdhanak",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
  },
  {
    title: "StoryMate",
    sub: "AI Storytelling Engine",
    desc: "Interactive narrative platform with AI-driven story generation, character customization, and branching storylines.",
    tags: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "SQL Server"],
    url: "https://github.com/akshatdhanak",
    gradient: "from-amber-500 via-orange-600 to-red-700",
  },
  {
    title: "NeuralVista",
    sub: "CV Analytics Dashboard",
    desc: "Real-time computer vision platform with object detection, facial recognition, live metrics, and model monitoring.",
    tags: ["Spring Boot", "TensorFlow", "React", "PostgreSQL", "Docker"],
    url: "https://github.com/akshatdhanak",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
  },
];

function ProjectCard({ p, i, inView }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
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
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ delay: 0.15 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`block ${p.featured ? "md:col-span-2" : ""}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        className="glow-card group h-full cursor-pointer relative overflow-hidden"
      >
        {/* Mouse-follow spotlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(79,125,245,0.06), transparent 60%)",
          }}
        />

        {/* Gradient bar top */}
        <div className={`h-[3px] w-full bg-gradient-to-r ${p.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="glow-card-inner">
          <div className="flex items-start justify-between mb-4">
            <div>
              {p.featured && (
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-accent-cyan mb-2 bg-accent-cyan/10 px-2 py-0.5 rounded">
                  Featured
                </span>
              )}
              <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-accent-blue transition-colors duration-500">
                {p.title}
              </h3>
              <p className="text-xs font-mono text-zinc-600 mt-1">{p.sub}</p>
            </div>
            <motion.svg
              width="18" height="18" viewBox="0 0 18 18" fill="none"
              className="text-zinc-700 group-hover:text-accent-blue mt-1 shrink-0"
              animate={{ x: 0, y: 0 }}
              whileHover={{ x: 2, y: -2 }}
            >
              <path d="M5 13L13 5M13 5H6M13 5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed mb-6">{p.desc}</p>

          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => <span key={t} className="pill">{t}</span>)}
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
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="line-h w-full mb-16 origin-left"
        />

        <div className="flex items-center gap-3 mb-4">
          <motion.div initial={{ width: 0 }} animate={inView ? { width: 40 } : {}} transition={{ duration: 0.8 }} className="h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple" />
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs font-mono text-accent-blue uppercase tracking-[0.3em]">
            Projects
          </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          Things I've <span className="grad-text">shipped</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-zinc-500 max-w-lg mb-14"
        >
          Real problems, real solutions. No tutorials, no copy-paste
          — engineering from first principles.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
