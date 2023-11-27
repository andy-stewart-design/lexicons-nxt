// TODO: State mgmt refactor
// TODO: Search Bar
// TODO: Social (Threads, Twitter, Github, Figma)
// TODO: Pull out button component

import Nav from '@components/Nav';
import Sidebar from '@components/Sidebar';
import IconGallery from '@components/IconGallery';
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
          <IconGallery />
        </MainContent>
        <Toaster />
        <AboutDialog />
      </main>
    </body>
  );
}

// function getBodyStyle(showModal: ModalState) {
//   if (showModal === 'open' || showModal === 'opening') {
//     return {
//       height: '100dvh',
//       overflow: 'hidden',
//     };
//   } else {
//     return {
//       height: 'auto',
//       overflow: 'auto',
//     };
//   }
// }
