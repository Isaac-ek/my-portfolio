import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

type HTMLSectionProps = React.HTMLAttributes<HTMLElement>;

/* Floating orb blobs */
const Orb = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    animate={{
      y: [0, -28, 0],
      scale: [1, 1.08, 1],
      opacity: [0.5, 0.75, 0.5],
    }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const Hero = (props: HTMLSectionProps) => (
  <section
    {...props}
    id="hero"
    className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-8 md:px-16 lg:px-24"
  >
    {/* Floating ambient blobs */}
    <Orb className="h-80 w-80 bg-cyan-500/20 -top-20 -left-20" delay={0} />
    <Orb className="h-64 w-64 bg-fuchsia-500/20 top-1/3 right-0" delay={2} />
    <Orb className="h-48 w-48 bg-violet-500/15 bottom-10 left-1/4" delay={4} />

    <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
      {/* Left col */}
      <motion.div
        className="relative z-10 text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Availability badge */}
        <motion.span
          className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200"
          animate={{
            boxShadow: [
              '0 0 0px rgba(6,182,212,0)',
              '0 0 18px rgba(6,182,212,0.35)',
              '0 0 0px rgba(6,182,212,0)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✦ Available for freelance &amp; full-time roles
        </motion.span>

        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl md:text-7xl">
          Building products.{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Designing worlds.
            </span>
            <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 opacity-60" />
          </span>
        </h1>

        <div className="mt-5 text-2xl font-semibold text-slate-200 sm:text-3xl">
          <Typewriter
            words={[profile.name, ...profile.titles]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={45}
            delaySpeed={1200}
          />
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
          {profile.tagline}
        </p>

        {/* Dual-discipline badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { label: '⚡ Full-Stack Dev', cls: 'border-cyan-400/30 bg-cyan-400/8 text-cyan-300' },
            { label: '🎨 Graphic Designer', cls: 'border-fuchsia-400/30 bg-fuchsia-400/8 text-fuchsia-300' },
            { label: '☁️ AWS Certified', cls: 'border-violet-400/30 bg-violet-400/8 text-violet-300' },
            { label: '🔒 IT Analyst', cls: 'border-emerald-400/30 bg-emerald-400/8 text-emerald-300' },
          ].map(({ label, cls }) => (
            <span key={label} className={`rounded-full border px-3 py-1 text-xs font-semibold ${cls}`}>
              {label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            className="relative overflow-hidden rounded-full bg-cyan-400 px-7 py-3 text-base font-bold text-slate-950"
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(6,182,212,0.6)' }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-base font-semibold text-white"
            whileHover={{
              borderColor: 'rgba(217,70,239,0.6)',
              boxShadow: '0 0 24px rgba(217,70,239,0.25)',
              color: '#e879f9',
            }}
            whileTap={{ scale: 0.97 }}
          >
            Let&apos;s Work Together
          </motion.a>
          <motion.a
            href={profile.resumePath}
            download
            className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-7 py-3 text-base font-semibold text-fuchsia-100"
            whileHover={{ boxShadow: '0 0 24px rgba(217,70,239,0.35)', scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Right col — Profile Snapshot card */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Glow ring behind card */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-fuchsia-500/10 to-violet-500/20 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_25px_80px_rgba(2,12,27,0.45)] backdrop-blur">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Profile Snapshot</p>
              <p className="mt-2 text-2xl font-bold text-white">{profile.name}</p>
            </div>
            <motion.div
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-200"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(52,211,153,0)',
                  '0 0 14px rgba(52,211,153,0.3)',
                  '0 0 0px rgba(52,211,153,0)',
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Open to opportunities
            </motion.div>
          </div>

          <div className="space-y-3">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
            {/* Developer + Designer */}
            <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/5 px-5 py-4 transition hover:border-fuchsia-400/40 hover:bg-fuchsia-400/10">
              <p className="text-3xl font-black text-white">2-in-1</p>
              <p className="mt-1 text-sm text-slate-300">Developer + Designer</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
