import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const groups = [
  { name: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "C#", "SQL"] },
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Angular", "Vue.js"] },
  { name: "Backend", items: ["Node.js", "Express", "Django", "Spring Boot", "ASP.NET Core", "REST APIs"] },
  { name: "AI / ML", items: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "OpenCV", "Keras"] },
  { name: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Firebase"] },
  { name: "DevOps", items: ["Docker", "Git", "Vercel", "Render", "Linux", "CI/CD", "GitHub Actions", "Netlify"] },
];

const allTech = ["React", "Python", "TensorFlow", "Node.js", "Docker", "Django", "MongoDB", "TypeScript", "PostgreSQL", "Spring Boot", "Next.js", "Tailwind", "PyTorch", "Git", "Vercel"];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="sec" ref={ref}>
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
            Tech Stack
          </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-14"
        >
          My <span className="grad-text">Arsenal</span>
        </motion.h2>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {groups.map((g, i) => (
            <button
              key={g.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-500 ${
                active === i
                  ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-blue/15"
                  : "bg-white/[0.02] text-zinc-500 hover:text-zinc-300 border border-white/[0.05] hover:border-accent-blue/20"
              }`}
            >
              {g.name}
            </button>
          ))}
        </motion.div>

        {/* Skills display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="glow-card"
          >
            <div className="glow-card-inner">
              <div className="flex flex-wrap gap-3">
                {groups[active].items.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="px-5 py-3 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] text-sm text-zinc-300 hover:border-accent-blue/30 hover:text-white hover:bg-accent-blue/5 hover:shadow-lg hover:shadow-accent-blue/5 transition-all duration-400 cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 marquee-band"
        >
          <div className="marquee-track">
            {[...allTech, ...allTech].map((t, i) => (
              <span key={i} className="mx-8 text-3xl md:text-5xl font-display font-bold text-white/[0.03] hover:text-accent-blue/20 transition-colors duration-700 whitespace-nowrap select-none">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
