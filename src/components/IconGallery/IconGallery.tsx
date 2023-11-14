import IconCard from './IconCard';
import { type IconData, type IconStyle, iconStyles } from '@constants/icons';
import classes from './component.module.css';

interface IconGalleryProps {
  icons: IconData[];
  iconStyle: IconStyle;
  size: number;
  copyAsJSX: boolean;
}

const iconNumber = 100;

export default function IconGallery({ icons, size, iconStyle, copyAsJSX }: IconGalleryProps) {
  const selectedIconStyle = iconStyles.filter((style) => style.value === iconStyle);
  const iconStyleLabel = selectedIconStyle.at(0)?.label ?? '';

  return (
    <div className={classes['gallery']}>
      <ol className="label">
        <li>
          {iconNumber} {iconStyleLabel} {copyAsJSX ? 'JSX' : 'SVG'} Icons{' '}
        </li>
      </ol>
      {/* <div> */}
      {icons.map((icon, i) => (
        <IconCard key={i} icon={icon} size={size} iconStyle={iconStyle} copyAsJSX={copyAsJSX} />
      ))}
      {/* </div> */}
    </div>
  );
}
