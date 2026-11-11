export type DesignCategory =
  | 'Brand Identity'
  | 'Social Media'
  | 'UI/UX'
  | 'Print & Packaging'
  | 'Marketing';

export type DesignVariant = {
  id: string;
  name: string;
  subtitle: string;
  actives: string;
  accent: string;
  image: string;
  palette: string[];
  description: string;
};

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
  gallery?: string[];
  variants?: DesignVariant[];
  link?: string;
};

export const designs: Design[] = [
  {
    id: 'dr-kayla-skincare-system',
    title: 'Dr Kayla® Clinical Soap Packaging (7 Formulas)',
    description:
      'Comprehensive packaging suite and die-cut production mechanicals for Dr Kayla® dermatological soap line. Engineered 7 specialized product formulas with custom botanical color systems, regulatory INCI compliance, scannable barcodes, and 20.8cm x 21.4cm folding carton dielines.',
    category: 'Print & Packaging',
    client: 'Dr Kayla Ltd (Manchester, UK)',
    year: '2026',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Print Production Dielines', 'CMYK Pre-press'],
    deliverables: [
      '7x Folding Box Production Dielines (20.8 x 21.4 cm, 130g / 4.6 oz)',
      'Custom Botanical & Clinical Color Systems for Each Formula',
      'INCI Regulatory Ingredient Hierarchy, Directional Panels & Warnings',
      'Scannable EAN-13 Barcodes & UK / Thailand Manufacturer Badges',
      'Dermatologically Tested Certification Seals & Vector Crests',
      'Full CMYK Press Mechanicals with Bleeds & Tuck-in Flap Geometry',
    ],
    palette: ['#15803D', '#EA580C', '#DB2777', '#7E22CE', '#16A34A', '#0284C7', '#0D9488'],
    accent: '#15803D',
    gradient: 'from-emerald-500/20 via-teal-600/10 to-slate-900',
    image: '/assets/designs/dr-kayla-detox.jpg',
    gallery: [
      '/assets/designs/dr-kayla-detox.jpg',
      '/assets/designs/dr-kayla-bright.jpg',
      '/assets/designs/dr-kayla-beauty.jpg',
      '/assets/designs/dr-kayla-renew.jpg',
      '/assets/designs/dr-kayla-acne.png',
      '/assets/designs/dr-kayla-men.jpg',
      '/assets/designs/dr-kayla-barrier.jpg',
    ],
    variants: [
      {
        id: 'detox',
        name: 'DETOX+',
        subtitle: 'Purifying & Oil Control Face & Body Soap',
        actives: 'Activated Charcoal • Tea Tree Oil • Niacinamide • Coconut Oil & Green Tea Extract',
        accent: '#15803D',
        image: '/assets/designs/dr-kayla-detox.jpg',
        palette: ['#15803D', '#22C55E', '#052E16', '#FFFFFF'],
        description:
          'Deep-cleansing purifying bar formulated with Activated Charcoal and Tea Tree Oil to unclog pores, eliminate excess sebum, and prevent breakouts with an emerald botanical profile.',
      },
      {
        id: 'bright',
        name: 'BRIGHT+',
        subtitle: 'Vitamin C Brightening Face & Body Soap',
        actives: 'Vitamin C • Niacinamide • Alpha Arbutin • Natural Coconut Oil',
        accent: '#EA580C',
        image: '/assets/designs/dr-kayla-bright.jpg',
        palette: ['#EA580C', '#F97316', '#FFF7ED', '#7C2D12'],
        description:
          'High-radiance brightening soap engineered with Vitamin C, Niacinamide, and Alpha Arbutin to fade hyperpigmentation, even skin tone, and deliver vibrant citrus-amber shelf impact.',
      },
      {
        id: 'beauty',
        name: 'BEAUTY+',
        subtitle: 'Radiance & Even Skin Tone Soap',
        actives: 'Niacinamide • Vitamin C • Alpha Arbutin • Natural Coconut Oil & Vitamins',
        accent: '#DB2777',
        image: '/assets/designs/dr-kayla-beauty.jpg',
        palette: ['#DB2777', '#EC4899', '#FDF2F8', '#831843'],
        description:
          'Nourishing radiance formulation with intense magenta color grading, botanical droplet graphics, and triple-action skin tone evening actives.',
      },
      {
        id: 'renew',
        name: 'RENEW+',
        subtitle: 'Skin Renewing Face & Body Soap',
        actives: 'Bakuchiol • Vitamin E • Marine Collagen • Natural Coconut Oil',
        accent: '#7E22CE',
        image: '/assets/designs/dr-kayla-renew.jpg',
        palette: ['#7E22CE', '#9333EA', '#FAF5FF', '#3B0764'],
        description:
          'Anti-aging luxury purple carton layout featuring Bakuchiol (retinol alternative), Marine Collagen, and Vitamin E for cell renewal and dermal elasticity.',
      },
      {
        id: 'acne',
        name: 'ACNE+',
        subtitle: 'Acne Clearing Face & Body Soap',
        actives: 'Salicylic Acid (BHA) • Activated Charcoal • Tea Tree Oil • Sulphur • Zinc PCA',
        accent: '#16A34A',
        image: '/assets/designs/dr-kayla-acne.png',
        palette: ['#16A34A', '#4ADE80', '#052E16', '#FFFFFF'],
        description:
          'Clinical targeted blemish-control dieline with clean-room pharmaceutical green styling, pore-clearing callouts, and multi-active acne control matrix.',
      },
      {
        id: 'men',
        name: 'MEN+',
        subtitle: 'Refreshing Face & Body Soap',
        actives: 'Menthol • Niacinamide • Vitamin E • Cooling Coconut & Mint',
        accent: '#0284C7',
        image: '/assets/designs/dr-kayla-men.jpg',
        palette: ['#0284C7', '#0369A1', '#082F49', '#F0F9FF'],
        description:
          'Ice-blue masculine grooming carton with cooling menthol crystals, deodorant benefits, and crisp Arctic-inspired typography and badging.',
      },
      {
        id: 'barrier',
        name: 'BARRIER+',
        subtitle: 'Skinbarrier Cleansing Bar',
        actives: 'Ceramides • Niacinamide • Panthenol (Pro-Vitamin B5) • Coconut Oil',
        accent: '#0D9488',
        image: '/assets/designs/dr-kayla-barrier.jpg',
        palette: ['#0D9488', '#14B8A6', '#042F2C', '#F0FDFA'],
        description:
          'Teal derm-defense cleansing bar packaging dedicated to barrier repair, trans-epidermal water loss prevention, and soothing irritated sensitive skin.',
      },
    ],
    link: '',
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
    glow: '0 0 40px rgba(160,185,129,0.25)',
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
