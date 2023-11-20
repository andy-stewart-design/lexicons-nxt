import { useState, useCallback, useRef } from 'react';
import { ModalState } from '@/components/Dialog';

export type UseDialogReturn = [ModalState, () => void];
export type DialogSetupHook = (initialState?: ModalState) => UseDialogReturn;

export const useDialog: DialogSetupHook = (initialState = 'closed') => {
  const [modalState, setModalState] = useState<ModalState>(initialState);
  const showModalTimer = useRef<NodeJS.Timeout | null>(null);

  const handleSetModalState = useCallback(
    function () {
      if (modalState === 'closed' || modalState === 'closing') {
        setModalState('opening');
        if (showModalTimer.current) clearTimeout(showModalTimer.current);
        showModalTimer.current = setTimeout(() => setModalState('open'), 300);
      } else if (modalState === 'open' || modalState === 'opening') {
        setModalState('closing');
        if (showModalTimer.current) clearTimeout(showModalTimer.current);
        showModalTimer.current = setTimeout(() => setModalState('closed'), 300);
      }
    },
    [modalState]
  );

  return [modalState, handleSetModalState];
};
