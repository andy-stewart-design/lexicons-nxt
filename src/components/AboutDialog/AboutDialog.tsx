'use client';

import { useContext } from 'react';
import Dialog from '@components/Dialog';
import { AboutDialogDisplayContext } from '@/components/Providers/AboutDialogDisplayProvider';

export default function AboutDialog() {
  const { showDialog, setShowDialog } = useContext(AboutDialogDisplayContext);

  return (
    <Dialog showModal={showDialog} setShowDialog={setShowDialog} title="About Lexicons">
      <p>
        Lexicons is an open-source icon set created by{' '}
        <a href="https://www.andystewart.design/" target="_blank">
          Andy Stewart
        </a>
        , an interactive designer based in Brooklyn, NY. The icons are completely free to use and
        designed to be pixel-perfect-ish (because we all know perfection is an illusion and all
        systems have compromises).
      </p>
      <p>
        If you have feedback or are interested in contributing, please reach out. This project is a
        labor of love, and while not required, attribution is always always appreciated.
      </p>
    </Dialog>
  );
}
