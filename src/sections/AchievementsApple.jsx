import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// SVG Icons
const TrophyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 01-10 0V4zM4 4h3v4H4zM17 4h3v4h-3z" />
  </svg>
);

const CertIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 12.5L19 21l-7-3-7 3 3.5-8.5" />
  </svg>
);

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const milestones = [
  {
    year: "2025",
    title: "DUHacks 5.0 Finalist",
    org: "Hackathon Competition",
    desc: "Selected in Top 10 out of 100+ teams at DUHacks 5.0 — a highly competitive hackathon featuring innovative projects from across the country.",
    stats: [{ k: "Ranking", v: "Top 10" }, { k: "Teams", v: "100+" }, { k: "Type", v: "Hackathon" }],
    icon: <TrophyIcon />,
  },
  {
    year: "2023",
    title: "GUJCET Excellence",
    org: "Gujarat Common Entrance Test",
    desc: "Secured 107/120 marks with a perfect 40/40 in Mathematics. Achieved 99.16 percentile among all test-takers in the state.",
    stats: [{ k: "Score", v: "107/120" }, { k: "Percentile", v: "99.16%" }, { k: "Maths", v: "40/40" }],
    icon: <CodeIcon />,
  },
  {
    year: "2023",
    title: "Data Science Certification",
    org: "Code with Harry",
    desc: "Completed a comprehensive Data Science course certification covering Python, machine learning, data analysis, and visualization techniques.",
    stats: [{ k: "Field", v: "Data Science" }, { k: "Provider", v: "Code with Harry" }, { k: "Status", v: "Certified" }],
    icon: <CertIcon />,
  },
  {
    year: "Present",
    title: "Languages",
    org: "Communication",
    desc: "Multilingual communicator fluent in English (Professional), Hindi (Native), and Gujarati (Native) — enabling effective collaboration across diverse teams and stakeholders.",
    stats: [{ k: "English", v: "Professional" }, { k: "Hindi", v: "Native" }, { k: "Gujarati", v: "Native" }],
    icon: <GlobeIcon />,
  },
];

export default function Achievements() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" ref={sectionRef} className="sec relative overflow-hidden">
      <div className="sec-inner max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-6 mb-16"
        >
          <div className="sec-label">Milestones</div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4 }}
            className="line-h flex-1 origin-left"
          />
          <span className="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">04 / 07</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-6xl font-black uppercase mb-6 text-white"
        >
          Beyond the <span className="text-[#e5ff00]">Code.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[#888888] font-body text-lg max-w-lg mb-20"
        >
          Moments, achievements, and transformations that shaped who I am — on and off the keyboard.
        </motion.p>

        {/* Elegant Minimal Timeline */}
        <div className="relative border-l-4 border-[rgba(255,255,255,0.1)] ml-4 md:ml-8 space-y-16 pb-12">
          {milestones.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3.5 top-1 w-6 h-6 rounded-none bg-[#050505] border-2 border-[#ffffff] flex items-center justify-center transform rotate-45 group-hover:border-[#e5ff00] transition-colors">
                <div className="w-2 h-2 rounded-none bg-[#e5ff00]" />
              </div>

              <div className="fut-card group hover:rotate-1">
                <div className="fut-card-inner p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                  
                  {/* Icon Box */}
                  <div className="w-14 h-14 shrink-0 rounded-none bg-[#111111] border-2 border-[rgba(255,255,255,0.2)] flex items-center justify-center text-[#ffffff] group-hover:text-[#000000] group-hover:bg-[#e5ff00] group-hover:border-[#e5ff00] transition-all duration-300">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <h3 className="font-display text-3xl font-black text-white group-hover:text-[#e5ff00] transition-colors duration-300 uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <span className="font-mono text-sm text-[#050505] font-bold border-2 border-[#e5ff00] px-4 py-1 rounded-none bg-[#e5ff00] shadow-[2px_2px_0px_#ffffff]">
                        {item.year}
                      </span>
                    </div>
                    
                    <p className="font-mono text-[#ffffff] text-xs uppercase tracking-widest mb-4">
                      {item.org}
                    </p>
                    
                    <p className="font-body text-[#888888] leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-6 pt-6 border-t-2 border-[rgba(255,255,255,0.05)]">
                      {item.stats.map((s) => (
                        <div key={s.k}>
                          <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-1">{s.k}</p>
                          <p className="font-mono text-sm font-bold text-white group-hover:text-[#e5ff00] transition-colors">{s.v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
