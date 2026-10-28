import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { projects } from '../data/projects';
import {
  designs,
  categoryColors,
  type Design,
  type DesignCategory,
} from '../data/designs';

/* ── helpers ─────────────────────────────────────────── */
const allTechs = Array.from(new Set(projects.flatMap((p) => p.tech)));
const allCategories = Array.from(new Set(designs.map((d) => d.category)));

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -24, scale: 0.96 },
};

/* ── Category badge color map for Web & Software projects ── */
const projectCategoryStyles: Record<
  string,
  { border: string; bg: string; text: string }
> = {
  'Full-Stack': {
    border: 'border-cyan-400/40',
    bg: 'bg-cyan-400/10',
    text: 'text-cyan-300',
  },
  'Security/UI': {
    border: 'border-emerald-400/40',
    bg: 'bg-emerald-400/10',
    text: 'text-emerald-300',
  },
  'Graphic/Interactive': {
    border: 'border-fuchsia-400/40',
    bg: 'bg-fuchsia-400/10',
    text: 'text-fuchsia-300',
  },
  'Web Architecture': {
    border: 'border-violet-400/40',
    bg: 'bg-violet-400/10',
    text: 'text-violet-300',
  },
  'UI/UX': {
    border: 'border-amber-400/40',
    bg: 'bg-amber-400/10',
    text: 'text-amber-300',
  },
};

/* ── Tab Button ──────────────────────────────────────── */
const TabBtn = ({
  active,
  onClick,
  children,
  color,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color: 'cyan' | 'fuchsia';
}) => {
  const glowMap = {
    cyan: 'rgba(6,182,212,0.45)',
    fuchsia: 'rgba(217,70,239,0.45)',
  };
  const activeClasses =
    color === 'cyan'
      ? 'bg-cyan-400/15 border-cyan-400/60 text-cyan-200 shadow-[0_0_24px_rgba(6,182,212,0.35)]'
      : 'bg-fuchsia-400/15 border-fuchsia-400/60 text-fuchsia-200 shadow-[0_0_24px_rgba(217,70,239,0.35)]';

  return (
    <button
      onClick={onClick}
      style={active ? { boxShadow: `0 0 28px ${glowMap[color]}` } : {}}
      className={`relative flex items-center gap-2.5 rounded-2xl border px-7 py-3.5 text-base font-bold transition-all duration-300 ${
        active
          ? activeClasses
          : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:text-white'
      }`}
    >
      {children}
      {active && (
        <motion.span
          layoutId="tab-pill"
          className={`absolute inset-0 rounded-2xl ${
            color === 'cyan' ? 'bg-cyan-400/5' : 'bg-fuchsia-400/5'
          }`}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
        />
      )}
    </button>
  );
};

/* ── Web Projects Grid ───────────────────────────────── */
const WebProjects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? projects.filter((p) => p.tech.includes(filter)) : projects;

  return (
    <div>
      {/* Filter chips */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            !filter
              ? 'bg-cyan-400 text-slate-950 shadow-[0_0_18px_rgba(6,182,212,0.5)]'
              : 'border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/30 hover:text-cyan-200'
          }`}
        >
          All
        </button>
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              filter === tech
                ? 'bg-cyan-400 text-slate-950 shadow-[0_0_18px_rgba(6,182,212,0.5)]'
                : 'border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/30 hover:text-cyan-200'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => {
            const catStyle = project.category
              ? projectCategoryStyles[project.category] || {
                  border: 'border-cyan-400/30',
                  bg: 'bg-cyan-400/10',
                  text: 'text-cyan-300',
                }
              : null;

            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.4)] backdrop-blur"
                transition={{ duration: 0.45, delay: idx * 0.07, ease: 'easeOut' }}
                whileHover={{
                  scale: 1.018,
                  borderColor: 'rgba(6,182,212,0.45)',
                  boxShadow:
                    '0 0 60px rgba(6,182,212,0.15), 0 24px 70px rgba(15,23,42,0.5)',
                }}
              >
                {/* Glow blob on hover */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Badge Row: Category + Live Status */}
                <div className="mb-4 flex items-center justify-between gap-2 flex-wrap">
                  {catStyle && (
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${catStyle.border} ${catStyle.bg} ${catStyle.text}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {project.category}
                    </span>
                  )}
                  {project.demo && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Live
                    </span>
                  )}
                </div>

                {project.gif && (
                  <img
                    src={project.gif}
                    alt="Project demo"
                    className="mb-5 max-h-56 w-full rounded-2xl object-cover"
                  />
                )}
                {project.screenshot && !project.gif && (
                  <img
                    src={project.screenshot}
                    alt="Screenshot"
                    className="mb-5 max-h-56 w-full rounded-2xl object-cover"
                  />
                )}

                <h3 className="mb-2 text-2xl font-black text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-base leading-7 text-slate-300">
                  {project.description}
                </p>

                {project.challenge && (
                  <p className="mb-1 text-sm text-cyan-300">
                    <span className="font-bold">Challenge:</span> {project.challenge}
                  </p>
                )}
                {project.solution && (
                  <p className="mb-1 text-sm text-emerald-300">
                    <span className="font-bold">Solution:</span> {project.solution}
                  </p>
                )}
                {project.impact && (
                  <p className="mb-4 text-sm text-amber-300">
                    <span className="font-bold">Impact:</span> {project.impact}
                  </p>
                )}
                {project.codeSnippet && (
                  <pre className="mb-3 overflow-x-auto rounded-2xl bg-[#17203a] p-3 text-xs text-blue-100">
                    <code>{project.codeSnippet}</code>
                  </pre>
                )}

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
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
                      className="rounded-full bg-cyan-400 px-5 py-2 font-bold text-slate-950 transition hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2 font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-200"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ── Design Case Study Lightbox Modal ─────────────────── */
const DesignModal: React.FC<{
  design: Design | null;
  onClose: () => void;
}> = ({ design, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (design) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [design, onClose]);

  if (!design) return null;

  const colors = categoryColors[design.category];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border bg-slate-950 p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.8)] ${colors.border}`}
          style={{ boxShadow: colors.glow }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/15 hover:text-white"
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* Header */}
          <div className="pr-12">
            <span
              className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${colors.border} ${colors.bg} ${colors.text}`}
            >
              {design.category}
            </span>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              {design.title}
            </h2>
            {design.client && (
              <p className="mt-1 text-sm font-medium text-slate-400">
                Client / Project: <span className="text-white">{design.client}</span> • {design.year}
              </p>
            )}
          </div>

          {/* Visual Showcase Banner */}
          <div
            className={`mt-6 relative flex h-60 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${design.gradient} border ${colors.border}`}
          >
            {design.image ? (
              <img
                src={design.image}
                alt={design.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-3 px-6 text-center">
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl border text-4xl ${colors.border} ${colors.bg}`}
                  style={{ boxShadow: colors.glow }}
                >
                  {design.category === 'Brand Identity' && '✦'}
                  {design.category === 'Social Media' && '◈'}
                  {design.category === 'UI/UX' && '⬡'}
                  {design.category === 'Print & Packaging' && '▣'}
                  {design.category === 'Marketing' && '◉'}
                </div>
                <p className={`text-sm font-semibold uppercase tracking-widest ${colors.text}`}>
                  {design.category} Visual Board
                </p>
              </div>
            )}
          </div>

          {/* Content Grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            {/* Left: Overview & Deliverables */}
            <div>
              <h4 className="text-base font-bold uppercase tracking-wider text-slate-400">
                Design Overview
              </h4>
              <p className="mt-2 text-base leading-relaxed text-slate-200">
                {design.description}
              </p>

              <h4 className="mt-6 text-base font-bold uppercase tracking-wider text-slate-400">
                Scope &amp; Deliverables
              </h4>
              <ul className="mt-3 space-y-2">
                {design.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <span className={`mt-0.5 text-xs font-bold ${colors.text}`}>✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Palette & Tools */}
            <div className="space-y-6">
              {/* Color Palette Swatches */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Color Palette Swatches
                </h4>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {design.palette.map((hex) => (
                    <div key={hex} className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-1.5">
                      <span
                        className="h-4 w-4 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: hex }}
                      />
                      <span className="font-mono text-xs text-slate-300">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Environment */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Tools &amp; Software
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {design.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col gap-3">
                {design.link && (
                  <a
                    href={design.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    View Live Deployment ↗
                  </a>
                )}
                <a
                  href="#contact"
                  onClick={onClose}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 py-3 text-sm font-bold text-fuchsia-200 transition hover:bg-fuchsia-400/20"
                >
                  Request Similar Design Asset →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

/* ── Design Gallery Grid ─────────────────────────────── */
const DesignGallery: React.FC = () => {
  const [filter, setFilter] = useState<DesignCategory | null>(null);
  const [activeModalDesign, setActiveModalDesign] = useState<Design | null>(null);

  const filtered = filter ? designs.filter((d) => d.category === filter) : designs;

  return (
    <div>
      {/* Category chips */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            !filter
              ? 'bg-fuchsia-400 text-slate-950 shadow-[0_0_18px_rgba(217,70,239,0.5)]'
              : 'border border-white/10 bg-white/5 text-slate-300 hover:border-fuchsia-400/30 hover:text-fuchsia-200'
          }`}
        >
          All Work
        </button>
        {allCategories.map((cat) => {
          const colors = categoryColors[cat as DesignCategory];
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat as DesignCategory)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition border ${
                isActive
                  ? `${colors.bg} ${colors.border} ${colors.text}`
                  : 'border-white/10 bg-white/5 text-slate-300 hover:text-white'
              }`}
              style={isActive ? { boxShadow: colors.glow } : {}}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((design, idx) => {
            const colors = categoryColors[design.category];
            return (
              <motion.div
                key={design.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                onClick={() => setActiveModalDesign(design)}
                className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border bg-slate-950/70 backdrop-blur cursor-pointer transition-all duration-300 ${colors.border}`}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: 'easeOut' }}
                whileHover={{ scale: 1.025, boxShadow: colors.glow }}
              >
                {/* Visual preview area with mini swatch bar */}
                <div
                  className={`relative flex h-48 flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${design.gradient}`}
                >
                  {design.image ? (
                    <img
                      src={design.image}
                      alt={design.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2.5 px-6 text-center">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${colors.border} ${colors.bg} text-2xl`}
                        style={{ boxShadow: colors.glow }}
                      >
                        {design.category === 'Brand Identity' && '✦'}
                        {design.category === 'Social Media' && '◈'}
                        {design.category === 'UI/UX' && '⬡'}
                        {design.category === 'Print & Packaging' && '▣'}
                        {design.category === 'Marketing' && '◉'}
                      </div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-widest ${colors.text}`}
                      >
                        {design.category}
                      </p>

                      {/* Mini color swatches on card */}
                      <div className="flex items-center gap-1.5 mt-1">
                        {design.palette.slice(0, 4).map((c) => (
                          <span
                            key={c}
                            className="h-2.5 w-2.5 rounded-full border border-white/20"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hover "Click to Inspect" pill */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold text-white shadow-lg">
                      View Case Study ↗
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-6">
                  <span
                    className={`mb-3 inline-flex w-fit rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${colors.border} ${colors.bg} ${colors.text}`}
                  >
                    {design.category}
                  </span>

                  <h3 className="mb-2 text-xl font-black text-white">{design.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-7 text-slate-300 line-clamp-3">
                    {design.description}
                  </p>

                  {/* Tools */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {design.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className={`text-xs font-bold ${colors.text}`}>
                      Case Study Details →
                    </span>
                    {design.link && (
                      <span className="text-xs text-slate-400">Live ↗</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <DesignModal
        design={activeModalDesign}
        onClose={() => setActiveModalDesign(null)}
      />

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <a
          href="#contact"
          className="group relative overflow-hidden rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-8 py-4 text-base font-bold text-fuchsia-200 transition-all hover:border-fuchsia-400/60 hover:shadow-[0_0_32px_rgba(217,70,239,0.3)]"
        >
          <span className="relative z-10">
            Want to see full design portfolio? Let&apos;s talk →
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </a>
      </div>
    </div>
  );
};

/* ── Main Works Component ────────────────────────────── */
const Works: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  const [tab, setTab] = useState<'web' | 'design'>('web');

  // Listen for the navbar "Design" link click
  useEffect(() => {
    const handler = () => setTab('design');
    window.addEventListener('nav-design-tab', handler);
    return () => window.removeEventListener('nav-design-tab', handler);
  }, []);

  return (
    <section
      {...props}
      id="projects"
      className="container mx-auto max-w-6xl px-4 py-20 sm:px-8 md:px-16 lg:px-24"
      data-aos="fade-up"
    >
      {/* Section header */}
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Selected Work
        </p>
        <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
          Code &amp;{' '}
          <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Design
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          Two disciplines, one creator. I build products and I brand them.
        </p>

        {/* Decorative divider */}
        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-400/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-fuchsia-400/50" />
        </div>
      </div>

      {/* Tab switcher */}
      <div className="mb-10 flex justify-center gap-4">
        <TabBtn active={tab === 'web'} onClick={() => setTab('web')} color="cyan">
          <span className="text-lg">⚡</span> Web &amp; Software
        </TabBtn>
        <TabBtn active={tab === 'design'} onClick={() => setTab('design')} color="fuchsia">
          <span className="text-lg">🎨</span> Graphic Design
        </TabBtn>
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        {tab === 'web' ? (
          <motion.div
            key="web"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <WebProjects />
          </motion.div>
        ) : (
          <motion.div
            key="design"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <DesignGallery />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;
