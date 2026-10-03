import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-[#27272A]/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#7C3AED] uppercase tracking-widest font-semibold">// 03</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight">
            Featured Projects
          </h2>
          <div className="h-[1px] bg-[#27272A] flex-1 ml-4 hidden sm:block" />
        </div>

        {/* Section Subtitle */}
        <p className="text-base text-[#A1A1AA] max-w-2xl mb-14">
          A selection of real-world application builds addressing full-stack web architectures, student opportunity workflows, agricultural market logistics, and machine learning crop yield prediction.
        </p>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
