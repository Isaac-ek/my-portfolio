import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { profile } from '../data/profile';

type HTMLSectionProps = React.HTMLAttributes<HTMLElement>;

const Hero = (props: HTMLSectionProps) => (
  <section
    {...props}
    id="hero"
    className="relative flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-8 md:px-16 lg:px-24"
    data-aos="fade-up"
  >
    <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
      <div className="relative z-10 text-left">
        <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
          Available for freelance and full-time roles
        </span>
        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl md:text-7xl">
          Building thoughtful digital experiences for modern brands.
        </h1>
        <div className="mt-5 text-2xl font-semibold text-slate-200 sm:text-3xl">
          <Typewriter
            words={[profile.name, profile.role]}
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
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-7 py-3 text-base font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Let&apos;s Work Together
          </a>
          <a
            href={profile.resumePath}
            download
            className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-7 py-3 text-base font-semibold text-fuchsia-100 transition hover:bg-fuchsia-400/20"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-fuchsia-500/20 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_25px_80px_rgba(2,12,27,0.45)] backdrop-blur">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Profile Snapshot</p>
              <p className="mt-2 text-2xl font-bold text-white">{profile.name}</p>
            </div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-200">
              Open to opportunities
            </div>
          </div>

          <div className="space-y-4">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
