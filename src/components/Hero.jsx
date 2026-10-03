import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Sparkles, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profile } from '../data/profile';


export default function Hero() {
  const handleScrollToWork = (e) => {
    e.preventDefault();
    const projectsSec = document.querySelector('#projects');
    if (projectsSec) {
      const offsetTop = projectsSec.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex flex-col justify-center relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#7C3AED]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        <div className="max-w-3xl">
          {/* Small Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono font-medium text-[#A1A1AA] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="tracking-wider uppercase">COMPUTER SCIENCE STUDENT</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08] mb-6"
          >
            Hi, I'm <span className="text-white underline decoration-[#7C3AED]/60 decoration-wavy decoration-2 underline-offset-8">Rishi</span>.
          </motion.h1>

          {/* Supporting Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-[#A1A1AA] leading-relaxed mb-6"
          >
            I build software, solve problems, and turn ideas into practical products.
          </motion.h2>

          {/* Short Bio Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-[#A1A1AA]/90 leading-relaxed font-normal mb-10 max-w-2xl"
          >
            Currently pursuing B.Tech in Computer Science and Engineering at {profile.institute}, with a strong focus on Data Structures & Algorithms, full-stack software development, and practical AI/ML applications.
          </motion.p>

          {/* Buttons & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <a
              href="#projects"
              onClick={handleScrollToWork}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#7C3AED]/25 hover:shadow-none"
            >
              <span>View My Work</span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#18181B] hover:bg-[#222226] text-[#F5F5F5] border border-[#27272A] font-semibold text-sm transition-all duration-200"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8 border-t border-[#27272A]/60 flex flex-wrap items-center gap-6"
          >
            <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">Connect:</span>
            
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#A1A1AA]/60"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL</span>
        <ChevronDown size={14} className="animate-bounce text-[#7C3AED]" />
      </motion.div>
    </section>
  );
}
