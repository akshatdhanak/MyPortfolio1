import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const socials = [
  { name: "GitHub", url: "https://github.com/akshatdhanak", handle: "@akshatdhanak" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/akshat-soni-b984bb283/", handle: "akshat-soni" },
  { name: "LeetCode", url: "https://leetcode.com/u/Akshat_Dhanak/", handle: "Akshat_Dhanak" },
  { name: "Instagram", url: "https://www.instagram.com/akshat_dhanak/", handle: "@akshat_dhanak" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const copy = () => {
    navigator.clipboard.writeText("akshatdhanak@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="sec" ref={ref}>
      <div className="sec-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-6 mb-20"
        >
          <div className="sec-label">Contact</div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4 }}
            className="line-h flex-1 origin-left"
          />
          <span className="font-mono text-[10px] text-zinc-800 tracking-widest">07 / 07</span>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Big heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,6vw,6rem)] font-extrabold tracking-tight leading-[1.0] mb-6 text-center"
          >
            Let's build something{" "}
            <span className="grad-text">together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-zinc-500 text-center max-w-xl mx-auto mb-16 font-light leading-relaxed"
          >
            Open to roles in AI/ML, Data Science, and Full-Stack Development.
            Always excited to discuss ideas, collaborations, or just tech in general.
          </motion.p>

          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="fut-card mb-6 group"
          >
            <div className="bracket bracket-tl" />
            <div className="bracket bracket-tr" />
            <div className="bracket bracket-bl" />
            <div className="bracket bracket-br" />
            <div className="h-[1px] w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-[var(--orange)] via-[var(--blue)] to-transparent" />
            <div className="fut-card-inner py-14 text-center">
              <p className="font-mono text-[10px] text-zinc-700 tracking-[0.3em] uppercase mb-6">// ESTABLISH CONNECTION</p>
              <a
                href="mailto:akshatdhanak@gmail.com"
                className="font-display text-2xl md:text-4xl font-bold text-white hover:text-[var(--orange)] transition-colors duration-400"
              >
                akshatdhanak@gmail.com
              </a>
              <div className="flex items-center justify-center gap-3 mt-10">
                <button
                  onClick={copy}
                  className="btn-outline text-sm"
                >
                  {copied ? (
                    <span className="text-[var(--orange)]">✓ Copied</span>
                  ) : (
                    "Copy Email"
                  )}
                </button>
                <a href="mailto:akshatdhanak@gmail.com" className="btn-primary">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 7L1 13M1 13V7.5M1 7.5L8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Send Message
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social links grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {socials.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.08 }}
                onMouseEnter={() => setHoveredSocial(s.name)}
                onMouseLeave={() => setHoveredSocial(null)}
                className="fut-card group"
              >
                <div className="bracket bracket-tl" style={{ borderColor: hoveredSocial === s.name ? "var(--orange)" : undefined }} />
                <div className="bracket bracket-br" style={{ borderColor: hoveredSocial === s.name ? "var(--orange)" : undefined }} />
                <div className="fut-card-inner py-5 text-center">
                  <p className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest mb-1">{s.name}</p>
                  <p className="font-mono text-xs text-zinc-500 group-hover:text-[var(--orange)] transition-colors duration-300">{s.handle}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <a 
              href="https://drive.google.com/file/d/1kydr-qtTHF_EWJci0GesqMw7tZCMu2D9/view?usp=share_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-zinc-500 hover:text-[var(--orange)] transition-colors tracking-[0.3em] uppercase underline decoration-zinc-800 underline-offset-4"
            >
              View Full Résumé
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
