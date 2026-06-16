import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const id = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(cur);
      if (cur >= target) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, [inView, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { v: 5, s: "+", l: "Projects Shipped" },
  { v: 2, s: "", l: "Internships" },
  { v: 30, s: "+", l: "Technologies" },
  { v: 2027, s: "", l: "Graduating" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="sec" ref={ref}>
      <div className="sec-inner">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-20"
        >
          <div className="sec-label">About Me</div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="line-h flex-1 origin-left"
          />
          <span className="font-mono text-[10px] text-zinc-800 tracking-widest">01 / 07</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.2rem,5vw,5.5rem)] font-extrabold tracking-tight leading-[1.05] mb-16"
        >
          Engineering at the<br />
          intersection of{" "}
          <span className="grad-text">code</span>{" "}
          &amp;{" "}
          <span className="grad-text-blue">intelligence</span>
        </motion.h2>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
          {/* Main bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="lg:col-span-7 fut-card group"
          >
            <div className="bracket bracket-tl" />
            <div className="bracket bracket-br" />
            <div className="fut-card-inner space-y-5">
              <div className="font-mono text-[10px] text-[var(--orange)] tracking-[0.2em] mb-6">// BIO.txt</div>
              <p className="text-zinc-300 leading-relaxed text-base">
                I'm <span className="text-white font-semibold">Akshat Dhanak</span> — a final-year
                Computer Engineering student and Data Science enthusiast at{" "}
                <span className="text-white font-semibold">Dharmsinh Desai University</span> (Class of 2027).
                I build production-grade full-stack applications and AI/ML systems
                — from designing scalable REST APIs to training machine learning models.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                I interned at{" "}
                <span className="text-zinc-200 font-medium">Fuzzy Cloud</span> as a Software Engineering Intern
                — leading backend architecture, building real-time communication layers,
                and collaborating on a large-scale TypeScript codebase.
              </p>
              <div className="pt-5 border-t border-white/[0.04]">
                <p className="text-zinc-500 leading-relaxed">
                  Passionate about DBMS, engineering intelligent systems, and crafting polished,
                  user-centric experiences. Open to roles in AI/ML, Data Science, and Full-Stack Development.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Status card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="fut-card"
            >
              <div className="bracket bracket-tl" />
              <div className="bracket bracket-tr" />
              <div className="fut-card-inner">
                <div className="font-mono text-[10px] text-[var(--blue)] tracking-[0.2em] mb-5">// STATUS.sys</div>
                <div className="space-y-3">
                  {[
                    { label: "Location", value: "Gujarat, India" },
                    { label: "University", value: "DDU — CE" },
                    { label: "Focus", value: "AI/ML + Full Stack" },
                    { label: "Status", value: "Open to Work", highlight: true },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-zinc-700 uppercase tracking-wider">{item.label}</span>
                      <span className={`font-mono text-xs ${item.highlight ? "text-[var(--orange)]" : "text-zinc-300"} flex items-center gap-2`}>
                        {item.highlight && <span className="hud-dot" style={{ width: 5, height: 5 }} />}
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.42, duration: 0.8 }}
              className="fut-card"
            >
              <div className="bracket bracket-bl" />
              <div className="bracket bracket-br" />
              <div className="fut-card-inner">
                <div className="font-mono text-[10px] text-[var(--orange)] tracking-[0.2em] mb-4">// LINKS.json</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "GitHub", url: "https://github.com/akshatdhanak" },
                    { label: "LinkedIn", url: "https://www.linkedin.com/in/akshat-soni-b984bb283/" },
                    { label: "LeetCode", url: "https://leetcode.com/u/Akshat_Dhanak/" },
                    { label: "Resume", url: "https://drive.google.com/drive/folders/1-bkKpD0sEu-syEkqlysamzv4iiPPJ-6u" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-[11px] text-zinc-500 hover:text-[var(--orange)] transition-colors duration-300 group"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 group-hover:text-[var(--orange)]">
                        <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.7 }}
              className="fut-card relative"
            >
              <div className="bracket bracket-tl" />
              <div className="bracket bracket-br" />
              <div className="fut-card-inner text-center py-10 px-2 md:px-4 flex flex-col items-center justify-center">
                <p 
                  className="stat-num mb-2" 
                  style={{ fontSize: s.v > 1000 ? 'clamp(1.8rem, 3.5vw, 3.2rem)' : undefined }}
                >
                  <Counter target={s.v} suffix={s.s} />
                </p>
                <p className="font-mono text-[10px] text-[var(--muted, #666)] uppercase tracking-[0.2em] mt-auto">{s.l}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
