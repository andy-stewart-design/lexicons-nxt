'use client';

import ColorPicker from '@components/ColorPicker';
import ComboNumericInput from '../ComboNumericInput';
import Select from '@components/Select';
import { useSlider } from '@/hooks/use-input';
import type { CSSProperties, ComponentProps } from 'react';
import classes from './component.module.css';

const iconStyles = [
  {
    value: 'outline',
    label: 'Outline',
  },
  {
    value: 'solid',
    label: 'Solid',
  },
  {
    value: 'two_tone',
    label: 'Two-tone',
  },
];

interface SidebarProps extends ComponentProps<'div'> {
  isOpen: boolean | null;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const [size, setSize, restSizeProps] = useSlider(32, 24, 48, 2);

  const style = getComputedStyle(isOpen);

  return (
    <div className={classes['sidebar']} style={style}>
      <div className={classes['sticky']}>
        <section>
          <Select options={iconStyles} defaultValue="outline" />
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

function getComputedStyle(isOpen: boolean | null) {
  if (isOpen === null) return {};
  else
    return {
      translate: isOpen ? '0%' : '-100%',
      visibility: isOpen ? 'visible' : 'hidden',
    } as CSSProperties;
}
