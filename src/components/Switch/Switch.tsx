import { ComponentProps, useId } from 'react';
import classes from './component.module.css';

function Switch({ children, className, ...delegated }: ComponentProps<'input'>) {
  const id = useId();
  const appliedClassname = `${classes['toggle']} ${className}`.trim();

  return (
    <label htmlFor={id} className={appliedClassname}>
      {children}
      <input type="checkbox" role="switch" id={id} {...delegated} />
    </label>
  );
}

export default Switch;
