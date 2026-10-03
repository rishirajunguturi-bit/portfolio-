import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';
import { educationTimeline } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-[#27272A]/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#7C3AED] uppercase tracking-widest font-semibold">// 05</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight">
            Education Timeline
          </h2>
          <div className="h-[1px] bg-[#27272A] flex-1 ml-4 hidden sm:block" />
        </div>

        <p className="text-base text-[#A1A1AA] max-w-2xl mb-14">
          Academic progression and formal Computer Science and Engineering foundation.
        </p>

        {/* Timeline Container */}
        <div className="max-w-3xl relative pl-6 sm:pl-8 border-l border-[#27272A] space-y-12 ml-2 sm:ml-4">
          {educationTimeline.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Dot Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#0B0B0B] border-2 border-[#7C3AED] flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              </div>

              {/* Timeline Card */}
              <div className="bg-[#121215] border border-[#27272A] rounded-2xl p-6 sm:p-8 hover:border-[#7C3AED]/40 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#18181B] text-[#7C3AED] border border-[#27272A]">
                    <Calendar size={12} />
                    {item.period}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#F5F5F5] bg-[#7C3AED]/10 border border-[#7C3AED]/30 px-3 py-1 rounded-full">
                    <Award size={13} className="text-[#7C3AED]" />
                    <span>{item.scoreLabel}: {item.score}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-[#A1A1AA] font-medium mb-4">
                  <Building2 size={16} className="text-[#7C3AED] shrink-0" />
                  <span>{item.institution}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
