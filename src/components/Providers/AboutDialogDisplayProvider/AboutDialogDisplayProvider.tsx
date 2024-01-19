'use client';

import { createContext, type ReactNode } from 'react';
import { useDialog } from '@hooks/use-dialog';
import { ModalState } from '@components/Dialog';

interface AboutDialogDisplayContext {
  showDialog: ModalState;
  setShowDialog: () => void;
}

export const AboutDialogDisplayContext = createContext<AboutDialogDisplayContext>({
  showDialog: 'closed',
  setShowDialog: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export default function AboutDilaogDisplayProvider({ children }: ProviderProps) {
  const [showDialog, setShowDialog] = useDialog('closed');

  return (
    <AboutDialogDisplayContext.Provider value={{ showDialog, setShowDialog }}>
      {children}
    </AboutDialogDisplayContext.Provider>
  );
}
