import { CSSProperties } from 'react';
import classes from './component.module.css';
import { type Toast } from '@/components/ToastProvider';

interface ToastProps {
  index: number;
  toast: Toast;
  numToasts: number;
  dismissToasts: () => void;
}

export default function Toast({ index, toast, numToasts, dismissToasts }: ToastProps) {
  const toastStyles: CSSProperties = {
    translate: `0 -${index * 15}%`,
    scale: toast.isActive ? `${1 - index * 0.1}` : `${1 - index * 0.1 - 0.2}`,
    zIndex: numToasts - 1 - index + 1,
    transformOrigin: index === 0 ? 'center' : 'top center',
  };

  const buttonStyles = {
    '--overlay-opacity': index * 0.333,
    animationDelay: numToasts === 1 ? '0ms' : '100ms',
    boxShadow: index === 0 ? 'var(--shadow-black-4)' : 'none',
  } as CSSProperties;

  return (
    <li className={classes['toast']} style={toastStyles} data-active={`${toast.isActive}`}>
      <button
        style={buttonStyles}
        onClick={dismissToasts}
        aria-label="Dismiss message"
        aria-live="off"
        disabled={index > 0}
      >
        {toast.message}
      </button>
    </li>
  );
}
