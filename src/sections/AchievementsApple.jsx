import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    year: "2023",
    title: "GUJCET Excellence",
    organization: "Gujarat Common Entrance Test",
    description: "Secured 107/120 marks with a perfect 40/40 in Mathematics. Achieved 99.16 percentile and earned admission to Dharmsinh Desai University for Computer Engineering.",
    stats: { score: "107/120", percentile: "99.16%", maths: "40/40" }
  },
  {
    year: "2024",
    title: "Bhrigu Lake Trek",
    organization: "First Himalayan Trek",
    description: "Completed my first-ever trek to Bhrigu Lake at 15,000 feet altitude in the Himalayas. Conquered challenging terrain and extreme weather conditions.",
    stats: { altitude: "15,000 ft", difficulty: "High", experience: "First trek" }
  },
  {
    year: "2024-2025",
    title: "Fitness Transformation",
    organization: "Personal Achievement",
    description: "Lost 27 kg through consistent diet management and gym training. Transformed lifestyle with discipline and dedication over months of hard work.",
    stats: { weight: "27 kg lost", method: "Diet + Gym", duration: "12+ months" }
  },
  {
    year: "2015",
    title: "National Art Award",
    organization: "National Level Competition",
    description: "Won a national-level award for art in 5th standard. Recognized for creativity and artistic excellence among participants from across the country.",
    stats: { level: "National", grade: "5th Standard", category: "Art" }
  }
];

export default function Achievements() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="achievements" ref={containerRef} className="sec bg-black relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      
      <div className="sec-inner relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
            Milestones & Wins
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Beyond code — moments that shaped who I am
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent" />

          {/* Achievement cards */}
          <div className="space-y-16">
            {achievements.map((achievement, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className="w-full md:w-[calc(50%-40px)]">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="glass-card p-8 cursor-pointer"
                    >
                      {/* Year badge */}
                      <div className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-600/30 text-blue-400 text-sm font-medium mb-4">
                        {achievement.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {achievement.title}
                      </h3>

                      {/* Organization */}
                      <p className="text-blue-400 font-medium mb-4">
                        {achievement.organization}
                      </p>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {achievement.description}
                      </p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
                        {Object.entries(achievement.stats).map(([key, value]) => (
                          <div key={key} className="flex-1 min-w-[120px]">
                            <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                              {key}
                            </div>
                            <div className="text-sm font-medium text-gray-300">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center icon */}
                  <div className="hidden md:flex w-20 h-20 rounded-full items-center justify-center relative z-10 shrink-0">
                    <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-xl" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                      {/* Icon based on type */}
                      {achievement.title.includes('GUJCET') && (
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      )}
                      {achievement.title.includes('Trek') && (
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      )}
                      {achievement.title.includes('Fitness') && (
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {achievement.title.includes('Art') && (
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "GUJCET Percentile", value: "99.16%", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
            { label: "Trek Altitude", value: "15K ft", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
            { label: "Weight Lost", value: "27 kg", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { label: "National Awards", value: "1", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
