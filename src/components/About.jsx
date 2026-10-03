import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Calendar, Award, UserCheck } from 'lucide-react';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[#27272A]/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-[#7C3AED] uppercase tracking-widest font-semibold">// 01</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight">
            About Me
          </h2>
          <div className="h-[1px] bg-[#27272A] flex-1 ml-4 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg md:text-xl text-[#F5F5F5]/90 font-normal leading-relaxed">
              I'm a Computer Science and Engineering student who enjoys understanding how software works and solving problems through code. I am particularly interested in data structures and algorithms, full-stack development, and practical applications of AI and machine learning.
            </p>
            <p className="text-base text-[#A1A1AA] leading-relaxed">
              I enjoy building projects, participating in hackathons, and continuously improving my programming and problem-solving skills. Whether optimizing algorithmic complexity or engineering end-to-end web applications, I strive for clean architecture and practical real-world impact.
            </p>

            {/* Quick Core Focus Tags */}
            <div className="pt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] text-xs font-medium text-[#F5F5F5]">
                Data Structures & Algorithms
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] text-xs font-medium text-[#F5F5F5]">
                Full-Stack Web Engineering
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] text-xs font-medium text-[#F5F5F5]">
                Machine Learning Basics
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] text-xs font-medium text-[#F5F5F5]">
                Systematic Problem Solving
              </span>
            </div>
          </motion.div>

          {/* Academic Snapshot Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 bg-[#121215] border border-[#27272A] rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden group hover:border-[#7C3AED]/40 transition-colors"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#27272A]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED]">
                  <GraduationCap size={18} />
                </div>
                <h3 className="text-base font-bold text-[#F5F5F5]">Academic Profile</h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#1C1C21] text-[#7C3AED] font-semibold">
                CSE
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <GraduationCap size={16} className="text-[#A1A1AA] mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-[#A1A1AA] block">Degree</span>
                  <span className="font-semibold text-[#F5F5F5]">{profile.degree}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 size={16} className="text-[#A1A1AA] mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-[#A1A1AA] block">Institute</span>
                  <span className="font-semibold text-[#F5F5F5] leading-snug block">
                    {profile.institute}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#27272A]/60">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#A1A1AA]" />
                  <div>
                    <span className="text-xs text-[#A1A1AA] block">Status</span>
                    <span className="font-semibold text-[#F5F5F5]">{profile.timeline}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-right">
                  <Award size={16} className="text-[#7C3AED]" />
                  <div>
                    <span className="text-xs text-[#A1A1AA] block">Current CGPA</span>
                    <span className="font-bold text-[#7C3AED] text-base">{profile.cgpa} / 10</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
