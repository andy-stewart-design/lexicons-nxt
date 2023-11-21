import IconCard from './IconCard';
import { type IconStyle } from '@constants/icons';
import classes from './component.module.css';
import { useContext } from 'react';
import { IconContext } from '../IconProvider/IconProvider';

interface IconGalleryProps {
  iconStyle: IconStyle;
  size: number;
  copyAsJSX: boolean;
  fillCurrent: boolean;
}

export default function IconGallery({ ...delegated }: IconGalleryProps) {
  const { icons } = useContext(IconContext);

  return (
    <div className={classes['gallery']}>
      <p className="label">Displaying {icons.length} Icons</p>
      {icons.map((icon, i) => (
        <IconCard key={i} icon={icon} {...delegated} />
      ))}
    </div>
  );
}
