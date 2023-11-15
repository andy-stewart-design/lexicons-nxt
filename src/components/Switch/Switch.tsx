import { ComponentProps, useId } from 'react';

function Switch({ children, ...delegated }: ComponentProps<'input'>) {
  const id = useId();

  return (
    <div data-switch-group>
      <label htmlFor={id}>{children}</label>
      <input type="checkbox" role="switch" id={id} {...delegated} />
    </div>
  );
}

export default Switch;
