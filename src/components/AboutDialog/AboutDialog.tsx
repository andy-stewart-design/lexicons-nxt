import { ComponentProps } from 'react';
import Dialog from '@components/Dialog';

type ModalState = 'closed' | 'closing' | 'open' | 'opening';

interface DialogProps extends ComponentProps<'dialog'> {
  showModal: ModalState;
  setShowModal: () => void;
}

export default function AboutDialog({ showModal, setShowModal }: DialogProps) {
  return (
    <Dialog showModal={showModal} setShowModal={setShowModal} title="About">
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
        If you have feedback or would like to contribute to the project, please reach out. While not
        required, attribution is always greatly appreciated.
      </p>
    </Dialog>
  );
}
