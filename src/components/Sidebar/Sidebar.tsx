'use client';

import { useContext, type CSSProperties, type ComponentProps } from 'react';
import ColorPicker from '@components/ColorPicker';
import ComboNumericInput from '@components/ComboNumericInput';
import Select from '@components/Select';
import Switch from '@components/Switch';
import Tooltip from '@components/Tooltip';
import ThemeSwitch from '@components/ThemeSwitch';
import { IconStyleContext } from '@state/IconStyleProvider';
import { IconSizeContext } from '@state/IconSizeProvider/IconSizeProvider';
import { CopyModeContext } from '@state/CopyModeProvider';
import { iconStyles } from '@constants/icons';
import classes from './component.module.css';
import { SidebarDisplayContext } from '../Providers/SidebarDisplayProvider';

export default function Sidebar() {
  const { showSidebar, toggleShowSidebar, isWidescreen } = useContext(SidebarDisplayContext);
  const { iconStyle, setIconStyle } = useContext(IconStyleContext);
  const { size, setSize, restSizeProps } = useContext(IconSizeContext);
  const { copyAsJSX, setCopyAsJSX, fillCurrent, setFillCurrent } = useContext(CopyModeContext);

  const sidebarStyle = getSidebarStyle(showSidebar);
  const overlayStyle = !showSidebar || isWidescreen ? {} : getOverlayStyle(showSidebar);

  return (
    <>
      {!isWidescreen && (
        <div className={classes['overlay']} style={overlayStyle} onClick={toggleShowSidebar} />
      )}
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
            <ColorPicker />
            <ThemeSwitch />
          </section>

          <section>
            <Switch checked={copyAsJSX} onChange={setCopyAsJSX}>
              <span className="flex flex-justify-start flex-align-center gap-6">
                Export as JSX
                <Tooltip text="Determines if icons should be copied/downloaded as SVG (HTML) or JSX (React)" />
              </span>
            </Switch>
            <Switch checked={fillCurrent} onChange={setFillCurrent}>
              <span className="flex flex-justify-start flex-align-center gap-6">
                Use currentColor
                <Tooltip text="Controls whether the exported icon's color should be hard-coded or inherited" />
              </span>
            </Switch>
          </section>

          <section>
            <p className="label">Filters</p>
            <button onClick={toggleShowSidebar}>
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
