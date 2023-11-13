import { CSSProperties, ComponentProps } from 'react';
import classes from './component.module.css';

interface CardProps extends ComponentProps<'div'> {
  iconStyle: string;
  size: number;
}

export default function IconCard({ iconStyle, size }: CardProps) {
  const style = {
    '--size': `${size}px`,
    '--fill': iconStyle === 'outline' ? 0 : iconStyle === 'solid' ? 1 : 0.4,
  } as CSSProperties;

  return (
    <div className={classes['card']}>
      <div className={classes['icon-container']}>
        <span style={style} />
      </div>
      <div className={classes['text-container']}>
        <p className="label">Icon Name</p>
      </div>
      <div className={classes['button-container']}>
        <button>Copy Code</button>
        <button>Download</button>
      </div>
    </div>
  );
}
