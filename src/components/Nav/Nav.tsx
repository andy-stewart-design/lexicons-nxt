import { At, Adjustments, Hamburger } from '@icons/24';
import classes from './component.module.css';
import VisuallyHidden from '../VisuallyHidden';

interface NavProps {
  toggleSidebar: () => void;
}

export default function Nav({ toggleSidebar }: NavProps) {
  return (
    <nav className={classes['nav']}>
      <div className={classes['logo-container']}>
        <div className={classes['logo']} />
      </div>

      <div className={classes['filter-container']}>
        <input placeholder="Search icons" type="text" />
        <button onClick={toggleSidebar}>
          <Adjustments />
          <VisuallyHidden>Show/hide filter panel</VisuallyHidden>
        </button>
      </div>

      <div className={classes['contact-container']}>
        <button>
          <At />
          <VisuallyHidden>View our Threads account</VisuallyHidden>
        </button>
        <button>
          <Hamburger />
          <VisuallyHidden>More information</VisuallyHidden>
        </button>
      </div>
    </nav>
  );
}
