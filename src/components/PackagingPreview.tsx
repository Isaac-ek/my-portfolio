import './packaging-preview.css';
import type { Design, DesignVariant } from '../data/designs';

// Coordinates are normalized to the original artwork sheet (0–100).
// SVG viewports show the original panels without rewriting the artwork.
const panels: Record<string, { front: string; side: string }> = {
  detox: { front: '26.2 51.8 47 25.4', side: '73.4 52.2 18.5 24.5' },
  bright: { front: '26.3 50.8 47 24.8', side: '73.6 51.4 19.5 23.5' },
  beauty: { front: '22 48.5 55.7 27', side: '77.9 49.2 16.3 25.5' },
  renew: { front: '25.4 47.8 49.8 29.1', side: '75.5 48.5 18.6 27.8' },
  acne: { front: '26.3 51.6 47.1 25.1', side: '73.7 52.2 18.9 24' },
  men: { front: '21.6 49.4 56 27', side: '77.9 50 16.5 25.7' },
  barrier: { front: '21.9 48.9 55.3 27.1', side: '77.4 49.6 16.3 25.9' },
  salvia: { front: '25.8 18.3 22.7 63.1', side: '69 18.6 19 62.6' },
  excelsa: { front: '24.2 16 22 65.7', side: '66.7 16.2 18.3 65.5' },
  mirosan: { front: '24.9 17.3 22.2 69.9', side: '68.9 17.3 21.3 69.9' },
  apipropol: { front: '24.2 15.3 21.5 72.8', side: '64.2 15.3 19.4 72.8' },
  gastro: { front: '25.3 15.6 22.8 70.3', side: '68.7 15.8 22.2 70.1' },
};

export function PackagingPreview({ variant, frontOnly = false }: { variant: DesignVariant; frontOnly?: boolean }) {
  const panel = panels[variant.id];
  const isSoap = ['detox', 'bright', 'beauty', 'renew', 'acne', 'men', 'barrier'].includes(variant.id);
  const width = isSoap ? 300 : 160;
  const height = isSoap ? 195 : 260;
  const artwork = variant.dielineImage || variant.image;
  const front = (x: number, y: number) => (
    <svg x={x} y={y} width={width} height={height} viewBox={panel.front} preserveAspectRatio="none">
      <image href={artwork} width="100" height="100" preserveAspectRatio="none" />
    </svg>
  );

  return (
    <svg
      role="img"
      aria-label={`${variant.name} ${frontOnly ? 'front-panel artwork close-up' : 'assembled carton mockup'}`}
      viewBox={frontOnly ? `0 0 ${width} ${height}` : `0 0 ${width + 75} ${height + 65}`}
      className="packaging-preview"
    >
      {frontOnly ? front(0, 0) : (
        <>
          <ellipse cx={(width + 75) / 2} cy={height + 50} rx={width / 2 + 20} ry="10" fill="#000" opacity="0.14" />
          <path d={`M 15 36 L 65 12 L ${width + 65} 12 L ${width + 15} 36 Z`} fill={variant.accent} />
          <path d={`M 15 36 L 65 12 L ${width + 65} 12 L ${width + 15} 36 Z`} fill="#fff" opacity="0.25" />
          {front(15, 36)}
          <g transform={`translate(${width + 15} 36) skewY(-26.565)`}>
            <svg width="50" height={height} viewBox={panel.side} preserveAspectRatio="none">
              <image href={artwork} width="100" height="100" preserveAspectRatio="none" />
            </svg>
            <rect width="50" height={height} fill="#000" opacity="0.18" />
          </g>
          <path d={`M 15 36 H ${width + 15} V ${height + 36} H 15 Z`} fill="none" stroke="#000" strokeOpacity="0.1" />
        </>
      )}
    </svg>
  );
}

export function PackagingRange({ design }: { design: Design }) {
  return (
    <div className={`packaging-range ${design.variants?.length === 7 ? 'packaging-range-soap' : ''}`} role="group" aria-label={`${design.title}: assembled range mockups`}>
      {design.variants?.map((variant) => (
        <div key={variant.id} className="packaging-range-item">
          <PackagingPreview variant={variant} />
          <span>{variant.name}</span>
        </div>
      ))}
    </div>
  );
}
