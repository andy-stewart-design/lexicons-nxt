// import { useEffect, type RefObject } from 'react';
// import type { ModalState } from '@/components/Dialog';

// interface AnimatedDialogProps {
//   dialogRef: RefObject<HTMLDialogElement>;
//   showModal: ModalState;
//   setShowDialog: () => void;
// }

// export function useEnhancedDialog({ dialogRef, showModal, setShowDialog }: AnimatedDialogProps) {
//   useEffect(() => {
//     if (dialogRef.current === null) return;

//     const dialog = dialogRef.current;
//     if (!dialog) return;

//     function animateClose(dialog: HTMLDialogElement) {
//       const focusableElements = 'button, [href], input, [tabindex="0"]';
//       const firstFocusableElement = dialog.querySelectorAll(focusableElements)[0] as HTMLElement;

//       firstFocusableElement.focus();
//       setShowDialog();
//     }

//     function handleClick(e: MouseEvent) {
//       if (!dialog || showModal !== 'open') return;

//       const { x, y, width, height } = dialog.getBoundingClientRect();
//       const { clientX, clientY } = e;

//       if (clientX === 0 && clientY === 0) return;

//       const backdropClickedX = clientX < x || clientX > x + width;
//       const backdropClickedY = clientY < y || clientY > y + height;

//       if (backdropClickedX || backdropClickedY) animateClose(dialog);
//     }

//     function handleKeydown(e: KeyboardEvent) {
//       if (!dialog) return;

//       if (e.key === 'Escape') {
//         e.preventDefault();
//         animateClose(dialog);
//       }
//     }

//     if (showModal === 'closed' || showModal === 'closing') {
//       dialog.close();
//       dialog.removeEventListener('click', handleClick);
//       dialog.removeEventListener('keydown', handleKeydown);
//     } else if (showModal === 'opening') {
//       dialog.showModal();
//     } else if (showModal == 'open') {
//       dialog.addEventListener('click', handleClick);
//       dialog.addEventListener('keydown', handleKeydown);
//     }

//     return () => {
//       dialog.removeEventListener('click', handleClick);
//       dialog.removeEventListener('keydown', handleKeydown);
//     };
//   }, [dialogRef, showModal, setShowDialog]);
// }
