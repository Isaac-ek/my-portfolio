import type { CSSProperties } from 'react';
import './Starfield.css';

// Stable, staggered positions concentrate motion in the reading area's margins.
const columns = [1.5, 96, 8, 87, 4, 98.5, 13, 92];
const particles = Array.from({ length: 64 }, (_, index) => ({
  left: columns[index % columns.length],
  top: (index * 37 + 7) % 100,
  mobileLeft: index % 2 === 0 ? 1.7 : 98.3,
}));

const Starfield = () => (
  <div className="editorial-backdrop" aria-hidden="true">
    {particles.map(({ left, top, mobileLeft }, index) => (
      <span
        key={index}
        className="backdrop-particle"
        style={{
          '--particle-left': `${left}%`,
          '--particle-mobile-left': `${mobileLeft}%`,
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
