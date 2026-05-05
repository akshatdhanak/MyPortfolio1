import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 30));
    const id = setInterval(() => {
      cur += step;
      if (cur >= target) { setVal(target); clearInterval(id); }
      else setVal(cur);
    }, 40);
    return () => clearInterval(id);
  }, [inView, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { v: 5, s: "+", l: "Projects Shipped" },
  { v: 2, s: "", l: "Internships" },
  { v: 8, s: "+", l: "Technologies" },
  { v: 2027, s: "", l: "Graduating" },
];

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 50, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { delay: d, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="sec" ref={ref}>
      <div className="sec-inner">
        {/* Decorative line */}
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
          <motion.span {...fadeUp(0)} animate={inView ? fadeUp(0).animate : {}} className="text-xs font-mono text-accent-blue uppercase tracking-[0.3em]">
            About
          </motion.span>
        </div>

        <motion.h2
          {...fadeUp(0.1)}
          animate={inView ? fadeUp(0.1).animate : {}}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-14 leading-[1.1]"
        >
          Engineering software at the<br />
          intersection of <span className="grad-text">code & intelligence</span>
        </motion.h2>

        {/* Bio grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-16">
          <motion.div
            {...fadeUp(0.2)}
            animate={inView ? fadeUp(0.2).animate : {}}
            className="lg:col-span-3 glow-card"
          >
            <div className="glow-card-inner">
              <p className="text-zinc-300 leading-relaxed mb-4">
                I'm <strong className="text-white">Akshat Dhanak</strong> — a final-year 
                Computer Engineering student at <strong className="text-white">Dharmsinh Desai University</strong> (Class of 2027). 
                From building MERN-stack applications to training TensorFlow models, 
                I work across the entire spectrum of modern software.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                I've interned at <strong className="text-zinc-200">Fuzzy Cloud</strong> as an SDE 
                and at <strong className="text-zinc-200">Sparks to Ideas</strong> as an AI/ML Intern
                — shipping production features, designing architectures, and solving real problems with data.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.3)}
            animate={inView ? fadeUp(0.3).animate : {}}
            className="lg:col-span-2 glow-card"
          >
            <div className="glow-card-inner flex flex-col justify-between">
              <p className="text-zinc-300 leading-relaxed mb-6">
                Currently deep into data science, neural networks, and MLOps. 
                Actively seeking roles where I can build intelligent systems 
                that make a real-world impact.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-sm text-emerald-400 font-medium">Open to opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              {...fadeUp(0.3 + i * 0.08)}
              animate={inView ? fadeUp(0.3 + i * 0.08).animate : {}}
              className="glow-card hoverable"
            >
              <div className="glow-card-inner text-center py-8">
                <p className="text-3xl md:text-4xl font-display font-extrabold grad-text mb-1">
                  <Counter target={s.v} suffix={s.s} />
                </p>
                <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{s.l}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
