import { Close } from '@/icons/20';
import Dialog, { CloseButton, Title } from '@components/Dialog';
import VisuallyHidden from '@components/VisuallyHidden';
import classes from './component.module.css';

export default function AboutDialog() {
  return (
    <Dialog title="About Lexicons" className={classes.dialog}>
      <div className={classes.image} />
      <div className={classes.content}>
        <Title>About Lexicons</Title>
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
          If you have feedback or are interested in contributing, please reach out. This project is
          a labor of love, and while not required, attribution is always always appreciated.
        </p>
        <CloseButton className={classes.close}>
          <Close />
          <VisuallyHidden>Close modal</VisuallyHidden>
        </CloseButton>
      </div>
    </Dialog>
  );
}
