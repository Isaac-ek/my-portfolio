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
  contribution: string;
  cvHighlights?: string[];
  deliverables?: string[];
  businessValue?: string;
  evidenceNote?: string;
  category?: 'Full-Stack' | 'Security/UI' | 'Web Architecture' | 'UI/UX';
  challenge?: string;
  solution?: string;
  impact?: string;
  walkthrough?: ProjectWalkthroughStep[];
  gif?: string;
  screenshot?: string;
  screenshotAlt?: string;
  screenshotCaption?: string;
  codeSnippet?: string;
};

export const projects: Project[] = [
  {
    title: 'Indie CRM SaaS Platform',
    description:
      'A workspace-based CRM for independent operators: capture a lead, keep the conversation in context, plan a follow-up, and search past client conversations.',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Auth.js'],
    cvHighlights: ['Built tenant-scoped lead, conversation, and follow-up workflows with Next.js, PostgreSQL, and Prisma.'],
    category: 'Full-Stack',
    github: 'https://github.com/Isaac-ek/Indie-CRM',
    demo: 'https://indie-crm-two.vercel.app/login',
    demoNote: 'The production app requires an account. Explore the public sample workflow first.',
    caseStudy: '/projects/indie-crm',
    contribution: 'I built the interface, workspace authentication, data model, lead actions, and conversation-memory search.',
    deliverables: ['Workspace-scoped lead records and follow-ups', 'Conversation history and searchable memory', 'Role checks and recorded AI generations'],
    businessValue: 'Keep the original inquiry, relationship history, and next action together so an independent operator can pick up a lead without reconstructing the conversation.',
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
    title: 'SecureStream · Security Workspace',
    description:
      'A security engineering prototype combining intrusion classification, authorized website checks, and recoverable file protection in separate customer workspaces.',
    tech: ['React', 'Python (FastAPI)', 'XGBoost', 'AES-256-GCM'],
    cvHighlights: ['Built React/FastAPI workflows for team access, authorized website checks, and XGBoost inference.', 'Implemented workspace-scoped PostgreSQL records, AES-256-GCM file recovery, and audited account controls.'],
    category: 'Security/UI',
    contribution: 'I built the React/FastAPI application, integrated the saved XGBoost detector, implemented customer isolation and encrypted file recovery, and consolidated the website-checking engine.',
    github: 'https://github.com/Isaac-ek/ids-encryption-file-scanner',
    demo: 'https://ids-encryption-file-scanner.vercel.app/',
    caseStudy: '/projects/securestream',
    demoNote: 'Explore the screenshot workflow without an account. The hosted workspace requires an administrator-created login; email recovery is currently disabled.',
    deliverables: ['Customer-scoped accounts, records, reports, and live events', 'XGBoost inference and inspectable offline model metrics', 'AES-256-GCM encryption, recovery, and audit history', 'Administrator-approved website checks and optional local ClamAV file inspection'],
    businessValue: 'Bring investigation records, file operations, and team access into one workspace with traceable actions. Commercial outcomes have not been measured.',
    challenge:
      'Bring intrusion detection, website assessment, and recoverable file protection into one inspectable workflow.',
    solution:
      'Combined React and FastAPI with workspace-scoped data and keys, authenticated sensor alerts, bounded bidirectional flow extraction, scoped website checks, and a stored audit chain.',
    impact:
      '68 backend tests and six browser workflows pass, covering customer isolation, file recovery, model inference, approved websites, and password-reset behavior. The hosted release uses persistent PostgreSQL storage; a separate PostgreSQL fixture verified concurrent reset links and session revocation. A separate training experiment failed its improvement gates, so the active XGBoost model was retained.',
    evidenceNote: 'This is an engineering prototype. Sample predictions are labelled as replays; live classification remains experimental. The NSL-KDD benchmark has weak R2L/U2R recall. Website findings require investigation, and the stored audit chain is not externally immutable.',
    gif: '',
    screenshot: '/assets/projects/securestream/overview.jpg',
    screenshotAlt: 'Actual SecureStream dashboard showing a saved model replay, an encrypted backup, and activity sources in a fictional sample workspace.',
    screenshotCaption: 'Actual application · fictional sample data · engineering prototype',
    codeSnippet: '',
  },
  {
    title: 'Chuga Bags · Product Gallery',
    description:
      'A client-requested product gallery for showcasing school and travel bags through a responsive, category-based collection.',
    tech: ['WordPress', 'Responsive Design', 'Product Galleries'],
    category: 'Web Architecture',
    github: '',
    demo: 'https://chugabags.com/',
    caseStudy: '/projects/commerce',
    contribution: 'I designed and built the responsive WordPress gallery, organized the school and travel bag collections, and created brand-aligned page layouts.',
    deliverables: ['Responsive WordPress product gallery', 'School Bags and Travel Bag collection filters', 'Brand-aligned layouts and company/contact navigation'],
    businessValue: 'Give prospective customers a clear place to explore the bag collection and learn about the business before making an inquiry.',
    evidenceNote: 'The client requested a gallery for showcasing the collection. The live site demonstrates the delivered browsing experience and category organization.',
    challenge:
      'Present a large collection of school and travel bags in a way that is easy to browse on desktop and mobile.',
    solution:
      'Built a responsive WordPress gallery with collection filters, consistent product-image layouts, and links to business and contact information.',
    impact:
      'Delivered the requested product gallery with All Collections, School Bags, and Travel Bag views. Visitors can browse the collection and access the company’s contact information.',
    gif: '',
    screenshot: '',
    codeSnippet: '',
  },
  {
    title: 'Finance Overview · Interactive Demo',
    description:
      'A browser-local personal finance demo: add a transaction and see monthly totals, cash flow, and spending categories update together.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Zustand'],
    category: 'UI/UX',
    contribution: 'I designed and built the responsive interface, reporting-month analytics, transaction editing, and persistent browser-local state.',
    github: 'https://github.com/Isaac-ek/finance-dashboard-ui',
    demo: 'https://finance-dashboard-ui-orcin-iota.vercel.app/',
    challenge:
      'Make financial activity readable and keep every overview figure aligned with its reporting period.',
    solution:
      'Connected a reporting-month selector, cent-based totals, six-month cash flow, category breakdowns, and searchable transaction records.',
    impact:
      'Adding, editing, deleting, and undoing a sample transaction updates the overview. Sample dates stay current; visitor edits are preserved. Nine data tests and four browser workflows cover these behaviors.',
    gif: '',
    screenshot: '/assets/projects/finance/overview.jpg',
    screenshotAlt: 'Actual Finance Overview demo showing populated cash-flow charts, the reporting month, income, expenses, and spending categories.',
    screenshotCaption: 'Actual interactive demo · fictional sample data · saved in this browser',
    demoNote: 'No account needed. Editor and read-only modes demonstrate interface behavior; this demo uses fictional USD transactions stored in your browser.',
    codeSnippet: '',
  },

  {
    title: 'Small Hours · Audio Transcriber',
    description:
      'Turn a short English recording into an editable transcript. Try the built-in sample or select a file, review the timestamped segments, and download plain text or SRT subtitles.',
    tech: ['JavaScript', 'Whisper', 'Transformers.js', 'Web Workers', 'WebAssembly'],
    category: 'Web Architecture',
    contribution: 'I built the recording and transcript editor, moved speech recognition into a browser worker, and implemented timestamped text and subtitle exports.',
    github: 'https://github.com/Isaac-ek/small-hours-transcriber',
    demo: 'https://small-hours-transcriber.vercel.app/',
    demoNote: 'No account needed. The browser downloads the model on first use and processes the recording on your device. The source also includes a separate Python edition with a saved recording library.',
    solution: 'A Web Worker runs a quantized Whisper model. The browser decodes the audio and keeps recordings and edits in the current tab.',
    impact: 'Verified transcription of a real audio sample and a selected file on the public build, followed by editing and both exports. The browser test observed no upload requests.',
    screenshot: '/assets/projects/small-hours/transcript.jpg',
    screenshotAlt: 'Small Hours showing playback and three editable timestamped segments from the built-in speech sample, with text and subtitle download buttons.',
    screenshotCaption: 'Actual browser app · built-in synthetic recording transcribed on device',
  },
];

// Shared by the web CV and downloadable resume.
export const cvProjects = projects.filter((project) =>
  ["/projects/indie-crm", "/projects/securestream"].includes(project.caseStudy || ""),
);
