import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import IconGallery from '@/components/IconGallery';
import classes from './page.module.css';

export default function Home() {
  return (
    <section className={classes['section']}>
      <Sidebar />
      <IconGallery />
    </section>
  );
}
