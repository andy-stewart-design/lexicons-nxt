import { ComponentProps, useId } from 'react';
import RangeInput from '../RangeInput';
import classes from './component.module.css';

interface InputProps extends ComponentProps<'input'> {
  label: string;
}

export default function ComboNumericInput({ label, ...delegated }: InputProps) {
  const id = useId();
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <div className={classes['container']}>
        <RangeInput {...delegated} id={id} />
        <input {...delegated} type="number" />
      </div>
    </div>
  );
}
