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
    github: 'https://github.com/yourname/portfolio',
    demo: 'https://your-portfolio-demo.com',
    challenge: 'Showcase skills and projects in a visually engaging way.',
    solution: 'Built a fully responsive, animated portfolio with filtering and dark mode.',
    impact: 'Increased interview callbacks and networking opportunities.',
    gif: '', // Add gif or screenshot URLs as needed
    screenshot: '',
    codeSnippet: '',
  },
  {
    title: 'Weather App',
    description: 'A weather dashboard using OpenWeatherMap API with animated UI.',
    tech: ['React', 'API', 'Framer Motion'],
    github: 'https://github.com/yourname/weather-app',
    demo: 'https://your-weather-demo.com',
    challenge: 'Display real-time weather data with a modern UI.',
    solution: 'Integrated OpenWeatherMap API and used Framer Motion for smooth animations.',
    impact: 'Improved user engagement and learning of API integration.',
    gif: '',
    screenshot: '',
    codeSnippet: '',
  },
  // Add more projects as needed
];
