import React, { useEffect, useRef, useMemo } from 'react';
import './Starfield.css';

const NUM_STARS = 200;

interface StarData {
  id: number;
  left: number;
  top: number;
  size: number;
  depth: number;
  duration: number;
  delay: number;
}

const Starfield: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<(HTMLDivElement | null)[]>([]);

  const starsData = useMemo<StarData[]>(() => {
    return Array.from({ length: NUM_STARS }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      // Much larger particle sizes — small: 3-4px, medium: 5-7px, big: 8-11px
      size:
        Math.random() < 0.12
          ? parseFloat((Math.random() * 3 + 8).toFixed(1))   // ~12% are big (8–11px)
          : Math.random() < 0.45
          ? parseFloat((Math.random() * 2 + 5).toFixed(1))   // ~33% are medium (5–7px)
          : parseFloat((Math.random() * 1.5 + 3).toFixed(1)), // ~55% are small (3–4.5px)
      depth: parseFloat((Math.random() * 3.5 + 0.5).toFixed(2)),
      duration: parseFloat((Math.random() * 3 + 2).toFixed(1)),
      delay: parseFloat((Math.random() * 4).toFixed(1)),
    }));
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    // Track raw mouse for proximity/repulsion effect
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      targetX = (e.clientX - centerX) / centerX;
      targetY = (e.clientY - centerY) / centerY;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      // Faster lerp for snappier response
      currentX += (targetX - currentX) * 0.055;
      currentY += (targetY - currentY) * 0.055;

      starsRef.current.forEach((star, i) => {
        if (!star) return;
        const data = starsData[i];
        if (!data) return;

        const { depth, left, top } = data;

        // Parallax offset based on depth — deeper = more displacement
        const parallaxX = currentX * depth * 22;
        const parallaxY = currentY * depth * 22;

        // Proximity repulsion: dots near the cursor push away
        const starAbsX = (left / 100) * window.innerWidth + parallaxX;
        const starAbsY = (top / 100) * window.innerHeight + parallaxY;
        const dx = starAbsX - mouseX;
        const dy = starAbsY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 120;
        const repelStrength = 50;

        let repelX = 0;
        let repelY = 0;
        let scale = 1;

        if (dist < repelRadius && dist > 0) {
          const force = (1 - dist / repelRadius) * repelStrength;
          repelX = (dx / dist) * force;
          repelY = (dy / dist) * force;
          // Particles near the cursor glow bigger
          scale = 1 + (1 - dist / repelRadius) * 1.4;
        }

        star.style.transform = `translate3d(${parallaxX + repelX}px, ${parallaxY + repelY}px, 0) scale(${scale.toFixed(2)})`;
        // Only override opacity when actively near cursor — otherwise let CSS animation run
        if (dist < repelRadius) {
          star.style.opacity = String(Math.min(0.75, 0.35 + (1 - dist / repelRadius) * 0.4));
        } else {
          star.style.opacity = '';
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [starsData]);

  return (
    <div className="editorial-backdrop" ref={containerRef}>
      {/* 🌟 Interactive Multi-Depth Floating Particles */}
      {starsData.map((star, idx) => (
        <div
          key={star.id}
          className="particle"
          ref={(el) => {
            starsRef.current[idx] = el;
          }}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* 🌠 Ambient Shooting Stars */}
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />
      <div className="shooting-star shooting-star-3" />

      {/* 📐 Architectural Coordinate Marks */}
      <div className="coord-stamp coord-tl">LAGOS / ABUJA — [09.0765° N, 07.3986° E]</div>
      <div className="coord-stamp coord-tr">PORTFOLIO ISSUE — MMXXVI</div>
      <div className="coord-stamp coord-bl">SYSTEMS ARCHITECTURE &amp; BRAND DESIGN</div>
      <div className="coord-stamp coord-br">[STRICT RUNTIME / RAW VISUALS]</div>

      <div className="crosshair crosshair-1">+</div>
      <div className="crosshair crosshair-2">+</div>
      <div className="crosshair crosshair-3">+</div>
      <div className="crosshair crosshair-4">+</div>
    </div>
  );
};

export default Starfield;
