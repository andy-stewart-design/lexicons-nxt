'use client';

import Nav from '@components/Nav';
import Sidebar from '@components/Sidebar';
import IconGallery from '@components/IconGallery';
import classes from './page.module.css';
import { useMenuToggle } from '@hooks/use-menu-toggle';

export default function Home() {
  const [showSidebar, toggleShowSidebar, isWidescreen] = useMenuToggle(920);

  const sectionStyle = getComputedStyle(showSidebar, isWidescreen);

  return (
    <main className={classes['main']}>
      {/* <div className={classes['gradient-stripe']} /> */}
      <Nav toggleSidebar={toggleShowSidebar} />
      <section className={classes['section']} style={sectionStyle}>
        <Sidebar isOpen={showSidebar} />
        <IconGallery />
      </section>
    </main>
  );
}

function getComputedStyle(showSidebar: boolean | null, isWidescreen: boolean | null) {
  if (showSidebar === null) {
    return {};
  } else if (showSidebar && isWidescreen) {
    return {};
  } else if (isWidescreen && showSidebar) {
    return { gridTemplateColumns: 'var(--space-344) 1fr' };
  } else {
    return { gridTemplateColumns: '0 1fr' };
  }
}
