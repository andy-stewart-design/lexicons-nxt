import { useTextInput } from '@hooks/use-input';
import { Search, Close } from '@icons/20';
import classes from './component.module.css';

export default function SearchInput() {
  const [value, setValue] = useTextInput('');

  return (
    <div className={`${classes['input']} input-text`}>
      <button>
        <Search />
      </button>
      <input type="text" value={value} onChange={setValue} />
      <button className={classes['close']} disabled={!value} onClick={() => setValue('')}>
        <Close />
      </button>
    </div>
  );
}
