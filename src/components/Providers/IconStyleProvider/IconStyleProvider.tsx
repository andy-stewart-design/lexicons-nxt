'use client';

import { createContext, ReactNode } from 'react';
import { iconStyles, type IconStyle } from '@/constants/icons';
import { useSelect } from '@/hooks/use-input';

interface IconStyleContext {
  iconStyle: IconStyle;
  setIconStyle: (value: string) => void;
}

export const IconStyleContext = createContext<IconStyleContext>({
  iconStyle: iconStyles.at(0)?.value ?? 'monoline',
  setIconStyle: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export default function IconStyleProvider({ children }: ProviderProps) {
  const [iconStyle, setIconStyle] = useSelect(iconStyles.at(0)?.value) as [
    IconStyle,
    (value: string) => void
  ];

  return (
    <IconStyleContext.Provider value={{ iconStyle, setIconStyle }}>
      {children}
    </IconStyleContext.Provider>
  );
}
