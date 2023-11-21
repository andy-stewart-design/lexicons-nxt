'use client';

import { createContext, ReactNode } from 'react';
import { type IconData } from '@constants/icons';

interface IconContext {
  icons: IconData[];
}

export const IconContext = createContext<IconContext>({ icons: [] });

interface ProviderProps {
  children: ReactNode;
  icons: IconData[];
}

export default function IconProvider({ children, icons }: ProviderProps) {
  return <IconContext.Provider value={{ icons }}>{children}</IconContext.Provider>;
}
