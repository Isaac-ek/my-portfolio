import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const About = (props: React.HTMLAttributes<HTMLElement>) => (
  <section
    {...props}
    className="container mx-auto max-w-6xl px-4 py-20 sm:px-8 md:px-16 lg:px-24"
    data-aos="fade-up"
  >
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Left col */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About Me</p>
        <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
          Code meets{' '}
          <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Craft.
          </span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.intro}</p>

        {/* Dual discipline visual split */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <motion.div
            className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5"
            whileHover={{ borderColor: 'rgba(6,182,212,0.5)', boxShadow: '0 0 28px rgba(6,182,212,0.15)' }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-3 text-2xl">⚡</div>
            <h3 className="font-black text-white">Full-Stack & Cloud</h3>
            <p className="mt-1 text-sm text-slate-300">
              Next.js 15, React 19, TypeScript, Node.js, Python/Flask, PostgreSQL, AWS, Odoo ERP
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/5 p-5"
            whileHover={{ borderColor: 'rgba(217,70,239,0.5)', boxShadow: '0 0 28px rgba(217,70,239,0.15)' }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-3 text-2xl">🎨</div>
            <h3 className="font-black text-white">Design & UX</h3>
            <p className="mt-1 text-sm text-slate-300">
              Adobe Photoshop, Figma, Brand Identity, UI/UX Layouts, Vector Graphics, Micro-animations
            </p>
          </motion.div>
        </div>

        {/* Top Skills Badges */}
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Competencies</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.topSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-medium text-cyan-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {profile.strengths.map((strength) => (
            <motion.div
              key={strength}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-sm"
              whileHover={{ borderColor: 'rgba(6,182,212,0.3)', scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-cyan-400">✦</span>
                <span>{strength}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right col */}
      <div className="space-y-6">
        {/* Services Card */}
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.45)] backdrop-blur">
          <h3 className="text-2xl font-bold text-white">What I Deliver</h3>
          <div className="mt-5 space-y-2.5">
            {profile.services.map((service, i) => {
              const isDesign =
                service.toLowerCase().includes('brand') ||
                service.toLowerCase().includes('design') ||
                service.toLowerCase().includes('ui/ux') ||
                service.toLowerCase().includes('content');
              return (
                <motion.div
                  key={service}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm text-slate-200 transition ${
                    isDesign
                      ? 'border-fuchsia-400/15 bg-fuchsia-400/5 hover:bg-fuchsia-400/10'
                      : 'border-cyan-400/15 bg-cyan-400/5 hover:bg-cyan-400/10'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className={`h-2 w-2 rounded-full ${isDesign ? 'bg-fuchsia-400' : 'bg-cyan-400'}`} />
                  <span>{service}</span>
                  {isDesign && (
                    <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-fuchsia-400/70">
                      Creative
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education & AWS Certification Snapshot */}
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 backdrop-blur">
          <h3 className="text-xl font-bold text-white">Education &amp; Certification</h3>
          <div className="mt-4 space-y-4 text-sm">
            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <p className="font-semibold text-cyan-200">Covenant University</p>
              <p className="text-slate-300">Bachelor&apos;s degree, Computer Science</p>
              <p className="mt-1 text-xs text-slate-400">Nov 2021 – Oct 2025 • Ota, Nigeria</p>
            </div>
            <a
              href="https://www.credly.com/badges/1a0ca469-c7f7-4850-b13c-9459ffc24530/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-fuchsia-400/30 bg-fuchsia-400/10 p-4 transition hover:bg-fuchsia-400/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-fuchsia-200">AWS Solutions Architect – Associate</p>
                  <p className="text-xs text-slate-300">Amazon Web Services (SAA-C03)</p>
                </div>
                <span className="text-xs text-fuchsia-300 underline">Verify ↗</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Work Experience Timeline Snapshot */}
    <div className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 backdrop-blur">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Professional Path</p>
          <h3 className="mt-1 text-3xl font-black text-white">Work Experience</h3>
        </div>
        <a
          href="/about"
          className="self-start rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/20"
        >
          Full Resume Details →
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {profile.experience.map((exp) => (
          <motion.div
            key={exp.role}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6"
            whileHover={{ borderColor: 'rgba(6,182,212,0.3)', boxShadow: '0 0 30px rgba(6,182,212,0.08)' }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <span className="inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                {exp.period}
              </span>
              <h4 className="mt-3 text-lg font-bold text-white">{exp.role}</h4>
              <p className="text-sm font-medium text-slate-300">
                {exp.company} • {exp.location}
              </p>
              <p className="mt-3 line-clamp-4 text-xs leading-relaxed text-slate-300">{exp.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
