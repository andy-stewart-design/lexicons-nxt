'use client';

import { createContext, ReactNode } from 'react';
import { useSlider, type DelegatedSlideProps, type SliderChangeEvent } from '@hooks/use-input';

interface IconSizeContext {
  size: number;
  setSize: SliderChangeEvent;
  restSizeProps: DelegatedSlideProps;
}

export const IconSizeContext = createContext<IconSizeContext>({
  size: 0,
  setSize: () => {},
  restSizeProps: { min: 0, max: 10, step: 1 },
});

interface ProviderProps {
  children: ReactNode;
}

export default function IconStyleProvider({ children }: ProviderProps) {
  const [size, setSize, restSizeProps] = useSlider(32, 24, 48, 2);

  return (
    <IconSizeContext.Provider value={{ size, setSize, restSizeProps }}>
      {children}
    </IconSizeContext.Provider>
  );
}
