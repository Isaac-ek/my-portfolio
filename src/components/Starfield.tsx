import React, { useEffect, useRef } from 'react';
import './Starfield.css';

const NUM_STARS = 100;

const Starfield: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (e.clientX - centerX) / centerX;
      const offsetY = (e.clientY - centerY) / centerY;

      starsRef.current.forEach((star, index) => {
        const depth = parseFloat(star.dataset.depth || '1');
        const x = offsetX * depth * 10;
        const y = offsetY * depth * 10;

        star.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hero-particles" ref={containerRef}>
      {[...Array(NUM_STARS)].map((_, i) => {
        const star = (
          <div
            key={i}
            className="particle"
            data-depth={(Math.random() * 3 + 1).toFixed(2)} // depth 1.00 - 4.00
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            ref={(el) => {
              if (el) starsRef.current[i] = el;
            }}
          />
        );
        return star;
      })}

      {/* Optional: Shooting Stars */}
      {[...Array(3)].map((_, i) => (
        <div key={`shoot-${i}`} className="shooting-star" />
      ))}
    </div>
  );
};

export default Starfield;
