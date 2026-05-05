import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    period: "2026",
    role: "AI/ML Intern",
    company: "Sparks to Ideas",
    desc: "Developed ML models and data preprocessing pipelines. Deployed AI solutions using Python, TensorFlow, scikit-learn on real-world datasets.",
    tags: ["Python", "TensorFlow", "scikit-learn", "Pandas", "Jupyter"],
    color: "#ec4899",
  },
  {
    period: "2026",
    role: "SDE Intern",
    company: "Fuzzy Cloud",
    desc: "Built full-stack production features. REST API design, database architecture, and CI/CD workflows in a fast-paced startup environment.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Git"],
    color: "#4f7df5",
  },
  {
    period: "2023 - 2027",
    role: "B.Tech Computer Engineering",
    company: "Dharmsinh Desai University",
    desc: "Final-year student (7th semester). Core coursework in DSA, OS, DBMS, Computer Networks, AI/ML, and Software Engineering.",
    tags: ["DSA", "DBMS", "OS", "AI/ML", "Networking"],
    color: "#8b5cf6",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="sec" ref={ref}>
      <div className="sec-inner">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="line-h w-full mb-16 origin-left"
        />

        <div className="flex items-center gap-3 mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 40 } : {}}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs font-mono text-accent-blue uppercase tracking-[0.3em]"
          >
            Journey
          </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16"
        >
          Where I've <span className="grad-text">leveled up</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical animated line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] origin-top"
            style={{ background: "linear-gradient(180deg, #4f7df5, #8b5cf6, #ec4899, transparent)" }}
          />

          <div className="space-y-8">
            {items.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
                animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-16 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-[17px] md:left-[25px] top-8 z-10">
                  <div className="w-4 h-4 rounded-full border-2 bg-bg flex items-center justify-center" style={{ borderColor: item.color }}>
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="w-2 h-2 rounded-full"
                      style={{ background: item.color }}
                    />
                  </div>
                </div>

                <div className="glow-card group">
                  <div className="glow-card-inner">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-accent-blue transition-colors duration-500">
                          {item.role}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: item.color }}>{item.company}</p>
                      </div>
                      <span className="text-xs font-mono text-zinc-600 tracking-wider shrink-0">{item.period}</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-5">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((t) => <span key={t} className="pill">{t}</span>)}
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
