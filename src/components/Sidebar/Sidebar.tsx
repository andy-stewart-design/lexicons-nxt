import ColorPicker from '@components/ColorPicker';
import classes from './styles.module.css';

export default function Sidebar() {
  return (
    <div className={classes['sidebar']}>
      <div className={classes['sticky']}>
        <ColorPicker primaryColor="--accent-color-oklch" secondaryColor="--analogous-color-oklch" />
      </div>
    </div>
  );
}
