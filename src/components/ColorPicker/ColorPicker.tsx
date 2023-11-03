'use client';

import { Root as ColorPickerRoot } from '@radix-ui/react-popover';
import { ColorPickerTrigger } from './ColorPickerTrigger';
import { ColorPickerPopper } from './ColorPickerPopper';

export interface ColorPickerProps {
  primaryColor: string;
  secondaryColor: string;
}

export default function ColorPicker({ primaryColor, secondaryColor }: ColorPickerProps) {
  return (
    <ColorPickerRoot>
      <ColorPickerTrigger />
      <ColorPickerPopper primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </ColorPickerRoot>
  );
}
