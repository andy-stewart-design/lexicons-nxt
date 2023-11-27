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
      <div className="flex flex-align-start flex-justify-between">
        <p className="label">Showing {icons.length} Icons</p>
        <p className="label">v.0.1</p>
      </div>
      {icons.map((icon, i) => (
        <IconCard key={i} icon={icon} {...delegated} />
      ))}
    </div>
  );
}
