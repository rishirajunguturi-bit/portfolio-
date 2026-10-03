import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Activity, Terminal, BrainCircuit, Check } from 'lucide-react';
import { problemSolvingData } from '../data/problemSolving';

export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="py-24 border-t border-[#27272A]/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#7C3AED] uppercase tracking-widest font-semibold">// 04</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight">
            Problem Solving & DSA
          </h2>
          <div className="h-[1px] bg-[#27272A] flex-1 ml-4 hidden sm:block" />
        </div>

        {/* Section Subtitle / Copy */}
        <p className="text-base text-[#A1A1AA] max-w-2xl mb-12">
          {problemSolvingData.quote}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Stats & Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-[#121215] border border-[#27272A] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#27272A]">
                <div className="flex items-center gap-2">
                  <Activity size={18} className="text-[#7C3AED]" />
                  <span className="text-sm font-bold text-[#F5F5F5]">Current Status</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#7C3AED]/15 text-[#7C3AED] border border-[#7C3AED]/30">
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-ping" />
                  {problemSolvingData.statusText}
                </span>
              </div>

              {/* Primary Coding Languages */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                  Primary DSA Languages
                </span>
                <div className="flex flex-wrap gap-2">
                  {problemSolvingData.languages.map((lang) => (
                    <div
                      key={lang}
                      className="px-4 py-2 rounded-xl bg-[#18181B] border border-[#27272A] text-sm font-semibold text-[#F5F5F5] flex items-center gap-2"
                    >
                      <Terminal size={14} className="text-[#7C3AED]" />
                      <span>{lang}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Algorithmic Focus Areas */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                  Algorithmic Focus Topics
                </span>
                <div className="space-y-2">
                  {problemSolvingData.focusTopics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2.5 text-xs text-[#A1A1AA]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                      <span className="text-[#F5F5F5] font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#27272A]/60 flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
              <BrainCircuit size={16} className="text-[#7C3AED]" />
              <span>Consistent algorithmic practice & time complexity optimization</span>
            </div>
          </motion.div>

          {/* Right Platforms Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {problemSolvingData.platforms.map((platform, idx) => {
              const CardWrapper = platform.url ? 'a' : 'div';
              const wrapperProps = platform.url
                ? { href: platform.url, target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <CardWrapper
                    {...wrapperProps}
                    className={`group bg-[#121215] border border-[#27272A] rounded-2xl p-6 flex items-center justify-between transition-all duration-200 ${
                      platform.url ? 'hover:border-[#7C3AED]/50 hover:bg-[#16161B] cursor-pointer' : ''
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                          {platform.name}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium bg-[#18181B] text-[#A1A1AA] border border-[#27272A]">
                          {platform.tag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#A1A1AA]">
                        {platform.description}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#A1A1AA] group-hover:text-[#7C3AED] group-hover:border-[#7C3AED]/40 transition-colors shrink-0 ml-4">
                      {platform.url ? <ExternalLink size={18} /> : <Code size={18} className="opacity-50" />}
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
