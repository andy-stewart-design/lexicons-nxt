// TODO: Icons
// TODO: SEO Stuff
// TODO: Social (Threads, Twitter, Github, Figma)
// TODO: Pull out button component

import { Suspense } from 'react';
import Nav from '@components/Nav';
import MainContent from '@/components/MainContent/MainContent';
import Sidebar from '@components/Sidebar';
import IconGallery, { Loading } from '@components/IconGallery';
import Toaster from '@components/Toaster';
import AboutDialog from '@components/AboutDialog';
import SiteBorder from '@/components/SiteBorder';
import classes from './page.module.css';
import Body from '@/components/Body';

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: PageProps) {
  const query = typeof searchParams.query === 'string' ? searchParams.query : '';

  return (
    <Body>
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
        <SiteBorder />
      </main>
    </Body>
  );
}
