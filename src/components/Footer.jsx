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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshat-dhanak-b984bb283/" },
  { label: "LeetCode", href: "https://leetcode.com/u/Akshat_Dhanak/" },
  { label: "Instagram", href: "https://www.instagram.com/akshat_dhanak/" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.04]">
      <div className="sec-inner py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="font-display text-lg font-bold text-white">
              A<span className="grad-text">.</span>D
            </span>
            <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
              Full-Stack Developer & AI/ML Enthusiast<br />
              Building intelligent software.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-4">Navigate</p>
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-zinc-500 hover:text-white transition-colors duration-300">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              {socials.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-accent-blue transition-colors duration-300">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="line-h w-full mt-12 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-700">
            Designed & Built by Akshat Dhanak
          </p>
          <p className="text-xs text-zinc-800 font-mono">
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
