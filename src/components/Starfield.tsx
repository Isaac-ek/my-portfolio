import type { CSSProperties } from 'react';
import './Starfield.css';

// Fixed positions keep the decoration stable across renders and theme changes.
const positions = [
  [3, 14], [96, 24], [7, 48], [93, 63],
  [4, 81], [97, 89], [11, 32], [89, 42],
  [22, 9], [38, 72], [56, 35], [72, 92],
  [6, 95], [94, 7],
];

const Starfield = () => (
  <div className="editorial-backdrop" aria-hidden="true">
    {positions.map(([left, top], index) => (
      <span
        key={index}
        className="backdrop-particle"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          '--particle-size': index % 3 === 0 ? '2px' : '1px',
          '--drift-duration': `${36 + index * 2}s`,
          '--drift-delay': `${-index * 5}s`,
        } as CSSProperties}
      />
    ))}
  </div>
);

export default Starfield;
