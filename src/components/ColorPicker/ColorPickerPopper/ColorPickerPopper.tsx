'use client';

import { Portal, Content } from '@radix-ui/react-popover';
import ColorPickerRangeInput from '../ColorPickerRangeInput';
import { type SliderSetupHookReturn } from '@/hooks/use-input';
import classes from './component.module.css';

export interface PopperProps {
  hue: SliderSetupHookReturn;
  chroma: SliderSetupHookReturn;
  lightness: SliderSetupHookReturn;
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
            label="saturation"
          />
          <ColorPickerRangeInput
            {...restLightnessProps}
            value={lightness}
            onChange={setLightness}
            label="lightness"
          />
        </div>
      </Content>
    </Portal>
  );
}
