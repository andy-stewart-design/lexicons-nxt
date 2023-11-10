'use client';

import ColorPicker from '@components/ColorPicker';
import ComboNumericInput from '../ComboNumericInput';
import Select from '@components/Select';
import type { CSSProperties, ComponentProps } from 'react';
import type { UseSliderReturn, UseSelectReturn } from '@hooks/use-input';
import type { UseMenuToggleReturn } from '@hooks/use-menu-toggle';
import { iconStyles } from '@constants/icon-styles';
import classes from './component.module.css';

interface SidebarProps extends ComponentProps<'div'> {
  menuProps: UseMenuToggleReturn;
  sizeProps: UseSliderReturn;
  iconStyleProps: UseSelectReturn;
}

export default function Sidebar({ menuProps, sizeProps, iconStyleProps }: SidebarProps) {
  const [isOpen, toggleSidebar, isWidescreen] = menuProps;
  const [size, setSize, restSizeProps] = sizeProps;
  const [iconStyle, setIconStyle] = iconStyleProps;

  const sidebarStyle = getSidebarStyle(isOpen);
  const overlayStyle = !isOpen || isWidescreen ? {} : getOverlayStyle(isOpen);

  return (
    <>
      <div className={classes['overlay']} style={overlayStyle} onClick={toggleSidebar} />
      <div className={classes['sidebar']} style={sidebarStyle}>
        <div className={classes['sticky']}>
          <section>
            <Select value={iconStyle} onValueChange={setIconStyle} options={iconStyles} />
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
