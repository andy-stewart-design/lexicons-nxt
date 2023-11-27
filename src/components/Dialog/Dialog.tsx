'use client';

import { ComponentProps, useRef } from 'react';
import VisuallyHidden from '@components/VisuallyHidden';
import { useEnhancedDialog } from '@/hooks/use-enhanced-dialog';
import { Close } from '@icons/20';
import classes from './component.module.css';

export type ModalState = 'closed' | 'closing' | 'open' | 'opening';

interface DialogProps extends ComponentProps<'dialog'> {
  showModal: ModalState;
  setShowDialog: () => void;
  title?: string | undefined;
}

export default function Dialog({ children, showModal, setShowDialog, title }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEnhancedDialog({ dialogRef, showModal, setShowDialog });

  return (
    <dialog
      ref={dialogRef}
      onCancel={setShowDialog}
      className={classes['dialog']}
      inert={showModal === 'open' || showModal === 'opening' ? undefined : ''}
      data-state={showModal}
    >
      <div className={classes['close-container']}>
        {title && <p>{title}</p>}
        <button onClick={setShowDialog}>
          <Close />
          <VisuallyHidden>Close modal</VisuallyHidden>
        </button>
      </div>

      {children}
    </dialog>
  );
}
