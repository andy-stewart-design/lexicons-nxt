import IconCard from './IconCard';
import { iconStyles } from '@constants/icon-styles';
import classes from './component.module.css';

interface IconGalleryProps {
  iconStyle: string;
  size: number;
}

const iconNumber = 100;

export default function IconGallery({ size, iconStyle }: IconGalleryProps) {
  const selectedIconStyle = iconStyles.filter((style) => style.value === iconStyle);
  const iconStyleLabel = selectedIconStyle.at(0)?.label ?? '';

  return (
    <div className={classes['gallery']}>
      <p className="label" style={{ marginRight: '0.5rem' }}>
        {iconNumber} icons · {iconStyleLabel} · {size} px
      </p>
      {/* <div> */}
      {new Array(100).fill('').map((_, i) => (
        <IconCard size={size} iconStyle={iconStyle} key={i}>
          {i}
        </IconCard>
      ))}
      {/* </div> */}
    </div>
  );
}
