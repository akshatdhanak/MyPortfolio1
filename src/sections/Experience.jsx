import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    period: "2026",
    role: "AI/ML Intern",
    company: "Sparks to Ideas",
    desc: "Developed ML models and data preprocessing pipelines. Deployed AI solutions using Python, TensorFlow, and scikit-learn on real-world datasets.",
    tags: ["Python", "TensorFlow", "scikit-learn", "Pandas", "Jupyter"],
    accent: "var(--orange)",
    index: "01",
  },
  {
    period: "2026",
    role: "SDE Intern",
    company: "Fuzzy Cloud",
    desc: "Built full-stack production features. REST API design, database architecture, and CI/CD workflows in a fast-paced startup environment.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Git"],
    accent: "var(--blue)",
    index: "02",
  },
  {
    period: "2023 — 2027",
    role: "B.Tech Computer Engineering",
    company: "Dharmsinh Desai University",
    desc: "Final-year student (7th semester). Core coursework in DSA, OS, DBMS, Computer Networks, AI/ML, and Software Engineering.",
    tags: ["DSA", "DBMS", "OS", "AI/ML", "Networking"],
    accent: "var(--purple)",
    index: "03",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="sec" ref={ref}>
      <div className="sec-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-6 mb-20"
        >
          <div className="sec-label">Journey</div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4 }}
            className="line-h flex-1 origin-left"
          />
          <span className="font-mono text-[10px] text-zinc-800 tracking-widest">02 / 07</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.2rem,5vw,5.5rem)] font-extrabold tracking-tight leading-[1.05] mb-20"
        >
          Where I've{" "}
          <span className="grad-text">leveled up</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.3, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] timeline-line origin-top hidden md:block"
          />

          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[17px] md:left-[23px] top-8 z-10 hidden md:block">
                  <div
                    className="w-4 h-4 border bg-bg flex items-center justify-center"
                    style={{ borderColor: item.accent }}
                  >
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                      className="w-1.5 h-1.5"
                      style={{ background: item.accent }}
                    />
                  </div>
                </div>

                {/* Card */}
                <div className="fut-card group">
                  <div className="bracket bracket-tl" style={{ borderColor: `${item.accent}60` }} />
                  <div className="bracket bracket-br" style={{ borderColor: `${item.accent}60` }} />

                  {/* Accent top bar */}
                  <div className="h-[1px] w-0 group-hover:w-full transition-all duration-700" style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }} />

                  <div className="fut-card-inner">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <div className="flex items-start gap-4">
                        <span className="font-mono text-[11px] text-zinc-700 pt-1">{item.index}</span>
                        <div>
                          <h3 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-[var(--orange)] transition-colors duration-400">
                            {item.role}
                          </h3>
                          <p className="font-mono text-sm font-semibold mt-0.5" style={{ color: item.accent }}>
                            {item.company}
                          </p>
                        </div>
                      </div>
                      <div className="border border-white/[0.04] px-3 py-1 shrink-0 self-start">
                        <span className="font-mono text-[10px] text-zinc-600 tracking-wider">{item.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-500 leading-relaxed mb-5 pl-10">{item.desc}</p>

                    <div className="flex flex-wrap gap-2 pl-10">
                      {item.tags.map((t) => (
                        <span key={t} className="pill">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
