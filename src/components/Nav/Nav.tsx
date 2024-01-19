'use client';

import { useContext } from 'react';
import { SidebarDisplayContext } from '@state/SidebarDisplayProvider';
import { AboutDialogDisplayContext } from '@/components/Providers/AboutDialogDisplayProvider';
import LexiconsLogo from './LexiconsLogo';
import SearchInput from './SearchInput';
import VisuallyHidden from '@components/VisuallyHidden';
import { At, Adjustments, Hamburger } from '@icons/24';
import classes from './component.module.css';

export default function Nav() {
  const { toggleShowSidebar } = useContext(SidebarDisplayContext);
  const { setShowDialog } = useContext(AboutDialogDisplayContext);

  return (
    <nav className={classes['nav']}>
      <div className={classes['logo-container']}>
        <LexiconsLogo />
      </div>

      <div className={classes['filter-container']}>
        <SearchInput />
        <button onClick={toggleShowSidebar}>
          <Adjustments />
          <VisuallyHidden>Show/hide filter panel</VisuallyHidden>
        </button>
      </div>

      <div className={classes['contact-container']}>
        {/* <button>
          <At />
          <VisuallyHidden>Follow us on Threads</VisuallyHidden>
        </button> */}
        <button onClick={setShowDialog}>
          <Hamburger />
          <VisuallyHidden>More information</VisuallyHidden>
        </button>
      </div>
    </nav>
  );
}
