'use client';

import { ChevronDown } from '@icons/16';
import * as RadSelect from '@radix-ui/react-select';
import {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  useState,
} from 'react';
import classes from './component.module.css';

interface Props extends ComponentProps<'select'> {
  options: {
    value: string;
    label: string;
  }[];
  defaultValue: string;
}

export default function Select({ options, defaultValue }: Props) {
  const [value, setValue] = useState('outline');

  function handleChange(value: string) {
    setValue(value);
  }

  return (
    <div className="input-container">
      <p className="label">Icon Style</p>
      <RadSelect.Root value={value} defaultValue={defaultValue} onValueChange={handleChange}>
        <RadSelect.Trigger className={classes['base-select']} aria-label="Food">
          <RadSelect.Value placeholder="Select a style" />
          <RadSelect.Icon>
            <ChevronDown />
          </RadSelect.Icon>
        </RadSelect.Trigger>
        <RadSelect.Portal>
          <RadSelect.Content
            className={classes['base-select-content']}
            position="popper"
            sideOffset={8}
            align="start"
          >
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
    <RadSelect.Item className={classes['base-select-item']} {...props} ref={forwardRef}>
      <RadSelect.ItemText>{children}</RadSelect.ItemText>
    </RadSelect.Item>
  );
});

SelectItem.displayName = 'SelectItem';

// 'use client';

// import * as RadSelect from '@radix-ui/react-select';
// import classes from './component.module.css';
// import React, { ForwardRefExoticComponent, RefAttributes, forwardRef } from 'react';

// export default function Select() {
//   return (
//     <RadSelect.Root>
//       <RadSelect.Trigger className={classes['select']}>
//         <RadSelect.Value defaultValue="foo" />
//         <RadSelect.Icon />
//       </RadSelect.Trigger>
//       <RadSelect.Portal>
//         <RadSelect.Content>
//           <SelectItem value="foo">Foo</SelectItem>
//           <SelectItem value="bar">Bar</SelectItem>
//           <SelectItem value="baz">Baz</SelectItem>
//         </RadSelect.Content>
//       </RadSelect.Portal>
//     </RadSelect.Root>
//   );
// }

// const SelectItem: ForwardRefExoticComponent<
//   RadSelect.SelectItemProps & RefAttributes<HTMLDivElement>
// > = forwardRef(({ children, className, ...props }, forwardRef) => {
//   return (
//     <RadSelect.Item className={classes['base-select-item']} {...props} ref={forwardRef}>
//       <RadSelect.ItemText>{children}</RadSelect.ItemText>
//     </RadSelect.Item>
//   );
// });

// SelectItem.displayName = 'SelectItem';
