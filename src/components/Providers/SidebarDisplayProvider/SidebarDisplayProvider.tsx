'use client';

import { createContext, type ReactNode } from 'react';
import { useMenuToggle } from '@hooks/use-menu-toggle';

interface SidebarDisplayContext {
  showSidebar: boolean | null;
  toggleShowSidebar: () => void;
  isWidescreen: boolean | null;
}

export const SidebarDisplayContext = createContext<SidebarDisplayContext>({
  showSidebar: null,
  toggleShowSidebar: () => {},
  isWidescreen: null,
});

interface ProviderProps {
  children: ReactNode;
}

export default function SidebarDisplayProvider({ children }: ProviderProps) {
  const [showSidebar, toggleShowSidebar, isWidescreen] = useMenuToggle(920);

  return (
    <SidebarDisplayContext.Provider value={{ showSidebar, toggleShowSidebar, isWidescreen }}>
      {children}
    </SidebarDisplayContext.Provider>
  );
}
