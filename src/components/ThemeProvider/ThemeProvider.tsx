'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface ThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContext>({ theme: '', setTheme: () => {} });

interface ProviderProps {
  children: ReactNode;
  theme: string;
}

export default function ThemeProvider({ children, theme: defaultTheme }: ProviderProps) {
  const [theme, setTheme] = useState(defaultTheme);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
