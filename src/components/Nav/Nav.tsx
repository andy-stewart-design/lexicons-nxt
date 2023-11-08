import { Dispatch, SetStateAction } from 'react';
import classes from './component.module.css';

interface NavProps {
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function Nav({ toggleSidebar }: NavProps) {
  return (
    <nav className={classes['nav']}>
      <button onClick={() => toggleSidebar((b) => !b)}>toggle sidebar</button>
    </nav>
  );
}
