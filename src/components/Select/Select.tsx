'use client';

import { ComponentProps, ForwardRefExoticComponent, RefAttributes, forwardRef } from 'react';
import * as RadSelect from '@radix-ui/react-select';
import { ChevronDown } from '@icons/16';

interface Props extends ComponentProps<'select'> {
  options: {
    value: string;
    label: string;
  }[];
  value: string;
  onValueChange: (value: string) => void;
}

export default function Select({ value, onValueChange, options }: Props) {
  return (
    <div className="input-container">
      <p className="label">Icon Style</p>
      <RadSelect.Root value={value} onValueChange={onValueChange}>
        <RadSelect.Trigger aria-label="Food">
          <RadSelect.Value placeholder="Select a style" />
          <RadSelect.Icon>
            <ChevronDown />
          </RadSelect.Icon>
        </RadSelect.Trigger>
        <RadSelect.Portal>
          <RadSelect.Content position="popper" sideOffset={8} align="start">
            <RadSelect.Viewport>
              <RadSelect.Group>
                {options.map((option) => (
                  <SelectItem value={option.value} key={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </RadSelect.Group>
            </RadSelect.Viewport>
          </RadSelect.Content>
        </RadSelect.Portal>
      </RadSelect.Root>
    </div>
  );
}

const SelectItem: ForwardRefExoticComponent<
  RadSelect.SelectItemProps & RefAttributes<HTMLDivElement>
> = forwardRef(({ children, className, ...props }, forwardRef) => {
  return (
    <RadSelect.Item {...props} ref={forwardRef}>
      <RadSelect.ItemText>{children}</RadSelect.ItemText>
    </RadSelect.Item>
  );
});

SelectItem.displayName = 'SelectItem';
