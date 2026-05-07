import { motion } from "framer-motion";

export default function HeroMartian() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Background SVG String Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#ff4d00" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated strings/lines */}
        <motion.path 
          d="M0,200 Q400,300 800,100 T1600,200" 
          fill="none" 
          stroke="#ff8400" 
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.path 
          d="M0,500 Q600,200 1200,600 T2000,400" 
          fill="none" 
          stroke="#b7321a" 
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        />
      </svg>

      {/* Orbit Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(255,77,0,0.1)] border-dashed animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[rgba(0,212,255,0.05)] border-dotted animate-spin-reverse" />

      <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="pill animate-pulse">SYS.ONLINE</span>
            <span className="text-xs font-mono text-[#00d4ff] uppercase tracking-widest">Connection Established</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold uppercase mb-6 leading-tight"
          >
            ARES <span className="grad-text">COMMAND</span><br/>
            <span className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">MISSION LOG</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 font-body mb-8 max-w-xl"
          >
            "I'm gonna have to science the sh*t out of this." — Surviving the digital frontier, engineering robust solutions, and bringing the Martian aesthetic to the web.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="btn-primary">
              Initialize Sequence
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
            <button className="btn-outline">
              View Telemetry
            </button>
          </motion.div>
        </div>

        {/* Right Column: High-Tech Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex justify-center"
        >
          <div className="fut-card w-full max-w-md p-6 bg-[#090504]/80 backdrop-blur-md border border-[#ff4d00]/30 shadow-[0_0_30px_rgba(255,77,0,0.15)] relative">
            <div className="bracket bracket-tl" />
            <div className="bracket bracket-tr" />
            <div className="bracket bracket-bl" />
            <div className="bracket bracket-br" />
            
            <div className="flex justify-between items-center border-b border-[#ff4d00]/20 pb-4 mb-4">
              <span className="text-xs font-mono text-[#ff4d00]">HABITAT STATUS</span>
              <span className="text-xs font-mono text-[#00d4ff] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse"></div>
                NOMINAL
              </span>
            </div>

            <div className="space-y-4 font-mono text-sm text-gray-300">
              <div className="flex justify-between">
                <span>O2 LEVEL</span>
                <span className="text-[#ff8400]">98.2%</span>
              </div>
              <div className="w-full bg-gray-800 h-1 mt-1">
                <div className="bg-[#ff4d00] h-1 w-[98%]" />
              </div>

              <div className="flex justify-between pt-2">
                <span>WATER RECLAMATION</span>
                <span className="text-[#ff8400]">ACTIVE</span>
              </div>
              <div className="w-full bg-gray-800 h-1 mt-1">
                <div className="bg-[#ff4d00] h-1 w-[85%]" />
              </div>

              <div className="flex justify-between pt-2">
                <span>POWER GRID</span>
                <span className="text-[#ff8400]">SOLAR ARR</span>
              </div>
              <div className="w-full bg-gray-800 h-1 mt-1 flex gap-1">
                {[1,2,3,4,5,6,7,8,9,10].map(i => (
                  <div key={i} className={`h-1 flex-1 ${i < 9 ? 'bg-[#ff4d00]' : 'bg-gray-700'}`} />
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#ff4d00]/20 grid grid-cols-2 gap-4">
               <div>
                 <p className="text-[10px] text-gray-500 font-mono">SOL</p>
                 <p className="text-2xl font-bold text-[#ff4d00]">142</p>
               </div>
               <div>
                 <p className="text-[10px] text-gray-500 font-mono">EXT TEMP</p>
                 <p className="text-2xl font-bold text-[#00d4ff]">-60°C</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
