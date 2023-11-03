'use client';

import { useSlider } from '@/hooks/use-input';
import { Portal, Content } from '@radix-ui/react-popover';
import classes from './styles.module.css';
import ColorPickerSlider from '../ColorPickerSlider';
import { useEffect } from 'react';

export interface ColorPickerProps {
  primaryColor: string;
  secondaryColor: string;
}

export function ColorPickerPopper({ primaryColor, secondaryColor }: ColorPickerProps) {
  const [hue, setHue, restHueProps] = useSlider(200, 0, 360, 0.1);
  const [chroma, setChroma, restChromaProps] = useSlider(0.4, 0, 0.5, 0.01);
  const [lightness, setLightness, restLightnessProps] = useSlider(85, 0, 100, 0.1);

  useEffect(() => {
    const backgroundOKLCH = `${lightness}% ${chroma} ${hue}`;
    const analogousChroma = chroma < 0.3 ? chroma : 0.3;
    const analogousLightness = lightness < 50 ? lightness : 50;
    const analogousOKLCH = `${analogousLightness}% ${analogousChroma} ${hue + 60}`;

    const root = document.documentElement.style;
    root.setProperty(primaryColor, backgroundOKLCH);
    root.setProperty(secondaryColor, analogousOKLCH);
    root.setProperty('--hue', String(hue));
    root.setProperty('--lightness', `${lightness}%`);
  }, [hue, chroma, lightness, primaryColor, secondaryColor]);

  return (
    <Portal>
      <Content className={classes['container']} sideOffset={8} align="start">
        <div className={classes['slider-container']}>
          <ColorPickerSlider {...restHueProps} value={hue} onChange={setHue} label="hue" />
          <ColorPickerSlider
            {...restChromaProps}
            value={chroma}
            onChange={setChroma}
            label="saturation"
          />
          <ColorPickerSlider
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
