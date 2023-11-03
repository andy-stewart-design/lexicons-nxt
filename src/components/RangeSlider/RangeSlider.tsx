import { map } from '@utils/math';
import type { ComponentProps } from 'react';

export default function RangeSlider({
  value,
  min,
  max,
  style,
  ...delegated
}: ComponentProps<'input'>) {
  const sliderProgress = map(Number(value), Number(min), Number(max), 0, 100);
  const internalStyle = {
    '--slider-progress': `${sliderProgress}%`,
  };

  return (
    <input
      {...delegated}
      type="range"
      value={value}
      min={min}
      max={max}
      style={{ ...style, ...internalStyle }}
    />
  );
}
