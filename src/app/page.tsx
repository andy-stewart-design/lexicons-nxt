// TODO: Icons
// TODO: SEO Stuff
// TODO: Preserve icon color on export (culori)
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

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: PageProps) {
  const query = typeof searchParams.query === 'string' ? searchParams.query : '';

  return (
    <body>
      <main className={classes['main']}>
        <Nav />
        <MainContent>
          <Sidebar />
          <Suspense fallback={<Loading />}>
            <IconGallery query={query} />
          </Suspense>
        </MainContent>
        <Toaster />
        <AboutDialog />
      </main>
    </body>
  );
}
