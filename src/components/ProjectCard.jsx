import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, Code2, Terminal, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectCard({ project, index }) {
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim() !== '');
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim() !== '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#121215] border border-[#27272A] rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-[#7C3AED]/40 transition-all duration-300 group shadow-lg"
    >
      <div className="space-y-6">
        {/* Top Header: ID Badge & Category Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#27272A]/50">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7C3AED] uppercase">
            PROJECT / {project.id}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#18181B] text-[#A1A1AA] border border-[#27272A]">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] group-hover:text-white transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-base text-[#A1A1AA] leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Grid for Features & Technical Implementation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          
          {/* Key Features Column */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C3AED] font-semibold block">
              Key Features
            </span>
            <ul className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A1A1AA]">
                  <CheckCircle2 size={16} className="text-[#7C3AED] mt-0.5 shrink-0" />
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Implementation Column */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C3AED] font-semibold block">
              Technical Implementation
            </span>
            <div className="p-4 rounded-xl bg-[#0D0D10] border border-[#27272A] text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              {project.implementation}
            </div>

            {/* ML Models if present */}
            {project.models && (
              <div className="pt-2 space-y-2">
                <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider block">
                  Evaluated Models:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.models.map((model) => (
                    <span
                      key={model}
                      className="px-2.5 py-0.5 rounded-md bg-[#18181B] text-xs font-medium text-[#F5F5F5] border border-[#27272A]"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="pt-4 border-t border-[#27272A]/60 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] block">
            Technologies Used
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-[#18181B] text-xs font-mono text-[#A1A1AA] border border-[#27272A]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub & Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          {hasGithubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#18181B] hover:bg-[#222226] text-[#F5F5F5] border border-[#27272A] hover:border-[#7C3AED] font-semibold text-xs transition-all shadow-sm"
            >
              <GithubIcon size={16} />
              <span>GitHub Repository</span>
            </a>
          ) : (
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#18181B]/80 text-[#A1A1AA] border border-[#27272A] font-semibold text-xs cursor-not-allowed opacity-80"
              title="Repository URL can be added in src/data/projects.js"
            >
              <GithubIcon size={16} className="text-[#A1A1AA]/60" />
              <span>GitHub Repository</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#27272A] text-[#A1A1AA]">Configurable</span>
            </div>
          )}

          {hasLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-xs transition-all shadow-md"
            >
              <span>Live Demo</span>
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
