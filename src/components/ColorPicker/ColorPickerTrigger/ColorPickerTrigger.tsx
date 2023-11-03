'use client';

import { Trigger } from '@radix-ui/react-popover';
import classes from './component.module.css';
import VisuallyHidden from '@/components/VisuallyHidden';

export function ColorPickerTrigger() {
  return (
    <Trigger asChild>
      <button className={classes['trigger']} aria-label="Update dimensions">
        <VisuallyHidden>Update accent color</VisuallyHidden>
      </button>
    </Trigger>
  );
}
