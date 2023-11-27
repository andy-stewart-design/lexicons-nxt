'use client';

import { createContext, type ReactNode } from 'react';
import { useDialog } from '@hooks/use-dialog';
import { ModalState } from '@components/Dialog';

interface AboutModalDisplayContext {
  showModal: ModalState;
  setShowDialog: () => void;
}

export const AboutModalDisplayContext = createContext<AboutModalDisplayContext>({
  showModal: 'closed',
  setShowDialog: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export default function AboutModalDisplayProvider({ children }: ProviderProps) {
  const [showModal, setShowDialog] = useDialog('closed');

  return (
    <AboutModalDisplayContext.Provider value={{ showModal, setShowDialog }}>
      {children}
    </AboutModalDisplayContext.Provider>
  );
}
