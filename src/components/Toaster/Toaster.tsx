import { useContext } from 'react';
import { ToastContext } from '@components/ToastProvider';
import Toast from '@components/Toaster/Toast';
import classes from './component.module.css';

export default function Toaster() {
  const { toasts, dismissToasts } = useContext(ToastContext);

  return (
    <ul className={classes['toaster']} role="region" aria-live="polite" aria-label="Notification">
      {toasts.map((toast, index) => (
        <Toast
          key={toast.id}
          toast={toast}
          index={index}
          numToasts={toasts.length}
          dismissToasts={dismissToasts}
        />
      ))}
    </ul>
  );
}
