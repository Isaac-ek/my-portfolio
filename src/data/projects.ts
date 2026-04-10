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
      'A modern finance dashboard concept built to present balances, metrics, and activity in a clear, polished, and easy-to-scan layout.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'UI Design'],
    github: 'https://github.com/Isaac-ek/finance-dashboard-ui',
    demo: 'https://finance-dashboard-ui-orcin-iota.vercel.app/',
    challenge: 'Show dense financial information in a way that feels structured instead of overwhelming.',
    solution:
      'Used strong visual hierarchy, card-based sections, and clean spacing to make the dashboard more readable and professional.',
    impact:
      'Demonstrates UI design strength for data-heavy products and dashboard-style user experiences.',
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
