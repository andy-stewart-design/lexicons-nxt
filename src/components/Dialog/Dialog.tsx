'use client';

import { ComponentProps } from 'react';
import { Portal, Overlay, Content, Close as RadixClose } from '@radix-ui/react-dialog';
import classes from './component.module.css';

interface DialogProps extends ComponentProps<'div'> {
  title: string;
}

export default function Dialog({ children, title, className }: DialogProps) {
  return (
    <Portal>
      <Overlay className={classes.overlay} />
      <Content className={`${classes.content} ${className}`}>{children}</Content>
    </Portal>
  );
}

export function CloseButton({ children, ...delegated }: ComponentProps<'button'>) {
  return (
    <RadixClose asChild>
      <button {...delegated}>{children}</button>
    </RadixClose>
  );
}

export { Title } from '@radix-ui/react-dialog';
