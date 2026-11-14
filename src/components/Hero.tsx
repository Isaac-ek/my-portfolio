import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

type HTMLSectionProps = React.HTMLAttributes<HTMLElement>;

const Hero = (props: HTMLSectionProps) => (
  <section
    {...props}
    id="hero"
    className="relative pt-28 sm:pt-36 pb-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
  >
    {/* Editorial Issue Header Tag */}
    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8 text-[11px] font-mono tracking-widest text-[#8e8e93] uppercase">
      <div>[00 / INTRODUCTION]</div>
      <div className="hidden sm:block">DEV &amp; DESIGN MONOGRAPH</div>
      <div>EDITION MMXXVI</div>
    </div>

    {/* Massive Editorial Masthead Title */}
    <div className="space-y-2">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-syne font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-[#f4f4f2] leading-[0.88] uppercase"
      >
        EKEZIE <br />
        <span className="font-serif italic font-normal text-[#d4d4d8] lowercase tracking-tight">
          chiemelie
        </span>{' '}
        ISAAC
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-mono text-xs sm:text-sm tracking-widest text-[#d4d4d8] font-medium uppercase pt-4"
      >
        FULL-STACK ENGINEER &amp; VISUAL DESIGNER
      </motion.p>
    </div>

    {/* Asymmetrical 2-Column Poster Layout */}
    <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/10 pt-10">
      {/* Left Column: Human Manifesto & Narrative */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="lg:col-span-7 space-y-6"
      >
        <h2 className="font-serif italic text-2xl sm:text-4xl text-[#f4f4f2] font-normal leading-snug">
          &ldquo;Software engineer with a typographer&rsquo;s eye and a systems-level obsession.&rdquo;
        </h2>

        <p className="font-space text-base sm:text-lg leading-relaxed text-[#d4d4d8] max-w-2xl">
          I build high-performance web applications, resilient digital infrastructure, and visual identities with actual character.
          Whether architecting Next.js frontends, engineering cloud microservices on AWS, or creating
          bespoke brand systems in Figma, I make sure the work is fast, bulletproof, and memorable.
        </p>

        {/* Action Link Rows styled as Editorial Index Footnotes */}
        <div className="pt-6 flex flex-wrap gap-4 font-mono text-xs tracking-wider">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-white px-6 py-3.5 text-[#f4f4f2] transition duration-200"
          >
            <span>[01] EXPLORE SELECTED WORK ↓</span>
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-white/40 px-6 py-3.5 text-[#d4d4d8] hover:text-white transition duration-200"
          >
            <span>[02] READ CURRICULUM VITAE →</span>
          </a>
          <a
            href={profile.resumePath}
            download="Ekezie_Chiemelie_Isaac_Resume.pdf"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-white/40 px-6 py-3.5 text-[#8e8e93] hover:text-white transition duration-200"
          >
            <span>[03] DOWNLOAD RESUME PDF ↓</span>
          </a>
        </div>
      </motion.div>

      {/* Right Column: Architectural Spec Sheet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="lg:col-span-5 border border-white/10 bg-[#0e0e11] p-6 sm:p-8 font-mono text-xs space-y-5"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-[#71717a] uppercase tracking-widest">[SPECIFICATION SHEET]</span>
          <span className="text-emerald-400 font-semibold">● ACTIVE</span>
        </div>

        <div className="space-y-4">
          <div className="border-b border-white/5 pb-3">
            <div className="text-[#71717a] uppercase tracking-wider text-[10px]">CURRENT STATION</div>
            <div className="text-[#f4f4f2] font-medium text-sm mt-0.5">
              IT Analyst &amp; Systems Specialist
            </div>
            <div className="text-[#a1a1aa] text-[11px] mt-0.5">
              Bakan Gizo Pharmacy &amp; Stores Ltd • Abuja
            </div>
          </div>

          <div className="border-b border-white/5 pb-3">
            <div className="text-[#71717a] uppercase tracking-wider text-[10px]">CORE ENGINEERING</div>
            <div className="text-[#f4f4f2] text-xs mt-0.5 leading-relaxed">
              Next.js 15, React 19, TypeScript, Python/Flask, Node.js, PostgreSQL/Prisma, Redis
            </div>
          </div>

          <div className="border-b border-white/5 pb-3">
            <div className="text-[#71717a] uppercase tracking-wider text-[10px]">DESIGN &amp; IDENTITY</div>
            <div className="text-[#f4f4f2] text-xs mt-0.5 leading-relaxed">
              Brand Systems, Figma UI/UX, Typography, Adobe Suite, Micro-animations
            </div>
          </div>

          <div className="border-b border-white/5 pb-3">
            <div className="text-[#71717a] uppercase tracking-wider text-[10px]">EDUCATION &amp; CERTIFICATION</div>
            <div className="text-[#f4f4f2] text-xs mt-0.5">
              B.Sc. Computer Science • Covenant University
            </div>
            <div className="text-[#a1a1aa] text-[11px] mt-0.5">
              AWS Certified Solutions Architect (SAA-C03)
            </div>
          </div>

          <div>
            <div className="text-[#71717a] uppercase tracking-wider text-[10px]">COORDINATES</div>
            <div className="text-[#f4f4f2] text-xs mt-0.5">
              Lagos &amp; Abuja, Nigeria • Remote Globally
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
