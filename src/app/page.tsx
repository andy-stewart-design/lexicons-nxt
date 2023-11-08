'use client';

import { useState } from 'react';
import Nav from '@components/Nav';
import Sidebar from '@components/Sidebar';
import IconGallery from '@components/IconGallery';
import classes from './page.module.css';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className={classes['section']}>
      {/* <div className={classes['gradient-stripe']} /> */}
      <Nav toggleSidebar={setIsSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      <IconGallery />
    </main>
  );
}
