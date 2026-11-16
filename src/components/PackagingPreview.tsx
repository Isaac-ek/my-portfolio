import './packaging-preview.css';
import type { Design, DesignVariant } from '../data/designs';
import { packagingAssets } from '../data/packaging-assets';

export function PackagingPreview({ variant, frontOnly = false, compact = false }: { variant: DesignVariant; frontOnly?: boolean; compact?: boolean }) {
  const preview = packagingAssets[variant.id];
  return (
    <img
      src={frontOnly ? preview.front.src : compact ? preview.small : preview.assembled}
      srcSet={frontOnly ? preview.front.srcSet : undefined}
      sizes={frontOnly ? '(max-width: 640px) calc(100vw - 96px), 550px' : undefined}
      width={frontOnly ? preview.front.width : preview.width + 75}
      height={frontOnly ? preview.front.height : preview.height + 65}
      alt={`${variant.name} ${frontOnly ? 'front-panel artwork close-up' : 'assembled carton mockup'}`}
      className="packaging-preview"
      loading="lazy"
      decoding="async"
    />
  );
}

export function PackagingRange({ design }: { design: Design }) {
  return (
    <div className={`packaging-range ${design.variants?.length === 7 ? 'packaging-range-soap' : ''}`} role="group" aria-label={`${design.title}: assembled range mockups`}>
      {design.variants?.map((variant) => (
        <div key={variant.id} className="packaging-range-item">
          <PackagingPreview variant={variant} compact />
          <span>{variant.name}</span>
        </div>
      ))}
    </div>
  );
}
