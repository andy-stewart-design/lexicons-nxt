import classes from './component.module.css';

interface NavProps {
  toggleSidebar: () => void;
}

export default function Nav({ toggleSidebar }: NavProps) {
  return (
    <nav className={classes['nav']}>
      <button onClick={toggleSidebar}>toggle sidebar</button>
    </nav>
  );
}
