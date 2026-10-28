export type DesignCategory =
  | 'Brand Identity'
  | 'Social Media'
  | 'UI/UX'
  | 'Print & Packaging'
  | 'Marketing';

export type Design = {
  id: string;
  title: string;
  description: string;
  category: DesignCategory;
  client?: string;
  year?: string;
  tools: string[];
  deliverables: string[];
  palette: string[];
  accent: string;
  gradient: string;
  image?: string;
  link?: string;
};

export const designs: Design[] = [
  {
    id: 'bakangizo-brand',
    title: 'Bakangizo Brand Identity',
    description:
      'Complete visual identity system for Bakangizo — logo suite, typography hierarchy, clinical color palette, and brand governance rules for physical and digital touchpoints.',
    category: 'Brand Identity',
    client: 'Bakan Gizo Pharmacy & Stores Ltd',
    year: '2026',
    tools: ['Figma', 'Adobe Illustrator', 'Canva Pro'],
    deliverables: [
      'Primary & Secondary Logo Suite',
      'Typography & Hierarchy Guidelines',
      'Clinical Color System & Swatches',
      'Executive Stationery & Business Assets',
      'Digital Storefront Brand Guidelines',
    ],
    palette: ['#06B6D4', '#0F172A', '#38BDF8', '#F8FAFC'],
    accent: '#06b6d4',
    gradient: 'from-cyan-500/30 via-blue-600/20 to-slate-900',
    image: '',
    link: '',
  },
  {
    id: 'social-media-pack',
    title: 'Social Media Campaign Pack',
    description:
      'High-resolution creative campaign assets — Instagram carousel templates, reels covers, and story layouts designed for maximum brand recognition and visual polish.',
    category: 'Social Media',
    client: 'Healthcare & Retail Marketing',
    year: '2026',
    tools: ['Canva Pro', 'Adobe Photoshop'],
    deliverables: [
      '10+ High-Conversion Carousel Slides',
      'Instagram Story & Reel Cover Kits',
      'Promotional Discount Banners',
      'Vector Iconography & Stickers',
    ],
    palette: ['#A855F7', '#EC4899', '#3B82F6', '#020617'],
    accent: '#a855f7',
    gradient: 'from-purple-500/30 via-fuchsia-600/20 to-slate-900',
    image: '',
    link: '',
  },
  {
    id: 'finance-dashboard-ui',
    title: 'Finance Dashboard UI',
    description:
      'Clean, data-rich dashboard interface design for tracking financial metrics — balances, transactions, and category insights. Converted into production React components.',
    category: 'UI/UX',
    client: 'FinTech Analytics Module',
    year: '2026',
    tools: ['Figma', 'React', 'Tailwind CSS', 'Recharts'],
    deliverables: [
      'Figma Component Library & Design System',
      'High-Fidelity Desktop & Mobile Views',
      'Interactive Chart & Telemetry Prototypes',
      'Dark/Light Theme Accessible Tokens',
    ],
    palette: ['#10B981', '#06B6D4', '#0F172A', '#1E293B'],
    accent: '#10b981',
    gradient: 'from-emerald-500/30 via-teal-600/20 to-slate-900',
    image: '',
    link: 'https://finance-dashboard-ui-orcin-iota.vercel.app/',
  },
  {
    id: 'executive-pitch-deck',
    title: 'Executive Pitch Deck',
    description:
      'Polished presentation deck designed directly for executive-level stakeholders and company leadership — combining cinematic slides with rigorous data visualization.',
    category: 'Print & Packaging',
    client: 'Executive Management',
    year: '2026',
    tools: ['PowerPoint', 'Canva Pro', 'Figma'],
    deliverables: [
      '20+ Custom Executive Slide Layouts',
      'Corporate Narrative & Growth Charts',
      'Print-Ready & Screen-Optimized PDFs',
      'Editable Master Template System',
    ],
    palette: ['#F59E0B', '#D97706', '#1E293B', '#FFFFFF'],
    accent: '#f59e0b',
    gradient: 'from-amber-500/30 via-orange-600/20 to-slate-900',
    image: '',
    link: '',
  },
  {
    id: 'chugabags-banners',
    title: 'E-Commerce Product Banners',
    description:
      'Promotional banners, product feature cards, and catalog imagery for chugabags.com — optimized for conversion, high CTR, and consistent brand luxury.',
    category: 'Marketing',
    client: 'Chuga Rex Retail Storefront',
    year: '2024',
    tools: ['Adobe Photoshop', 'Canva Pro', 'WordPress'],
    deliverables: [
      'Homepage Hero Carousel Banners',
      'Category Header Artwork',
      'Seasonal Flash Sale Promo Creatives',
      'Retargeting Web Ad Displays',
    ],
    palette: ['#EC4899', '#BE185D', '#0F172A', '#FCE7F3'],
    accent: '#ec4899',
    gradient: 'from-pink-500/30 via-rose-600/20 to-slate-900',
    image: '',
    link: 'https://chugabags.com/',
  },
  {
    id: 'indiecrm-ui',
    title: 'IndieCRM Interface Design',
    description:
      'Lightweight CRM product UI designed for solo operators and agile teams — intuitive contact pipelines, lead stages, and a rapid, zero-friction daily workflow.',
    category: 'UI/UX',
    client: 'SaaS Product Concept',
    year: '2026',
    tools: ['Figma', 'React 19', 'Next.js 15'],
    deliverables: [
      'Kanban Lead Stage Pipeline Mockups',
      'Micro-Interactions & State Architecture',
      'Customer Profile Drawer UI',
      'Production-Ready SVG Iconography',
    ],
    palette: ['#6366F1', '#4F46E5', '#0B0F19', '#E0E7FF'],
    accent: '#6366f1',
    gradient: 'from-indigo-500/30 via-violet-600/20 to-slate-900',
    image: '',
    link: 'https://indie-crm-two.vercel.app/login',
  },
];

export const categoryColors: Record<
  DesignCategory,
  { border: string; bg: string; text: string; glow: string; badge: string }
> = {
  'Brand Identity': {
    border: 'border-cyan-400/40',
    bg: 'bg-cyan-400/10',
    text: 'text-cyan-300',
    glow: '0 0 40px rgba(6,182,212,0.25)',
    badge: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200',
  },
  'Social Media': {
    border: 'border-purple-400/40',
    bg: 'bg-purple-400/10',
    text: 'text-purple-300',
    glow: '0 0 40px rgba(168,85,247,0.25)',
    badge: 'border-purple-400/30 bg-purple-400/10 text-purple-200',
  },
  'UI/UX': {
    border: 'border-emerald-400/40',
    bg: 'bg-emerald-400/10',
    text: 'text-emerald-300',
    glow: '0 0 40px rgba(16,185,129,0.25)',
    badge: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  },
  'Print & Packaging': {
    border: 'border-amber-400/40',
    bg: 'bg-amber-400/10',
    text: 'text-amber-300',
    glow: '0 0 40px rgba(245,158,11,0.25)',
    badge: 'border-amber-400/30 bg-amber-400/10 text-amber-200',
  },
  Marketing: {
    border: 'border-pink-400/40',
    bg: 'bg-pink-400/10',
    text: 'text-pink-300',
    glow: '0 0 40px rgba(236,72,153,0.25)',
    badge: 'border-pink-400/30 bg-pink-400/10 text-pink-200',
  },
};
