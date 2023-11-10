import { useTextInput } from '@hooks/use-input';
import { Search, CloseCircled } from '@icons/20';
import classes from './component.module.css';

export default function SearchInput() {
  const [value, setValue] = useTextInput('');

  return (
    <div className={`${classes['input']} input-text`}>
      <button className={classes['search']} disabled={!value}>
        <Search />
      </button>
      <input type="text" value={value} onChange={setValue} />
      <button className={classes['close']} disabled={!value} onClick={() => setValue('')}>
        <CloseCircled />
      </button>
    </div>
  );
}
