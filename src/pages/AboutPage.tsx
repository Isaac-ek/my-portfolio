import React from 'react';
import { profile } from '../data/profile';

const AboutPage: React.FC = () => (
  <main className="max-w-5xl mx-auto px-4 sm:px-8 py-28 md:py-36 space-y-16">
    {/* Dossier Masthead */}
    <header className="border border-white/10 bg-[#0e0e11] p-8 sm:p-14 space-y-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[11px] text-[#a1a1aa] uppercase tracking-widest">
        <span>[DOSSIER MMXXVI]</span>
        <span className="text-white font-semibold">FULL-STACK ENGINEER &amp; VISUAL DESIGNER</span>
      </div>

      <div className="space-y-3">
        <h1 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tighter uppercase leading-[0.9]">
          {profile.name}
        </h1>
        <p className="font-serif italic text-2xl sm:text-3xl text-[#d4d4d8] font-normal">
          &ldquo;Operating across deep backend architecture, cloud systems, and editorial visual craft.&rdquo;
        </p>
      </div>

      {/* Quick Coordinates Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-white/10 py-6 font-mono text-xs">
        <div>
          <span className="text-[#a1a1aa] uppercase text-[10px] block font-semibold">LOCATION</span>
          <span className="text-[#f4f4f2] mt-0.5 block">{profile.location}</span>
        </div>
        <div>
          <span className="text-[#a1a1aa] uppercase text-[10px] block font-semibold">EMAIL</span>
          <a href={`mailto:${profile.email}`} className="text-[#f4f4f2] hover:underline mt-0.5 block truncate">
            {profile.email}
          </a>
        </div>
        <div>
          <span className="text-[#a1a1aa] uppercase text-[10px] block font-semibold">LINKEDIN</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#f4f4f2] hover:underline mt-0.5 block">
            chiemelie-ekezie ↗
          </a>
        </div>
        <div>
          <span className="text-[#a1a1aa] uppercase text-[10px] block font-semibold">PORTFOLIO</span>
          <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-[#f4f4f2] hover:underline mt-0.5 block">
            ekezie-chiemelie ↗
          </a>
        </div>
      </div>

      {/* Master PDF Download Actions */}
      <div className="flex flex-wrap gap-4 font-mono text-xs pt-2">
        <a
          href={profile.resumePath}
          download="Ekezie_Chiemelie_Isaac_Resume.pdf"
          className="border border-white bg-white text-black font-semibold px-6 py-3.5 hover:bg-[#d4d4d8] transition"
        >
          DOWNLOAD CV PDF ↓
        </a>
        <a
          href={profile.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 bg-white/5 px-6 py-3.5 text-white hover:border-white transition"
        >
          INSPECT PDF IN BROWSER ↗
        </a>
      </div>
    </header>

    {/* Executive Summary Narrative */}
    <section aria-labelledby="exec-heading" className="border border-white/10 bg-[#0e0e11] p-8 sm:p-12 space-y-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <h2 id="exec-heading" className="font-mono text-xs font-bold text-white uppercase tracking-wider">
          [01 // EXECUTIVE PROFILE]
        </h2>
        <span className="font-mono text-[10px] text-[#a1a1aa]">PROFESSIONAL DOSSIER</span>
      </div>
      <p className="font-space text-base sm:text-lg leading-relaxed text-[#d4d4d8]">
        {profile.intro}
      </p>
    </section>

    {/* Professional Experience Archive */}
    <section aria-labelledby="experience-heading" className="border border-white/10 bg-[#0e0e11] p-8 sm:p-12 space-y-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-[#a1a1aa]">
        <h2 id="experience-heading" className="font-mono text-xs font-bold text-white uppercase tracking-wider">
          [02 // PROFESSIONAL EXPERIENCE]
        </h2>
        <span>ENTERPRISE &amp; INDEPENDENT PRACTICE</span>
      </div>

      <div className="divide-y divide-white/10">
        {profile.experience.map((exp) => (
          <article key={exp.role} className="py-8 space-y-4 first:pt-0 last:pb-0 group cursor-default">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
              <h3 className="text-white font-bold text-lg font-syne group-hover:text-white transition-colors duration-200">
                {exp.role}
              </h3>
              <span className="border border-white/10 group-hover:border-white/30 px-3 py-1 text-[#a1a1aa] group-hover:text-[#d4d4d8] w-fit transition-all duration-200">
                {exp.period}
              </span>
            </div>

            <p className="font-mono text-xs text-[#a1a1aa] font-medium">
              {exp.company} • {exp.location}
            </p>

            <p className="font-space text-sm text-[#d4d4d8] leading-relaxed">
              {exp.summary}
            </p>

            {exp.highlights && exp.highlights.length > 0 && (
              <div className="pt-2">
                <span className="font-mono text-[10px] text-[#a1a1aa] uppercase tracking-wider block mb-2 font-semibold">
                  Selected contributions:
                </span>
                <ul className="space-y-2.5 font-space text-xs text-[#d4d4d8]">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-emerald-400 font-mono text-xs mt-0.5">✦</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>

    <section aria-labelledby="competency-heading" className="border border-white/10 bg-[#0e0e11] p-6 sm:p-8">
      <details>
        <summary className="cursor-pointer font-mono text-xs text-[#d4d4d8]">
          <h2 id="competency-heading" className="inline font-bold uppercase tracking-wider text-white">[03 // TECHNICAL SKILLS &amp; TOOLS]</h2>
          <span className="block mt-2 text-[11px] text-[#a1a1aa]">Expand to review the full skill set.</span>
        </summary>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profile.skillGroups.map((group) => (
            <div key={group.title} className="space-y-2">
              <h3 className="font-mono text-xs font-semibold text-white">{group.title}</h3>
              <p className="font-space text-sm leading-relaxed text-[#a1a1aa]">{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </details>
    </section>

    {/* Education & Industry Certifications */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Education */}
      <section aria-labelledby="edu-heading" className="border border-white/10 bg-[#0e0e11] p-8 space-y-4 font-mono text-xs">
        <h2 id="edu-heading" className="text-white font-bold border-b border-white/10 pb-3 uppercase tracking-wider">
          [04 // ACADEMIC BACKGROUND]
        </h2>
        {profile.education.map((edu) => (
          <div key={edu.institution} className="space-y-1">
            <h3 className="text-white font-bold text-sm">{edu.institution}</h3>
            <p className="text-[#d4d4d8]">{edu.degree}</p>
            <p className="text-[#a1a1aa] text-[11px]">{edu.period} • {edu.location}</p>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section aria-labelledby="cert-heading" className="border border-white/10 bg-[#0e0e11] p-8 space-y-4 font-mono text-xs">
        <h2 id="cert-heading" className="text-white font-bold border-b border-white/10 pb-3 uppercase tracking-wider">
          [05 // INDUSTRY CREDENTIALS]
        </h2>
        <div className="space-y-3">
          {profile.certifications.map((cert) => (
            <div key={cert.label} className="border-b border-white/5 pb-2.5 last:border-none">
              <h3 className="text-white font-medium">{cert.label}</h3>
              {cert.issuer && <span className="text-[#a1a1aa] text-[11px] block">{cert.issuer}</span>}
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-white underline hover:text-[#d4d4d8] inline-block mt-0.5"
                >
                  VERIFY RECORD ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default AboutPage;
