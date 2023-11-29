'use client';

import { ChangeEvent, useId } from 'react';
import { useRouter } from 'next/navigation';
import VisuallyHidden from '@/components/VisuallyHidden';
import { useTextInput } from '@hooks/use-input';
import { Search, Delete } from '@icons/24';
import debounce from 'just-debounce-it';
import classes from './component.module.css';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function SearchInput() {
  const [value, setValue] = useTextInput('');
  const router = useRouter();
  const id = useId();

  function handleChange(inputValue: string) {
    const newValue = inputValue;
    setValue(newValue);

    const searchParams = new URLSearchParams();
    if (newValue !== '') searchParams.set('query', newValue);
    else searchParams.delete('query');

    debouncedSubmit(searchParams, router);
  }

  return (
    <div className={`${classes['input']} input-text`}>
      <VisuallyHidden>
        <label htmlFor={id}></label>
      </VisuallyHidden>
      <button className={classes['search']} onClick={() => handleChange(value)} disabled={!value}>
        <Search />
        <VisuallyHidden>Search</VisuallyHidden>
      </button>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search icons"
      />
      <button className={classes['close']} disabled={!value} onClick={() => handleChange('')}>
        <Delete />
        <VisuallyHidden>Clear text</VisuallyHidden>
      </button>
    </div>
  );
}

const debouncedSubmit = debounce((params: URLSearchParams, router: AppRouterInstance) => {
  router.push(`/?${params}`, { scroll: false });
}, 300);
