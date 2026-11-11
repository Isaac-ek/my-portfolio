import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const Skills = (props: React.HTMLAttributes<HTMLElement>) => (
  <section
    {...props}
    id="skills"
    className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-24 border-t border-white/10"
  >
    {/* Editorial Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-12 gap-4">
      <div>
        <span className="font-mono text-[11px] tracking-widest text-[#71717a] uppercase block mb-2">
          [INDEX / 03] • TECHNICAL CAPABILITY MATRIX
        </span>
        <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-[#f4f4f2] tracking-tight uppercase">
          TOOLING &amp; SPECS
        </h2>
      </div>
      <div className="font-mono text-xs text-[#8e8e93]">
        [CORE COMPETENCY DIVISIONS]
      </div>
    </div>

    {/* 4 Architectural Matrix Boxes */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {profile.skillGroups.map((group, idx) => {
        const indexStr = String(idx + 1).padStart(2, '0');
        return (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="border border-white/10 bg-[#0e0e11] p-6 sm:p-8 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
              <span className="text-white font-bold">[{indexStr}]</span>
              <span className="text-[#a1a1aa] uppercase tracking-wider text-[11px]">
                {group.title}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border border-white/10 bg-white/5 px-3 py-1.5 text-[#d4d4d8] hover:border-white/40 hover:text-white transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* Industry Certifications Panel */}
    <div className="mt-12 border border-white/10 bg-[#0e0e11] p-6 sm:p-8 font-mono text-xs space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[#71717a]">
        <span>[CREDENTIAL VERIFICATIONS]</span>
        <span>ACCREDITED EXAMINATIONS</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {profile.certifications.map((cert) => (
          <div key={cert.label} className="border-l border-white/10 pl-4 space-y-1.5">
            <h4 className="font-bold text-[#f4f4f2] text-xs leading-snug">{cert.label}</h4>
            {cert.issuer && <p className="text-[11px] text-[#71717a]">{cert.issuer}</p>}
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[10px] text-white underline hover:text-[#d4d4d8] pt-1"
              >
                VERIFY CREDLY RECORD ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
