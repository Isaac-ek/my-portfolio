import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Fab from './components/Fab';
import ScrollToTop from './components/ScrollToTop';
import Starfield from './components/Starfield';

import './App.css';

const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.classList.add('gradient-bg');
  }, []);

  return (
    <>
      {/* 🌌 Starfield Galaxy Effect */}
      <div className="fixed inset-0 -z-30 pointer-events-none">
        <Starfield />
      </div>

      {/* 🖱️ Animated Cursor */}
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="0, 123, 255"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={2}
      /> */}

      {/* 📦 Main Layout */}
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col text-white relative z-10">
          <Navbar />
          <div className="flex-1">
            <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
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

export default App;
