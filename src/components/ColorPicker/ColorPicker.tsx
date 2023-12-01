'use client';

import { useEffect } from 'react';
import { Root as ColorPickerRoot } from '@radix-ui/react-popover';
import { formatHex } from 'culori';
import ColorPickerInputs from './ColorPickerInputs';
import ColorPickerPopper from './ColorPickerPopper';
import Tooltip from '@components/Tooltip';
import { useSlider } from '@hooks/use-input';
import { getContrast } from '@utils/color-contrast';

export interface ColorPickerProps {
  primaryColor: string;
  secondaryColor: string;
}

export default function ColorPicker() {
  const [hue, setHue, restHueProps] = useSlider(325, 0, 360, 0.1);
  const [chroma, setChroma, restChromaProps] = useSlider(0.33, 0, 0.5, 0.01);
  const [lightness, setLightness, restLightnessProps] = useSlider(68, 0, 100, 0.1);

  useEffect(() => {
    const root = document.documentElement.style;

    const accentColor = `oklch(${lightness}% ${chroma} ${hue})`;
    const accentColorRGB = formatHex(accentColor);
    const interfaceText = getContrast(accentColorRGB!);
    console.log(interfaceText);

    root.setProperty('--hue', String(hue));
    root.setProperty('--chroma', String(chroma));
    root.setProperty('--lightness', `${lightness}%`);
    root.setProperty('--interface-text-color', interfaceText);
  }, [hue, chroma, lightness]);

  return (
    <div className="input-container">
      <ColorPickerRoot>
        <p className="label flex flex-justify-start flex-align-center gap-6">
          Accent Color
          <Tooltip text="Adjust the hue, saturation, and lightness of the icons" />
        </p>
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
