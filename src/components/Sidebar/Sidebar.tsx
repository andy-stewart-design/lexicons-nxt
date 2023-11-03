'use client';

import ColorPicker from '@components/ColorPicker';
import classes from './component.module.css';
import RangeInput from '../RangeInput';
import { useSlider } from '@/hooks/use-input';
import { useId } from 'react';
import ComboNumericInput from '../ComboNumericInput';

export default function Sidebar() {
  const [size, setSize, restSizeProps] = useSlider(32, 24, 48, 2);
  const id = useId();

  return (
    <div className={classes['sidebar']}>
      <div className={classes['sticky']}>
        <section>
          <ComboNumericInput
            label="Optical Size"
            value={size}
            onChange={setSize}
            {...restSizeProps}
          />
        </section>
        <section>
          <ColorPicker
            primaryColor="--accent-color-oklch"
            secondaryColor="--analogous-color-oklch"
          />
        </section>
      </div>
    </div>
  );
}
