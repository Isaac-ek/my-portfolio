export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  category?: 'Full-Stack' | 'Security/UI' | 'Web Architecture' | 'UI/UX';
  challenge?: string;
  solution?: string;
  impact?: string;
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
    challenge:
      'Architect a scalable multi-tenant CRM that balances rich relationship management features with lightning-fast streaming UI.',
    solution:
      'Engineered with Next.js 15 and React 19, backed by cloud PostgreSQL, Prisma ORM, and Redis for high-throughput caching.',
    impact:
      'Delivers instant vector search indexing, live lead pipelines, and a polished dark-mode interface.',
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
      'Engineered custom WordPress/WooCommerce templates with direct Paystack API integration and client administrative portals.',
    impact:
      'Significantly improved user checkout completion and provides streamlined inventory management for growing retail brands.',
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
  {
    title: 'Personal Portfolio',
    description:
      'A modern, galaxy-themed portfolio site built with React, TypeScript, Tailwind CSS, and Framer Motion.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Full-Stack',
    github: 'https://github.com/Isaac-ek/my-portfolio',
    demo: 'https://ekezie-chiemelie.vercel.app/',
    challenge:
      'Create a standout, creative portfolio highlighting both engineering depth and visual graphic design craft.',
    solution:
      'Constructed with custom interactive starfields, dual-discipline tabbed works, and smooth micro-animations.',
    impact:
      'Effectively communicates full-stack capabilities, cloud architecture, and brand design competencies.',
    gif: '',
    screenshot: '',
    codeSnippet: '',
  },
];
