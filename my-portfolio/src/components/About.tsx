import React from 'react';
import { profile } from '../data/profile';

const About = (props: React.HTMLAttributes<HTMLElement>) => (
  <section
    {...props}
    className="container mx-auto max-w-6xl px-4 py-20 sm:px-8 md:px-16 lg:px-24"
    data-aos="fade-up"
  >
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About Me</p>
        <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
          Designing useful interfaces and delivering websites people can trust.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.intro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {profile.strengths.map((strength) => (
            <div
              key={strength}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-slate-200"
            >
              {strength}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.45)] backdrop-blur">
        <h3 className="text-2xl font-bold text-white">What I Can Help With</h3>
        <div className="mt-6 space-y-3">
          {profile.services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 px-4 py-4 text-slate-200"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
