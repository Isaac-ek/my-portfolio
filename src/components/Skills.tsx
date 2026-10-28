import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  hover: {
    scale: 1.02,
    boxShadow: '0 18px 45px 0 rgba(6, 182, 212, 0.12)',
    transition: { duration: 0.25 },
  },
};

/* Colour per skill group so they feel alive */
const groupColors: Record<string, { border: string; glow: string; badge: string; titleColor: string }> = {
  'Backend & Cloud': {
    border: 'border-cyan-400/25',
    glow: '0 0 50px rgba(6,182,212,0.1)',
    badge: 'border-cyan-400/20 bg-cyan-400/8 text-cyan-100',
    titleColor: 'text-cyan-300',
  },
  'Enterprise & IT Infrastructure': {
    border: 'border-emerald-400/25',
    glow: '0 0 50px rgba(16,185,129,0.1)',
    badge: 'border-emerald-400/20 bg-emerald-400/8 text-emerald-100',
    titleColor: 'text-emerald-300',
  },
  'Web & E-Commerce': {
    border: 'border-violet-400/25',
    glow: '0 0 50px rgba(139,92,246,0.1)',
    badge: 'border-violet-400/20 bg-violet-400/8 text-violet-100',
    titleColor: 'text-violet-300',
  },
  'Design & Engineering Tools': {
    border: 'border-fuchsia-400/25',
    glow: '0 0 50px rgba(217,70,239,0.12)',
    badge: 'border-fuchsia-400/20 bg-fuchsia-400/8 text-fuchsia-100',
    titleColor: 'text-fuchsia-300',
  },
};

const Skills = (props: React.HTMLAttributes<HTMLElement>) => (
  <section
    {...props}
    className="container mx-auto max-w-6xl px-4 py-20 sm:px-8 md:px-16 lg:px-24"
    id="skills"
    data-aos="fade-up"
  >
    <div className="mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Toolkit</p>
      <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
        Skills &amp;{' '}
        <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          Certifications
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
        From cloud architecture to brand identity — code to canvas.
      </p>

      {/* Decorative divider */}
      <div className="mx-auto mt-6 flex items-center justify-center gap-3">
        <span className="h-px w-20 bg-gradient-to-r from-transparent to-fuchsia-400/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/60" />
        <span className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-400/50" />
      </div>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      {profile.skillGroups.map((group, idx) => {
        const colors = groupColors[group.title] ?? {
          border: 'border-white/10',
          glow: '',
          badge: 'border-white/10 bg-white/5 text-slate-200',
          titleColor: 'text-white',
        };

        return (
          <motion.div
            key={group.title}
            className={`rounded-[1.75rem] border ${colors.border} bg-slate-950/65 p-6 text-left backdrop-blur`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              scale: 1.02,
              boxShadow: colors.glow,
              transition: { duration: 0.25 },
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.08 }}
          >
            <h3 className={`text-2xl font-bold ${colors.titleColor}`}>{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <motion.span
                  key={item}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${colors.badge}`}
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.15 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* Certifications */}
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {profile.certifications.map((cert, idx) => (
        <motion.a
          key={cert.label}
          href={cert.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative overflow-hidden rounded-[1.75rem] border p-6 text-left transition ${
            cert.highlight
              ? 'border-fuchsia-400/30 bg-fuchsia-400/8 hover:border-fuchsia-400/60'
              : 'border-white/10 bg-white/5 hover:border-cyan-400/30'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.07, duration: 0.4 }}
          whileHover={
            cert.highlight
              ? { boxShadow: '0 0 40px rgba(217,70,239,0.2)', scale: 1.015 }
              : { boxShadow: '0 0 30px rgba(6,182,212,0.12)', scale: 1.015 }
          }
        >
          {/* Shimmer */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${cert.highlight ? 'text-fuchsia-200' : 'text-cyan-200'}`}>
            Certification
          </p>
          <h3 className="mt-3 text-xl font-bold text-white">{cert.label}</h3>
          {cert.issuer && <p className="mt-1 text-sm text-slate-300">{cert.issuer}</p>}
          {cert.url && (
            <p className={`mt-3 text-sm font-semibold ${cert.highlight ? 'text-fuchsia-300' : 'text-cyan-300'}`}>
              View credential ↗
            </p>
          )}
        </motion.a>
      ))}
    </div>
  </section>
);

export default Skills;
