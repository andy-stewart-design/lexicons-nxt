import { ComponentProps, RefObject, useEffect, useRef } from 'react';
import VisuallyHidden from '@components/VisuallyHidden';
import { Close } from '@icons/20';
import classes from './component.module.css';

type ModalState = 'closed' | 'closing' | 'open' | 'opening';

interface DialogProps extends ComponentProps<'dialog'> {
  showModal: ModalState;
  setShowModal: () => void;
  title?: string | undefined;
}

export default function Dialog({ children, showModal, setShowModal, title }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useAnimatedDialog({ dialogRef, showModal, setShowModal });

  return (
    <dialog
      ref={dialogRef}
      onCancel={setShowModal}
      className={classes['dialog']}
      inert={showModal ? undefined : ''}
      data-state={showModal}
    >
      <div className={classes['close-container']}>
        {title && <p>{title}</p>}
        <button onClick={setShowModal}>
          <Close />
          <VisuallyHidden>Close modal</VisuallyHidden>
        </button>
      </div>

      {children}
    </dialog>
  );
}

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

interface AnimatedDialogProps {
  dialogRef: RefObject<HTMLDialogElement>;
  showModal: ModalState;
  setShowModal: () => void;
}

function useAnimatedDialog({ dialogRef, showModal, setShowModal }: AnimatedDialogProps) {
  useEffect(() => {
    if (dialogRef.current === null) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    function animateClose(dialog: HTMLDialogElement) {
      const focusableElements = 'button, [href], input, [tabindex="0"]';
      const firstFocusableElement = dialog.querySelectorAll(focusableElements)[0] as HTMLElement;

      firstFocusableElement.focus();
      setShowModal();
    }

    function handleClick(e: MouseEvent) {
      if (!dialog || showModal !== 'open') return;

      const { x, y, width, height } = dialog.getBoundingClientRect();
      const { clientX, clientY } = e;

      if (clientX === 0 && clientY === 0) return;

      const backdropClickedX = clientX < x || clientX > x + width;
      const backdropClickedY = clientY < y || clientY > y + height;

      if (backdropClickedX || backdropClickedY) animateClose(dialog);
    }

    function handleKeydown(e: KeyboardEvent) {
      if (!dialog) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        animateClose(dialog);
      }
    }

    if (showModal === 'closed' || showModal === 'closing') {
      dialog.close();
      dialog.removeEventListener('click', handleClick);
      dialog.removeEventListener('keydown', handleKeydown);
    } else if (showModal === 'opening') {
      dialog.showModal();
    } else if (showModal == 'open') {
      dialog.addEventListener('click', handleClick);
      dialog.addEventListener('keydown', handleKeydown);
    }

    return () => {
      dialog.removeEventListener('click', handleClick);
      dialog.removeEventListener('keydown', handleKeydown);
    };
  }, [dialogRef, showModal, setShowModal]);
}
