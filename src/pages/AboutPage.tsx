import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { profile } from '../data/profile';

const AboutPage = () => (
  <>
    <Navbar />
    <main className="max-w-5xl mx-auto px-4 sm:px-8 py-28 md:py-36 space-y-16">
      {/* Dossier Masthead */}
      <div className="border border-white/10 bg-[#0e0e11] p-8 sm:p-14 space-y-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[11px] text-[#71717a] uppercase tracking-widest">
          <span>[DOSSIER MMXXVI]</span>
          <span className="text-white">FULL-STACK ENGINEER &amp; VISUAL DESIGNER</span>
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
            <span className="text-[#71717a] uppercase text-[10px] block">LOCATION</span>
            <span className="text-[#f4f4f2] mt-0.5 block">{profile.location}</span>
          </div>
          <div>
            <span className="text-[#71717a] uppercase text-[10px] block">EMAIL</span>
            <a href={`mailto:${profile.email}`} className="text-[#f4f4f2] hover:underline mt-0.5 block truncate">
              {profile.email}
            </a>
          </div>
          <div>
            <span className="text-[#71717a] uppercase text-[10px] block">LINKEDIN</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#f4f4f2] hover:underline mt-0.5 block">
              chiemelie-ekezie ↗
            </a>
          </div>
          <div>
            <span className="text-[#71717a] uppercase text-[10px] block">PORTFOLIO</span>
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
            DOWNLOAD MASTER CV PDF [214KB] ↓
          </a>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-6 py-3.5 text-white hover:border-white transition"
          >
            INSPECT PDF IN BROWSER ↗
          </a>
        </div>
      </div>

      {/* Executive Summary Narrative */}
      <section className="border border-white/10 bg-[#0e0e11] p-8 sm:p-12 space-y-4">
        <div className="font-mono text-xs text-[#71717a] uppercase tracking-wider mb-2">
          [EXECUTIVE PROFILE]
        </div>
        <p className="font-space text-base sm:text-lg leading-relaxed text-[#d4d4d8]">
          {profile.intro}
        </p>
      </section>

      {/* Core Competency Matrix */}
      <section className="border border-white/10 bg-[#0e0e11] p-8 sm:p-12 space-y-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-[#71717a]">
          <span>[CORE COMPETENCY MATRIX]</span>
          <span>TRANSCRIPTION FROM MASTER CURRICULUM VITAE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.skillGroups.map((group, idx) => (
            <div key={group.title} className="border border-white/5 bg-[#141418] p-6 space-y-3 font-mono text-xs">
              <span className="text-white font-bold block text-sm">
                0{idx + 1} // {group.title}
              </span>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {group.items.map((item) => (
                  <span key={item} className="border border-white/10 bg-[#08080a] px-2.5 py-1 text-[#d4d4d8]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience Archive */}
      <section className="border border-white/10 bg-[#0e0e11] p-8 sm:p-12 space-y-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-[#71717a]">
          <span>[CHRONOLOGICAL RECORD]</span>
          <span>ENTERPRISE &amp; INDEPENDENT PRACTICE</span>
        </div>

        <div className="divide-y divide-white/10">
          {profile.experience.map((exp) => (
            <div key={exp.role} className="py-8 space-y-4 first:pt-0 last:pb-0 group cursor-default">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
                <span className="text-white font-bold text-lg font-syne group-hover:text-white transition-colors duration-200">{exp.role}</span>
                <span className="border border-white/10 group-hover:border-white/30 px-3 py-1 text-[#a1a1aa] group-hover:text-[#d4d4d8] w-fit transition-all duration-200">
                  {exp.period}
                </span>
              </div>

              <div className="font-mono text-xs text-[#8e8e93] group-hover:text-[#a1a1aa] transition-colors duration-200">
                {exp.company} • {exp.location}
              </div>

              <p className="font-space text-sm text-[#d4d4d8] group-hover:text-white leading-relaxed transition-colors duration-200">
                {exp.summary}
              </p>

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="space-y-2 pt-2 font-mono text-xs text-[#a1a1aa]">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 group-hover:text-[#d4d4d8] transition-colors duration-200">
                      <span className="text-white">✦</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education & Industry Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        <section className="border border-white/10 bg-[#0e0e11] p-8 space-y-4 font-mono text-xs">
          <div className="text-[#71717a] border-b border-white/10 pb-3 uppercase tracking-wider">
            [ACADEMIC BACKGROUND]
          </div>
          {profile.education.map((edu) => (
            <div key={edu.institution} className="space-y-1">
              <span className="text-white font-bold block text-sm">{edu.institution}</span>
              <p className="text-[#d4d4d8]">{edu.degree}</p>
              <p className="text-[#71717a] text-[11px]">{edu.period} • {edu.location}</p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="border border-white/10 bg-[#0e0e11] p-8 space-y-4 font-mono text-xs">
          <div className="text-[#71717a] border-b border-white/10 pb-3 uppercase tracking-wider">
            [INDUSTRY CREDENTIALS]
          </div>
          <div className="space-y-3">
            {profile.certifications.map((cert) => (
              <div key={cert.label} className="border-b border-white/5 pb-2.5 last:border-none">
                <span className="text-white font-medium block">{cert.label}</span>
                {cert.issuer && <span className="text-[#71717a] text-[11px] block">{cert.issuer}</span>}
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-white underline hover:text-[#d4d4d8] inline-block mt-0.5"
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
    <Footer />
  </>
);

export default AboutPage;
