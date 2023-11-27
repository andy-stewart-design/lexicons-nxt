'use client';

import { ComponentProps, useContext } from 'react';
import { SidebarDisplayContext } from '@state/SidebarDisplayProvider';
import classes from './component.module.css';

export default function MainContent({ children }: ComponentProps<'section'>) {
  const { showSidebar, isWidescreen } = useContext(SidebarDisplayContext);

  return (
    <section className={classes['section']} style={getSectionStyle(showSidebar, isWidescreen)}>
      {children}
    </section>
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
