import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Fab from './components/Fab';
import ScrollToTop from './components/ScrollToTop';
import Starfield from './components/Starfield';
import AnimatedCursor from 'react-animated-cursor';
import { ThemeProvider, useTheme } from './context/ThemeContext';

import './App.css';

const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const IndieCrmPage = lazy(() => import('./pages/IndieCrmPage'));
const CommercePage = lazy(() => import('./pages/CommercePage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AppContent() {
  const { theme } = useTheme();

  return (
    <>
      {/* 🏛️ Editorial Architectural Backdrop */}
      <div className="fixed inset-0 -z-30 pointer-events-none">
        <Starfield />
      </div>

      {/* 🖱️ Minimalist Precision Cursor */}
      <AnimatedCursor
        key={theme}
        innerSize={6}
        outerSize={32}
        color={theme === 'dark' ? '244,244,242' : '18,18,20'}
        outerAlpha={theme === 'dark' ? 0.2 : 0.15}
        innerScale={1.2}
        outerScale={1.6}
        trailingSpeed={7}
        clickables={[
          'a',
          'button',
          'input',
          'textarea',
          '[role="button"]',
          '.link',
          '.btn',
          '.nav-link',
          '.cursor-pointer',
        ]}
      />

      {/* 📦 Main Layout */}
      <Router>
        <ScrollToTop />
        <div id="portfolio-shell" className="min-h-screen flex flex-col text-white relative z-10">
          <Navbar />
          <div className="flex-1">
            <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/indie-crm" element={<IndieCrmPage />} />
                <Route path="/projects/commerce" element={<CommercePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Fab />
          <Footer />
        </div>
      </Router>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
