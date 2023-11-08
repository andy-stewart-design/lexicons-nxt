'use client';

import ColorPicker from '@components/ColorPicker';
import ComboNumericInput from '../ComboNumericInput';
import Select from '@components/Select';
import { useSlider } from '@/hooks/use-input';
import classes from './component.module.css';
import { CSSProperties, ComponentProps } from 'react';

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
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const [size, setSize, restSizeProps] = useSlider(32, 24, 48, 2);

  const style = { '--offset-x': isOpen ? '0%' : '100%' };

  return (
    <div className={classes['sidebar']} style={style as CSSProperties}>
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
