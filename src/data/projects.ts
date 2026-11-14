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
  caseStudy?: string;
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
      'A workspace-based CRM for independent operators: capture a lead, keep the conversation in context, plan a follow-up, and search past client conversations.',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Auth.js'],
    category: 'Full-Stack',
    github: '',
    demo: 'https://indie-crm-two.vercel.app/login',
    demoNote: 'The production app requires an account. Explore the public sample workflow first.',
    caseStudy: '/projects/indie-crm',
    challenge:
      'Keep inbound leads, conversation history, and follow-up decisions together while separating each workspace’s records.',
    solution:
      'Built the Next.js interface, authenticated workspace access, Prisma/PostgreSQL data model, lead actions, AI assistance, and searchable conversation memory.',
    impact:
      'Lead edits persist to PostgreSQL and revalidate the affected dashboard, inbox, search, and detail pages. Search combines keyword matches with stored embeddings. Other sessions see saved changes when they refresh or navigate; no propagation-latency benchmark is published.',
    walkthrough: [
      {
        step: '01',
        title: 'Capture the inquiry',
        description: 'A contact, conversation, and opportunity stay together in a workspace-scoped lead record.',
      },
      {
        step: '02',
        title: 'Qualify and follow up',
        description: 'Update the lead stage, add context, and save the next action without losing the original inquiry.',
      },
      {
        step: '03',
        title: 'Find the conversation again',
        description: 'Keyword and semantic retrieval return lead records with the messages and notes behind each match.',
      },
      {
        step: '04',
        title: 'Keep the evidence',
        description: 'The lead timeline brings together messages, notes, and recorded AI generations with their provenance.',
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
