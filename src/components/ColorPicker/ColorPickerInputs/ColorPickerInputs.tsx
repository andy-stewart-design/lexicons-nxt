import { type UseSliderReturn } from '@/hooks/use-input';
import { ColorPickerTrigger } from '../ColorPickerTrigger';
import classes from './component.module.css';
import VisuallyHidden from '@/components/VisuallyHidden';
import ColorPrickerNumberInput from '@components/ColorPicker/ColorPrickerNumberInput';

export interface InputsProps {
  hue: UseSliderReturn;
  chroma: UseSliderReturn;
  lightness: UseSliderReturn;
}

export default function ColorPickerInputs({
  hue: hueProp,
  chroma: chromaProp,
  lightness: lightnessProp,
}: InputsProps) {
  const [hue, setHue, restHueProps] = hueProp;
  const [chroma, setChroma, restChromaProps] = chromaProp;
  const [lightness, setLightness, restLightnessProps] = lightnessProp;

  return (
    <div className={classes['container']}>
      <ColorPickerTrigger />
      <ColorPrickerNumberInput
        label="Hue"
        value={hue}
        onChange={setHue}
        {...restHueProps}
        step={10}
      />

      <ColorPrickerNumberInput
        label="Hue"
        value={chroma}
        onChange={setChroma}
        {...restChromaProps}
      />
      <ColorPrickerNumberInput
        label="Hue"
        value={lightness}
        onChange={setLightness}
        {...restLightnessProps}
        step={1}
      />
    </div>
  );
}
