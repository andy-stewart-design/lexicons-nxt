import { useTextInput } from '@hooks/use-input';
import { Search, CloseCircled } from '@icons/20';
import classes from './component.module.css';
import VisuallyHidden from '@/components/VisuallyHidden';

export default function SearchInput() {
  const [value, setValue] = useTextInput('');

  return (
    <div className={`${classes['input']} input-text`}>
      <button className={classes['search']} disabled={!value}>
        <Search />
        <VisuallyHidden>Search</VisuallyHidden>
      </button>
      <input type="text" value={value} onChange={setValue} />
      <button className={classes['close']} disabled={!value} onClick={() => setValue('')}>
        <CloseCircled />
        <VisuallyHidden>Clear text</VisuallyHidden>
      </button>
    </div>
  );
}
