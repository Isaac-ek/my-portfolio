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
    <section {...props} className="container mx-auto py-16 px-4 sm:px-8 md:px-16 lg:px-32 max-w-6xl" data-aos="fade-up">
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center font-jetbrains group-hover:underline group-hover:decoration-wavy group-hover:decoration-blue-400 group">Projects</h2>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button
          className={`px-4 py-2 rounded ${!filter ? 'bg-blue-600 text-white' : 'bg-blue-900 text-blue-100 border border-blue-700'}`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {techs.map((tech) => (
          <button
            key={tech}
            className={`px-4 py-2 rounded ${filter === tech ? 'bg-blue-600 text-white' : 'bg-blue-900 text-blue-100 border border-blue-700'}`}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-[#0f172a] rounded-xl p-6 shadow-[0_0_20px_rgba(0,0,255,0.3)] hover:scale-105 transition"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.10 }}
            whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)' }}
          >
            {project.gif && (
              <img src={project.gif} alt="Project demo gif" className="rounded mb-4 w-full object-cover max-h-64" />
            )}
            {project.screenshot && !project.gif && (
              <img src={project.screenshot} alt="Project screenshot" className="rounded mb-4 w-full object-cover max-h-64" />
            )}
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors text-blue-100">{project.title}</h3>
            <p className="mb-4 text-lg sm:text-xl text-blue-100 font-medium leading-relaxed">{project.description}</p>
            {project.challenge && (
              <p className="mb-1 text-xs text-blue-400"><span className="font-semibold">Challenge:</span> {project.challenge}</p>
            )}
            {project.solution && (
              <p className="mb-1 text-xs text-green-400"><span className="font-semibold">Solution:</span> {project.solution}</p>
            )}
            {project.impact && (
              <p className="mb-2 text-xs text-yellow-400"><span className="font-semibold">Impact:</span> {project.impact}</p>
            )}
            {project.codeSnippet && (
              <pre className="bg-[#17203a] text-blue-100 rounded p-2 text-xs overflow-x-auto mb-2"><code>{project.codeSnippet}</code></pre>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t: string) => (
                <span key={t} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:underline">GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;