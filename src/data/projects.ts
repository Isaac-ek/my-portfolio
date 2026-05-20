// Example project data structure
export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  gif?: string;
  screenshot?: string;
  codeSnippet?: string;
};

export const projects: Project[] = [
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio site built with React, TypeScript, and Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Isaac-ek/my-portfolio',
    demo: 'https://ekezie-chiemelie.vercel.app/',
    challenge: 'Showcase skills and projects in a visually engaging way.',
    solution: 'Built a fully responsive, animated portfolio.',
    impact: 'Increased interview callbacks and networking opportunities.',
    gif: '', // Add gif or screenshot URLs as needed
    screenshot: '',
    codeSnippet: '',
  },
  {
    title: 'Vulnerability Scanner',
    description:
      'A web-based security project that helps inspect targets for common vulnerabilities through a clean interface designed for quick scanning workflows.',
    tech: ['React', 'TypeScript', 'Security', 'Vercel'],
    github: 'https://github.com/Isaac-ek/Vulnerability-Scanner',
    demo: 'https://vulnerability-scanner-ten.vercel.app/',
    challenge: 'Make a security-focused tool feel understandable and easy to use without losing its technical purpose.',
    solution:
      'Built a focused scanning interface with clear actions and readable results so users can move through the workflow with less friction.',
    impact:
      'Highlights practical cybersecurity interest alongside frontend product design and deployment skills.',
    gif: '',
    screenshot: '',
    codeSnippet: '',
  },
  {
    title: 'Finance Dashboard UI Design',
    description:
      'A responsive finance dashboard built for tracking balances, transaction activity, and category insights through a polished, easy-to-scan interface.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Zustand'],
    github: 'https://github.com/Isaac-ek/finance-dashboard-ui',
    demo: 'https://finance-dashboard-ui-orcin-iota.vercel.app/',
    challenge: 'Present financial metrics and transaction history in a way that stays readable as the dashboard gets denser.',
    solution:
      'Combined strong visual hierarchy, chart-driven summaries, and clear transaction tables to keep data-rich screens approachable.',
    impact:
      'Shows product thinking for data-heavy experiences and the ability to ship a polished analytics-style interface to production.',
    gif: '',
    screenshot: '',
    codeSnippet: '',
  },
  {
    title: 'Indie CRM',
    description:
      'A streamlined CRM experience for managing contacts, leads, and follow-ups with a workflow that feels lightweight for solo operators and small teams.',
    tech: ['React', 'TypeScript', 'CRM', 'Vercel'],
    github: '',
    demo: 'https://indie-crm-two.vercel.app/login',
    challenge: 'Create a CRM that covers essential relationship management tasks without feeling bulky or enterprise-heavy.',
    solution:
      'Focused the product on practical day-to-day workflows, clear navigation, and a straightforward interface that helps users move quickly.',
    impact:
      'Adds a business-focused product to the portfolio and highlights experience building tools around sales and customer management workflows.',
    gif: '',
    screenshot: '',
    codeSnippet: '',
  },
  {
    title: 'Weather App',
    description: 'A weather dashboard using OpenWeatherMap API with animated UI.',
    tech: ['React', 'API', 'Framer Motion'],
    github: 'https://github.com/Isaac-ek/Weather-Webapp',
    demo: '',
    challenge: 'Display real-time weather data with a modern UI.',
    solution: 'Integrated OpenWeatherMap API and used Framer Motion for smooth animations.',
    impact: 'Improved user engagement and learning of API integration.',
    gif: '',
    screenshot: '',
    codeSnippet: '',
  },
    {
    title: 'E-commerce Store',
    description: 'An online store with shopping cart functionality and payment integration.',
    tech: ['WordPress', 'WooCommerce', 'PHP'],
    github: '',
    demo: 'https://chugabags.com/',
    challenge: 'Create a user-friendly e-commerce platform for selling products online.',
    solution: 'Developed a WordPress theme with WooCommerce integration for seamless shopping experience.',
    impact: 'Boosted sales and improved customer satisfaction with easy navigation and checkout process.',
    gif: '',
    screenshot: '',
    codeSnippet: '',
  },
  // Add more projects as needed
];
