'use client';

import { Portal, Content } from '@radix-ui/react-popover';
import ColorPickerRangeInput from '../ColorPickerRangeInput';
import { type UseSliderReturn } from '@/hooks/use-input';
import classes from './component.module.css';
import ColorPickerPreview from '../ColorPickerPreview';

export interface PopperProps {
  hue: UseSliderReturn;
  chroma: UseSliderReturn;
  lightness: UseSliderReturn;
}

export default function ColorPickerPopper({
  hue: hueProp,
  chroma: chromaProp,
  lightness: lightnessProp,
}: PopperProps) {
  const [hue, setHue, restHueProps] = hueProp;
  const [chroma, setChroma, restChromaProps] = chromaProp;
  const [lightness, setLightness, restLightnessProps] = lightnessProp;

  return (
    <Portal>
      <Content className={classes['container']} sideOffset={8} align="start">
        <div className={classes['slider-container']}>
          <ColorPickerRangeInput {...restHueProps} value={hue} onChange={setHue} label="hue" />
          <ColorPickerRangeInput
            {...restChromaProps}
            value={chroma}
            onChange={setChroma}
            label="chroma"
          />
          <ColorPickerRangeInput
            {...restLightnessProps}
            value={lightness}
            onChange={setLightness}
            label="lightness"
          />
        </div>
        <ColorPickerPreview hue={hue} chroma={chroma} lightness={lightness} />
      </Content>
    </Portal>
  );
}
