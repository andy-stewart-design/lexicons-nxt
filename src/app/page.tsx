// TODO: Search Bar
// TODO: Social (Threads, Twitter, Github, Figma)
// TODO: Pull out button component

import { Suspense } from 'react';
import Nav from '@components/Nav';
import Sidebar from '@components/Sidebar';
import IconGallery, { Loading } from '@components/IconGallery';
import Toaster from '@components/Toaster';
import AboutDialog from '@components/AboutDialog';
import classes from './page.module.css';
import MainContent from '@/components/MainContent/MainContent';

export default function Home() {
  return (
    <body>
      <main className={classes['main']}>
        <Nav />
        <MainContent>
          <Sidebar />
          <Suspense fallback={<Loading />}>
            <IconGallery />
          </Suspense>
        </MainContent>
        <Toaster />
        <AboutDialog />
      </main>
    </body>
  );
}
