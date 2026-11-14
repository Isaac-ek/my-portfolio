import React from 'react';
import { profile } from '../data/profile';
import { Link } from 'react-router-dom';

const About = (props: React.HTMLAttributes<HTMLElement>) => (
  <section
    {...props}
    id="about"
    className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-24 border-t border-white/10"
  >
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-12 gap-4">
      <div>
        <span className="font-mono text-[11px] tracking-widest text-[#71717a] uppercase block mb-2">
          [INDEX / 02] • PROFILE &amp; PROFESSIONAL RECORD
        </span>
        <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-[#f4f4f2] tracking-tight uppercase">
          THE DOSSIER
        </h2>
      </div>
      <a
        href="/about"
        className="font-mono text-xs border border-white/20 hover:border-white px-5 py-2.5 transition text-[#d4d4d8] hover:text-white"
      >
        READ FULL CURRICULUM VITAE →
      </a>
    </div>

    {/* Human Bio & Philosophy */}
    <div className="max-w-3xl space-y-6">
        <h3 className="font-serif italic text-3xl sm:text-4xl text-[#f4f4f2] font-normal leading-snug">
          &ldquo;Engineering rigorous software architectures without sacrificing aesthetic soul.&rdquo;
        </h3>
        <p className="font-space text-base text-[#a1a1aa] leading-relaxed">
          Based in Nigeria, I combine an IT operations role at Bakan Gizo with independent software and
          design projects. That work ranges from staff issue-tracking tools to client-facing applications
          and coordinated packaging ranges.
        </p>
        <Link to="/skills" className="inline-block font-mono text-xs text-[#d4d4d8] underline underline-offset-4 hover:text-white">Technical skills &amp; certifications →</Link>
    </div>

    {/* Ruled Experience Table */}
    <div className="mt-16 border-t border-white/10 pt-10">
      <div className="flex items-center justify-between mb-8 font-mono text-xs text-[#71717a]">
        <span>[CAREER TIMELINE]</span>
        <span>2022 — PRESENT</span>
      </div>

      <div className="divide-y divide-white/10 border-y border-white/10">
        {profile.experience.map((exp) => (
          <div
            key={exp.role}
            className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start group hover:bg-white/[0.03] transition-all duration-200 px-4 cursor-default"
          >
            <div className="md:col-span-3 font-mono text-xs text-[#71717a] group-hover:text-[#a1a1aa] transition-colors duration-200">
              {exp.period}
            </div>
            <div className="md:col-span-4">
              <h4 className="font-syne font-bold text-lg text-[#f4f4f2] group-hover:text-white transition-colors duration-200">{exp.role}</h4>
              <p className="font-mono text-xs text-[#a1a1aa] group-hover:text-[#d4d4d8] mt-0.5 transition-colors duration-200">
                {exp.company} • {exp.location}
              </p>
            </div>
            <div className="md:col-span-5 font-space text-xs text-[#a1a1aa] group-hover:text-[#d4d4d8] leading-relaxed transition-colors duration-200">
              {exp.summary}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
