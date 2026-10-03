import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Wrench, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap = {
  Code2: Code2,
  Cpu: Cpu,
  Globe: Globe,
  Wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[#27272A]/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-[#7C3AED] uppercase tracking-widest font-semibold">// 02</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight">
            Technical Skills
          </h2>
          <div className="h-[1px] bg-[#27272A] flex-1 ml-4 hidden sm:block" />
        </div>

        {/* Subtitle */}
        <p className="text-base text-[#A1A1AA] max-w-2xl mb-12">
          A structured overview of core programming languages, algorithmic problem solving concepts, full-stack frameworks, and developer tooling.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Code2;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#121215] border border-[#27272A] rounded-2xl p-6 sm:p-8 hover:border-[#7C3AED]/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#27272A]/60">
                  <div className="w-9 h-9 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#7C3AED]">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F5]">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#7C3AED]/50 hover:bg-[#1C1C21] transition-all duration-200"
                    >
                      <CheckCircle2 size={13} className="text-[#7C3AED] opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="text-xs sm:text-sm font-medium text-[#F5F5F5] group-hover:text-white">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
