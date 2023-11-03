import { ComponentProps } from 'react';
import classes from './component.module.css';

export default function VisuallyHidden({ children }: ComponentProps<'span'>) {
  return <span className={classes['sr-only']}>{children}</span>;
}
