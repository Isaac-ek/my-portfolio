import type { CSSProperties } from 'react';
import './Starfield.css';

// Stable, evenly scattered positions avoid rows or clusters at the edges.
const particles = Array.from({ length: 64 }, (_, index) => ({
  left: 2 + ((index * 0.61803398875 + 0.27) % 1) * 96,
  top: 2 + ((index * 0.75487766625 + 0.11) % 1) * 96,
}));

const Starfield = () => (
  <div className="editorial-backdrop" aria-hidden="true">
    {particles.map(({ left, top }, index) => (
      <span
        key={index}
        className="backdrop-particle"
        style={{
          '--particle-left': `${left}%`,
          top: `${top}%`,
          '--particle-size': `${2 + index % 3}px`,
          '--drift-duration': `${32 + index % 12 * 2}s`,
          '--drift-delay': `${-index * 5}s`,
        } as CSSProperties}
      />
    ))}
  </div>
);

export default Starfield;
