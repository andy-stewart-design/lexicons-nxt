import { type ComponentProps, useId } from 'react';
import RangeInput from '@/components/RangeInput';
import classes from './component.module.css';

interface SliderProps extends ComponentProps<'input'> {
  label: string;
}

export default function ColorPickerRangeInput({ label, value, ...delegated }: SliderProps) {
  const id = useId();

  return (
    <div className={classes['slider-group']}>
      <div className={classes['label-wrapper']}>
        <label className="Label" htmlFor={id}>
          {label}
        </label>
        <span className="label">{value}</span>
      </div>
      <RangeInput
        {...delegated}
        value={value}
        type="range"
        id={id}
        className={`${classes['slider']} ${classes[label]}`}
      />
    </div>
  );
}
