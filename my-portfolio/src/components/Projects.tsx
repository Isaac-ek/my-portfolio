import React, { useState } from 'react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const techs = Array.from(
  new Set(projects.flatMap((p) => p.tech))
);

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const Projects: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? projects.filter((p) => p.tech.includes(filter)) : projects;

  return (
    <section
      {...props}
      className="container mx-auto max-w-6xl px-4 py-20 sm:px-8 md:px-16 lg:px-24"
      data-aos="fade-up"
    >
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Selected Work</p>
        <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">Projects</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          A few projects that show how I approach product presentation, business goals, and implementation.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          className={`rounded-full px-4 py-2 ${!filter ? 'bg-cyan-400 text-slate-950' : 'border border-white/10 bg-white/5 text-slate-200'}`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {techs.map((tech) => (
          <button
            key={tech}
            className={`rounded-full px-4 py-2 ${filter === tech ? 'bg-cyan-400 text-slate-950' : 'border border-white/10 bg-white/5 text-slate-200'}`}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.title}
            className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.4)]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.10 }}
            whileHover={{ scale: 1.015, boxShadow: '0 20px 60px 0 rgba(8, 47, 73, 0.4)' }}
          >
            {project.gif && (
              <img src={project.gif} alt="Project demo gif" className="mb-5 max-h-64 w-full rounded-2xl object-cover" />
            )}
            {project.screenshot && !project.gif && (
              <img src={project.screenshot} alt="Project screenshot" className="mb-5 max-h-64 w-full rounded-2xl object-cover" />
            )}
            <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
            <p className="mb-5 text-base leading-8 text-slate-200 sm:text-lg">{project.description}</p>
            {project.challenge && (
              <p className="mb-1 text-sm text-cyan-300"><span className="font-semibold">Challenge:</span> {project.challenge}</p>
            )}
            {project.solution && (
              <p className="mb-1 text-sm text-emerald-300"><span className="font-semibold">Solution:</span> {project.solution}</p>
            )}
            {project.impact && (
              <p className="mb-4 text-sm text-amber-300"><span className="font-semibold">Impact:</span> {project.impact}</p>
            )}
            {project.codeSnippet && (
              <pre className="mb-3 overflow-x-auto rounded-2xl bg-[#17203a] p-3 text-xs text-blue-100"><code>{project.codeSnippet}</code></pre>
            )}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
