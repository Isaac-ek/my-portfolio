import type { ImgHTMLAttributes } from 'react';
import { imageAssets } from '../data/image-assets';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'srcSet'> & {
  src: string;
  variant?: 'card';
};

export default function ResponsiveImage({ src, variant, sizes = '100vw', loading = 'lazy', decoding = 'async', ...props }: Props) {
  const original = imageAssets[src];
  const image = variant === 'card' ? original?.card || original : original;
  return <img {...props} src={image?.src || src} srcSet={image?.srcSet} sizes={sizes} width={image?.width || props.width} height={image?.height || props.height} loading={loading} decoding={decoding} />;
}
