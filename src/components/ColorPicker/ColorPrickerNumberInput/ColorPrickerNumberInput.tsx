import VisuallyHidden from '@/components/VisuallyHidden';
import { ComponentProps } from 'react';
import classes from './component.module.css';

interface InputProps extends ComponentProps<'input'> {
  label: string;
}

export default function ColorPrickerNumberInput({ label, ...delegated }: InputProps) {
  return (
    <span className={classes['container']}>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <input {...delegated} type="number" />
    </span>
  );
}
