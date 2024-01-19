'use client';

import { type ReactNode } from 'react';
import { Root } from '@radix-ui/react-dialog';

interface ProviderProps {
  children: ReactNode;
}

export default function AboutDilaogDisplayProvider({ children }: ProviderProps) {
  return <Root>{children}</Root>;
}
