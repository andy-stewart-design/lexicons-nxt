'use client';

import { ComponentProps, useContext } from 'react';
import { Copy, Download } from '@icons/20';
import { copySvg, downloadSvg } from '@utils/svg';
import type { IconData, IconStyle } from '@constants/icons';
import classes from './component.module.css';
import { ToastContext } from '@components/ToastProvider';
import { IconStyleContext } from '@state/IconStyleProvider';
import { IconSizeContext } from '@state/IconSizeProvider';
import { CopyModeContext } from '@state/CopyModeProvider';

interface CardProps extends ComponentProps<'div'> {
  icon: IconData;
}

export default function IconCard(props: CardProps) {
  const { icon } = props;
  const { iconStyle } = useContext(IconStyleContext);
  const { size } = useContext(IconSizeContext);
  const { addToast } = useContext(ToastContext);
  const { copyAsJSX, fillCurrent } = useContext(CopyModeContext);

  function handleCopy() {
    copySvg(icon, size, iconStyle, copyAsJSX, fillCurrent);
    addToast(`${copyAsJSX ? 'JSX' : 'SVG'} copied to clipboard`);
  }

  function handleDownload() {
    downloadSvg(icon, size, iconStyle, copyAsJSX, fillCurrent);
    addToast(`${copyAsJSX ? 'JSX' : 'SVG'} successfully downloaded`);
  }

  return (
    <div className={classes['card']}>
      <div className={classes['icon-container']}>
        <SVG iconStyle={iconStyle} size={size} {...props} />
      </div>
      <div className={classes['text-container']}>
        <p className="label">{icon.display_name}</p>
      </div>
      <div className={classes['button-container']}>
        <button onClick={handleCopy}>
          <Copy />
          Copy Code
        </button>
        <button onClick={handleDownload}>
          <Download />
          Download
        </button>
      </div>
    </div>
  );
}

interface SVGProps {
  icon: IconData;
  size: number;
  iconStyle: IconStyle;
}

function SVG({ icon, iconStyle, size }: SVGProps) {
  const showMonoline = iconStyle === 'two_tone' || iconStyle === 'monoline';

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {iconStyle === 'solid' && icon.path_solid && (
        <path d={icon.path_solid} fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
      )}
      {iconStyle === 'two_tone' && icon.path_two_tone && (
        <path
          d={icon.path_two_tone}
          fill="currentColor"
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      )}
      {showMonoline && icon.path_monoline && (
        <path d={icon.path_monoline} fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
      )}
    </svg>
  );
}
