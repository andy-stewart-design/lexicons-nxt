import { ChangeEvent, useContext } from 'react';
import RadioGroup, { RadioGroupItem, RadioGroupLabel } from '@components/RadioGroup';
import Tooltip from '@components/Tooltip';
import { ThemeContext } from '@components/ThemeProvider';
import { setCookie } from '@utils/cookies';

export default function ThemeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.value);
    setCookie('theme', e.target.value);
  }

  return (
    <RadioGroup numItems={2}>
      <RadioGroupLabel>
        Background Color{' '}
        <Tooltip text="Set your preference for the application's color theme. Defaults to dark mode." />
      </RadioGroupLabel>
      <RadioGroupItem
        name="theme-switch"
        value="dark"
        checked={theme === 'dark'}
        onChange={handleChange}
        label="Dark"
      />
      <RadioGroupItem
        name="theme-switch"
        value="light"
        checked={theme === 'light'}
        onChange={handleChange}
        label="Light"
      />
    </RadioGroup>
  );
}
