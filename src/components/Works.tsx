import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { projects, type Project } from '../data/projects';
import {
  designs,
  type Design,
  type DesignVariant,
} from '../data/designs';

/* ── Editorial Works Component ────────────────────────────── */
const Works: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState<'featured' | 'software' | 'design'>('featured');
  
  // Design Case Study Modal State
  const [activeDesignModal, setActiveDesignModal] = useState<Design | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string>('');
  const [selectedVariantId, setSelectedVariantId] = useState<string>('');
  const [viewMode, setViewMode] = useState<'assembled' | 'dieline'>('assembled');

  // Engineering Case Study Modal State (Indie CRM)
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [crmActiveTab, setCrmActiveTab] = useState<'pipeline' | 'vector' | 'telemetry' | 'command'>('pipeline');
  const [copiedLink, setCopiedLink] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  // Synchronize modal state with URL search params:
  // ?case=<id> for design case studies
  // ?project=<id> for engineering case studies
  useEffect(() => {
    const caseId = searchParams.get('case');
    const projectId = searchParams.get('project');

    if (caseId) {
      const match = designs.find((d) => d.id === caseId);
      if (match) {
        setActiveDesignModal(match);
        setActiveProjectModal(null);
        if (match.variants && match.variants.length > 0) {
          setSelectedVariantId(match.variants[0].id);
          setSelectedGalleryImage(match.variants[0].image);
        } else {
          setSelectedVariantId('');
          setSelectedGalleryImage(match.image || '');
        }
      }
    } else if (projectId) {
      if (projectId === 'indie-crm' || projectId === 'indie-crm-saas-platform') {
        setActiveProjectModal(projects[0]);
        setActiveDesignModal(null);
      }
    } else {
      setActiveDesignModal(null);
      setActiveProjectModal(null);
    }
  }, [searchParams]);

  // Listen for the navbar "Graphic Design" link click
  useEffect(() => {
    const handler = () => setTab('design');
    window.addEventListener('nav-design-tab', handler);
    return () => window.removeEventListener('nav-design-tab', handler);
  }, []);

  const closeModal = useCallback(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('case');
    newParams.delete('project');
    setSearchParams(newParams, { replace: false });
    setActiveDesignModal(null);
    setActiveProjectModal(null);
    setCopiedLink(false);

    // Return focus to triggering button
    setTimeout(() => {
      lastFocusedElementRef.current?.focus();
    }, 50);
  }, [searchParams, setSearchParams]);

  const openDesignModal = (design: Design, triggerElement?: HTMLElement) => {
    if (triggerElement) {
      lastFocusedElementRef.current = triggerElement;
    }
    setViewMode('assembled');
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('project');
    newParams.set('case', design.id);
    setSearchParams(newParams, { replace: false });
  };

  const openProjectModal = (project: Project, triggerElement?: HTMLElement) => {
    if (triggerElement) {
      lastFocusedElementRef.current = triggerElement;
    }
    setActiveProjectModal(project);
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('case');
    newParams.set('project', 'indie-crm');
    setSearchParams(newParams, { replace: false });
  };

  const copyShareableLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Manage accessibility focus & escape key when modal opens/closes
  useEffect(() => {
    if (activeDesignModal || activeProjectModal) {
      closeBtnRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [activeDesignModal, activeProjectModal, closeModal]);

  const currentVariant: DesignVariant | undefined =
    activeDesignModal?.variants?.find((v) => v.id === selectedVariantId) ||
    activeDesignModal?.variants?.[0];

  const flagshipProject: Project = projects[0]; // Indie CRM
  const flagshipDesign: Design = designs[0]; // Dr Kayla Clinical Soaps

  return (
    <section
      {...props}
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-24 border-t border-white/10"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-12 gap-6">
        <div>
          <span className="font-mono text-[11px] tracking-widest text-[#a1a1aa] uppercase block mb-2">
            [INDEX / 01] • ARCHIVE OF RECENT COMMISSIONS
          </span>
          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-[#f4f4f2] tracking-tight uppercase">
            SELECTED WORK
          </h2>
        </div>

        {/* Editorial 3-Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setTab('featured')}
            className={`px-4 py-3 border transition-colors ${
              tab === 'featured'
                ? 'border-white bg-white text-black font-semibold'
                : 'border-white/10 text-[#d4d4d8] hover:border-white/30 hover:text-white'
            }`}
          >
            [01] FEATURED (DUAL SPOTLIGHT)
          </button>
          <button
            onClick={() => setTab('software')}
            className={`px-4 py-3 border transition-colors ${
              tab === 'software'
                ? 'border-white bg-white text-black font-semibold'
                : 'border-white/10 text-[#d4d4d8] hover:border-white/30 hover:text-white'
            }`}
          >
            [02] SOFTWARE &amp; SYSTEMS ({projects.length})
          </button>
          <button
            onClick={() => setTab('design')}
            className={`px-4 py-3 border transition-colors ${
              tab === 'design'
                ? 'border-white bg-white text-black font-semibold'
                : 'border-white/10 text-[#d4d4d8] hover:border-white/30 hover:text-white'
            }`}
          >
            [03] GRAPHIC DESIGN &amp; BRAND ({designs.length})
          </button>
        </div>
      </div>

      {/* ── Tab 0: Featured Dual Spotlight ── */}
      {tab === 'featured' && (
        <div className="space-y-16">
          <div className="border border-white/10 bg-white/[0.02] p-4 sm:p-6 font-mono text-xs text-[#a1a1aa] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-white font-semibold">DUAL-DISCIPLINE PORTFOLIO SHOWCASE:</span> Leading with flagship engineering alongside physical print production dielines.
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTab('software')}
                className="underline hover:text-white"
              >
                All Software ({projects.length}) →
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setTab('design')}
                className="underline hover:text-white"
              >
                All Packaging ({designs.length}) →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* 1. Flagship Engineering Project (Indie CRM) */}
            <article className="border border-white/10 bg-[#0e0e11] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-white/30 transition-colors">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs text-[#71717a]">
                  <span className="text-emerald-400 font-medium">● 01 / FULL-STACK PLATFORM</span>
                  <span className="border border-white/10 px-2 py-0.5 text-[11px] text-[#a1a1aa]">
                    PRODUCTION SAAS
                  </span>
                </div>

                <h3 className="font-syne font-bold text-2xl sm:text-3xl text-[#f4f4f2] tracking-tight">
                  {flagshipProject.title}
                </h3>
                <p className="font-space text-sm text-[#a1a1aa] leading-relaxed mt-3">
                  {flagshipProject.description}
                </p>

                {/* Walkthrough Architecture Preview */}
                {flagshipProject.walkthrough && (
                  <div className="mt-6 border-t border-white/10 pt-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase block">
                        PUBLIC SYSTEM WALKTHROUGH &amp; SIMULATOR
                      </span>
                      <span className="font-mono text-[10px] text-emerald-400">
                        INSPECTABLE WORKFLOWS
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {flagshipProject.walkthrough.map((step) => (
                        <div
                          key={step.step}
                          className="border border-white/5 bg-[#141418] p-3 font-mono text-xs"
                        >
                          <span className="text-[#d4d4d8] font-bold block text-[11px] mb-1">
                            {step.step} // {step.title}
                          </span>
                          <p className="text-[#71717a] text-[11px] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {flagshipProject.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-white/10 bg-white/5 px-2.5 py-1 text-[#d4d4d8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links & Demo Note */}
              <div className="border-t border-white/10 pt-5 space-y-3 font-mono text-xs">
                {flagshipProject.demoNote && (
                  <p className="text-[11px] text-[#71717a] leading-tight">
                    <span className="text-[#a1a1aa]">Notice:</span> {flagshipProject.demoNote}
                  </p>
                )}
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={(e) => openProjectModal(flagshipProject, e.currentTarget)}
                    className="border border-white bg-white text-black font-semibold px-5 py-2.5 hover:bg-[#d4d4d8] transition inline-flex items-center gap-2"
                  >
                    <span>INSPECT CASE STUDY &amp; WALKTHROUGH →</span>
                  </button>
                  <a
                    href={flagshipProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/15 px-4 py-2.5 text-[#a1a1aa] hover:border-white/40 hover:text-white transition inline-flex items-center gap-1.5"
                  >
                    <span>LIVE INSTANCE ↗</span>
                  </a>
                </div>
              </div>
            </article>

            {/* 2. Flagship Packaging Collection (Dr Kayla Clinical Soaps) */}
            <article className="border border-white/10 bg-[#0e0e11] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-white/30 transition-colors">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs text-[#71717a]">
                  <span className="text-amber-400 font-medium">● 02 / PRINT &amp; PACKAGING</span>
                  <span className="border border-white/10 px-2 py-0.5 text-[11px] text-[#a1a1aa]">
                    7 FORMULAS • ASSEMBLED RETAIL CARTONS
                  </span>
                </div>

                <h3 className="font-syne font-bold text-2xl sm:text-3xl text-[#f4f4f2] tracking-tight">
                  {flagshipDesign.title}
                </h3>
                <p className="font-space text-sm text-[#a1a1aa] leading-relaxed mt-3">
                  {flagshipDesign.description}
                </p>

                {/* Finished Assembled Packaging Specimen (Priority 2) */}
                <div className="mt-5 border border-white/10 bg-[#121216] p-4 relative overflow-hidden group/specimen">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#a1a1aa] pb-2 mb-2 border-b border-white/5">
                    <span className="text-white font-semibold">FINISHED RETAIL CARTON SPECIMEN</span>
                    <span>130g / 4.6 oz</span>
                  </div>
                  <img
                    src={flagshipDesign.image}
                    alt={`${flagshipDesign.title} Assembled Packaging`}
                    className="max-h-56 w-full object-contain filter drop-shadow-2xl mx-auto transition-transform duration-300 group-hover/specimen:scale-105"
                  />
                  <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[#71717a] pt-2 border-t border-white/5">
                    <span>Client: {flagshipDesign.client}</span>
                    <span className="text-[#d4d4d8]">Assembled 3D View + Production Dielines</span>
                  </div>
                </div>

                {/* Formula Palette Dots */}
                <div className="mt-5 flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[10px] tracking-wider text-[#a1a1aa] uppercase mr-1">
                    FORMULAS:
                  </span>
                  {flagshipDesign.variants?.map((v) => (
                    <span
                      key={v.id}
                      className="border border-white/15 px-2 py-0.5 font-mono text-[10px] text-[#d4d4d8] flex items-center gap-1.5"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: v.accent }}
                      />
                      {v.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Semantic Action Button */}
              <div className="border-t border-white/10 pt-5 font-mono text-xs">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={(e) => openDesignModal(flagshipDesign, e.currentTarget)}
                  className="w-full border border-white/20 bg-white/10 hover:border-white hover:bg-white hover:text-black py-3 text-center text-[#f4f4f2] font-semibold transition"
                >
                  View case study &amp; dieline viewer →
                </button>
              </div>
            </article>
          </div>
        </div>
      )}

      {/* ── Tab 1: Software & Systems ── */}
      {tab === 'software' && (
        <div className="space-y-12">
          {projects.map((project, idx) => {
            const indexStr = String(idx + 1).padStart(2, '0');
            const isCrm = project.title.includes('Indie CRM');
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="border border-white/10 bg-[#0e0e11] p-6 sm:p-10 transition-colors duration-300 hover:border-white/30"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6 font-mono text-xs text-[#71717a]">
                  <div className="flex items-center gap-3">
                    <span className="text-[#f4f4f2]">[{indexStr}]</span>
                    <span className="uppercase text-[#d4d4d8] tracking-wider">
                      {project.category || 'FULL-STACK'}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="border border-white/10 px-2 py-0.5 text-[11px] text-[#a1a1aa]">
                      PRODUCTION
                    </span>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Title & Description */}
                  <div className="lg:col-span-8 space-y-4">
                    <h3 className="font-syne font-bold text-2xl sm:text-3xl text-[#f4f4f2] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="font-space text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Walkthrough (e.g. for Indie CRM) */}
                    {project.walkthrough && (
                      <div className="pt-2 border-t border-white/10 mt-4 space-y-3">
                        <span className="font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase block">
                          SYSTEM ARCHITECTURE &amp; WORKFLOW WALKTHROUGH
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.walkthrough.map((step) => (
                            <div
                              key={step.step}
                              className="border border-white/5 bg-[#141418] p-3 font-mono text-xs"
                            >
                              <span className="text-[#d4d4d8] font-bold block text-[11px] mb-1">
                                {step.step} // {step.title}
                              </span>
                              <p className="text-[#71717a] text-[11px] leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* System Impact & Architecture */}
                    {project.impact && (
                      <div className="pt-2 border-l border-white/20 pl-4 font-mono text-xs text-[#d4d4d8]">
                        <span className="text-[#a1a1aa] block text-[10px] uppercase tracking-wider mb-1">
                          SYSTEM IMPACT &amp; VERIFIED OUTCOMES
                        </span>
                        <p className="leading-relaxed">{project.impact}</p>
                      </div>
                    )}

                    {/* Problem / Solution Narrative */}
                    {(project.challenge || project.solution) && (
                      <div className="pt-2 grid sm:grid-cols-2 gap-4 text-xs font-mono text-[#8e8e93]">
                        {project.challenge && (
                          <div className="border-l border-white/10 pl-3">
                            <span className="text-[#a1a1aa] block uppercase text-[10px]">CHALLENGE</span>
                            <span className="text-[#d4d4d8] leading-relaxed mt-1 block">
                              {project.challenge}
                            </span>
                          </div>
                        )}
                        {project.solution && (
                          <div className="border-l border-white/10 pl-3">
                            <span className="text-[#a1a1aa] block uppercase text-[10px]">SOLUTION</span>
                            <span className="text-[#d4d4d8] leading-relaxed mt-1 block">
                              {project.solution}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Stack & Action Links */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase block mb-3">
                        TECHNOLOGIES EMPLOYED
                      </span>
                      <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="border border-white/10 bg-white/5 px-2.5 py-1 text-[#d4d4d8]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links & Demo Note */}
                    <div className="space-y-3 font-mono text-xs">
                      {project.demoNote && (
                        <p className="text-[11px] text-[#71717a] leading-tight">
                          {project.demoNote}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-3">
                        {isCrm && (
                          <button
                            type="button"
                            aria-haspopup="dialog"
                            onClick={(e) => openProjectModal(project, e.currentTarget)}
                            className="border border-white bg-white text-black font-semibold px-4 py-2 hover:bg-[#d4d4d8] transition"
                          >
                            CASE STUDY &amp; WALKTHROUGH →
                          </button>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white hover:text-black transition"
                          >
                            VISIT PLATFORM ↗
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/10 px-4 py-2 text-[#a1a1aa] hover:border-white/40 hover:text-white transition"
                          >
                            SOURCE CODE →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}

      {/* ── Tab 2: Graphic Design & Brand Identity ── */}
      {tab === 'design' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designs.map((design, idx) => {
              const indexStr = String(idx + 1).padStart(2, '0');
              const hasVariants = design.variants && design.variants.length > 0;
              return (
                <article
                  key={design.id}
                  className="group border border-white/10 bg-[#0e0e11] flex flex-col transition-all duration-300 hover:border-white/40"
                >
                  {/* Poster Header */}
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 font-mono text-xs text-[#71717a]">
                    <span>[{indexStr}]</span>
                    <div className="flex items-center gap-2">
                      {hasVariants && (
                        <span className="border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#f4f4f2]">
                          {design.variants!.length} FORMULAS
                        </span>
                      )}
                      <span className="uppercase text-[11px] tracking-wider text-[#d4d4d8]">
                        {design.category}
                      </span>
                    </div>
                  </div>

                  {/* Visual Specimen Area: Leads with Assembled Packaging */}
                  <div className="h-72 border-b border-white/10 bg-[#121216] relative flex flex-col items-center justify-center overflow-hidden">
                    {design.image ? (
                      <div className="relative w-full h-full p-4 flex items-center justify-center bg-white/[0.02] group-hover:bg-white/[0.06] transition duration-300">
                        <img
                          src={design.image}
                          alt={design.title}
                          className="max-h-full max-w-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="p-6 text-center">
                        <div className="font-syne font-extrabold text-4xl text-[#f4f4f2] tracking-tighter opacity-80 group-hover:scale-105 transition duration-300">
                          Aa
                        </div>
                        <div className="font-serif italic text-lg text-[#a1a1aa] mt-1">
                          {design.title}
                        </div>
                      </div>
                    )}

                    {/* Multi-variant formula pill teaser */}
                    {hasVariants && (
                      <div className="absolute top-3 left-3 bg-[#08080a]/90 backdrop-blur border border-white/15 px-2 py-1 font-mono text-[10px] text-[#d4d4d8]">
                        ✦ {design.variants!.length} ASSEMBLED CARTONS &amp; DIELINES
                      </div>
                    )}

                    {/* Color Swatch Dot Strip */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 z-10 bg-[#08080a]/80 px-2 py-1 rounded backdrop-blur border border-white/10">
                      {design.palette.map((color) => (
                        <span
                          key={color}
                          className="h-2.5 w-2.5 rounded-full border border-white/20"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h4 className="font-syne font-bold text-xl text-[#f4f4f2] tracking-tight group-hover:text-white transition">
                        {design.title}
                      </h4>
                      <p className="font-space text-xs text-[#a1a1aa] leading-relaxed mt-2 line-clamp-3">
                        {design.description}
                      </p>

                      {/* Formula list badges for multi-variant design */}
                      {hasVariants && (
                        <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-[#71717a]">
                          {design.variants!.map((v) => (
                            <span
                              key={v.id}
                              className="border border-white/10 px-1.5 py-0.5 text-[#d4d4d8] bg-white/[0.03]"
                            >
                              {v.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                      <span className="text-[#71717a] text-[11px]">{design.client || 'INDEPENDENT'}</span>
                      <button
                        type="button"
                        aria-haspopup="dialog"
                        onClick={(e) => openDesignModal(design, e.currentTarget)}
                        className="border border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-white px-4 py-2 font-mono text-xs font-semibold text-white transition"
                      >
                        View case study →
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Engineering Case Study & Public Walkthrough Modal (Indie CRM) ── */}
      <AnimatePresence>
        {activeProjectModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-case-title"
            ref={modalRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-[#08080a]/90 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-white/20 bg-[#0e0e11] p-6 sm:p-10 font-space text-[#f4f4f2] shadow-2xl"
            >
              {/* Top Bar with Shareable URL Indicator & Close Button */}
              <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono text-xs text-[#71717a] gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">● [ENGINEERING CASE STUDY]</span>
                  <span className="text-[#a1a1aa]">• STABLE URL: /?project=indie-crm</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => copyShareableLink(`${window.location.origin}/?project=indie-crm`)}
                    className="border border-white/15 px-3 py-1 text-[11px] text-[#d4d4d8] hover:border-white hover:text-white transition"
                  >
                    {copiedLink ? '✓ LINK COPIED' : 'COPY SHAREABLE LINK ↗'}
                  </button>
                  <button
                    ref={closeBtnRef}
                    onClick={closeModal}
                    aria-label="Close project dialog"
                    className="border border-white/20 px-3 py-1 text-white hover:bg-white hover:text-black transition"
                  >
                    CLOSE [✕]
                  </button>
                </div>
              </div>

              {/* Title & Masthead */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 font-mono text-xs text-[#a1a1aa]">
                  <span className="border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 px-2.5 py-0.5">
                    FLAGSHIP SAAS
                  </span>
                  <span>PRODUCTION DEPLOYMENT • ARCHITECTURE DOSSIER</span>
                </div>
                <h3 id="project-case-title" className="font-syne font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
                  {activeProjectModal.title}
                </h3>
                <p className="font-space text-base text-[#d4d4d8] max-w-3xl leading-relaxed">
                  {activeProjectModal.description}
                </p>
              </div>

              {/* Notice regarding Live Instance Auth Gate */}
              <div className="mt-6 border border-white/15 bg-white/[0.03] p-4 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-amber-400 font-bold">LIVE INSTANCE ACCESS:</span> The production application runs active multi-tenant SSO / JWT auth at <code className="text-white">/login</code>. Use the interactive walkthrough console below to inspect all platform features directly.
                </div>
                <a
                  href={activeProjectModal.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap border border-white bg-white text-black font-semibold px-4 py-2 hover:bg-[#d4d4d8] transition text-center"
                >
                  OPEN LIVE /LOGIN ↗
                </a>
              </div>

              {/* Interactive Public Walkthrough Console */}
              <div className="mt-8 border border-white/15 bg-[#141418] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="font-mono text-xs text-white font-bold block">
                      [PUBLIC WORKSPACE SIMULATOR]
                    </span>
                    <span className="font-mono text-[11px] text-[#71717a]">
                      Interactive architectural views of the platform workflows
                    </span>
                  </div>

                  {/* Walkthrough Switcher Buttons */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none font-mono text-xs">
                    <button
                      onClick={() => setCrmActiveTab('pipeline')}
                      className={`px-3 py-1.5 border transition ${
                        crmActiveTab === 'pipeline'
                          ? 'border-white bg-white text-black font-bold'
                          : 'border-white/10 bg-[#08080a] text-[#a1a1aa] hover:text-white'
                      }`}
                    >
                      01 / Opportunity Pipeline
                    </button>
                    <button
                      onClick={() => setCrmActiveTab('vector')}
                      className={`px-3 py-1.5 border transition ${
                        crmActiveTab === 'vector'
                          ? 'border-white bg-white text-black font-bold'
                          : 'border-white/10 bg-[#08080a] text-[#a1a1aa] hover:text-white'
                      }`}
                    >
                      02 / Vector Search
                    </button>
                    <button
                      onClick={() => setCrmActiveTab('telemetry')}
                      className={`px-3 py-1.5 border transition ${
                        crmActiveTab === 'telemetry'
                          ? 'border-white bg-white text-black font-bold'
                          : 'border-white/10 bg-[#08080a] text-[#a1a1aa] hover:text-white'
                      }`}
                    >
                      03 / Redis Streaming
                    </button>
                    <button
                      onClick={() => setCrmActiveTab('command')}
                      className={`px-3 py-1.5 border transition ${
                        crmActiveTab === 'command'
                          ? 'border-white bg-white text-black font-bold'
                          : 'border-white/10 bg-[#08080a] text-[#a1a1aa] hover:text-white'
                      }`}
                    >
                      04 / ⌘K Command Palette
                    </button>
                  </div>
                </div>

                {/* Walkthrough Tab 1: Pipeline Kanban */}
                {crmActiveTab === 'pipeline' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs text-[#a1a1aa]">
                      <span>STAGE BOARDS • ACTIVE VALUE: $234,000</span>
                      <span className="text-emerald-400">● REAL-TIME DRAG &amp; DROP ACTIVE</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs">
                      <div className="border border-white/10 bg-[#08080a] p-3 space-y-2">
                        <div className="flex items-center justify-between text-[#71717a] border-b border-white/5 pb-1">
                          <span>LEAD INGESTED (3)</span>
                          <span className="text-white">$38k</span>
                        </div>
                        <div className="border border-white/10 bg-[#121216] p-2.5 rounded space-y-1">
                          <span className="text-white font-bold block text-[11px]">Apex Logistics</span>
                          <span className="text-[#a1a1aa] text-[10px] block">$16,000 • 35 Seats</span>
                          <span className="border border-emerald-500/30 text-emerald-400 text-[9px] px-1 py-0.2 inline-block">High Intent</span>
                        </div>
                        <div className="border border-white/10 bg-[#121216] p-2.5 rounded space-y-1">
                          <span className="text-white font-bold block text-[11px]">Solaria Cloud</span>
                          <span className="text-[#a1a1aa] text-[10px] block">$22,000 • Enterprise</span>
                        </div>
                      </div>

                      <div className="border border-white/10 bg-[#08080a] p-3 space-y-2">
                        <div className="flex items-center justify-between text-[#71717a] border-b border-white/5 pb-1">
                          <span>DISCOVERY (2)</span>
                          <span className="text-white">$64k</span>
                        </div>
                        <div className="border border-white/10 bg-[#121216] p-2.5 rounded space-y-1">
                          <span className="text-white font-bold block text-[11px]">Veloce FinTech</span>
                          <span className="text-[#a1a1aa] text-[10px] block">$48,000 • Annual Contract</span>
                          <span className="border border-amber-500/30 text-amber-300 text-[9px] px-1 py-0.2 inline-block">Demo Scheduled</span>
                        </div>
                      </div>

                      <div className="border border-white/10 bg-[#08080a] p-3 space-y-2">
                        <div className="flex items-center justify-between text-[#71717a] border-b border-white/5 pb-1">
                          <span>PROPOSAL (1)</span>
                          <span className="text-white">$85k</span>
                        </div>
                        <div className="border border-white/10 bg-[#121216] p-2.5 rounded space-y-1">
                          <span className="text-white font-bold block text-[11px]">Nexus BioHealth</span>
                          <span className="text-[#a1a1aa] text-[10px] block">$85,000 • Custom SLA</span>
                          <span className="border border-purple-500/30 text-purple-300 text-[9px] px-1 py-0.2 inline-block">Legal Review</span>
                        </div>
                      </div>

                      <div className="border border-emerald-500/20 bg-emerald-950/10 p-3 space-y-2">
                        <div className="flex items-center justify-between text-emerald-400 border-b border-emerald-500/20 pb-1">
                          <span>CLOSED WON (2)</span>
                          <span className="text-white font-bold">$120k</span>
                        </div>
                        <div className="border border-emerald-500/30 bg-[#121216] p-2.5 rounded space-y-1">
                          <span className="text-white font-bold block text-[11px]">OmniRetail UK</span>
                          <span className="text-[#a1a1aa] text-[10px] block">$120,000 • Signed</span>
                          <span className="text-emerald-400 text-[9px] block">✓ Provisioned in Odoo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Walkthrough Tab 2: Vector Search */}
                {crmActiveTab === 'vector' && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="border border-white/15 bg-[#08080a] p-3.5 flex items-center gap-3">
                      <span className="text-emerald-400 font-bold">QUERY &gt;</span>
                      <span className="text-white">&quot;Find enterprise accounts requesting PostgreSQL vector migration&quot;</span>
                    </div>

                    <div className="border border-white/10 bg-[#08080a] p-4 space-y-3">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[#71717a] text-[11px]">
                        <span>HYBRID COSINE SIMILARITY MATCHES (POSTGRESQL PGVECTOR)</span>
                        <span className="text-emerald-400">LATENCY: 38ms</span>
                      </div>

                      <div className="p-3 border border-emerald-500/30 bg-white/[0.02] space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold">Solaria Cloud • Technical Discovery Transcript</span>
                          <span className="text-emerald-400 font-bold">98.4% Match</span>
                        </div>
                        <p className="text-[#a1a1aa] text-[11px]">
                          &quot;...client evaluating migration from legacy MySQL to managed PostgreSQL. Must support vector embeddings for 2.4M customer support logs...&quot;
                        </p>
                      </div>

                      <div className="p-3 border border-white/10 bg-white/[0.01] space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold">Nexus BioHealth • Requirements Spec</span>
                          <span className="text-[#d4d4d8] font-bold">92.1% Match</span>
                        </div>
                        <p className="text-[#71717a] text-[11px]">
                          &quot;...security compliance mandates dedicated tenant database schema with semantic search capabilities...&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Walkthrough Tab 3: Redis Streaming */}
                {crmActiveTab === 'telemetry' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-[#a1a1aa] text-[11px]">
                      <span>EVENT BROKER: REDIS PUB/SUB &amp; PRISMA MIDDLEWARE</span>
                      <span className="text-emerald-400">● 4 SESSIONS LISTENING</span>
                    </div>

                    <div className="border border-white/10 bg-black p-4 font-mono text-[11px] text-[#a1a1aa] space-y-1.5 overflow-x-auto">
                      <div className="text-emerald-400">[17:24:02.108] EVT: deal.stage_transition -&gt; &quot;Proposal Out&quot; [tenant_id: acme_corp]</div>
                      <div className="text-cyan-400">[17:24:02.115] REDIS: cache_invalidation -&gt; key &quot;pipeline:active_deals:acme&quot; [ttl: 300s]</div>
                      <div className="text-white">[17:24:02.122] WS: broadcast -&gt; 4 connected team sessions [payload: 420B]</div>
                      <div className="text-[#71717a]">[17:24:02.130] PRISMA: audit_log_write -&gt; user &quot;isaac@acme&quot; [latency: 4.2ms]</div>
                      <div className="text-emerald-400">[17:24:03.450] EVT: note.vector_embedded -&gt; dim: 1536 [cosine_indexed: true]</div>
                    </div>
                  </div>
                )}

                {/* Walkthrough Tab 4: Command Palette */}
                {crmActiveTab === 'command' && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="border border-white/20 bg-[#08080a] p-4 max-w-xl mx-auto space-y-3 shadow-2xl">
                      <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                        <span className="text-emerald-400">⌘K</span>
                        <span className="text-white">Type a command or jump to workspace...</span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between p-2 bg-white/10 text-white rounded">
                          <span>+ Create New Opportunity</span>
                          <span className="text-[#a1a1aa]">N</span>
                        </div>
                        <div className="flex items-center justify-between p-2 hover:bg-white/5 text-[#d4d4d8] rounded">
                          <span>→ Switch Tenant: Bakan Gizo Abuja</span>
                          <span className="text-[#a1a1aa]">T</span>
                        </div>
                        <div className="flex items-center justify-between p-2 hover:bg-white/5 text-[#d4d4d8] rounded">
                          <span>⤓ Export Pipeline Summary (CSV)</span>
                          <span className="text-[#a1a1aa]">E</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Engineering Specs & Architectural Narrative */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-8 font-space">
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h5 className="font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2 font-bold">
                      [ARCHITECTURAL CHALLENGE &amp; SOLUTION]
                    </h5>
                    <p className="text-sm leading-relaxed text-[#d4d4d8]">
                      {activeProjectModal.challenge} {activeProjectModal.solution}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2 font-bold">
                      [VERIFIED SYSTEM OUTCOMES]
                    </h5>
                    <p className="text-sm leading-relaxed text-[#d4d4d8]">
                      {activeProjectModal.impact}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 font-mono text-xs">
                  <div>
                    <h5 className="text-[#a1a1aa] uppercase tracking-wider mb-2 font-bold">
                      [TECHNOLOGIES EMPLOYED]
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProjectModal.tech.map((t) => (
                        <span key={t} className="border border-white/10 bg-white/5 px-2.5 py-1 text-[#d4d4d8]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col gap-3">
                    <a
                      href={activeProjectModal.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center border border-white bg-white text-black font-semibold py-3 hover:bg-[#d4d4d8] transition"
                    >
                      VISIT PRODUCTION APP (/LOGIN) ↗
                    </a>
                    <a
                      href="#contact"
                      onClick={closeModal}
                      className="text-center border border-white/20 bg-white/5 py-3 text-white hover:bg-white hover:text-black transition"
                    >
                      COMMISSION SIMILAR ARCHITECTURE →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Graphic Design Case Study Modal (with Assembled / Dieline Toggle & Stable URL) ── */}
      <AnimatePresence>
        {activeDesignModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            ref={modalRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-[#08080a]/90 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-white/20 bg-[#0e0e11] p-6 sm:p-10 font-space text-[#f4f4f2] shadow-2xl"
            >
              {/* Top Bar with Semantic Close Button & Stable URL */}
              <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono text-xs text-[#71717a] gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">● [CASE STUDY DOSSIER]</span>
                  <span className="text-[#a1a1aa]">• STABLE URL: /?case={activeDesignModal.id}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => copyShareableLink(`${window.location.origin}/?case=${activeDesignModal.id}`)}
                    className="border border-white/15 px-3 py-1 text-[11px] text-[#d4d4d8] hover:border-white hover:text-white transition"
                  >
                    {copiedLink ? '✓ LINK COPIED' : 'COPY SHAREABLE LINK ↗'}
                  </button>
                  <button
                    ref={closeBtnRef}
                    onClick={closeModal}
                    aria-label="Close case study dialog"
                    className="font-mono text-xs border border-white/20 px-3 py-1 text-white hover:bg-white hover:text-black transition"
                  >
                    CLOSE [✕]
                  </button>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="space-y-2">
                <h3
                  id="case-study-title"
                  className="font-syne font-extrabold text-3xl sm:text-5xl tracking-tight text-white"
                >
                  {activeDesignModal.title}
                </h3>
                {activeDesignModal.client && (
                  <p className="font-mono text-xs text-[#a1a1aa]">
                    CLIENT / ORG: <span className="text-white">{activeDesignModal.client}</span> • {activeDesignModal.year}
                  </p>
                )}
              </div>

              {/* Formula Switcher Tabs */}
              {activeDesignModal.variants && activeDesignModal.variants.length > 0 && (
                <div className="mt-8 border-t border-b border-white/10 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase block">
                      SELECT FORMULA VARIANT ({activeDesignModal.variants.length} TOTAL)
                    </span>
                    {currentVariant && (
                      <span className="font-mono text-xs text-white font-semibold">
                        CURRENT: {currentVariant.name}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {activeDesignModal.variants.map((v) => {
                      const isSelected = (currentVariant?.id || activeDesignModal.variants![0].id) === v.id;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => {
                            setSelectedVariantId(v.id);
                            setSelectedGalleryImage(viewMode === 'assembled' ? v.image : (v.dielineImage || v.image));
                          }}
                          className={`flex items-center gap-2 px-3.5 py-2 font-mono text-xs border transition-all whitespace-nowrap ${
                            isSelected
                              ? 'border-white bg-white text-black font-bold shadow-lg'
                              : 'border-white/10 bg-[#16161b] text-[#d4d4d8] hover:border-white/30 hover:text-white'
                          }`}
                        >
                          <span
                            className="h-2.5 w-2.5 rounded-full border border-black/20"
                            style={{ backgroundColor: v.accent }}
                          />
                          <span>{v.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* View Mode Toggle: Assembled Retail View vs Production Dieline (Priority 2) */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-white/10 bg-[#08080a] p-3 font-mono text-xs">
                <span className="text-[#a1a1aa] text-[11px]">
                  DISPLAY MODE: Toggle between finished packaging render and technical production mechanical
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setViewMode('assembled');
                      if (currentVariant) {
                        setSelectedGalleryImage(currentVariant.image);
                      }
                    }}
                    className={`px-3 py-1.5 border transition ${
                      viewMode === 'assembled'
                        ? 'border-white bg-white text-black font-bold'
                        : 'border-white/15 text-[#a1a1aa] hover:text-white'
                    }`}
                  >
                    📦 Assembled Retail Carton
                  </button>
                  <button
                    onClick={() => {
                      setViewMode('dieline');
                      if (currentVariant && currentVariant.dielineImage) {
                        setSelectedGalleryImage(currentVariant.dielineImage);
                      }
                    }}
                    className={`px-3 py-1.5 border transition ${
                      viewMode === 'dieline'
                        ? 'border-white bg-white text-black font-bold'
                        : 'border-white/15 text-[#a1a1aa] hover:text-white'
                    }`}
                  >
                    📐 Production Die-Cut Mechanical
                  </button>
                </div>
              </div>

              {/* Visual Presentation Frame */}
              <div className="mt-4 border border-white/10 bg-[#141418] p-4 sm:p-8 text-center">
                {selectedGalleryImage ? (
                  <div className="space-y-4">
                    <div className="relative flex items-center justify-center max-h-[520px] bg-black/40 p-4 border border-white/5 rounded overflow-hidden">
                      <img
                        src={selectedGalleryImage}
                        alt={currentVariant ? currentVariant.name : activeDesignModal.title}
                        className="max-h-[480px] max-w-full object-contain mx-auto filter drop-shadow-2xl transition-all duration-300"
                      />
                    </div>

                    {/* Formula Specs Banner under Image */}
                    {currentVariant && (
                      <div className="border border-white/10 bg-[#08080a] p-4 text-left font-mono text-xs">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span
                              className="h-3 w-3 rounded-full"
                              style={{ backgroundColor: currentVariant.accent }}
                            />
                            <span className="font-syne font-bold text-sm text-white">
                              {currentVariant.name} — {currentVariant.subtitle}
                            </span>
                          </div>
                          <a
                            href={currentVariant.dielineImage || selectedGalleryImage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] text-white hover:bg-white hover:text-black transition"
                          >
                            OPEN FULL-RES DIELINE ↗
                          </a>
                        </div>
                        <p className="text-[#d4d4d8] text-[11px] leading-relaxed mb-2">
                          {currentVariant.description}
                        </p>
                        <div className="text-[11px] text-[#a1a1aa]">
                          <span className="text-[#f4f4f2] font-semibold">ACTIVE INGREDIENTS:</span> {currentVariant.actives}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="py-12">
                    <div className="font-syne font-extrabold text-5xl sm:text-7xl text-white tracking-tighter">
                      Aa Bb Gg
                    </div>
                    <div className="font-serif italic text-xl text-[#d4d4d8] mt-2">
                      Typography Scale &amp; Visual Direction
                    </div>
                  </div>
                )}

                {/* Swatch chips */}
                <div className="mt-6 flex items-center justify-center gap-3 flex-wrap font-mono text-xs">
                  {(currentVariant?.palette || activeDesignModal.palette).map((hex) => (
                    <div
                      key={hex}
                      className="flex items-center gap-2 border border-white/10 bg-[#08080a] px-3.5 py-1.5"
                    >
                      <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: hex }} />
                      <span className="text-[#d4d4d8]">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Breakdown Grid */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-8">
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h5 className="font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2 font-bold">
                      [DESIGN SUMMARY]
                    </h5>
                    <p className="text-sm leading-relaxed text-[#d4d4d8]">
                      {activeDesignModal.description}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-3 font-bold">
                      [DELIVERABLES &amp; PRODUCTION SPECS]
                    </h5>
                    <ul className="space-y-2 font-mono text-xs text-[#d4d4d8]">
                      {activeDesignModal.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">✦</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 font-mono text-xs">
                  <div>
                    <h5 className="text-[#a1a1aa] uppercase tracking-wider mb-2 font-bold">
                      [SOFTWARE / TOOLS]
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {activeDesignModal.tools.map((tool) => (
                        <span key={tool} className="border border-white/10 bg-white/5 px-2.5 py-1 text-[#d4d4d8]">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col gap-3 font-mono text-xs">
                    {activeDesignModal.link && (
                      <a
                        href={activeDesignModal.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center border border-white/20 bg-white text-black font-semibold py-3 hover:bg-[#d4d4d8] transition"
                      >
                        VIEW PRODUCTION SITE ↗
                      </a>
                    )}
                    <a
                      href="#contact"
                      onClick={closeModal}
                      className="text-center border border-white/20 bg-white/5 py-3 text-white hover:bg-white hover:text-black transition"
                    >
                      COMMISSION PACKAGING DESIGN →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;
