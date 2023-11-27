'use client';

// TODO: Icon Database
// TODO: Social (Threads, Twitter, Github, Figma)
// TODO: Pull out button component

import { useContext } from 'react';
import Nav from '@components/Nav';
import Sidebar from '@components/Sidebar';
import IconGallery from '@components/IconGallery';
import Toaster from '@components/Toaster';
import AboutDialog from '@components/AboutDialog';
import { ThemeContext } from '@/components/Providers/ThemeProvider';
import { useSlider, useToggle } from '@hooks/use-input';
import { useMenuToggle } from '@hooks/use-menu-toggle';
import { useDialog } from '@hooks/use-dialog';
import classes from './page.module.css';
import { ModalState } from '@/components/Dialog';

export default function Home() {
  const [showSidebar, toggleShowSidebar, isWidescreen] = useMenuToggle(920);
  const [showModal, setShowDialog] = useDialog('closed');

  const [size, setSize, restSizeProps] = useSlider(32, 24, 48, 2);
  const [copyAsJSX, setCopyAsJSX] = useToggle(false);
  const [fillCurrent, setFillCurrent] = useToggle(true);

  const { theme } = useContext(ThemeContext);

  return (
    <body data-theme={theme} style={getBodyStyle(showModal)}>
      <main className={classes['main']}>
        <Nav toggleSidebar={toggleShowSidebar} toggleDialog={setShowDialog} />
        <section className={classes['section']} style={getSectionStyle(showSidebar, isWidescreen)}>
          <Sidebar
            menuProps={[showSidebar, toggleShowSidebar, isWidescreen]}
            sizeProps={[size, setSize, restSizeProps]}
            copyProps={[copyAsJSX, setCopyAsJSX]}
            fillCurrentProps={[fillCurrent, setFillCurrent]}
          />
          <IconGallery size={size} copyAsJSX={copyAsJSX} fillCurrent={fillCurrent} />
        </section>
        <Toaster />
        <AboutDialog showModal={showModal} setShowDialog={setShowDialog} />
      </main>
    </body>
  );
}

function getBodyStyle(showModal: ModalState) {
  if (showModal === 'open' || showModal === 'opening') {
    return {
      height: '100dvh',
      overflow: 'hidden',
    };
  } else {
    return {
      height: 'auto',
      overflow: 'auto',
    };
  }
}

function getSectionStyle(showSidebar: boolean | null, isWidescreen: boolean | null) {
  if (showSidebar === null || (showSidebar && isWidescreen)) {
    return {};
  } else if (isWidescreen && showSidebar) {
    return { gridTemplateColumns: 'var(--space-344) 1fr' };
  } else {
    return { gridTemplateColumns: '0 1fr' };
  }
}
