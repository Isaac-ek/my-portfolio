import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

type NavLink = { label: string; href: string; designTab?: boolean };

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/#projects' },
  { label: 'Design', href: '/#projects', designTab: true },
  { label: 'Skills', href: '/#skills' },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const current = navLinks.find((link) => {
      if (link.href === '/') return location.pathname === '/';
      return location.pathname.startsWith(link.href.replace('/#', '/'));
    });
    setActive(current ? current.label : '');
    setMenuOpen(false);
  }, [location]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: NavLink
  ) => {
    if (link.href.startsWith('/#')) {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const id = link.href.split('#')[1];
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });

        // If clicking "Design", fire a custom event so Works tab can switch
        if (link.designTab) {
          window.dispatchEvent(new CustomEvent('nav-design-tab'));
        }
      }, 120);
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-slate-950/85 shadow-[0_0_40px_rgba(0,0,0,0.4)] backdrop-blur-xl'
          : 'bg-[#0f172a]/95 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Brand */}
        <Link
          to="/"
          className="group relative font-black text-2xl md:text-3xl"
          aria-label="Home"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-fuchsia-400 group-hover:to-cyan-400">
            Chiemelie.
          </span>
          {/* Glow under brand */}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-400 opacity-70 transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => {
            const isActive = active === link.label;
            const isDesign = link.designTab;

            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-4 py-2 rounded-xl text-base font-semibold transition-all duration-200 ${
                  isDesign
                    ? isActive
                      ? 'bg-fuchsia-400/15 text-fuchsia-200 shadow-[0_0_18px_rgba(217,70,239,0.3)]'
                      : 'text-fuchsia-300/70 hover:bg-fuchsia-400/10 hover:text-fuchsia-200'
                    : isActive
                    ? 'bg-cyan-400/12 text-cyan-200 shadow-[0_0_18px_rgba(6,182,212,0.25)]'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className={`absolute bottom-0 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full ${
                      isDesign ? 'bg-fuchsia-400' : 'bg-cyan-400'
                    }`}
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-300 transition hover:border-white/25 hover:text-white sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
            <title>Menu</title>
            {menuOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/5 bg-slate-950/95 px-4 pb-4 backdrop-blur-xl sm:hidden"
          >
            {navLinks.map((link) => {
              const isActive = active === link.label;
              const isDesign = link.designTab;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition ${
                    isDesign
                      ? isActive
                        ? 'bg-fuchsia-400/12 text-fuchsia-200'
                        : 'text-fuchsia-300/70 hover:bg-fuchsia-400/8 hover:text-fuchsia-200'
                      : isActive
                      ? 'bg-cyan-400/10 text-cyan-200'
                      : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
