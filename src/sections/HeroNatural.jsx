import { motion } from "framer-motion";

export default function HeroNatural() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 bg-[#080c0a]">
      {/* Organic Mountain / Topographic SVG Background */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M0,800 L0,500 C200,450 400,600 700,500 C1000,400 1200,550 1440,450 L1440,800 Z" 
          fill="#4a7c59"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.path 
          d="M0,800 L0,600 C300,550 500,700 800,600 C1100,500 1300,650 1440,550 L1440,800 Z" 
          fill="#c3a365"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
        />
        <motion.path 
          d="M0,800 L0,700 C400,650 600,800 900,700 C1200,600 1400,750 1440,650 L1440,800 Z" 
          fill="#141c17"
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
        />
      </svg>

      {/* Floating elegant particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#eae0d5] opacity-20"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-[#c3a365]" />
            <span className="text-sm font-body tracking-[0.3em] text-[#c3a365] uppercase">Software Engineer</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-display font-medium mb-6 leading-[1.1] text-[#eae0d5]"
          >
            Akshat <br/>
            <span className="italic text-[#8eb69b]">Dhanak.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#7a8b82] font-body mb-10 max-w-lg leading-relaxed font-light"
          >
            Free spirit. Always exploring, lifting, and learning. I craft clean, impactful digital experiences inspired by nature and built with precision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-6"
          >
            <a href="#projects" className="btn-primary">
              View the Work
            </a>
            <a href="#about" className="btn-outline">
              My Philosophy
            </a>
          </motion.div>
        </div>

        {/* Right Column: Visual Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden">
            {/* Elegant glassmorphism card instead of photo, depicting values */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#141c17] to-[#0d1410] border border-[#eae0d5]/10 p-8 flex flex-col items-center justify-center">
              
              <svg width="100%" height="100%" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                {/* Sun */}
                <circle cx="150" cy="60" r="30" fill="url(#sun-grad)" />
                <defs>
                  <linearGradient id="sun-grad" x1="150" y1="30" x2="150" y2="90" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c3a365" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#c3a365" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Mountains */}
                <path d="M10 200 L70 120 L130 200 Z" fill="url(#mountain-grad-1)" />
                <path d="M80 220 L140 140 L200 220 Z" fill="url(#mountain-grad-2)" />
                <defs>
                  <linearGradient id="mountain-grad-1" x1="70" y1="120" x2="70" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4a7c59" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#4a7c59" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="mountain-grad-2" x1="140" y1="140" x2="140" y2="220" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8eb69b" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#8eb69b" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Ground Lines */}
                <line x1="0" y1="200" x2="200" y2="200" stroke="#eae0d5" strokeOpacity="0.2" strokeWidth="1" />
                <line x1="20" y1="210" x2="180" y2="210" stroke="#eae0d5" strokeOpacity="0.1" strokeWidth="1" />
                <line x1="40" y1="220" x2="160" y2="220" stroke="#eae0d5" strokeOpacity="0.05" strokeWidth="1" />
              </svg>

              <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="font-display italic text-[#c3a365] text-xl mb-1">Stay grounded.</p>
                <p className="font-mono text-[10px] text-[#7a8b82] tracking-widest uppercase">Keep exploring</p>
              </div>

            </div>

            {/* Accent glowing orb behind */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#4a7c59] rounded-full blur-[100px] opacity-20 pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#c3a365] rounded-full blur-[100px] opacity-10 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
