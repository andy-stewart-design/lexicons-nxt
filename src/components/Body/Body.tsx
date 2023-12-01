import { ComponentProps } from 'react';
import classes from './component.module.css';

export default function Body({ children }: ComponentProps<'body'>) {
  return <body className={classes['body']}>{children}</body>;
}
