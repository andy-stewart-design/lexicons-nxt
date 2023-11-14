import IconCard from './IconCard';
import { type IconData, type IconStyle, iconStyles } from '@constants/icons';
import classes from './component.module.css';

interface IconGalleryProps {
  icons: IconData[];
  iconStyle: IconStyle;
  size: number;
  copyAsJSX: boolean;
  fillCurrent: boolean;
}

const iconNumber = 100;

export default function IconGallery({ icons, ...delegated }: IconGalleryProps) {
  return (
    <div className={classes['gallery']}>
      <p className="label">Displaying {iconNumber} Icons</p>
      {icons.map((icon, i) => (
        <IconCard key={i} icon={icon} {...delegated} />
      ))}
    </div>
  );
}
