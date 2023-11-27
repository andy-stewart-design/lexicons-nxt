import { At, Adjustments, Hamburger } from '@icons/24';
import classes from './component.module.css';
import VisuallyHidden from '../VisuallyHidden';
import LexiconsLogo from './LexiconsLogo';
import SearchInput from './SearchInput';

interface NavProps {
  toggleSidebar: () => void;
  toggleDialog: () => void;
}

export default function Nav({ toggleSidebar, toggleDialog }: NavProps) {
  return (
    <nav className={classes['nav']}>
      <div className={classes['logo-container']}>
        <LexiconsLogo />
      </div>

      <div className={classes['filter-container']}>
        <SearchInput />
        <button onClick={toggleSidebar}>
          <Adjustments />
          <VisuallyHidden>Show/hide filter panel</VisuallyHidden>
        </button>
      </div>

      <div className={classes['contact-container']}>
        {/* <button>
          <At />
          <VisuallyHidden>Follow us on Threads</VisuallyHidden>
        </button> */}
        <button onClick={toggleDialog}>
          <Hamburger />
          <VisuallyHidden>More information</VisuallyHidden>
        </button>
      </div>
    </nav>
  );
}
