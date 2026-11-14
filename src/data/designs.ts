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
  dielineImage?: string;
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
  dielineImage?: string;
  gallery?: string[];
  variants?: DesignVariant[];
  link?: string;
};

export const designs: Design[] = [
  {
    id: 'dr-kayla-skincare-system',
    title: 'Dr Kayla® Soap Packaging — Seven Variants',
    description:
      'Designed a coordinated folding-carton system for seven soap variants, including color differentiation, front-panel hierarchy, packaging copy, and print-ready dielines.',
    category: 'Print & Packaging',
    client: 'Dr Kayla Ltd (Manchester, UK)',
    year: '2026',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Print Production Dielines', 'CMYK Pre-press'],
    deliverables: [
      '7x Folding Box Production Dielines (20.8 x 21.4 cm, 130g / 4.6 oz)',
      'Variant color system, botanical graphics, and shared typography',
      'Packaging copy and layouts for ingredients, directions, and warnings',
      'Barcode placement and manufacturer information panels',
      'Badge artwork, vector crests, and front-panel graphics',
      'Full CMYK Press Mechanicals with Bleeds & Tuck-in Flap Geometry',
    ],
    palette: ['#15803D', '#EA580C', '#DB2777', '#7E22CE', '#16A34A', '#0284C7', '#0D9488'],
    accent: '#15803D',
    gradient: 'from-emerald-500/20 via-teal-600/10 to-slate-900',
    image: '/assets/designs/dr-kayla-detox-assembled.png',
    dielineImage: '/assets/designs/dr-kayla-detox.jpg',
    gallery: [
      '/assets/designs/dr-kayla-detox-assembled.png',
      '/assets/designs/dr-kayla-bright-assembled.png',
      '/assets/designs/dr-kayla-beauty-assembled.png',
      '/assets/designs/dr-kayla-renew-assembled.png',
      '/assets/designs/dr-kayla-acne-assembled.png',
      '/assets/designs/dr-kayla-men-assembled.png',
      '/assets/designs/dr-kayla-barrier-assembled.png',
    ],
    variants: [
      {
        id: 'detox',
        name: 'DETOX+',
        subtitle: 'Purifying & Oil Control Face & Body Soap',
        actives: 'Activated Charcoal • Tea Tree Oil • Niacinamide • Coconut Oil & Green Tea Extract',
        accent: '#15803D',
        image: '/assets/designs/dr-kayla-detox-assembled.png',
        dielineImage: '/assets/designs/dr-kayla-detox.jpg',
        palette: ['#15803D', '#22C55E', '#052E16', '#FFFFFF'],
        description:
          'Emerald color coding, a bold product name, and botanical imagery establish the shared soap layout while distinguishing DETOX+.',
      },
      {
        id: 'bright',
        name: 'BRIGHT+',
        subtitle: 'Vitamin C Brightening Face & Body Soap',
        actives: 'Vitamin C • Niacinamide • Alpha Arbutin • Natural Coconut Oil',
        accent: '#EA580C',
        image: '/assets/designs/dr-kayla-bright-assembled.png',
        dielineImage: '/assets/designs/dr-kayla-bright.jpg',
        palette: ['#EA580C', '#F97316', '#FFF7ED', '#7C2D12'],
        description:
          'Orange and amber accents distinguish BRIGHT+, with the product name and ingredient line kept in the shared front-panel grid.',
      },
      {
        id: 'beauty',
        name: 'BEAUTY+',
        subtitle: 'Radiance & Even Skin Tone Soap',
        actives: 'Niacinamide • Vitamin C • Alpha Arbutin • Natural Coconut Oil & Vitamins',
        accent: '#DB2777',
        image: '/assets/designs/dr-kayla-beauty-assembled.png',
        dielineImage: '/assets/designs/dr-kayla-beauty.jpg',
        palette: ['#DB2777', '#EC4899', '#FDF2F8', '#831843'],
        description:
          'Magenta fields, a clear product-name hierarchy, and coconut imagery give BEAUTY+ a distinct place within the family.',
      },
      {
        id: 'renew',
        name: 'RENEW+',
        subtitle: 'Skin Renewing Face & Body Soap',
        actives: 'Bakuchiol • Vitamin E • Marine Collagen • Natural Coconut Oil',
        accent: '#7E22CE',
        image: '/assets/designs/dr-kayla-renew-assembled.png',
        dielineImage: '/assets/designs/dr-kayla-renew.jpg',
        palette: ['#7E22CE', '#9333EA', '#FAF5FF', '#3B0764'],
        description:
          'Purple color coding and a consistent typographic hierarchy connect RENEW+ to the range while making the variant easy to identify.',
      },
      {
        id: 'acne',
        name: 'ACNE+',
        subtitle: 'Acne Clearing Face & Body Soap',
        actives: 'Salicylic Acid (BHA) • Activated Charcoal • Tea Tree Oil • Sulphur • Zinc PCA',
        accent: '#16A34A',
        image: '/assets/designs/dr-kayla-acne-assembled.png',
        dielineImage: '/assets/designs/dr-kayla-acne.png',
        palette: ['#16A34A', '#4ADE80', '#052E16', '#FFFFFF'],
        description:
          'Green panels and a prominent ACNE+ wordmark carry the variant identity across the front, side, and information panels.',
      },
      {
        id: 'men',
        name: 'MEN+',
        subtitle: 'Refreshing Face & Body Soap',
        actives: 'Menthol • Niacinamide • Vitamin E • Cooling Coconut & Mint',
        accent: '#0284C7',
        image: '/assets/designs/dr-kayla-men-assembled.png',
        dielineImage: '/assets/designs/dr-kayla-men.jpg',
        palette: ['#0284C7', '#0369A1', '#082F49', '#F0F9FF'],
        description:
          'Blue color coding and mint imagery distinguish MEN+ while retaining the range’s typography and panel structure.',
      },
      {
        id: 'barrier',
        name: 'BARRIER+',
        subtitle: 'Skinbarrier Cleansing Bar',
        actives: 'Ceramides • Niacinamide • Panthenol (Pro-Vitamin B5) • Coconut Oil',
        accent: '#0D9488',
        image: '/assets/designs/dr-kayla-barrier-assembled.png',
        dielineImage: '/assets/designs/dr-kayla-barrier.jpg',
        palette: ['#0D9488', '#14B8A6', '#042F2C', '#F0FDFA'],
        description:
          'Teal panels and a shared type system distinguish BARRIER+ without breaking the visual consistency of the soap family.',
      },
    ],
    link: '',
  },
  {
    id: 'dr-kayla-honey-mixture-system',
    title: 'Dr Kayla® Honey Mixture Packaging — Five Variants',
    description:
      'Designed five coordinated 250g honey-mixture cartons, from packaging copy and botanical graphics to front-panel hierarchy, nutrition-panel layout, and print-ready dielines.',
    category: 'Print & Packaging',
    client: 'Dr Kayla Ltd (Manchester, UK)',
    year: '2026',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Packaging Dielines', 'CMYK Pre-press'],
    deliverables: [
      '5x Folding Carton Production Dielines (11.0 cm H × 6.8 cm W × 6.8 cm D, 250g)',
      'Custom Botanical Vector Graphics, Color Codes & Honeycomb Crests',
      'Packaging copy, ingredient lists, directions, and warning-panel layouts',
      'Average Nutritional Information Panels (Energy, Carbs, Protein, Salt)',
      'Tamper-Evident Glue Flap Geometry & Production Bleed Margins',
      'Print artwork and assembled presentation mockups',
    ],
    palette: ['#7E22CE', '#059669', '#123D75', '#F97316', '#075E59'],
    accent: '#D97706',
    gradient: 'from-amber-500/20 via-yellow-600/10 to-stone-900',
    image: '/assets/designs/honey-mixture-1.jpg',
    gallery: [
      '/assets/designs/honey-mixture-1.jpg',
      '/assets/designs/honey-mixture-2.jpg',
      '/assets/designs/honey-mixture-3.jpg',
      '/assets/designs/honey-mixture-4.jpg',
      '/assets/designs/honey-mixture-5.jpg',
    ],
    variants: [
      {
        id: 'salvia',
        name: 'SALVIA',
        subtitle: 'Natural Salvation for the Voice & Throat (250g)',
        actives: '100% Raw Honey • Sage Extract (Salvia officinalis) • Propolis Extract',
        accent: '#7E22CE',
        image: '/assets/designs/honey-mixture-1.jpg',
        dielineImage: '/assets/designs/honey-mixture-1.jpg',
        palette: ['#7E22CE', '#581C87', '#F3E8FF', '#D97706'],
        description:
          'Purple side panels, botanical imagery, and a large Salvia wordmark establish the front-panel hierarchy.',
      },
      {
        id: 'excelsa',
        name: 'EXCELSA',
        subtitle: 'Natural Respiratory Health & Clear Breathing (250g)',
        actives: 'Raw Honey (78%) • Anise Fruit Extract • Thyme Leaf/Flower • Juniper Shoots',
        accent: '#059669',
        image: '/assets/designs/honey-mixture-2.jpg',
        dielineImage: '/assets/designs/honey-mixture-2.jpg',
        palette: ['#059669', '#047857', '#064E3B', '#ECFDF5'],
        description:
          'Green and gold fields connect the Excelsa wordmark, botanical illustration, and supporting information panels.',
      },
      {
        id: 'mirosan',
        name: 'MIROSAN',
        subtitle: 'Relaxation, Calmness & Restful Sleep (250g)',
        actives: 'Raw Honey (78%) • Lemon Balm Extract (Melissa officinalis) • Chamomile Extract',
        accent: '#123D75',
        image: '/assets/designs/honey-mixture-3.jpg',
        dielineImage: '/assets/designs/honey-mixture-3.jpg',
        palette: ['#123D75', '#082F49', '#FEF3C7', '#FFFFFF'],
        description:
          'Blue panels, moon imagery, and a white-and-gold front panel distinguish Mirosan within the honey-mixture range.',
      },
      {
        id: 'apipropol',
        name: 'APIPROPOL',
        subtitle: 'Immune Booster & Daily Metabolic Vitality (250g)',
        actives: 'Pure Natural Honey (85%) • Flower Pollen • Vitamin C (Ascorbic Acid)',
        accent: '#F97316',
        image: '/assets/designs/honey-mixture-4.jpg',
        dielineImage: '/assets/designs/honey-mixture-4.jpg',
        palette: ['#F97316', '#C2410C', '#FEF3C7', '#FFFFFF'],
        description:
          'Orange and gold color coding, a large Apipropol wordmark, and botanical illustration create a distinct variant within the shared layout.',
      },
      {
        id: 'gastro',
        name: 'GASTRO',
        subtitle: 'Natural Digestive Support & Gut Comfort (250g)',
        actives: '100% Raw Honey • Ginger Extract • Peppermint Leaf • Fennel Seeds',
        accent: '#075E59',
        image: '/assets/designs/honey-mixture-5.jpg',
        dielineImage: '/assets/designs/honey-mixture-5.jpg',
        palette: ['#075E59', '#134E4A', '#FEF3C7', '#D97706'],
        description:
          'Teal fields, ginger and mint imagery, and a large Gastro wordmark distinguish this carton while preserving the family’s panel structure.',
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
