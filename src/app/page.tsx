'use client';

// TODO: Toast messages
// TODO: Icon Database
// TODO: Social (Threads, Twitter, Github, Figma)
// TODO: Pull out button component

import { useContext, useRef, useState } from 'react';
import Nav from '@components/Nav';
import Sidebar from '@components/Sidebar';
import IconGallery from '@components/IconGallery';
import { ThemeContext } from '@components/ThemeProvider';
import AboutDialog from '@components/AboutDialog';
import { useSelect, useSlider, useToggle } from '@hooks/use-input';
import { useMenuToggle } from '@hooks/use-menu-toggle';
import type { IconData, IconStyle } from '@constants/icons';
import classes from './page.module.css';

const icon: IconData = {
  id: 1,
  name: 'Mic Off',
  path_outline:
    'M18.75 11.875C18.75 13.0475 18.461 14.1538 17.9506 15.1222L16.8255 13.9971C17.0985 13.347 17.25 12.63 17.25 11.875V11H18.75V11.875ZM15.75 12C15.75 12.2851 15.7182 12.5627 15.6579 12.8295L14.25 11.4216V5C14.25 3.75736 13.2426 2.75 12 2.75C10.7574 2.75 9.75 3.75736 9.75 5V6.92157L8.25 5.42157V5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V12ZM12 15.75C12.2851 15.75 12.5627 15.7182 12.8295 15.6579L8.25 11.0784V12C8.25 14.0711 9.92893 15.75 12 15.75ZM15.1365 17.9649L14.0121 16.8405C13.3915 17.1045 12.7116 17.25 12 17.25C9.11501 17.25 6.75 14.8582 6.75 11.875V11H5.25V11.875C5.25 15.401 7.86376 18.3277 11.25 18.7081V21.25H8V22.75H16V21.25H12.75V18.7081C13.6046 18.6121 14.4099 18.354 15.1365 17.9649ZM1.46967 2.53033L21.4697 22.5303L22.5303 21.4697L2.53033 1.46967L1.46967 2.53033Z',
  path_tint:
    'M14.9954 12.167C14.9985 12.1117 15 12.056 15 12V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V6.17157L14.9954 12.167Z',
  path_solid:
    'M17.9506 15.1222C18.461 14.1538 18.75 13.0475 18.75 11.875V11H17.25V11.875C17.25 12.63 17.0985 13.347 16.8255 13.9971L17.9506 15.1222ZM15.6579 12.8295C15.7182 12.5627 15.75 12.2851 15.75 12V5C15.75 2.92893 14.0711 1.25 12 1.25C9.92894 1.25 8.25 2.92893 8.25 5V5.42157L9 6.17157L9.75 6.92157L14.25 11.4216L14.9954 12.167L15.6579 12.8295ZM12.8295 15.6579C12.5627 15.7182 12.2851 15.75 12 15.75C9.92894 15.75 8.25 14.0711 8.25 12V11.0784L12.8295 15.6579ZM14.0121 16.8405L15.1365 17.9649C14.4099 18.354 13.6046 18.6121 12.75 18.7081V21.25H16V22.75H8V21.25H11.25V18.7081C7.86376 18.3277 5.25 15.401 5.25 11.875V11H6.75V11.875C6.75 14.8582 9.11501 17.25 12 17.25C12.7116 17.25 13.3915 17.1045 14.0121 16.8405ZM21.4697 22.5303L1.46967 2.53033L2.53033 1.46967L22.5303 21.4697L21.4697 22.5303Z',
};
const icons: IconData[] = new Array(100).fill(icon);

type ModalState = 'closed' | 'closing' | 'open' | 'opening';

export default function Home() {
  const [showSidebar, toggleShowSidebar, isWidescreen] = useMenuToggle(920);
  const [showModal, setShowModal] = useState<ModalState>('closed');
  const showModalTimer = useRef<NodeJS.Timeout | null>(null);

  const [size, setSize, restSizeProps] = useSlider(32, 24, 48, 2);
  const [iconStyle, setIconStyle] = useSelect('outline') as [IconStyle, (value: string) => void];
  const [copyAsJSX, setCopyAsJSX] = useToggle(false);
  const [fillCurrent, setFillCurrent] = useToggle(true);

  const { theme } = useContext(ThemeContext);

  const sectionStyle = getSectionStyle(showSidebar, isWidescreen);

  function handleSetShowModal() {
    if (showModal === 'closed' || showModal === 'closing') {
      setShowModal('opening');
      if (showModalTimer.current) clearTimeout(showModalTimer.current);
      showModalTimer.current = setTimeout(() => setShowModal('open'), 300);
    } else if (showModal === 'open' || showModal === 'opening') {
      setShowModal('closing');
      if (showModalTimer.current) clearTimeout(showModalTimer.current);
      showModalTimer.current = setTimeout(() => setShowModal('closed'), 300);
    }
  }

  return (
    <body data-theme={theme}>
      <main className={classes['main']}>
        {/* <div className={classes['gradient-stripe']} /> */}
        <Nav toggleSidebar={toggleShowSidebar} toggleDialog={handleSetShowModal} />
        <section className={classes['section']} style={sectionStyle}>
          <Sidebar
            menuProps={[showSidebar, toggleShowSidebar, isWidescreen]}
            sizeProps={[size, setSize, restSizeProps]}
            iconStyleProps={[iconStyle, setIconStyle]}
            copyProps={[copyAsJSX, setCopyAsJSX]}
            fillCurrentProps={[fillCurrent, setFillCurrent]}
          />
          <IconGallery
            icons={icons}
            iconStyle={iconStyle}
            size={size}
            copyAsJSX={copyAsJSX}
            fillCurrent={fillCurrent}
          />
        </section>
        <AboutDialog showModal={showModal} setShowModal={handleSetShowModal} />
      </main>
    </body>
  );
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
