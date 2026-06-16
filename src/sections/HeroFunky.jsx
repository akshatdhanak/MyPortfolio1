import { motion } from "framer-motion";

export default function HeroFunky() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 bg-[#050505]">
      {/* Brutalist Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center center"
        }}
      />

      {/* Abstract monochrome geometry */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 border-[40px] border-[#111111] rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-80 h-80 border-[2px] border-dashed border-[#e5ff00]/20 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50, rotate: -5 }} 
          animate={{ opacity: 1, y: 0, rotate: 0 }} 
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="inline-block mb-8 bg-[#e5ff00] text-[#050505] px-6 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(255,255,255,0.2)]"
        >
          <span className="text-sm font-body font-bold tracking-[0.2em] uppercase">Full-Stack Engineer &amp; Data Scientist</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.1 }}
          className="text-[clamp(4rem,10vw,12rem)] font-display font-black leading-[0.85] text-white uppercase mb-8 tracking-tighter"
        >
          <span className="block">Akshat</span>
          <span className="block text-[#e5ff00] drop-shadow-[6px_6px_0px_#ffffff]">Dhanak.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl font-body font-medium mb-12 max-w-2xl mx-auto leading-relaxed text-[#888888]"
        >
          Building production-grade full-stack applications &amp; AI/ML systems. <span className="text-white">Data Science.</span> Scalable architecture. <span className="text-[#e5ff00] underline decoration-2 underline-offset-4">Intelligent engineering.</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="#projects" className="btn-primary text-lg">
            See the Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
