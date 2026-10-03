import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, Calendar } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 border-t border-[#27272A]/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#7C3AED] uppercase tracking-widest font-semibold">// 06</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight">
            Certifications & Training
          </h2>
          <div className="h-[1px] bg-[#27272A] flex-1 ml-4 hidden sm:block" />
        </div>

        <p className="text-base text-[#A1A1AA] max-w-2xl mb-12">
          Verified academic and technical skill certifications in programming and professional development.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#121215] border border-[#27272A] rounded-2xl p-6 flex flex-col justify-between hover:border-[#7C3AED]/40 transition-all duration-200 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#7C3AED] group-hover:border-[#7C3AED]/40 transition-colors">
                    <Award size={18} />
                  </div>
                  <span className="text-xs font-mono text-[#A1A1AA] flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <span className="text-xs text-[#7C3AED] font-semibold block mt-1">
                    {cert.issuer}
                  </span>
                </div>

                {/* Covered Skills */}
                <div className="space-y-1.5 pt-2">
                  {cert.skillsCovered.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                      <CheckCircle2 size={12} className="text-[#7C3AED]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#27272A]/60">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (cert.link === '#') {
                      e.preventDefault();
                      alert('Certificate verification link placeholder. Add actual URL in certifications.js');
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#18181B] hover:bg-[#222226] border border-[#27272A] hover:border-[#7C3AED]/50 text-xs font-semibold text-[#F5F5F5] transition-all"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
