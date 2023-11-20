'use client';

import { createContext, useState, useEffect, type ReactNode } from 'react';

export interface Toast {
  message: string;
  id: string;
  timeout: number;
  isActive: boolean;
}

export interface ToastContext {
  toasts: Array<Toast>;
  addToast: (message: string) => void;
  dismissToasts: () => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastContext = createContext<ToastContext>({
  toasts: [],
  addToast: () => {},
  dismissToasts: () => {},
});

export default function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Array<Toast>>([]);

  function addToast(message: string) {
    const id = crypto.randomUUID();

    const newToast: Toast = {
      id,
      message,
      timeout: 3000,
      isActive: true,
    };

    setToasts((all) => [newToast, ...all]);

    setTimeout(() => dismissToast(id), newToast.timeout);
  }

  function dismissToast(id: string) {
    setToasts((currentToats) =>
      currentToats.map((toast) => {
        if (toast.id === id) {
          const newToast = { ...toast, isActive: false };
          return newToast;
        } else return toast;
      })
    );

    setTimeout(() => setToasts((toasts) => toasts.filter((t) => t.id !== id)), 500);
  }

  function dismissToasts() {
    setToasts((currentToats) =>
      currentToats.map((toast) => {
        const newToast = { ...toast, isActive: false };
        return newToast;
      })
    );

    setTimeout(() => setToasts([]), 500);
  }

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key !== 'Escape') return;
      dismissToasts();
    }

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToasts }}>
      {children}
    </ToastContext.Provider>
  );
}
