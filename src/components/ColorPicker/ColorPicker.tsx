'use client';

import { useEffect } from 'react';
import { Root as ColorPickerRoot } from '@radix-ui/react-popover';
import ColorPickerInputs from './ColorPickerInputs';
import ColorPickerPopper from './ColorPickerPopper';
import { useSlider } from '@/hooks/use-input';

export interface ColorPickerProps {
  primaryColor: string;
  secondaryColor: string;
}

export default function ColorPicker({ primaryColor, secondaryColor }: ColorPickerProps) {
  console.log('picker rendering');

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
    <div className="input-container">
      <ColorPickerRoot>
        <p className="label">Accent Color</p>
        <ColorPickerInputs
          hue={[hue, setHue, restHueProps]}
          chroma={[chroma, setChroma, restChromaProps]}
          lightness={[lightness, setLightness, restLightnessProps]}
        />
        <ColorPickerPopper
          hue={[hue, setHue, restHueProps]}
          chroma={[chroma, setChroma, restChromaProps]}
          lightness={[lightness, setLightness, restLightnessProps]}
        />
      </ColorPickerRoot>
    </div>
  );
}
