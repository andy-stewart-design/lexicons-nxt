import { ComponentProps } from 'react';
import { Copy, Download } from '@icons/20';
import { copySvg, downloadSvg } from '@utils/svg';
import type { IconData, IconStyle } from '@constants/icons';
import classes from './component.module.css';

interface CardProps extends ComponentProps<'div'> {
  icon: IconData;
  iconStyle: IconStyle;
  size: number;
  copyAsJSX: boolean;
  fillCurrent: boolean;
}

export default function IconCard(props: CardProps) {
  const { icon, size, iconStyle, copyAsJSX, fillCurrent } = props;

  return (
    <div className={classes['card']}>
      <div className={classes['icon-container']}>
        <SVG {...props} />
      </div>
      <div className={classes['text-container']}>
        <p className="label">{icon.name}</p>
      </div>
      <div className={classes['button-container']}>
        <button onClick={() => copySvg(icon, size, iconStyle, copyAsJSX, fillCurrent)}>
          <Copy />
          Copy Code
        </button>
        <button onClick={() => downloadSvg(icon, size, iconStyle, copyAsJSX, fillCurrent)}>
          <Download />
          Download
        </button>
      </div>
    </div>
  );
}

function SVG({ icon, iconStyle, size }: CardProps) {
  const showOutline = iconStyle === 'two_tone' || iconStyle === 'outline';

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {iconStyle === 'solid' && icon.path_solid && (
        <path d={icon.path_solid} fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
      )}
      {iconStyle === 'two_tone' && icon.path_tint && (
        <path
          d={icon.path_tint}
          fill="currentColor"
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      )}
      {showOutline && icon.path_outline && (
        <path d={icon.path_outline} fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
      )}
    </svg>
  );
}
