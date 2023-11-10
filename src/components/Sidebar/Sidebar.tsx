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
  isWidescreen: boolean | null;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar, isWidescreen }: SidebarProps) {
  const [size, setSize, restSizeProps] = useSlider(32, 24, 48, 2);

  const sidebarStyle = getSidebarStyle(isOpen);
  const overlayStyle = !isOpen || isWidescreen ? {} : getOverlayStyle(isOpen);

  return (
    <>
      <div className={classes['overlay']} style={overlayStyle} onClick={toggleSidebar} />
      <div className={classes['sidebar']} style={sidebarStyle}>
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

          <section>
            <p className="label">Filters</p>
            <button onClick={toggleSidebar}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 16L16 4M4 4L10 10L16 16" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

function getSidebarStyle(isOpen: boolean | null) {
  if (isOpen === null) return {};
  else
    return {
      translate: isOpen ? '0%' : '-100%',
      visibility: isOpen ? 'visible' : 'hidden',
    } as CSSProperties;
}

function getOverlayStyle(isOpen: boolean | null) {
  if (isOpen === null) return {};
  else
    return {
      opacity: isOpen ? '0.5' : '0',
      visibility: isOpen ? 'visible' : 'hidden',
      pointerEvents: isOpen ? 'auto' : 'none',
    } as CSSProperties;
}
