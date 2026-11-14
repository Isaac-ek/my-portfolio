import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

type NavLink = { id: string; label: string; href: string; designTab?: boolean };

const navLinks: NavLink[] = [
  { id: '01', label: 'SELECTED WORK', href: '/#projects' },
  { id: '02', label: 'GRAPHIC DESIGN', href: '/#projects', designTab: true },
  { id: '03', label: 'DOSSIER / CV', href: '/about' },
  { id: '04', label: 'CONTACT', href: '/#contact' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

        if (link.designTab) {
          window.dispatchEvent(new CustomEvent('nav-design-tab'));
        }
      }, 100);
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/10'
          : 'bg-[#08080a]/70 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      {/* Top micro-meta running ticker bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 border-b border-white/5 text-[11px] font-mono tracking-wider text-[#a1a1aa] uppercase">
        <div className="flex items-center gap-4">
          <span>PORTFOLIO VOL. 26</span>
          <span className="text-white/20">/</span>
          <span>NIGERIA [09.0765° N, 07.3986° E]</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AVAILABLE FOR HIRE &amp; COMMISSIONS
          </span>
          <span className="text-white/20">/</span>
          <span>AWS CERTIFIED ARCHITECT</span>
        </div>
      </div>

      {/* Main Masthead Nav */}
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Brand Masthead */}
        <Link
          to="/"
          className="group flex flex-col leading-none"
          aria-label="Home"
        >
          <span className="font-syne font-extrabold text-[11px] min-[380px]:text-[13px] sm:text-2xl whitespace-nowrap tracking-tight text-[#f4f4f2] group-hover:text-white transition">
            CHIEMELIE EKEZIE
          </span>
          <span className="font-mono text-[6px] min-[380px]:text-[7px] sm:text-[10px] whitespace-nowrap tracking-wider text-[#a1a1aa] uppercase mt-1">
            FULL-STACK ENGINEER &amp; VISUAL DESIGNER
          </span>
        </Link>

        {/* One navigation tree shared by desktop and the mobile drawer. */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-8">
          <nav id="primary-navigation" aria-label="Primary navigation" className={`${menuOpen ? 'flex' : 'hidden'} lg:flex absolute left-0 right-0 top-full lg:static flex-col lg:flex-row gap-4 lg:gap-7 bg-[#08080a] lg:bg-transparent border-b lg:border-0 border-white/10 p-6 lg:p-0`}>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="group flex items-baseline gap-1.5 font-mono text-xs font-medium tracking-normal text-[#d4d4d8] hover:text-white transition"
              >
                <span className="text-[11px] text-[#71717a] group-hover:text-[#a1a1aa]">
                  [{link.id}]
                </span>
                <span className="border-b border-transparent group-hover:border-white transition-all pb-0.5">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 border border-white/20 bg-white/5 hover:border-white hover:bg-white hover:text-black px-2 sm:px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[#f4f4f2] transition-all"
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            <span className="text-xs">{theme === 'dark' ? '☀' : '☾'}</span>
            <span className="hidden sm:inline">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center whitespace-nowrap p-2 text-xs font-mono tracking-widest border border-white/15 rounded text-[#f4f4f2]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? 'CLOSE ✕' : 'MENU [≡]'}
          </button>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
