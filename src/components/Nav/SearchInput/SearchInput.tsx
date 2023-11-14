import { useId } from 'react';
import VisuallyHidden from '@/components/VisuallyHidden';
import { useTextInput } from '@hooks/use-input';
// import { Search, CloseCircled } from '@icons/20';
import { Search, Delete } from '@icons/24';
import classes from './component.module.css';

export default function SearchInput() {
  const [value, setValue] = useTextInput('');
  const id = useId();

  return (
    <div className={`${classes['input']} input-text`}>
      <VisuallyHidden>
        <label htmlFor={id}></label>
      </VisuallyHidden>
      <button className={classes['search']} disabled={!value}>
        <Search />
        <VisuallyHidden>Search</VisuallyHidden>
      </button>
      <input type="text" id={id} value={value} onChange={setValue} placeholder="Search icons" />
      <button className={classes['close']} disabled={!value} onClick={() => setValue('')}>
        <Delete />
        <VisuallyHidden>Clear text</VisuallyHidden>
      </button>
    </div>
  );
}
