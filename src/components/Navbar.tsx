import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  useEffect(() => {
    // Set active based on current path
    const current = navLinks.find(link => {
      if (link.href === '/') return location.pathname === '/';
      return location.pathname.startsWith(link.href.replace('/#', '/'));
    });
    setActive(current ? current.label : '');
    setMenuOpen(false); // close menu on route change
  }, [location]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: { label: string; href: string }
  ) => {
    if (link.href.startsWith('/#')) {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const id = link.href.split('#')[1];
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMenuOpen(false);
  };

  return (
    <nav className="w-full flex items-center justify-between h-20 px-4 sm:px-8 bg-[#0f172a] shadow fixed top-0 left-0 z-50">
      <div className="font-bold text-2xl md:text-3xl font-jetbrains" tabIndex={0} aria-label="Home">My Portfolio</div>
      <button
        className="sm:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
      <div className={`${menuOpen ? '' : 'hidden '}sm:flex items-center gap-6 absolute sm:static top-20 left-0 w-full sm:w-auto bg-[#0f172a] sm:bg-transparent transition-all duration-300 z-40`}>
        {navLinks.map(link => (
          <Link
            key={link.label}
            to={link.href}
            onClick={e => handleNavClick(e, link)}
            className={`block sm:inline px-5 py-2 rounded transition-colors font-semibold text-lg md:text-xl ${active === link.label ? 'bg-blue-600 text-white' : 'text-gray-200 hover:bg-gray-700'}`}
            tabIndex={0}
            aria-current={active === link.label ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
