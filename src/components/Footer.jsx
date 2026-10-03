import React from 'react';
import { profile } from '../data/profile';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#27272A] py-12 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#A1A1AA]">
        {/* Copyright */}
        <div className="flex items-center gap-2">
          <span>© {currentYear} {profile.name}.</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">All rights reserved.</span>
        </div>

        {/* Stack Mention */}
        <div className="font-mono text-[11px] text-[#A1A1AA]/80 bg-[#121215] px-3 py-1.5 rounded-lg border border-[#27272A]">
          Built with React · Vite · Tailwind CSS · Framer Motion
        </div>

        {/* Footer Links */}
        <div className="flex items-center space-x-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon size={14} />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
