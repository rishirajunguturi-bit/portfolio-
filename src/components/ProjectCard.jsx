import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, CheckCircle, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';


export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-[#121215] border border-[#27272A] rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-[#7C3AED]/40 transition-all duration-300 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Info Column */}
        <div className={`lg:col-span-6 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
          {/* Top Identifier */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7C3AED] uppercase">
              PROJECT / {project.id}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#18181B] text-[#A1A1AA] border border-[#27272A]">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] group-hover:text-white transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            {project.description}
          </p>

          {/* Problem Statement Box */}
          {project.problem && (
            <div className="p-4 rounded-xl bg-[#0D0D10] border border-[#27272A]/70 text-xs sm:text-sm text-[#A1A1AA] space-y-1">
              <span className="text-xs font-mono font-semibold text-[#F5F5F5] uppercase block tracking-wider text-[#7C3AED]">
                Problem Solved:
              </span>
              <p>{project.problem}</p>
            </div>
          )}

          {/* Machine Learning Models if present */}
          {project.models && (
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider block">
                Evaluated ML Models:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.models.map((model) => (
                  <span
                    key={model}
                    className="px-2.5 py-1 rounded-md bg-[#18181B] text-xs font-medium text-[#F5F5F5] border border-[#27272A]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Features List */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider block">
              Key Features:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                  <CheckCircle size={14} className="text-[#7C3AED] mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Stack Tags */}
          <div className="pt-2 border-t border-[#27272A]/60 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-[#18181B] text-xs font-mono text-[#A1A1AA] border border-[#27272A]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#18181B] hover:bg-[#222226] text-[#F5F5F5] border border-[#27272A] hover:border-[#7C3AED] font-semibold text-xs transition-all"
              >
                <GithubIcon size={15} />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-xs transition-all"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={15} />
              </a>
            ) : null}
          </div>
        </div>

        {/* Right Visual Image Column */}
        <div className={`lg:col-span-6 ${!isEven ? 'lg:order-1' : ''}`}>
          <div className="relative rounded-xl overflow-hidden border border-[#27272A] bg-[#0D0D10] shadow-2xl group-hover:border-[#7C3AED]/50 transition-colors">
            <img
              src={project.image}
              alt={`${project.title} Preview Screenshot`}
              className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
