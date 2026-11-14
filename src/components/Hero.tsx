import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
          I build web applications and internal business tools, and design brand identities and packaging.
          Explore a complete software workflow or inspect the carton artwork to see how I work.
        </p>

        {/* Action Link Rows styled as Editorial Index Footnotes */}
        <div className="pt-6 flex flex-wrap gap-4 font-mono text-xs tracking-wider">
          <Link
            to="/projects/indie-crm"
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-white px-6 py-3.5 text-[#f4f4f2] transition duration-200"
          >
            <span>[01] EXPLORE SOFTWARE WORKFLOW →</span>
          </Link>
          <Link
            to="/?case=dr-kayla-skincare-system"
            aria-haspopup="dialog"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-white/40 px-6 py-3.5 text-[#d4d4d8] hover:text-white transition duration-200"
          >
            <span>[02] VIEW PACKAGING RANGE →</span>
          </Link>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] text-[#a1a1aa]">
          <Link to="/about" className="underline underline-offset-4 hover:text-white">Read curriculum vitae →</Link>
          <a
            href={profile.resumePath}
            download="Ekezie_Chiemelie_Isaac_Resume.pdf"
            className="underline underline-offset-4 hover:text-white"
          >
            Download CV PDF ↓
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
          <span className="text-[#71717a] uppercase tracking-widest">[AT A GLANCE]</span>
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
