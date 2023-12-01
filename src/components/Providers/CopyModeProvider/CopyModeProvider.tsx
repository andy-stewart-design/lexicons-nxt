'use client';

import { useToggle } from '@/hooks/use-input';
import { createContext, ReactNode } from 'react';

interface CopyModeContext {
  copyAsJSX: boolean;
  setCopyAsJSX: () => void;
  fillCurrent: boolean;
  setFillCurrent: () => void;
}

export const CopyModeContext = createContext<CopyModeContext>({
  copyAsJSX: false,
  setCopyAsJSX: () => {},
  fillCurrent: false,
  setFillCurrent: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ProviderProps) {
  const [copyAsJSX, setCopyAsJSX] = useToggle(false);
  const [fillCurrent, setFillCurrent] = useToggle(false);

  return (
    <CopyModeContext.Provider value={{ copyAsJSX, setCopyAsJSX, fillCurrent, setFillCurrent }}>
      {children}
    </CopyModeContext.Provider>
  );
}
