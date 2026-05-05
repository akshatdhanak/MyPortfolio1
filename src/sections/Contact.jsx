import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const socials = [
  { name: "GitHub", url: "https://github.com/akshatdhanak" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/akshat-dhanak-b984bb283/" },
  { name: "LeetCode", url: "https://leetcode.com/u/Akshat_Dhanak/" },
  { name: "Instagram", url: "https://www.instagram.com/akshat_dhanak/" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("akshatdhanak@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="sec" ref={ref}>
      <div className="sec-inner max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="line-h w-full mb-16 origin-center"
        />

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-xs font-mono text-accent-blue uppercase tracking-[0.3em]"
        >
          Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-6"
        >
          Let's build something <span className="grad-text">together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-zinc-400 max-w-lg mx-auto mb-12"
        >
          Open to roles in AI/ML, Data Science, and Full-Stack Development. 
          Always excited to discuss ideas, collaborations, or just tech in general.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glow-card mb-10"
        >
          <div className="glow-card-inner py-12">
            <p className="text-xs font-mono text-zinc-600 mb-4 tracking-wider uppercase">Drop a line</p>
            <a
              href="mailto:akshatdhanak@gmail.com"
              className="font-display text-2xl md:text-3xl font-bold text-white hover:text-accent-blue transition-colors duration-500"
            >
              akshatdhanak@gmail.com
            </a>
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={copy}
                className="px-5 py-2.5 rounded-xl text-xs font-medium border border-white/10 text-zinc-400 hover:border-accent-blue/40 hover:text-white transition-all duration-400"
              >
                {copied ? "Copied" : "Copy Email"}
              </button>
              <a
                href="mailto:akshatdhanak@gmail.com"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-400"
              >
                Send Email
              </a>
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4"
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
              className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-xs font-mono font-bold text-zinc-500 hover:text-accent-blue hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-all duration-400 hoverable"
            >
              {s.name.slice(0, 2).toUpperCase()}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.4 } : {}}
          transition={{ delay: 1 }}
          className="text-zinc-700 text-xs font-mono mt-10"
        >
          Resume available on request
        </motion.p>
      </div>
    </section>
  );
}
