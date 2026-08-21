import Navbar from '../components/Navbar';
import { profile } from '../data/profile';

const AboutPage = () => (
  <>
    <Navbar />
    <div data-aos="fade-up">
      <main className="container mx-auto min-h-[70vh] max-w-5xl px-4 py-28 sm:px-8 md:px-16">
        {/* Header Hero */}
        <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/70 p-8 sm:p-12 shadow-[0_25px_80px_rgba(2,12,27,0.5)] backdrop-blur">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Professional Profile
            </span>
            <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">
              {profile.name}
            </h1>
            <h2 className="mt-3 text-xl font-semibold text-slate-200 sm:text-2xl max-w-3xl">
              {profile.role}
            </h2>

            {/* Contact Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-slate-300">
              <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
                📍 {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 hover:border-cyan-400/40 hover:text-cyan-300 transition"
              >
                ✉️ {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 hover:border-cyan-400/40 hover:text-cyan-300 transition"
              >
                📞 {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-cyan-200 hover:bg-cyan-400/20 transition"
              >
                🔗 LinkedIn
              </a>
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-1.5 text-fuchsia-200 hover:bg-fuchsia-400/20 transition"
              >
                🌐 Portfolio Website
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={profile.resumePath}
                download
                className="rounded-full bg-cyan-400 px-8 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Download Resume PDF
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mt-12 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 backdrop-blur">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-cyan-400">✦</span> Professional Summary
          </h3>
          <p className="mt-4 leading-relaxed text-slate-200 text-lg">
            {profile.intro}
          </p>

          {/* Top Skills */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Top Skills & Focus Areas</h4>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {profile.topSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-12 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 backdrop-blur">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-cyan-400">💼</span> Experience
          </h3>

          <div className="mt-8 space-y-8">
            {profile.experience.map((exp) => (
              <div
                key={exp.role}
                className="relative pl-6 border-l-2 border-cyan-400/30 space-y-3"
              >
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-cyan-400 bg-slate-950" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <span className="inline-block text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-300">
                  <span className="text-cyan-200 font-semibold">{exp.company}</span> • {exp.location}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">{exp.summary}</p>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-cyan-400 mt-1 text-xs">▫</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Education */}
          <section className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 backdrop-blur">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-cyan-400">🎓</span> Education
            </h3>
            <div className="mt-6 space-y-6">
              {profile.education.map((edu) => (
                <div key={edu.institution} className="rounded-2xl border border-white/5 bg-white/5 p-5">
                  <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">{edu.period}</span>
                  <h4 className="mt-1 text-lg font-bold text-white">{edu.institution}</h4>
                  <p className="text-sm font-medium text-slate-200">{edu.degree}</p>
                  <p className="mt-1 text-xs text-slate-400">{edu.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 backdrop-blur">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-fuchsia-400">📜</span> Certifications
            </h3>
            <div className="mt-6 space-y-4">
              {profile.certifications.map((cert) => (
                <div
                  key={cert.label}
                  className={`rounded-2xl border p-5 ${
                    cert.highlight
                      ? 'border-fuchsia-400/40 bg-fuchsia-400/10'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-white">{cert.label}</h4>
                      {cert.issuer && <p className="text-xs text-slate-300 mt-1">{cert.issuer}</p>}
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-cyan-300 hover:underline shrink-0"
                      >
                        Verify ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  </>
);

export default AboutPage;

