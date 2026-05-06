import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const groups = [
  {
    name: "Languages",
    icon: "< />",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 75 },
      { name: "Java", level: 72 },
      { name: "C/C++", level: 65 },
      { name: "C#", level: 68 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    name: "Frontend",
    icon: "{ }",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 78 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
      { name: "Angular", level: 65 },
      { name: "Vue.js", level: 60 },
    ],
  },
  {
    name: "Backend",
    icon: "[ ]",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 88 },
      { name: "Django", level: 82 },
      { name: "Spring Boot", level: 70 },
      { name: "ASP.NET Core", level: 68 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    name: "AI / ML",
    icon: "~>",
    items: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 72 },
      { name: "scikit-learn", level: 85 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 88 },
      { name: "OpenCV", level: 70 },
    ],
  },
  {
    name: "Databases",
    icon: "##",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 78 },
      { name: "SQLite", level: 85 },
      { name: "Firebase", level: 72 },
    ],
  },
  {
    name: "DevOps",
    icon: ">>",
    items: [
      { name: "Docker", level: 78 },
      { name: "Git", level: 92 },
      { name: "CI/CD", level: 75 },
      { name: "Linux", level: 80 },
      { name: "GitHub Actions", level: 72 },
      { name: "Vercel", level: 88 },
    ],
  },
];

const marqueeItems = ["React", "Python", "TensorFlow", "Node.js", "Docker", "Django", "MongoDB", "TypeScript", "PostgreSQL", "Spring Boot", "Next.js", "Tailwind", "PyTorch", "Git", "Vercel", "Express"];

function SkillBar({ name, level, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: i * 0.05, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-xs text-zinc-400 group-hover:text-white transition-colors">{name}</span>
        <span className="font-mono text-[10px] text-zinc-700">{level}%</span>
      </div>
      <div className="h-[2px] bg-white/[0.04] relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: i * 0.05 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 h-full"
          style={{
            background: level > 80
              ? "linear-gradient(90deg, #ff6b35, #ff9a3c)"
              : level > 70
              ? "linear-gradient(90deg, #3d9cf5, #00d4ff)"
              : "linear-gradient(90deg, #a855f7, #3d9cf5)",
          }}
        />
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: i * 0.05 + 0.2, duration: 0.8 }}
          className="absolute top-0 left-0 h-full blur-sm opacity-50"
          style={{
            background: level > 80 ? "#ff6b35" : level > 70 ? "#3d9cf5" : "#a855f7",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="sec" ref={ref}>
      <div className="sec-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-6 mb-20"
        >
          <div className="sec-label">Tech Stack</div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4 }}
            className="line-h flex-1 origin-left"
          />
          <span className="font-mono text-[10px] text-zinc-800 tracking-widest">05 / 07</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.2rem,5vw,5.5rem)] font-extrabold tracking-tight leading-[1.05] mb-16"
        >
          My{" "}
          <span className="grad-text">Arsenal</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-1"
          >
            {groups.map((g, i) => (
              <button
                key={g.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3 text-left transition-all duration-300 border ${
                  active === i
                    ? "border-accent-orange/40 bg-accent-orange/[0.06] text-white"
                    : "border-white/[0.04] bg-transparent text-zinc-600 hover:text-zinc-300 hover:border-white/10"
                }`}
              >
                <span className="font-mono text-[10px] w-6 text-accent-orange/60">{g.icon}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em]">{g.name}</span>
                {active === i && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="ml-auto w-1 h-1 bg-accent-orange rounded-full"
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Skills panel */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="fut-card"
              >
                <div className="bracket bracket-tl" />
                <div className="bracket bracket-br" />
                <div className="fut-card-inner">
                  <div className="flex items-center justify-between mb-8">
                    <div className="sec-label">{groups[active].name}</div>
                    <span className="font-mono text-[10px] text-zinc-700">{groups[active].items.length} technologies</span>
                  </div>
                  <div className="space-y-4">
                    {groups[active].items.map((s, i) => (
                      <SkillBar key={s.name} name={s.name} level={s.level} i={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-24 marquee-band"
        >
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((t, i) => (
              <span
                key={i}
                className="mx-10 text-4xl md:text-6xl font-display font-extrabold text-white/[0.02] hover:text-accent-orange/10 transition-colors duration-700 whitespace-nowrap select-none"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
