import React, { useEffect, useRef } from 'react';
import './Starfield.css';

const NUM_STARS = 160;

/* Star tint colours — subtle, not garish */
const TINTS = ['#ffffff', '#a5f3fc', '#e879f9', '#c4b5fd', '#6ee7b7'];

const Starfield: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (e.clientX - centerX) / centerX;
      const offsetY = (e.clientY - centerY) / centerY;

      starsRef.current.forEach((star) => {
        if (!star) return;
        const depth = parseFloat(star.dataset.depth || '1');
        const x = offsetX * depth * 12;
        const y = offsetY * depth * 12;
        star.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hero-particles" ref={containerRef}>
      {/* Nebula ambient blobs */}
      <div className="nebula nebula-cyan" />
      <div className="nebula nebula-fuchsia" />
      <div className="nebula nebula-violet" />

      {/* Stars */}
      {[...Array(NUM_STARS)].map((_, i) => {
        const depth = (Math.random() * 3 + 1).toFixed(2);
        const tint = TINTS[Math.floor(Math.random() * TINTS.length)];
        const size = Math.random() < 0.15 ? '3px' : Math.random() < 0.5 ? '2px' : '1.5px';
        const delay = `${(Math.random() * 6).toFixed(2)}s`;
        const duration = `${(Math.random() * 4 + 2).toFixed(2)}s`;

        return (
          <div
            key={i}
            className="particle"
            data-depth={depth}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: size,
              height: size,
              background: tint,
              animationDelay: delay,
              animationDuration: duration,
              boxShadow: `0 0 ${Math.random() < 0.2 ? '4px' : '2px'} ${tint}`,
            }}
            ref={(el) => {
              if (el) starsRef.current[i] = el;
            }}
          />
        );
      })}

      {/* Shooting stars — varied directions & timing */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`shoot-${i}`}
          className="shooting-star"
          style={{ animationDelay: `${i * 3.5}s`, animationDuration: `${7 + i * 1.5}s` }}
        />
      ))}
    </div>
  );
};

export default Starfield;
