import { useState, useEffect } from 'react';

const Fab = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="group flex h-11 w-11 items-center justify-center border border-white/20 bg-[#0e0e11] font-mono text-xs text-[#d4d4d8] shadow-2xl transition hover:border-white hover:bg-white hover:text-black"
        aria-label="Scroll to top"
        title="TOP"
      >
        <span className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5">
          ↑
        </span>
      </button>
    </div>
  );
};

export default Fab;
