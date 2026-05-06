import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/akshatdhanak" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshat-soni-b984bb283/" },
  { label: "LeetCode", href: "https://leetcode.com/u/Akshat_Dhanak/" },
  { label: "Instagram", href: "https://www.instagram.com/akshat_dhanak/" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 border border-accent-orange/40 flex items-center justify-center">
                <div className="bracket bracket-tl" style={{ width: 5, height: 5 }} />
                <div className="bracket bracket-br" style={{ width: 5, height: 5 }} />
                <span className="font-display font-black text-sm text-white">A</span>
              </div>
              <span className="font-display font-bold text-white text-sm">AKSHAT <span className="text-accent-orange">.D</span></span>
            </div>
            <p className="font-mono text-[11px] text-zinc-600 leading-relaxed">
              Full-Stack Developer &amp; AI/ML Engineer<br />
              Building intelligent software.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="hud-dot" />
              <span className="font-mono text-[10px] text-zinc-600">System Online</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-[9px] text-zinc-700 uppercase tracking-[0.25em] mb-5">Navigate</p>
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="font-mono text-xs text-zinc-600 hover:text-accent-orange transition-colors duration-300">
                  &gt; {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono text-[9px] text-zinc-700 uppercase tracking-[0.25em] mb-5">Connect</p>
            <div className="flex flex-col gap-2">
              {socials.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-zinc-600 hover:text-accent-orange transition-colors duration-300">
                  &gt; {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="line-h w-full mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-zinc-800 tracking-wider">DESIGNED &amp; BUILT BY AKSHAT DHANAK</p>
          <p className="font-mono text-[10px] text-zinc-800 tracking-wider">{new Date().getFullYear()} — ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
