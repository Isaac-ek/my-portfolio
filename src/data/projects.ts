export type ProjectWalkthroughStep = {
  step: string;
  title: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  demoNote?: string;
  category?: 'Full-Stack' | 'Security/UI' | 'Web Architecture' | 'UI/UX';
  challenge?: string;
  solution?: string;
  impact?: string;
  walkthrough?: ProjectWalkthroughStep[];
  gif?: string;
  screenshot?: string;
  codeSnippet?: string;
};

export const projects: Project[] = [
  {
    title: 'Indie CRM SaaS Platform',
    description:
      'Multi-tenant customer relationship portal with dark-mode UI, vector search indexing, real-time analytics, and streaming data layers.',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis'],
    category: 'Full-Stack',
    github: '',
    demo: 'https://indie-crm-two.vercel.app/login',
    demoNote: 'Production deployment with tenant auth gate (/login). Full architecture & UI walkthrough documented below.',
    challenge:
      'Architect a scalable multi-tenant CRM that balances rich relationship management features with lightning-fast streaming UI.',
    solution:
      'Engineered with Next.js 15 and React 19, backed by cloud PostgreSQL, Prisma ORM, and Redis for high-throughput caching.',
    impact:
      'Delivers instant vector search indexing, live lead pipelines, and a polished dark-mode interface with zero-lag pipeline reactivity.',
    walkthrough: [
      {
        step: '01',
        title: 'Multi-Tenant Lead Pipeline & Kanban',
        description: 'Dynamic drag-and-drop opportunity tracking boards with per-seat role-based access control (RBAC), stage automations, and custom deal valuation metrics.',
      },
      {
        step: '02',
        title: 'Vector-Indexed Contact & Note Search',
        description: 'Sub-50ms hybrid semantic search across customer communications, activity logs, and CRM tickets powered by PostgreSQL vector embeddings.',
      },
      {
        step: '03',
        title: 'Real-Time Telemetry & Event Streaming',
        description: 'Event-driven notification layer using Redis Pub/Sub and Prisma middleware to broadcast deal updates instantly across active team sessions.',
      },
      {
        step: '04',
        title: 'Command Palette & Keyboard-First UX',
        description: 'Integrated ⌘K command center for frictionless contact creation, keyboard navigation, and fast context switching without leaving the primary workspace.',
      },
    ],
    gif: '',
    screenshot: '',
    codeSnippet: '',
  },
  {
    title: 'IDS X Enc Security Console',
    description:
      'Security monitoring interface demonstrating live file encryption, threat quarantine isolation, and real-time network logs.',
    tech: ['React', 'Python (Flask)', 'Tailwind CSS', 'AES-256'],
    category: 'Security/UI',
    github: 'https://github.com/Isaac-ek/Vulnerability-Scanner',
    demo: 'https://vulnerability-scanner-ten.vercel.app/',
    challenge:
      'Make enterprise security operations, threat telemetry, and encryption mechanisms intuitive and actionable in real time.',
    solution:
      'Built a focused console interface with live AES-256 encryption monitoring, threat quarantine controls, and audit trails.',
    impact:
      'Demonstrates applied cybersecurity principles, secure backend services, and high-clarity telemetry visualization.',
    gif: '',
    screenshot: '',
    codeSnippet: '',
  },
  {
    title: 'Enterprise Commerce Portals',
    description:
      'Custom retail portals featuring customized payment gateway integration, automated inventory tracking, and client UI dashboards.',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'Paystack API'],
    category: 'Web Architecture',
    github: '',
    demo: 'https://chugabags.com/',
    challenge:
      'Create high-converting e-commerce experiences with reliable local payment processing, fast checkout, and unified stock control.',
    solution:
      'Engineered custom WordPress/WooCommerce templates with direct Paystack inline checkout modal and client administrative portals.',
    impact:
      'Re-architected the checkout funnel by embedding the Paystack inline checkout modal (eliminating high-friction off-site redirects), implemented automated webhook reconciliation for instant order confirmation, and established two-way stock synchronization that eliminated double-order conflicts during peak retail drops.',
    gif: '',
    screenshot: '',
    codeSnippet: '',
  },
  {
    title: 'Finance Dashboard UI Design',
    description:
      'A responsive finance dashboard built for tracking balances, transaction activity, and category insights through a polished, easy-to-scan interface.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Zustand'],
    category: 'UI/UX',
    github: 'https://github.com/Isaac-ek/finance-dashboard-ui',
    demo: 'https://finance-dashboard-ui-orcin-iota.vercel.app/',
    challenge:
      'Present financial metrics and transaction history in a way that stays readable as the dashboard gets denser.',
    solution:
      'Combined strong visual hierarchy, chart-driven summaries, and clear transaction tables to keep data-rich screens approachable.',
    impact:
      'Shows product thinking for data-heavy experiences and the ability to ship a polished analytics-style interface to production.',
    gif: '',
    screenshot: '',
    codeSnippet: '',
  },
];
