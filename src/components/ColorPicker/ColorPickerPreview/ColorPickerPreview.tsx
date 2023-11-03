import { Copy } from '@icons/20';
import classes from './component.module.css';

interface PreviewProps {
  hue: number;
  chroma: number;
  lightness: number;
}

export default function ColorPickerPreview({ hue, chroma, lightness }: PreviewProps) {
  const color = lightness > 70 ? 'var(--gray-950)' : 'var(--gray-50)';
  const currentColor = `oklch(${lightness}% ${chroma} ${hue})`;

  return (
    <button
      className={classes['button']}
      style={{ color }}
      onClick={() => navigator.clipboard.writeText(currentColor)}
    >
      {currentColor}
      <Copy />
    </button>
  );
}
