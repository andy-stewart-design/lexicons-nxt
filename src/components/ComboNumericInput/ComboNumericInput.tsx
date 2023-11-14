import { ComponentProps, useId } from 'react';
import RangeInput from '../RangeInput';
import classes from './component.module.css';
import Tooltip from '../Tooltip';

interface InputProps extends ComponentProps<'input'> {
  label: string;
}

export default function ComboNumericInput({ label, ...delegated }: InputProps) {
  const id = useId();
  return (
    <div className="input-container">
      <label htmlFor={id} className="flex flex-justify-start flex-align-center gap-6">
        {label}
        <Tooltip text="Adjusts the rendered size of the icon" width={20} position="top" />
      </label>
      <div className={classes['container']}>
        <RangeInput {...delegated} id={id} />
        <input {...delegated} type="number" />
      </div>
    </div>
  );
}
