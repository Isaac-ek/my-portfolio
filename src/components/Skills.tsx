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

const Skills = (props: React.HTMLAttributes<HTMLElement>) => (
  <section
    {...props}
    className="container mx-auto max-w-6xl px-4 py-20 sm:px-8 md:px-16 lg:px-24"
    id="skills"
    data-aos="fade-up"
  >
    <div className="mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Toolkit</p>
      <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">Skills and Certifications</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
        A mix of frontend implementation, business website delivery, and cloud-aware problem solving.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      {profile.skillGroups.map((group, idx) => (
        <motion.div
          key={group.title}
          className="rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-6 text-left backdrop-blur"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.08 }}
        >
          <h3 className="text-2xl font-bold text-white">{group.title}</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-sm font-medium text-cyan-100"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {profile.certifications.map((cert) => (
        <a
          key={cert.label}
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[1.75rem] border border-fuchsia-400/20 bg-fuchsia-400/10 p-6 text-left transition hover:border-fuchsia-300/40 hover:bg-fuchsia-400/15"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-200">Certification</p>
          <h3 className="mt-3 text-2xl font-bold text-white">{cert.label}</h3>
          <p className="mt-3 text-slate-300">View credential</p>
        </a>
      ))}
    </div>
  </section>
);

export default Skills;
